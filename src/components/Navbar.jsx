// apps/docs/src/components/Navbar.jsx
import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext.jsx';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 bg-white/90 dark:bg-midnight-950/90 backdrop-blur-md border-b border-slate-200/90 dark:border-midnight-800 transition-colors duration-200">
      <nav className="max-w-6xl mx-auto px-6 py-3.5 flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="flex items-center gap-3 group">
          <span className="text-2xl group-hover:scale-110 transition-transform">🛡️</span>
          <div className="flex items-center gap-2">
            <span className="text-lg font-extrabold text-slate-900 dark:text-white tracking-tight">API Guardian</span>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-50 dark:bg-blue-500/10 text-indigo-700 dark:text-blue-400 border border-indigo-200 dark:border-blue-500/30">
              v0.1.0
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-5 text-sm">
          <a href="#how-it-works" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white font-medium transition-colors">
            How it Works
          </a>

          <a href="#quickstart" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white font-medium transition-colors">
            Quick Start
          </a>

          <a
            href="https://www.npmjs.com/package/@surya_tomar/api-guardian"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-xs font-semibold text-rose-700 dark:text-rose-400 bg-rose-50 dark:bg-rose-500/10 border border-rose-200 dark:border-rose-500/30 hover:bg-rose-100/80 dark:hover:bg-rose-500/20 px-3 py-1.5 rounded-full transition-colors"
          >
            <span className="font-mono text-[10px] font-bold bg-rose-600 text-white px-1 rounded">npm</span>
            @surya_tomar/api-guardian ↗
          </a>

          <a
            href="#download"
            className="inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-4 py-2 rounded-xl text-xs shadow-md shadow-emerald-600/20 transition-all hover:scale-105 active:scale-95"
          >
            <span>⬇️</span> Download APK
          </a>

          {/* Theme Toggle Button */}
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              toggleTheme();
            }}
            aria-label="Toggle theme"
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-midnight-850 dark:hover:bg-midnight-800 text-slate-700 dark:text-amber-300 border border-slate-200 dark:border-midnight-700/80 shadow-sm transition-all hover:scale-105 active:scale-95 ml-1 cursor-pointer select-none"
            title={theme === 'dark' ? 'Switch to Light mode' : 'Switch to Dark mode'}
          >
            {theme === 'dark' ? (
              <>
                <span className="text-base leading-none">☀️</span>
                <span className="text-xs font-semibold text-slate-300">Light</span>
              </>
            ) : (
              <>
                <span className="text-base leading-none">🌙</span>
                <span className="text-xs font-semibold text-slate-700">Dark</span>
              </>
            )}
          </button>
        </div>

        {/* Mobile controls: Theme toggle + Hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              toggleTheme();
            }}
            aria-label="Toggle theme"
            className="px-2.5 py-1.5 rounded-xl bg-slate-100 dark:bg-midnight-850 text-slate-700 dark:text-amber-300 border border-slate-200 dark:border-midnight-700 flex items-center gap-1 text-sm cursor-pointer"
          >
            {theme === 'dark' ? (
              <>
                <span>☀️</span>
                <span className="text-[11px] font-medium text-slate-300">Light</span>
              </>
            ) : (
              <>
                <span>🌙</span>
                <span className="text-[11px] font-medium text-slate-700">Dark</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white p-2"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 dark:border-midnight-800 bg-white dark:bg-midnight-950 px-6 py-4 flex flex-col gap-3 text-sm shadow-lg">
          <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)} className="text-slate-700 dark:text-slate-300 font-medium py-1">
            How it Works
          </a>
          <a href="#quickstart" onClick={() => setMobileMenuOpen(false)} className="text-slate-700 dark:text-slate-300 font-medium py-1">
            Quick Start Guide
          </a>
          <a href="#download" onClick={() => setMobileMenuOpen(false)} className="text-emerald-600 dark:text-emerald-400 font-bold py-1">
            ⬇️ Download Android APK
          </a>
          <a
            href="https://www.npmjs.com/package/@surya_tomar/api-guardian"
            target="_blank"
            rel="noreferrer"
            className="text-rose-600 dark:text-rose-400 font-semibold py-1"
          >
            View on npm ↗
          </a>
        </div>
      )}
    </header>
  );
}
