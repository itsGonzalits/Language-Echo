import 'package:flutter/material.dart';
import 'package:flutter_animate/flutter_animate.dart';
import 'package:provider/provider.dart';
import '../theme/app_theme.dart';
import '../state/app_state.dart';
import '../models/story.dart';

/// The pulsing orb widget that shows LISTEN / READY state.
class PulsingOrb extends StatelessWidget {
  final bool isPulsating;
  final bool isPlaying;
  final bool isPaused;
  final double size;

  const PulsingOrb({
    super.key,
    required this.isPulsating,
    required this.isPlaying,
    this.isPaused = false,
    this.size = 192,
  });

  @override
  Widget build(BuildContext context) {
    final state = context.read<AppStateNotifier>();
    final isIngles = state.activeTab == LanguageTab.ingles;

    final isActive = isPulsating || (isPlaying && !isPaused);
    final labelListen = isIngles ? 'ESCUCHA' : 'LISTEN';
    final labelReady = isIngles ? 'LISTO' : 'READY';
    final label = isActive ? labelListen : labelReady;

    Widget orb = Container(
      width: size,
      height: size,
      decoration: BoxDecoration(
        shape: BoxShape.circle,
        border: Border.all(
          color: isActive ? AppTheme.violetBorder : AppTheme.borderMuted,
          width: 6,
        ),
        color:
            isActive ? AppTheme.violetDim : AppTheme.bgMuted.withOpacity(0.4),
        boxShadow: isActive
            ? [
                BoxShadow(
                  color: AppTheme.violet.withOpacity(0.15),
                  blurRadius: 80,
                  spreadRadius: 10,
                )
              ]
            : [],
      ),
      child: Center(
        child: Text(
          label,
          style: TextStyle(
            color: isActive ? AppTheme.violet : AppTheme.textMuted,
            fontWeight: FontWeight.w900,
            fontSize: label == 'ESCUCHA' ? size * 0.12 : size * 0.15,
            letterSpacing: 2,
          ),
        ),
      ),
    );

    if (isPulsating) {
      orb = orb
          .animate(onPlay: (c) => c.repeat())
          .scale(
            begin: const Offset(1, 1),
            end: const Offset(1.05, 1.05),
            duration: 800.ms,
            curve: Curves.easeInOut,
          )
          .then()
          .scale(
            begin: const Offset(1.05, 1.05),
            end: const Offset(1, 1),
            duration: 800.ms,
            curve: Curves.easeInOut,
          );
    }

    return orb;
  }
}
