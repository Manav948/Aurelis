# Technical Architecture & Engineering Decisions — Aurelis

## 1. Technology Stack
- **Framework**: React 19 / React 18 + Vite (Lightning fast HMR and zero-overhead bundling)
- **Language**: TypeScript (Strict typing enabled, `noImplicitAny`, zero unchecked type assertions)
- **Styling**: Tailwind CSS (Utility-first styling cleanly configured with custom design tokens) + Scoped Vanilla CSS for complex hardware pseudo-elements and keyframes
- **Motion & Scrollytelling**:
  - `gsap` (Core GreenSock Animation Platform)
  - `gsap/ScrollTrigger` (Synchronized scroll-driven triggers, scrubbing, and pinning)
- **Icons**: `lucide-react` (Minimal, tree-shaken SVG icon primitives)

---

## 2. Directory Architecture
```
Aurelis/
├── docs/                     # Project blueprints and specifications
│   ├── PRD.md
│   ├── DESIGN.md
│   ├── MOTION.md
│   ├── TECH.md
│   ├── ASSETS.md
│   ├── TASKS.md
│   └── QA.md
├── public/
│   └── assets/               # Static media (images, audio, icons)
│       ├── images/
│       ├── audio/
│       └── icons/
├── src/
│   ├── components/           # Atomic, reusable UI elements
│   │   ├── Button/
│   │   ├── Card/
│   │   ├── Container/
│   │   ├── Magnetic/
│   │   └── Navbar/
│   ├── sections/             # Standalone narrative page sections
│   │   ├── Hero/
│   │   ├── Philosophy/
│   │   ├── ExplodedView/
│   │   ├── Soundstage/
│   │   ├── Craftsmanship/
│   │   ├── Specifications/
│   │   ├── Gallery/
│   │   └── Footer/
│   ├── hooks/                # Custom React hooks (motion, media query, resize)
│   │   ├── useGSAPContext.ts
│   │   ├── useMediaQuery.ts
│   │   ├── useReducedMotion.ts
│   │   └── useScrollProgress.ts
│   ├── lib/                  # Singletons, animation helpers, utility functions
│   │   ├── gsap.ts           # Central GSAP & ScrollTrigger registration
│   │   └── utils.ts          # Classname mergers and formatters
│   ├── styles/               # Global typography, color variables, and resets
│   │   ├── globals.css
│   │   └── tokens.css
│   ├── data/                 # Static content, acoustic specs, lookbook data
│   │   ├── specifications.ts
│   │   ├── craftsmanship.ts
│   │   └── navigation.ts
│   ├── App.tsx               # Root application shell
│   ├── main.tsx              # React DOM hydration entrypoint
│   └── vite-env.d.ts         # Vite client type declarations
├── AGENTS.md                 # Rules of engagement for AI coding agents
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.ts
```

---

## 3. Dependency Decisions & Philosophy
1. **Zero Unnecessary Bloat**: No heavy UI component libraries (no MUI, no Ant Design, no heavy 3D game engines unless specifically required).
2. **GSAP vs. Framer Motion**: GSAP + ScrollTrigger is selected because pinned multi-stage scrubbing, coordinate locking, scrub smoothing, and complex timeline orchestration are vastly more reliable, performant, and controllable than declarative CSS motion libraries for editorial showcases.
3. **Tailwind CSS Integration**: Tailwind is utilized for atomic layout primitives, responsive flex/grid wrappers, and token consumption, keeping CSS files clean and structured without runtime overhead.
4. **No Full 3D Engine for Foundation**: High-fidelity 2.5D layered canvas, transparent WebP sequence rendering, and SVG exploded views are prioritized over multi-megabyte Three.js bundles unless explicit interactive 3D WebGL features are introduced.

---

## 4. Component Architecture
- **Composition over Inheritance**: Every section is an isolated, independent component containing its own layout structure and motion hooks.
- **Strict Separation of Data & Presentation**: Copy, technical audio specifications, and media references reside in `/src/data/` as typed TypeScript constants.
- **Strict Typing**: All components declare explicit TypeScript interfaces for props:
  ```typescript
  export interface FeatureCardProps {
    readonly id: string;
    readonly title: string;
    readonly description: string;
    readonly metric?: string;
    readonly className?: string;
  }
  ```

---

## 5. Animation Architecture & Memory Hygiene
1. **Centralized Registration (`/src/lib/gsap.ts`)**:
   - `ScrollTrigger` is registered once at application initialization.
   - Global defaults (`fastScrollEnd`, refresh events) are configured in a single module.
2. **React Lifecycle & GSAP Context**:
   - Every scroll trigger or timeline must be scoped inside `gsap.context()` inside a `useLayoutEffect` or `useEffect`, returning `ctx.revert()` in the cleanup callback.
   - This prevents zombie ScrollTrigger instances, memory leaks, and layout duplicate pins on route changes or HMR reloads.
   ```typescript
   useEffect(() => {
     const ctx = gsap.context(() => {
       // All GSAP timelines here
     }, componentRef);

     return () => ctx.revert();
   }, []);
   ```

---

## 6. Performance Rules
- **GPU Acceleration**: Animate exclusively `transform` (`x`, `y`, `scale`, `rotation`) and `opacity`. Never animate layout-triggering properties (`width`, `height`, `top`, `margin`, `padding`).
- **`will-change` Hygiene**: Apply `will-change: transform` only immediately prior to or during animation, removing it when idle to prevent excessive GPU VRAM consumption.
- **ScrollTrigger Refresh Batching**: Debounce viewport resize listeners before recalculating trigger offsets.
- **Asset Loading Strategy**:
  - Critical hero assets are preloaded with `<link rel="preload">`.
  - Non-critical imagery uses native `loading="lazy"` and `decoding="async"`.
- **Bundle Optimization**: Keep vendor chunks isolated; verify zero duplicate bundle dependencies with `vite-bundle-visualizer` if needed.
