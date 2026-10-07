# System Requirements — Aurelis

**Ingest Date:** 2026-10-06  
**Source Documents:** `docs/PRD.md`, `docs/DESIGN.md`, `docs/QA.md`

---

## 1. Functional Requirements by Section

### REQ-NAV: Global Navigation & Announcement
- [ ] 32px top announcement bar with promo text and currency selector.
- [ ] 72px floating header with navigation links (`Home`, `Shop`, `Collections`, `About Us`), centered `AURELIS` brandmark, and utility icons (Search, Account, Cart).
- [ ] Glassmorphic backdrop blur activates on scroll down.

### REQ-HERO: Hero Showcase
- [ ] Dark void canvas with smooth bottom vertical gradient.
- [ ] 3-line stacked all-caps display headline (`IMMERSIVE SOUND FOR THE DIGITAL GENERATION`).
- [ ] Electric lime pill CTA button with circular 45° arrow badge (`Discover More >`).
- [ ] Floating 3/4 perspective headphone presentation with concentric metallic ear-cup finish.
- [ ] 2 circular interactive colorway thumbnail badges at bottom right.

### REQ-FEAT: Feature Architecture ("POWERFUL SOUND ANYTIME ANYWHERE")
- [ ] Light canvas background.
- [ ] Left column with section header, description, and 5-item specification list with hairline dividers.
- [ ] Smooth accordion interaction (first item expanded, subsequent items toggleable).
- [ ] Right column elevated white card showing wireless charging case with floating badge pill.

### REQ-COMF: Symmetrical Ergonomics & Hotspots ("DESIGNED FOR COMFORT")
- [ ] Centered header and subtitle.
- [ ] Symmetrical frontal headphone presentation.
- [ ] 6 interactive hotspot marker dots with pulsing halos.
- [ ] Tooltip expansion detailing component engineering on marker hover/click.
- [ ] 3 bottom accessory thumbnail selector cards.

### REQ-COLL: Product Suite Carousel ("ELITE TECH COLLECTION")
- [ ] Section header with lime pill button (`Shop All`).
- [ ] Horizontal card deck of elevated white cards with centered product imagery, titles, prices, color dots, and lime hover arrow buttons.
- [ ] Dynamic horizontal scrollbar slider track indicator.

### REQ-TEST: Editorial Testimonial & Review
- [ ] Dual-tone quote typography (bold dark words vs. light slate text).
- [ ] Circular navigation arrows (`←` and `→`) cycling testimonial slides.
- [ ] Right elevated portrait card with floating 5-star reviewer badge.

### REQ-ABOU: Brand Mission & Partner Ecosystem ("About Us")
- [ ] `• About Us` green dot badge.
- [ ] Centered editorial statement with split-weight typographic emphasis.
- [ ] Centered lime pill button (`Learn More`).
- [ ] 6 white rounded pill cards displaying vector partner logos.

### REQ-BLOG: Editorial Stories ("BLOG")
- [ ] Section header with lime pill button (`Visit Blog`).
- [ ] 3 vertical editorial cards (`4:5` aspect ratio) with photography, titles, metadata, and `"READ MORE"` links.

### REQ-FOOT: Master Split Footer
- [ ] Soft cool-gray background.
- [ ] Newsletter form with pill input and lime submit button.
- [ ] 4 circular social icon buttons.
- [ ] Categorized navigation links and payment provider badges.

---

## 2. Non-Functional & Quality Requirements
- [ ] **Performance**: 60+ FPS animation cycle during scroll; Lighthouse score >= 90.
- [ ] **Zero CLS**: Strict aspect-ratio containers for all media placeholders (`CLS < 0.05`).
- [ ] **Accessibility (WCAG AA)**: Full support for `prefers-reduced-motion: reduce`, visible focus rings, minimum 44px touch targets.
- [ ] **Strict Typing**: Zero TypeScript compiler errors (`tsc --noEmit`).
