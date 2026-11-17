// apps/docs/src/components/ConfigReference.jsx
import React from 'react';

export default function ConfigReference() {
  const backendVars = [
    { name: 'PORT', default: '3001', desc: 'Port on which the central API Guardian Express server listens.' },
    { name: 'NODE_ENV', default: 'development', desc: 'Environment mode (development or production).' },
    { name: 'MONGODB_URI', default: 'mongodb://localhost:27017/api-guardian', desc: 'MongoDB connection string (local or MongoDB Atlas cluster).' },
    { name: 'JWT_SECRET', default: 'Required in prod', desc: 'Cryptographic secret used for signing API tokens.' },
    { name: 'EXPO_PUSH_URL', default: 'https://exp.host/--/api/v2/push/send', desc: 'Expo Push Service endpoint (override for unit/integration testing).' },
  ];

  const sdkVars = [
    { name: 'API_GUARDIAN_SERVER_URL', default: 'http://localhost:3001', desc: 'Base URL of your central API Guardian backend service.' },
    { name: 'API_GUARDIAN_PROJECT_ID', default: 'None (auto-saved)', desc: 'The MongoDB ObjectId assigned to your Express project.' },
    { name: 'API_GUARDIAN_API_KEY', default: 'None (auto-saved)', desc: 'Project secret API key used to authenticate error reports.' },
  ];

  return (
    <section id="config" className="max-w-5xl mx-auto px-6 py-16 border-b border-gray-800">
      <div className="mb-10 text-center sm:text-left">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Configuration &amp; Environment Variables</h2>
        <p className="text-gray-400 max-w-2xl text-sm sm:text-base">
          Reference for deploying the central backend and configuring the Express SDK across staging and production.
        </p>
      </div>

      {/* Precedence Hierarchy */}
      <div className="bg-gray-900/60 border border-gray-800 rounded-2xl p-6 sm:p-8 mb-10">
        <h3 className="text-base font-bold text-white mb-2">SDK Credential Precedence Order</h3>
        <p className="text-sm text-gray-400 mb-4">
          When <code className="text-indigo-300 font-mono text-xs">createGuardian()</code> starts up, it resolves credentials in this exact order:
        </p>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 text-xs font-mono">
          <div className="bg-indigo-950/80 border border-indigo-700/60 text-indigo-300 p-3 rounded-xl flex-1 text-center font-bold">
            1. Explicit Options<br />
            <span className="text-gray-400 font-normal">createGuardian(&#123; projectId, apiKey &#125;)</span>
          </div>
          <span className="hidden sm:inline text-gray-600 font-bold">→</span>
          <div className="bg-gray-950 border border-gray-800 text-gray-300 p-3 rounded-xl flex-1 text-center font-bold">
            2. Environment Variables<br />
            <span className="text-gray-500 font-normal">API_GUARDIAN_API_KEY</span>
          </div>
          <span className="hidden sm:inline text-gray-600 font-bold">→</span>
          <div className="bg-gray-950 border border-gray-800 text-gray-300 p-3 rounded-xl flex-1 text-center font-bold">
            3. Local Config File<br />
            <span className="text-gray-500 font-normal">.api-guardian.json (gitignored)</span>
          </div>
        </div>
      </div>

      {/* Table 1: Central Backend */}
      <div className="mb-10">
        <h3 className="text-lg font-bold text-white mb-4">Central Backend Service</h3>
        <div className="bg-gray-950 border border-gray-800 rounded-2xl overflow-hidden shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-gray-900/80 text-gray-400 font-mono uppercase text-xs border-b border-gray-800">
                <tr>
                  <th className="py-3 px-4">Variable</th>
                  <th className="py-3 px-4">Default</th>
                  <th className="py-3 px-4">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800/60 font-mono text-gray-300">
                {backendVars.map((v) => (
                  <tr key={v.name} className="hover:bg-gray-900/30">
                    <td className="py-3 px-4 font-bold text-indigo-300">{v.name}</td>
                    <td className="py-3 px-4 text-gray-500">{v.default}</td>
                    <td className="py-3 px-4 font-sans text-gray-400">{v.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Table 2: SDK */}
      <div>
        <h3 className="text-lg font-bold text-white mb-4">Express SDK</h3>
        <div className="bg-gray-950 border border-gray-800 rounded-2xl overflow-hidden shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-gray-900/80 text-gray-400 font-mono uppercase text-xs border-b border-gray-800">
                <tr>
                  <th className="py-3 px-4">Variable</th>
                  <th className="py-3 px-4">Default</th>
                  <th className="py-3 px-4">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800/60 font-mono text-gray-300">
                {sdkVars.map((v) => (
                  <tr key={v.name} className="hover:bg-gray-900/30">
                    <td className="py-3 px-4 font-bold text-indigo-300">{v.name}</td>
                    <td className="py-3 px-4 text-gray-500">{v.default}</td>
                    <td className="py-3 px-4 font-sans text-gray-400">{v.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

