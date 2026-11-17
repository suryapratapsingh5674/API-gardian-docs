// apps/docs/src/components/DownloadApk.jsx
import React from 'react';

export default function DownloadApk() {
  return (
    <section id="download" className="py-24 px-6 relative transition-colors duration-200">
      <div className="max-w-4xl mx-auto">
        {/* Soft ambient accent: light emerald in light mode, deep emerald glow in dark mode */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[300px] bg-emerald-200/40 dark:bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="relative bg-gradient-to-br from-emerald-50/80 via-white to-teal-50/80 dark:from-midnight-850 dark:via-midnight-900 dark:to-midnight-850 border border-emerald-200 dark:border-emerald-500/30 rounded-3xl p-8 sm:p-14 shadow-xl shadow-emerald-100/50 dark:shadow-midnight-950/60 text-center sm:text-left overflow-hidden transition-colors">
          {/* Subtle top accent bar */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-emerald-400 via-teal-500 to-emerald-400" />

          <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 bg-emerald-100/80 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-700/60 text-emerald-800 dark:text-emerald-300 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Standalone Android APK · v0.1.0
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
                Get the Mobile Companion App
              </h2>

              <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed mb-6 max-w-xl">
                Install directly on any Android device. Once installed, scan the QR code printed by your Express terminal to link your phone.
              </p>

              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 text-xs text-slate-700 dark:text-slate-300">
                <span className="flex items-center gap-1.5 bg-white dark:bg-midnight-950 px-3 py-1.5 rounded-lg border border-emerald-200 dark:border-midnight-700 shadow-sm font-medium">
                  📦 <strong>88 MB</strong> (Universal APK)
                </span>
                <span className="flex items-center gap-1.5 bg-white dark:bg-midnight-950 px-3 py-1.5 rounded-lg border border-emerald-200 dark:border-midnight-700 shadow-sm font-medium">
                  📱 <strong>Android 9.0+</strong>
                </span>
                <span className="flex items-center gap-1.5 bg-white dark:bg-midnight-950 px-3 py-1.5 rounded-lg border border-emerald-200 dark:border-midnight-700 shadow-sm font-medium">
                  ⚡ <strong>Background Push Alerts</strong>
                </span>
              </div>
            </div>

            {/* Big Action Column */}
            <div className="flex flex-col items-center gap-3 w-full sm:w-auto">
              <a
                href="/downloads/api-guardian.apk"
                download="api-guardian.apk"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-8 py-4 rounded-2xl shadow-xl shadow-emerald-600/30 hover:scale-[1.02] active:scale-[0.98] transition-all text-base"
              >
                <span className="text-xl">⬇️</span>
                <span>Download APK File</span>
              </a>

              <p className="text-[11px] text-slate-500 dark:text-slate-400 text-center">
                Free &amp; Open Source · No Play Store account required
              </p>
            </div>
          </div>

          {/* Simple 2-Step Guide */}
          <div className="mt-10 pt-8 border-t border-emerald-200/80 dark:border-midnight-700/80 grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
            <div className="flex items-start gap-3">
              <div className="w-7 h-7 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5 border border-emerald-300 dark:border-emerald-700/60">
                1
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">Install on Your Phone</h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Open the downloaded <code className="text-emerald-700 dark:text-emerald-400 font-semibold font-mono">.apk</code> on your Android phone and tap install (allow "Install from this source" if prompted).
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-7 h-7 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5 border border-emerald-300 dark:border-emerald-700/60">
                2
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">Scan Your Terminal QR</h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Start your Express server. Open the app, point your camera at the printed terminal QR code, and tap Pair!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
