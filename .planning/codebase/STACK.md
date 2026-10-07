# Technology Stack — Aurelis

**Analysis Date:** 2026-10-06  
**Repository:** Aurelis

---

## 1. Core Runtime & Languages
- **Runtime Environment**: Node.js `v22.17.0` / npm `11.5.2`
- **Primary Language**: TypeScript `5.7.3` (`tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json`)
  - Target: `ES2020` (app) / `ES2022` (node)
  - Strict Mode: Enabled (`strict: true`, `noImplicitAny: true`, `noUnusedLocals: true`, `noUnusedParameters: true`)
  - Module Resolution: `bundler` (ESNext)
- **Markup & Formatting**: HTML5 (`index.html`) with semantic landmark tags and viewport meta configuration.

---

## 2. Frameworks & Build Tools
- **Client Framework**: React `18.3.1` / React DOM `18.3.1`
  - JSX Runtime: `react-jsx`
  - Client Entry: `src/main.tsx` (`createRoot` API)
- **Bundler & Dev Server**: Vite `6.1.0` (`vite.config.ts`)
  - Plugin: `@vitejs/plugin-react` (`^4.3.4`)
  - Dev Server Port: `3000` (`server.port: 3000`, `open: false`)
  - Path Aliases: `@/*` mapped to `src/*`
  - Build Pipeline: `tsc -b && vite build`

---

## 3. Styling & Design Tokens
- **CSS Architecture**: Tailwind CSS `3.4.17` (`tailwind.config.js`)
- **Processors**: PostCSS `8.5.2` + Autoprefixer `10.4.20` (`postcss.config.js`)
- **Global Styles & Resets**:
  - `src/styles/globals.css`: Tailwind `@tailwind` directives, base element resets, and dark background lock.
  - `src/styles/tokens.css`: Custom CSS variables defining the dual-canvas palette (Deep Void `#0D0E11`, Light Canvas `#F6F7F9`, and Electric Citron `#CCFF00`).
- **Typography Integration**: Google Fonts preconnected in `index.html` (`Inter`, `Cabinet Grotesk`/`Syne`, `JetBrains Mono`).

---

## 4. Animation & Scrollytelling
- **Core Engine**: GSAP `3.12.7` (`src/lib/gsap.ts`)
- **Plugins**: `ScrollTrigger` registered globally with performance configs (`syncInterval: 50`, `limitCallbacks: true`).
- **React Motion Hooks**: `src/hooks/useGSAPContext.ts` for safe component lifecycle scoping and automatic trigger garbage collection via `gsap.context()`.

---

## 5. Dependencies Summary

### Runtime Dependencies
| Package | Version | Purpose |
| :--- | :--- | :--- |
| `react` | `^18.3.1` | Core UI library |
| `react-dom` | `^18.3.1` | DOM renderer |
| `gsap` | `^3.12.7` | Animation timeline and ScrollTrigger engine |
| `lucide-react` | `^0.475.0` | Minimal SVG vector icons |

### Development Dependencies
| Package | Version | Purpose |
| :--- | :--- | :--- |
| `vite` | `^6.1.0` | Development server and build bundler |
| `@vitejs/plugin-react` | `^4.3.4` | Vite React fast refresh plugin |
| `typescript` | `^5.7.3` | Static typing system |
| `@types/react` | `^18.3.18` | React type declarations |
| `@types/react-dom` | `^18.3.5` | React DOM type declarations |
| `@types/node` | `^22.13.4` | Node.js typings for path resolution |
| `tailwindcss` | `^3.4.17` | Utility-first CSS framework |
| `postcss` | `^8.5.2` | CSS transformation engine |
| `autoprefixer` | `^10.4.20` | Browser vendor prefixing |
