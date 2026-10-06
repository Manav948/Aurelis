# Visual Design System & Aesthetics — Aurelis

> **Document Status**: Grounded in visual analysis of `/reference/design/img1.png` - `img5.png`.  
> **Visual Rule**: Elements directly observed in the reference are marked **[CONFIRMED VISUAL]**. Font choices, sampled hex codes, and styling abstractions are marked **[INFERRED / APPROXIMATE]**.

---

## 1. Visual Direction & Spatial Rhythm [CONFIRMED VISUAL]
1. **Dual-Canvas Light & Dark Continuity**:
   - The Hero is framed on a deep charcoal/black void, terminating in a soft vertical gradient.
   - All subsequent showcase sections (Features, Comfort, Collection, Testimonial, About, Blog) reside on a pristine, architectural light off-white canvas.
2. **Signature High-Contrast Lime Accent**:
   - A bright, electric lime / citron color is used with strict discipline for primary action buttons, active navigation indicators, and rating/arrow accents.
3. **Sculptural Product Centering**:
   - Audio devices are presented in isolation with soft contact shadows and clean negative space.
4. **Typographic Dual-Tone Contrast**:
   - Editorial headlines and narrative paragraphs use contrasting font weights (bold dark words juxtaposed with lighter gray phrasing).

---

## 2. Color Palette & Tokens

> *Note: Color hex values below are **[APPROXIMATE / SAMPLED]** from the reference PNGs, not from a provided brand guideline.*

### 2.1 The Master Palette
```css
:root {
  /* [CONFIRMED VISUAL] Dark Hero Canvas */
  --color-void-hero: #0D0E11;         /* Approximate dark charcoal/black hero background */
  --color-void-gradient-end: #1A1C22; /* Lower gradient transition tone */

  /* [CONFIRMED VISUAL] Light Body Canvas */
  --color-canvas-light: #F6F7F9;      /* Approximate clean off-white background */
  --color-surface-white: #FFFFFF;     /* Elevated pure white card surfaces */
  --color-surface-footer: #ECEEF2;    /* Approximate soft cool gray footer background */

  /* [CONFIRMED VISUAL] Primary Electric Accent */
  --color-accent-lime: #CCFF00;       /* Approximate vibrant electric lime/citron */
  --color-accent-lime-hover: #B8E600; /* Inferred hover state */
  --color-accent-lime-glow: rgba(204, 255, 0, 0.35);

  /* [CONFIRMED VISUAL] Typographic Tones */
  --color-text-dark-primary: #111827;   /* Deep near-black for headings on light canvas */
  --color-text-dark-secondary: #6B7280; /* Neutral gray for body copy */
  --color-text-dark-muted: #9CA3AF;     /* Light slate for dual-tone contrast words & dates */
  --color-text-light-primary: #FFFFFF;  /* Pure white for hero headline */
  --color-text-light-muted: #8E929B;    /* Tinted gray for hero subhead & outline text */

  /* [CONFIRMED VISUAL] Hardware & Accent Tones */
  --color-metal-silver: #D1D5DB;      /* Brushed aluminum/titanium highlights */
  --color-metal-copper: #E5C396;      /* Copper/champagne headphone finish */
  --color-star-gold: #F59E0B;         /* Star rating gold */

  /* [INFERRED] Borders & Shadows */
  --color-border-card: rgba(0, 0, 0, 0.07);
  --color-border-subtle: rgba(0, 0, 0, 0.05);
  --shadow-card: 0 10px 30px -4px rgba(0, 0, 0, 0.06);
  --shadow-elevated: 0 20px 40px -8px rgba(0, 0, 0, 0.10);
}
```

---

## 3. Typography Hierarchy

### 3.1 Font Families [INFERRED / RECOMMENDED]
The reference uses clean, high-impact sans-serif typefaces. Because specific commercial font files are not provided, the following open-source Google/system fonts are **recommended**:
- **Display Sans (Headlines)**: `Cabinet Grotesk` or `Syne` (fallbacks: `system-ui, -apple-system, sans-serif`) — Extended width, geometric curves, bold weights (`700`, `800`).
- **Body & Interface Sans**: `Inter` or `Geist` — Neutral, hyper-legible grotesque for descriptions and metadata (`400`, `500`).
- **Numbers & Prices**: `Inter` (tabular figures) or `JetBrains Mono` for specification telemetry (`500`, `600`).

### 3.2 Typographic Patterns [CONFIRMED FROM REFERENCE]
1. **Hero Stacked All-Caps Title**:
   - Stacked 3 lines, massive scale, tight leading (`0.95`).
   - Line 1 bold white, Line 2 split white/outline-gray, Line 3 outline-gray.
2. **Section Headings (H2)**:
   - All-caps, heavy geometric sans, clean letter-spacing:
     - `POWERFUL SOUND ANYTIME ANYWHERE`
     - `DESIGNED FOR COMFORT`
     - `ELITE TECH COLLECTION`
     - `BLOG`
3. **Dual-Tone Weight Contrast**:
   - In Section 5 (Quote): Emphasized words in bold near-black; secondary words in medium gray.
   - In Section 6 (About Us): Primary word root (`"comfort"`) in bold black; suffix (`"able,"`) in light gray.

---

## 4. Spacing System & Grid

### 4.1 Spacing Rhythm [INFERRED]
- Follows standard 8pt increments (`8px`, `16px`, `24px`, `32px`, `48px`, `64px`, `96px`).
- Section vertical margins: Generous whitespace (`80px - 140px`) between content blocks to maintain gallery elegance.

### 4.2 Grid Structure [CONFIRMED VISUAL]
- **Desktop (1280px+)**:
  - Max container width: `1320px` centered.
  - Two-column 50/50 splits (Hero, Features, Testimonial).
  - Centered single-column showcases (Comfort Hotspot, About Us).
  - 3-column grid (Blog Journal).
  - 4-item horizontal track (Collection).
- **Mobile (< 768px)**:
  - Collapses two-column splits into clean single-column vertical stacks.
  - Side padding: `20px` to `24px`.

---

## 5. UI Elements & Component Grammar [CONFIRMED FROM REFERENCE]

### 5.1 Buttons
1. **Signature Lime Pill CTA Button**:
   - Shape: Fully rounded pill (`border-radius: 9999px`).
   - Background: Vibrant lime/citron (`var(--color-accent-lime)`).
   - Interior Badge: Small white circle on the left containing a dark 45° diagonal arrow icon (↗).
   - Text: Dark bold sans (`"Discover More >"` or `"Shop All"` or `"Learn More"`).
2. **Circular Navigation Buttons**:
   - Circular shape (`44px` diameter).
   - State 1: Muted light gray circle with left arrow icon.
   - State 2: Lime circle with right arrow icon.

### 5.2 Cards & Containers
1. **Elevated White Cards**:
   - Pure white (`#FFFFFF`) with generous border radius (`24px - 28px`).
   - Clean interior padding (`24px - 36px`).
   - Used for: Feature showcase product card, Collection items, Blog article cards, Partner logo badges.
2. **Product Collection Cards**:
   - White card containing centered isolated product render.
   - Bottom row: Product name on left, price on right (`$15.00 - $25.00`), color swatch dots below.
   - Active/Hover state reveals circular lime arrow button.
3. **Interactive Hotspot Pins**:
   - White circular dot markers (`10px - 12px`) positioned directly over hardware features on the headphone.
4. **Partner Logo Cards**:
   - Compact horizontal white rounded pills displaying clean vector logos with subtle drop shadow.

### 5.3 Headers & Footer
- **Utility Bar**: Thin dark bar at top with promotion text and currency selector.
- **Main Header**: Left nav links, center brandmark, right utility icons (Search, Account, Cart).
- **Split Footer**: Soft cool-gray background, left newsletter form with pill input and lime submit button, right categorized link columns, bottom payment badges.
