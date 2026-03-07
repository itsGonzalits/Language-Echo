export interface LearnSpanishWord {
    english: string;
    spanish: string;
}

export interface LearnSpanishSentence {
    english: string;
    spanish: string;
    words?: LearnSpanishWord[];
}

export interface LearnSpanishQuestion {
    id: string;
    questionEnglish: string;
    questionSpanish: string;
    options: { text: string; isCorrect: boolean }[];
    answerExplanation: string;
}

export interface LearnSpanishStory {
    id: string;
    title: string;
    description: string;
    sentences: LearnSpanishSentence[];
    questions: LearnSpanishQuestion[];
}

export enum LearnSpanishAppState {
    SELECTING = 'SELECTING',
    FULL_LISTEN = 'FULL_LISTEN',
    SENTENCE_LISTEN = 'SENTENCE_LISTEN',
    COMPREHENSION = 'COMPREHENSION',
    VOCABULARY = 'VOCABULARY'
}
