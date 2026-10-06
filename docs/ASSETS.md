# Asset Requirements & Guidelines — Aurelis

> **Document Status**: Calibrated against actual workspace contents.  
> **Production Reality**: No production-ready isolated media assets currently exist in `/public/assets/`. The files in `/reference/design/` are full-page layout reference screenshots, not sliced production assets.  
> This document serves as the **Master Asset Requirement List**, defining required assets, their visual reference source, and their procurement status.

---

## 1. Asset Naming Conventions
All production assets to be placed in `/public/assets/` must follow neutral, lowercase kebab-case notation:

`[category]-[section]-[descriptor].[ext]`

- `img-` : Photographic, 3D render, or raster imagery (`.webp`, `.avif`, `.png`)
- `icon-`: Vector UI glyphs and interface controls (`.svg`)
- `logo-`: Brand and partner identity marks (`.svg`)
- `audio-`: Audio samples or tactile feedback (`.mp3`)

---

## 2. Master Production Asset Requirement List

All production media assets are currently **[UNPROVIDED / TBD]** and must be generated, extracted, or sourced before final UI assembly.

| Asset Identifier | Section | Required Content from Reference | Reference Source | Status |
| :--- | :--- | :--- | :--- | :--- |
| `img-hero-headphone-perspective` | Hero | High-resolution 3/4 perspective render of dark headphone with concentric metallic ear-cup on transparent/isolated background | `/reference/design/img2.png` | **[TBD / Needed]** |
| `img-hero-thumb-01` | Hero | Circular thumbnail of primary colorway angle | `/reference/design/img2.png` | **[TBD / Needed]** |
| `img-hero-thumb-02` | Hero | Circular thumbnail of secondary colorway angle | `/reference/design/img2.png` | **[TBD / Needed]** |
| `img-features-charging-case` | Features | Open metallic wireless earbud charging case on transparent/white background | `/reference/design/img2.png` | **[TBD / Needed]** |
| `img-comfort-headphone-frontal` | Comfort | Symmetrical frontal elevation of headphone for interactive hotspot mapping | `/reference/design/img3.png` | **[TBD / Needed]** |
| `img-comfort-thumb-01` | Comfort | Miniature icon/thumbnail representing full headphone view | `/reference/design/img3.png` | **[TBD / Needed]** |
| `img-comfort-thumb-02` | Comfort | Miniature icon/thumbnail representing travel case view | `/reference/design/img3.png` | **[TBD / Needed]** |
| `img-comfort-thumb-03` | Comfort | Miniature icon/thumbnail representing cable/adapter view | `/reference/design/img3.png` | **[TBD / Needed]** |
| `img-collection-product-01` | Collection | Isolated product image for collection item 1 (wireless in-ear buds with case) | `/reference/design/img3.png` | **[TBD / Needed]** |
| `img-collection-product-02` | Collection | Isolated product image for collection item 2 (over-ear studio headphones) | `/reference/design/img3.png` | **[TBD / Needed]** |
| `img-collection-product-03` | Collection | Isolated product image for collection item 3 (compact in-ear case) | `/reference/design/img3.png` | **[TBD / Needed]** |
| `img-editorial-portrait` | Testimonial | Editorial portrait photograph of individual wearing metallic finish headphone | `/reference/design/img4.png` | **[TBD / Needed]** |
| `img-blog-01` | Blog | Vertical portrait photo (`4:5`) of headphones in dark natural/volcanic setting | `/reference/design/img5.png` | **[TBD / Needed]** |
| `img-blog-02` | Blog | Vertical portrait photo (`4:5`) of artisan/user adjusting acoustic headset | `/reference/design/img5.png` | **[TBD / Needed]** |
| `img-blog-03` | Blog | Vertical portrait photo (`4:5`) of modern architectural studio workspace with audio stand | `/reference/design/img5.png` | **[TBD / Needed]** |

---

## 3. Partner & Brand Vector Logos

The reference displays 6 partner logo badges. These are template placeholders in the reference design and will be substituted with Aurelis audio technology partner marks or stylized vector logos.

| Asset Identifier | Reference Template Content | Target Aurelis Usage | Status |
| :--- | :--- | :--- | :--- |
| `logo-partner-01` | `NovaSphere` (Serif/geometric) | Audio technology partner mark | **[TBD / Placeholder]** |
| `logo-partner-02` | `CodeCraft` (Monospace/sans) | Engineering partner mark | **[TBD / Placeholder]** |
| `logo-partner-03` | `Ascendia` (Diamond icon) | Acoustic laboratory mark | **[TBD / Placeholder]** |
| `logo-partner-04` | `ChromaWave` (Radial sound mark) | Codec/wireless partner mark | **[TBD / Placeholder]** |
| `logo-partner-05` | `Spectra` (Star/plus icon) | Hi-Res certification mark | **[TBD / Placeholder]** |
| `logo-partner-06` | `Innovi` (Colon matrix mark) | Material supplier mark | **[TBD / Placeholder]** |

---

## 4. UI Vector Glyphs & Icons

UI glyphs can be rendered using inline SVG or standard lightweight primitives.

| Asset Identifier | Section | Purpose / Description | Status |
| :--- | :--- | :--- | :--- |
| `icon-search` | Header | Minimal search magnifying glass | Standard SVG |
| `icon-user` | Header | User profile silhouette | Standard SVG |
| `icon-cart` | Header | Minimal shopping bag / tote glyph | Standard SVG |
| `icon-arrow-diagonal` | Buttons | 45° arrow in circle (↗) for primary pill buttons | Core SVG |
| `icon-arrow-left` | Testimonial | Circular button left chevron (`←`) | Core SVG |
| `icon-arrow-right` | Testimonial / Cards | Circular button right chevron (`→`) | Core SVG |
| `icon-chevron-down` | Features | Accordion expand/collapse indicator | Core SVG |
| `icon-star-gold` | Testimonial | 5-point star rating vector in gold | Standard SVG |
| `icon-social-*` | Footer | Circle glyphs for social media platforms | Standard SVG |
| `icon-payment-*` | Footer | Vector badges for payment providers | Standard SVG |

---

## 5. Technical Asset Delivery Guidelines
- **Product Transparency**: All hardware imagery must be provided as isolated cutouts with transparent backgrounds (lossless WebP or PNG) to composite cleanly over CSS gradient canvases.
- **Strict Aspect Ratios**:
  - Blog cards: Fixed `4:5` vertical ratio.
  - Collection cards: Fixed `1:1` square container.
  - Testimonial portrait: Fixed `1:1` square or `4:5` vertical ratio.
- **Layout Placeholders**: During implementation, until production photography is sourced, lightweight styled container placeholders matching exact aspect ratios must be used to prevent Cumulative Layout Shift (CLS).
