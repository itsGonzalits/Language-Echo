import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'dart:convert';
import '../models/story.dart';

/// Central state for the app. Manages language selection, screen navigation,
/// vocabulary, and playback state signals.
class AppStateNotifier extends ChangeNotifier {
  LanguageTab _activeTab = LanguageTab.mandarin;
  bool _showSelector = true;
  List<Word> _savedWords = [];
  VocabSort _vocabSort = VocabSort.pinyin;

  LanguageTab get activeTab => _activeTab;
  bool get showSelector => _showSelector;
  List<Word> get savedWords => List.unmodifiable(_savedWords);
  VocabSort get vocabSort => _vocabSort;

  AppStateNotifier() {
    _loadPrefs();
  }

  Future<void> _loadPrefs() async {
    final prefs = await SharedPreferences.getInstance();
    final tabStr = prefs.getString('echo_active_tab');
    if (tabStr != null) {
      _activeTab = LanguageTab.values.firstWhere((t) => t.name == tabStr,
          orElse: () => LanguageTab.mandarin);
      _showSelector = false;
    }
    final wordsJson = prefs.getString('echo_vocab_${_activeTab.name}');
    if (wordsJson != null) {
      final list = jsonDecode(wordsJson) as List;
      _savedWords =
          list.map((w) => Word.fromJson(w as Map<String, dynamic>)).toList();
    }
    notifyListeners();
  }

  void selectLanguage(LanguageTab tab) async {
    _activeTab = tab;
    _showSelector = false;
    _savedWords = [];
    final prefs = await SharedPreferences.getInstance();
    await prefs.setString('echo_active_tab', tab.name);
    // Load vocab for this tab
    final wordsJson = prefs.getString('echo_vocab_${tab.name}');
    if (wordsJson != null) {
      final list = jsonDecode(wordsJson) as List;
      _savedWords =
          list.map((w) => Word.fromJson(w as Map<String, dynamic>)).toList();
    }
    notifyListeners();
  }

  void goToSelector() {
    _showSelector = true;
    notifyListeners();
  }

  Future<void> saveWord(Word word) async {
    if (_savedWords.contains(word)) return;
    _savedWords = [..._savedWords, word];
    notifyListeners();
    await _persistVocab();
  }

  Future<void> deleteWord(int index) async {
    final updated = [..._savedWords];
    updated.removeAt(index);
    _savedWords = updated;
    notifyListeners();
    await _persistVocab();
  }

  void setVocabSort(VocabSort sort) {
    _vocabSort = sort;
    notifyListeners();
  }

  Future<void> _persistVocab() async {
    final prefs = await SharedPreferences.getInstance();
    final json = jsonEncode(_savedWords.map((w) => w.toJson()).toList());
    await prefs.setString('echo_vocab_${_activeTab.name}', json);
  }
}

enum VocabSort { pinyin, hanzi, meaning }
