import { useRef, useState } from 'react';
import { ArrowDown, ArrowLeft, ArrowRight } from 'lucide-react';
import { PillButton } from '@/components/Button';
import { useGSAPContext } from '@/hooks/useGSAPContext';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { gsap } from '@/lib/gsap';
import { HeroHeadline } from './HeroHeadline';
import { HeroProduct, type Colorway } from './HeroProduct';

const COLORWAYS: { id: Colorway; name: string; eyebrow: string; description: string; note: string }[] = [
  {
    id: 'obsidian',
    name: 'Obsidian Black',
    eyebrow: '01 / OBSIDIAN SERIES',
    description: 'Deep, immersive sound. Sculpted in shadow. Made for the moments when every detail matters.',
    note: 'MATTE GRAPHITE · DARK CHROME',
  },
  {
    id: 'titanium',
    name: 'Brushed Titanium',
    eyebrow: '02 / TITANIUM SERIES',
    description: 'Precision in every curve. A luminous titanium finish with a presence that feels as considered as it sounds.',
    note: 'BRUSHED TITANIUM · SATIN SILVER',
  },
];

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const activeColorway = COLORWAYS[activeIndex];

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

  const changeColorway = (nextIndex: number) => {
    const normalizedIndex = (nextIndex + COLORWAYS.length) % COLORWAYS.length;
    if (normalizedIndex === activeIndex) return;
    if (!prefersReducedMotion && copyRef.current) {
      gsap.to(copyRef.current, {
        y: 8,
        opacity: 0,
        duration: 0.16,
        ease: 'power1.in',
        onComplete: () => {
          setActiveIndex(normalizedIndex);
          gsap.fromTo(copyRef.current, { y: -8, opacity: 0 }, {
            y: 0,
            opacity: 1,
            duration: 0.42,
            ease: 'power3.out',
            clearProps: 'all',
          });
        },
      });
    } else {
      setActiveIndex(normalizedIndex);
    }
  };

  return (
    <section className="hero-section" id="home" ref={heroRef} aria-labelledby="hero-title">
      <div className="hero-section__grain" aria-hidden="true" />
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
