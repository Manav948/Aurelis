import { Check } from 'lucide-react';

export type Colorway = 'obsidian' | 'titanium';

interface HeroProductProps {
  readonly activeColorway: Colorway;
  readonly onChange: (index: number) => void;
}

const COLORWAYS: { id: Colorway; name: string; finish: string }[] = [
  { id: 'obsidian', name: 'Obsidian Black', finish: '#24262c' },
  { id: 'titanium', name: 'Brushed Titanium', finish: '#c6c9cd' },
];

// Remote transparent product cutout; replace this URL with a licensed product render when ready.
const HEADPHONE_IMAGE = 'https://pngimg.com/uploads/headphones/headphones_PNG7645.png';

export function HeroProduct({ activeColorway, onChange }: HeroProductProps) {
  const activeFinish = COLORWAYS.find((colorway) => colorway.id === activeColorway) ?? COLORWAYS[0];

  return (
    <div className={`hero-product hero-product--${activeColorway}`} data-colorway={activeColorway}>
      <div className="hero-product__ambient hero-product__ambient--one" aria-hidden="true" />
      <div className="hero-product__ambient hero-product__ambient--two" aria-hidden="true" />

      <div
        className={`hero-product-stage hero-product-stage--${activeColorway}`}
        role="img"
        aria-label={`Aurelis flagship over-ear headphones in ${activeFinish.name} finish.`}
      >
        <div className="hero-product-stage__orbit hero-product-stage__orbit--outer" />
        <div className="hero-product-stage__orbit hero-product-stage__orbit--inner" />
        <div className="hero-product-stage__light-pool" aria-hidden="true" />
        <img
          key={activeColorway}
          className="hero-headphone-art"
          src={HEADPHONE_IMAGE}
          alt={activeFinish.name + ' wireless over-ear headphones'}
          loading="eager"
          onError={(event) => {
            event.currentTarget.style.display = 'none';
            event.currentTarget.parentElement?.classList.add('hero-product-stage--image-error');
          }}
        />
        <span className="hero-product-stage__asset-note">AURELIS STUDIO · SIGNATURE FINISH</span>
      </div>

      <div className="hero-product__caption">
        <span className="hero-product__caption-rule" />
        <span>PRECISION / IN EVERY FREQUENCY</span>
      </div>

      <div className="hero-colorways" aria-label="Choose headphone finish">
        {COLORWAYS.map((colorway, index) => (
          <button
            key={colorway.id}
            type="button"
            className={`hero-colorway${activeColorway === colorway.id ? ' is-active' : ''}`}
            aria-label={`Show ${colorway.name} finish`}
            aria-pressed={activeColorway === colorway.id}
            onClick={() => onChange(index)}
          >
            <span
              className={`hero-colorway__thumb hero-colorway__thumb--${colorway.id}`}
              style={{ backgroundColor: colorway.finish }}
              aria-hidden="true"
            >
              <span className="hero-colorway__mini-cup" />
              {activeColorway === colorway.id && <Check size={12} strokeWidth={2.2} />}
            </span>
            <span className="hero-colorway__label">
              <span className="hero-colorway__number">0{index + 1}</span>
              <span>{colorway.name}</span>
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
