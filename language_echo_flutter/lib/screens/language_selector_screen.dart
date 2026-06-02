import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../state/app_state.dart';
import '../models/story.dart';
import '../theme/app_theme.dart';

class LanguageSelectorScreen extends StatelessWidget {
  const LanguageSelectorScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final state = context.read<AppStateNotifier>();
    return Scaffold(
      backgroundColor: AppTheme.bgDeep,
      body: Stack(
        children: [
          // Background glow blobs
          Positioned(
            top: -100,
            left: -100,
            child: Container(
              width: 300,
              height: 300,
              decoration: BoxDecoration(
                shape: BoxShape.circle,
                color: Colors.transparent,
                boxShadow: [
                  BoxShadow(
                      color: AppTheme.violet.withOpacity(0.12),
                      blurRadius: 120,
                      spreadRadius: 60)
                ],
              ),
            ),
          ),
          Positioned(
            bottom: -100,
            right: -100,
            child: Container(
              width: 300,
              height: 300,
              decoration: BoxDecoration(
                shape: BoxShape.circle,
                color: Colors.transparent,
                boxShadow: [
                  BoxShadow(
                      color: AppTheme.emerald.withOpacity(0.12),
                      blurRadius: 120,
                      spreadRadius: 60)
                ],
              ),
            ),
          ),
          // Content
          SafeArea(
            child: Center(
              child: Padding(
                padding: const EdgeInsets.all(24),
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    const Text(
                      'ECHO',
                      style: TextStyle(
                        color: Colors.white,
                        fontSize: 48,
                        fontWeight: FontWeight.w900,
                        fontStyle: FontStyle.italic,
                        letterSpacing: -2,
                      ),
                    ),
                    const SizedBox(height: 8),
                    const Text(
                      'LANGUAGE LISTENING MASTERY',
                      style: TextStyle(
                        color: AppTheme.textMuted,
                        fontSize: 10,
                        fontWeight: FontWeight.bold,
                        letterSpacing: 4,
                      ),
                    ),
                    const SizedBox(height: 64),
                    _LanguageCard(
                      label: 'CN',
                      title: 'Mandarin',
                      accentColor: AppTheme.violet,
                      glowColor: AppTheme.violetDim,
                      onTap: () => state.selectLanguage(LanguageTab.mandarin),
                    ),
                    const SizedBox(height: 16),
                    _LanguageCard(
                      label: 'ING',
                      title: 'Inglés',
                      accentColor: AppTheme.emerald,
                      glowColor: AppTheme.emeraldDim,
                      onTap: () => state.selectLanguage(LanguageTab.ingles),
                    ),
                    const SizedBox(height: 16),
                    _LanguageCard(
                      label: 'SP',
                      title: 'Spanish',
                      accentColor: AppTheme.amber,
                      glowColor: AppTheme.amberDim,
                      onTap: () => state.selectLanguage(LanguageTab.spanish),
                    ),
                  ],
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }
}

class _LanguageCard extends StatelessWidget {
  final String label;
  final String title;
  final Color accentColor;
  final Color glowColor;
  final VoidCallback onTap;

  const _LanguageCard({
    required this.label,
    required this.title,
    required this.accentColor,
    required this.glowColor,
    required this.onTap,
  });

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: onTap,
      child: Container(
        width: double.infinity,
        padding: const EdgeInsets.symmetric(horizontal: 32, vertical: 28),
        decoration: BoxDecoration(
          color: AppTheme.bgCard.withOpacity(0.4),
          borderRadius: BorderRadius.circular(32),
          border: Border.all(color: AppTheme.borderMuted.withOpacity(0.5)),
        ),
        child: Row(
          children: [
            Text(
              label,
              style: TextStyle(
                color: accentColor.withOpacity(0.8),
                fontSize: 36,
                fontWeight: FontWeight.w900,
                letterSpacing: -1,
              ),
            ),
            const SizedBox(width: 20),
            Text(
              title,
              style: const TextStyle(
                color: Colors.white,
                fontSize: 28,
                fontWeight: FontWeight.w900,
                letterSpacing: -0.5,
              ),
            ),
            const Spacer(),
            Icon(Icons.arrow_forward_ios_rounded,
                color: accentColor.withOpacity(0.5), size: 20),
          ],
        ),
      ),
    );
  }
}
