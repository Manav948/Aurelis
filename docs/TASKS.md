# Implementation Roadmap & Task Tracker — Aurelis

> **Document Status**: Finalized implementation plan aligned with `/docs/PRD.md`, `/docs/DESIGN.md`, `/docs/MOTION.md`, and `/docs/ASSETS.md`.  
> **Source-of-Truth Rules**: Follows confirmed reference structures and visual layouts. Content, product names, prices, partner identities, and production assets marked TBD in the source documentation remain placeholders during implementation.

---

## Phase Overview

- **PHASE 0** — Foundation Verification
- **PHASE 1** — Global Shell / Announcement Bar / Navbar
- **PHASE 2** — Hero Section
- **PHASE 3** — Feature Showcase Section
- **PHASE 4** — Comfort / Hotspot Section
- **PHASE 5** — Product Collection Section
- **PHASE 6** — Testimonial Section
- **PHASE 7** — About / Partner Section
- **PHASE 8** — Blog Section
- **PHASE 9** — Footer Section
- **PHASE 10** — Responsive & Mobile Pass
- **PHASE 11** — Motion Refinement & GSAP Choreography
- **PHASE 12** — Accessibility & Performance Optimization
- **PHASE 13** — Browser QA & Final Polish

---

## Phase Breakdown & Tasks

### PHASE 0 — Foundation Verification
- **Goal**: Confirm tooling, dependencies, TypeScript strictness, and development server health before component authoring.
- **Files/Components Likely Involved**:
  - `package.json`, `tsconfig.json`, `vite.config.ts`, `tailwind.config.js`, `src/styles/globals.css`, `src/lib/gsap.ts`, `src/hooks/useGSAPContext.ts`, `src/hooks/useReducedMotion.ts`
- **Dependencies on Previous Phases**: None.
- **Required Behavior**: Application builds cleanly; GSAP and Tailwind CSS tokens load without runtime or type warnings.
- **Motion Requirements**: None.
- **Responsive Requirements**: Baseline viewport meta tags present in `index.html`.
- **Acceptance Criteria**: `npm run typecheck` exits 0; `npm run build` generates production bundle without warnings; dev server starts with zero errors.
- **Verification Method**: Run `npm run typecheck`, `npm run build`, and verify dev server status.

#### Tasks:
- [ ] **TASK-001**: Verify baseline toolchain, GSAP registration helper, Tailwind token integration, and build pipeline.

---

### PHASE 1 — Global Shell / Announcement Bar / Navbar
- **Goal**: Construct the global layout shell, top utility announcement strip, and sticky glassmorphic navigation header.
- **Files/Components Likely Involved**:
  - `src/components/Header/AnnouncementBar.tsx`
  - `src/components/Header/Navbar.tsx`
  - `src/components/Header/index.ts`
  - `src/App.tsx`
- **Dependencies on Previous Phases**: Phase 0.
- **Required Behavior**:
  - 32px dark announcement strip with left-aligned announcement copy (`[TBD]`) and right-aligned currency selector indicator (`$ USD / EN v`).
  - 72px floating header with left navigation links (`Home`, `Shop`, `Collections`, `About Us`), centered brandmark (`AURELIS`), and right utility icons (Search, User, Cart).
- **Motion Requirements**:
  - Priority A (Core): Sticky scroll listener applying backdrop-blur (`backdrop-filter: blur(16px)`) and frosted border on down-scroll.
  - Priority B (Enhancement): Gentle slide-down entrance on page load.
  - Priority C (Optional Polish): Subtle horizontal link underline expand on hover.
- **Responsive Requirements**:
  - Desktop: Full 3-part flex layout.
  - Mobile: Navigation links collapse into an accessible drawer/menu trigger; brandmark remains centered with cart icon accessible on right.
- **Acceptance Criteria**: Navbar adheres to visual reference layout; sticky blur activates smoothly on scroll; zero layout shift.
- **Verification Method**: Browser viewport inspection at 1440px and 390px; scroll position verification.

#### Tasks:
- [ ] **TASK-101**: Implement AnnouncementBar and Navbar components with desktop links, brandmark, utility icons, and sticky glassmorphic scroll behavior.

---

### PHASE 2 — Hero Section
- **Goal**: Implement Section 1 with the stacked display typography, primary lime CTA pill, floating 3/4 headphone presentation, and colorway switcher badges.
- **Files/Components Likely Involved**:
  - `src/sections/Hero/Hero.tsx`
  - `src/sections/Hero/HeroHeadline.tsx`
  - `src/sections/Hero/HeroProduct.tsx`
  - `src/sections/Hero/index.ts`
  - `src/components/Button/PillButton.tsx`
  - `src/App.tsx`
- **Dependencies on Previous Phases**: Phase 1.
- **Required Behavior**:
  - Dark charcoal background (`--color-void-hero`) with vertical bottom gradient.
  - 3-line uppercase display headline (`IMMERSIVE SOUND FOR THE DIGITAL GENERATION`) with dual-tone white/outline-gray styling.
  - Subhead copy and primary lime pill CTA with circular 45° arrow badge (↗).
  - Floating 3/4 perspective headphone presentation (using placeholder container preserving `6:5` aspect ratio until production cutout `img-hero-headphone-perspective` is provided).
  - 2 circular colorway thumbnail badges at bottom right (`img-hero-thumb-01`, `img-hero-thumb-02`).
- **Motion Requirements**:
  - Priority A (Core): Interactive colorway switcher swapping product finish state on click.
  - Priority B (Enhancement): Staggered line reveal for headline; upward float and scale settlement on product entrance.
  - Priority C (Optional Polish): Subtle desktop cursor proximity parallax tilt (`±3°`).
- **Responsive Requirements**:
  - Desktop: 50/50 two-column layout.
  - Mobile: Single-column stack with clamp-scaled display typography; thumbnail badges positioned ergonomically for touch.
- **Acceptance Criteria**: Typography hierarchy matches reference; lime CTA button matches exact pill styling; product stage scales cleanly without clipping.
- **Verification Method**: Visual inspection across desktop (1440px) and mobile (390px); test thumbnail click state changes.

#### Tasks:
- [ ] **TASK-201**: Implement Hero section layout, stacked display typography, lime pill CTA button, product presentation container with aspect-ratio placeholder, and colorway switcher interaction.

---

### PHASE 3 — Feature Showcase Section
- **Goal**: Implement Section 2 ("POWERFUL SOUND ANYTIME ANYWHERE") with the vertical specification list/accordion and companion product showcase card.
- **Files/Components Likely Involved**:
  - `src/sections/Features/Features.tsx`
  - `src/sections/Features/FeatureAccordion.tsx`
  - `src/sections/Features/FeatureCard.tsx`
  - `src/sections/Features/index.ts`
  - `src/App.tsx`
- **Dependencies on Previous Phases**: Phase 2.
- **Required Behavior**:
  - Light canvas background (`--color-canvas-light`).
  - Left column: Section title, description copy, 5-row specification list with hairline dividers, and lime `"Discover More >"` pill button.
  - Interactive accordion behavior: Clicking any specification row expands its descriptive body and collapses previously active item.
  - Right column: Elevated white card displaying open wireless charging case (`img-features-charging-case` placeholder preserving `9:8` aspect ratio) with floating product badge pill (thumbnail, product label `[TBD]`, price `[TBD]`, 3 color dots).
- **Motion Requirements**:
  - Priority A (Core): Smooth accordion height expand/collapse (`autoHeight` interpolation).
  - Priority B (Enhancement): Section entrance fade and upward stagger on scroll into view.
  - Priority C (Optional Polish): Subtle vertical ambient floating bob on the product tag badge.
- **Responsive Requirements**:
  - Desktop: Two-column split with sticky/centered alignment.
  - Mobile: Single-column stack; accordion remains easily tappable with minimum 44px touch targets.
- **Acceptance Criteria**: Accordion expands smoothly without jitter; floating badge renders cleanly over the product card; layout aligns with reference.
- **Verification Method**: Functional toggle testing of all 5 accordion rows; responsive layout checks at 768px and 390px.

#### Tasks:
- [ ] **TASK-301**: Implement Features section with interactive 5-item specification accordion, lime CTA, and elevated companion product card with floating badge pill.

---

### PHASE 4 — Comfort / Hotspot Section
- **Goal**: Implement Section 3 ("DESIGNED FOR COMFORT") featuring symmetrical frontal headphone presentation, 6 interactive hotspot markers, and 3 accessory selector thumbnails.
- **Files/Components Likely Involved**:
  - `src/sections/Comfort/Comfort.tsx`
  - `src/sections/Comfort/HotspotMap.tsx`
  - `src/sections/Comfort/HotspotTooltip.tsx`
  - `src/sections/Comfort/AccessorySwitcher.tsx`
  - `src/sections/Comfort/index.ts`
  - `src/App.tsx`
- **Dependencies on Previous Phases**: Phase 3.
- **Required Behavior**:
  - Centered header: `DESIGNED FOR COMFORT` with descriptive subtitle.
  - Centered frontal elevation product stage (`img-comfort-headphone-frontal` placeholder with `1:1` aspect ratio).
  - 6 circular white hotspot dot markers positioned over key headphone zones (headband left/right, upper pivots, lower acoustic ear-cups).
  - Hovering/clicking a hotspot marker reveals a floating callout tooltip detailing component engineering (`[TBD callout copy]`).
  - 3 centered selector thumbnail cards below (`img-comfort-thumb-01`, `img-comfort-thumb-02`, `img-comfort-thumb-03`).
- **Motion Requirements**:
  - Priority A (Core): Tooltip reveal on marker hover/click; active thumbnail toggle state.
  - Priority B (Enhancement): Continuous radial halo pulse animation expanding from each hotspot marker dot.
  - Priority C (Optional Polish): Smooth cross-fade transition when toggling between accessory views.
- **Responsive Requirements**:
  - Desktop: Centered wide presentation with percentage-anchored hotspot markers.
  - Mobile: Hotspot markers scale proportionally; tooltips render as accessible popovers or bottom sheets to prevent viewport clipping.
- **Acceptance Criteria**: Hotspot dots remain pinned to correct coordinate percentages across viewport resizes; tooltips dismiss cleanly.
- **Verification Method**: Test interaction with all 6 hotspot markers and 3 thumbnail selectors on desktop and mobile viewports.

#### Tasks:
- [ ] **TASK-401**: Implement Comfort section layout with frontal headphone stage, 6 interactive hotspot markers with tooltips, and bottom accessory view switcher thumbnails.

---

### PHASE 5 — Product Collection Section
- **Goal**: Implement Section 4 ("ELITE TECH COLLECTION") with horizontal card deck, color selector dots, lime hover action buttons, and scrollbar track indicator.
- **Files/Components Likely Involved**:
  - `src/sections/Collection/Collection.tsx`
  - `src/sections/Collection/ProductCard.tsx`
  - `src/sections/Collection/ScrollTrack.tsx`
  - `src/sections/Collection/index.ts`
  - `src/App.tsx`
- **Dependencies on Previous Phases**: Phase 4.
- **Required Behavior**:
  - Header: `ELITE TECH COLLECTION` with subtitle on left and lime `"Shop All"` pill button on right.
  - Horizontal deck of elevated white cards (`img-collection-product-01`, `img-collection-product-02`, `img-collection-product-03` with `1:1` aspect ratio placeholders).
  - Card anatomy: Centered product image, bottom row with product title `[TBD]`, price `[TBD]`, color dots, and circular lime arrow hover button.
  - Horizontal scroll track indicator at bottom with active slider indicator.
- **Motion Requirements**:
  - Priority A (Core): Horizontal slider scroll syncing dynamically with bottom track indicator.
  - Priority B (Enhancement): Card hover elevation (`translateY: -6px`) with soft shadow deepen and circular lime button reveal.
- **Responsive Requirements**:
  - Desktop: Multi-card visible row with scroll/drag navigation.
  - Mobile: Native touch-snap horizontal carousel (`scroll-snap-type: x mandatory`).
- **Acceptance Criteria**: Horizontal navigation operates smoothly; progress bar indicator reflects scroll position; card hover states function cleanly.
- **Verification Method**: Test mouse wheel/drag on desktop and touch-swipe on mobile; verify card hover interactions.

#### Tasks:
- [ ] **TASK-501**: Implement Collection section with responsive card slider, product cards with color swatch dots, lime hover buttons, and synchronized horizontal scroll track indicator.

---

### PHASE 6 — Testimonial Section
- **Goal**: Implement Section 5 featuring the large dual-tone editorial quote, circular arrow navigation controls, and elevated lifestyle portrait card with rating badge.
- **Files/Components Likely Involved**:
  - `src/sections/Testimonial/Testimonial.tsx`
  - `src/sections/Testimonial/QuoteCard.tsx`
  - `src/sections/Testimonial/ReviewerBadge.tsx`
  - `src/sections/Testimonial/index.ts`
  - `src/App.tsx`
- **Dependencies on Previous Phases**: Phase 5.
- **Required Behavior**:
  - Two-column asymmetric layout.
  - Left column: Large editorial quotation with dual-tone weight contrast (bold near-black vs. light gray text); circular navigation arrow buttons (gray left arrow `←`, lime right arrow `→`).
  - Right column: Elevated card with portrait photo (`img-editorial-portrait` placeholder with `4:5` or `1:1` aspect ratio) and floating overlay card (reviewer name `[TBD]`, title `[TBD]`, 5 gold stars).
- **Motion Requirements**:
  - Priority A (Core): Arrow button click cycles between testimonial data with smooth content swap.
  - Priority B (Enhancement): Cross-fade transition between quotes and portrait images.
  - Priority C (Optional Polish): Staggered text fade on quote change.
- **Responsive Requirements**:
  - Desktop: Side-by-side split layout.
  - Mobile: Single-column stack with quote on top and portrait card below; navigation buttons positioned for thumb reach.
- **Acceptance Criteria**: Dual-tone typographic contrast matches reference; arrow controls update active slide cleanly; stars and reviewer badge render sharply.
- **Verification Method**: Click arrow controls to cycle slides; inspect typographic contrast and layout wrapping across viewports.

#### Tasks:
- [ ] **TASK-601**: Implement Testimonial section with dual-tone editorial quote, interactive carousel navigation arrow buttons, and portrait card with floating 5-star reviewer badge.

---

### PHASE 7 — About / Partner Section
- **Goal**: Implement Section 6 featuring the brand mission statement with split-weight typography, lime CTA, and the 6-card technology partner logo grid.
- **Files/Components Likely Involved**:
  - `src/sections/About/About.tsx`
  - `src/sections/About/PartnerGrid.tsx`
  - `src/sections/About/index.ts`
  - `src/App.tsx`
- **Dependencies on Previous Phases**: Phase 6.
- **Required Behavior**:
  - Centered overline badge: Green dot + `• About Us`.
  - Centered large editorial statement with split-weight typographic emphasis (bold root vs. light gray text).
  - Centered lime pill button: `"Learn More"`.
  - Subtitle: *"Partnering with top brands to bring you trusted quality."*
  - 6 white rounded pill cards displaying vector partner logos (`logo-partner-01` through `logo-partner-06` placeholders).
- **Motion Requirements**:
  - Priority B (Enhancement): Staggered upward float for partner logo cards on viewport entrance.
  - Priority C (Optional Polish): Subtle scroll scrub illuminating statement text opacity as user scrolls.
- **Responsive Requirements**:
  - Desktop: Centered layout with 6-item single-row or 3x2 grid of partner cards.
  - Mobile: Text scales cleanly; partner cards flow into a 2x3 or 3x2 grid with consistent padding.
- **Acceptance Criteria**: Statement captures exact reference typographic weight contrast; partner cards render with clean shadows; responsive wrapping without overflow.
- **Verification Method**: Viewport resize testing from 1440px down to 375px; verify clean visual alignment of partner badges.

#### Tasks:
- [ ] **TASK-701**: Implement About section with centered split-weight brand statement, lime pill CTA, and 6-card technology partner logo grid.

---

### PHASE 8 — Blog Section
- **Goal**: Implement Section 7 ("BLOG") featuring the 3-column vertical article cards with imagery, metadata, and link interactions.
- **Files/Components Likely Involved**:
  - `src/sections/Blog/Blog.tsx`
  - `src/sections/Blog/BlogCard.tsx`
  - `src/sections/Blog/index.ts`
  - `src/App.tsx`
- **Dependencies on Previous Phases**: Phase 7.
- **Required Behavior**:
  - Section header: `BLOG` on left with subtitle; lime pill button `"Visit Blog"` on right.
  - 3-column grid of vertical editorial cards:
    - Photographic container preserving `4:5` vertical aspect ratio (`img-blog-01`, `img-blog-02`, `img-blog-03` placeholders).
    - Article title in bold sans-serif (`[TBD titles]`).
    - Author and publication date metadata (`[TBD metadata]`).
    - `"READ MORE"` text link with trailing arrow icon.
- **Motion Requirements**:
  - Priority B (Enhancement): Hovering card zooms image slightly (`scale: 1.05`) within rounded overflow mask; card entrance stagger on scroll.
  - Priority C (Optional Polish): Trailing arrow on `"READ MORE"` nudges right on hover.
- **Responsive Requirements**:
  - Desktop: 3-column equal grid.
  - Mobile: Single-column stack or horizontal touch slider.
- **Acceptance Criteria**: Strict `4:5` aspect ratio maintained; hover zoom contained cleanly within card bounds; metadata clearly legible.
- **Verification Method**: Hover testing on all cards; responsive column collapse checks at 1024px, 768px, and 390px.

#### Tasks:
- [ ] **TASK-801**: Implement Blog section with 3-column responsive card grid, image aspect-ratio containers, article metadata, and hover interactions.

---

### PHASE 9 — Footer Section
- **Goal**: Implement Section 8 featuring the newsletter subscription form, categorized navigation links, social circle icons, and payment badges.
- **Files/Components Likely Involved**:
  - `src/sections/Footer/Footer.tsx`
  - `src/sections/Footer/NewsletterForm.tsx`
  - `src/sections/Footer/index.ts`
  - `src/App.tsx`
- **Dependencies on Previous Phases**: Phase 8.
- **Required Behavior**:
  - Soft cool-gray background (`--color-surface-footer`).
  - Left column: Brand logo icon + brandmark, newsletter description, pill input with integrated lime `"Subscribe"` pill button, and 4 circular social icon buttons (Facebook, Twitter/X, LinkedIn, Instagram).
  - Right column: Categorized navigation columns (`Navigations`, `Resources`).
  - Bottom bar: Left copyright line (*"© 2024 Aurelis. All rights reserved."*); right payment provider badges (Visa, Mastercard, Amex, PayPal, Discover).
- **Motion Requirements**:
  - Priority B (Enhancement): Soft opacity fade on footer entrance.
- **Responsive Requirements**:
  - Desktop: 2-column primary split with sub-columns and bottom bar.
  - Mobile: Vertical stack with newsletter on top, link columns in 2-column grid below, and centered bottom bar.
- **Acceptance Criteria**: Newsletter form handles input validation feedback; all links and social buttons have clear hover states; layout matches reference.
- **Verification Method**: Test form submission state; test responsive stacking on mobile viewports.

#### Tasks:
- [ ] **TASK-901**: Implement Master Footer with newsletter subscription input, lime submit button, social links, categorized navigation columns, and payment trust badges.

---

### PHASE 10 — Responsive & Mobile Pass
- **Goal**: Conduct an end-to-end responsive audit across all sections to ensure flawless mobile, tablet, and ultrawide presentation.
- **Files/Components Likely Involved**:
  - All section components in `src/sections/`
  - Global styles in `src/styles/globals.css`
- **Dependencies on Previous Phases**: Phases 1 through 9.
- **Required Behavior**:
  - All sections scale cleanly without unwanted horizontal scrollbar overflow.
  - Minimum touch target size (`44x44px`) met for all buttons, nav triggers, and hotspot pins.
  - Typography scales continuously via `clamp()` without orphan words or clipping.
- **Motion Requirements**:
  - Priority A (Core): Convert any pinned horizontal tracks to native touch-snap carousels on viewports `< 768px`; disable heavy mouse tracking listeners on touchscreens.
- **Responsive Requirements**:
  - Tested at: 375px (iPhone SE), 390px (iPhone 14/15/16), 768px (iPad portrait), 1024px (iPad landscape), 1440px (Desktop), and 2560px (Ultrawide).
- **Acceptance Criteria**: Zero horizontal scroll bugs; touch gestures operate naturally; all text readable without manual zoom.
- **Verification Method**: Browser devtools responsive emulation and physical mobile device check.

#### Tasks:
- [ ] **TASK-1001**: Audit and refine responsive layout behavior, touch targets, typography clamp scales, and horizontal overflow across all viewports.

---

### PHASE 11 — Motion Refinement & GSAP Choreography
- **Goal**: Polish scroll-driven animations, verify GSAP context lifecycle hygiene, and calibrate motion curves against MOTION.md priorities.
- **Files/Components Likely Involved**:
  - `src/lib/gsap.ts`
  - Section motion hooks and timelines across `src/sections/`
- **Dependencies on Previous Phases**: Phase 10.
- **Required Behavior**:
  - Dark-to-light canvas transition interpolates smoothly across the Hero boundary via ScrollTrigger (Priority A).
  - Hotspot radar pulse rings run smoothly without dominating CPU (Priority B).
  - Hero headline reveals and card hover lifts animate with weighted physical easing curves.
  - All GSAP timelines scoped within `gsap.context()` for clean React cleanup.
- **Motion Requirements**:
  - Full execution of Priority A and Priority B motion items; Priority C added where performance permits.
- **Responsive Requirements**:
  - Animations gracefully adapt or disable on mobile viewports.
- **Acceptance Criteria**: Steady 60 FPS animation playback; zero memory leaks or duplicate ScrollTrigger instances on resize/remount.
- **Verification Method**: Chrome DevTools Performance panel profiling during scroll; verify ScrollTrigger instance counts.

#### Tasks:
- [ ] **TASK-1101**: Choreograph global ScrollTrigger canvas transition, calibrate motion easing curves, and audit GSAP context lifecycle cleanups.

---

### PHASE 12 — Accessibility & Performance Optimization
- **Goal**: Ensure full `prefers-reduced-motion` compliance, semantic HTML hierarchy, WCAG contrast standards, and asset performance.
- **Files/Components Likely Involved**:
  - `src/hooks/useReducedMotion.ts`
  - All section markup and interactive controls
- **Dependencies on Previous Phases**: Phase 11.
- **Required Behavior**:
  - `prefers-reduced-motion: reduce` disables all continuous scrub tweens, ambient parallax, and pulsing indicators, providing immediate static fallbacks.
  - Proper heading hierarchy (`h1` through `h4`) with zero skipped levels.
  - Visible focus indicators (`focus-visible`) for all interactive elements.
  - Image containers utilize explicit aspect-ratio attributes to eliminate CLS.
- **Motion Requirements**:
  - Priority A (Mandatory): Instant or minimal opacity transitions when reduced motion is preferred.
- **Responsive Requirements**:
  - Maintained across all screen sizes.
- **Acceptance Criteria**: Lighthouse Accessibility score >= 95; Lighthouse Performance score >= 90; zero CLS (> 0.05).
- **Verification Method**: Emulate `prefers-reduced-motion` in browser; run Lighthouse audit; keyboard tab-navigation walk-through.

#### Tasks:
- [ ] **TASK-1201**: Implement reduced-motion fallbacks, keyboard focus rings, semantic ARIA attributes, and Core Web Vitals optimization.

---

### PHASE 13 — Browser QA & Final Polish
- **Goal**: Execute cross-browser verification, eliminate visual defects, and certify the website for deployment.
- **Files/Components Likely Involved**:
  - Entire application bundle
- **Dependencies on Previous Phases**: Phase 12.
- **Required Behavior**:
  - Flawless visual fidelity matching the Stitch reference aesthetic.
  - Cross-browser compatibility confirmed across Chromium (Chrome, Edge), WebKit (Safari), and Gecko (Firefox).
  - Production build and typecheck pass cleanly with zero warnings or errors.
- **Motion Requirements**:
  - Smooth animation performance verified across target browsers.
- **Responsive Requirements**:
  - Full verification across all standard breakpoints.
- **Acceptance Criteria**: `npm run typecheck` passes; `npm run build` succeeds; zero console errors; visual appearance faithfully reflects the reference design.
- **Verification Method**: Automated build verification (`tsc -b && vite build`) and browser testing across Chrome, Safari, and Firefox.

#### Tasks:
- [ ] **TASK-1301**: Perform multi-browser verification, visual alignment check against reference screenshots, and production build sign-off.

---

## Implementation Rules

1. **Work on one task at a time.** Never bundle multiple phase tasks together.
2. **Read relevant documentation before implementation.** Inspect PRD.md, DESIGN.md, MOTION.md, and ASSETS.md before editing code.
3. **Do not redesign without updating the source documentation.** Preserve established visual layouts and styling agreements.
4. **Do not invent business/content requirements.** Treat unprovided copy, specs, names, prices, and assets as TBD placeholders.
5. **Reuse existing dependencies and components.** Leverage React, GSAP, and Tailwind utilities before introducing new files.
6. **Do not add dependencies unless justified.** Native browser and established libraries take precedence.
7. **Test after every meaningful implementation milestone.** Run typechecks and verify browser rendering after each task.
8. **Do not modify unrelated sections.** Keep changes strictly isolated to the active phase and task.
9. **Desktop and mobile must both be considered.** Never treat mobile adaptation as an afterthought.
10. **Respect prefers-reduced-motion.** Every animation must have an immediate, accessible fallback.
11. **Use GSAP/ScrollTrigger only where justified by MOTION.md.** Avoid unneeded custom animation engines.
12. **Keep animation values tunable.** Separate timing and easing variables from core component markup.
