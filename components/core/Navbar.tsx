'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { useScrollPosition } from '@/hooks/use-scroll-position';
import styles from './Navbar.module.scss';

/** Navigation links configuration */
const NAV_LINKS = [
  { href: '/', label: 'Acasa' },
  { href: '/servicii', label: 'Servicii' },
  { href: '/servicii/social-media', label: 'Social Media' },
  { href: '/contact', label: 'Contact' },
];

/**
 * Premium sticky navbar — transparent on top, solid on scroll.
 * Includes animated gold active indicator and mobile hamburger menu.
 */
export default function Navbar() {
  const pathname = usePathname();
  const isScrolled = useScrollPosition(50);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleMobile = () => setIsMobileOpen((prev) => !prev);
  const closeMobile = () => setIsMobileOpen(false);

  return (
    <header
      className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}
      role="banner"
    >
      <nav className={styles.navInner} aria-label="Navigare principala">
        {/* Logo */}
        <Link href="/" className={styles.logo} onClick={closeMobile}>
          <span className={styles.logoIcon}>JC</span>
          <span className={styles.logoText}>
            Juridic<span className={styles.logoAccent}>Consult</span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul className={styles.navLinks}>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`${styles.navLink} ${pathname === link.href ? styles.active : ''}`}
              >
                {link.label}
                <span className={styles.linkIndicator} />
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA button */}
        <Link href="/contact" className={styles.ctaButton}>
          Solicita oferta gratuita
        </Link>

        {/* Mobile hamburger */}
        <button
          className={`${styles.hamburger} ${isMobileOpen ? styles.hamburgerOpen : ''}`}
          onClick={toggleMobile}
          aria-label="Deschide meniul"
          aria-expanded={isMobileOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Mobile menu overlay */}
      {isMobileOpen && (
        <div className={styles.mobileOverlay} onClick={closeMobile}>
          <div className={styles.mobileMenu} onClick={(e) => e.stopPropagation()}>
            <ul className={styles.mobileLinks}>
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`${styles.mobileLink} ${pathname === link.href ? styles.active : ''}`}
                    onClick={closeMobile}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/contact" className={styles.mobileCta} onClick={closeMobile}>
              Solicita oferta gratuita
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
