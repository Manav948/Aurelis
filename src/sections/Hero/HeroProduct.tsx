import { Check } from 'lucide-react';

export type Colorway = 'obsidian' | 'titanium';

interface HeroProductProps {
  readonly activeColorway: Colorway;
  readonly onChange: (index: number) => void;
}

const COLORWAYS: { id: Colorway; name: string; finish: string; image: string; alt: string }[] = [
  {
    id: 'obsidian',
    name: 'Obsidian Black',
    finish: '#25272a',
    image: 'https://pngimg.com/uploads/headphones/headphones_PNG7645.png',
    alt: 'Black over-ear headphones with a metallic finish',
  },
  {
    id: 'titanium',
    name: 'Titanium Silver',
    finish: '#d5d7d8',
    image: 'https://pngimg.com/uploads/headphones/headphones_PNG7650.png',
    alt: 'Silver over-ear headphones',
  },
];

export function HeroProduct({ activeColorway, onChange }: HeroProductProps) {
  const activeFinish = COLORWAYS.find((item) => item.id === activeColorway) ?? COLORWAYS[0];

  return (
    <div className={`hero-product hero-product--${activeColorway}`} data-colorway={activeColorway}>
      <div className="hero-product__ambient hero-product__ambient--one" aria-hidden="true" />
      <div className="hero-product__ambient hero-product__ambient--two" aria-hidden="true" />
      <div className="hero-product-stage">
        <div className="hero-product-stage__light-pool" aria-hidden="true" />
        <div className="hero-product-stage__orbit hero-product-stage__orbit--outer" aria-hidden="true" />
        <div className="hero-product-stage__orbit hero-product-stage__orbit--inner" aria-hidden="true" />
        <img
          key={activeFinish.id}
          className="hero-headphone-art"
          src={activeFinish.image}
          alt={activeFinish.alt}
          loading="eager"
          fetchPriority="high"
          onError={(event) => {
            event.currentTarget.style.opacity = '0';
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
            <span className={`hero-colorway__thumb hero-colorway__thumb--${colorway.id}`} aria-hidden="true">
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
