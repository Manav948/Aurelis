import { useEffect, useState } from 'react';
import { Menu, Search, ShoppingBag, UserRound, X, ArrowUpRight } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Shop', href: '#shop' },
  { label: 'Collections', href: '#collections' },
  { label: 'About Us', href: '#about' },
] as const;

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const update = () => setIsScrolled(window.scrollY > 16);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMenuOpen(false);
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={`site-navbar${isScrolled ? ' is-scrolled' : ''}`}>
      <div className="header-container site-navbar__inner">
        <button
          className="header-icon-button mobile-menu-trigger"
          type="button"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        <nav className="desktop-nav" aria-label="Main navigation">
          {NAV_LINKS.map((link, index) => (
            <a className="desktop-nav__link" href={link.href} key={link.label} onClick={closeMenu}>
              <span className="desktop-nav__number">0{index + 1}</span>{link.label}
            </a>
          ))}
        </nav>

        <a className="brandmark" href="#home" aria-label="Aurelis home" onClick={closeMenu}>
          <span className="brandmark__symbol" aria-hidden="true">A</span>
          <span className="brandmark__word">AURELIS<span>.</span></span>
        </a>

        <div className="header-utilities" aria-label="Store utilities">
          <button className="header-icon-button header-utility-search" type="button" aria-label="Search products" title="Search">
            <Search size={18} strokeWidth={1.6} />
          </button>
          <button className="header-icon-button header-utility-account" type="button" aria-label="Your account" title="Account">
            <UserRound size={18} strokeWidth={1.6} />
          </button>
          <button className="header-icon-button header-utility-cart" type="button" aria-label="Shopping bag" title="Shopping bag">
            <ShoppingBag size={18} strokeWidth={1.6} />
            <span className="header-cart-count">0</span>
          </button>
          <a className="header-shop-link" href="#shop">Explore store <ArrowUpRight size={14} /></a>
        </div>
      </div>

      {isMenuOpen && (
        <nav className="mobile-nav" id="mobile-navigation" aria-label="Mobile navigation">
          {NAV_LINKS.map((link, index) => (
            <a className="mobile-nav__link" href={link.href} key={link.label} onClick={closeMenu}>
              <span>0{index + 1}</span>{link.label}<ArrowUpRight size={16} />
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
