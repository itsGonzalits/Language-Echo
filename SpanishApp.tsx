import React, { useState, useCallback, useRef, useEffect } from 'react';
import { Layout } from './components/Layout';
import { SpanishWordSpan } from './components/SpanishWordSpan';
import { SPANISH_STORIES } from './spanishConstants';
import { SpanishAppState, SpanishStory, SpanishQuestion, SpanishWord } from './spanishTypes';
import { prepareEnglishTTS, prepareEnglishConversationTTS, AudioController, SegmentTiming, initAudioContext } from './services/ttsService';

interface SpanishAppProps {
    onBackToSelection?: () => void;
}

const SpanishApp: React.FC<SpanishAppProps> = ({ onBackToSelection }) => {
    const [appState, setAppState] = useState<SpanishAppState>(SpanishAppState.SELECTING);
    const [selectedStory, setSelectedStory] = useState<SpanishStory | null>(null);
    const [currentSentenceIndex, setCurrentSentenceIndex] = useState<number>(0);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
    const [isPulsating, setIsPulsating] = useState<boolean>(false);
    const [isAudioPlaying, setIsAudioPlaying] = useState<boolean>(false);
    const [isPaused, setIsPaused] = useState<boolean>(false);
    const [showTranslation, setShowTranslation] = useState<boolean>(false);

    // Vocab State
    const [savedWords, setSavedWords] = useState<SpanishWord[]>([]);
    const [vocabSort, setVocabSort] = useState<'english' | 'spanish'>('english');

    // Load saved words on mount
    useEffect(() => {
        const saved = localStorage.getItem('english_echo_vocab');
        if (saved) {
            try {
                setSavedWords(JSON.parse(saved));
            } catch (e) { console.error("Failed to load vocab", e); }
        }
    }, []);

    const saveWord = (word: SpanishWord) => {
        const exists = savedWords.some(w => w.english === word.english && w.spanish === word.spanish);
        if (!exists) {
            const newWords = [...savedWords, word];
            setSavedWords(newWords);
            localStorage.setItem('english_echo_vocab', JSON.stringify(newWords));
        }
    };

    const deleteWord = (index: number) => {
        const newWords = [...savedWords];
        newWords.splice(index, 1);
        setSavedWords(newWords);
        localStorage.setItem('english_echo_vocab', JSON.stringify(newWords));
    };

    const [isFullStoryDone, setIsFullStoryDone] = useState<boolean>(false);
    const [showPlaybackButtons, setShowPlaybackButtons] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(null);
    const [hasAnswered, setHasAnswered] = useState<boolean>(false);

    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [isDragging, setIsDragging] = useState(false);

    const audioControllerRef = useRef<AudioController | null>(null);
    const progressRequestRef = useRef<number | null>(null);
    const playbackRequestIdRef = useRef<number>(0);
    const playbackTimingsRef = useRef<SegmentTiming[]>([]);

    const updateProgress = useCallback(() => {
        if (audioControllerRef.current && !isDragging) {
            const current = audioControllerRef.current.getCurrentTime();
            setCurrentTime(current);

            const status = audioControllerRef.current.status;
            setIsAudioPlaying(status === 'playing');
            setIsPaused(status === 'paused');

            if (status === 'playing' || status === 'paused') {
                const timings = playbackTimingsRef.current;
                if (timings.length > 0) {
                    const active = timings.find(t => current >= t.start && current <= t.end);
                    if (active && active.index !== currentSentenceIndex) {
                        setCurrentSentenceIndex(active.index);
                    }
                }
                progressRequestRef.current = requestAnimationFrame(updateProgress);
            } else if (status === 'ended') {
                setIsAudioPlaying(false);
                setIsPaused(false);
                setShowPlaybackButtons(false);
                if (appState === SpanishAppState.FULL_LISTEN) setIsFullStoryDone(true);
            }
        }
    }, [appState, isDragging, currentSentenceIndex]);

    useEffect(() => {
        if (!isDragging && audioControllerRef.current) {
            progressRequestRef.current = requestAnimationFrame(updateProgress);
        }
        return () => {
            if (progressRequestRef.current) cancelAnimationFrame(progressRequestRef.current);
        };
    }, [isDragging, updateProgress]);

    useEffect(() => {
        return () => {
            if (audioControllerRef.current) {
                audioControllerRef.current.stop();
                audioControllerRef.current = null;
            }
        };
    }, []);

    const stopCurrentAudio = () => {
        playbackRequestIdRef.current = Date.now() + Math.random();
        if (audioControllerRef.current) {
            audioControllerRef.current.stop();
            audioControllerRef.current = null;
        }
        setIsAudioPlaying(false);
        setIsPaused(false);
        setShowPlaybackButtons(false);
        setCurrentTime(0);
        setDuration(0);
        if (progressRequestRef.current) cancelAnimationFrame(progressRequestRef.current);
    };

    const triggerListeningSequence = useCallback(async (isFull: boolean = false, index?: number, storyOverride?: SpanishStory, isQuestion: boolean = false) => {
        stopCurrentAudio();
        const requestId = Date.now() + Math.random();
        playbackRequestIdRef.current = requestId;
        setError(null);
        playbackTimingsRef.current = [];

        const activeStory = storyOverride || selectedStory;
        if (!activeStory) return;

        setIsPulsating(true);
        if (!isQuestion) setShowTranslation(false);
        setIsFullStoryDone(false);
        setShowPlaybackButtons(true);

        await initAudioContext();

        try {
            let controller: AudioController | null = null;

            if (isFull) {
                const segments = activeStory.sentences.map((s, idx) => ({
                    text: s.english,
                    gender: (idx % 2 === 0 ? 'female' : 'male') as 'male' | 'female'
                }));

                const result = await prepareEnglishConversationTTS(segments, true, activeStory.id);
                controller = result.controller;
                playbackTimingsRef.current = result.timings;

                if (result.timings.length > 0) setCurrentSentenceIndex(0);
            } else {
                let textToPlay = "";
                let gender: 'male' | 'female' = 'female';

                if (isQuestion) {
                    const qIdx = index !== undefined ? index : currentQuestionIndex;
                    textToPlay = activeStory.questions[qIdx].questionEnglish;
                    gender = qIdx % 2 === 0 ? 'female' : 'male';
                } else {
                    const sIdx = index !== undefined ? index : currentSentenceIndex;
                    textToPlay = activeStory.sentences[sIdx].english;
                    gender = sIdx % 2 === 0 ? 'female' : 'male';
                }

                controller = await prepareEnglishTTS(textToPlay, true, gender, activeStory.id, !isQuestion);
            }

            if (playbackRequestIdRef.current !== requestId) return;

            if (controller) {
                setIsPulsating(false);
                audioControllerRef.current = controller;
                setDuration(controller.duration);
                setIsAudioPlaying(true);

                if (progressRequestRef.current) cancelAnimationFrame(progressRequestRef.current);
                progressRequestRef.current = requestAnimationFrame(updateProgress);

                await controller.play();
            }
        } catch (err: any) {
            if (playbackRequestIdRef.current !== requestId) return;
            setIsPulsating(false);
            setIsAudioPlaying(false);
            setShowPlaybackButtons(false);
            if (err.message?.includes('429') || err.message?.includes('quota')) {
                setError("Cuota de IA excedida. Por favor, inténtalo de nuevo en un momento.");
            } else {
                console.error(err);
                setError("Algo salió mal con el audio. Por favor, inténtalo de nuevo.");
            }
        }
    }, [selectedStory, currentSentenceIndex, currentQuestionIndex, updateProgress]);

    const startPractice = (story: SpanishStory) => {
        setAppState(SpanishAppState.FULL_LISTEN);
        setSelectedStory(story);
        triggerListeningSequence(true, 0, story);
    };

    const handleContinueToSentences = () => {
        setAppState(SpanishAppState.SENTENCE_LISTEN);
        setCurrentSentenceIndex(0);
        triggerListeningSequence(false, 0);
    };

    const handleNextSentence = () => {
        if (!selectedStory) return;
        if (currentSentenceIndex < selectedStory.sentences.length - 1) {
            const nextIndex = currentSentenceIndex + 1;
            setCurrentSentenceIndex(nextIndex);
            triggerListeningSequence(false, nextIndex);
        } else {
            setAppState(SpanishAppState.COMPREHENSION);
            setCurrentQuestionIndex(0);
            setHasAnswered(false);
            setSelectedAnswerIndex(null);
            triggerListeningSequence(false, 0, undefined, true);
        }
    };

    const handlePrevSentence = () => {
        if (currentSentenceIndex > 0) {
            const prevIndex = currentSentenceIndex - 1;
            setCurrentSentenceIndex(prevIndex);
            triggerListeningSequence(false, prevIndex);
        }
    };

    const handleJumpToSentence = (index: number) => {
        setCurrentSentenceIndex(index);
        triggerListeningSequence(false, index);
    };

    const handleJumpToQuestion = (index: number) => {
        setCurrentQuestionIndex(index);
        setHasAnswered(false);
        setSelectedAnswerIndex(null);
        triggerListeningSequence(false, index, undefined, true);
    };

    const handleAnswerSelect = (index: number) => {
        if (hasAnswered) return;
        setSelectedAnswerIndex(index);
        setHasAnswered(true);
    };

    const handleNextQuestion = () => {
        if (!selectedStory) return;
        if (currentQuestionIndex < selectedStory.questions.length - 1) {
            const nextIdx = currentQuestionIndex + 1;
            setCurrentQuestionIndex(nextIdx);
            setHasAnswered(false);
            setSelectedAnswerIndex(null);
            triggerListeningSequence(false, nextIdx, undefined, true);
        } else {
            setAppState(SpanishAppState.SELECTING);
        }
    };

    const formatTime = (seconds: number) => {
        const m = Math.floor(seconds / 60);
        const s = Math.floor(seconds % 60);
        return `${m}:${s.toString().padStart(2, '0')}`;
    };

    const renderError = () => {
        if (!error) return null;
        return (
            <div className="absolute top-4 left-4 right-4 z-50 animate-in fade-in slide-in-from-top-4 duration-300">
                <div className="bg-amber-500/10 border border-amber-500/30 text-amber-200 px-4 py-3 rounded-2xl flex items-center justify-between shadow-2xl backdrop-blur-md">
                    <div className="flex items-center gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                        <span className="text-xs font-bold uppercase tracking-wider">{error}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => {
                                setError(null);
                                setIsPulsating(false);
                                setIsAudioPlaying(false);
                                if (appState === SpanishAppState.FULL_LISTEN) setIsFullStoryDone(true);
                            }}
                            className="text-[10px] font-black uppercase tracking-widest bg-amber-500/20 hover:bg-amber-500/40 text-amber-200 px-3 py-1 rounded-lg transition-colors"
                        >
                            Omitir
                        </button>
                        <button onClick={() => setError(null)} className="text-amber-500 hover:text-amber-300 p-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        );
    };

    const renderProgressBar = () => {
        if (duration === 0) return null;
        const progressPercent = (currentTime / duration) * 100;

        return (
            <div className="w-full max-w-md mt-6 px-4 group flex flex-col items-center">
                <div className="w-full flex justify-between text-[10px] font-mono text-slate-600 mb-2 uppercase tracking-widest font-bold">
                    <span>{formatTime(currentTime)}</span>
                    <span>{formatTime(duration)}</span>
                </div>

                <div className="relative w-full h-6 flex items-center cursor-pointer">
                    <input
                        type="range"
                        min="0"
                        max={duration}
                        step="0.01"
                        value={currentTime}
                        onMouseDown={() => setIsDragging(true)}
                        onTouchStart={() => setIsDragging(true)}
                        onMouseUp={() => setIsDragging(false)}
                        onTouchEnd={() => setIsDragging(false)}
                        onChange={(e) => {
                            const val = parseFloat(e.target.value);
                            setCurrentTime(val);
                            if (audioControllerRef.current) audioControllerRef.current.seek(val);
                        }}
                        className="absolute inset-x-0 w-full h-full opacity-0 z-30 cursor-pointer appearance-none"
                    />
                    <div className="absolute inset-x-0 h-[3px] bg-slate-900 rounded-full" />
                    <div className="absolute inset-x-0 h-full pointer-events-none">
                        <div
                            className="absolute h-[3px] bg-emerald-400 top-1/2 -translate-y-1/2 rounded-full left-0 transition-all duration-75 ease-out"
                            style={{ width: `${progressPercent}%` }}
                        />
                        <div
                            className={`absolute h-4 w-4 bg-emerald-400 rounded-full border-2 border-emerald-700 shadow-[0_0_15px_rgba(16,185,129,0.5)] top-1/2 -translate-y-1/2 transition-all duration-75 ease-out ${isDragging ? 'scale-125' : 'scale-100'}`}
                            style={{ left: `calc(${progressPercent}% - 8px)` }}
                        />
                    </div>
                </div>
            </div>
        );
    };

    const renderPlaybackControls = () => {
        if (!showPlaybackButtons) return null;
        return (
            <div className="flex flex-col items-center w-full">
                {renderProgressBar()}
            </div>
        );
    };

    const renderSelection = () => (
        <div className="p-8 space-y-8 animate-in fade-in duration-300">
            <div className="flex items-center justify-between border-b border-slate-800/50 pb-6">
                <div className="flex items-center gap-4">
                    {onBackToSelection && (
                        <button
                            onClick={onBackToSelection}
                            className="p-3 rounded-2xl bg-slate-900 border border-slate-800 text-slate-500 hover:text-white hover:border-emerald-500/50 transition-all active:scale-95 group"
                            title="Change Language"
                        >
                            <svg className="w-5 h-5 flex-shrink-0 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                    )}
                    <h2 className="text-3xl font-black text-slate-300 italic tracking-tight">Lecciones</h2>
                </div>
                <div className="flex gap-2">
                    <button onClick={() => setAppState(SpanishAppState.VOCABULARY)} className="bg-slate-800/50 hover:bg-emerald-500/20 text-slate-400 hover:text-emerald-300 transition-colors p-2 rounded-xl border border-slate-700 hover:border-emerald-500/30">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                    </button>
                </div>
            </div>
            <div className="grid gap-6">
                {SPANISH_STORIES.map((story) => (
                    <button key={story.id} onClick={() => startPractice(story)} className="group flex items-center justify-between p-6 rounded-3xl border border-slate-800 bg-slate-800/20 hover:border-emerald-400/30 hover:bg-slate-800/40 transition-all text-left shadow-lg">
                        <div>
                            <h3 className="text-xl font-bold text-slate-300 group-hover:text-emerald-300 transition-colors">{story.title}</h3>
                            <p className="text-slate-400 text-sm mt-1 leading-relaxed">{story.description}</p>
                        </div>
                        <div className="bg-emerald-400/20 p-3 rounded-full text-emerald-200 opacity-30 group-hover:opacity-100 transition-all transform group-hover:translate-x-1 border border-emerald-400/20">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" /></svg>
                        </div>
                    </button>
                ))}
            </div>
        </div>
    );

    const renderInteractiveSentence = (sentence: string, words?: SpanishWord[]) => {
        if (!words || words.length === 0) {
            return <p className="text-xl font-medium text-slate-300 leading-relaxed transition-all">{sentence}</p>;
        }

        // Sort words by length descending to match longer phrases first
        const sortedWords = [...words].sort((a, b) => b.english.length - a.english.length);
        const pattern = sortedWords.map(w => w.english.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|');
        const regex = new RegExp(`(${pattern})`, 'gi');

        const parts = sentence.split(regex);

        return (
            <div className="flex flex-wrap justify-center items-baseline text-center max-w-2xl px-4">
                {parts.map((part, i) => {
                    const matchingWord = words.find(w => w.english.toLowerCase() === part.toLowerCase());
                    if (matchingWord) {
                        return (
                            <SpanishWordSpan
                                key={i}
                                word={matchingWord}
                                onSave={saveWord}
                                isSaved={savedWords.some(w => w.english.toLowerCase() === matchingWord.english.toLowerCase())}
                                className="text-xl font-medium text-slate-400 transition-colors cursor-pointer select-none active:text-emerald-300 relative group inline-block px-[2px]"
                            />
                        );
                    }
                    // Filter out empty parts but keep spaces/punctuation
                    if (!part) return null;
                    return (
                        <span key={i} className="text-xl font-medium text-slate-400 leading-relaxed px-[2px]">
                            {part}
                        </span>
                    );
                })}
            </div>
        );
    };

    const renderFullListen = () => (
        <div className="flex-1 flex flex-col p-8 animate-in fade-in duration-300 relative">
            {renderError()}
            <div className="flex justify-between items-center mb-8">
                <button onClick={() => { setAppState(SpanishAppState.SELECTING); stopCurrentAudio(); }} className="text-slate-500 hover:text-emerald-300 p-2 -ml-2 transition-colors flex items-center gap-2 group">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7" /></svg>
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Lecciones</span>
                </button>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center">
                <div className={`w-48 h-48 rounded-full border-[6px] flex items-center justify-center text-slate-400 text-2xl font-black shadow-2xl transition-all duration-300 select-none
          ${isPulsating ? 'bg-emerald-400/30 border-emerald-400/40 animate-pulsate' : (isAudioPlaying && !isPaused) ? 'bg-emerald-400/20 border-emerald-400/20 text-emerald-200 shadow-[0_0_80px_rgba(16,185,129,0.15)]' : 'bg-slate-800/40 border-slate-800/60'}`}>
                    {isPulsating || (isAudioPlaying && !isPaused) ? 'ESCUCHAR' : 'LISTO'}
                </div>

                <p className="text-slate-400 font-bold text-2xl mt-12 text-center">{selectedStory?.title}</p>
                {renderPlaybackControls()}
            </div>
            <div className="mt-8 flex gap-4 w-full h-24 items-end">
                {isFullStoryDone && !isAudioPlaying && !isPulsating && (
                    <>
                        <button onClick={() => triggerListeningSequence(true)} className="flex-1 bg-slate-800/30 text-slate-400 font-bold py-5 rounded-3xl border border-slate-800 transition-all active:scale-95 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                        </button>
                        <button onClick={handleContinueToSentences} className="flex-[2] relative overflow-hidden group rounded-3xl p-[2px] active:scale-95 h-[72px]">
                            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 opacity-60 group-hover:opacity-100 transition-opacity blur-md" />
                            <div className="relative h-full w-full bg-[#1e1e32] rounded-[22px] flex items-center justify-center border border-emerald-400/20 overflow-hidden">
                                <span className="text-slate-200 font-black text-lg tracking-widest uppercase">Empezar Práctica</span>
                            </div>
                        </button>
                    </>
                )}
            </div>
        </div>
    );

    const renderComprehension = () => {
        const question = selectedStory?.questions[currentQuestionIndex];
        if (!question) return null;

        return (
            <div className="flex-1 flex flex-col p-8 animate-in fade-in duration-300 relative">
                {renderError()}
                <div className="flex justify-between items-center mb-6">
                    <button onClick={() => { setAppState(SpanishAppState.SELECTING); stopCurrentAudio(); }} className="text-slate-500 hover:text-emerald-300 p-2 -ml-2 transition-colors flex items-center gap-2 group">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7" /></svg>
                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 hidden sm:inline-block">Lecciones</span>
                    </button>
                    <div className="flex items-center gap-4">
                        <div className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-400/60 hidden sm:block">Desafío {currentQuestionIndex + 1} / {selectedStory!.questions.length}</div>
                        <div className="flex gap-1">
                            {selectedStory!.questions.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => handleJumpToQuestion(idx)}
                                    className={`h-1.5 rounded-full transition-all outline-none ${idx === currentQuestionIndex ? 'bg-emerald-400 w-10' : idx < currentQuestionIndex ? 'bg-emerald-900 w-6 hover:bg-emerald-800' : 'bg-slate-800 w-6 hover:bg-slate-700'}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex-1 flex flex-col items-center justify-center">
                    <div className={`w-32 h-32 rounded-full border-4 flex items-center justify-center text-slate-400 text-lg font-black transition-all duration-300 mb-8
            ${isPulsating ? 'bg-emerald-400/30 border-emerald-400/40 animate-pulsate' : isAudioPlaying ? 'bg-emerald-400/10 border-emerald-400/20 text-emerald-200' : 'bg-slate-800/20 border-slate-800/40'}`}>
                        {isPulsating || isAudioPlaying ? 'ESCUCHAR' : 'REPETIR'}
                    </div>

                    {hasAnswered && (
                        <div className="w-full bg-slate-900/40 p-6 rounded-3xl border border-slate-800/50 mb-8 animate-in fade-in slide-in-from-top-4 duration-500">
                            <p className="text-lg font-medium text-slate-200 mb-1">{question.questionEnglish}</p>
                            <p className="text-sm text-slate-500 italic">"{question.questionSpanish}"</p>
                        </div>
                    )}

                    <div className="w-full grid gap-4">
                        {question.options.map((option, idx) => {
                            const isCorrect = option.isCorrect;
                            const isSelected = selectedAnswerIndex === idx;
                            let style = "bg-slate-800/20 border-slate-800 text-slate-400";

                            if (hasAnswered) {
                                if (isCorrect) style = "bg-emerald-500/10 border-emerald-500/50 text-emerald-200 shadow-[0_0_20px_rgba(16,185,129,0.1)]";
                                else if (isSelected) style = "bg-rose-500/10 border-rose-500/50 text-rose-300 opacity-60";
                                else style = "bg-slate-900/10 border-slate-900 text-slate-700 opacity-30";
                            }

                            return (
                                <button
                                    key={idx}
                                    disabled={hasAnswered}
                                    onClick={() => handleAnswerSelect(idx)}
                                    className={`p-5 rounded-2xl border text-left transition-all font-bold text-sm tracking-wide ${style} ${!hasAnswered ? 'hover:bg-slate-800/40 hover:border-slate-700 active:scale-[0.98]' : ''}`}
                                >
                                    <div className="flex justify-between items-center">
                                        <span>{option.text}</span>
                                        {hasAnswered && isCorrect && (
                                            <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                                        )}
                                    </div>
                                </button>
                            );
                        })}
                    </div>

                    {hasAnswered && (
                        <div className="mt-8 w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <p className="text-slate-400 text-xs text-center mb-6 leading-relaxed bg-emerald-400/5 p-4 rounded-xl border border-emerald-400/10">
                                <span className="text-emerald-300 font-black uppercase tracking-widest text-[10px] block mb-1">Punto Clave</span>
                                {question.answerExplanation}
                            </p>
                            <button
                                onClick={handleNextQuestion}
                                className="w-full bg-emerald-500 text-white font-black py-4 rounded-2xl transition-all shadow-lg active:scale-95 uppercase tracking-widest text-xs"
                            >
                                {currentQuestionIndex === selectedStory!.questions.length - 1 ? 'Terminar Lección' : 'Siguiente Pregunta'}
                            </button>
                        </div>
                    )}

                    {!hasAnswered && !isAudioPlaying && !isPulsating && (
                        <button onClick={() => triggerListeningSequence(false, currentQuestionIndex, undefined, true)} className="mt-6 text-slate-500 hover:text-slate-300 flex items-center gap-2 font-black uppercase text-[10px] tracking-[0.3em] transition-colors">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                            Repetir Audio
                        </button>
                    )}
                </div>
            </div>
        );
    };

    const renderSentenceListen = () => (
        <div className="flex-1 flex flex-col p-8 animate-in fade-in duration-300 relative">
            {renderError()}
            <div className="flex justify-between items-center mb-8">
                <button onClick={() => { setAppState(SpanishAppState.SELECTING); stopCurrentAudio(); }} className="text-slate-500 hover:text-emerald-300 p-2 -ml-2 transition-colors flex items-center gap-2 group">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7" /></svg>
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Lecciones</span>
                </button>
                <div className="flex gap-2">
                    {selectedStory?.sentences.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => handleJumpToSentence(idx)}
                            className={`h-2 rounded-full transition-all duration-500 outline-none ${idx === currentSentenceIndex ? 'bg-emerald-400/60 w-16 shadow-[0_0_15px_rgba(16,185,129,0.3)]' : 'bg-slate-800 w-10 hover:bg-slate-700'}`}
                        />
                    ))}
                </div>
            </div>

            <div className="flex-1 flex flex-col items-center justify-center">
                <div className={`w-40 h-40 rounded-full border-[6px] flex items-center justify-center text-slate-400 text-2xl font-black shadow-2xl transition-all duration-300 select-none
          ${isPulsating ? 'bg-emerald-400/30 border-emerald-400/40 animate-pulsate' : (isAudioPlaying && !isPaused) ? 'bg-emerald-400/20 border-emerald-400/20 text-emerald-200 shadow-[0_0_80px_rgba(16,185,129,0.15)]' : 'bg-slate-800/40 border-slate-800/60'}`}>
                    {isPulsating || (isAudioPlaying && !isPaused) ? 'ESCUCHAR' : 'LISTO'}
                </div>

                <span className="mt-4 text-emerald-400/60 font-black uppercase text-[10px] tracking-[0.5em]">Oración {currentSentenceIndex + 1} / {selectedStory?.sentences.length || 0}</span>
                {renderPlaybackControls()}

                <div className="w-full flex-1 flex items-center justify-center min-h-[220px] mt-4">
                    {showTranslation && selectedStory && (
                        <div className="w-full bg-[#0d1221] p-10 rounded-[48px] border border-slate-800/30 animate-in fade-in slide-in-from-bottom-6 duration-700 text-center shadow-2xl relative overflow-hidden">
                            <div className="relative z-10 flex flex-col items-center gap-10">
                                {/* English Sentence (Interactive) */}
                                {renderInteractiveSentence(selectedStory.sentences[currentSentenceIndex].english, selectedStory.sentences[currentSentenceIndex].words)}

                                {/* Spanish Translation */}
                                <div className="pt-8 border-t border-slate-800/40 w-full max-w-md">
                                    <p className="text-slate-400 text-lg leading-relaxed font-sans mx-auto italic opacity-80">{selectedStory.sentences[currentSentenceIndex].spanish}</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <div className="mt-8 w-full flex flex-col items-center gap-6">
                {!isPulsating && !isAudioPlaying && (
                    <button onClick={() => setShowTranslation(!showTranslation)} className={`px-8 py-3 rounded-full font-black text-[10px] uppercase tracking-widest transition-all border active:scale-95 flex items-center gap-2 ${showTranslation ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-300' : 'bg-slate-800/40 border-slate-800 text-slate-500'}`}>
                        {showTranslation ? 'Ocultar Texto' : 'Mostrar Texto'}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16m-7 6h7" /></svg>
                    </button>
                )}
                <div className="w-full flex items-center justify-between h-20 px-2">
                    {!isPulsating && !isAudioPlaying ? (
                        <>
                            <button onClick={handlePrevSentence} className="w-14 h-14 rounded-2xl flex items-center justify-center text-slate-500 hover:text-slate-300 active:scale-90"><svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" /></svg></button>
                            <button onClick={() => triggerListeningSequence(false)} className="group flex items-center gap-3 bg-slate-800/20 hover:bg-slate-800/40 text-slate-300 border border-slate-700/50 px-8 py-4 rounded-3xl transition-all active:scale-95 shadow-xl">
                                <svg className="h-5 w-5 text-emerald-400 group-hover:rotate-180 transition-transform duration-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                                <span className="font-black uppercase text-xs tracking-widest">Repetir</span>
                            </button>
                            <button onClick={handleNextSentence} className="w-14 h-14 rounded-2xl flex items-center justify-center text-slate-300 bg-emerald-500/10 hover:bg-emerald-500/20 active:scale-90 border border-emerald-500/20"><svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" /></svg></button>
                        </>
                    ) : (
                        <div className="w-full flex items-center justify-center text-slate-700 font-mono text-[10px] tracking-[0.4em] uppercase animate-pulse"></div>
                    )}
                </div>
            </div>
        </div>
    );

    return (
        <Layout headerTitle="Inglés">
            {appState === SpanishAppState.SELECTING && renderSelection()}
            {appState === SpanishAppState.FULL_LISTEN && renderFullListen()}
            {appState === SpanishAppState.SENTENCE_LISTEN && renderSentenceListen()}
            {appState === SpanishAppState.COMPREHENSION && renderComprehension()}
            {appState === SpanishAppState.VOCABULARY && (
                <div className="flex-1 flex flex-col p-8 animate-in fade-in duration-300 w-full">
                    <div className="flex justify-between items-center mb-8 border-b border-slate-800/50 pb-6">
                        <button onClick={() => setAppState(SpanishAppState.SELECTING)} className="text-slate-500 hover:text-emerald-300 -ml-2 p-2 flex items-center gap-2 group">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7" /></svg>
                            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Volver</span>
                        </button>
                        <h2 className="text-2xl font-black text-slate-300 italic tracking-tight">Vocabulario</h2>
                    </div>

                    <div className="flex justify-end mb-6 gap-2">
                        <button onClick={() => setVocabSort('english')} className={`text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest border transition-all ${vocabSort === 'english' ? 'bg-emerald-500/20 border-emerald-500/50 text-emerald-300' : 'border-slate-800 text-slate-500'}`}>Inglés</button>
                        <button onClick={() => setVocabSort('spanish')} className={`text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest border transition-all ${vocabSort === 'spanish' ? 'bg-emerald-500/20 border-emerald-500/50 text-emerald-300' : 'border-slate-800 text-slate-500'}`}>Español</button>
                    </div>

                    <div className="grid gap-3 overflow-y-auto max-h-[60vh] pr-2 custom-scrollbar">
                        {savedWords.length === 0 ? (
                            <div className="text-center py-20 text-slate-600 font-mono text-sm uppercase tracking-widest">Aún no hay palabras guardadas</div>
                        ) : (
                            savedWords.slice().sort((a, b) => a[vocabSort].localeCompare(b[vocabSort])).map((word, idx) => (
                                <div key={idx} className="bg-slate-800/20 border border-slate-800 rounded-2xl p-4 flex items-center justify-between group hover:bg-slate-800/40 hover:border-emerald-500/20 transition-all">
                                    <div className="flex items-center gap-4">
                                        {vocabSort === 'english' ? (
                                            <>
                                                <div className="text-emerald-400 font-bold font-mono min-w-[100px]">{word.english}</div>
                                                <div className="text-slate-500 italic text-sm border-l border-slate-700 pl-4">{word.spanish}</div>
                                            </>
                                        ) : (
                                            <>
                                                <div className="text-emerald-400 font-bold font-mono min-w-[100px]">{word.spanish}</div>
                                                <div className="text-slate-500 italic text-sm border-l border-slate-700 pl-4">{word.english}</div>
                                            </>
                                        )}
                                    </div>
                                    <button onClick={() => deleteWord(idx)} className="text-slate-600 hover:text-rose-400 opacity-0 group-hover:opacity-100 transition-opacity p-2">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                                    </button>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            )}
        </Layout>
    );
};

export default SpanishApp;
