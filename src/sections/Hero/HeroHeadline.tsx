interface HeroHeadlineProps {
  readonly colorway: 'obsidian' | 'titanium';
}

export function HeroHeadline({ colorway }: HeroHeadlineProps) {
  if (colorway === 'titanium') {
    return (
      <h1 className="hero-headline">
        <span className="hero-headline__line">Sculpted for</span>
        <span className="hero-headline__line">
          <span className="hero-headline__solid">the </span>
          <span className="hero-headline__outline">details</span>
        </span>
        <span className="hero-headline__line hero-headline__outline">you feel.</span>
      </h1>
    );
  }

  return (
    <h1 className="hero-headline">
      <span className="hero-headline__line">Immersive sound</span>
      <span className="hero-headline__line">
        <span className="hero-headline__solid">for the </span>
        <span className="hero-headline__outline">digital</span>
      </span>
      <span className="hero-headline__line hero-headline__outline">generation</span>
    </h1>
  );
}
