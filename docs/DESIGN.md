# Design System & Aesthetics — Aurelis

## 1. Design Vision & Philosophy
Aurelis embodies **Acoustic Brutalism meets Luxury Minimalism**. It combines industrial mechanical precision with deep atmospheric shadows, metallic reflections, and tactile micro-details. Every layout element reflects the craftsmanship of the physical hardware: calibrated, weighted, and uncompromisingly high fidelity.

---

## 2. Color Palette & Tokens
The color architecture relies on a dark atmospheric palette (Deep Void) punctuated by surgical metallic accents and soft bioluminescent radiance.

### 2.1 Core Palette Tokens
```css
:root {
  /* Backgrounds & Voids */
  --color-bg-base: #08090B;        /* Deep obsidian void */
  --color-bg-subtle: #0F1115;      /* Secondary dark canvas */
  --color-bg-elevated: #16181F;    /* Card & surface overlay */
  --color-bg-glass: rgba(15, 17, 21, 0.72); /* Backdrop blur containers */

  /* Text & Foreground */
  --color-text-primary: #F3F4F6;   /* Pure crisp platinum */
  --color-text-secondary: #9CA3AF; /* Muted slate */
  --color-text-muted: #6B7280;     /* Subtle caption text */
  --color-text-dim: #4B5563;       /* De-emphasized indicators */

  /* Metallic & Accent Tones */
  --color-accent-titanium: #D1D5DB; /* Brushed aerospace titanium */
  --color-accent-champagne: #E5C396;/* Subtle warm luxury gold */
  --color-accent-amber: #F59E0B;    /* Audio waveform accent */
  --color-accent-cyan: #38BDF8;     /* Precision frequency telemetry */

  /* Borders & Dividers */
  --color-border-subtle: rgba(255, 255, 255, 0.08);
  --color-border-hover: rgba(255, 255, 255, 0.22);
  --color-border-metallic: rgba(229, 195, 150, 0.35);

  /* Glows & Gradients */
  --glow-ambient: radial-gradient(circle at 50% 50%, rgba(229, 195, 150, 0.08) 0%, transparent 70%);
  --glow-spotlight: radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.12) 0%, transparent 60%);
}
```

---

## 3. Typography Hierarchy
Typography balances mechanical engineering precision (monospace telemetry) with haute-couture editorial presence (display headlines).

### 3.1 Font Families
- **Display / Headlines**: `Cabinet Grotesk` or `Syne` (fallback: `system-ui, -apple-system, sans-serif`) — Sculptural, wide tracking, modern luxury feel.
- **Body & Interface**: `Inter` or `Geist` — Neutral, hyper-legible at small sizes, optimal subpixel rendering.
- **Data & Telemetry / Specs**: `JetBrains Mono` or `Space Mono` — Technical, high-precision, fixed-width numerals.

### 3.2 Scale & Clamp Rules
- **Hero Title**: `clamp(3.5rem, 8vw, 8.5rem)` | Leading: `0.95` | Tracking: `-0.04em` | Weight: `700`
- **Section Heading (H2)**: `clamp(2.25rem, 4.5vw, 4.5rem)` | Leading: `1.05` | Tracking: `-0.03em` | Weight: `600`
- **Subheading (H3)**: `clamp(1.5rem, 2.5vw, 2.25rem)` | Leading: `1.2` | Tracking: `-0.02em` | Weight: `500`
- **Body (Lead)**: `clamp(1.125rem, 1.4vw, 1.35rem)` | Leading: `1.6` | Tracking: `-0.01em` | Weight: `400`
- **Body (Regular)**: `1rem (16px)` | Leading: `1.65` | Weight: `400`
- **Overline / Label / Specs**: `0.75rem (12px)` to `0.875rem (14px)` | Tracking: `0.15em` | All-caps | Weight: `600`

---

## 4. Spacing System & Grid
Built on an 8-point baseline rhythm with fluid clamp scales for continuous responsiveness.

### 4.1 Spacing Scale
- `space-1`: `4px`
- `space-2`: `8px`
- `space-3`: `12px`
- `space-4`: `16px`
- `space-6`: `24px`
- `space-8`: `32px`
- `space-12`: `48px`
- `space-16`: `64px`
- `space-24`: `96px`
- `space-32`: `128px`
- `space-section`: `clamp(5rem, 12vw, 12rem)`

### 4.2 Grid Structure
- **Desktop (1280px+)**: 12-column grid, 24px-32px gutters, max-width `1440px` (or `1600px` for immersive full-width showcases).
- **Tablet (768px - 1024px)**: 8-column grid, 20px gutters.
- **Mobile (< 768px)**: 4-column grid, 16px gutters, 20px edge margin.

---

## 5. UI Components & Tokens

### 5.1 Buttons
1. **Primary Button (Metallic Core)**:
   - Solid obsidian background with hairline titanium/gold border (`1px solid var(--color-border-metallic)`).
   - Magnetic hover pull with internal shimmer gradient reflection.
   - Text in pure platinum, uppercase, letter-spacing `0.1em`.
2. **Secondary Ghost Button**:
   - Translucent background (`rgba(255, 255, 255, 0.04)`), crisp border.
   - Hover reveals glowing border and subtle background fill shift.
3. **Pill Play / Trigger Button**:
   - Circular/pill button with pulsing audio equalizer rings.

### 5.2 Cards & Bento Surfaces
- **Glass Surfaces**: `backdrop-filter: blur(16px)`, `background: var(--color-bg-glass)`.
- **Borders**: Continuous hairline border (`1px solid var(--color-border-subtle)`).
- **Shadows**: Multi-layered ambient drop shadow (`0 20px 40px -15px rgba(0, 0, 0, 0.7)`).
- **Interactive Response**: Sub-millimeter tilt and dynamic border-highlight tracking following mouse coordinates.

### 5.3 Navigation
- **Floating Pill Header**: Suspended in top-center, frosted glass with pill geometry (`border-radius: 9999px`).
- **Brand Mark**: Minimalist Aurelis wordmark with custom kerning.
- **Telemetry Indicators**: Real-time active section indicator and audio ambient toggle.

---

## 6. Responsive Architecture Rules
1. Never allow horizontal scroll overflow unless inside deliberate horizontal pinned tracks.
2. Maintain minimum touch target size of `44x44px` on all mobile devices.
3. Replace complex multi-axis mouse parallax with direct touch gestures on viewport `< 768px`.
4. Ensure text contrast meets WCAG AAA standards on primary reading text (`> 7:1`) and AA on secondary elements (`> 4.5:1`).
