# Coding Conventions & Development Patterns — Aurelis

**Analysis Date:** 2026-10-06  
**Repository:** Aurelis

---

## 1. Language & Typing Standards
- **Strict TypeScript**: Configured with `"strict": true`, `"noImplicitAny": true`, `"noUnusedLocals": true`, and `"noUnusedParameters": true` in `tsconfig.app.json`.
- **Zero Unchecked Type Assertions**: Avoid `any`. Interfaces must define explicit primitive or union types.
- **Readonly Data Structures**: Static configurations and prop definitions prefer the `readonly` modifier:
  ```typescript
  export interface FeatureCardProps {
    readonly id: string;
    readonly title: string;
    readonly description: string;
    readonly className?: string;
  }
  ```

---

## 2. Component Architecture & React Patterns
- **Functional Components**: All UI components are written as named or arrow functional components.
- **Explicit Prop Contracts**: Every component exports or collocates its TypeScript interface.
- **Composition over Inheritance**: Sections are isolated, standalone components that assemble sub-components rather than monolithic single files.
- **Isomorphic Window Guards**: Browser-specific APIs (`window.matchMedia`, `ScrollTrigger`) are guarded against SSR or headless environments:
  ```typescript
  if (typeof window !== 'undefined') {
    // browser-only initialization
  }
  ```

---

## 3. Motion & GSAP Conventions
- **Lifecycle Scoping via Context**: Every `ScrollTrigger` or `gsap.timeline` MUST be scoped inside `gsap.context()` using the `useGSAPContext` hook (`src/hooks/useGSAPContext.ts`).
  ```typescript
  useGSAPContext((ctx) => {
    // timelines scoped to component container
  }, containerRef);
  ```
- **Reversion on Unmount**: All GSAP instances must cleanly revert (`ctx.revert()`) when components unmount to prevent zombie triggers and duplicate memory allocations.
- **GPU Transform Rules**: Animate only `transform` (`x`, `y`, `scale`, `rotation`) and `opacity`. Layout-triggering properties (`width`, `height`, `top`, `margin`, `padding`) are forbidden in continuous scroll loops.
- **Accessibility Parity**: Components with continuous motion must consume `useReducedMotion()` and provide immediate static fallbacks when enabled.

---

## 4. Styling & CSS Conventions
- **Utility-First with Tailwind**: Standard layouts, flexboxes, grids, and responsive breakpoints use Tailwind utility classes.
- **Centralized Design Tokens**: Color values must reference custom tokens in `src/styles/tokens.css` or Tailwind extended classes (`bg-void-base`, `text-metallic-champagne`, `accent-lime`).
- **Class Concatenation**: Use `cn()` from `src/lib/utils.ts` for conditional class joining:
  ```typescript
  import { cn } from '@/lib/utils';
  <div className={cn('base-classes', isActive && 'active-class', className)} />
  ```

---

## 5. Import & Module Organization
Imports follow a consistent top-to-bottom hierarchy:
1. React core & third-party libraries (e.g. `react`, `gsap`, `lucide-react`)
2. Path-aliased modules (`@/components/*`, `@/hooks/*`, `@/lib/*`, `@/data/*`, `@/styles/*`)
3. Relative module imports (`./ChildComponent`, `./types`)

Path alias `@/*` maps to `src/*` across both `vite.config.ts` and `tsconfig.app.json`.
