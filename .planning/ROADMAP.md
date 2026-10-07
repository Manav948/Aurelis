# Roadmap: Aurelis

## Overview
Aurelis is constructed through a 14-phase progressive implementation pipeline. Starting with foundation validation and the global shell, each section is built as an autonomous, responsive module with locked aspect-ratio containers, followed by dedicated mobile, motion, accessibility, and QA certification passes.

---

## Phases

- [ ] **Phase 0: Foundation Verification** - Tooling, TS strictness, and dev server verification
- [ ] **Phase 1: Global Shell & Navigation** - Announcement bar, brandmark, links, and glassmorphic navbar
- [ ] **Phase 2: Hero Section** - Stacked display typography, lime CTA, 3/4 headphone stage, and colorway toggles
- [ ] **Phase 3: Feature Showcase** - Specification accordion and companion wireless charging case card
- [ ] **Phase 4: Comfort & Hotspots** - Frontal headphone view, 6 pulsing hotspot markers, and accessory switcher
- [ ] **Phase 5: Product Collection** - Horizontal product card carousel, color dots, and progress track
- [ ] **Phase 6: Editorial Testimonial** - Dual-tone quotation, arrow controls, and 5-star reviewer card
- [ ] **Phase 7: About & Partner Ecosystem** - Split-weight manifesto statement, lime CTA, and 6 partner logo cards
- [ ] **Phase 8: Blog Journal** - 3-column vertical article cards, metadata, and link hover interactions
- [ ] **Phase 9: Master Split Footer** - Newsletter input with lime button, navigation columns, and payment trust badges
- [ ] **Phase 10: Responsive & Mobile Pass** - Viewport audits, touch-snap carousels, and overflow elimination
- [ ] **Phase 11: Motion Refinement** - Global ScrollTrigger canvas transition, easing calibration, and GSAP context audits
- [ ] **Phase 12: Accessibility & Performance** - Reduced-motion compliance, ARIA attributes, and Core Web Vitals
- [ ] **Phase 13: Browser QA & Sign-Off** - Cross-browser certification, visual fidelity checks, and production build

---

## Phase Details

### Phase 0: Foundation Verification
**Goal**: Verify baseline toolchain, GSAP registration helper, Tailwind token integration, and build pipeline.  
**Depends on**: Nothing (Initial phase)  
**Requirements**: REQ-BUILD-01, REQ-BUILD-02  
**Success Criteria**:
  1. `npm run typecheck` exits with code 0.
  2. `npm run build` compiles production bundle without warnings.
  3. Dev server starts instantaneously with zero errors.  
**Plans**: 1 plan

Plans:
- [ ] 00-01: Verify baseline toolchain, GSAP registration helper, and build pipeline (`TASK-001`)

---

### Phase 1: Global Shell & Navigation
**Goal**: Implement the top utility announcement strip and floating glassmorphic navigation header.  
**Depends on**: Phase 0  
**Requirements**: REQ-NAV-01, REQ-NAV-02, REQ-NAV-03  
**Success Criteria**:
  1. Top announcement bar renders promo text and currency selector.
  2. Navbar displays left links, centered AURELIS wordmark, and right utility icons.
  3. Navbar applies backdrop-blur and frosted border smoothly upon scrolling down.  
**Plans**: 1 plan

Plans:
- [ ] 01-01: Implement AnnouncementBar and Navbar components with sticky glassmorphic scroll behavior (`TASK-101`)

---

### Phase 2: Hero Section
**Goal**: Implement Section 1 with stacked display typography, lime CTA, floating 3/4 headphone presentation, and colorway switcher.  
**Depends on**: Phase 1  
**Requirements**: REQ-HERO-01, REQ-HERO-02, REQ-HERO-03, REQ-HERO-04, REQ-HERO-05  
**Success Criteria**:
  1. Dark charcoal hero background transitions via vertical gradient into the lower canvas.
  2. 3-line stacked display headline displays dual-tone white/outline-gray styling.
  3. Product presentation container holds exact aspect ratio (`6:5`) and colorway thumbnails toggle active state.  
**Plans**: 1 plan

Plans:
- [ ] 02-01: Implement Hero layout, typography, lime CTA button, product stage, and colorway switcher (`TASK-201`)

---

### Phase 3: Feature Showcase
**Goal**: Implement Section 2 with 5-item specification list/accordion and companion product showcase card.  
**Depends on**: Phase 2  
**Requirements**: REQ-FEAT-01, REQ-FEAT-02, REQ-FEAT-03, REQ-FEAT-04  
**Success Criteria**:
  1. Accordion items expand/collapse smoothly without layout jumping.
  2. Right elevated card displays open charging case with floating product badge pill.  
**Plans**: 1 plan

Plans:
- [ ] 03-01: Implement Features section with interactive accordion and companion product card (`TASK-301`)

---

### Phase 4: Comfort & Hotspots
**Goal**: Implement Section 3 with frontal headphone presentation, 6 interactive hotspot markers, and 3 accessory switchers.  
**Depends on**: Phase 3  
**Requirements**: REQ-COMF-01, REQ-COMF-02, REQ-COMF-03, REQ-COMF-04, REQ-COMF-05  
**Success Criteria**:
  1. 6 white circular hotspot dots render with pulsing halos over correct hardware coordinates.
  2. Hovering or tapping a hotspot marker displays an informative engineering tooltip.
  3. 3 bottom thumbnail cards allow switching active product presentation.  
**Plans**: 1 plan

Plans:
- [ ] 04-01: Implement Comfort layout, frontal headphone stage, 6 hotspot markers with tooltips, and accessory switcher (`TASK-401`)

---

### Phase 5: Product Collection
**Goal**: Implement Section 4 with horizontal product card carousel, color dots, and dynamic slider track.  
**Depends on**: Phase 4  
**Requirements**: REQ-COLL-01, REQ-COLL-02, REQ-COLL-03  
**Success Criteria**:
  1. Horizontal slider navigates smoothly across product cards.
  2. Bottom progress track indicator synchronizes with scroll position.
  3. Card hover triggers elevation and circular lime arrow button reveal.  
**Plans**: 1 plan

Plans:
- [ ] 05-01: Implement Collection section with responsive card slider, color swatches, and scroll track indicator (`TASK-501`)

---

### Phase 6: Editorial Testimonial
**Goal**: Implement Section 5 featuring dual-tone quote, circular arrow controls, and 5-star reviewer card.  
**Depends on**: Phase 5  
**Requirements**: REQ-TEST-01, REQ-TEST-02, REQ-TEST-03  
**Success Criteria**:
  1. Quotation renders with high-contrast dual-tone typography.
  2. Circular arrow controls cycle testimonial slides and cross-fade reviewer card.  
**Plans**: 1 plan

Plans:
- [ ] 06-01: Implement Testimonial section with dual-tone quote, navigation arrows, and 5-star reviewer card (`TASK-601`)

---

### Phase 7: About & Partner Ecosystem
**Goal**: Implement Section 6 with split-weight manifesto statement, lime CTA, and 6-card partner logo grid.  
**Depends on**: Phase 6  
**Requirements**: REQ-ABOU-01, REQ-ABOU-02, REQ-ABOU-03, REQ-ABOU-04  
**Success Criteria**:
  1. Centered statement displays exact split-weight typographic emphasis.
  2. 6 partner logo pill cards render with clean shadows and responsive flow.  
**Plans**: 1 plan

Plans:
- [ ] 07-01: Implement About section with split-weight brand statement, lime CTA, and partner logo grid (`TASK-701`)

---

### Phase 8: Blog Journal
**Goal**: Implement Section 7 with 3-column vertical article cards, metadata, and link hover interactions.  
**Depends on**: Phase 7  
**Requirements**: REQ-BLOG-01, REQ-BLOG-02, REQ-BLOG-03  
**Success Criteria**:
  1. 3 article cards render in a responsive grid maintaining `4:5` aspect ratio.
  2. Card hover scales interior image smoothly within rounded overflow mask.  
**Plans**: 1 plan

Plans:
- [ ] 08-01: Implement Blog section with 3-column card grid, aspect-ratio containers, and hover interactions (`TASK-801`)

---

### Phase 9: Master Split Footer
**Goal**: Implement Section 8 with newsletter subscription input, lime submit button, navigation columns, and payment trust badges.  
**Depends on**: Phase 8  
**Requirements**: REQ-FOOT-01, REQ-FOOT-02, REQ-FOOT-03, REQ-FOOT-04, REQ-FOOT-05  
**Success Criteria**:
  1. Newsletter form handles email validation feedback.
  2. Social buttons and navigation links render with clear hover states.
  3. Payment provider badges display cleanly in bottom bar.  
**Plans**: 1 plan

Plans:
- [ ] 09-01: Implement Master Footer with newsletter form, social links, navigation columns, and payment badges (`TASK-901`)

---

### Phase 10: Responsive & Mobile Pass
**Goal**: End-to-end responsive audit across all viewports (375px to 2560px), eliminating horizontal scroll and ensuring touch ergonomics.  
**Depends on**: Phase 9  
**Requirements**: REQ-PERF-03, REQ-A11Y-02  
**Success Criteria**:
  1. Zero unwanted horizontal scrollbar overflow across all breakpoints.
  2. Minimum 44x44px touch targets on buttons, nav triggers, and hotspot dots.
  3. Touch-snap horizontal slider operates naturally on mobile screens.  
**Plans**: 1 plan

Plans:
- [ ] 10-01: Audit and refine responsive layout behavior, touch targets, and overflow elimination (`TASK-1001`)

---

### Phase 11: Motion Refinement
**Goal**: Choreograph global ScrollTrigger canvas transition, calibrate motion easing curves, and audit GSAP context cleanups.  
**Depends on**: Phase 10  
**Requirements**: REQ-PERF-01  
**Success Criteria**:
  1. Dark-to-light canvas background interpolates smoothly across the Hero boundary.
  2. Steady 60+ FPS animation playback during scroll.
  3. All GSAP animations scoped cleanly in `gsap.context()` with zero memory leaks.  
**Plans**: 1 plan

Plans:
- [ ] 11-01: Choreograph ScrollTrigger canvas transition, calibrate motion curves, and audit GSAP contexts (`TASK-1101`)

---

### Phase 12: Accessibility & Performance
**Goal**: Enforce full `prefers-reduced-motion` compliance, semantic HTML hierarchy, and Core Web Vitals optimization.  
**Depends on**: Phase 11  
**Requirements**: REQ-PERF-02, REQ-A11Y-01, REQ-A11Y-03  
**Success Criteria**:
  1. `prefers-reduced-motion: reduce` immediately bypasses all continuous scrub and parallax animations.
  2. Visible keyboard focus rings (`focus-visible`) on all interactive controls.
  3. Lighthouse Accessibility score >= 95 and Performance score >= 90.  
**Plans**: 1 plan

Plans:
- [ ] 12-01: Implement reduced-motion fallbacks, keyboard focus rings, and Core Web Vitals optimization (`TASK-1201`)

---

### Phase 13: Browser QA & Sign-Off
**Goal**: Execute cross-browser certification, verify visual fidelity against reference screenshots, and validate production build.  
**Depends on**: Phase 12  
**Requirements**: REQ-BUILD-01, REQ-BUILD-02  
**Success Criteria**:
  1. Cross-browser compatibility confirmed on Chrome, Safari, Firefox, and Edge.
  2. Visual presentation matches the luxury aesthetic and hierarchy of the Stitch reference.
  3. Production build succeeds cleanly without console warnings.  
**Plans**: 1 plan

Plans:
- [ ] 13-01: Perform multi-browser verification, visual alignment check, and production build sign-off (`TASK-1301`)
