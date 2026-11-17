# API Guardian — Documentation Website

> Modern developer documentation and portfolio website built with React 18, Vite 5, and Tailwind CSS. Features interactive architecture walkthroughs, terminal pairing guides, configuration references, and live backend health probing.

---

## Architecture Overview

```
apps/docs/
├── public/
│   ├── icon.png             # Documentation favicon and emblem
│   └── downloads/           # Direct downloadable APK distribution
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Brand navigation & quick links
│   │   ├── Hero.jsx         # Architecture flow & quick action buttons
│   │   ├── BackendStatus.jsx# Live backend /health ping & latency monitor
│   │   ├── QuickStart.jsx   # 3-step setup guide with copyable code snippets
│   │   ├── MiddlewareGuide.jsx # Deep dive into Express error handling
│   │   ├── TerminalPairing.jsx # Interactive terminal QR simulation
│   │   ├── MobileAndApk.jsx # Expo Go instructions & APK download links
│   │   ├── ConfigReference.jsx # Options & environment variable reference
│   │   ├── Troubleshooting.jsx # Interactive FAQ & common questions
│   │   └── Footer.jsx       # Open-source footer & repository links
│   ├── App.jsx              # Root documentation container
│   ├── main.jsx             # React entry point
│   └── index.css            # Tailwind CSS directives
├── index.html
├── vite.config.js
└── package.json
```

---

## Local Development

```bash
# 1. Install dependencies
npm install

# 2. Start local development server (with HMR)
npm run dev

# 3. Build optimized production bundle
npm run build
```

---

## Production Deployment (Vercel / Netlify)

### Deploy with Vercel
1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```
2. Run deployment from `apps/docs`:
   ```bash
   cd apps/docs
   vercel
   ```
   Or connect your GitHub repository in the Vercel Dashboard and set the Root Directory to `apps/docs`.

### Deploy with Netlify
1. Connect your repository to Netlify.
2. Set **Base directory** to `apps/docs`.
3. Set **Build command** to `npm run build`.
4. Set **Publish directory** to `dist`.

---

## License

MIT © API Guardian Authors
