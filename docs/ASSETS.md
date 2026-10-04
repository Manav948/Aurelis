# Asset Architecture & Guidelines — Aurelis

## 1. Asset Naming Conventions
All asset files follow strict kebab-case notation prefixed by asset type and section identifier:

`[type]-[section]-[descriptor]-[variant].[ext]`

### 1.1 Examples:
- `img-hero-headphone-floating.webp`
- `img-exploded-layer-01-chassis.webp`
- `img-exploded-layer-02-driver.webp`
- `img-craft-leather-macro-dark.webp`
- `audio-ambient-frequency-sweep.mp3`
- `icon-spec-planar-driver.svg`

---

## 2. Directory Hierarchy
Static assets live in the `/public/assets/` directory:
```
public/assets/
├── audio/
│   ├── ambient-frequency-sweep.mp3
│   └── click-haptic-feedback.mp3
├── icons/
│   ├── icon-acoustic-wave.svg
│   ├── icon-battery-50h.svg
│   ├── icon-bluetooth-ldac.svg
│   └── icon-titanium-shell.svg
└── images/
    ├── craft/
    │   ├── leather-stitching.webp
    │   └── titanium-milling.webp
    ├── exploded/
    │   ├── 01-outer-cup.webp
    │   ├── 02-acoustic-dampener.webp
    │   ├── 03-planar-diaphragm.webp
    │   ├── 04-magnet-array.webp
    │   └── 05-ear-cushion.webp
    ├── gallery/
    │   ├── lookbook-architectural-01.webp
    │   ├── lookbook-studio-02.webp
    │   └── lookbook-lifestyle-03.webp
    └── hero/
        ├── headphone-hero-perspective.webp
        └── headphone-hero-profile.webp
```

---

## 3. Formats & Encoding Standards
- **Photographic Media**:
  - Primary format: **WebP** (Quality: 82-88%, lossless alpha transparency where needed).
  - High-efficiency alternative: **AVIF** for hero imagery where browser support allows.
  - Fallback: **JPEG/PNG** only if transparency or legacy compatibility dictates.
- **Vectors & Line Art**:
  - Clean, optimized **SVG** (svgo processed, no embedded raster data, no unnecessary meta tags).
- **Audio Files**:
  - Format: **MP3** (192 kbps CBR) or **OGG / AAC** for web audio playback with minimal latency.
- **Video / Motion Loops**:
  - MP4 (H.264, CRF 22, no audio track, muted, playsinline) + WebM fallback.

---

## 4. Responsive Image Architecture
1. **Art Direction & Resolution Switching**:
   - Utilize `<picture>` tags with media queries for layout-specific crops.
   - For fluid images, provide `srcset` targeting 1x (`1440px`) and 2x (`2880px`) retina displays:
     ```html
     <img
       src="/assets/images/hero/headphone-hero-perspective.webp"
       srcset="
         /assets/images/hero/headphone-hero-perspective.webp 1x,
         /assets/images/hero/headphone-hero-perspective@2x.webp 2x
       "
       width="1440"
       height="900"
       alt="Aurelis Flagship Planar Magnetic Headphone"
       loading="eager"
       decoding="async"
     />
     ```
2. **Explicit Dimensions**:
   - Always supply `width` and `height` attributes or CSS `aspect-ratio` to prevent Cumulative Layout Shift (CLS).

---

## 5. Asset Inventory & Mapping Matrix
| Asset ID | Target Section | Aspect Ratio | Dimensions (1x) | Intended Visual Content |
| :--- | :--- | :--- | :--- | :--- |
| `hero-main` | Hero Prologue | 16:10 | 1440x900 | High-contrast 3/4 perspective of Aurelis headphone suspended in dark space |
| `exploded-chassis` | Exploded View | 1:1 | 800x800 | CNC-machined titanium outer ear cup with laser-engraved serial |
| `exploded-driver` | Exploded View | 1:1 | 800x800 | 50mm gold-etched planar magnetic diaphragm and neodymium stator |
| `exploded-cushion` | Exploded View | 1:1 | 800x800 | Memory foam acoustic ear cushion with magnetic snap ring |
| `craft-leather` | Materiality | 4:5 | 800x1000 | Ultra-macro detail of Tuscan calfskin headband stitching |
| `craft-metal` | Materiality | 4:5 | 800x1000 | Precision lathe micro-groove texture on volume crown |
| `lookbook-01` | Gallery | 16:9 | 1600x900 | Minimalist architectural studio shot with natural shadows |
| `lookbook-02` | Gallery | 9:16 | 900x1600 | Portrait mode creative professional wearing Aurelis |
| `sound-ambient` | Audio Section | N/A | N/A | High-resolution acoustic soundscape demonstration snippet |
