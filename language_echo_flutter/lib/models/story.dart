/// Data models mirroring the TypeScript types from the web app.

enum AppScreen {
  selecting,
  fullListen,
  sentenceListen,
  comprehension,
  vocabulary
}

enum LanguageTab { mandarin, ingles, spanish }

class Word {
  final String pinyin;
  final String hanzi;
  final String meaning;

  const Word({
    required this.pinyin,
    required this.hanzi,
    required this.meaning,
  });

  factory Word.fromJson(Map<String, dynamic> json, [LanguageTab? tab]) {
    String h = json['hanzi'] as String? ?? '';
    String p = json['pinyin'] as String? ?? '';
    String m = json['meaning'] as String? ?? '';

    if (tab == LanguageTab.ingles) {
      h = json['english'] as String? ?? '';
      m = json['spanish'] as String? ?? '';
    } else if (tab == LanguageTab.spanish) {
      h = json['spanish'] as String? ?? '';
      m = json['english'] as String? ?? '';
    } else {
      // fallbacks for different language JSONs if tab is not provided
      if (json.containsKey('spanish') && !json.containsKey('hanzi')) {
        h = json['spanish'] as String? ?? '';
      }
      if (json.containsKey('english')) {
        if (!json.containsKey('hanzi') && !json.containsKey('spanish')) {
          h = json['english'] as String? ?? '';
        } else if (!json.containsKey('meaning')) {
          m = json['english'] as String? ?? '';
        }
      }
    }

    return Word(
      pinyin: p,
      hanzi: h,
      meaning: m,
    );
  }

  Map<String, dynamic> toJson() => {
        'pinyin': pinyin,
        'hanzi': hanzi,
        'meaning': meaning,
      };

  @override
  bool operator ==(Object other) =>
      other is Word && other.pinyin == pinyin && other.hanzi == hanzi;

  @override
  int get hashCode => Object.hash(pinyin, hanzi);
}

class QuizOption {
  final String text;
  final bool isCorrect;

  const QuizOption({required this.text, required this.isCorrect});

  factory QuizOption.fromJson(Map<String, dynamic> json) => QuizOption(
        text: json['text'] as String,
        isCorrect: json['isCorrect'] as bool,
      );
}

class Question {
  final String id;
  final String questionText; // mandarin or target language
  final String questionPinyin;
  final String questionTranslation;
  final List<QuizOption> options;
  final String answerExplanation;

  const Question({
    required this.id,
    required this.questionText,
    required this.questionPinyin,
    required this.questionTranslation,
    required this.options,
    required this.answerExplanation,
  });

  factory Question.fromJson(Map<String, dynamic> json,
      [LanguageTab? tab, String detectedLang = 'unknown']) {
    String text = '';
    String trans = '';

    if (tab == LanguageTab.ingles || detectedLang == 'english') {
      text = (json['questionEnglish'] ?? json['questionTranslation'] ?? '')
          as String;
      trans = (json['questionSpanish'] ?? json['questionText'] ?? '') as String;
    } else if (tab == LanguageTab.spanish || detectedLang == 'spanish') {
      text = (json['questionSpanish'] ?? json['questionText'] ?? '') as String;
      trans = (json['questionEnglish'] ?? json['questionTranslation'] ?? '')
          as String;
    } else if (tab == LanguageTab.mandarin || detectedLang == 'mandarin') {
      text = (json['questionMandarin'] ?? json['questionText'] ?? '') as String;
      trans = (json['questionTranslation'] ?? json['questionEnglish'] ?? '')
          as String;
    } else {
      text = (json['questionMandarin'] ??
          json['questionSpanish'] ??
          json['questionText'] ??
          '') as String;
      trans = (json['questionTranslation'] ?? '') as String;
    }

    return Question(
      id: json['id'] as String,
      questionText: text,
      questionPinyin: (json['questionPinyin'] ?? '') as String,
      questionTranslation: trans,
      options: (json['options'] as List)
          .map((o) => QuizOption.fromJson(o as Map<String, dynamic>))
          .toList(),
      answerExplanation: (json['answerExplanation'] ?? '') as String,
    );
  }
}

class Sentence {
  final String targetText; // mandarin/spanish/english
  final String pinyin; // romanization if applicable
  final String translation; // translation
  final List<Word> words;

  const Sentence({
    required this.targetText,
    required this.pinyin,
    required this.translation,
    this.words = const [],
  });

  factory Sentence.fromJson(Map<String, dynamic> json, [LanguageTab? tab]) {
    String target = '';
    String trans = '';

    if (tab == LanguageTab.ingles) {
      target = (json['english'] ?? json['targetText'] ?? '') as String;
      trans = (json['spanish'] ?? json['translation'] ?? '') as String;
    } else if (tab == LanguageTab.spanish) {
      target = (json['spanish'] ?? json['targetText'] ?? '') as String;
      trans = (json['english'] ?? json['translation'] ?? '') as String;
    } else if (tab == LanguageTab.mandarin) {
      target = (json['mandarin'] ?? json['targetText'] ?? '') as String;
      trans = (json['translation'] ?? json['english'] ?? '') as String;
    } else {
      // Fallbacks if no tab is provided
      if (json.containsKey('mandarin')) {
        target = json['mandarin'] as String;
        trans = (json['translation'] ?? json['english'] ?? '') as String;
      } else if (json.containsKey('spanish')) {
        target = json['spanish'] as String;
        trans = (json['translation'] ?? json['english'] ?? '') as String;
      } else if (json.containsKey('english')) {
        target = json['english'] as String;
        trans = (json['translation'] ?? json['spanish'] ?? '') as String;
      } else {
        target = (json['targetText'] ?? '') as String;
        trans = (json['translation'] ?? '') as String;
      }
    }

    return Sentence(
      targetText: target,
      pinyin: (json['pinyin'] ?? '') as String,
      translation: trans,
      words: json['words'] != null
          ? (json['words'] as List)
              .map((w) => Word.fromJson(w as Map<String, dynamic>, tab))
              .toList()
          : [],
    );
  }
}

class Story {
  final String id;
  final String title;
  final String description;
  final List<Sentence> sentences;
  final List<Question> questions;

  const Story({
    required this.id,
    required this.title,
    required this.description,
    required this.sentences,
    required this.questions,
  });

  factory Story.fromJson(Map<String, dynamic> json, [LanguageTab? tab]) {
    String detectedLang = 'unknown';
    final sentencesList = json['sentences'] as List?;
    if (sentencesList != null && sentencesList.isNotEmpty) {
      final firstSentence = sentencesList[0] as Map<String, dynamic>;
      if (tab != null) {
        if (tab == LanguageTab.mandarin) detectedLang = 'mandarin';
        if (tab == LanguageTab.ingles) detectedLang = 'english';
        if (tab == LanguageTab.spanish) detectedLang = 'spanish';
      } else {
        if (firstSentence.containsKey('mandarin')) {
          detectedLang = 'mandarin';
        } else if (firstSentence.containsKey('spanish')) {
          detectedLang = 'spanish';
        } else if (firstSentence.containsKey('english')) {
          detectedLang = 'english';
        }
      }
    }

    String parsedTitle = json['title'] as String;
    // Only auto-capitalize for English/Spanish to preserve Mandarin's precise JSON strings
    if (tab == LanguageTab.ingles || tab == LanguageTab.spanish) {
      final minorWords = {'a', 'an', 'the', 'and', 'but', 'or', 'for', 'nor', 'on', 'at', 'to', 'from', 'by', 'over', 'in', 'out', 'of', 'with', 'as', 'de', 'del', 'en', 'con', 'y', 'el', 'la', 'los', 'las', 'un', 'una', 'unos', 'unas', 'por', 'para'};
      final words = parsedTitle.split(' ');
      for (var i = 0; i < words.length; i++) {
        final w = words[i].toLowerCase();
        if (i == 0 || i == words.length - 1 || !minorWords.contains(w)) {
          if (w.isNotEmpty) {
            words[i] = w[0].toUpperCase() + w.substring(1);
          }
        } else {
          words[i] = w;
        }
      }
      parsedTitle = words.join(' ');
    }

    return Story(
      id: json['id'] as String,
      title: parsedTitle,
      description: (json['description'] ?? '') as String,
      sentences: (sentencesList ?? [])
          .map((s) => Sentence.fromJson(s as Map<String, dynamic>, tab))
          .toList(),
      questions: (json['questions'] as List)
          .map(
              (q) => Question.fromJson(q as Map<String, dynamic>, tab, detectedLang))
          .toList(),
    );
  }
}
