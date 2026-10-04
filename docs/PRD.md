# Project Requirements Document (PRD) — Aurelis

## 1. Project Overview & Goal
**Aurelis** is a bespoke, high-end frontend showcase website engineered to spotlight a revolutionary flagship acoustic headphone. Built with surgical aesthetic precision and high-performance scroll-driven motion design, Aurelis demonstrates cutting-edge industrial engineering, acoustic fidelity, precision craftsmanship, and an atmospheric digital brand narrative.

The primary goal of this project is to create an immersive, gallery-grade digital experience that rivals luxury audio leaders (such as Bang & Olufsen, Master & Dynamic, and Apple AirPods Max), captivating audiophiles, designers, and luxury technology enthusiasts through seamless interactive storytelling.

---

## 2. Target Audience
1. **Discerning Audiophiles & Sound Engineers**: Demanding acoustic purity, planar magnetic precision, frequency response transparency, and custom DAC/amplifier synergy.
2. **Industrial Design & Material Connoisseurs**: Appreciating CNC-machined aerospace titanium, calfskin leather, acoustic resonance damping, and minimalist physical form factors.
3. **High-End Tech Consumers & Creatives**: Professionals and tastemakers seeking an elevated listening and aesthetic experience with zero friction in digital interaction.

---

## 3. Scope & Page Structure
Aurelis is architected as an immersive single-page progressive narrative showcase with modular overlay drawers for deep technical exploration:

### 3.1 Main Showcase Flow
1. **Hero / Cinematic Prologue**:
   - Atmospheric ambient lighting, bold editorial typography, floating 3D/layered headphone silhouette.
   - Micro-interactions, audio preview pulse, and scroll hint.
2. **Philosophy & Acoustic Architecture**:
   - The genesis of the Aurelis sound signature.
   - Macro view of the custom planar magnetic driver and acoustic chamber.
3. **Interactive Exploded Engineering View (Pinned Stage)**:
   - ScrollTrigger-driven multi-stage pinned mechanical dissection.
   - Deconstruction from outer titanium shell -> beryllium-coated diaphragm -> acoustic chamber -> plush memory foam earcups.
   - Synchronized feature callouts pinned at micro-scroll steps.
4. **Soundstage & Frequency Experience**:
   - Interactive acoustic spectrum visualizer (Sub-bass, Mid-range, Treble, Air).
   - Frequency curve comparison switch (Neutral Studio Reference vs. Immersive Aurelis Signature).
   - Audio sample trigger with real-time reactive soundwave canvas.
5. **Materiality & Craftsmanship**:
   - Macro tactile highlights: Anodized aerospace aluminum, hand-stitched Tuscan leather, memory-cushioned magnetic ear cushions.
   - Interactive material switcher with texture reflections.
6. **Tactile Interaction & Spatial Ergonomics**:
   - Haptic digital crown, dual-mode lossless wireless, active acoustic beamforming.
7. **Specifications Matrix (Horizontal Scrub)**:
   - Dynamic horizontal scroll track highlighting acoustic parameters, wireless codecs (LDAC, aptX Lossless), weight, battery life (50h+), and connectivity.
8. **Curated Lookbook / Lifestyle Gallery**:
   - Parallax imagery and asymmetric editorial grid highlighting Aurelis in architectural environments.
9. **Call to Action / Pre-order Reserve & Atmospheric Footer**:
   - Bespoke configuration summary, pre-order reservation trigger, legal, newsletter, social links.

---

## 4. Key Functional Features
- **Scroll-Driven Choreography**: Fully synchronized multi-element animations controlled via GSAP ScrollTrigger.
- **Pinned Stage Exploded Exploration**: Smooth scrubbing through engineering layers without layout jumping.
- **Audio Spectrum Interactive Demo**: Simulated or audio-element-driven frequency visualizer responsive to user input.
- **Material Switcher**: Toggle between headphone colorways/finishes (Obsidian Black, Brushed Titanium, Champagne Gold).
- **Floating Minimalist Navigation**: Backdrop-blur navigation with scroll progress indicator and quick-jump anchors.
- **Dynamic Pre-order Drawer / Modal**: Smooth overlay displaying order summary and reservation form state.

---

## 5. Non-Functional Requirements
- **Performance**: Consistent 60+ FPS animation cycle during scroll events; no layout thrashing or long frame drops.
- **Responsive Geometry**: Flawless scaling from 375px mobile screens to 3840px ultrawide displays.
- **Accessibility (a11y)**: Keyboard navigability, semantic ARIA roles for controls, color contrast compliance, and full support for `prefers-reduced-motion`.
- **Zero Server Overhead**: 100% static frontend client execution with lightning-fast CDN delivery.

---

## 6. Acceptance Criteria
- [ ] Initial bundle load under 250KB (gzipped, excluding media assets).
- [ ] Flawless dev server and production build via Vite + TypeScript (`npm run build`).
- [ ] Zero TypeScript warnings or strict check errors (`tsc --noEmit`).
- [ ] Smooth scrubbing on desktop and mobile without scrolling lockups.
- [ ] Full graceful degradation when reduced-motion preferences are detected.
