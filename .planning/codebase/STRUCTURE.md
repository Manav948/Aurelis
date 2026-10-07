# Directory Structure & Organization — Aurelis

**Analysis Date:** 2026-10-06  
**Repository:** Aurelis

---

## 1. Directory Tree Overview

```
Aurelis/
├── .agent/                      # AI agent skills & GSD workflow definitions
├── .git/                        # Git version control metadata
├── .gitignore                   # Ignored files (node_modules, dist, logs)
├── .planning/                   # GSD planning directory
│   └── codebase/                # Codebase intelligence documentation
│       ├── STACK.md
│       ├── INTEGRATIONS.md
│       ├── ARCHITECTURE.md
│       ├── STRUCTURE.md
│       ├── CONVENTIONS.md
│       ├── TESTING.md
│       └── CONCERNS.md
├── AGENTS.md                    # Permanent rules of engagement for AI coding agents
├── dist/                        # Production build output
├── docs/                        # Project architectural blueprints
│   ├── PRD.md                   # Product Requirements Document
│   ├── DESIGN.md                # Visual Design System & Tokens
│   ├── MOTION.md                # Motion Design & Interaction Architecture
│   ├── TECH.md                  # Technical Architecture & Standards
│   ├── ASSETS.md                # Asset Requirements & Mapping List
│   ├── TASKS.md                 # 14-Phase Implementation Roadmap
│   └── QA.md                    # Quality Assurance & Verification Protocols
├── index.html                   # HTML5 root document
├── node_modules/                # Installed npm packages
├── package.json                 # Project manifest & npm scripts
├── package-lock.json            # Deterministic dependency lockfile
├── postcss.config.js            # PostCSS configuration (Tailwind & Autoprefixer)
├── public/                      # Static assets served at root
│   ├── assets/
│   │   ├── audio/               # Audio clips & sound effects
│   │   ├── icons/               # Vector SVG icons
│   │   └── images/              # Product photography & cutouts
│   └── favicon.svg              # Brand vector favicon
├── refrence/                    # Visual reference screenshots from Stitch
│   ├── design/                  # Full-page screenshots (img1.png - img5.png)
│   └── inspiration/             # Reference guide screenshots
├── src/                         # Application source code
│   ├── components/              # Atomic UI components
│   │   └── index.ts
│   ├── data/                    # Static content constants & interfaces
│   │   └── index.ts
│   ├── hooks/                   # Custom React hooks
│   │   ├── index.ts
│   │   ├── useGSAPContext.ts    # GSAP context lifecycle cleanup hook
│   │   └── useReducedMotion.ts  # Media query hook for accessibility
│   ├── lib/                     # Singletons & helper functions
│   │   ├── gsap.ts              # GSAP & ScrollTrigger initialization
│   │   └── utils.ts             # cn() class utility
│   ├── sections/                # Narrative showcase sections
│   │   └── index.ts
│   ├── styles/                  # Styling & design tokens
│   │   ├── globals.css          # Tailwind base & CSS resets
│   │   └── tokens.css           # Color & spacing CSS variables
│   ├── App.tsx                  # Root application component
│   ├── main.tsx                 # React DOM mount entrypoint
│   └── vite-env.d.ts            # Vite client type definitions
├── tailwind.config.js           # Tailwind theme configuration
├── tsconfig.app.json            # Application TypeScript configuration
├── tsconfig.json                # Root TypeScript reference manifest
├── tsconfig.node.json           # Node/Vite build TypeScript configuration
└── vite.config.ts               # Vite bundler configuration
```

---

## 2. Key File Locations & Responsibilities

| Path | Primary Responsibility |
| :--- | :--- |
| `AGENTS.md` | Core 17 rules of engagement and technical invariants |
| `docs/PRD.md` | Authoritative section structure, features, and content classification |
| `docs/DESIGN.md` | Color tokens, typography scales, buttons, and cards grammar |
| `docs/MOTION.md` | Priority-tiered animation choreography (Priority A, B, C) |
| `docs/TASKS.md` | 14-phase atomic execution plan |
| `src/lib/gsap.ts` | Single point of GSAP and ScrollTrigger registration |
| `src/hooks/useGSAPContext.ts` | Memory-safe GSAP context lifecycle wrapper |
| `src/styles/tokens.css` | Master CSS custom properties (void black, light off-white, electric lime) |

---

## 3. Naming Conventions

### 3.1 Files & Directories
- **React Components**: PascalCase (e.g. `AnnouncementBar.tsx`, `HeroProduct.tsx`).
- **Hooks**: camelCase prefixed with `use` (e.g. `useGSAPContext.ts`, `useReducedMotion.ts`).
- **Utilities & Singletons**: camelCase (e.g. `gsap.ts`, `utils.ts`).
- **Styles & Data**: lowercase (e.g. `globals.css`, `tokens.css`).
- **Assets**: kebab-case prefixed with category (e.g. `img-hero-headphone-perspective.webp`).

### 3.2 Code Symbols
- **Interfaces & Types**: PascalCase prefixed semantically (e.g. `SiteConfig`, `ProductCardProps`).
- **Constants**: UPPER_SNAKE_CASE (e.g. `SITE_CONFIG`).
- **Functions & Hooks**: camelCase (e.g. `cn()`, `useGSAPContext()`).
