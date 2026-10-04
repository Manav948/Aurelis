export interface SiteConfig {
  readonly name: string;
  readonly tagline: string;
  readonly description: string;
  readonly version: string;
}

export const SITE_CONFIG: SiteConfig = {
  name: 'Aurelis',
  tagline: 'Flagship Acoustic Engineering',
  description: 'Precision-crafted planar magnetic headphones in titanium and Tuscan leather.',
  version: '0.1.0',
};
