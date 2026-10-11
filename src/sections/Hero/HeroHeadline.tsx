import type { HeroColorway } from './HeroProduct';

interface HeroHeadlineProps {
  readonly activeColorway: HeroColorway;
}

export function HeroHeadline({ activeColorway }: HeroHeadlineProps) {
  const isTitanium = activeColorway === 'titanium';

  return (
    <h1 className="hero-headline" aria-label={isTitanium ? 'Pure detail in every frequency' : 'Immersive sound for the digital generation'}>
      {isTitanium ? (
        <>
          <span className="hero-headline__line">Pure detail</span>
          <span className="hero-headline__line">In every</span>
          <span className="hero-headline__line hero-headline__outline">frequency</span>
        </>
      ) : (
        <>
          <span className="hero-headline__line">Immersive sound</span>
          <span className="hero-headline__line">
            <span className="hero-headline__solid">for the </span>
            <span className="hero-headline__outline">digital</span>
          </span>
          <span className="hero-headline__line hero-headline__outline">generation</span>
        </>
      )}
    </h1>
  );
}
