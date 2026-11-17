// apps/docs/src/components/Troubleshooting.jsx
import React, { useState } from 'react';

const faqs = [
  {
    q: 'The terminal QR code does not appear when I start my Express server.',
    a: 'API Guardian only displays the QR code if no mobile device is currently paired with the project. Check if `.api-guardian.json` already exists in your project directory and if a device was previously paired. To generate a new QR code, delete `.api-guardian.json` (or unpair from the mobile app) and restart your server.',
  },
  {
    q: 'My physical phone camera gives a network error when confirming pairing.',
    a: 'Phones cannot access "http://localhost:3001" on your computer. When testing on a physical phone, set serverUrl to your local network IP (e.g. "http://192.168.1.50:3001") instead of localhost, and ensure both your computer and phone are connected to the same Wi-Fi network with port 3001 open in your firewall.',
  },
  {
    q: 'The mobile app says: "This QR code has expired or was already used".',
    a: 'Pairing tokens expire after 10 minutes and can only be consumed once. The SDK automatically requests a fresh token and refreshes the terminal QR code every 10 minutes. Wait for the refreshed code in your terminal or restart your Express app.',
  },
  {
    q: 'Why does my async route crash without API Guardian catching it?',
    a: 'In Express 4, unhandled promise rejections in async route handlers do not automatically reach error-handling middleware unless passed to next(err) inside a try/catch block (or wrapped with express-async-errors). In Express 5, async route errors are caught automatically.',
  },
  {
    q: 'Push notifications are not appearing on my physical Android device.',
    a: 'Verify three things: 1) Notification permission is enabled under Android App Info > Notifications. 2) Android notification channel "API Error Alerts" is set to High/Urgent importance. 3) You are using a real Android device (emulators often lack Google Play Services FCM tokens).',
  },
];

export default function Troubleshooting() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="troubleshooting" className="max-w-5xl mx-auto px-6 py-16 border-b border-gray-800">
      <div className="mb-10 text-center sm:text-left">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Troubleshooting &amp; FAQ</h2>
        <p className="text-gray-400 max-w-2xl text-sm sm:text-base">
          Solutions to the most common configuration, networking, and pairing questions.
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="bg-gray-900/60 border border-gray-800 rounded-2xl overflow-hidden transition-colors hover:border-gray-700"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full text-left p-6 flex items-center justify-between gap-4"
              >
                <span className="text-sm sm:text-base font-semibold text-white">
                  {faq.q}
                </span>
                <span className="text-gray-500 font-mono text-lg flex-shrink-0">
                  {isOpen ? '−' : '+'}
                </span>
              </button>

              {isOpen && (
                <div className="px-6 pb-6 text-sm text-gray-400 leading-relaxed border-t border-gray-800/60 pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

