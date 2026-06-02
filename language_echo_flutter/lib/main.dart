import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:flutter_animate/flutter_animate.dart';
import 'state/app_state.dart';
import 'theme/app_theme.dart';
import 'screens/language_selector_screen.dart';
import 'screens/story_screen.dart';
import 'screens/vocabulary_screen.dart';
import 'data/story_repository.dart';
import 'models/story.dart';
import 'services/tts_service.dart';

void main() {
  runApp(
    ChangeNotifierProvider(
      create: (_) => AppStateNotifier(),
      child: const LanguageEchoApp(),
    ),
  );
}

class LanguageEchoApp extends StatelessWidget {
  const LanguageEchoApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Echo',
      theme: AppTheme.dark,
      debugShowCheckedModeBanner: false,
      home: const AppRouter(),
    );
  }
}

class AppRouter extends StatelessWidget {
  const AppRouter({super.key});

  @override
  Widget build(BuildContext context) {
    final state = context.watch<AppStateNotifier>();

    if (state.showSelector) {
      return const LanguageSelectorScreen();
    }

    return PopScope(
      canPop: false,
      onPopInvokedWithResult: (didPop, result) {
        if (!didPop) state.goToSelector();
      },
      child: LanguageTabView(tab: state.activeTab),
    );
  }
}

class LanguageTabView extends StatefulWidget {
  final LanguageTab tab;
  const LanguageTabView({super.key, required this.tab});

  @override
  State<LanguageTabView> createState() => _LanguageTabViewState();
}

class _LanguageTabViewState extends State<LanguageTabView> {
  List<Story>? _stories;
  bool _showVocab = false;

  @override
  void initState() {
    super.initState();
    _loadStories();
  }

  @override
  void didUpdateWidget(LanguageTabView old) {
    super.didUpdateWidget(old);
    if (old.tab != widget.tab) {
      setState(() {
        _stories = null;
        _showVocab = false;
      });
      _loadStories();
    }
  }

  Future<void> _loadStories() async {
    final stories = await StoryRepository.forTab(widget.tab);
    if (mounted) setState(() => _stories = stories);
  }

  String _promptForGender(String gender) {
    switch (widget.tab) {
      case LanguageTab.mandarin:
        return mandarinPrompt(gender);
      case LanguageTab.ingles:
        return englishPrompt(gender);
      case LanguageTab.spanish:
        return spanishPrompt(gender);
    }
  }

  void _goBack() {
    context.read<AppStateNotifier>().goToSelector();
  }

  @override
  Widget build(BuildContext context) {
    if (_stories == null) {
      return const Scaffold(
        backgroundColor: AppTheme.bgDeep,
        body: Center(child: CircularProgressIndicator(color: AppTheme.violet)),
      );
    }

    if (_showVocab) {
      return PopScope(
        canPop: false,
        onPopInvokedWithResult: (didPop, result) {
          if (!didPop) setState(() => _showVocab = false);
        },
        child:
            VocabularyScreen(onBack: () => setState(() => _showVocab = false)),
      );
    }

    return PopScope(
      canPop: false,
      onPopInvokedWithResult: (didPop, result) {
        if (!didPop) _goBack();
      },
      child: StoryListScreen(
        stories: _stories!,
        onBack: _goBack,
        promptForGender: _promptForGender,
        onVocab: () => setState(() => _showVocab = true),
      ),
    );
  }
}
