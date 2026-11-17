// apps/docs/src/components/Footer.jsx
import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-gray-800/80 bg-gray-950 py-12 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-sm text-gray-500">
        <div className="flex items-center gap-3">
          <span className="text-2xl">🛡️</span>
          <div>
            <span className="text-white font-bold block">API Guardian</span>
            <span className="text-xs text-gray-400">Developer Error Alerts for Express APIs</span>
          </div>
        </div>

        <div className="text-center sm:text-right text-xs space-y-2">
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-3 text-xs mb-2">
            <a
              href="https://www.npmjs.com/package/@surya_tomar/api-guardian"
              target="_blank"
              rel="noreferrer"
              className="text-rose-400 hover:text-rose-300 transition-colors font-medium"
            >
              npm Package ↗
            </a>
            <span className="text-gray-700">·</span>
            <a
              href="/downloads/api-guardian.apk"
              download
              className="text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
            >
              Download APK ⬇️
            </a>
            <span className="text-gray-700">·</span>
            <a
              href="https://api-gardian-server-student-6afc2609f2eb2405ffa380a1.kuros.cryboy.in/health"
              target="_blank"
              rel="noreferrer"
              className="text-indigo-400 hover:text-indigo-300 transition-colors font-medium"
            >
              Live API Gateway ↗
            </a>
          </div>
          <p className="text-gray-400">
            Built as a portfolio project using React, Node.js, Express, MongoDB, and React Native / Expo.
          </p>
          <p className="text-gray-500">
            MIT Licensed · Monorepo Architecture · Production Release v0.1.0
          </p>
        </div>
      </div>
    </footer>
  );
}
