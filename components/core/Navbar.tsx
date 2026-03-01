'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { useScrollPosition } from '@/hooks/use-scroll-position';
import styles from './Navbar.module.scss';

type NavItem = {
  href: string;
  label: string;
  submenu?: Array<{
    href: string;
    label: string;
  }>;
};

/** Navigation links configuration */
const NAV_ITEMS: NavItem[] = [
  { href: '/', label: 'Acasa' },
  {
    href: '/servicii',
    label: 'Servicii',
    submenu: [
      { href: '/servicii', label: 'Juridice' },
      { href: '/servicii/social-media', label: 'Social Media' },
    ],
  },
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
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const toggleMobile = () => setIsMobileOpen((prev) => !prev);
  const closeMobile = () => {
    setIsMobileOpen(false);
    setActiveSubmenu(null);
  };
  const clearCloseTimer = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };
  const closeSubmenu = () => {
    clearCloseTimer();
    setActiveSubmenu(null);
  };
  const closeSubmenuWithDelay = (delayMs = 1000) => {
    clearCloseTimer();
    closeTimerRef.current = setTimeout(() => {
      setActiveSubmenu(null);
      closeTimerRef.current = null;
    }, delayMs);
  };
  const isLinkActive = (href: string) =>
    href === '/servicii' ? pathname.startsWith('/servicii') : pathname === href;

  useEffect(() => () => clearCloseTimer(), []);

  return (
    <header
      className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}
      role="banner"
    >
      <nav className={styles.navInner} aria-label="Navigare principala">
        {/* Logo */}
        <Link href="/" className={styles.logo} onClick={closeMobile}>
          <Image
            src="/logo-nobg.png"
            alt="JurisProConsult logo"
            width={40}
            height={40}
            className={styles.logoImage}
            priority
          />
          <span className={styles.logoText}>
            JurisPro<span className={styles.logoAccent}>Consult</span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul className={styles.navLinks}>
          {NAV_ITEMS.map((item) => (
            <li
              key={item.href}
              className={`${styles.navItem} ${item.submenu ? styles.navItemWithSubmenu : ''}`}
              onMouseEnter={item.submenu ? () => setActiveSubmenu(item.href) : undefined}
              onMouseLeave={item.submenu ? closeSubmenu : undefined}
            >
              <Link
                href={item.href}
                className={`${styles.navLink} ${isLinkActive(item.href) ? styles.active : ''}`}
                onClick={closeSubmenu}
              >
                {item.label}
                <span className={styles.linkIndicator} />
              </Link>
              {item.submenu && (
                <ul
                  className={`${styles.submenu} ${activeSubmenu === item.href ? styles.submenuOpen : ''}`}
                  aria-label={`${item.label} submeniu`}
                >
                  {item.submenu.map((subItem) => (
                    <li key={subItem.href}>
                      <Link
                        href={subItem.href}
                        className={`${styles.submenuLink} ${pathname === subItem.href ? styles.submenuActive : ''}`}
                        onClick={() => closeSubmenuWithDelay(1000)}
                      >
                        {subItem.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
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
              {NAV_ITEMS.map((item) => (
                <li key={item.href} className={styles.mobileItem}>
                  <Link
                    href={item.href}
                    className={`${styles.mobileLink} ${isLinkActive(item.href) ? styles.active : ''}`}
                    onClick={closeMobile}
                  >
                    {item.label}
                  </Link>
                  {item.submenu && (
                    <ul className={styles.mobileSubmenu}>
                      {item.submenu.map((subItem) => (
                        <li key={subItem.href}>
                          <Link
                            href={subItem.href}
                            className={`${styles.mobileSubmenuLink} ${pathname === subItem.href ? styles.active : ''}`}
                            onClick={closeMobile}
                          >
                            {subItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
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
