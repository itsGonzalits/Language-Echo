import 'package:flutter/material.dart';
import '../theme/app_theme.dart';
import '../models/story.dart';

/// Seekable audio progress bar.
class ProgressBar extends StatelessWidget {
  final double currentTime;
  final double duration;
  final ValueChanged<double> onSeek;

  const ProgressBar({
    super.key,
    required this.currentTime,
    required this.duration,
    required this.onSeek,
  });

  String _fmt(double secs) {
    final m = secs ~/ 60;
    final s = secs.toInt() % 60;
    return '$m:${s.toString().padLeft(2, '0')}';
  }

  @override
  Widget build(BuildContext context) {
    if (duration == 0) return const SizedBox.shrink();
    final progress = (currentTime / duration).clamp(0.0, 1.0);

    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 16),
      child: Column(
        children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Text(_fmt(currentTime),
                  style: const TextStyle(
                      fontSize: 10,
                      color: AppTheme.textMuted,
                      fontFamily: 'monospace',
                      fontWeight: FontWeight.bold,
                      letterSpacing: 1.5)),
              Text(_fmt(duration),
                  style: const TextStyle(
                      fontSize: 10,
                      color: AppTheme.textMuted,
                      fontFamily: 'monospace',
                      fontWeight: FontWeight.bold,
                      letterSpacing: 1.5)),
            ],
          ),
          const SizedBox(height: 4),
          SliderTheme(
            data: SliderThemeData(
              trackHeight: 3,
              activeTrackColor: AppTheme.violet,
              inactiveTrackColor: AppTheme.bgMuted,
              thumbColor: AppTheme.violet,
              thumbShape: const RoundSliderThumbShape(enabledThumbRadius: 7),
              overlayColor: AppTheme.violetDim,
            ),
            child: Slider(
              value: progress,
              onChanged: (v) => onSeek(v * duration),
            ),
          ),
        ],
      ),
    );
  }
}

/// Tappable word chip that shows save/saved state.
class WordChip extends StatefulWidget {
  final Word word;
  final bool isSaved;
  final VoidCallback onSave;

  const WordChip({
    super.key,
    required this.word,
    required this.isSaved,
    required this.onSave,
  });

  @override
  State<WordChip> createState() => _WordChipState();
}

class _WordChipState extends State<WordChip> {
  bool _showPopup = false;

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: () {
        setState(() => _showPopup = !_showPopup);
      },
      child: Column(
        mainAxisSize: MainAxisSize.min,
        children: [
          Container(
            padding: const EdgeInsets.symmetric(horizontal: 6, vertical: 2),
            margin: const EdgeInsets.symmetric(horizontal: 2, vertical: 2),
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(6),
              color: _showPopup ? AppTheme.violetDim : Colors.transparent,
              border: Border.all(
                color: _showPopup ? AppTheme.violetBorder : Colors.transparent,
              ),
            ),
            child: Text(
              widget.word.pinyin.isNotEmpty
                  ? widget.word.pinyin
                  : widget.word.hanzi,
              style: TextStyle(
                color: _showPopup ? AppTheme.violet : AppTheme.textSecondary,
                fontSize: 13,
                fontWeight: FontWeight.w500,
              ),
            ),
          ),
          if (_showPopup) ...[
            Container(
              margin: const EdgeInsets.only(top: 4),
              padding: const EdgeInsets.all(8),
              decoration: BoxDecoration(
                color: AppTheme.bgCard,
                borderRadius: BorderRadius.circular(8),
                border: Border.all(color: AppTheme.borderViolet),
              ),
              child: Column(
                children: [
                  Text(widget.word.hanzi,
                      style: const TextStyle(
                          color: AppTheme.textPrimary,
                          fontSize: 18,
                          fontWeight: FontWeight.w300)),
                  const SizedBox(height: 2),
                  Text(widget.word.meaning,
                      style: const TextStyle(
                          color: AppTheme.textSecondary,
                          fontSize: 11,
                          fontStyle: FontStyle.italic)),
                  const SizedBox(height: 6),
                  GestureDetector(
                    onTap: widget.isSaved
                        ? null
                        : () {
                            widget.onSave();
                            setState(() => _showPopup = false);
                          },
                    child: Container(
                      padding: const EdgeInsets.symmetric(
                          horizontal: 10, vertical: 4),
                      decoration: BoxDecoration(
                        color: widget.isSaved
                            ? AppTheme.bgMuted
                            : AppTheme.violetDim,
                        borderRadius: BorderRadius.circular(6),
                        border: Border.all(color: AppTheme.violetBorder),
                      ),
                      child: Text(
                        widget.isSaved ? 'Saved ✓' : '+ Save',
                        style: TextStyle(
                          color: widget.isSaved
                              ? AppTheme.textMuted
                              : AppTheme.violet,
                          fontSize: 10,
                          fontWeight: FontWeight.bold,
                          letterSpacing: 1,
                        ),
                      ),
                    ),
                  ),
                ],
              ),
            ),
          ],
        ],
      ),
    );
  }
}
