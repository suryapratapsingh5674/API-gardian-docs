// apps/docs/src/components/TerminalPairing.jsx
import React from 'react';

export default function TerminalPairing() {
  return (
    <section id="pairing" className="max-w-5xl mx-auto px-6 py-16 border-b border-gray-800">
      <div className="mb-10 text-center sm:text-left">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Terminal QR Pairing Workflow</h2>
        <p className="text-gray-400 max-w-2xl text-sm sm:text-base">
          Zero-configuration device connection using single-use ephemeral cryptographic tokens.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-gray-900/60 border border-gray-800 rounded-2xl p-6">
          <div className="text-2xl mb-3">⏳</div>
          <h3 className="text-base font-bold text-white mb-2">Short-Lived &amp; Ephemeral</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            The pairing token expires after 10 minutes. If the token expires before being scanned, the background poller automatically requests a fresh token and refreshes the terminal QR code.
          </p>
        </div>

        <div className="bg-gray-900/60 border border-gray-800 rounded-2xl p-6">
          <div className="text-2xl mb-3">🚫</div>
          <h3 className="text-base font-bold text-white mb-2">No Keys in QR Code</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            API keys and persistent credentials are never embedded in the QR image. The QR payload only carries the project identifier, backend URL, and a temporary random session token.
          </p>
        </div>

        <div className="bg-gray-900/60 border border-gray-800 rounded-2xl p-6">
          <div className="text-2xl mb-3">🔒</div>
          <h3 className="text-base font-bold text-white mb-2">Single-Use Replay Protection</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Once a mobile phone submits the token to <code className="text-indigo-300 font-mono text-xs">POST /api/pair</code>, the session is consumed immediately. Any replay attempt is strictly rejected.
          </p>
        </div>
      </div>

      {/* QR Payload structure */}
      <div className="bg-gray-900/60 border border-gray-800 rounded-2xl p-6 sm:p-8">
        <h3 className="text-base font-bold text-white mb-2">What Does the QR Code Contain?</h3>
        <p className="text-sm text-gray-400 mb-4">
          When scanned by the companion app, the camera decodes a compact JSON payload:
        </p>
        <div className="bg-gray-950 border border-gray-800 rounded-xl p-4 font-mono text-xs text-gray-300 leading-relaxed">
          <span className="text-gray-500">&#123;</span><br />
          &nbsp;&nbsp;<span className="text-indigo-400">"serverUrl"</span>: <span className="text-emerald-400">"http://192.168.1.100:3001"</span>,<br />
          &nbsp;&nbsp;<span className="text-indigo-400">"projectId"</span>: <span className="text-emerald-400">"6724fa9e08a5f07bffa8f59e"</span>,<br />
          &nbsp;&nbsp;<span className="text-indigo-400">"projectName"</span>: <span className="text-emerald-400">"Demo Express App"</span>,<br />
          &nbsp;&nbsp;<span className="text-indigo-400">"token"</span>: <span className="text-amber-400">"4f81c9b2e7d3a015"</span> <span className="text-gray-600">// Single-use hex</span><br />
          <span className="text-gray-500">&#125;</span>
        </div>
      </div>
    </section>
  );
}

