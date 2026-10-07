# System Architecture & Design Patterns — Aurelis

**Analysis Date:** 2026-10-06  
**Repository:** Aurelis

---

## 1. Architectural Style & Paradigm
Aurelis follows a **component-driven, modular presentation architecture** designed for high-performance scrollytelling and zero runtime bloat.

### Core Architectural Layers
```
┌─────────────────────────────────────────────────────────────┐
│                    Root Shell (index.html)                  │
└──────────────────────────────┬──────────────────────────────┘
                               ▼
┌─────────────────────────────────────────────────────────────┐
│                 Client Entry (src/main.tsx)                 │
└──────────────────────────────┬──────────────────────────────┘
                               ▼
┌─────────────────────────────────────────────────────────────┐
│                   App Shell (src/App.tsx)                   │
└──────────────────────────────┬──────────────────────────────┘
                               ▼
      ┌────────────────────────┴────────────────────────┐
      ▼                                                 ▼
┌───────────────────────────┐             ┌───────────────────────────┐
│ Narrative Sections Layer  │             │ Shared UI Components      │
│ (src/sections/*)          │             │ (src/components/*)        │
│ - Hero, Features, Comfort │             │ - Buttons, Cards, Header  │
│ - Collection, Testimonial │             └─────────────┬─────────────┘
│ - About, Blog, Footer     │                           │
└─────────────┬─────────────┘                           │
              │                                         │
              └────────────────────┬────────────────────┘
                                   ▼
┌─────────────────────────────────────────────────────────────┐
│                   Hooks & Lib Foundation                    │
│ - src/hooks/useGSAPContext.ts (Lifecycle memory safety)     │
│ - src/hooks/useReducedMotion.ts (a11y media listener)       │
│ - src/lib/gsap.ts (ScrollTrigger singleton registration)    │
│ - src/lib/utils.ts (cn classname utility)                   │
└──────────────────────────────┬──────────────────────────────┘
                               ▼
┌─────────────────────────────────────────────────────────────┐
│               Data & Design Tokens Layer                    │
│ - src/data/index.ts (Configuration & Content)               │
│ - src/styles/tokens.css & globals.css (CSS variables)       │
└─────────────────────────────────────────────────────────────┘
```

---

## 2. Key Modules & Boundaries

### 2.1 Entry Points
- `index.html`: Mounts `#root` container, configures preconnect headers, and loads `src/main.tsx`.
- `src/main.tsx`: React DOM hydration entrypoint wrapped in `<StrictMode>`.
- `src/App.tsx`: Top-level composition shell assembling global navigation and narrative sections.

### 2.2 Shared Libraries (`src/lib/`)
- `src/lib/gsap.ts`: Centralizes GSAP core and `ScrollTrigger` registration with window guards (`typeof window !== 'undefined'`) and performance synchronization settings (`syncInterval: 50`, `limitCallbacks: true`).
- `src/lib/utils.ts`: Exposes `cn()` class concatenation helper.

### 2.3 Custom Hooks (`src/hooks/`)
- `useGSAPContext.ts`: Scopes all GSAP tweens and ScrollTrigger instances to a React DOM ref, automatically calling `ctx.revert()` on component unmount to guarantee zero memory leaks or zombie triggers.
- `useReducedMotion.ts`: Observes `(prefers-reduced-motion: reduce)` media queries to conditionally bypass scroll scrub animations.

### 2.4 Sections (`src/sections/`) & Components (`src/components/`)
- Sections represent autonomous chapters of the 8-stage scrollytelling journey.
- Components represent atomic UI elements (PillButton, FeatureCard, HotspotTooltip, Navbar).
- Component Props follow strict TypeScript interfaces with `readonly` modifiers.

---

## 3. Data Flow & State Management
- **Local State Over Global State**: No external global state libraries (Redux, Zustand) are used.
- **Section-Isolated State**:
  - Hero finish state (selected colorway index) is contained within `Hero`.
  - Feature accordion active index is contained within `Features`.
  - Hotspot active marker index is contained within `Comfort`.
  - Carousel track scroll position is handled via ScrollTrigger or local state.
- **Static Data Isolation**: Copy, product specs, and navigation links reside as typed constants in `src/data/` rather than hardcoded in JSX markup.

---

## 4. Animation Invariants
- All GSAP animations are scoped within `gsap.context()`.
- Animations exclusively modify GPU-composited properties (`transform: translate3d/scale/rotate`, `opacity`).
- Continuous scrub timelines respect user accessibility preferences via `useReducedMotion`.
