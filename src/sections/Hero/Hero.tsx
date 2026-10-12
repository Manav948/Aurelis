import { useRef, useState } from 'react';
import { ArrowDown, ArrowLeft, ArrowRight } from 'lucide-react';
import { PillButton } from '@/components/Button';
import { useGSAPContext } from '@/hooks/useGSAPContext';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { gsap } from '@/lib/gsap';
import { HeroHeadline } from './HeroHeadline';
import { HeroProduct, type Colorway } from './HeroProduct';

const COLORWAYS: { id: Colorway; eyebrow: string; description: string; note: string }[] = [
  {
    id: 'obsidian',
    eyebrow: '01 / OBSIDIAN SERIES',
    description: 'Engineered with advanced features to elevate your listening experience every day.',
    note: 'MATTE GRAPHITE · DARK CHROME',
  },
  {
    id: 'titanium',
    eyebrow: '02 / TITANIUM SERIES',
    description: 'Engineered with advanced features to elevate your listening experience every day.',
    note: 'BRUSHED TITANIUM · SATIN SILVER',
  },
];

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();
  const activeColorway = COLORWAYS[activeIndex];

  useGSAPContext(() => {
    if (prefersReducedMotion) return;
    const timeline = gsap.timeline({ defaults: { ease: 'power3.out' } });
    timeline
      .fromTo('.hero-eyebrow', { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.55 }, 0.2)
      .fromTo('.hero-headline__line', { yPercent: 110, opacity: 0, filter: 'blur(6px)' }, {
        yPercent: 0, opacity: 1, filter: 'blur(0px)', duration: 0.85, stagger: 0.12,
      }, 0.35)
      .fromTo('.hero-description, .hero-actions', { opacity: 0, y: 16 }, {
        opacity: 1, y: 0, duration: 0.65, stagger: 0.1,
      }, 0.9)
      .fromTo('.hero-product-stage', { opacity: 0, y: 28, scale: 0.94 }, {
        opacity: 1, y: 0, scale: 1, duration: 1.1,
      }, 0.45)
      .fromTo('.hero-colorways, .hero-product__caption, .hero-scroll-cue, .hero-visual__controls', {
        opacity: 0, y: 10,
      }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.07 }, 1.15);

    gsap.to('.hero-product-stage', {
      y: -6, duration: 3.8, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 1.8,
    });
  }, heroRef);

  const changeColorway = (nextIndex: number) => {
    const normalizedIndex = (nextIndex + COLORWAYS.length) % COLORWAYS.length;
    if (normalizedIndex === activeIndex) return;
    if (!prefersReducedMotion && copyRef.current) {
      gsap.to(copyRef.current, {
        y: 5, opacity: 0, duration: 0.16, ease: 'power2.in',
        onComplete: () => {
          setActiveIndex(normalizedIndex);
          if (copyRef.current) {
            gsap.fromTo(copyRef.current, { y: -5, opacity: 0 }, {
              y: 0, opacity: 1, duration: 0.38, ease: 'power3.out', clearProps: 'all',
            });
          }
        },
      });
      gsap.fromTo('.hero-product-stage', { opacity: 0.6, scale: 0.97 }, {
        opacity: 1, scale: 1, duration: 0.55, ease: 'power3.out',
      });
    } else {
      setActiveIndex(normalizedIndex);
    }
  };

  return (
    <section className="hero-section" id="home" ref={heroRef} aria-labelledby="hero-title">
      <div className="hero-section__grain" aria-hidden="true" />
      <div className="hero-intro-glow" aria-hidden="true" />
      <div className="hero-container hero-layout">
        <div className="hero-copy" ref={copyRef} aria-live="polite">
          <p className="hero-eyebrow">
            <span className="hero-eyebrow__dot" />
            {activeColorway.eyebrow}
          </p>
          <div id="hero-title" className="hero-copy__title-wrap">
            <HeroHeadline />
          </div>
          <p className="hero-description" key={activeColorway.id}>{activeColorway.description}</p>
          <div className="hero-actions">
            <PillButton href="#features">Discover More</PillButton>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-visual__index" aria-hidden="true">
            <span>{activeColorway.eyebrow}</span>
            <span>OVER-EAR · FLAGSHIP</span>
          </div>
          <HeroProduct activeColorway={activeColorway.id} onChange={changeColorway} />
          <div className="hero-visual__controls" aria-label="Headphone finish controls">
            <span className="hero-visual__finish-note">{activeColorway.note}</span>
            <div className="hero-visual__arrows">
              <button type="button" aria-label="Previous headphone finish" onClick={() => changeColorway(activeIndex - 1)}><ArrowLeft size={17} /></button>
              <span className="hero-visual__counter">0{activeIndex + 1}<i />0{COLORWAYS.length}</span>
              <button type="button" aria-label="Next headphone finish" onClick={() => changeColorway(activeIndex + 1)}><ArrowRight size={17} /></button>
            </div>
          </div>
          <a className="hero-scroll-cue" href="#features">
            <span>SCROLL TO EXPLORE</span>
            <span className="hero-scroll-cue__icon" aria-hidden="true"><ArrowDown size={15} strokeWidth={1.8} /></span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
