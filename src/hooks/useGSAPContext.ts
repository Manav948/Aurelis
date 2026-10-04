import { useLayoutEffect, useEffect, useRef } from 'react';
import { gsap } from '@/lib/gsap';

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

/**
 * Custom hook to safely scope GSAP animations and ScrollTrigger instances
 * within a React component lifecycle, automatically reverting on unmount.
 */
export function useGSAPContext(
  animationCreator: (context: gsap.Context) => void,
  scopeRef?: React.RefObject<HTMLElement | null>
) {
  const ctxRef = useRef<gsap.Context | null>(null);

  useIsomorphicLayoutEffect(() => {
    const scope = scopeRef ? scopeRef.current : undefined;
    const ctx = gsap.context((self) => {
      animationCreator(self);
    }, scope ?? undefined);

    ctxRef.current = ctx;

    return () => {
      ctx.revert();
    };
  }, []);

  return ctxRef;
}
