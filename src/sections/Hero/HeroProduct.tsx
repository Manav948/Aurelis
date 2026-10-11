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

export function HeroProduct({ activeColorway, onChange }: HeroProductProps) {
  const activeFinish = COLORWAYS.find((colorway) => colorway.id === activeColorway) ?? COLORWAYS[0];

  return (
    <div className="hero-product" data-colorway={activeColorway}>
      <div className="hero-product__ambient hero-product__ambient--one" aria-hidden="true" />
      <div className="hero-product__ambient hero-product__ambient--two" aria-hidden="true" />

      <div
        className={`hero-product-stage hero-product-stage--${activeColorway}`}
        role="img"
        aria-label={`Aurelis flagship over-ear headphones in ${activeFinish.name} finish.`}
      >
        <div className="hero-product-stage__orbit hero-product-stage__orbit--outer" />
        <div className="hero-product-stage__orbit hero-product-stage__orbit--inner" />
        <svg className="hero-headphone-art" viewBox="0 0 600 500" aria-hidden="true">
          <defs>
            <linearGradient id="headbandMetal" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#f3f4f6" />
              <stop offset="0.2" stopColor="#747984" />
              <stop offset="0.48" stopColor="#272a31" />
              <stop offset="0.72" stopColor="#a6aab2" />
              <stop offset="1" stopColor="#3a3d44" />
            </linearGradient>
            <linearGradient id="cupShell" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor={activeColorway === 'obsidian' ? '#727680' : '#f4f4f2'} />
              <stop offset="0.22" stopColor={activeColorway === 'obsidian' ? '#24262c' : '#b9bdc4'} />
              <stop offset="0.6" stopColor={activeColorway === 'obsidian' ? '#101115' : '#777d86'} />
              <stop offset="0.84" stopColor={activeColorway === 'obsidian' ? '#555a64' : '#e4e5e7'} />
              <stop offset="1" stopColor={activeColorway === 'obsidian' ? '#17191e' : '#9298a1'} />
            </linearGradient>
            <linearGradient id="cupFace" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor={activeColorway === 'obsidian' ? '#3a3d44' : '#eceef0'} />
              <stop offset="0.5" stopColor={activeColorway === 'obsidian' ? '#17191e' : '#a6abb3'} />
              <stop offset="1" stopColor={activeColorway === 'obsidian' ? '#090a0d' : '#686e78'} />
            </linearGradient>
            <linearGradient id="leather" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#24252a" />
              <stop offset="0.5" stopColor="#08090b" />
              <stop offset="1" stopColor="#3b3d43" />
            </linearGradient>
            <radialGradient id="cupHighlight" cx="35%" cy="25%" r="75%">
              <stop offset="0" stopColor="#ffffff" stopOpacity=".4" />
              <stop offset=".45" stopColor="#ffffff" stopOpacity=".06" />
              <stop offset="1" stopColor="#000000" stopOpacity=".28" />
            </radialGradient>
            <filter id="headphoneShadow" x="-30%" y="-30%" width="160%" height="180%">
              <feGaussianBlur stdDeviation="13" />
            </filter>
          </defs>

          <ellipse cx="310" cy="426" rx="174" ry="25" fill="#000" opacity=".58" filter="url(#headphoneShadow)" />

          <path d="M165 300 C127 156 177 62 293 51 C393 42 454 107 450 229"
            fill="none" stroke="#08090b" strokeWidth="43" strokeLinecap="round" />
          <path d="M165 300 C127 156 177 62 293 51 C393 42 454 107 450 229"
            fill="none" stroke="url(#headbandMetal)" strokeWidth="29" strokeLinecap="round" />
          <path d="M183 258 C161 142 205 78 294 70 C369 64 414 110 422 185"
            fill="none" stroke="url(#leather)" strokeWidth="13" strokeLinecap="round" />
          <path d="M174 285 C145 156 187 69 292 59 C390 50 443 115 439 221"
            fill="none" stroke="#f6f7f9" strokeOpacity=".28" strokeWidth="2.5" strokeLinecap="round" />

          <g transform="translate(138 226) rotate(-13)">
            <rect x="3" y="-13" width="54" height="116" rx="22" fill="#090a0c" />
            <rect x="10" y="-18" width="47" height="124" rx="20" fill="url(#headbandMetal)" />
            <rect x="18" y="-9" width="31" height="106" rx="14" fill="#202228" />
            <rect x="24" y="0" width="19" height="90" rx="9" fill="#050608" />
          </g>

          <g transform="translate(402 217) rotate(17)">
            <rect x="-4" y="-11" width="53" height="119" rx="22" fill="#08090b" />
            <rect x="0" y="-18" width="47" height="126" rx="20" fill="url(#headbandMetal)" />
            <rect x="7" y="-9" width="32" height="108" rx="14" fill="#202228" />
            <rect x="13" y="0" width="19" height="91" rx="9" fill="#060709" />
          </g>

          <g transform="translate(185 300) rotate(-18)">
            <rect x="-23" y="-24" width="59" height="104" rx="22" fill="#0b0c0f" />
            <rect x="-11" y="-14" width="42" height="87" rx="17" fill="url(#headbandMetal)" />
            <rect x="-4" y="-5" width="27" height="69" rx="11" fill="#17191e" />
          </g>

          <g transform="translate(385 302) rotate(14)">
            <rect x="-14" y="-27" width="64" height="111" rx="23" fill="#090a0c" />
            <rect x="-5" y="-19" width="51" height="96" rx="20" fill="url(#headbandMetal)" />
            <rect x="2" y="-10" width="38" height="79" rx="15" fill="#181a20" />
          </g>

          <g transform="translate(204 281) rotate(-12)">
            <path d="M-14 18 C-28 -4 -13 -31 14 -31 L60 -31 C87 -29 99 -8 91 18 L73 89 C67 113 49 128 24 123 L-8 116 C-33 109 -43 84 -35 59 Z"
              fill="#07080a" />
            <path d="M-4 8 C-16 -9 -4 -25 17 -25 L57 -24 C76 -22 85 -7 79 14 L62 80 C56 101 43 111 23 106 L0 100 C-18 95 -26 78 -20 58 Z"
              fill="url(#cupShell)" />
            <path d="M3 13 C-6 0 2 -12 18 -12 L52 -12 C65 -11 71 0 66 16 L52 72 C48 87 39 95 24 91 L8 87 C-4 83 -10 72 -6 57 Z"
              fill="url(#cupFace)" stroke="#c7cbd2" strokeOpacity=".42" strokeWidth="2" />
            <path d="M7 15 C1 4 7 -5 20 -5 L48 -5 C58 -4 62 5 59 17 L46 67 C43 78 36 83 25 80 L12 76 C3 73 -1 64 2 54 Z"
              fill="url(#cupHighlight)" />
            <path d="M14 10 C27 4 42 8 49 18" fill="none" stroke="#fff" strokeOpacity=".24" strokeWidth="2" strokeLinecap="round" />
            <ellipse cx="30" cy="39" rx="23" ry="31" fill="none" stroke="#e7e9ed" strokeOpacity=".5" strokeWidth="1.5" />
            <ellipse cx="30" cy="39" rx="16" ry="23" fill="none" stroke="#050608" strokeOpacity=".8" strokeWidth="5" />
            <ellipse cx="30" cy="39" rx="10" ry="16" fill="none" stroke="#d9dce1" strokeOpacity=".45" strokeWidth="1.5" />
            <circle cx="30" cy="39" r="5" fill="#111318" stroke="#e5c396" strokeOpacity=".9" strokeWidth="1.4" />
          </g>

          <g transform="translate(359 290) rotate(13)">
            <path d="M-11 15 C-27 -6 -14 -30 12 -31 L56 -30 C83 -28 97 -6 89 20 L71 91 C65 113 47 128 22 123 L-10 116 C-34 109 -43 85 -35 59 Z"
              fill="#060709" />
            <path d="M-2 8 C-14 -8 -2 -24 19 -24 L56 -23 C76 -21 84 -5 78 15 L61 82 C55 101 41 111 22 106 L-1 100 C-18 95 -26 78 -20 58 Z"
              fill="url(#cupShell)" />
            <path d="M6 13 C-3 0 5 -11 20 -11 L51 -11 C64 -10 70 1 65 17 L51 73 C47 87 38 95 23 91 L10 87 C-2 83 -8 72 -4 57 Z"
              fill="url(#cupFace)" stroke="#d5d8df" strokeOpacity=".45" strokeWidth="2" />
            <path d="M10 15 C4 4 10 -5 23 -5 L47 -5 C57 -4 61 5 58 17 L45 67 C42 78 35 83 24 80 L13 76 C4 73 0 64 3 54 Z"
              fill="url(#cupHighlight)" />
            <path d="M13 10 C26 4 40 8 48 18" fill="none" stroke="#fff" strokeOpacity=".26" strokeWidth="2" strokeLinecap="round" />
            <ellipse cx="30" cy="39" rx="23" ry="31" fill="none" stroke="#e7e9ed" strokeOpacity=".48" strokeWidth="1.5" />
            <ellipse cx="30" cy="39" rx="16" ry="23" fill="none" stroke="#050608" strokeOpacity=".82" strokeWidth="5" />
            <ellipse cx="30" cy="39" rx="10" ry="16" fill="none" stroke="#d9dce1" strokeOpacity=".48" strokeWidth="1.5" />
            <circle cx="30" cy="39" r="5" fill="#111318" stroke="#e5c396" strokeOpacity=".9" strokeWidth="1.4" />
          </g>

          <path d="M239 406 C282 429 338 432 379 409" fill="none" stroke="#fff" strokeOpacity=".13" strokeWidth="2" strokeLinecap="round" />
        </svg>

        <span className="hero-product-stage__asset-note">AURELIS STUDIO · SIGNATURE FINISH</span>
      </div>

      <div className="hero-product__caption">
        <span className="hero-product__caption-rule" />
        <span>PRECISION / IN EVERY FREQUENCY</span>
      </div>

      <div className="hero-product__controls" aria-label="Navigate headphone finishes">
        <button type="button" className="hero-product__control" onClick={onPrevious} aria-label="Previous headphone finish">
          <ChevronLeft size={18} strokeWidth={1.8} />
        </button>
        <button type="button" className="hero-product__control hero-product__control--next" onClick={onNext} aria-label="Next headphone finish">
          <ChevronRight size={18} strokeWidth={1.8} />
        </button>
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
