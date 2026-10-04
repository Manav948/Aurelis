import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register plugins once in application lifecycle
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);

  // Global configuration
  ScrollTrigger.config({
    limitCallbacks: true,
    syncInterval: 50,
  });
}

export { gsap, ScrollTrigger };
export default gsap;
