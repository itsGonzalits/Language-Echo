
export interface SpanishWord {
    english: string;
    spanish: string;
}

export interface SpanishSentence {
    english: string;
    spanish: string;
    words?: SpanishWord[];
}

export interface SpanishQuestion {
    id: string;
    questionEnglish: string;
    questionSpanish: string;
    options: { text: string; isCorrect: boolean }[];
    answerExplanation: string;
}

export interface SpanishStory {
    id: string;
    title: string;
    description: string;
    sentences: SpanishSentence[];
    questions: SpanishQuestion[];
}

export enum SpanishAppState {
    SELECTING = 'SELECTING',
    FULL_LISTEN = 'FULL_LISTEN',
    SENTENCE_LISTEN = 'SENTENCE_LISTEN',
    COMPREHENSION = 'COMPREHENSION',
    VOCABULARY = 'VOCABULARY'
}
