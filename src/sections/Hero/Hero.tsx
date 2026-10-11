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
    description: 'Precision-crafted sound. Sculpted in shadow. A listening experience designed to bring every detail into focus.',
    note: 'MATTE GRAPHITE · DARK CHROME',
  },
  {
    id: 'titanium',
    eyebrow: '02 / TITANIUM SERIES',
    description: 'A luminous metal finish, tuned for clarity. Considered in every curve and made for the moments that matter.',
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
      .fromTo('.hero-visual__index', { opacity: 0, y: -10 }, { opacity: 1, y: 0, duration: 0.55 }, 0.25)
      .fromTo('.hero-eyebrow', { opacity: 0, y: 16, filter: 'blur(7px)' }, { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.65 }, 0.5)
      .fromTo('.hero-headline__line', { yPercent: 115, opacity: 0, filter: 'blur(8px)' }, {
        yPercent: 0, opacity: 1, filter: 'blur(0px)', duration: 0.9, stagger: 0.13,
      }, 0.62)
      .fromTo('.hero-description, .hero-actions, .hero-meta', { opacity: 0, y: 18 }, {
        opacity: 1, y: 0, duration: 0.65, stagger: 0.12,
      }, 1.1)
      .fromTo('.hero-product-stage', { opacity: 0, y: 52, scale: 0.88, filter: 'blur(20px)' }, {
        opacity: 1, y: 0, scale: 1, filter: 'blur(0px)', duration: 1.35,
      }, 0.72)
      .fromTo('.hero-colorways, .hero-product__caption, .hero-scroll-cue, .hero-visual__controls', {
        opacity: 0, y: 12,
      }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.08 }, 1.7);

    gsap.to('.hero-product-stage', {
      y: -7,
      duration: 3.8,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      delay: 2.4,
    });
  }, heroRef);

  const changeColorway = (nextIndex: number) => {
    const normalizedIndex = (nextIndex + COLORWAYS.length) % COLORWAYS.length;
    if (normalizedIndex === activeIndex) return;

    if (!prefersReducedMotion && copyRef.current) {
      gsap.to(copyRef.current, {
        y: 7,
        opacity: 0,
        duration: 0.18,
        ease: 'power2.in',
        onComplete: () => {
          setActiveIndex(normalizedIndex);
          gsap.fromTo(copyRef.current, { y: -7, opacity: 0 }, {
            y: 0, opacity: 1, duration: 0.4, ease: 'power3.out', clearProps: 'all',
          });
        },
      });
      gsap.fromTo('.hero-product-stage', { opacity: 0.45, scale: 0.96, filter: 'blur(8px)' }, {
        opacity: 1, scale: 1, filter: 'blur(0px)', duration: 0.65, ease: 'power3.out',
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
          <p className="hero-eyebrow hero-copy__reveal">
            <span className="hero-eyebrow__dot" />
            {activeColorway.eyebrow}
          </p>

          <div id="hero-title" className="hero-copy__title-wrap">
            <HeroHeadline colorway={activeColorway.id} />
          </div>

          <p className="hero-description hero-copy__reveal" key={activeColorway.id}>
            {activeColorway.description}
          </p>

          <div className="hero-actions hero-copy__reveal">
            <PillButton href="#features">Discover More</PillButton>
            <span className="hero-actions__note">ENGINEERED TO BE HEARD.</span>
          </div>

          <div className="hero-meta hero-copy__reveal" aria-label="Product highlights">
            <div className="hero-meta__item">
              <span className="hero-meta__value">40H</span>
              <span className="hero-meta__label">Battery life</span>
            </div>
            <span className="hero-meta__divider" aria-hidden="true" />
            <div className="hero-meta__item">
              <span className="hero-meta__value">ANC</span>
              <span className="hero-meta__label">Noise cancellation</span>
            </div>
            <span className="hero-meta__divider" aria-hidden="true" />
            <div className="hero-meta__item">
              <span className="hero-meta__value">HI·FI</span>
              <span className="hero-meta__label">Audio quality</span>
            </div>
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
              <button type="button" aria-label="Previous headphone finish" onClick={() => changeColorway(activeIndex - 1)}>
                <ArrowLeft size={17} />
              </button>
              <span className="hero-visual__counter">0{activeIndex + 1}<i />0{COLORWAYS.length}</span>
              <button type="button" aria-label="Next headphone finish" onClick={() => changeColorway(activeIndex + 1)}>
                <ArrowRight size={17} />
              </button>
            </div>
          </div>
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
