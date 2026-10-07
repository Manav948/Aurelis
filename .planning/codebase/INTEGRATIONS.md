# External Integrations & Infrastructure — Aurelis

**Analysis Date:** 2026-10-06  
**Repository:** Aurelis

---

## 1. Architectural Invariant: Zero Backend Overhead
Aurelis is strictly designed and architected as a **pure client-side static frontend application**:
- **Backend Servers**: None. No Node.js Express, Fastify, Nest, or serverless API routes.
- **Databases**: None. No relational, NoSQL, or embedded databases.
- **Authentication**: None. No OAuth, JWT, Supabase, or Firebase services.
- **State Persistence**: Purely in-memory React component state and DOM event listeners.

---

## 2. External CDN & Remote Services

### 2.1 Google Fonts Service
Integrated in `index.html` via preconnected HTTP headers:
- `https://fonts.googleapis.com`
- `https://fonts.gstatic.com` (crossorigin)
- **Loaded Families**:
  - `Inter`: Weights 300, 400, 500, 600, 700 (Body and interface)
  - `JetBrains Mono`: Weights 400, 500, 600 (Technical telemetry & prices)
  - `Syne`: Weights 600, 700, 800 (Display headlines)

---

## 3. Local Media & Asset Storage
- **Static Asset Mount**: `public/assets/` served root-relative at runtime by Vite.
- **Subdirectories**:
  - `public/assets/images/`: Transparent product cutouts, thumbnails, and photography.
  - `public/assets/audio/`: Sound sweeps and UI haptic audio.
  - `public/assets/icons/`: Vector SVG icons and payment provider marks.
- **Favicon**: Vector SVG icon located at `public/favicon.svg`.

---

## 4. Browser API Integrations
- **Web Audio API / HTML5 Audio**: Planned for optional sound preview triggers and acoustic frequency response demos.
- **MatchMedia API**: Native `window.matchMedia('(prefers-reduced-motion: reduce)')` integrated in `src/hooks/useReducedMotion.ts` for accessibility compliance.
- **ResizeObserver / Scroll APIs**: Managed deterministically through GSAP `ScrollTrigger` with throttled refresh intervals.
