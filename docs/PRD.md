# Project Requirements Document (PRD) — Aurelis

> **Document Status**: Grounded in visual analysis of `/reference/design/img1.png` - `img5.png`.  
> **Rule of Truth**: Content and layouts directly visible in the reference are marked **[CONFIRMED VISUAL]**. Reference template text/names are marked **[REFERENCE TEMPLATE CONTENT]**. Target Aurelis specifications, unprovided copy, and business logic are marked **[AURELIS TARGET / TBD]**.

---

## 1. Project Goal & Brand Definition
- **Brand Name**: **Aurelis** [CONFIRMED project brand; replaces the reference template name "MAXIMIZE"].
- **Project Purpose**: Build an editorial, high-performance showcase website for luxury acoustic audio equipment, faithfully translating the layout structure, visual rhythm, and component composition of the primary Stitch reference into an original frontend experience.

---

## 2. Complete Page Structure & Section Order [CONFIRMED VISUAL]
The visual reference defines an exact 8-section vertical flow flanked by top utility navigation and a footer:

```
[0. Top Announcement Utility Bar & Main Navbar]
  │
  ├─ 1. Hero Section ("IMMERSIVE SOUND FOR THE DIGITAL GENERATION")
  ├─ 2. Feature & Architecture Breakdown ("POWERFUL SOUND ANYTIME ANYWHERE")
  ├─ 3. Symmetrical Ergonomics & Hotspot Inspection ("DESIGNED FOR COMFORT")
  ├─ 4. Product Suite Carousel / Grid ("ELITE TECH COLLECTION")
  ├─ 5. Editorial Testimonial / Quote ("The battery lasts a really long time...")
  ├─ 6. Brand Mission Statement & Partner Trust Bar ("About Us")
  ├─ 7. Editorial Stories / Journal ("BLOG")
  └─ 8. Split Brand Footer & Newsletter
```

---

## 3. Section Specifications & Content Separation

### Section 0: Top Utility Bar & Main Navbar
- **Visual Structure [CONFIRMED]**:
  - Slim 32px top announcement bar: left-aligned text, right-aligned currency/language selector (`$ USD / EN v`).
  - 72px floating header:
    - Left: 4 navigation links (`Home`, `Shop`, `Collections`, `About Us`).
    - Center: Brand name.
    - Right: 3 utility icons (Search, Account, Cart).
- **Reference Template Content**:
  - Top bar text: *"Weekend Special - 40% Off on All Natural Skincare Products!"* (Dummy e-commerce text).
  - Center logo: `MAXIMIZE`.
- **Aurelis Target Content**:
  - Top bar text: `[TBD]` (e.g., *"Complimentary Worldwide Express Delivery on All Flagship Orders"*).
  - Center logo: `AURELIS`.
  - Navigation links: `Home`, `Shop`, `Collections`, `About Us` [CONFIRMED].
- **Decisions Still Missing [TBD]**:
  - Currency selector functionality (display-only vs. interactive dropdown).
  - Cart button behavior (slide-over drawer vs. simple counter badge).

---

### Section 1: Hero Section
- **Visual Structure [CONFIRMED]**:
  - Dark charcoal/obsidian background fading via bottom vertical gradient into the light canvas below.
  - Left column:
    - 3-line stacked uppercase headline:
      - Line 1: `IMMERSIVE SOUND` (Bold white)
      - Line 2: `FOR THE DIGITAL` ("FOR THE" in bold white; "DIGITAL" in tinted/outline gray)
      - Line 3: `GENERATION` (Tinted/outline gray)
    - Subhead paragraph.
    - Primary CTA: Vibrant lime/citron pill button containing white circular 45° arrow badge (↗) + text `"Discover More >"`.
  - Right column:
    - Large floating 3/4 perspective headphone render with concentric metallic circular ear-cup finish.
    - 2 floating circular thumbnail badges at bottom right showing alternate product finishes/angles.
- **Reference Template Content**:
  - Headline: `"IMMERSIVE SOUND FOR THE DIGITAL GENERATION"`.
  - Subhead: *"Engineered with advanced features to elevate your listening experience every day."*
- **Aurelis Target Content**:
  - Headline & Subhead: Can preserve the reference headline or customize with final Aurelis acoustic copy `[TBD]`.
  - Brand product: Aurelis Flagship Headphone `[TBD asset cutouts]`.
  - Colorway thumbnails: 2 distinct finishes (e.g. Obsidian Black / Brushed Titanium) `[TBD]`.
- **Decisions Still Missing [TBD]**:
  - Final marketing tagline confirmation.
  - Transparent cutout asset for the hero headphone.

---

### Section 2: Feature & Specification Showcase
- **Visual Structure [CONFIRMED]**:
  - Light off-white canvas.
  - Left column:
    - Section title: `POWERFUL SOUND ANYTIME ANYWHERE`.
    - Lead description paragraph.
    - 5-item vertical feature list separated by hairline horizontal dividers:
      - First item expanded with description text.
      - Subsequent items collapsed.
    - Lime pill CTA button: `"Discover More >"`.
  - Right column:
    - Elevated white card with open metallic wireless earbud charging case.
    - Floating pill badge on the case: miniature image thumbnail + product label + price + 3 color dots.
- **Reference Template Content**:
  - Feature 1: `Long Battery Life` (*"Enjoy uninterrupted music for up to 12-20+ hours depending on the model, with fast charging support."*)
  - Feature 2: `Signature Maximize Sound Quality`
  - Feature 3: `Durable & Rugged Build`
  - Feature 4: `Portable & Lightweight Design`
  - Feature 5: `Built-in Voice Assistant Support`
  - Floating badge: Label `"Bang & Olufsen"`, Price `"$25.00"`, color dots (Black, White, Cream).
- **Aurelis Target Content**:
  - Feature list: 5 Aurelis acoustic specifications `[TBD]` (e.g., Extended Battery Life, Custom Planar Magnetic Drivers, Titanium Billets, Ergonomic Weight Distribution, Beamforming Telephony).
  - Floating badge: Aurelis companion product name `[TBD]`, luxury price point `[TBD]`, colorway swatches `[TBD]`.
- **Decisions Still Missing [TBD]**:
  - Final technical audio parameters and battery duration for Aurelis.
  - Final companion product identity and price.

---

### Section 3: Symmetrical Ergonomics & Hotspot Inspection
- **Visual Structure [CONFIRMED]**:
  - Centered header: `DESIGNED FOR COMFORT`.
  - Centered subtitle.
  - Centered symmetrical frontal elevation of the headphone.
  - 6 white circular hotspot dot markers placed on key hardware locations:
    - Headband left and right arches.
    - Left and right gimbal pivot hinges.
    - Left and right lower acoustic ear cups.
  - 3 selector thumbnail cards centered below the headphone.
- **Reference Template Content**:
  - Title: `"DESIGNED FOR COMFORT"`.
  - Subtitle: *"Every component is carefully crafted to deliver superior comfort, durability, and exceptional sound quality"*.
  - Thumbnails: Headphone, Earbud case, Wall charging plug.
- **Aurelis Target Content**:
  - Hotspot callouts: 6 component engineering descriptions `[TBD]` (e.g., Adaptive Tuscan Leather Suspension, Titanium Swivel Gimbal, Acoustic Damping Chamber, Magnetic Memory Foam Cushions, Precision Volume Crown).
  - Selector thumbnails: 3 accessory views for Aurelis `[TBD]`.
- **Decisions Still Missing [TBD]**:
  - Exact technical callout text for all 6 hotspot markers.
  - Action triggered by the 3 bottom thumbnails (stage view change vs. modal trigger).

---

### Section 4: Product Suite / Collection Carousel
- **Visual Structure [CONFIRMED]**:
  - Section header: `ELITE TECH COLLECTION` with subtitle on left, lime pill button `"Shop All"` on right.
  - Horizontal deck of elevated white cards:
    - Centered product image.
    - Bottom row: Product name on left, price on right, color selector dots below.
    - Active/hovered card shows circular lime arrow button.
  - Bottom scrollbar track: Horizontal line with dark slider indicator.
- **Reference Template Content**:
  - Card 1: `NovaPods Air` | `$15.00` | Yellow, Black, Gray dots.
  - Card 2: `NovaSound Pro` | `$25.00` | Orange, Black, Beige dots.
  - Card 3: `AuraPods Lite` | `$20.00` | Light green, Black dots.
- **Aurelis Target Content**:
  - Product suite: 3-4 Aurelis audio products `[TBD Names & Luxury Prices]` (e.g., Aurelis Studio Over-Ear, Aurelis Wireless In-Ear, Aurelis Portable Case, Aurelis DAC Hub).
  - Colorway finishes: `[TBD]` (e.g., Obsidian Black, Brushed Titanium, Champagne Gold).
- **Decisions Still Missing [TBD]**:
  - Final Aurelis product names, specs, and price structure.

---

### Section 5: Editorial Testimonial & Portrait
- **Visual Structure [CONFIRMED]**:
  - Left column:
    - Large quotation featuring dual-tone typography (bold dark words contrasting with light gray text).
    - Circular navigation arrows: Left button (gray) and Right button (lime).
  - Right column:
    - Elevated photographic portrait card: Blond model in profile wearing metallic finish headphone.
    - Floating overlay card at bottom: Reviewer Name, Title/Role, 5 gold rating stars.
- **Reference Template Content**:
  - Quotation: *"The battery lasts a really long time. I use it almost all day without needing to recharge. For this price, the features are top-notch"*
  - Reviewer name: `Diana Amelia`. Title: `Headphone / Web Digital`.
- **Aurelis Target Content**:
  - Quotation: Audiophile or sound engineer editorial review `[TBD]`.
  - Reviewer identity: Professional reviewer or sound engineer `[TBD]`.
- **Decisions Still Missing [TBD]**:
  - Final editorial quote copy and reviewer persona.

---

### Section 6: Brand Mission & Partner Trust Bar
- **Visual Structure [CONFIRMED]**:
  - Green dot badge: `• About Us`.
  - Centered large statement with split-weight typographic emphasis.
  - Centered lime pill button: `"Learn More"`.
  - Subtitle: *"Partnering with top brands to bring you trusted quality."*
  - 6 white rounded pill cards displaying vector partner logos.
- **Reference Template Content**:
  - Statement: *"Maximize delivers modern audio technology with premium design. We create comfortable, high-quality devices designed to deliver the best sound experience for every activity."* (with `"comfort"` in bold and `"able,"` in gray).
  - Partner names: `NovaSphere`, `CodeCraft`, `Ascendia`, `ChromaWave`, `Spectra`, `Innovi :`.
- **Aurelis Target Content**:
  - Brand manifesto: Aurelis acoustic craftsmanship statement `[TBD]`.
  - Partner logos: 6 audio technology / engineering partner identities `[TBD]`.
- **Decisions Still Missing [TBD]**:
  - Final manifesto text for Aurelis.
  - Decision whether to use fictional audio lab names or industry technology standards.

---

### Section 7: Editorial Stories / Journal ("BLOG")
- **Visual Structure [CONFIRMED]**:
  - Header: `BLOG`. Subtitle on left. Lime pill button `"Visit Blog"` on right.
  - 3 vertical cards (`4:5` aspect ratio):
    - Photograph with rounded corners.
    - Article title in bold sans.
    - Author and publication date in muted text.
    - `"READ MORE"` text link.
- **Reference Template Content**:
  - Card 1: Photo on rock | `"Eco-Friendly Luxury: What Is It"` | *"Lucas Verhoest posted on April 10, 2024"*
  - Card 2: Photo of hands adjusting headset | `"Serenity: how it all started"` | *"Lucas Verhoest posted on April 15, 2024"*
  - Card 3: Photo in desk studio | `"The process behind our new collection"` | *"Lucas Verhoest posted on April 18, 2024"*
- **Aurelis Target Content**:
  - 3 editorial articles on Aurelis design, acoustics, and engineering `[TBD Titles, Dates, & Authors]`.
- **Decisions Still Missing [TBD]**:
  - Final article titles and author attributions.

---

### Section 8: Master Split Footer
- **Visual Structure [CONFIRMED]**:
  - Soft cool-gray background.
  - Left column:
    - Brand logo icon + brandmark.
    - Newsletter headline: *"Subscribe to our newsletter to stay in touch with the latest."*
    - Pill input (`"Your Email..."`) with integrated lime `"Subscribe"` pill button.
    - 4 circular social media icon buttons (Facebook, Twitter/X, LinkedIn, Instagram).
  - Right column:
    - 2 sub-columns of navigation links.
  - Bottom bar:
    - Copyright notice on left.
    - Payment provider badges on right (Visa, Mastercard, Amex, PayPal, Discover).
- **Reference Template Content**:
  - Brand: `MAXIMIZE`.
  - Links: `Navigations` (Home, Features, Blog, Contact), `Resources` (Help center, Documentation, FAQ, Shipping).
  - Copyright: *"@ 2024 Maximize. All rights reserved."*
- **Aurelis Target Content**:
  - Brand: `AURELIS`.
  - Copyright: *"© 2024 Aurelis. All rights reserved."*
  - Links: Final navigation and resource link list `[TBD]`.
