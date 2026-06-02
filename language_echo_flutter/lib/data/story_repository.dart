import 'dart:convert';
import 'package:flutter/services.dart' show rootBundle;
import '../models/story.dart';

class StoryRepository {
  static List<Story>? _mandarinStories;
  static List<Story>? _inglesStories;
  static List<Story>? _spanishStories;

  static Future<List<Story>> forTab(LanguageTab tab) async {
    switch (tab) {
      case LanguageTab.mandarin:
        return _mandarinStories ??=
            await _load('assets/data/mandarin_stories.json', tab);
      case LanguageTab.ingles:
        return _inglesStories ??=
            await _load('assets/data/ingles_stories.json', tab);
      case LanguageTab.spanish:
        return _spanishStories ??=
            await _load('assets/data/spanish_stories.json', tab);
    }
  }

  static Future<List<Story>> _load(String path, LanguageTab tab) async {
    final jsonStr = await rootBundle.loadString(path);
    final list = jsonDecode(jsonStr) as List;
    return list.map((s) => Story.fromJson(s as Map<String, dynamic>, tab)).toList();
  }
}
