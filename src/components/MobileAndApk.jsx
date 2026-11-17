// apps/docs/src/components/MobileAndApk.jsx
import React from 'react';

export default function MobileAndApk() {
  return (
    <section id="mobile-apk" className="max-w-5xl mx-auto px-6 py-16 border-b border-gray-800">
      <div className="mb-10 text-center sm:text-left">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Mobile Companion App &amp; Android APK</h2>
        <p className="text-gray-400 max-w-2xl text-sm sm:text-base">
          How to run the app during local development and build a standalone installable APK.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        {/* Method 1: Expo Go Development */}
        <div className="bg-gray-900/60 border border-gray-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <div className="inline-block bg-indigo-950/80 border border-indigo-700/60 text-indigo-300 text-xs font-semibold px-2.5 py-1 rounded-md mb-4">
              Fastest for Development
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Run with Expo Go</h3>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Test on a physical device immediately without compiling native binaries.
            </p>
            <ol className="text-sm text-gray-300 space-y-3 list-decimal list-inside font-normal mb-6">
              <li>
                Install <span className="text-indigo-400 font-semibold">Expo Go</span> from Google Play or the iOS App Store.
              </li>
              <li>
                Start the development server:
                <pre className="bg-gray-950 p-2.5 rounded font-mono text-xs text-gray-300 mt-1 border border-gray-800">
                  cd apps/mobile &amp;&amp; npx expo start
                </pre>
              </li>
              <li>Scan the Expo Metro QR code with your phone camera to launch API Guardian.</li>
            </ol>
          </div>
          <div className="text-xs text-gray-500 bg-gray-950/50 p-3 rounded-lg border border-gray-800">
            💡 Ensure your mobile device and computer are connected to the same Wi-Fi network.
          </div>
        </div>

        {/* Method 2: Standalone APK Build */}
        <div className="bg-gray-900/60 border border-gray-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <div className="inline-block bg-emerald-950/80 border border-emerald-700/60 text-emerald-300 text-xs font-semibold px-2.5 py-1 rounded-md mb-4">
              Standalone Android APK
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Build an Installable APK</h3>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Build a self-contained <code className="text-emerald-400 font-mono text-xs">.apk</code> file for distribution and testing without Metro.
            </p>
            <ol className="text-sm text-gray-300 space-y-3 list-decimal list-inside font-normal mb-6">
              <li>Install the Expo Application Services (EAS) CLI:
                <pre className="bg-gray-950 p-2.5 rounded font-mono text-xs text-gray-300 mt-1 border border-gray-800">
                  npm install -g eas-cli
                </pre>
              </li>
              <li>Login to your Expo account:
                <pre className="bg-gray-950 p-2.5 rounded font-mono text-xs text-gray-300 mt-1 border border-gray-800">
                  eas login
                </pre>
              </li>
              <li>Trigger the Android standalone APK build:
                <pre className="bg-gray-950 p-2.5 rounded font-mono text-xs text-emerald-400 mt-1 border border-gray-800">
                  eas build -p android --profile preview
                </pre>
              </li>
            </ol>
          </div>
          <div className="text-xs text-gray-500 bg-gray-950/50 p-3 rounded-lg border border-gray-800">
            ⚙️ Configured in <code className="text-gray-400">apps/mobile/eas.json</code> with <code className="text-gray-400">buildType: "apk"</code>.
          </div>
        </div>
      </div>

      {/* APK Artifact Status & Installation */}
      <div className="bg-gray-900/40 border border-dashed border-gray-800 rounded-2xl p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xl">📦</span>
              <h3 className="text-base font-bold text-white">APK Artifact &amp; Distribution Status</h3>
            </div>
            <p className="text-sm text-gray-400 max-w-xl">
              Standalone Android APK builds are generated in your cloud EAS dashboard when running <code className="text-xs font-mono text-gray-300">eas build</code>. Once an EAS cloud build completes, download the APK link directly to your Android device.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="/downloads/api-guardian.apk"
              download
              className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold px-4 py-3 rounded-xl shadow-lg shadow-emerald-600/20 transition-all whitespace-nowrap"
            >
              <span>⬇️</span> Download api-guardian.apk
            </a>
            <a
              href="https://expo.dev"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 text-white text-xs font-semibold px-4 py-3 rounded-xl border border-gray-700 transition-colors whitespace-nowrap"
            >
              Open EAS Build Dashboard ↗
            </a>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-800/80 text-xs text-gray-400 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <span className="text-gray-200 font-bold block mb-1">Installing on Android</span>
            Download the <code className="font-mono text-gray-300">.apk</code> on your Android device. If prompted, tap <em>Settings &gt; Allow from this source</em> to enable installation.
          </div>
          <div>
            <span className="text-gray-200 font-bold block mb-1">Notification Permissions</span>
            On Android 13+, the app requests notification permission on the pairing screen. If dismissed, you can enable it under <em>App Info &gt; Notifications</em>.
          </div>
        </div>
      </div>
    </section>
  );
}

