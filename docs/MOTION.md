# Motion & Animation Architecture — Aurelis

## 1. Core Animation Principles
Motion in Aurelis is treated as physical matter with mass, friction, and mechanical precision. We avoid bouncy cartoon physics and spring overshoot. Instead, motion communicates **weight, acoustic dampening, and surgical engineering**:

1. **Inertia & Weight**: Easing curves feature gradual acceleration and weighted deceleration (e.g., `power3.out`, `expo.out`, `cubic-bezier(0.16, 1, 0.3, 1)`).
2. **Deterministic Scrollytelling**: Animations tied to scroll velocity must feel connected 1:1 to finger movement without jarring lag or elastic snapback.
3. **Intentional Hierarchy**: Foreground content leads; background ambience follows with secondary parallax dampening.
4. **Spatial Continuity**: Elements do not disappear abruptly; they morph, scale into depth, or fade through focal blur transitions.

---

## 2. Scroll-Driven Interactions & GSAP ScrollTrigger

### 2.1 Centralized Scroll Choreography
All scroll-driven timelines are registered through a unified GSAP context using `ScrollTrigger.create()` or `gsap.timeline({ scrollTrigger: { ... } })`.

Key configurations:
- **`scrub: 1` or `scrub: 0.8`**: Smooth smoothing factor that buffers micro-stutters in mouse wheels while feeling immediate on trackpads.
- **`anticipatePin: 1`**: Prevents visual jitter when pinned elements lock into viewport position.
- **`fastScrollEnd: true`**: Ensures timelines catch up cleanly if a user flings the scroll quickly.

---

## 3. Pinned Sections & Mechanical Exploded View

### 3.1 Exploded Hardware Breakdown (Stage Section)
- **Pinning Strategy**: The section pins for `300vh` to `400vh` of scroll distance.
- **Phase 1 (0% - 25% Scroll)**: Headphone shell separates along the Z-axis and X-axis. Outer titanium acoustic chamber pulls outward.
- **Phase 2 (25% - 50% Scroll)**: Custom 50mm Planar Magnetic diaphragm exposes its micro-etched traces; magnetic arrays slide apart.
- **Phase 3 (50% - 75% Scroll)**: Internal acoustic damping chamber and digital signal processing board rotate 15 degrees into profile view.
- **Phase 4 (75% - 100% Scroll)**: Memory foam cushion with magnetic lock uncouples; technical callouts animate into focus with staggered lines.

### 3.2 Acoustic Curve Pinned Comparison
- Pinned for `200vh`.
- Real-time SVG path morphing from standard baseline consumer curve into the Aurelis Reference Soundstage curve.

---

## 4. Parallax & Scrub Animations
- **Multi-Plane Parallax**:
  - Background grid and ambient lights: `yPercent: -15` (slowest plane).
  - Primary hardware showcases: `yPercent: 0` (reference plane).
  - Floating typography & spec callouts: `yPercent: 25` (fast plane).
- **Rotation Scrub**: Subtle 3D tilt (`rotationY`, `rotationX`) linked to scroll velocity to give realistic physical presence.

---

## 5. Image & Canvas Transitions
- **Reveal Masks**: Clip-path polygon reveals (`polygon(0 0, 100% 0, 100% 100%, 0 100%)`) combined with subtle image scale down from `1.15` to `1.0`.
- **Depth of Field Blur**: When switching material finishes or exploded states, inactive layers receive a subtle blur (`filter: blur(8px)`) and opacity reduction to focus attention on active components.

---

## 6. Typography Animation
- **Split Line / Character Reveals**: Headlines enter using staggered mask clipping (`overflow: hidden` line wrappers) with `y: '100%'` to `y: '0%'`, duration `1.1s`, ease `power4.out`.
- **Monospace Telemetry Scramble**: Number tickers and frequency values scrub from `00.0` to target values (e.g., `20Hz - 48,000Hz`, `0.02% THD`) via GSAP counter proxies.

---

## 7. Horizontal Scrolling
- **Specifications & Gallery Track**:
  - Pinned container (`pin: true`) with horizontal translation `xPercent: -100 * (slidesCount - 1)`.
  - Scrub duration scaled proportionally to track length for consistent traversal velocity.
  - Interactive progress indicator tracking horizontal travel percentage.

---

## 8. Hover & Pointer Interactions
- **Magnetic Buttons**: Elements dynamically offset towards mouse coordinates within a 60px proximity radius using a dampened GSAP quickTo tween.
- **Interactive Lighting Spot**: Mouse position dynamically updates CSS radial gradient position for real-time metallic reflections.
- **Card 3D Tilt**: Micro-rotation (`max 8deg`) on mouse move with smooth reset on mouse leave.

---

## 9. Mobile Motion Behavior (Responsive Degradation)
- **Viewport < 768px Adaptations**:
  - Reduce total pinned scroll distances by 50% to prevent scroll fatigue.
  - Disable heavy multi-axis 3D mouse tracking.
  - Convert horizontal pinned tracks into native CSS touch snap carousels when screen width is constrained.
  - Limit heavy blur filters to improve battery life and prevent GPU thermal throttling.

---

## 10. Accessibility & Reduced Motion
Strict adherence to `window.matchMedia('(prefers-reduced-motion: reduce)')`:
```typescript
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (prefersReducedMotion) {
  // Disable scrub and pin animations
  // Switch to immediate opacity transitions or static views
  // Disable auto-playing or continuous ambient loops
}
```
All critical information remains fully accessible without motion dependencies.
