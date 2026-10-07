# Aurelis

## What This Is
Aurelis is a luxury frontend showcase website spotlighting a flagship acoustic headphone. Built with high-performance scroll-driven motion design, dark-to-light canvas transitions, and precision industrial engineering presentation, the experience targets audiophiles, industrial designers, and modern luxury consumers.

## Core Value
Deliver an editorial, 60+ FPS digital flagship experience that faithfully translates the visual hierarchy and layout of the primary Stitch reference into an original, highly crafted frontend product.

## Requirements

### Validated
(None yet — build to validate)

### Active
- [ ] Global utility announcement bar and sticky glassmorphic navigation (`REQ-NAV`)
- [ ] Cinematic dark hero section with stacked display typography and floating 3/4 headphone (`REQ-HERO`)
- [ ] Specification showcase with interactive 5-item accordion and elevated case card (`REQ-FEAT`)
- [ ] Symmetrical comfort anatomy with 6 pulsing hotspot markers and accessory switchers (`REQ-COMF`)
- [ ] Horizontal product collection carousel with synchronized progress slider (`REQ-COLL`)
- [ ] Editorial testimonial with dual-tone quote typography and reviewer rating badge (`REQ-TEST`)
- [ ] Brand mission statement with split-weight emphasis and 6-card partner logo grid (`REQ-ABOU`)
- [ ] 3-column editorial journal / blog card grid (`REQ-BLOG`)
- [ ] Master luxury split footer with newsletter input and payment provider trust badges (`REQ-FOOT`)
- [ ] Flawless responsiveness across mobile, tablet, desktop, and ultrawide viewports
- [ ] Full `prefers-reduced-motion` compliance across all animated components

### Out of Scope
- Backend servers, APIs, or databases — pure client-side static application
- Authentication, user accounts, or active checkout gateways — frontend showcase only
- Heavy 3D WebGL game engines — 2.5D layered composition with GSAP ScrollTrigger preserves performance

## Context
- Grounded in visual analysis of `/reference/design/img1.png` - `img5.png`.
- Tech Stack: React 18, Vite 6, TypeScript 5.7 strict mode, Tailwind CSS 3, GSAP 3.12 + ScrollTrigger.
- Architectural Blueprints: Fully detailed in `/docs/` (`PRD.md`, `DESIGN.md`, `MOTION.md`, `TECH.md`, `ASSETS.md`, `TASKS.md`, `QA.md`).
- Codebase intelligence documented in `.planning/codebase/`.

## Constraints
- **Zero Backend**: Static client-side bundle only (`AGENTS.md`).
- **Memory Safety**: Every GSAP timeline/ScrollTrigger must be created within `gsap.context()` via `useGSAPContext` and reverted on unmount (`AGENTS.md`).
- **Asset Fallbacks**: Unprovided production cutouts use styled aspect-ratio container placeholders to prevent CLS and avoid project stalls (`docs/ASSETS.md`).
- **Git Hygiene**: No automated `git init`, remote changes, or unverified commits (`AGENTS.md`).

## Key Decisions
- **Brand Identity**: Named `Aurelis` (replacing the reference template name `MAXIMIZE`).
- **Color Architecture**: Dual-canvas system (Dark Hero `#0D0E11` transitioning to Light Canvas `#F6F7F9` with Electric Lime `#CCFF00` accents).
- **Motion Priorities**: Priority A (Core experience), Priority B (Enhancement), Priority C (Optional polish).
- **Roadmap Structure**: 14 sequential implementation phases mapped in `docs/TASKS.md`.
