# Rules of Engagement for AI Coding Agents — Aurelis

These are permanent, mandatory rules for any AI coding agent operating in the Aurelis codebase. Every agent must read, understand, and strictly follow these rules before inspecting, creating, or modifying code.

---

## Core Rules

1. **Read the relevant documentation before modifying code.**
   Always inspect `/docs/PRD.md`, `/docs/DESIGN.md`, `/docs/MOTION.md`, `/docs/TECH.md`, `/docs/ASSETS.md`, `/docs/TASKS.md`, and `/docs/QA.md` before taking action.

2. **Work on one meaningful task at a time.**
   Never bundle multiple unrelated tasks together. Scope work precisely according to `/docs/TASKS.md`.

3. **Do not implement unspecified features.**
   Strictly adhere to the scope defined in the PRD and current task. Do not extrapolate unrequested features or backend integrations.

4. **Do not redesign existing sections unless explicitly requested.**
   Preserve visual styling, typographic hierarchy, and layout agreements unless the user explicitly requests changes.

5. **Do not modify unrelated files.**
   Keep file changes isolated to what is directly required for the current task.

6. **Reuse existing components and utilities before creating new ones.**
   Check `/src/components/`, `/src/hooks/`, and `/src/lib/` before authoring new abstractions. Avoid duplicate utilities.

7. **Do not install a dependency unless there is a clear requirement.**
   Evaluate native browser or framework capabilities first. Keep the project lightweight and lean.

8. **Prefer simple, maintainable code.**
   Avoid convoluted abstractions, overly clever one-liners, or unneeded indirection. Code clarity takes precedence.

9. **Do not remove required animation merely to make the implementation "simpler".**
   Aurelis is an animation-heavy showcase. Motion is a core product requirement, not an optional embellishment.

10. **Keep animation logic organized and separate from content/data where practical.**
    Keep data in `/src/data/`, animation registration in `/src/lib/gsap.ts`, and reusable motion logic in custom hooks.

11. **Use GSAP/ScrollTrigger for complex scroll choreography rather than creating unnecessary custom animation systems.**
    Rely on the proven GSAP engine. Scope timelines inside `gsap.context()` for clean React lifecycle garbage collection.

12. **Ensure responsive behavior is considered from the beginning.**
    Design and test mobile, tablet, and desktop layouts concurrently. Never defer mobile adaptation as an afterthought.

13. **Test the result in the browser before claiming a UI task is complete.**
    Use browser tools or dev server verification to inspect visual rendering, scroll triggers, and layout integrity.

14. **Run TypeScript/build/lint checks when applicable.**
    Always run `tsc --noEmit` and `npm run build` before reporting task completion.

15. **Never claim something is working without verification.**
    Provide factual verification outputs (build exit codes, terminal output, visual checks).

16. **Never expose chain-of-thought. Give concise implementation decisions and verification results instead.**
    Responses must be clear, professional, direct, and concise.

17. **Do not make unrelated improvements while working on a task.**
    Do not reformat unrelated files, clean up unrelated syntax, or refactor working code outside task scope.

---

## Technical Invariants for Aurelis

- **Clean Git Hygiene**: Do not run `git init`, do not reconfigure remotes, and do not commit or push automatically.
- **GSAP Memory Cleanups**: Every `ScrollTrigger` and `gsap.timeline` must be created within a `gsap.context()` and reverted on unmount.
- **Zero Heavy Unused Frameworks**: No backend servers, no databases, no unnecessary global state libraries.
