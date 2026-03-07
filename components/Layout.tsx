import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
  headerTitle?: string;
}

export const Layout: React.FC<LayoutProps> = ({ children, headerTitle = 'Mandarin Echo' }) => {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center p-4 md:p-12 selection:bg-violet-500/20 selection:text-slate-300">
      <header className="w-full max-w-4xl mb-12 text-center opacity-0 h-0 pointer-events-none">
        <h1 className="text-4xl font-black text-violet-400 tracking-tighter uppercase italic drop-shadow-[0_0_10px_rgba(139,92,246,0.2)]">
          {headerTitle}
        </h1>
      </header>
      <main className="w-full max-w-2xl bg-[#0a0f1d] border border-slate-800/40 shadow-[0_30px_60px_rgba(0,0,0,0.8)] rounded-[40px] overflow-hidden min-h-[600px] flex flex-col transition-all duration-300 relative">
        {children}
      </main>

    </div>
  );
};