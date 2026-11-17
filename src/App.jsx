// apps/docs/src/App.jsx
import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import BackendStatus from './components/BackendStatus.jsx';
import QuickStart from './components/QuickStart.jsx';
import MiddlewareGuide from './components/MiddlewareGuide.jsx';
import TerminalPairing from './components/TerminalPairing.jsx';
import MobileAndApk from './components/MobileAndApk.jsx';
import ConfigReference from './components/ConfigReference.jsx';
import Troubleshooting from './components/Troubleshooting.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-sans selection:bg-indigo-600 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <BackendStatus />
        <QuickStart />
        <MiddlewareGuide />
        <TerminalPairing />
        <MobileAndApk />
        <ConfigReference />
        <Troubleshooting />
      </main>
      <Footer />
    </div>
  );
}
