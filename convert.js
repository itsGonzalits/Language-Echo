import fs from 'fs';

let content = fs.readFileSync('App.tsx', 'utf-8');

// Replace all occurrences of App with LearnSpanishApp
content = content.replace(/App/g, "LearnSpanishApp");
content = content.replace("import { LearnSpanishLearnSpanishApp } from './LearnSpanishLearnSpanishApp';\n", "");

content = content.replace("import { Layout } from './components/Layout';", "import { Layout } from './components/Layout';");
content = content.replace("import { WordSpan } from './components/WordSpan';", "import { LearnSpanishWordSpan } from './components/LearnSpanishWordSpan';");
content = content.replace("import { STORIES } from './constants';", "import { LEARN_SPANISH_STORIES } from './learnSpanishConstants';");
content = content.replace("import { LearnSpanishAppState, Story, Question, Word } from './types';", "import { LearnSpanishAppState, LearnSpanishStory, LearnSpanishQuestion, LearnSpanishWord } from './learnSpanishTypes';");
content = content.replace(/prepareMandarinTTS/g, "prepareLearnSpanishTTS");
content = content.replace(/prepareConversationTTS/g, "prepareLearnSpanishConversationTTS");
content = content.replace("mandarin_echo_vocab", "learn_spanish_echo_vocab");
content = content.replace("Word\\[\\]/g", "LearnSpanishWord[]");
content = content.replace("Story | null", "LearnSpanishStory | null");
content = content.replace("Story,", "LearnSpanishStory,");
content = content.replace("Question ", "LearnSpanishQuestion ");
content = content.replace("WordSpan", "LearnSpanishWordSpan");
content = content.replace("STORIES", "LEARN_SPANISH_STORIES");
content = content.replace(/\.mandarin/g, ".spanish");
content = content.replace("questionMandarin", "questionSpanish");
content = content.replace("'pinyin' | 'hanzi' | 'english'", "'english' | 'spanish'");
content = content.replace("setVocabSort('pinyin')", "setVocabSort('english')");
content = content.replace("vocabSort === 'pinyin'", "vocabSort === 'english'");
content = content.replace("vocabSort === 'hanzi'", "vocabSort === 'spanish'");
content = content.replace(">Pinyin<", ">English<");
content = content.replace(">Hanzi<", ">Spanish<");
content = content.replace(/\.pinyin/g, ".english");
content = content.replace(/\.hanzi/g, ".spanish");
content = content.replace(/from-violet-600/g, "from-amber-600");
content = content.replace(/to-indigo-600/g, "to-orange-600");
content = content.replace(/border-violet-400/g, "border-amber-400");
content = content.replace(/text-violet-400/g, "text-amber-400");
content = content.replace(/bg-violet-500/g, "bg-amber-500");
content = content.replace(/text-violet-300/g, "text-amber-300");
content = content.replace("headerTitle=\"Mandarin Echo\"", "headerTitle=\"Spanish\"");

// Handle the word match UI part
content = content.replace("<span className=\"text-white block\">{s.spanish}</span>", "<span className=\"text-white block\">{s.english}</span>");
content = content.replace("<span className=\"text-slate-400 text-lg block mt-2\">{s.english}</span>", "<span className=\"text-slate-400 text-lg block mt-2\">{s.spanish}</span>");

content = content.replace(/LearnSpanishLearnSpanishApp/g, "LearnSpanishApp");
content = content.replace(/LearnSpanishLearnSpanishAppState/g, "LearnSpanishAppState");

fs.writeFileSync('LearnSpanishApp.tsx', content);

console.log("Replacement complete");
