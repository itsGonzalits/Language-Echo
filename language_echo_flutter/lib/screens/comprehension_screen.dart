import 'package:flutter/material.dart';
import 'package:just_audio/just_audio.dart';
import 'package:provider/provider.dart';
import '../models/story.dart';
import '../theme/app_theme.dart';
import '../services/tts_service.dart';
import '../state/app_state.dart';
import '../widgets/pulsing_orb.dart';

class ComprehensionScreen extends StatefulWidget {
  final Story story;
  final String Function(String) promptForGender;
  final VoidCallback onBack;

  const ComprehensionScreen({
    super.key,
    required this.story,
    required this.promptForGender,
    required this.onBack,
  });

  @override
  State<ComprehensionScreen> createState() => _ComprehensionScreenState();
}

class _ComprehensionScreenState extends State<ComprehensionScreen> {
  int _questionIndex = 0;
  bool _isPulsating = false;
  bool _isPlaying = false;
  int? _selectedIndex;
  bool _hasAnswered = false;
  String? _error;
  int _playToken = 0;

  @override
  void initState() {
    super.initState();
    _playQuestion(0);
  }

  @override
  void dispose() {
    sharedPlayer.stop();
    super.dispose();
  }

  Future<void> _playQuestion(int index) async {
    final token = ++_playToken;
    setState(() {
      _isPulsating = true;
      _isPlaying = false;
      _error = null;
    });
    sharedPlayer.stop();

    // Debounce: skip API call if user navigated away quickly
    await Future.delayed(const Duration(milliseconds: 350));
    if (!mounted || _playToken != token) return;

    try {
      final question = widget.story.questions[index];
      final gender = index % 2 == 0 ? 'female' : 'male';
      final path = await prepareSingleTTS(
        question.questionText,
        gender,
        widget.promptForGender(gender),
        withDelay: false,
      );
      if (!mounted || _playToken != token) {
        return;
      }

      await sharedPlayer.setFilePath(path);
      setState(() {
        _isPulsating = false;
        _isPlaying = true;
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

  void _selectAnswer(int index) {
    if (_hasAnswered) return;
    setState(() {
      _selectedIndex = index;
      _hasAnswered = true;
    });
  }

  Widget _buildOptionText(String text, Color textColor, bool hasAnswered) {
    final parts = text.split('\n');
    if (parts.length == 3) {
      // Use sentence-reveal color scheme when unanswered; shift to state color when answered
      final c1 = hasAnswered ? textColor : AppTheme.textPrimary;
      final c2 = hasAnswered ? textColor.withOpacity(0.7) : AppTheme.violet;
      final c3 =
          hasAnswered ? textColor.withOpacity(0.55) : AppTheme.textSecondary;
      return Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(parts[0],
              style: TextStyle(
                  color: c1, fontWeight: FontWeight.bold, fontSize: 20)),
          const SizedBox(height: 2),
          Text(parts[1], style: TextStyle(color: c2, fontSize: 13)),
          const SizedBox(height: 2),
          Text(parts[2],
              style: TextStyle(
                  color: c3, fontSize: 13, fontStyle: FontStyle.italic)),
        ],
      );
    }
    return Text(text,
        style: TextStyle(
            color: textColor, fontWeight: FontWeight.bold, fontSize: 14));
  }

  void _nextQuestion() {
    if (_questionIndex < widget.story.questions.length - 1) {
      final next = _questionIndex + 1;
      setState(() {
        _questionIndex = next;
        _hasAnswered = false;
        _selectedIndex = null;
      });
      _playQuestion(next);
    } else {
      widget.onBack();
    }
  }

  @override
  Widget build(BuildContext context) {
    final isSp = context.watch<AppStateNotifier>().activeTab == LanguageTab.ingles;
    final question = widget.story.questions[_questionIndex];
    final total = widget.story.questions.length;

    return Scaffold(
      backgroundColor: AppTheme.bgDeep,
      body: SafeArea(
        child: Column(
          children: [
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 16),
              child: Row(
                children: [
                  _BackBtn(onTap: () {
                    sharedPlayer.stop();
                    widget.onBack();
                  }),
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
                                      if (_questionIndex != i) {
                                        setState(() {
                                          _questionIndex = i;
                                          _hasAnswered = false;
                                          _selectedIndex = null;
                                        });
                                        _playQuestion(i);
                                      }
                                    },
                                    behavior: HitTestBehavior.opaque,
                                    child: Container(
                                      padding: const EdgeInsets.symmetric(
                                          vertical: 8, horizontal: 1),
                                      child: AnimatedContainer(
                                        duration:
                                            const Duration(milliseconds: 300),
                                        width: i == _questionIndex ? 40 : 24,
                                        height: 6,
                                        decoration: BoxDecoration(
                                          color: i == _questionIndex
                                              ? AppTheme.violet
                                              : (i < _questionIndex
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
            Expanded(
              child: SingleChildScrollView(
                padding: const EdgeInsets.symmetric(horizontal: 24),
                child: Column(
                  children: [
                    const SizedBox(height: 16),
                    PulsingOrb(
                        isPulsating: _isPulsating,
                        isPlaying: _isPlaying,
                        size: 128),
                    const SizedBox(height: 16),
                    Text(
                      isSp ? 'Pregunta ${_questionIndex + 1} / $total' : 'Challenge ${_questionIndex + 1} / $total',
                      style: const TextStyle(
                          color: AppTheme.violet,
                          fontSize: 10,
                          fontWeight: FontWeight.bold,
                          letterSpacing: 4),
                    ),
                    const SizedBox(height: 24),
                    // Options
                    ...question.options.asMap().entries.map((entry) {
                      final i = entry.key;
                      final opt = entry.value;
                      Color bg = AppTheme.bgCard.withOpacity(0.2);
                      Color border = AppTheme.borderMuted;
                      Color textColor = AppTheme.textSecondary;

                      if (_hasAnswered) {
                        if (opt.isCorrect) {
                          bg = const Color(0x1A10b981);
                          border = AppTheme.emerald.withOpacity(0.5);
                          textColor = AppTheme.emerald;
                        } else if (_selectedIndex == i) {
                          bg = AppTheme.roseDim;
                          border = AppTheme.rose.withOpacity(0.5);
                          textColor = AppTheme.rose;
                        } else {
                          bg = Colors.transparent;
                          border = AppTheme.borderMuted.withOpacity(0.2);
                          textColor = AppTheme.textMuted.withOpacity(0.4);
                        }
                      }

                      return Padding(
                        padding: const EdgeInsets.only(bottom: 12),
                        child: GestureDetector(
                          onTap: () => _selectAnswer(i),
                          child: AnimatedContainer(
                            duration: const Duration(milliseconds: 300),
                            padding: const EdgeInsets.all(18),
                            decoration: BoxDecoration(
                              color: bg,
                              borderRadius: BorderRadius.circular(16),
                              border: Border.all(color: border),
                            ),
                            child: Row(
                              children: [
                                Expanded(
                                    child: _buildOptionText(
                                        opt.text, textColor, _hasAnswered)),
                                if (_hasAnswered && opt.isCorrect)
                                  const Icon(Icons.check,
                                      color: Color(0xFF10b981), size: 20),
                              ],
                            ),
                          ),
                        ),
                      );
                    }),
                    // Question translation (slides + fades in after answering, below all options)
                    AnimatedSize(
                      duration: const Duration(milliseconds: 350),
                      curve: Curves.easeOut,
                      child: _hasAnswered
                          ? AnimatedOpacity(
                              duration: const Duration(milliseconds: 400),
                              opacity: 1.0,
                              child: Container(
                                width: double.infinity,
                                padding: const EdgeInsets.all(16),
                                margin: const EdgeInsets.only(bottom: 12),
                                decoration: BoxDecoration(
                                  color: AppTheme.bgCard.withOpacity(0.3),
                                  borderRadius: BorderRadius.circular(16),
                                  border: Border.all(
                                      color: AppTheme.borderMuted
                                          .withOpacity(0.4)),
                                ),
                                child: Column(
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  children: [
                                    Text(question.questionText,
                                        style: const TextStyle(
                                            color: AppTheme.textPrimary,
                                            fontSize: 15)),
                                    if (question.questionPinyin.isNotEmpty) ...[
                                      const SizedBox(height: 3),
                                      Text(question.questionPinyin,
                                          style: const TextStyle(
                                              color: AppTheme.violet,
                                              fontSize: 11,
                                              fontWeight: FontWeight.bold,
                                              letterSpacing: 2)),
                                    ],
                                    const SizedBox(height: 4),
                                    Text('"${question.questionTranslation}"',
                                        style: const TextStyle(
                                            color: AppTheme.textMuted,
                                            fontSize: 12,
                                            fontStyle: FontStyle.italic)),
                                  ],
                                ),
                              ),
                            )
                          : const SizedBox.shrink(),
                    ),
                    // Post-answer button
                    if (_hasAnswered) ...[
                      const SizedBox(height: 12),
                      GestureDetector(
                        onTap: _nextQuestion,
                        child: Container(
                          width: double.infinity,
                          height: 56,
                          decoration: BoxDecoration(
                            color: AppTheme.violet,
                            borderRadius: BorderRadius.circular(18),
                          ),
                          child: Center(
                            child: Text(
                              _questionIndex == total - 1
                                  ? (isSp ? 'TERMINAR LECCIÓN' : 'FINISH LESSON')
                                  : (isSp ? 'SIGUIENTE PREGUNTA' : 'NEXT QUESTION'),
                              style: const TextStyle(
                                  color: Colors.white,
                                  fontWeight: FontWeight.bold,
                                  fontSize: 12,
                                  letterSpacing: 2),
                            ),
                          ),
                        ),
                      ),
                      const SizedBox(height: 32),
                    ],
                    if (!_hasAnswered && !_isPlaying && !_isPulsating) ...[
                      const SizedBox(height: 16),
                      GestureDetector(
                        onTap: () => _playQuestion(_questionIndex),
                        child: Row(
                          mainAxisAlignment: MainAxisAlignment.center,
                          children: [
                            const Icon(Icons.refresh,
                                color: AppTheme.textMuted, size: 16),
                            const SizedBox(width: 6),
                            Text(isSp ? 'REPETIR AUDIO' : 'REPLAY AUDIO',
                                style: const TextStyle(
                                    color: AppTheme.textMuted,
                                    fontSize: 10,
                                    fontWeight: FontWeight.bold,
                                    letterSpacing: 3)),
                          ],
                        ),
                      ),
                    ],
                  ],
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
