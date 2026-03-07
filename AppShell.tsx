import React, { useState, useEffect } from 'react';
import App from './App';
import SpanishApp from './SpanishApp';
import LearnSpanishApp from './LearnSpanishApp';

type LanguageTab = 'mandarin' | 'spanish' | 'learnSpanish';

const AppShell: React.FC = () => {
    const [activeTab, setActiveTab] = useState<LanguageTab | null>(() => {
        // We still check localStorage for persistence, but we'll show the selection screen if it's a "fresh" start or if they want to switch
        return (localStorage.getItem('echo_active_tab') as LanguageTab) || null;
    });

    const [showSelector, setShowSelector] = useState(!activeTab);

    useEffect(() => {
        if (activeTab) {
            localStorage.setItem('echo_active_tab', activeTab);
        }
    }, [activeTab]);

    const selectLanguage = (lang: LanguageTab) => {
        setActiveTab(lang);
        setShowSelector(false);
    };

    const handleBackToSelector = () => {
        setShowSelector(true);
    };

    if (showSelector) {
        return (
            <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-6 relative overflow-hidden">
                {/* Background Glows */}
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-violet-600/20 blur-[120px] rounded-full" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-600/20 blur-[120px] rounded-full" />

                <div className="z-10 w-full max-w-4xl text-center">
                    <h1 className="text-6xl font-black text-white tracking-tighter uppercase italic mb-2 drop-shadow-2xl">
                        Echo
                    </h1>
                    <p className="text-slate-500 font-mono text-xs uppercase tracking-[0.5em] mb-16">
                        Language Listening Mastery
                    </p>

                    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 px-4">
                        {/* Mandarin Card */}
                        <button
                            onClick={() => selectLanguage('mandarin')}
                            className="group relative flex flex-col items-center justify-center p-12 rounded-[40px] bg-slate-900/40 border border-slate-800/50 hover:border-violet-500/50 transition-all duration-500 hover:scale-[1.02] active:scale-95 hover:shadow-[0_0_80px_rgba(139,92,246,0.15)] overflow-hidden min-h-[300px]"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            <span className="text-6xl font-black text-violet-400/80 mb-4 transform group-hover:scale-110 transition-transform duration-500 tracking-tighter">CN</span>
                            <h2 className="text-3xl font-black text-white tracking-tight transition-transform duration-500 group-hover:scale-105">Mandarin</h2>
                        </button>

                        {/* English Card */}
                        <button
                            onClick={() => selectLanguage('spanish')}
                            className="group relative flex flex-col items-center justify-center p-12 rounded-[40px] bg-slate-900/40 border border-slate-800/50 hover:border-emerald-500/50 transition-all duration-500 hover:scale-[1.02] active:scale-95 hover:shadow-[0_0_80px_rgba(16,185,129,0.15)] overflow-hidden min-h-[300px]"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            <span className="text-6xl font-black text-emerald-400/80 mb-4 transform group-hover:scale-110 transition-transform duration-500 tracking-tighter">ING</span>
                            <h2 className="text-3xl font-black text-white tracking-tight transition-transform duration-500 group-hover:scale-105">Inglés</h2>
                        </button>

                        {/* Spanish for English Speakers Card */}
                        <button
                            onClick={() => selectLanguage('learnSpanish')}
                            className="group relative flex flex-col items-center justify-center p-12 rounded-[40px] bg-slate-900/40 border border-slate-800/50 hover:border-amber-500/50 transition-all duration-500 hover:scale-[1.02] active:scale-95 hover:shadow-[0_0_80px_rgba(245,158,11,0.15)] overflow-hidden min-h-[300px]"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-amber-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            <span className="text-6xl font-black text-amber-400/80 mb-4 transform group-hover:scale-110 transition-transform duration-500 tracking-tighter">SP</span>
                            <h2 className="text-3xl font-black text-white tracking-tight transition-transform duration-500 group-hover:scale-105">Spanish</h2>
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <>
            <div className="min-h-screen">
                {activeTab === 'mandarin' && <App onBackToSelection={handleBackToSelector} />}
                {activeTab === 'spanish' && <SpanishApp onBackToSelection={handleBackToSelector} />}
                {activeTab === 'learnSpanish' && <LearnSpanishApp onBackToSelection={handleBackToSelector} />}
            </div>
        </>
    );
};

export default AppShell;
