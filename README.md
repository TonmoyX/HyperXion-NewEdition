# HyperXion

HyperXion is a modern space education and exploration platform built with the Next.js App Router. It combines interactive pages, immersive visuals, and learning-focused content about Earth, Mars, galaxies, planets, rockets, and mission concepts.

## 🚀 Project Overview

- Built as a responsive single-page experience with dedicated route pages.
- Designed to showcase astronomy and aerospace content with rich visuals, cards, accordions, and embedded media.
- Includes a PDF viewer for engineering and propulsion reference material.
- Uses a custom dark-themed layout with animated page sections and a floating space background.

## 🧱 Tech Stack

- `Next.js` 16.3.0 (App Router)
- `React` 19.2.8
- `Tailwind CSS` 4.3.3
- `PostCSS` 8.5.26
- `@heroui/react` for UI components
- `framer-motion` for reveal animations
- `pdfjs-dist` for PDF rendering

## 📁 Key Files and Structure

```text
HyperXion/
├─ app/
│  ├─ layout.js             # Root layout, global metadata, main page wrapper
│  ├─ page.js               # Home page with feature cards, video embed, hero section
│  ├─ globals.css           # Global Tailwind and design styles
│  ├─ components/           # Shared UI components
│  │  ├─ BackToTop.js
│  │  ├─ Footer.js
│  │  ├─ NavBar.js
│  │  ├─ PageHero.js
│  │  ├─ PdfViewer.js
│  │  ├─ Reveal.js
│  │  └─ SpaceBackground.js
│  ├─ black-whole/page.js   # Black hole themed route
│  ├─ earth/page.js         # Earth content route
│  ├─ galaxy/page.js        # Galaxy content route
│  ├─ mars/page.js          # Mars content route
│  ├─ mission/page.js       # Mission information route
│  ├─ planet/page.js        # Planet overview route
│  └─ rocket/page.js        # Rocket and propulsion route
├─ public/                  # Static media assets
│  ├─ image/
│  ├─ Earth/
│  ├─ Mars/
│  ├─ Mission/
│  ├─ Planet/
│  ├─ Rocket/
│  ├─ blackwhole/
│  ├─ video/
│  └─ pdf.worker.min.mjs
├─ package.json             # Dependencies and npm scripts
├─ next.config.mjs          # Next.js configuration
├─ postcss.config.mjs       # PostCSS config
├─ eslint.config.mjs        # ESLint config
├─ jsconfig.json            # JavaScript path config
└─ README.md
```

## 🌐 Available Pages / Routes

- `/` — Home landing page
- `/earth` — Earth exploration page
- `/mars` — Mars facts and mission details
- `/galaxy` — Galaxy science and imagery
- `/planet` — Solar system planet guide
- `/rocket` — Rocket propulsion and reference PDFs
- `/mission` — Mission design and space topics
- `/black-whole` — Black hole / deep space content

## 🧩 Components

- `NavBar.js` — top navigation menu for route access
- `PageHero.js` — hero section used on each route
- `Reveal.js` — animated reveal wrapper for page sections
- `SpaceBackground.js` — moving starfield / background visual
- `Footer.js` — footer with brand and site credits
- `BackToTop.js` — scroll-back control for long pages
- `PdfViewer.js` — embedded PDF viewer powered by `pdfjs-dist`

## 📦 Dependencies

From `package.json`:

- `@heroui/react`
- `@tailwindcss/postcss`
- `framer-motion`
- `next`
- `pdfjs-dist`
- `postcss`
- `react`
- `react-dom`
- `tailwindcss`

Dev dependencies:

- `eslint`
- `eslint-config-next`

## ⚙️ Scripts

```bash
npm run dev    # Start development server
npm run build  # Build production output
npm run start  # Start built app in production mode
npm run lint   # Run ESLint
```

## 💡 Notes

- The project uses the Next.js App Router, so route files are placed under `app/`.
- Global styles are managed through `app/globals.css`.
- Page metadata is configured in `app/layout.js` and route-specific page files.
- Static assets like images, video, and PDF resources live in `public/` for direct URL access.

## ✅ Getting Started

1. Clone the repository.
2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open the app in your browser:

```text
http://localhost:3000
```

## 📌 Recommendation

Use this README as the central project reference for development, routing, and component structure. Update it as new pages, routes, or dependencies are added.
