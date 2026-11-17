// apps/docs/src/App.jsx
import React from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext.jsx';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import VideoDemo from './components/VideoDemo.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import QuickStart from './components/QuickStart.jsx';
import DownloadApk from './components/DownloadApk.jsx';
import Footer from './components/Footer.jsx';

function AppContent() {
  const { theme } = useTheme();

  return (
    <div
      className={`min-h-screen transition-colors duration-200 font-sans selection:bg-indigo-600 selection:text-white antialiased ${
        theme === 'dark'
          ? 'dark bg-midnight-950 text-slate-100'
          : 'bg-slate-50 text-slate-900'
      }`}
    >
      <Navbar />
      <main>
        <Hero />
        <VideoDemo />
        <HowItWorks />
        <QuickStart />
        <DownloadApk />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
