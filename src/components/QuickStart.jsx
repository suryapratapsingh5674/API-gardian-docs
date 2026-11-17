// apps/docs/src/components/QuickStart.jsx
import React, { useState } from 'react';

function CodeBlock({ code, language = 'bash' }) {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard?.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="relative group bg-gray-950 border border-gray-800 rounded-xl overflow-hidden my-3">
      <div className="flex items-center justify-between px-4 py-2 border-b border-gray-800/80 bg-gray-900/40 text-xs text-gray-500 font-mono">
        <span>{language}</span>
        <button
          onClick={handleCopy}
          className="text-gray-400 hover:text-white transition-colors"
        >
          {copied ? '✓ Copied' : 'Copy'}
        </button>
      </div>
      <pre className="p-4 text-xs sm:text-sm text-gray-300 overflow-x-auto font-mono leading-relaxed">
        <code>{code}</code>
      </pre>
    </div>
  );
}

export default function QuickStart() {
  const installCode = `npm install @surya_tomar/api-guardian`;

  const expressCode = `const express = require('express');
const { createGuardian } = require('@surya_tomar/api-guardian');

const app = express();
app.use(express.json());

// 1. Initialise API Guardian (connects in background, non-blocking)
const guardian = createGuardian({
  projectName: 'My Express API', // Display name shown on your mobile device
});

// 2. Your existing application routes
app.get('/api/users', (req, res) => {
  res.json({ users: [] });
});

// 3. Register API Guardian error middleware AFTER all routes
// Express error middleware requires the 4-argument signature: (err, req, res, next)
app.use(guardian.errorMiddleware());

// 4. Your standard final error response handler
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({ error: err.message });
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});`;

  return (
    <section id="quickstart" className="max-w-5xl mx-auto px-6 py-16 border-b border-gray-800">
      <div className="mb-10 text-center sm:text-left">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Quick Start Guide</h2>
        <p className="text-gray-400 max-w-2xl text-sm sm:text-base">
          Integrate API Guardian into any Express application with minimal code changes.
        </p>
      </div>

      <div className="space-y-12">
        {/* Step 1 */}
        <div className="bg-gray-900/60 border border-gray-800 rounded-2xl p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-sm">
              1
            </span>
            <h3 className="text-lg font-bold text-white">Install the SDK</h3>
          </div>
          <div className="flex items-center justify-between gap-2 mb-3">
            <p className="text-sm text-gray-400">
              Install the lightweight package into your Express backend project:
            </p>
            <a
              href="https://www.npmjs.com/package/@surya_tomar/api-guardian"
              target="_blank"
              rel="noreferrer"
              className="text-xs text-rose-400 hover:text-rose-300 transition-colors font-medium inline-flex items-center gap-1"
            >
              View on npm ↗
            </a>
          </div>
          <CodeBlock code={installCode} language="bash" />
        </div>

        {/* Step 2 */}
        <div className="bg-gray-900/60 border border-gray-800 rounded-2xl p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-sm">
              2
            </span>
            <h3 className="text-lg font-bold text-white">Add Error Middleware to Express</h3>
          </div>
          <p className="text-sm text-gray-400 mb-3">
            Initialize the guardian instance and mount <code className="text-indigo-300 font-mono text-xs bg-gray-950 px-1.5 py-0.5 rounded">guardian.errorMiddleware()</code> after all routes.
          </p>
          <CodeBlock code={expressCode} language="javascript" />
        </div>

        {/* Step 3 */}
        <div className="bg-gray-900/60 border border-gray-800 rounded-2xl p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-sm">
              3
            </span>
            <h3 className="text-lg font-bold text-white">Pair Your Phone via Terminal QR</h3>
          </div>
          <p className="text-sm text-gray-400 mb-4">
            When your Express application starts for the first time, a QR code will be generated in your terminal:
          </p>

          <div className="bg-gray-950 border border-gray-800 rounded-xl p-6 font-mono text-xs text-gray-400">
            <p className="text-indigo-400 mb-2 font-bold">[API Guardian] First run detected. Registering project: "My Express API"...</p>
            <p className="text-emerald-400 mb-4">━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</p>
            <p className="text-white font-bold">  🛡️  API Guardian — Pair your mobile device</p>
            <p className="text-gray-400">  Project : My Express API</p>
            <p className="text-gray-400">  ID      : 6724fa9e08a5f07bffa8f59e</p>
            <div className="my-4 py-3 px-4 bg-gray-900/80 inline-block rounded text-gray-300 border border-gray-800">
              [ ▄▄▄▄▄▄▄  QR Code Displayed in Terminal  ▄▄▄▄▄▄▄ ]
            </div>
            <p className="text-amber-300">  ⏰ This code expires in 10 minutes.</p>
            <p className="text-emerald-400 mt-2">━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</p>
          </div>
        </div>
      </div>
    </section>
  );
}
