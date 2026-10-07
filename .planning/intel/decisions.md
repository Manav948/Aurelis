# Locked Architectural & Design Decisions — Aurelis

**Ingest Date:** 2026-10-06  
**Source Documents:** `AGENTS.md`, `docs/TECH.md`, `docs/DESIGN.md`, `docs/MOTION.md`

---

## 1. Core Framework & Architecture
- **Framework & Bundler**: React 18 with Vite 6 and TypeScript 5.7 (`strict: true`).
- **Styling Architecture**: Tailwind CSS 3 with custom CSS tokens (`src/styles/tokens.css`) defining the dual-canvas palette and electric lime accents.
- **Zero Backend**: 100% client-side static execution; zero backend servers, databases, or cloud state infrastructure.
- **Git Hygiene**: Strict invariant prohibiting automatic `git init`, remote reconfigurations, and unverified commits.

---

## 2. Motion Architecture
- **Animation Platform**: GSAP 3.12 with ScrollTrigger.
- **Lifecycle Hygiene**: All GSAP timelines and ScrollTriggers MUST be scoped inside `gsap.context()` using `src/hooks/useGSAPContext.ts`, reverting on unmount.
- **GPU Compositing**: Animate exclusively `transform` (`translate3d`, `scale`, `rotate`) and `opacity`. Layout properties (`height`, `top`, `margin`) are forbidden in continuous scroll scrub loops.
- **Priority Tiers**:
  - Priority A = Core Experience (canvas color interpolation, feature accordion, hotspot tooltips, responsive slider)
  - Priority B = Enhancement (headline line reveals, product settle, card hover lift)
  - Priority C = Optional Polish (subtle cursor tilt, floating badge bob)
- **Accessibility Invariant**: Strict compliance with `prefers-reduced-motion: reduce`, disabling continuous scrub and parallax in favor of immediate static views.

---

## 3. Visual & Aesthetic Architecture
- **Dual Canvas Continuity**: Cinematic dark charcoal void (`#0D0E11`) in Hero transitioning to light off-white gallery (`#F6F7F9` / `#FFFFFF`) across subsequent sections.
- **Accent Chemistry**: Surgical application of electric lime/citron (`#CCFF00`) for primary pill CTA buttons, active state halos, and arrow badges.
- **Typographic System**: Wide geometric display sans for all-caps headlines, grotesque sans (`Inter`/`Geist`) for body copy, and tabular monospace for prices/specs.
