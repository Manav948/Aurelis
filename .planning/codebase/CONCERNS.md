# Technical Debt, Risks & Areas of Concern — Aurelis

**Analysis Date:** 2026-10-06  
**Repository:** Aurelis

---

## 1. Technical Debt Assessment
- **Current State**: **Zero Legacy Technical Debt**. The repository was freshly initialized with clean React 18, TypeScript 5.7 strict mode, Vite 6, Tailwind CSS 3, and GSAP 3.12.
- **Dependencies**: Lean dependency footprint (only 4 runtime packages: `react`, `react-dom`, `gsap`, `lucide-react`). No abandoned or deprecated packages.

---

## 2. Key Risks & Areas of Concern

### 2.1 Media Asset Availability [HIGH OPERATIONAL RISK]
- **Issue**: Production-ready isolated transparent cutouts (Hero 3/4 perspective, Comfort frontal elevation, charging case, collection items) do not yet exist in `public/assets/`.
- **Mitigation Strategy**: As mandated by `docs/TASKS.md`, developers must construct sections using styled aspect-ratio container placeholders (e.g. `aspect-[6/5]`, `aspect-[4/5]`, `aspect-square`) so layout dimensions are locked and the project is not stalled waiting for final assets.

### 2.2 ScrollTrigger Performance on Low-End Mobile Devices [MEDIUM RISK]
- **Issue**: Heavy multi-layer scroll scrubbing or continuous canvas color interpolation can cause GPU thermal throttling or scroll hitching on mobile devices.
- **Mitigation Strategy**:
  - Disable mouse tracking and cursor parallax on viewports `< 768px`.
  - Convert pinned horizontal scroll tracks into native CSS touch-snap overflow (`scroll-snap-type: x mandatory`).
  - Animate exclusively GPU-composited properties (`transform`, `opacity`).

### 2.3 GSAP Context Lifecycle Leaks [MEDIUM CODE QUALITY RISK]
- **Issue**: Improperly created ScrollTriggers outside React lifecycle contexts can cause duplicate triggers, pinned layout stutter, and memory accumulation on HMR reload or route re-mounts.
- **Mitigation Strategy**: Strictly enforce `useGSAPContext` (`src/hooks/useGSAPContext.ts`) across all sections, ensuring `ctx.revert()` is called unconditionally on component unmount.

### 2.4 External Font Flash / FOUT [LOW RISK]
- **Issue**: Typography relies on Google Fonts CDN (`Inter`, `Syne`, `JetBrains Mono`). Slow mobile network connections could trigger Flash of Unstyled Text (FOUT).
- **Mitigation Strategy**: Preconnect headers are already placed in `index.html`. Fonts should include fallback definitions in `tailwind.config.js` (`system-ui`, `-apple-system`, `sans-serif`) to ensure stable layout metrics.

---

## 3. Security & Hygiene Invariants
- **Secret Detection**: Zero API keys, secrets, tokens, or credentials exist in the codebase.
- **Git Hygiene**: Permanent rule enforced in `AGENTS.md` prohibiting automated `git init`, remote reconfigurations, and unverified commits.
