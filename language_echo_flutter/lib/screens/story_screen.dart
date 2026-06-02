import 'package:flutter/material.dart';
import 'package:just_audio/just_audio.dart';
import 'package:provider/provider.dart';
import '../models/story.dart';
import '../theme/app_theme.dart';
import '../services/tts_service.dart';
import '../state/app_state.dart';
import '../widgets/pulsing_orb.dart';
import '../widgets/common_widgets.dart';
import 'sentence_listen_screen.dart';

class StoryListScreen extends StatelessWidget {
  final List<Story> stories;
  final VoidCallback onBack;
  final String Function(String) promptForGender;
  final VoidCallback onVocab;

  const StoryListScreen({
    super.key,
    required this.stories,
    required this.onBack,
    required this.promptForGender,
    required this.onVocab,
  });

  @override
  Widget build(BuildContext context) {
    final isSp = context.watch<AppStateNotifier>().activeTab == LanguageTab.ingles;
    return Scaffold(
      backgroundColor: AppTheme.bgDeep,
      body: SafeArea(
        child: Padding(
          padding: const EdgeInsets.all(24),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Row(
                children: [
                  _BackButton(onTap: onBack),
                  const SizedBox(width: 16),
                  Text(isSp ? 'Lecciones' : 'Lessons',
                      style: const TextStyle(
                          color: AppTheme.textPrimary,
                          fontSize: 28,
                          fontWeight: FontWeight.w900,
                          fontStyle: FontStyle.italic)),
                  const Spacer(),
                  IconButton(
                    icon: const Icon(Icons.book_outlined,
                        color: AppTheme.textSecondary),
                    onPressed: onVocab,
                  ),
                ],
              ),
              const SizedBox(height: 8),
              const Divider(color: AppTheme.borderMuted, height: 24),
              Expanded(
                child: ListView.separated(
                  itemCount: stories.length,
                  separatorBuilder: (_, __) => const SizedBox(height: 16),
                  itemBuilder: (context, i) {
                    final story = stories[i];
                    return _StoryCard(
                      story: story,
                      onTap: () => Navigator.of(context).push(MaterialPageRoute(
                        builder: (_) => FullListenScreen(
                          story: story,
                          promptForGender: promptForGender,
                          onBack: () => Navigator.of(context).pop(),
                        ),
                      )),
                    );
                  },
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}

class _StoryCard extends StatelessWidget {
  final Story story;
  final VoidCallback onTap;

  const _StoryCard({required this.story, required this.onTap});

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: onTap,
      child: Container(
        padding: const EdgeInsets.all(20),
        decoration: BoxDecoration(
          color: AppTheme.bgCard.withOpacity(0.2),
          borderRadius: BorderRadius.circular(24),
          border: Border.all(color: AppTheme.borderMuted),
        ),
        child: Row(
          children: [
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(story.title,
                      style: const TextStyle(
                          color: AppTheme.textPrimary,
                          fontSize: 18,
                          fontWeight: FontWeight.bold)),
                  const SizedBox(height: 4),
                  Text(story.description,
                      style: const TextStyle(
                          color: AppTheme.textSecondary, fontSize: 13)),
                ],
              ),
            ),
            Container(
              padding: const EdgeInsets.all(10),
              decoration: BoxDecoration(
                shape: BoxShape.circle,
                color: AppTheme.violetDim,
                border: Border.all(color: AppTheme.violetBorder),
              ),
              child: const Icon(Icons.chevron_right,
                  color: AppTheme.violet, size: 20),
            ),
          ],
        ),
      ),
    );
  }
}

// ─── Full Listen Screen ───────────────────────────────────────────────────────

class FullListenScreen extends StatefulWidget {
  final Story story;
  final String Function(String) promptForGender;
  final VoidCallback onBack;

  const FullListenScreen({
    super.key,
    required this.story,
    required this.promptForGender,
    required this.onBack,
  });

  @override
  State<FullListenScreen> createState() => _FullListenScreenState();
}

class _FullListenScreenState extends State<FullListenScreen> {
  bool _isPulsating = false;
  bool _isPlaying = false;
  bool _isDone = false;
  String? _error;
  double _currentTime = 0;
  double _duration = 0;
  List<SegmentTiming> _timings = [];
  int _currentSentenceIndex = 0;

  @override
  void initState() {
    super.initState();
    _playFull();
  }

  @override
  void dispose() {
    sharedPlayer.stop();
    super.dispose();
  }

  Future<void> _playFull() async {
    setState(() {
      _isPulsating = true;
      _isPlaying = false;
      _isDone = false;
      _error = null;
      _currentTime = 0;
      _currentSentenceIndex = 0;
    });
    sharedPlayer.stop();

    try {
      final segments = widget.story.sentences
          .asMap()
          .entries
          .map((e) => (
                text: e.value.targetText,
                gender: e.key % 2 == 0 ? 'female' : 'male'
              ))
          .toList();

      final resultTimings = await prepareConversationTTS(
        segments,
        widget.promptForGender('female'),
        storyId: widget.story.id,
      );

      if (!mounted) return;
      _timings = resultTimings;

      setState(() {
        _isPulsating = false;
        _isPlaying = true;
        _duration = sharedPlayer.duration?.inMilliseconds.toDouble() ?? 0;
        _duration = _duration / 1000;
      });

      sharedPlayer.positionStream.listen((pos) {
        if (!mounted) return;
        final sec = pos.inMilliseconds / 1000;
        setState(() => _currentTime = sec);
        // Sync sentence from timings
        for (final t in _timings) {
          if (sec >= t.start && sec <= t.end) {
            if (_currentSentenceIndex != t.index) {
              setState(() => _currentSentenceIndex = t.index);
            }
            break;
          }
        }
      });

      sharedPlayer.playerStateStream.listen((state) {
        if (!mounted) return;
        if (state.processingState == ProcessingState.completed) {
          setState(() {
            _isPlaying = false;
            _isDone = true;
          });
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

  void _seek(double secs) {
    sharedPlayer.seek(Duration(milliseconds: (secs * 1000).round()));
  }

  @override
  Widget build(BuildContext context) {
    final isSp = context.watch<AppStateNotifier>().activeTab == LanguageTab.ingles;
    return Scaffold(
      backgroundColor: AppTheme.bgDeep,
      body: SafeArea(
        child: Column(
          children: [
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 16),
              child: Row(
                children: [
                  _BackButton(onTap: () {
                    sharedPlayer.stop();
                    widget.onBack();
                  }),
                ],
              ),
            ),
            if (_error != null)
              Padding(
                padding: const EdgeInsets.all(16),
                child: Container(
                  padding: const EdgeInsets.all(12),
                  decoration: BoxDecoration(
                    color: Colors.amber.withOpacity(0.1),
                    borderRadius: BorderRadius.circular(16),
                    border: Border.all(color: Colors.amber.withOpacity(0.3)),
                  ),
                  child: Text(_error!,
                      style:
                          const TextStyle(color: Colors.amber, fontSize: 12)),
                ),
              ),
            Expanded(
              child: SingleChildScrollView(
                physics: const BouncingScrollPhysics(),
                child: Padding(
                  padding: const EdgeInsets.symmetric(vertical: 24.0),
                  child: Column(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      PulsingOrb(
                        isPulsating: _isPulsating,
                        isPlaying: _isPlaying,
                        size: 192,
                      ),
                      const SizedBox(height: 32),
                      Text(widget.story.title,
                          textAlign: TextAlign.center,
                          style: const TextStyle(
                              color: AppTheme.textSecondary,
                              fontSize: 22,
                              fontWeight: FontWeight.bold)),
                      const SizedBox(height: 24),
                      if (_duration > 0)
                        ProgressBar(
                          currentTime: _currentTime,
                          duration: _duration,
                          onSeek: _seek,
                        ),
                    ],
                  ),
                ),
              ),
            ),
            Padding(
              padding: const EdgeInsets.only(left: 24, right: 24, bottom: 32),
              child: SizedBox(
                height: 80,
                child: _isDone && !_isPlaying
                    ? Row(
                        children: [
                          Expanded(
                            child: _OutlineButton(
                              icon: Icons.refresh,
                              onTap: _playFull,
                            ),
                          ),
                          const SizedBox(width: 12),
                          Expanded(
                            flex: 2,
                            child: _PrimaryButton(
                              label: isSp ? 'EMPEZAR PRÁCTICA' : 'START PRACTICE',
                              onTap: () =>
                                  Navigator.of(context).pushReplacement(
                                MaterialPageRoute(
                                  builder: (_) => SentenceListenScreen(
                                    story: widget.story,
                                    promptForGender: widget.promptForGender,
                                    onBack: widget.onBack,
                                  ),
                                ),
                              ),
                            ),
                          ),
                        ],
                      )
                    : const SizedBox.shrink(),
              ),
            ),
          ],
        ),
      ),
    );
  }
}

// ─── Shared small widgets ─────────────────────────────────────────────────────

class _BackButton extends StatelessWidget {
  final VoidCallback onTap;
  const _BackButton({required this.onTap});

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: onTap,
      child: Container(
        padding: const EdgeInsets.all(10),
        decoration: BoxDecoration(
          color: AppTheme.bgCard,
          borderRadius: BorderRadius.circular(16),
          border: Border.all(color: AppTheme.borderMuted),
        ),
        child: const Icon(Icons.chevron_left,
            color: AppTheme.textSecondary, size: 22),
      ),
    );
  }
}

class _PrimaryButton extends StatelessWidget {
  final String label;
  final VoidCallback onTap;
  const _PrimaryButton({required this.label, required this.onTap});

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: onTap,
      child: Container(
        height: 64,
        decoration: BoxDecoration(
          gradient: const LinearGradient(
              colors: [Color(0xFF7c3aed), Color(0xFF4f46e5)]),
          borderRadius: BorderRadius.circular(24),
          border: Border.all(color: AppTheme.violetBorder),
        ),
        child: Center(
          child: Text(
            label,
            style: const TextStyle(
                color: Colors.white,
                fontWeight: FontWeight.w900,
                fontSize: 13,
                letterSpacing: 2),
          ),
        ),
      ),
    );
  }
}

class _OutlineButton extends StatelessWidget {
  final IconData icon;
  final VoidCallback onTap;
  const _OutlineButton({required this.icon, required this.onTap});

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: onTap,
      child: Container(
        height: 64,
        decoration: BoxDecoration(
          color: AppTheme.bgCard.withOpacity(0.3),
          borderRadius: BorderRadius.circular(24),
          border: Border.all(color: AppTheme.borderMuted),
        ),
        child:
            Center(child: Icon(icon, color: AppTheme.textSecondary, size: 28)),
      ),
    );
  }
}
