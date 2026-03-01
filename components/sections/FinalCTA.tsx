'use client';

import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import PremiumButton from '@/components/shared/PremiumButton';
import styles from './FinalCTA.module.scss';

/**
 * Final conversion CTA section with strong visual presence and gold gradient accents.
 */
export default function FinalCTA() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className={styles.section} aria-label="Call to action final">
      <div className={styles.bgGlow} aria-hidden="true" />
      <div ref={ref} className={`${styles.container} ${isVisible ? styles.visible : ''}`}>
        <span className={styles.overline}>Esti gata?</span>
        <h2 className={styles.title}>
          Fa primul pas spre
          <br />
          <span className={styles.accent}>afacerea ta de succes.</span>
        </h2>
        <p className={styles.subtitle}>
          Fie ca ai nevoie de servicii juridice sau de o prezenta online profesionala,
          te contactam noi in maxim 24 de ore. Consultanta initiala este gratuita.
        </p>
        <div className={styles.ctaButtons}>
          <PremiumButton href="/contact" variant="primary" size="large">
            Solicita oferta gratuita
          </PremiumButton>
          <PremiumButton href="/servicii/social-media" variant="outline" size="large">
            Descopera Social Media
          </PremiumButton>
        </div>
      </div>
    </section>
  );
}
