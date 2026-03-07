# Balaji.dev - ML Engineer Portfolio

A high-performance, SEO-optimized portfolio built with **Next.js 15**, **TypeScript**, and **Tailwind CSS 4**. Designed to showcase production ML engineering work with measurable impact.

**Live:** [balajikoneti.dev](https://balajikoneti.dev)

---

## Features

### Performance
- Server-side rendered with Next.js App Router (server components)
- Dynamic imports and code splitting for below-the-fold sections
- Next.js `<Image>` with AVIF/WebP optimization and responsive sizes
- Aggressive cache headers for static assets (1 year immutable)
- Gzip compression enabled
- 178 kB First Load JS

### SEO & Discoverability
- Rich structured data (`@graph` with `WebSite`, `ProfilePage`, `Person` schemas)
- Dynamic OG image generation (1200x630 branded card with metrics)
- Twitter card with `summary_large_image`
- Server-rendered `<h1>` with full name for crawlers
- Proper `robots.txt` with AI bot access (GPTBot, Claude-Web, PerplexityBot)
- Clean `sitemap.xml` with correct canonical URLs
- `llms.txt` for AI discoverability (ChatGPT, Claude, Perplexity)
- Google Search Console verified

### UI/UX
- Light/dark theme with system preference detection
- Parallax hero with typing animation
- 3D tilt cards on skills and projects
- Animated stat counters with smart direction (up/down)
- Scroll progress bar with spring physics
- Auto-scrolling metrics ticker with quantified achievements
- Spotlight cursor effect (desktop)
- Expandable work experience cards with animated timeline
- Responsive mobile navigation with slide-out drawer
- `prefers-reduced-motion` support for accessibility

### Security
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `X-XSS-Protection: 1; mode=block`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `X-Powered-By` header removed

---

## Tech Stack

| Layer | Technologies |
|-------|-------------|
| Framework | Next.js 15 (App Router, Turbopack) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 4, CSS custom properties |
| Animation | Framer Motion |
| Theming | next-themes |
| Icons | Lucide React, React Icons |
| Analytics | Vercel Analytics, Speed Insights |
| Deployment | Vercel |

---

## Project Structure

```
src/
  app/
    layout.tsx              # Root layout with metadata and structured data
    page.tsx                # Server component with dynamic imports
    robots.ts               # SEO robots with AI bot rules
    sitemap.ts              # Sitemap generation
    manifest.ts             # PWA manifest
    opengraph-image.tsx     # Dynamic OG image (edge runtime)
    twitter-image.tsx       # Dynamic Twitter card image
    Providers.tsx           # Theme provider (client)
  components/
    Hero.tsx                # Parallax hero with typing effect
    About.tsx               # Stats with smart animated counters
    Skills.tsx              # Bento grid with 3D tilt cards
    Projects.tsx            # Project cards with spotlight effect
    Education.tsx           # Timeline with university logos
    WorkExperience.tsx      # Expandable cards with animated timeline
    Certifications.tsx      # Certification cards with tilt effect
    Contact.tsx             # CTA section with contact cards
    NavBar.tsx              # Responsive nav with scroll detection
    Footer.tsx              # Footer with social links
    Preloader.tsx           # Loading screen
    ScrollProgress.tsx      # Scroll progress indicator
    MetricsTicker.tsx       # Auto-scrolling metrics marquee
    SpotlightCursor.tsx     # Ambient cursor glow effect
    StructuredData.tsx      # JSON-LD structured data (server)
    BackToTop.tsx           # Scroll to top button
    ThemeSwitcher.tsx       # Dark/light mode toggle
  styles/
    globals.css             # Design system tokens and utility classes
public/
  icons/                    # Company and university logos
  llms.txt                  # AI crawler content file
  profile.jpg               # Profile photo
```

---

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server (Turbopack)
npm run dev

# Production build
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Key Metrics Highlighted

| Metric | Value |
|--------|-------|
| Retrieval Relevance (P@5) | +22% |
| P95 End-to-End Latency | 1.3s to 640ms |
| LLM Cost per Request | -31% |
| Years Engineering | 6+ |

---

## License

All rights reserved. This is a personal portfolio project.
