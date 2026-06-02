import 'package:flutter/material.dart';
import 'package:flutter/gestures.dart'; // Add this for TapGestureRecognizer
import 'package:just_audio/just_audio.dart';
import 'package:string_similarity/string_similarity.dart';
import '../models/story.dart';
import '../state/app_state.dart';
import '../theme/app_theme.dart';
import '../services/tts_service.dart';
import '../widgets/pulsing_orb.dart';
import '../widgets/common_widgets.dart';
import 'comprehension_screen.dart';
import 'package:provider/provider.dart';

class SentenceListenScreen extends StatefulWidget {
  final Story story;
  final String Function(String) promptForGender;
  final VoidCallback onBack;

  const SentenceListenScreen({
    super.key,
    required this.story,
    required this.promptForGender,
    required this.onBack,
  });

  @override
  State<SentenceListenScreen> createState() => _SentenceListenScreenState();
}

class _SentenceListenScreenState extends State<SentenceListenScreen> {
  int _sentenceIndex = 0;
  bool _isPulsating = false;
  bool _isPlaying = false;
  bool _showTranslation = false;
  String? _error;
  double _currentTime = 0;
  double _duration = 0;
  // Debounce + cancellation
  int _playToken = 0;

  @override
  void initState() {
    super.initState();
    _playSentence(0);
  }

  @override
  void dispose() {
    for (final r in _recognizers) {
      r.dispose();
    }
    _recognizers.clear();
    sharedPlayer.stop();
    super.dispose();
  }

  Future<void> _playSentence(int index) async {
    // Increment token — any in-flight request with old token will abort
    final token = ++_playToken;
    setState(() {
      _isPulsating = true;
      _isPlaying = false;
      _showTranslation = false;
      _error = null;
      _currentTime = 0;
      _duration = 0;
    });
    sharedPlayer.stop();

    // Debounce: wait 400ms before hitting the API
    await Future.delayed(const Duration(milliseconds: 400));
    if (!mounted || _playToken != token) return; // cancelled by newer tap

    try {
      final sentence = widget.story.sentences[index];
      final gender = index % 2 == 0 ? 'female' : 'male';
      final path = await prepareSingleTTS(
        sentence.targetText,
        gender,
        widget.promptForGender(gender),
        withDelay: true,
      );
      if (!mounted || _playToken != token) {
        return;
      }

      await sharedPlayer.setFilePath(path);
      setState(() {
        _isPulsating = false;
        _isPlaying = true;
        _duration = (sharedPlayer.duration?.inMilliseconds ?? 0) / 1000;
      });

      sharedPlayer.positionStream.listen((pos) {
        if (mounted) setState(() => _currentTime = pos.inMilliseconds / 1000);
      });
      sharedPlayer.playerStateStream.listen((s) {
        if (mounted && s.processingState == ProcessingState.completed) {
          setState(() => _isPlaying = false);
        }
      });

      await sharedPlayer.play();
    } catch (e) {
      if (!mounted) return;
      setState(() {
        _isPulsating = false;
        _error = e.toString();
      });
    }
  }

  // Retain recognizers to avoid memory leak
  final List<TapGestureRecognizer> _recognizers = [];

  void _showWordDialog(Word w, AppStateNotifier appState) {
    final isSp = appState.activeTab == LanguageTab.ingles;
    showDialog(
      context: context,
      builder: (ctx) => AlertDialog(
        backgroundColor: AppTheme.bgCard,
        shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(16),
            side: const BorderSide(color: AppTheme.borderViolet)),
        title: Text(w.hanzi,
            textAlign: TextAlign.center,
            style: const TextStyle(
                color: AppTheme.textPrimary,
                fontWeight: FontWeight.bold,
                fontSize: 24)),
        content: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            Text(w.meaning,
                textAlign: TextAlign.center,
                style: const TextStyle(
                    color: AppTheme.textSecondary,
                    fontStyle: FontStyle.italic,
                    fontSize: 18)),
            const SizedBox(height: 24),
            GestureDetector(
              onTap: appState.savedWords.contains(w)
                  ? null
                  : () {
                      appState.saveWord(w);
                      Navigator.pop(ctx);
                    },
              child: Container(
                width: double.infinity,
                padding: const EdgeInsets.symmetric(vertical: 12),
                decoration: BoxDecoration(
                  color: appState.savedWords.contains(w)
                      ? AppTheme.emerald.withOpacity(0.2)
                      : AppTheme.violet,
                  borderRadius: BorderRadius.circular(12),
                ),
                child: Text(
                  appState.savedWords.contains(w)
                      ? (isSp ? 'GUARDADO' : 'SAVED')
                      : (isSp ? 'GUARDAR PALABRA' : 'SAVE WORD'),
                  textAlign: TextAlign.center,
                  style: TextStyle(
                    color: appState.savedWords.contains(w)
                        ? AppTheme.emerald
                        : Colors.white,
                    fontWeight: FontWeight.bold,
                    letterSpacing: 1,
                  ),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }

  List<InlineSpan> _buildInteractiveSpans(
      String targetText, List<Word> words, AppStateNotifier appState,
      {required double fontSize, required FontWeight fontWeight, bool matchPinyin = false}) {
    List<InlineSpan> spans = [];
    String remaining = targetText;

    for (final w in words) {
      final target = (matchPinyin ? w.pinyin : w.hanzi).trim();
      if (target.isEmpty) continue;

      String lowerRemaining = remaining.toLowerCase();
      String lowerTarget = target.toLowerCase();

      // Strip leading/trailing punctuation from the target to match effectively
      final cleanTarget = lowerTarget.replaceAll(
          RegExp(
              r'^[^a-z0-9\u00C0-\u024F\u4E00-\u9FA5]+|[^a-z0-9\u00C0-\u024F\u4E00-\u9FA5]+$'),
          '');
      if (cleanTarget.isEmpty) continue;

      // Sliding window on the raw string for character-level fuzzy match
      int bestMatchIdx = -1;
      int bestMatchLen = 0;
      double highestScore = 0.0;

      int targetLen = cleanTarget.length;
      int minLen = (targetLen * 0.7).floor();
      int maxLen = (targetLen * 1.5).ceil();

      for (int i = 0; i <= lowerRemaining.length - minLen; i++) {
        for (int len = minLen;
            len <= maxLen && i + len <= lowerRemaining.length;
            len++) {
          final rawWindow = lowerRemaining.substring(i, i + len);

          // Only consider windows that start and end on word boundaries
          bool validStart = i == 0 ||
              RegExp(r'[^a-zA-Z\u00C0-\u024F\u4E00-\u9FA5]')
                  .hasMatch(lowerRemaining[i - 1]);
          bool validEnd = (i + len == lowerRemaining.length) ||
              RegExp(r'[^a-zA-Z\u00C0-\u024F\u4E00-\u9FA5]')
                  .hasMatch(lowerRemaining[i + len]);

          if (!validStart || !validEnd) continue;

          final window = rawWindow.trim();
          final score = cleanTarget.similarityTo(window);
          if (score > highestScore && score >= 0.5) {
            highestScore = score;
            bestMatchIdx = i;
            bestMatchLen = len;
          }
        }
      }

      final idx = bestMatchIdx != -1
          ? bestMatchIdx
          : lowerRemaining.indexOf(cleanTarget);
      final matchLen = bestMatchIdx != -1 ? bestMatchLen : cleanTarget.length;

      if (idx != -1) {
        if (idx > 0) {
          spans.add(TextSpan(text: remaining.substring(0, idx)));
        }

        final wordStr = remaining.substring(idx, idx + matchLen);
        final isMandarin = appState.activeTab == LanguageTab.mandarin;

        // Use a perfectly matching TextSpan with an underline to identify interactivity
        final recognizer = TapGestureRecognizer()
          ..onTap = () => _showWordDialog(w, appState);
        _recognizers.add(recognizer);

        spans.add(TextSpan(
          text: wordStr,
          style: TextStyle(
            // Exact same color so there's no visual disruption
            color: matchPinyin ? AppTheme.violet : AppTheme.textPrimary,
            fontWeight:
                fontWeight, // PERFECT PIXEL MATCH to surrounding sentence
          ),
          recognizer: recognizer,
        ));

        remaining = remaining.substring(idx + matchLen);
      }
    }
    if (remaining.isNotEmpty) {
      spans.add(TextSpan(text: remaining));
    }
    return spans;
  }

  void _next() {
    if (_sentenceIndex < widget.story.sentences.length - 1) {
      final next = _sentenceIndex + 1;
      setState(() => _sentenceIndex = next);
      _playSentence(next);
    } else {
      // Go to comprehension
      sharedPlayer.stop();
      Navigator.of(context).pushReplacement(MaterialPageRoute(
        builder: (_) => ComprehensionScreen(
          story: widget.story,
          promptForGender: widget.promptForGender,
          onBack: widget.onBack,
        ),
      ));
    }
  }

  void _prev() {
    if (_sentenceIndex > 0) {
      final prev = _sentenceIndex - 1;
      setState(() => _sentenceIndex = prev);
      _playSentence(prev);
    }
  }

  @override
  Widget build(BuildContext context) {
    for (final r in _recognizers) {
      r.dispose();
    }
    _recognizers.clear();

    final appState = context.watch<AppStateNotifier>();
    final isSp = appState.activeTab == LanguageTab.ingles;
    final sentence = widget.story.sentences[_sentenceIndex];
    final total = widget.story.sentences.length;

    return Scaffold(
      backgroundColor: AppTheme.bgDeep,
      body: SafeArea(
        child: Column(
          children: [
            // Header
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 16),
              child: Row(
                children: [
                  _BackBtn(onTap: () {
                    sharedPlayer.stop();
                    widget.onBack();
                  }),
                  // Dot indicators
                  Expanded(
                    child: Align(
                      alignment: Alignment.centerRight,
                      child: SingleChildScrollView(
                        scrollDirection: Axis.horizontal,
                        child: Row(
                          mainAxisAlignment: MainAxisAlignment.end,
                          children: List.generate(
                              total,
                              (i) => GestureDetector(
                                    onTap: () {
                                      if (_sentenceIndex != i) {
                                        final target = i;
                                        setState(() => _sentenceIndex = target);
                                        _playSentence(target);
                                      }
                                    },
                                    behavior: HitTestBehavior.opaque,
                                    child: Container(
                                      padding: const EdgeInsets.symmetric(
                                          vertical: 8, horizontal: 1),
                                      child: AnimatedContainer(
                                        duration:
                                            const Duration(milliseconds: 300),
                                        width: i == _sentenceIndex ? 40 : 24,
                                        height: 6,
                                        decoration: BoxDecoration(
                                          color: i == _sentenceIndex
                                              ? AppTheme.violet
                                              : (i < _sentenceIndex
                                                  ? AppTheme.violetDim
                                                  : AppTheme.borderMuted),
                                          borderRadius:
                                              BorderRadius.circular(3),
                                        ),
                                      ),
                                    ),
                                  )),
                        ),
                      ),
                    ),
                  ),
                ],
              ),
            ),
            if (_error != null) _ErrorBanner(message: _error!),
            // Scrollable body with content + controls
            Expanded(
              child: LayoutBuilder(
                builder: (context, constraints) => SingleChildScrollView(
                  physics: const BouncingScrollPhysics(),
                  child: ConstrainedBox(
                    constraints:
                        BoxConstraints(minHeight: constraints.maxHeight),
                    child: IntrinsicHeight(
                      child: Column(
                        children: [
                          Expanded(
                            child: Column(
                              mainAxisAlignment: MainAxisAlignment.center,
                              children: [
                                const SizedBox(height: 16),
                                PulsingOrb(
                                    isPulsating: _isPulsating,
                                    isPlaying: _isPlaying,
                                    size: 160),
                                const SizedBox(height: 8),
                                Text(
                                  isSp ? 'Oración ${_sentenceIndex + 1} / $total' : 'Sentence ${_sentenceIndex + 1} / $total',
                                  style: const TextStyle(
                                      color: AppTheme.textMuted,
                                      fontSize: 10,
                                      fontWeight: FontWeight.bold,
                                      letterSpacing: 5),
                                ),
                                if (_duration > 0) ...[
                                  const SizedBox(height: 16),
                                  Padding(
                                    padding: const EdgeInsets.symmetric(
                                        horizontal: 24),
                                    child: ProgressBar(
                                        currentTime: _currentTime,
                                        duration: _duration,
                                        onSeek: (s) => sharedPlayer.seek(
                                            Duration(
                                                milliseconds:
                                                    (s * 1000).round()))),
                                  ),
                                ],
                                const SizedBox(height: 16),
                                // Translation card
                                if (_showTranslation)
                                  Padding(
                                    padding: const EdgeInsets.symmetric(
                                        horizontal: 24),
                                    child: Container(
                                      padding: const EdgeInsets.all(28),
                                      decoration: BoxDecoration(
                                        color: const Color(0xFF0d1221),
                                        borderRadius: BorderRadius.circular(40),
                                        border: Border.all(
                                            color: AppTheme.borderMuted
                                                .withOpacity(0.3)),
                                      ),
                                      child: Column(
                                        children: [
                                          if (sentence.words.isEmpty) ...[
                                            Text(sentence.targetText,
                                                style: const TextStyle(
                                                    color: AppTheme.textPrimary,
                                                    fontSize: 26,
                                                    fontWeight: FontWeight.w300,
                                                    letterSpacing: 1),
                                                textAlign: TextAlign.center),
                                            const SizedBox(height: 12),
                                          ],
                                          // Word chips
                                          if (context
                                                  .read<AppStateNotifier>()
                                                  .activeTab ==
                                              LanguageTab.mandarin) ...[
                                            if (sentence.words.isNotEmpty)
                                              Text.rich(
                                                TextSpan(
                                                  style: const TextStyle(
                                                      color:
                                                          AppTheme.textPrimary,
                                                      fontSize: 26,
                                                      fontWeight:
                                                          FontWeight.w300,
                                                      letterSpacing: 1),
                                                  children:
                                                      _buildInteractiveSpans(
                                                          sentence.targetText,
                                                          sentence.words,
                                                          appState,
                                                          fontSize: 26,
                                                          fontWeight:
                                                              FontWeight.w300),
                                                ),
                                                textAlign: TextAlign.center,
                                              ),
                                            const SizedBox(height: 12),
                                            Text.rich(
                                              TextSpan(
                                                style: const TextStyle(
                                                    color: AppTheme.violet,
                                                    fontSize: 16,
                                                    letterSpacing: 0.5),
                                                children: _buildInteractiveSpans(
                                                    sentence.pinyin,
                                                    sentence.words,
                                                    appState,
                                                    fontSize: 16,
                                                    fontWeight: FontWeight.normal,
                                                    matchPinyin: true),
                                              ),
                                              textAlign: TextAlign.center,
                                            ),
                                          ] else ...[
                                            // For English and Spanish, rendering rich text interactive words
                                            Text.rich(
                                              TextSpan(
                                                style: const TextStyle(
                                                    color: AppTheme.textPrimary,
                                                    fontSize: 26,
                                                    fontWeight: FontWeight.w300,
                                                    letterSpacing: 1),
                                                children:
                                                    _buildInteractiveSpans(
                                                        sentence.targetText,
                                                        sentence.words,
                                                        appState,
                                                        fontSize: 26,
                                                        fontWeight:
                                                            FontWeight.w300),
                                              ),
                                              textAlign: TextAlign.center,
                                            ),
                                          ],
                                          const SizedBox(height: 12),
                                          Text(sentence.translation,
                                              style: const TextStyle(
                                                  color: AppTheme.textSecondary,
                                                  fontSize: 16),
                                              textAlign: TextAlign.center),
                                        ],
                                      ),
                                    ),
                                  ),
                              ],
                            ),
                          ),
                          const SizedBox(height: 24),
                          // Controls
                          Padding(
                            padding: const EdgeInsets.only(
                                left: 24, right: 24, bottom: 32),
                            child: Column(
                              children: [
                                // Reveal Text button — always shown, dimmed while audio is active
                                Opacity(
                                  opacity:
                                      (_isPulsating || _isPlaying) ? 0.35 : 1.0,
                                  child: GestureDetector(
                                    onTap: (_isPulsating || _isPlaying)
                                        ? null
                                        : () => setState(() =>
                                            _showTranslation =
                                                !_showTranslation),
                                    child: Container(
                                      padding: const EdgeInsets.symmetric(
                                          horizontal: 24, vertical: 10),
                                      decoration: BoxDecoration(
                                        color: _showTranslation
                                            ? AppTheme.bgCard
                                            : AppTheme.violetDim,
                                        borderRadius: BorderRadius.circular(50),
                                        border: Border.all(
                                          color: _showTranslation
                                              ? AppTheme.borderMuted
                                              : AppTheme.violetBorder,
                                        ),
                                      ),
                                      child: Text(
                                        _showTranslation
                                            ? (isSp ? 'OCULTAR TEXTO' : 'HIDE TEXT')
                                            : (isSp ? 'MOSTRAR TEXTO' : 'REVEAL TEXT'),
                                        style: TextStyle(
                                          color: _showTranslation
                                              ? AppTheme.textMuted
                                              : AppTheme.violet,
                                          fontSize: 12,
                                          fontWeight: FontWeight.bold,
                                          letterSpacing: 2,
                                        ),
                                      ),
                                    ),
                                  ),
                                ),
                                const SizedBox(height: 16),
                                Row(
                                  children: [
                                    _NavBtn(
                                        icon: Icons.chevron_left,
                                        onTap: _prev,
                                        dim: _sentenceIndex == 0),
                                    const SizedBox(width: 12),
                                    Expanded(
                                      child: GestureDetector(
                                        onTap: () =>
                                            _playSentence(_sentenceIndex),
                                        child: Container(
                                          height: 56,
                                          decoration: BoxDecoration(
                                              color: AppTheme.bgCard
                                                  .withOpacity(0.2),
                                              borderRadius:
                                                  BorderRadius.circular(24),
                                              border: Border.all(
                                                  color: AppTheme.borderMuted
                                                      .withOpacity(0.5))),
                                          child: Row(
                                            mainAxisAlignment:
                                                MainAxisAlignment.center,
                                            children: [
                                              const Icon(Icons.refresh,
                                                  color: AppTheme.violet,
                                                  size: 20),
                                              const SizedBox(width: 8),
                                              Text(isSp ? 'REPETIR' : 'REPEAT',
                                                  style: const TextStyle(
                                                      color:
                                                          AppTheme.textPrimary,
                                                      fontWeight:
                                                          FontWeight.bold,
                                                      fontSize: 11,
                                                      letterSpacing: 2)),
                                            ],
                                          ),
                                        ),
                                      ),
                                    ),
                                    const SizedBox(width: 12),
                                    _NavBtn(
                                        icon: Icons.chevron_right,
                                        onTap: _next,
                                        accent: true),
                                  ],
                                ),
                              ],
                            ),
                          ),
                        ],
                      ),
                    ),
                  ),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class _BackBtn extends StatelessWidget {
  final VoidCallback onTap;
  const _BackBtn({required this.onTap});
  @override
  Widget build(BuildContext context) => GestureDetector(
        onTap: onTap,
        child: Container(
          padding: const EdgeInsets.all(10),
          decoration: BoxDecoration(
              color: AppTheme.bgCard,
              borderRadius: BorderRadius.circular(16),
              border: Border.all(color: AppTheme.borderMuted)),
          child: const Icon(Icons.chevron_left,
              color: AppTheme.textSecondary, size: 22),
        ),
      );
}

class _NavBtn extends StatelessWidget {
  final IconData icon;
  final VoidCallback onTap;
  final bool dim;
  final bool accent;
  const _NavBtn(
      {required this.icon,
      required this.onTap,
      this.dim = false,
      this.accent = false});
  @override
  Widget build(BuildContext context) => GestureDetector(
        onTap: dim ? null : onTap,
        child: Container(
          width: 56,
          height: 56,
          decoration: BoxDecoration(
            color: accent ? AppTheme.violetDim : Colors.transparent,
            borderRadius: BorderRadius.circular(16),
            border: Border.all(
                color: accent ? AppTheme.violetBorder : AppTheme.borderMuted),
          ),
          child: Icon(icon,
              color: dim
                  ? AppTheme.textMuted.withOpacity(0.3)
                  : (accent ? AppTheme.violet : AppTheme.textSecondary),
              size: 30),
        ),
      );
}

class _ErrorBanner extends StatelessWidget {
  final String message;
  const _ErrorBanner({required this.message});
  @override
  Widget build(BuildContext context) => Padding(
        padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
        child: Container(
          padding: const EdgeInsets.all(12),
          decoration: BoxDecoration(
              color: Colors.amber.withOpacity(0.1),
              borderRadius: BorderRadius.circular(16),
              border: Border.all(color: Colors.amber.withOpacity(0.3))),
          child: Text(message,
              style: const TextStyle(color: Colors.amber, fontSize: 12)),
        ),
      );
}
