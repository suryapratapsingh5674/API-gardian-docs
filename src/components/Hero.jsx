// apps/docs/src/components/Hero.jsx
import React, { useState, useEffect } from 'react';

export default function Hero() {
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState('checking'); // 'healthy' | 'unreachable' | 'checking'
  const [latency, setLatency] = useState(null);

  const installCommand = 'npm install @surya_tomar/api-guardian';
  const liveBackendUrl = 'https://api-gardian-server-student-6afc2609f2eb2405ffa380a1.kuros.cryboy.in';

  useEffect(() => {
    async function checkHealth() {
      const start = performance.now();
      try {
        const res = await fetch(`${liveBackendUrl}/health`, { signal: AbortSignal.timeout(3000) });
        const elapsed = Math.round(performance.now() - start);
        if (res.ok) {
          setStatus('healthy');
          setLatency(elapsed);
        } else {
          setStatus('unreachable');
        }
      } catch {
        setStatus('unreachable');
      }
    }
    checkHealth();
  }, []);

  function handleCopy() {
    navigator.clipboard?.writeText(installCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <section className="relative overflow-hidden pt-16 pb-20 px-6 transition-colors duration-200">
      {/* Dynamic atmospheric glow: Pastel in light mode, deep electric blue/indigo in dark mode */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[650px] h-[350px] bg-gradient-to-tr from-indigo-200/50 via-purple-200/40 to-emerald-200/40 dark:from-blue-600/20 dark:via-indigo-600/20 dark:to-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto text-center">
        {/* Live Status Pill */}
        <div className="inline-flex items-center gap-2.5 bg-white/90 dark:bg-midnight-850/90 border border-slate-200/90 dark:border-midnight-700 text-xs font-semibold px-4 py-1.5 rounded-full mb-8 shadow-sm backdrop-blur transition-colors">
          {status === 'healthy' ? (
            <>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-slate-700 dark:text-slate-200">Cloud Gateway Online</span>
              <span className="text-emerald-700 dark:text-emerald-400 font-mono text-[11px] bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800/40">
                {latency}ms
              </span>
            </>
          ) : status === 'checking' ? (
            <>
              <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
              <span className="text-slate-500 dark:text-slate-400">Pinging Gateway…</span>
            </>
          ) : (
            <>
              <span className="w-2 h-2 rounded-full bg-rose-500" />
              <span className="text-slate-500 dark:text-slate-400">Gateway Offline</span>
            </>
          )}
        </div>

        {/* Main Catchy Heading */}
        <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6 leading-[1.15]">
          Instant Mobile Push Alerts for Your{' '}
          <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-indigo-300 dark:to-cyan-300 bg-clip-text text-transparent">
            Express API Errors
          </span>
        </h1>

        {/* Spacious, readable subtext */}
        <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          One line of Express middleware. When an unhandled 5xx error crashes your server, API Guardian sends a high-priority alert with sanitized stack traces straight to your phone.
        </p>

        {/* 1-Click Copyable Package Command */}
        <div className="flex justify-center mb-10">
          <button
            onClick={handleCopy}
            className="group flex items-center gap-3 bg-white dark:bg-midnight-850 hover:bg-slate-50 dark:hover:bg-midnight-800 border border-slate-300 dark:border-midnight-700 hover:border-indigo-400 dark:hover:border-blue-500/60 px-5 py-3 rounded-2xl shadow-sm hover:shadow-md dark:shadow-midnight-950/50 transition-all text-sm font-mono text-slate-800 dark:text-slate-100"
          >
            <span className="text-indigo-600 dark:text-blue-400 font-bold select-none">$</span>
            <span className="font-semibold">{installCommand}</span>
            <span className="text-xs font-sans font-semibold bg-indigo-50 dark:bg-blue-600/20 group-hover:bg-indigo-100 dark:group-hover:bg-blue-600/30 text-indigo-700 dark:text-blue-300 px-2.5 py-1 rounded-lg border border-indigo-200 dark:border-blue-500/30 transition-colors ml-2">
              {copied ? '✓ Copied' : 'Copy'}
            </span>
          </button>
        </div>

        {/* Primary Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#download"
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-7 py-3.5 rounded-xl shadow-lg shadow-emerald-600/25 hover:shadow-emerald-600/35 hover:scale-[1.02] active:scale-[0.98] transition-all text-sm"
          >
            <span>📱</span> Download Android APK
          </a>

          <a
            href="https://www.npmjs.com/package/@surya_tomar/api-guardian"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-white dark:bg-midnight-850 hover:bg-rose-50 dark:hover:bg-midnight-800 text-rose-600 dark:text-rose-400 font-semibold px-6 py-3.5 rounded-xl border border-rose-200 dark:border-midnight-700 shadow-sm transition-all text-sm"
          >
            <span className="font-mono text-xs font-bold bg-rose-600 text-white px-1.5 py-0.5 rounded">npm</span>
            View on npm ↗
          </a>

          <a
            href="#quickstart"
            className="inline-flex items-center gap-2 bg-white dark:bg-midnight-850 hover:bg-slate-50 dark:hover:bg-midnight-800 text-slate-700 dark:text-slate-300 font-semibold px-6 py-3.5 rounded-xl border border-slate-200 dark:border-midnight-700 shadow-sm transition-all text-sm"
          >
            Quick Start Guide ↓
          </a>
        </div>
      </div>
    </section>
  );
}
