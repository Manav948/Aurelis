# Quality Assurance & Testing Protocol — Aurelis

## 1. Overview & Verification Strategy
Aurelis relies on high-fidelity visual aesthetics and complex scroll mechanics. The QA protocol guarantees that the site maintains 60+ FPS animation fluidity, strict visual design standards, universal device responsiveness, and WCAG AA accessibility.

---

## 2. Desktop Testing Suite
Verify across the following desktop resolutions and viewports:
- **Ultrawide**: 3440 x 1440 (Ensure content does not stretch beyond max-width container, ambient glows scale cleanly)
- **Standard 4K / Retina**: 2560 x 1440 and 1920 x 1080 (Verify subpixel typography sharpness and sharp 2x image rendering)
- **Compact Laptop**: 1366 x 768 and 1280 x 800 (Ensure pinned sections do not overflow the vertical viewport height)

### Checklist:
- [ ] No unwanted horizontal scrollbars on desktop viewports.
- [ ] Pinned sections unpin smoothly at exact scroll endpoints.
- [ ] Smooth mouse-wheel scrubbing without stutter or jumping.
- [ ] Hover states and magnetic button interactions track pointer accurately without jitter.

---

## 3. Mobile & Tablet Testing Suite
Verify across standard device viewport dimensions:
- **iPhone SE / Small Android**: 375 x 667
- **Modern Standard Mobile**: 390 x 844 (iPhone 14/15/16), 412 x 915 (Pixel / Galaxy)
- **Tablet Portrait & Landscape**: 768 x 1024 (iPad Mini), 820 x 1180 (iPad Air), 1024 x 1366 (iPad Pro)

### Checklist:
- [ ] Touch gestures scrub pinned timelines naturally without intercepting native scroll inertia.
- [ ] Minimum touch target size (`44x44px`) met for all interactive triggers, buttons, and navigation links.
- [ ] Floating navigation adapts into an ergonomic mobile navigation overlay.
- [ ] No layout reflow or text wrapping issues on orientation changes.

---

## 4. Cross-Browser Compatibility Matrix
Test the primary browser rendering engines:
1. **Chromium (Blink)**: Google Chrome, Microsoft Edge, Brave (Latest 2 versions)
2. **WebKit**: Safari Desktop (macOS Sonoma/Sequoia), Safari Mobile (iOS 16+)
3. **Gecko**: Mozilla Firefox (Latest 2 versions)

### Browser-Specific Focus Areas:
- **WebKit / Safari**: Verify `backdrop-filter: blur()` performance, CSS `clip-path` antialiasing, and smooth ScrollTrigger pinning without rendering artifacts.
- **Firefox**: Check subpixel font rendering and smooth wheel scrolling behavior.
- **Edge / Chrome**: Verify hardware acceleration and GPU memory usage.

---

## 5. Visual Fidelity & Polish
- **Color Consistency**: Verify that dark backgrounds (`#08090B`) render uniformly without color banding on OLED and IPS panels.
- **Borders & Dividers**: Hairline borders (`1px`) must render crisply without disappearing on high-DPI screens.
- **Typography**: Check for font clipping on ascenders/descenders in display clamp scales.
- **Contrast**: Confirm text meets minimum contrast ratio (7:1 for body copy, 4.5:1 for telemetry text).

---

## 6. Animation & Motion Testing
- **FPS Profiling**: Profile scroll sequences with Chrome DevTools Performance panel; maintain steady 60 FPS (or 120 FPS on ProMotion screens) with zero dropped frames.
- **ScrollTrigger Memory Hygiene**: Confirm that resizing the browser window recalculates triggers accurately without duplicating elements.
- **Scrub Synchronization**: Scrub back and forth across pinned stages to verify deterministic state synchronization.
- **Reduced Motion**: Enable `prefers-reduced-motion: reduce` in browser emulation; verify all scrub animations, auto-rotations, and parallax effects are disabled immediately while keeping content legible and accessible.

---

## 7. Accessibility (a11y) Verification
- [ ] Semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<figure>`).
- [ ] Heading hierarchy (`h1` through `h4`) strictly sequential without skipped levels.
- [ ] All interactive buttons and anchors have discernible text or `aria-label`.
- [ ] Full keyboard navigation support (Tab order is logical, visible focus rings with `focus-visible`).
- [ ] Screen readers announce state toggles (e.g., audio toggle `aria-pressed`, modals with `role="dialog"` and `aria-modal="true"`).

---

## 8. Performance & Core Web Vitals Targets
- **Lighthouse Performance Score**: `>= 90`
- **Lighthouse Accessibility Score**: `>= 95`
- **Lighthouse Best Practices Score**: `100`
- **Lighthouse SEO Score**: `100`
- **Largest Contentful Paint (LCP)**: `< 2.5s`
- **Cumulative Layout Shift (CLS)**: `< 0.05`
- **Interaction to Next Paint (INP)**: `< 150ms`

---

## 9. Automated Build & Type Verification
Before any feature or phase is signed off, the following automated checks must pass with zero errors:
```bash
# Type safety check
npm run typecheck # (or npx tsc --noEmit)

# Production bundle compilation
npm run build

# Preview production build locally
npm run preview
```
Any unresolved TypeScript warning, build failure, or console error constitutes a blocker.
