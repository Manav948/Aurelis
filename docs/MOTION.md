# Motion Design & Interaction Architecture — Aurelis

> **Document Status**: Grounded in visual analysis of `/reference/design/`.  
> **Motion Reality Check**: The `/reference/motion/` directory currently contains no video files. Therefore, **all motion specifications below are [PROPOSED FOR AURELIS / INFERRED FROM STATIC VISUAL CUES]**.  
> Proposed animations are categorized by priority:
> - **Priority A = Core Experience** (Essential for layout stability, navigation flow, and baseline interactivity)
> - **Priority B = Enhancement** (Elevates visual storytelling and perceived product polish)
> - **Priority C = Optional Polish** (Delightful micro-interactions, secondary to performance)  
> All numerical values, durations, and easing curves remain **tunable implementation recommendations**.

---

## 1. Motion Principles & Intent [PROPOSED]
1. **Physical Engineering Feel**: Motion should feel weighted, dampened, and mechanical—reflecting machined titanium, calibrated hinges, and acoustic isolation.
2. **Deterministic Scrollytelling**: Scroll-driven animations must map naturally to user movement without loose or rubbery lag.
3. **Intentional Feedback**: Micro-interactions (hovering pins, clicking swatches, expanding accordion items) provide immediate, tactile visual confirmation.

---

## 2. Global Scroll Choreography

### 2.1 Dark-to-Light Canvas Transition
- **Priority**: **A (Core Experience)**
- **Visual Cue**: The static reference displays Section 1 (Hero) on a dark charcoal void that transitions via gradient into Section 2's light off-white background.
- **Motion Intent**: As the user scrolls past the Hero, interpolate the global background tone smoothly from dark charcoal (`--color-void-hero`) to clean off-white (`--color-canvas-light`).
- **Tunable Implementation**: Lightweight GSAP ScrollTrigger tween with `scrub: true` across the Hero exit boundary (`start: "bottom 90%"`, `end: "bottom 40%"`).

---

## 3. Section-by-Section Interaction & Priority Breakdown

### Section 0: Global Header
- **Load Entrance**: Priority B (Enhancement) — Subtle slide-down or fade-in once assets are mounted.
- **Sticky Blur Transition**: Priority A (Core Experience) — When scrolling beyond the hero, background transitions to a frosted glass surface (`backdrop-filter: blur(16px)`).
- **Link Hover Underline**: Priority C (Optional Polish) — Subtle horizontal underline expand on link hover.

### Section 1: Hero Section
- **Headline Entrance**: Priority B (Enhancement) — Staggered line reveal from bottom to top with overflow masking.
- **Product Entrance**: Priority B (Enhancement) — Gentle upward float and scale settlement (`scale: 1.05 -> 1.0`, `opacity: 0 -> 1`) on page load.
- **Colorway Switcher**: Priority A (Core Experience) — Clicking a circular thumbnail cross-fades the headphone image texture smoothly.
- **Ambient Cursor Parallax (Desktop)**: Priority C (Optional Polish) — Constrained tilt (`±3°`) following mouse coordinates. Must disable if frame rate drops below 55 FPS.

### Section 2: Feature Showcase ("Powerful Sound Anytime Anywhere")
- **Accordion Interaction**: Priority A (Core Experience) — Clicking an accordion row expands its descriptive text with smooth height interpolation, while gracefully collapsing the open item.
- **Floating Product Badge Float**: Priority C (Optional Polish) — Gentle ambient vertical hover bob on the earbud tag pill to reinforce depth.

### Section 3: Symmetrical Ergonomics & Hotspots ("Designed for Comfort")
- **Hotspot Marker Pulse**: Priority B (Enhancement) — Gentle continuous radial halo pulse expanding outward from each of the 6 white marker dots to signal interactivity.
- **Hotspot Tooltip Expansion**: Priority A (Core Experience) — Hovering or tapping a hotspot dot reveals a clean technical callout card detailing component engineering.
- **Accessory View Switch**: Priority A (Core Experience) — Clicking any of the 3 bottom thumbnails transitions the center product visual between the full headphone, travel case, and cable/adapter.

### Section 4: Collection Carousel ("Elite Tech Collection")
- **Responsive Slider / Carousel**: Priority A (Core Experience) — Clean horizontal slider track updating the bottom slider indicator dynamically.
  - Desktop: Wheel-scrubbed or mouse-draggable track.
  - Mobile: Native touch-snap overflow (`scroll-snap-type: x mandatory`).
- **Card Hover Elevation**: Priority B (Enhancement) — Hovering a card lifts the container slightly (`translateY: -6px`) with a softened shadow deepen.
- **Lime Action Button Reveal**: Priority B (Enhancement) — Circular lime arrow button reveals or scales up on card hover.

### Section 5: Editorial Quote & Lifestyle Spotlight
- **Quote Transition**: Priority A (Core Experience) — Clicking the previous (`←`) or next (`→`) circular arrow buttons cycles the displayed testimonial and cross-fades the associated portrait photograph.
- **Split-Text Stagger**: Priority C (Optional Polish) — Staggered character or word fade on quote change.

### Section 6: Brand Mission & Partner Grid ("About Us")
- **Scroll Scrub Illuminator**: Priority C (Optional Polish) — Subtle opacity scrub across the statement text as the user scrolls through the section.
- **Partner Card Entrance**: Priority B (Enhancement) — Soft upward staggered float (`y: 20 -> 0`) when entering the viewport.

### Section 7: Editorial Stories ("BLOG")
- **Card Entrance**: Priority B (Enhancement) — Staggered entrance as the blog grid enters the viewport.
- **Image Zoom on Hover**: Priority B (Enhancement) — Subtle interior image scale (`scale: 1.0 -> 1.05`) within the rounded mask.
- **Link Arrow Nudge**: Priority C (Optional Polish) — Trailing arrow on `"READ MORE"` slides forward by `4px` on hover.

### Section 8: Master Footer
- **Footer Fade-In**: Priority B (Enhancement) — Clean opacity fade as user reaches the final page viewport.

---

## 4. Mobile Adaptations & Performance Invariants [PRIORITY A]
- Viewports `< 768px` disable multi-axis mouse tracking to save CPU/battery.
- Complex pinned horizontal scroll tracks fall back to native touch carousels (`scroll-snap-type: x mandatory`).
- Animations animate exclusively `transform` and `opacity` properties to prevent costly layout reflows.

---

## 5. Accessibility & Reduced Motion (`prefers-reduced-motion`) [PRIORITY A - MANDATORY]
In compliance with `prefers-reduced-motion: reduce`:
- Disable all continuous scrub animations and ambient parallax.
- Hotspot pulsing halos remain static, visible indicators.
- Carousel and quote transitions switch immediately or with simple opacity fades (`duration: 0.2s max`).
- Accordion content remains immediately toggleable without animation delay.
