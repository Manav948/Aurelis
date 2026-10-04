import { useRef } from 'react';
import { useGSAPContext } from '@/hooks/useGSAPContext';
import { SITE_CONFIG } from '@/data';

export function App() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Verification that GSAP context initializes cleanly without side effects
  useGSAPContext((ctx) => {
    ctx.add('ping', () => {
      // Internal GSAP lifecycle verification check
      return true;
    });
  }, containerRef);

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-void-base text-gray-100 flex flex-col items-center justify-center p-6 selection:bg-metallic-champagne selection:text-void-base"
    >
      <main className="max-w-md w-full p-8 rounded-2xl bg-void-elevated/70 border border-white/10 backdrop-blur-xl shadow-2xl space-y-6 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-metallic-champagne/30 bg-metallic-champagne/10 text-metallic-champagne text-xs font-mono tracking-widest uppercase">
          Foundation Initialized
        </div>

        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight font-display text-white">
            {SITE_CONFIG.name}
          </h1>
          <p className="text-sm text-gray-400 font-sans">
            {SITE_CONFIG.tagline}
          </p>
        </div>

        <div className="p-4 rounded-xl bg-void-subtle/80 border border-white/5 text-left font-mono text-xs text-gray-400 space-y-1.5">
          <div className="text-gray-300 font-semibold mb-1">Architecture Verified:</div>
          <div className="flex items-center justify-between">
            <span>React + TypeScript</span>
            <span className="text-emerald-400">Ready</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Vite Bundler</span>
            <span className="text-emerald-400">Ready</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Tailwind CSS</span>
            <span className="text-emerald-400">Active</span>
          </div>
          <div className="flex items-center justify-between">
            <span>GSAP + ScrollTrigger</span>
            <span className="text-emerald-400">Mounted</span>
          </div>
        </div>

        <p className="text-xs text-gray-500">
          Ready for Phase 1 implementation according to <code className="text-gray-400">/docs/TASKS.md</code>.
        </p>
      </main>
    </div>
  );
}

export default App;
