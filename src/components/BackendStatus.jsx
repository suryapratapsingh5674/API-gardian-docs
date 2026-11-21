// apps/docs/src/components/BackendStatus.jsx
import React, { useState, useEffect } from 'react';

export default function BackendStatus() {
  const defaultUrl = 'https://api-gardian-server.onrender.com';
  const [serverUrl, setServerUrl] = useState(defaultUrl);
  const [status, setStatus] = useState('checking'); // 'healthy' | 'unreachable' | 'checking'
  const [latency, setLatency] = useState(null);
  const [info, setInfo] = useState(null);

  async function checkHealth(targetUrl = serverUrl) {
    setStatus('checking');
    const start = performance.now();
    try {
      const res = await fetch(`${targetUrl}/health`, { signal: AbortSignal.timeout(3000) });
      const elapsed = Math.round(performance.now() - start);
      if (res.ok) {
        const data = await res.json();
        setStatus('healthy');
        setLatency(elapsed);
        setInfo(data);
      } else {
        setStatus('unreachable');
        setLatency(null);
        setInfo(null);
      }
    } catch {
      setStatus('unreachable');
      setLatency(null);
      setInfo(null);
    }
  }

  useEffect(() => {
    checkHealth();
  }, []);

  return (
    <section id="status" className="max-w-5xl mx-auto px-6 py-12">
      <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xl">📡</span>
              <h3 className="text-lg font-bold text-white">Central Backend Status</h3>
            </div>
            <p className="text-sm text-gray-400">
              Real-time health probe for the API Guardian central service.
            </p>
          </div>

          <div className="flex items-center gap-3">
            {status === 'healthy' && (
              <span className="inline-flex items-center gap-1.5 bg-emerald-950/60 border border-emerald-700/60 text-emerald-300 text-xs font-semibold px-3 py-1.5 rounded-full">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Online ({latency}ms)
              </span>
            )}
            {status === 'unreachable' && (
              <span className="inline-flex items-center gap-1.5 bg-rose-950/60 border border-rose-700/60 text-rose-300 text-xs font-semibold px-3 py-1.5 rounded-full">
                <span className="w-2 h-2 rounded-full bg-rose-400" />
                Offline / Not Running
              </span>
            )}
            {status === 'checking' && (
              <span className="inline-flex items-center gap-1.5 bg-amber-950/60 border border-amber-700/60 text-amber-300 text-xs font-semibold px-3 py-1.5 rounded-full">
                Checking…
              </span>
            )}
            <button
              onClick={() => checkHealth()}
              className="text-xs bg-gray-800 hover:bg-gray-700 text-gray-200 px-3 py-1.5 rounded-lg border border-gray-700 transition-colors"
            >
              Recheck
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono">
          <div className="bg-gray-950/80 border border-gray-800 rounded-xl p-3.5">
            <span className="text-gray-500 block mb-1">ENDPOINT</span>
            <span className="text-gray-200 break-all">{serverUrl}/health</span>
          </div>
          <div className="bg-gray-950/80 border border-gray-800 rounded-xl p-3.5">
            <span className="text-gray-500 block mb-1">SERVICE NAME</span>
            <span className="text-indigo-400">{info?.service || 'api-guardian-server'}</span>
          </div>
          <div className="bg-gray-950/80 border border-gray-800 rounded-xl p-3.5">
            <span className="text-gray-500 block mb-1">LOCAL START COMMAND</span>
            <span className="text-emerald-400">cd apps/server &amp;&amp; npm run dev</span>
          </div>
        </div>
      </div>
    </section>
  );
}

