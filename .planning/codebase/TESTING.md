# Testing & Verification Strategies — Aurelis

**Analysis Date:** 2026-10-06  
**Repository:** Aurelis

---

## 1. Current Test Infrastructure
In alignment with the project directive to keep dependencies strictly minimal, no automated unit test runner (e.g. Vitest, Jest) is currently installed. Instead, verification relies on **automated compiler validation, static analysis, and rigorous browser QA protocols**.

---

## 2. Automated Verification Commands

### 2.1 Static Type Safety
```bash
npm run typecheck
# Executed command: tsc --noEmit
```
- Validates strict TypeScript compilation across `src/`.
- Verifies interface conformance, prop integrity, and import path resolution.

### 2.2 Production Bundle Compilation
```bash
npm run build
# Executed command: tsc -b && vite build
```
- Compiles the production distribution bundle into `dist/`.
- Validates asset bundling, CSS purging/minification, and module transforms.

### 2.3 Production Preview Server
```bash
npm run preview
# Executed command: vite preview
```
- Serves the built `dist/` directory locally on port 4173 to verify compiled asset paths.

---

## 3. Visual, Motion & Accessibility QA Protocols
Detailed comprehensively in `docs/QA.md`:

### 3.1 Frame Rate & Performance Profiling
- **60+ FPS Standard**: Scroll sequences are profiled using Chrome DevTools Performance panel.
- **ScrollTrigger Memory Audit**: Verify zero memory leaks and trigger recalculation on viewport resize events.

### 3.2 Viewport Coverage Matrix
- **Mobile Viewports**: 375px (iPhone SE), 390px (iPhone 14/15/16).
- **Tablet Viewports**: 768px (iPad portrait), 1024px (iPad landscape).
- **Desktop & Ultrawide**: 1440px (Standard display), 2560px (Retina / 4K).

### 3.3 Accessibility (a11y) Verification
- **Emulated Reduced Motion**: Test with browser `prefers-reduced-motion: reduce` toggle to confirm all animations bypass or provide immediate static states.
- **Keyboard Navigation**: Tab order, active focus rings (`focus-visible`), and semantic landmarks.

---

## 4. Future Testing Roadmap
If interactive state machines (e.g. cart drawer, complex configuration builders) are introduced, lightweight unit testing with `vitest` + `@testing-library/react` can be integrated without breaking the minimal architecture.
