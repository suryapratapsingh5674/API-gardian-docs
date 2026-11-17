// apps/docs/src/components/HowItWorks.jsx
import React from 'react';

export default function HowItWorks() {
  const steps = [
    {
      num: '01',
      title: 'Add Middleware',
      tag: '1 Line of Code',
      tagColor: 'text-indigo-700 bg-indigo-50 border-indigo-200 dark:text-blue-300 dark:bg-blue-950/60 dark:border-blue-800/60',
      description: 'Mount guardian.errorMiddleware() into Express. Errors are sanitized and dispatched asynchronously with zero impact on uptime.',
      icon: '🛡️',
    },
    {
      num: '02',
      title: 'Scan Terminal QR',
      tag: 'Zero Config',
      tagColor: 'text-amber-800 bg-amber-50 border-amber-200 dark:text-amber-300 dark:bg-amber-950/60 dark:border-amber-800/60',
      description: 'On first startup, the SDK automatically creates an ephemeral 10-minute pairing token and prints a QR code directly in your terminal.',
      icon: '📷',
    },
    {
      num: '03',
      title: 'Instant Push Alerts',
      tag: 'Real-Time',
      tagColor: 'text-emerald-800 bg-emerald-50 border-emerald-200 dark:text-emerald-300 dark:bg-emerald-950/60 dark:border-emerald-800/60',
      description: 'When a 500 error crashes a route, your phone instantly chimes. Tap the notification to view the stack trace and request details.',
      icon: '🔔',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 px-6 border-y border-slate-200/80 dark:border-midnight-800 bg-white dark:bg-midnight-950 transition-colors duration-200">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-3">
            How It Works in 3 Steps
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            From crash to phone notification in less than two seconds.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.num}
              className="relative bg-slate-50/80 dark:bg-midnight-850 border border-slate-200/90 dark:border-midnight-700/80 rounded-2xl p-7 flex flex-col justify-between hover:border-indigo-300 dark:hover:border-blue-500/60 hover:bg-white dark:hover:bg-midnight-800 hover:shadow-md dark:shadow-midnight-950/60 transition-all hover:-translate-y-1 group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl">{step.icon}</span>
                  <span className="font-mono text-xs font-bold text-slate-400 dark:text-slate-500">
                    STEP {step.num}
                  </span>
                </div>

                <div className="mb-3">
                  <span className={`inline-block text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${step.tagColor} mb-2`}>
                    {step.tag}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-blue-400 transition-colors">
                    {step.title}
                  </h3>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
