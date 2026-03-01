'use client';

import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import PremiumButton from '@/components/shared/PremiumButton';
import styles from './SocialMediaPreview.module.scss';

const HIGHLIGHTS = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Strategie, nu intamplare',
    desc: 'Fiecare postare e gandita pentru a genera rezultate de business concrete.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Crestere reala',
    desc: 'Continut care transforma urmaritorii in clienti fideli.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Imagine profesionala',
    desc: 'Brand positioning corect ce inspira incredere din prima secunda.',
  },
];

/**
 * Social Media Preview section for the home page —
 * a feature callout banner with highlights and CTA to the dedicated SM page.
 */
export default function SocialMediaPreview() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className={styles.section} aria-label="Social Media Preview">
      <div className={styles.container}>
        <div ref={ref} className={`${styles.banner} ${isVisible ? styles.visible : ''}`}>
          {/* Left: content */}
          <div className={styles.content}>
            <span className={styles.overline}>Servicii Social Media</span>
            <h2 className={styles.title}>
              Prezenta ta online merita
              <br />
              <span className={styles.accent}>o strategie reala.</span>
            </h2>
            <p className={styles.desc}>
              Continut profesional pentru Instagram, Facebook si TikTok.
              Pachete lunare care includ video-uri scurte, design, copywriting si strategie de comunicare.
            </p>
            <PremiumButton href="/servicii/social-media" variant="primary">
              Vezi pachetele Social Media
            </PremiumButton>
          </div>

          {/* Right: highlight cards */}
          <div className={styles.highlights}>
            {HIGHLIGHTS.map((item, idx) => (
              <div
                key={idx}
                className={styles.highlightCard}
                style={{ transitionDelay: `${200 + idx * 120}ms` }}
              >
                <div className={styles.highlightIcon}>{item.icon}</div>
                <div>
                  <h3 className={styles.highlightTitle}>{item.title}</h3>
                  <p className={styles.highlightDesc}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
