import { useEffect, useState } from 'react';
import { Menu, Search, ShoppingBag, User, X } from 'lucide-react';

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
    const updateScrollState = () => setIsScrolled(window.scrollY > 8);

    updateScrollState();
    window.addEventListener('scroll', updateScrollState, { passive: true });

    return () => window.removeEventListener('scroll', updateScrollState);
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
        <nav className="desktop-nav" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <a className="desktop-nav__link" href={link.href} key={link.label}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="mobile-menu-slot">
          <button
            className="header-icon-button mobile-menu-trigger"
            type="button"
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? <X size={20} strokeWidth={1.7} /> : <Menu size={20} strokeWidth={1.7} />}
          </button>
        </div>

        <a className="brandmark" href="#home" aria-label="Aurelis home" onClick={closeMenu}>
          AURELIS<span className="brandmark__period">.</span>
        </a>

        <div className="header-utilities" aria-label="Store utilities">
          <span className="header-utilities__desktop">
            <span className="utility-placeholder" title="Search — coming soon" aria-label="Search">
              <Search size={18} strokeWidth={1.7} aria-hidden="true" />
            </span>
            <span className="utility-placeholder" title="Account — coming soon" aria-label="Account">
              <User size={18} strokeWidth={1.7} aria-hidden="true" />
            </span>
          </span>
          <span className="utility-placeholder utility-placeholder--cart" title="Cart — coming soon" aria-label="Cart">
            <ShoppingBag size={19} strokeWidth={1.7} aria-hidden="true" />
          </span>
        </div>
      </div>

      {isMenuOpen && (
        <nav
          className="mobile-nav"
          id="mobile-navigation"
          aria-label="Mobile navigation"
        >
          {NAV_LINKS.map((link) => (
            <a
              className="mobile-nav__link"
              href={link.href}
              key={link.label}
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
