# Requirements — Aurelis

## Overview
Synthesized from `docs/PRD.md`, `docs/DESIGN.md`, `docs/MOTION.md`, and `docs/QA.md`.

---

## 1. Functional Requirements

### Global Header & Navigation
- [ ] **REQ-NAV-01**: Top 32px announcement strip with left-aligned promo message and right-aligned currency selector.
- [ ] **REQ-NAV-02**: Floating 72px navbar with left text links (`Home`, `Shop`, `Collections`, `About Us`), centered `AURELIS` wordmark, and right utility icons (Search, Account, Cart).
- [ ] **REQ-NAV-03**: Dynamic backdrop blur (`backdrop-filter: blur(16px)`) and frosted border activate on scroll down.

### Hero Section
- [ ] **REQ-HERO-01**: Dark charcoal/obsidian background canvas with bottom gradient transition.
- [ ] **REQ-HERO-02**: 3-line stacked uppercase display headline (`IMMERSIVE SOUND FOR THE DIGITAL GENERATION`) with dual-tone white/outline-gray styling.
- [ ] **REQ-HERO-03**: Electric lime pill CTA button with circular 45° arrow badge (↗) and text `"Discover More >"`.
- [ ] **REQ-HERO-04**: Floating 3/4 perspective headphone presentation container with concentric metallic ear-cup highlight.
- [ ] **REQ-HERO-05**: 2 interactive circular thumbnail switcher pills to toggle colorway finish states.

### Feature & Specification Showcase
- [ ] **REQ-FEAT-01**: Clean off-white canvas background.
- [ ] **REQ-FEAT-02**: Left column with section heading (`POWERFUL SOUND ANYTIME ANYWHERE`), lead copy, and lime CTA.
- [ ] **REQ-FEAT-03**: 5-item vertical specification list with hairline dividers and smooth accordion expand/collapse behavior.
- [ ] **REQ-FEAT-04**: Right elevated white card displaying open wireless charging case with floating badge pill (thumbnail, product label, price, 3 color dots).

### Symmetrical Ergonomics & Hotspots
- [ ] **REQ-COMF-01**: Centered header (`DESIGNED FOR COMFORT`) and descriptive subtitle.
- [ ] **REQ-COMF-02**: Symmetrical frontal elevation headphone presentation.
- [ ] **REQ-COMF-03**: 6 circular white hotspot marker dots positioned over key hardware locations with pulsing halos.
- [ ] **REQ-COMF-04**: Interactive tooltip card expanding on marker hover/tap detailing component metallurgy and engineering.
- [ ] **REQ-COMF-05**: 3 bottom thumbnail cards allowing switching between headphone, case, and adapter views.

### Product Suite Collection
- [ ] **REQ-COLL-01**: Section header (`ELITE TECH COLLECTION`) with subtitle and lime `"Shop All"` pill button.
- [ ] **REQ-COLL-02**: Horizontal deck of elevated white cards with product imagery, titles, prices, color dots, and lime hover arrow buttons.
- [ ] **REQ-COLL-03**: Dynamic horizontal scrollbar slider track indicator updating with scroll position.

### Editorial Testimonial & Review
- [ ] **REQ-TEST-01**: Large editorial quotation with dual-tone typographic styling (bold dark words vs. light gray phrases).
- [ ] **REQ-TEST-02**: Circular navigation arrow buttons (`←` and `→`) cycling active testimonial quote.
- [ ] **REQ-TEST-03**: Right elevated photographic portrait card with floating 5-star reviewer badge (`Diana Amelia`, 5 gold stars).

### Brand Mission & Partner Trust Bar
- [ ] **REQ-ABOU-01**: Overline badge with green dot (`• About Us`).
- [ ] **REQ-ABOU-02**: Centered editorial statement with split-weight typographic emphasis (bold root vs. light gray text).
- [ ] **REQ-ABOU-03**: Centered lime pill button (`"Learn More"`).
- [ ] **REQ-ABOU-04**: Subtitle and 6 white rounded pill cards displaying vector partner logos.

### Editorial Stories & Blog
- [ ] **REQ-BLOG-01**: Section header (`BLOG`), subtitle, and lime pill button (`"Visit Blog"`).
- [ ] **REQ-BLOG-02**: 3 vertical editorial photography cards (`4:5` aspect ratio) with titles, author/date metadata, and `"READ MORE"` links.
- [ ] **REQ-BLOG-03**: Card hover interactions (interior image scale and trailing arrow nudge).

### Master Split Footer
- [ ] **REQ-FOOT-01**: Soft cool-gray background canvas.
- [ ] **REQ-FOOT-02**: Left column with brand mark, newsletter text, rounded input, and integrated lime `"Subscribe"` button.
- [ ] **REQ-FOOT-03**: 4 circular social icon buttons (Facebook, Twitter/X, LinkedIn, Instagram).
- [ ] **REQ-FOOT-04**: Right categorized navigation columns (`Navigations`, `Resources`).
- [ ] **REQ-FOOT-05**: Bottom bar with copyright line and payment provider badges (Visa, Mastercard, Amex, PayPal, Discover).

---

## 2. Non-Functional & Quality Requirements
- [ ] **REQ-PERF-01**: 60+ FPS animation cycle during scroll interactions.
- [ ] **REQ-PERF-02**: Lighthouse Performance score >= 90; Accessibility score >= 95.
- [ ] **REQ-PERF-03**: Zero Cumulative Layout Shift (`CLS < 0.05`) through strict aspect-ratio container locking.
- [ ] **REQ-A11Y-01**: Full support for `prefers-reduced-motion: reduce`, disabling continuous scrub/parallax and providing immediate static states.
- [ ] **REQ-A11Y-02**: Minimum 44x44px touch targets on mobile viewports.
- [ ] **REQ-A11Y-03**: Visible keyboard focus rings (`focus-visible`) for all interactive triggers.
- [ ] **REQ-BUILD-01**: Zero TypeScript compiler errors (`tsc --noEmit`).
- [ ] **REQ-BUILD-02**: Production build compiles cleanly (`tsc -b && vite build`).
