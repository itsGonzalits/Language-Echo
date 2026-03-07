
export interface Word {
  pinyin: string;
  hanzi: string;
  meaning: string;
}

export interface Sentence {
  mandarin: string;
  pinyin: string;
  translation: string;
  words?: Word[];
}

export interface Question {
  id: string;
  questionMandarin: string;
  questionPinyin: string;
  questionTranslation: string;
  options: {
    text: string;
    isCorrect: boolean;
  }[];
  answerExplanation: string;
}

export interface Story {
  id: string;
  title: string;
  description: string;
  sentences: Sentence[];
  questions: Question[];
}

export enum AppState {
  SELECTING = 'SELECTING',
  FULL_LISTEN = 'FULL_LISTEN',
  SENTENCE_LISTEN = 'SENTENCE_LISTEN',
  COMPREHENSION = 'COMPREHENSION',
  VOCABULARY = 'VOCABULARY'
}
