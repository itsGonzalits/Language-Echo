
import React, { useRef, useState } from 'react';
import { Word } from '../types';

interface WordSpanProps {
    word: Word;
    onSave: (word: Word) => void;
    isSaved: boolean;
}

export const WordSpan: React.FC<WordSpanProps> = ({ word, onSave, isSaved }) => {
    const longPressTimerRef = useRef<NodeJS.Timeout | null>(null);
    const [showTooltip, setShowTooltip] = useState(false);

    const [showSavedFeedback, setShowSavedFeedback] = useState(false);
    const [feedbackText, setFeedbackText] = useState('Saved');

    // We need to track if it was a long press or just a click
    const isLongPressRef = useRef(false);

    const handleStart = () => {
        isLongPressRef.current = false;
        longPressTimerRef.current = setTimeout(() => {
            isLongPressRef.current = true;
            setFeedbackText(isSaved ? 'Already Saved' : 'Saved');
            onSave(word);
            setShowSavedFeedback(true);
            setTimeout(() => setShowSavedFeedback(false), 1500);
        }, 600);
    };

    const handleEnd = () => {
        if (longPressTimerRef.current) clearTimeout(longPressTimerRef.current);
    };

    const handleClick = () => {
        // If it wasn't a long press (i.e. timer was cleared before 600ms), show tooltip
        if (!isLongPressRef.current) {
            setShowTooltip(true);
            setTimeout(() => setShowTooltip(false), 2500);
        }
    };

    return (
        <span
            onMouseDown={handleStart}
            onMouseUp={handleEnd}
            onTouchStart={handleStart}
            onTouchEnd={handleEnd}
            onMouseLeave={handleEnd}
            onClick={handleClick}
            className="text-violet-400 text-sm font-medium tracking-[0.05em] hover:text-violet-300 transition-colors cursor-pointer select-none active:text-violet-200 relative group inline-block"
        >
            {word.pinyin}

            {/* Single Tap Tooltip */}
            <span className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-slate-900 border border-violet-500/50 text-slate-200 text-xs px-3 py-2 rounded-xl shadow-2xl z-[9999] flex flex-col items-center gap-1 transition-all duration-200 pointer-events-none min-w-[60px] whitespace-nowrap ${showTooltip ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-2 scale-95'}`}>
                <span className="font-black text-white text-[14px] leading-none">{word.hanzi}</span>
                <span className="text-violet-300 font-medium text-[10px] uppercase tracking-wide">{word.meaning}</span>
                <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-slate-900 border-b border-r border-violet-500/50 rotate-45"></div>
            </span>

            {/* Saved Feedback Badge */}
            <span className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-1 bg-violet-500 text-white text-[9px] font-black uppercase tracking-widest px-2 py-1 rounded-md shadow-lg z-[110] transition-all duration-300 pointer-events-none whitespace-nowrap ${showSavedFeedback ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-2 scale-75'}`}>
                {feedbackText}
            </span>

            {/* Desktop Hover Hint */}
            <span className={`hidden md:block absolute top-full left-1/2 -translate-x-1/2 mt-1 bg-slate-900 text-slate-500 text-[8px] uppercase tracking-widest px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-slate-800 ${showSavedFeedback ? 'opacity-0' : ''}`}>
                {isSaved ? 'Saved' : 'Hold to save'}
            </span>
        </span>
    );
};
