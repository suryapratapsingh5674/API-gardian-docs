// apps/docs/src/components/VideoDemo.jsx
import React, { useRef, useState } from 'react';

export default function VideoDemo() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  function handlePlayToggle() {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  }

  return (
    <section id="demo" className="py-20 px-6 relative transition-colors duration-200">
      <div className="max-w-4xl mx-auto">
        {/* Soft atmospheric backlight */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-gradient-to-tr from-blue-600/15 via-indigo-600/15 to-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800/60 px-3.5 py-1 rounded-full mb-3">
            <span>🎬</span> Product Showcase
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-3">
            See API Guardian in Action
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            From terminal pairing to instant mobile push notifications when a 500 crash occurs.
          </p>
        </div>

        {/* Video Player Mockup Window */}
        <div className="relative rounded-2xl sm:rounded-3xl border border-slate-200/90 dark:border-midnight-700/80 bg-slate-900 dark:bg-midnight-900 shadow-2xl overflow-hidden group">
          {/* Top Window Bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-slate-800/90 dark:bg-midnight-850/90 border-b border-slate-700/80 dark:border-midnight-750 backdrop-blur text-xs">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              <span className="font-mono text-[11px] text-slate-400 ml-2 hidden sm:inline">
                api-guardian-walkthrough.mp4
              </span>
            </div>
            <div className="flex items-center gap-2 text-slate-400 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Full HD · Google Flow</span>
            </div>
          </div>

          {/* HTML5 Video Element */}
          <div
            className="relative bg-black aspect-video flex items-center justify-center select-none"
            onContextMenu={(e) => e.preventDefault()}
          >
            <video
              ref={videoRef}
              src="/demo-video.mp4#toolbar=0"
              controls
              controlsList="nodownload noplaybackrate"
              disablePictureInPicture
              playsInline
              preload="metadata"
              onContextMenu={(e) => e.preventDefault()}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              className="w-full h-full object-contain pointer-events-auto"
            />
          </div>

          {/* Quick Feature Badges below video */}
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-slate-800 dark:divide-midnight-700/80 bg-slate-950/80 dark:bg-midnight-950/90 text-xs text-slate-300 py-3.5 px-4 text-center">
            <div className="py-1 sm:py-0 px-2 flex items-center justify-center gap-2">
              <span>⚡</span>
              <span><strong>Sub-2s</strong> Push Delivery</span>
            </div>
            <div className="py-1 sm:py-0 px-2 flex items-center justify-center gap-2">
              <span>🔒</span>
              <span><strong>Sanitized</strong> Stack Traces</span>
            </div>
            <div className="py-1 sm:py-0 px-2 flex items-center justify-center gap-2">
              <span>📷</span>
              <span><strong>Zero-Config</strong> QR Pairing</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
