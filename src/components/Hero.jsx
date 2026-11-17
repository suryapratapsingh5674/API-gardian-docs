// apps/docs/src/components/Hero.jsx
import React from 'react';

export default function Hero() {
  const flowSteps = [
    { label: 'Express Route Fails', sub: 'HTTP 500 error', icon: '💥' },
    { label: 'SDK Middleware', sub: 'Sanitizes & deduplicates', icon: '🛡️' },
    { label: 'Central Backend', sub: 'Stores event in MongoDB', icon: '☁️' },
    { label: 'Expo Push Service', sub: 'High-priority delivery', icon: '⚡' },
    { label: 'Companion App', sub: 'Alert on your phone', icon: '📱' },
  ];

  return (
    <section className="relative overflow-hidden pt-16 pb-20 px-6 border-b border-gray-800">
      {/* Background glow effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-indigo-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto text-center">
        {/* Pill */}
        <div className="inline-flex items-center gap-2 bg-indigo-950/60 border border-indigo-700/60 text-indigo-300 text-xs font-semibold px-3.5 py-1.5 rounded-full mb-6">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          Developer Portfolio Tool · Open Source
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
          Instant Mobile Push Alerts for{' '}
          <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-indigo-200 bg-clip-text text-transparent">
            Express API Errors
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed font-normal">
          Connect your Node.js backend to a companion mobile app in under 2 minutes. When unhandled 5xx errors occur, get high-priority push notifications with sanitized stack traces before your users complain.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <a
            href="#quickstart"
            className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-6 py-3.5 rounded-xl shadow-lg shadow-indigo-600/25 transition-all text-sm"
          >
            Get Started in 3 Steps
          </a>
          <a
            href="https://www.npmjs.com/package/@surya_tomar/api-guardian"
            target="_blank"
            rel="noreferrer"
            className="bg-gray-900 hover:bg-gray-800 text-rose-300 font-medium px-6 py-3.5 rounded-xl border border-rose-900/50 hover:border-rose-700 transition-all text-sm flex items-center gap-2"
          >
            <span className="font-mono text-xs font-bold bg-rose-500 text-white px-1.5 py-0.5 rounded">npm</span>
            npm install @surya_tomar/api-guardian ↗
          </a>
          <a
            href="#mobile-apk"
            className="bg-emerald-950/40 hover:bg-emerald-900/40 text-emerald-300 font-medium px-6 py-3.5 rounded-xl border border-emerald-800/60 transition-all text-sm flex items-center gap-2"
          >
            <span>📱</span> Mobile App &amp; APK
          </a>
        </div>

        {/* Interactive Architecture Flow Banner */}
        <div className="bg-gray-900/80 border border-gray-800 rounded-2xl p-6 sm:p-8 text-left shadow-2xl">
          <h2 className="text-xs font-bold text-gray-400 tracking-wider uppercase mb-6 text-center">
            How The Alerting Pipeline Works
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 relative">
            {flowSteps.map((step, idx) => (
              <div
                key={step.label}
                className="bg-gray-950/60 border border-gray-800/80 rounded-xl p-4 flex flex-col items-center text-center relative group hover:border-indigo-600/60 transition-colors"
              >
                <span className="text-3xl mb-2">{step.icon}</span>
                <span className="text-sm font-semibold text-white mb-1">{step.label}</span>
                <span className="text-xs text-gray-400">{step.sub}</span>

                {idx < flowSteps.length - 1 && (
                  <div className="hidden sm:block absolute -right-2 top-1/2 -translate-y-1/2 text-gray-600 font-bold z-10">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
