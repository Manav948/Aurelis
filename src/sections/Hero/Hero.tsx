import { useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import { PillButton } from '@/components/Button';
import { useGSAPContext } from '@/hooks/useGSAPContext';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { gsap } from '@/lib/gsap';
import { HeroHeadline } from './HeroHeadline';
import { HeroProduct } from './HeroProduct';

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useGSAPContext(() => {
    if (prefersReducedMotion) return;

    gsap.from('.hero-headline__line', {
      yPercent: 115,
      opacity: 0,
      duration: 0.9,
      stagger: 0.12,
      ease: 'power3.out',
      delay: 0.12,
    });

    gsap.from('.hero-copy__reveal', {
      y: 20,
      opacity: 0,
      duration: 0.7,
      stagger: 0.12,
      ease: 'power2.out',
      delay: 0.42,
    });

    gsap.from('.hero-product-stage', {
      y: 28,
      scale: 1.045,
      opacity: 0,
      duration: 1.1,
      ease: 'power3.out',
      delay: 0.2,
    });
  }, heroRef);

  return (
    <section className="hero-section" id="home" ref={heroRef} aria-labelledby="hero-title">
      <div className="hero-section__grain" aria-hidden="true" />
      <div className="hero-container hero-layout">
        <div className="hero-copy">
          <p className="hero-eyebrow hero-copy__reveal">
            <span className="hero-eyebrow__dot" />
            FLAGSHIP ACOUSTIC ENGINEERING
          </p>

          <div id="hero-title" className="hero-copy__title-wrap">
            <HeroHeadline />
          </div>

          <p className="hero-description hero-copy__reveal">
            Precision-crafted sound. Sculpted titanium. A listening experience
            designed to bring every detail into focus.
          </p>

          <div className="hero-actions hero-copy__reveal">
            <PillButton href="#features">Discover More</PillButton>
            <span className="hero-actions__note">ENGINEERED TO BE HEARD.</span>
          </div>

          <div className="hero-meta hero-copy__reveal" aria-label="Product highlights">
            <div className="hero-meta__item">
              <span className="hero-meta__value">01</span>
              <span className="hero-meta__label">Acoustic precision</span>
            </div>
            <span className="hero-meta__divider" aria-hidden="true" />
            <div className="hero-meta__item">
              <span className="hero-meta__value">02</span>
              <span className="hero-meta__label">Material integrity</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-visual__index" aria-hidden="true">
            <span>01 / AURELIS STUDIO</span>
            <span>OVER-EAR · FLAGSHIP</span>
          </div>
          <HeroProduct />
          <a className="hero-scroll-cue" href="#features">
            <span>SCROLL TO EXPLORE</span>
            <span className="hero-scroll-cue__icon" aria-hidden="true">
              <ArrowDown size={15} strokeWidth={1.8} />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
