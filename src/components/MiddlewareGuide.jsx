// apps/docs/src/components/MiddlewareGuide.jsx
import React from 'react';

export default function MiddlewareGuide() {
  const manualCaptureExample = `try {
  await processPayment(invoiceId);
} catch (err) {
  // Capture application-level error with safe contextual metadata
  guardian.captureError(err, {
    context: 'stripe-billing-worker',
    invoiceId: invoiceId, // Safe identifier
  });

  // Re-throw or handle according to your application flow
  throw err;
}`;

  return (
    <section id="middleware" className="max-w-5xl mx-auto px-6 py-16 border-b border-gray-800">
      <div className="mb-10 text-center sm:text-left">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Middleware Architecture Guide</h2>
        <p className="text-gray-400 max-w-2xl text-sm sm:text-base">
          Understanding Express error propagation, data sanitization, and manual error capture.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {/* Card 1: 4-Argument Signature */}
        <div className="bg-gray-900/60 border border-gray-800 rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xl">📐</span>
            <h3 className="text-base font-bold text-white">The 4-Argument Rule</h3>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed mb-4">
            Express detects error handlers by inspecting <code className="text-indigo-300 font-mono text-xs">fn.length</code>. The error middleware returned by <code className="text-indigo-300 font-mono text-xs">guardian.errorMiddleware()</code> declares exactly four arguments:
          </p>
          <div className="bg-gray-950 p-3 rounded-lg font-mono text-xs text-indigo-300 border border-gray-800 mb-4">
            (err, req, res, next) =&gt; &#123; ... &#125;
          </div>
          <p className="text-xs text-gray-500">
            If a function declares only 3 arguments, Express treats it as regular middleware and skips it when an error is passed to <code className="font-mono text-gray-400">next(err)</code>.
          </p>
        </div>

        {/* Card 2: Never Swallows Errors */}
        <div className="bg-gray-900/60 border border-gray-800 rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xl">🔄</span>
            <h3 className="text-base font-bold text-white">Errors Are Never Swallowed</h3>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed mb-4">
            API Guardian is an observability and alerting tool, not an error silencer. Our middleware asynchronously dispatches the error report and immediately calls <code className="text-indigo-300 font-mono text-xs">next(err)</code>.
          </p>
          <p className="text-sm text-gray-400 leading-relaxed">
            Your downstream error handlers, Sentry integrations, or custom JSON responses always execute unaffected.
          </p>
        </div>

        {/* Card 3: Automatic Sanitization */}
        <div className="bg-gray-900/60 border border-gray-800 rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xl">🔒</span>
            <h3 className="text-base font-bold text-white">Strict Data Sanitization</h3>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed mb-3">
            Before an error event leaves your server, all sensitive credentials are automatically redacted:
          </p>
          <ul className="text-xs text-gray-400 space-y-1.5 list-disc list-inside font-mono">
            <li><span className="text-rose-400">Authorization</span> and Bearer tokens stripped</li>
            <li><span className="text-rose-400">Cookie</span> and session tokens removed</li>
            <li>Raw request bodies are never transmitted</li>
            <li>Stack traces stripped of noisy <code className="text-gray-300">node_modules/</code> paths</li>
          </ul>
        </div>

        {/* Card 4: Deduplication Storm Prevention */}
        <div className="bg-gray-900/60 border border-gray-800 rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xl">🔕</span>
            <h3 className="text-base font-bold text-white">Duplicate Suppression</h3>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed mb-3">
            If your database goes offline and 100 requests fail within 5 seconds, API Guardian creates a fingerprint hash of:
          </p>
          <div className="bg-gray-950 p-2.5 rounded font-mono text-xs text-amber-300 border border-gray-800 mb-3">
            hash(message + statusCode + route)
          </div>
          <p className="text-xs text-gray-500">
            Identical errors are silenced for 60 seconds after the first notification to protect you from push notification storms.
          </p>
        </div>
      </div>

      {/* Manual Capture Code Block */}
      <div className="bg-gray-900/60 border border-gray-800 rounded-2xl p-6 sm:p-8">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xl">🎯</span>
          <h3 className="text-lg font-bold text-white">Manual Error Capture with guardian.captureError()</h3>
        </div>
        <p className="text-sm text-gray-400 mb-4">
          For background jobs, async queues, or try/catch blocks where errors don't flow through standard Express error middleware, call <code className="text-indigo-300 font-mono text-xs bg-gray-950 px-1.5 py-0.5 rounded">guardian.captureError(err, context)</code>:
        </p>
        <pre className="bg-gray-950 border border-gray-800 rounded-xl p-4 text-xs sm:text-sm text-gray-300 font-mono overflow-x-auto leading-relaxed">
          <code>{manualCaptureExample}</code>
        </pre>
      </div>
    </section>
  );
}

