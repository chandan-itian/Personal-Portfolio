# Chandan Raj — Premium Hand-Drawn Interactive Portfolio

A bespoke, production-ready developer portfolio for **Chandan Raj**, Full-Stack Developer & Software Developer at **DXC**. 

Crafted with an artisanal illustrator aesthetic inspired by hand-drawn editorial work: pure ivory whitespace, authentic watercolor badge branding, hand-drawn typography (`Caveat` & `Patrick Hand`), pastel marker highlights, and four custom illustrated interactive topic circles.

---

## 🎨 Visual Language & Design System

- **Background:** Warm ivory canvas (`#FDFBF7`) with subtle paper texture.
- **Brand Badge:** Centered organic pink watercolor badge with hand-drawn black script and deckled edges.
- **Typography:**
  - Display / Script: **Caveat** (weights 400–700)
  - Secondary Script: **Patrick Hand**
  - Clean Body / UI: **DM Sans** (weights 400–700)
- **Palette Accents:**
  - Lavender / Pink: `#E5DAF6` / `#F8CAD5` (Coding & Brand)
  - Mint Green: `#C3EEDF` (Designing & Highlights)
  - Baby Blue: `#CCE7F9` (Researching & Highlights)
  - Coral / Peach: `#FEDDCC` (Building & Accents)
- **Interactive Circles:** 4 hand-drawn irregular circular blobs (`CODING`, `DESIGNING`, `RESEARCHING`, `BUILDING`) with keyboard-accessible navigation modals.

---

## 🚀 Features

1. **Brand Header & Watercolor Logo:** Authentic SVG watercolor simulation with deckled edges and gentle rotation.
2. **Minimalist Navigation:** Uppercase sans-serif with tracking, active marker underlines, and responsive mobile drawer.
3. **Hero Section:** Two-line clean greeting with handwritten description and pastel marker-highlighted keywords.
4. **4 Interactive Topic Modals:**
   - **Coding:** Frontend & backend architecture, code craft, editable tech tags.
   - **Designing:** Human-centric UI/UX, accessibility standards, design systems.
   - **Researching:** Root-cause analysis, system discovery, performance profiling.
   - **Building:** Idea-to-deployment workflow, CI/CD, production hardening.
   - **Navigation:** Arrow buttons (`<` / `>`) cycle between topics inside and outside the modal.
5. **About Section:** "Curious mind. Builder’s heart." featuring Chandan's authentic boardwalk photo framed in a hand-drawn polaroid with a slight tilt.
6. **Skills Section:** 3 categories (Frontend, Backend, Development Workflow) with interactive category filter tabs.
7. **Portfolio Showcase:** Project cards with tags, "Case Details" modal, live demo, and GitHub repository links.
8. **Experience Section:** Clean vertical timeline highlighting DXC (Full-Stack Developer / Software Developer).
9. **Secure Contact Backend:**
   - Real-time frontend validation and strict server-side Zod schemas.
   - Bot spam honeypot trap (`_gotcha`).
   - In-memory rate limiting (IP-based).
   - Production SMTP email delivery via Nodemailer with automatic dev fallback preview.
10. **Automated Testing Suite:** 32 comprehensive tests via Playwright covering all interactive flows, accessibility, responsiveness, and API routes.

---

## 📁 Project Architecture

```
chandan-portfolio/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── contact/
│   │   │   │   └── route.ts     # Secure contact API with Zod & Rate Limiting
│   │   │   └── health/
│   │   │       └── route.ts     # Uptime & health check endpoint
│   │   ├── globals.css          # Design tokens, fonts, marker highlights
│   │   ├── layout.tsx           # Google Fonts (Caveat, Patrick Hand, DM Sans) & SEO metadata
│   │   ├── page.tsx             # Main interactive single-page portfolio
│   │   ├── robots.ts            # Robots.txt generator
│   │   └── sitemap.ts           # Dynamic sitemap generator
│   ├── components/
│   │   ├── AboutSection.tsx     # Editorial about copy & polaroid photo
│   │   ├── BrandLogo.tsx        # Centered SVG watercolor badge
│   │   ├── CircleIllustrations.tsx # Custom SVG hand-drawn illustrations
│   │   ├── CircleModal.tsx      # Accessible dialog with keyboard trapping & topic switching
│   │   ├── ContactSection.tsx   # Contact form with live status announcements
│   │   ├── ExperienceSection.tsx# Vertical timeline (DXC)
│   │   ├── Footer.tsx           # Handcrafted signoff & back-to-top button
│   │   ├── HeroSection.tsx      # Handwritten hero with marker highlights
│   │   ├── Icons.tsx            # Custom SVG social & utility icons
│   │   ├── InteractiveCircles.tsx # 4 illustrated circles with flanking arrows
│   │   ├── Navbar.tsx           # Responsive sticky navigation
│   │   ├── PortfolioSection.tsx # Projects showcase with filter tabs & modals
│   │   └── SkillsSection.tsx    # 3 core capabilities cards
│   └── data/
│       └── portfolioData.ts     # Central typed configuration for all content
├── public/
│   └── images/
│       ├── chandan.png          # Authentic photo of Chandan Raj
│       └── reference-design.png # Visual reference design
├── tests/
│   └── portfolio.spec.ts        # Comprehensive 32-test Playwright suite
├── .env.example                 # Example environment variables
├── playwright.config.ts         # Playwright configuration
└── package.json
```

---

## 🛠️ Getting Started

### Prerequisites

- Node.js 18.18+ (tested on Node 26.13.0)
- npm or pnpm

### 1. Installation

```bash
cd chandan-portfolio
npm install
```

### 2. Environment Configuration

Copy the example file to `.env.local`:

```bash
cp .env.example .env.local
```

For live email delivery in production, populate:
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
CONTACT_RECEIVER_EMAIL=chandan.raj@example.com
```
*(In development, submissions log directly to the server terminal with zero setup required.)*

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🧪 Running Automated Tests

Run the full Playwright test suite (32 tests across desktop & mobile viewports):

```bash
npx playwright test
```

To run with visual browser UI:
```bash
npx playwright test --ui
```

---

## 📦 Production Build

Create an optimized static/hybrid production build:

```bash
npm run build
```

Start the production server:

```bash
npm run start
```

---

## ✏️ How to Customize Personal Details

All portfolio content is decoupled from components and stored in typed TypeScript at:
`src/data/portfolioData.ts`

- **Personal Details:** Edit `PORTFOLIO_DATA.personal` (roles, email, social links).
- **Projects:** Add or edit projects in `PORTFOLIO_DATA.projects`.
- **Experience:** Update employment dates and achievements in `PORTFOLIO_DATA.experience`.
- **Skills:** Add or remove skills in `PORTFOLIO_DATA.skills`.
- **Topic Circles:** Adjust focus areas and technology tags in `PORTFOLIO_DATA.circles`.

---

## 🌐 Production Deployment Guide

### Deploying to Vercel (Recommended)
1. Push the repository to GitHub.
2. Import the project into [Vercel](https://vercel.com).
3. Set the environment variables from `.env.local` in the Vercel dashboard.
4. Deploy! Next.js route handlers and SSR/SSG will work automatically.

### Custom Domain & HTTPS
1. In Vercel, go to **Settings → Domains**.
2. Add your custom domain (e.g. `chandanraj.dev`).
3. Add the `CNAME` or `A` records to your DNS provider as instructed.
4. SSL/TLS certificates are provisioned automatically via Let's Encrypt.

### Monitoring & Error Tracking
- Add [Sentry](https://sentry.io) for real-time frontend and API exception monitoring:
  ```bash
  npx @sentry/wizard@latest -i nextjs
  ```
- Enable [Vercel Web Analytics](https://vercel.com/analytics) for zero-config Core Web Vitals tracking.
