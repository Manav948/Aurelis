# Architectural & Operational Constraints — Aurelis

**Ingest Date:** 2026-10-06  
**Source Documents:** `AGENTS.md`, `docs/TECH.md`, `docs/ASSETS.md`

---

## 1. Technical Invariants
1. **Zero Unused Infrastructure**: No backend servers, no relational/NoSQL databases, no authentication libraries, and no global state management stores (Redux/Zustand).
2. **Minimal Dependencies**: Only packages with clear, justifiable requirements may be installed.
3. **Strict Memory Cleanup**: Every `ScrollTrigger` and `gsap.timeline` must be registered within a `gsap.context()` and reverted on unmount via `useGSAPContext`.
4. **Git Hygiene**: Do not run `git init`, do not reconfigure remotes, and do not commit or push automatically.

---

## 2. Asset Constraints & Non-Blocking Placeholders
1. **Unprovided Production Media**: Isolated transparent cutouts, high-res lifestyle portraits, and audio samples are currently unprovided (`[TBD]` in `ASSETS.md`).
2. **Mandatory Container Locking**: Developers must construct sections using styled aspect-ratio containers (`aspect-[6/5]`, `aspect-square`, `aspect-[4/5]`) matching target dimensions, preventing layout reflow and avoiding any blockage waiting for final media assets.

---

## 3. Scope & Redesign Invariants
1. **No Unspecified Features**: Stick strictly to the 8-stage layout defined in `PRD.md` and `TASKS.md`.
2. **No Unrequested Redesigns**: Preserve visual styling, color tokens, and typographic hierarchy established in `DESIGN.md`.
3. **Atomic Task Execution**: Work on one task at a time following `docs/TASKS.md`.
