// apps/docs/src/components/QuickStart.jsx
import React, { useState } from 'react';

export default function QuickStart() {
  const [copiedCode, setCopiedCode] = useState(false);
  const [copiedInstall, setCopiedInstall] = useState(false);

  const installCommand = 'npm install @surya_tomar/api-guardian';

  const sampleCode = `const express = require('express');
const { createGuardian } = require('@surya_tomar/api-guardian');

const app = express();
app.use(express.json());

// 1. Initialise API Guardian
// Automatically connects to the cloud gateway; prints a pairing QR code in terminal
const guardian = createGuardian({
  projectName: 'My Express API',
});

// ... your normal routes ...
app.get('/api/checkout', (req, res) => {
  throw new Error('Database connection failed!'); // Crashes the route
});

// 2. Mount API Guardian error middleware AFTER all routes
// Express requires the exact 4-parameter signature: (err, req, res, next)
app.use(guardian.errorMiddleware());

// 3. Your standard final error response handler
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({ error: err.message });
});

app.listen(3000, () => {
  console.log('App running on http://localhost:3000');
});`;

  function handleCopyCode() {
    navigator.clipboard?.writeText(sampleCode);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  }

  function handleCopyInstall() {
    navigator.clipboard?.writeText(installCommand);
    setCopiedInstall(true);
    setTimeout(() => setCopiedInstall(false), 2000);
  }

  return (
    <section id="quickstart" className="py-24 px-6 transition-colors duration-200">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-xs font-bold tracking-wider uppercase text-indigo-700 dark:text-blue-400 bg-indigo-50 dark:bg-blue-950/60 border border-indigo-200 dark:border-blue-800/60 px-3.5 py-1 rounded-full">
            Fast Integration
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-4 mb-3">
            Quick Start Guide
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            Zero configuration required. Drop the middleware into your Express application and start receiving error notifications.
          </p>
        </div>

        {/* Step 1: Install Command Box */}
        <div className="bg-white dark:bg-midnight-850 border border-slate-200 dark:border-midnight-700 rounded-2xl p-6 sm:p-7 mb-8 shadow-sm dark:shadow-midnight-950/40 transition-colors">
          <div className="flex items-center justify-between gap-4 mb-3">
            <div className="flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-indigo-600 dark:bg-blue-600 text-white font-bold text-xs flex items-center justify-center">
                1
              </span>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                Install the SDK from npm
              </h3>
            </div>
            <a
              href="https://www.npmjs.com/package/@surya_tomar/api-guardian"
              target="_blank"
              rel="noreferrer"
              className="text-xs text-rose-600 dark:text-rose-400 hover:text-rose-700 dark:hover:text-rose-300 transition-colors font-semibold"
            >
              npm package ↗
            </a>
          </div>

          <div className="flex items-center justify-between bg-slate-50 dark:bg-midnight-950 border border-slate-200 dark:border-midnight-800 rounded-xl p-3.5 font-mono text-xs sm:text-sm text-slate-800 dark:text-slate-200 overflow-x-auto">
            <span className="text-indigo-600 dark:text-blue-400 font-bold">{installCommand}</span>
            <button
              onClick={handleCopyInstall}
              className="text-xs font-sans text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-white dark:bg-midnight-800 hover:bg-slate-100 dark:hover:bg-midnight-700 px-3 py-1.5 rounded-lg border border-slate-300 dark:border-midnight-700 shadow-sm transition-colors ml-4 flex-shrink-0 font-medium"
            >
              {copiedInstall ? '✓ Copied' : 'Copy'}
            </button>
          </div>
        </div>

        {/* Step 2: Code Window */}
        <div className="bg-white dark:bg-midnight-850 border border-slate-200 dark:border-midnight-700 rounded-2xl p-6 sm:p-7 shadow-sm dark:shadow-midnight-950/40 transition-colors">
          <div className="flex items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-indigo-600 dark:bg-blue-600 text-white font-bold text-xs flex items-center justify-center">
                2
              </span>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                Add Error Middleware to Express
              </h3>
            </div>
            <button
              onClick={handleCopyCode}
              className="text-xs text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-50 dark:bg-midnight-800 hover:bg-slate-100 dark:hover:bg-midnight-700 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-midnight-700 transition-colors font-medium"
            >
              {copiedCode ? '✓ Copied Full Code' : 'Copy Code'}
            </button>
          </div>

          {/* Code Window with macOS dots */}
          <div className="rounded-xl border border-slate-800 dark:border-midnight-700 overflow-hidden bg-slate-900 dark:bg-midnight-950 shadow-xl">
            <div className="flex items-center gap-2 px-4 py-2.5 bg-slate-950 dark:bg-midnight-900 border-b border-slate-800 dark:border-midnight-800 text-xs text-slate-400">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              </div>
              <span className="font-mono text-[11px] text-slate-400 ml-2">server.js</span>
            </div>

            <pre className="p-5 text-xs sm:text-sm text-slate-200 font-mono leading-relaxed overflow-x-auto">
              <code>{sampleCode}</code>
            </pre>
          </div>

          <div className="mt-4 text-xs text-slate-500 dark:text-slate-400 flex items-center gap-2">
            <span>🛡️</span>
            <span><strong>Never swallows errors:</strong> Calls <code className="text-indigo-600 dark:text-blue-400 font-semibold">next(err)</code> so your existing loggers and response handlers always run.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
