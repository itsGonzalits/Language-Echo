import os

content = ""
with open("App.tsx", "r", encoding="utf-8") as f:
    content = f.read()

# Replace all occurrences of App with LearnSpanishApp
content = content.replace("App", "LearnSpanishApp")
content = content.replace("import { LearnSpanishLearnSpanishApp } from './LearnSpanishLearnSpanishApp';\n", "")

content = content.replace("import { Layout } from './components/Layout';", "import { Layout } from './components/Layout';")
content = content.replace("import { WordSpan } from './components/WordSpan';", "import { LearnSpanishWordSpan } from './components/LearnSpanishWordSpan';")
content = content.replace("import { STORIES } from './constants';", "import { LEARN_SPANISH_STORIES } from './learnSpanishConstants';")
content = content.replace("import { LearnSpanishAppState, Story, Question, Word } from './types';", "import { LearnSpanishAppState, LearnSpanishStory, LearnSpanishQuestion, LearnSpanishWord } from './learnSpanishTypes';")
content = content.replace("prepareMandarinTTS", "prepareLearnSpanishTTS")
content = content.replace("prepareConversationTTS", "prepareLearnSpanishConversationTTS")
content = content.replace("mandarin_echo_vocab", "learn_spanish_echo_vocab")
content = content.replace("Word[]", "LearnSpanishWord[]")
content = content.replace("Story | null", "LearnSpanishStory | null")
content = content.replace("Story,", "LearnSpanishStory,")
content = content.replace("Question ", "LearnSpanishQuestion ")
content = content.replace("WordSpan", "LearnSpanishWordSpan")
content = content.replace("STORIES", "LEARN_SPANISH_STORIES")
content = content.replace(".mandarin", ".spanish")
content = content.replace("questionMandarin", "questionSpanish")
content = content.replace("'pinyin' | 'hanzi' | 'english'", "'english' | 'spanish'")
content = content.replace("setVocabSort('pinyin')", "setVocabSort('english')")
content = content.replace("vocabSort === 'pinyin'", "vocabSort === 'english'")
content = content.replace("vocabSort === 'hanzi'", "vocabSort === 'spanish'")
content = content.replace(">Pinyin<", ">English<")
content = content.replace(">Hanzi<", ">Spanish<")
content = content.replace(".pinyin", ".english")
content = content.replace(".hanzi", ".spanish")
content = content.replace("from-violet-600", "from-amber-600")
content = content.replace("to-indigo-600", "to-orange-600")
content = content.replace("border-violet-400", "border-amber-400")
content = content.replace("text-violet-400", "text-amber-400")
content = content.replace("bg-violet-500", "bg-amber-500")
content = content.replace("text-violet-300", "text-amber-300")
content = content.replace("headerTitle=\"Mandarin Echo\"", "headerTitle=\"Spanish\"")

# Handle the word match UI part
content = content.replace("<span className=\"text-white block\">{s.spanish}</span>", "<span className=\"text-white block\">{s.english}</span>")
content = content.replace("<span className=\"text-slate-400 text-lg block mt-2\">{s.english}</span>", "<span className=\"text-slate-400 text-lg block mt-2\">{s.spanish}</span>")

# Fix a few extra states that might got duplicated AppApp
content = content.replace("LearnSpanishLearnSpanishApp", "LearnSpanishApp")
content = content.replace("LearnSpanishLearnSpanishAppState", "LearnSpanishAppState")
content = content.replace("LearnSpanishStory", "LearnSpanishStory")
content = content.replace("LearnSpanishAppState.SELECTING", "LearnSpanishAppState.SELECTING")

with open("LearnSpanishApp.tsx", "w", encoding="utf-8") as f:
    f.write(content)

print("Replacement complete")
