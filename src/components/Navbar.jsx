// apps/docs/src/components/Navbar.jsx
import React, { useState } from 'react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-gray-950/80 backdrop-blur border-b border-gray-800">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="flex items-center gap-3 group">
          <span className="text-2xl group-hover:scale-110 transition-transform">🛡️</span>
          <div>
            <span className="text-xl font-bold text-white tracking-tight">API Guardian</span>
            <span className="hidden sm:inline-block ml-2 text-xs font-semibold px-2 py-0.5 rounded bg-indigo-900/60 text-indigo-300 border border-indigo-700/50">
              v0.1.0
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6 text-sm text-gray-300">
          <a href="#quickstart" className="hover:text-white transition-colors">Quick Start</a>
          <a href="#middleware" className="hover:text-white transition-colors">Middleware</a>
          <a href="#pairing" className="hover:text-white transition-colors">QR Pairing</a>
          <a href="#mobile-apk" className="hover:text-white transition-colors">Mobile & APK</a>
          <a href="#config" className="hover:text-white transition-colors">Configuration</a>
          <a href="#troubleshooting" className="hover:text-white transition-colors">Troubleshooting</a>
          <a
            href="https://www.npmjs.com/package/@surya_tomar/api-guardian"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-xs font-semibold text-rose-300 bg-rose-950/40 border border-rose-800/60 hover:bg-rose-900/60 px-2.5 py-1 rounded-full transition-colors"
          >
            <span className="font-mono text-[10px] font-bold bg-rose-500 text-white px-1 rounded">npm</span>
            v0.1.0 ↗
          </a>
          <a href="#status" className="flex items-center gap-1.5 text-xs font-medium text-emerald-400 bg-emerald-950/40 border border-emerald-800/60 px-2.5 py-1 rounded-full">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Status
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-gray-400 hover:text-white p-2"
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
      </nav>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-800 bg-gray-950 px-6 py-4 flex flex-col gap-3 text-sm text-gray-300">
          <a href="#quickstart" onClick={() => setMobileMenuOpen(false)} className="py-1">Quick Start</a>
          <a href="#middleware" onClick={() => setMobileMenuOpen(false)} className="py-1">Middleware Guide</a>
          <a href="#pairing" onClick={() => setMobileMenuOpen(false)} className="py-1">QR Pairing</a>
          <a href="#mobile-apk" onClick={() => setMobileMenuOpen(false)} className="py-1">Mobile & APK</a>
          <a href="#config" onClick={() => setMobileMenuOpen(false)} className="py-1">Configuration</a>
          <a href="#troubleshooting" onClick={() => setMobileMenuOpen(false)} className="py-1">Troubleshooting</a>
          <a href="#status" onClick={() => setMobileMenuOpen(false)} className="py-1 text-emerald-400">Backend Status</a>
        </div>
      )}
    </header>
  );
}
