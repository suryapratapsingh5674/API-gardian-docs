// apps/docs/src/components/Footer.jsx
import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-midnight-800 bg-white dark:bg-midnight-950 py-14 px-6 transition-colors duration-200">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-sm text-slate-500 dark:text-slate-400">
        <div className="flex items-center gap-3">
          <span className="text-2xl">🛡️</span>
          <div>
            <span className="text-slate-900 dark:text-white font-bold block text-sm">API Guardian</span>
            <span className="text-xs text-slate-500 dark:text-slate-400">Instant developer error alerts for Express APIs</span>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center sm:justify-end gap-5 text-xs font-medium">
          <a
            href="https://www.npmjs.com/package/@surya_tomar/api-guardian"
            target="_blank"
            rel="noreferrer"
            className="text-slate-600 dark:text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 transition-colors"
          >
            npm package ↗
          </a>
          <span className="text-slate-300 dark:text-midnight-700">·</span>
          <a
            href="/downloads/api-guardian.apk"
            download="api-guardian.apk"
            className="text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
          >
            Download APK ⬇️
          </a>
          <span className="text-slate-300 dark:text-midnight-700">·</span>
          <a
            href="https://api-gardian-server.onrender.com/health"
            target="_blank"
            rel="noreferrer"
            className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-blue-400 transition-colors"
          >
            Live Gateway Status ↗
          </a>
        </div>
      </div>

      <div className="max-w-5xl mx-auto mt-8 pt-6 border-t border-slate-100 dark:border-midnight-800/80 text-center text-xs text-slate-400 dark:text-slate-500">
        Open Source under the MIT License · Built with Express, React Native &amp; MongoDB
      </div>
    </footer>
  );
}
