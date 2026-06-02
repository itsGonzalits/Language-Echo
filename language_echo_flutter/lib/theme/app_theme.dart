import 'package:flutter/material.dart';

/// Matches the web app's dark design: slate-950 bg, violet accents, etc.
class AppTheme {
  // Background shades (slate-950 / slate-900 / slate-800)
  static const bgDeep = Color(0xFF020617); // slate-950
  static const bgCard = Color(0xFF0f172a); // slate-900
  static const bgMuted = Color(0xFF1e293b); // slate-800

  // Text
  static const textPrimary = Color(0xFFcbd5e1); // slate-300
  static const textSecondary = Color(0xFF94a3b8); // slate-400
  static const textMuted = Color(0xFF475569); // slate-600

  // Accent - violet
  static const violet = Color(0xFFa78bfa); // violet-400
  static const violetDim = Color(0x33a78bfa); // violet-400/20
  static const violetBorder = Color(0x4Da78bfa); // violet-400/30

  // Emerald (Spanish/Inglés tab)
  static const emerald = Color(0xFF34d399);
  static const emeraldDim = Color(0x3334d399);

  // Amber (Learn Spanish tab)
  static const amber = Color(0xFFfbbf24);
  static const amberDim = Color(0x33fbbf24);

  // Rose (wrong answer)
  static const rose = Color(0xFFfb7185);
  static const roseDim = Color(0x1Afb7185);

  // Borders
  static const borderMuted = Color(0xFF1e293b); // slate-800
  static const borderViolet = Color(0x33a78bfa);

  static ThemeData get dark => ThemeData(
        useMaterial3: true,
        brightness: Brightness.dark,
        scaffoldBackgroundColor: bgDeep,
        colorScheme: const ColorScheme.dark(
          primary: violet,
          secondary: emerald,
          surface: bgCard,
        ),
        textTheme: const TextTheme(
          bodyLarge: TextStyle(color: textPrimary),
          bodyMedium: TextStyle(color: textSecondary),
          bodySmall: TextStyle(color: textMuted),
        ),
        appBarTheme: const AppBarTheme(
          backgroundColor: bgDeep,
          elevation: 0,
          foregroundColor: textPrimary,
        ),
      );
}
