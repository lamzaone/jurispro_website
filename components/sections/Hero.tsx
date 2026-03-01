'use client';

import { useEffect, useRef } from 'react';
import PremiumButton from '@/components/shared/PremiumButton';
import styles from './Hero.module.scss';

/**
 * Hero section with parallax background, animated headline,
 * social proof badge, and dual CTAs for maximum conversion.
 */
export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  // Parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrollY = window.scrollY;
      const overlay = heroRef.current.querySelector(`.${styles.parallaxBg}`) as HTMLElement;
      if (overlay) {
        overlay.style.transform = `translateY(${scrollY * 0.3}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={heroRef} className={styles.hero} aria-label="Hero">
      {/* Parallax background layer */}
      <div className={styles.parallaxBg}>
        <div className={styles.gridPattern} />
        <div className={styles.glowOrb} />
        <div className={styles.glowOrbSecondary} />
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          {/* Badge — social proof */}
          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            500+ firme infiintate
          </div>

          {/* Headline */}
          <h1 className={styles.title}>
            Infiinteaza-ti firma
            <br />
            <span className={styles.titleAccent}>rapid, legal si fara complicatii.</span>
          </h1>

          {/* Subtitle */}
          <p className={styles.subtitle}>
            Ne ocupam noi de tot procesul, iar tu te concentrezi pe dezvoltarea afacerii.
            Consultanta juridica premium pentru antreprenori ambitiosi.
          </p>

          {/* CTAs */}
          <div className={styles.ctas}>
            <PremiumButton href="/contact" variant="primary" size="large">
              Solicita oferta gratuita
            </PremiumButton>
            <PremiumButton href="/servicii" variant="outline" size="large">
              Vezi serviciile
            </PremiumButton>
          </div>

          {/* Microcopy trust signal */}
          <p className={styles.microcopy}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M8 1L10 5.5L15 6.2L11.5 9.5L12.4 14.5L8 12.2L3.6 14.5L4.5 9.5L1 6.2L6 5.5L8 1Z" fill="#C6A75E"/>
            </svg>
            Raspundem in maxim 24h &bull; Consultanta initiala gratuita
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollIndicator} aria-hidden="true">
        <div className={styles.scrollLine} />
      </div>
    </section>
  );
}
