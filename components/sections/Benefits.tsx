'use client';

import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import SectionTitle from '@/components/shared/SectionTitle';
import styles from './Benefits.module.scss';

const BENEFITS = [
  {
    number: '01',
    title: 'Proces 100% gestionat de noi',
    desc: 'De la pregatirea documentelor pana la inregistrarea finala, ne ocupam de fiecare detaliu. Tu semnezi, noi facem restul.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Consultanta personalizata',
    desc: 'Fiecare afacere este unica. Analizam situatia ta specifica si iti oferim solutii adaptate nevoilor tale reale.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Transparenta totala',
    desc: 'Stii in permanenta in ce stadiu se afla dosarul tau. Fara costuri ascunse, fara surprize neplacute.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Suport continuu',
    desc: 'Nu te lasam dupa infiintare. Iti oferim suport juridic si dupa finalizarea procesului, oricand ai nevoie.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    number: '05',
    title: 'Prezenta digitala profesionala',
    desc: 'Nu doar firma pe hartie — construim si prezenta ta online cu strategie de social media, continut si design profesional.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

/**
 * Premium benefits section with numbered items, gold icons, and staggered reveal.
 */
export default function Benefits() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className={styles.section} aria-label="Beneficii">
      <div className={styles.container}>
        <SectionTitle
          overline="Beneficii"
          title="De ce sa alegi JurisProConsult?"
          subtitle="Peste 10 ani de experienta in servicii juridice si digitale pentru antreprenori din Romania."
        />

        <div ref={ref} className={`${styles.grid} ${isVisible ? styles.visible : ''}`}>
          {BENEFITS.map((item, idx) => (
            <div
              key={idx}
              className={styles.card}
              style={{ transitionDelay: `${idx * 120}ms` }}
            >
              <div className={styles.cardHeader}>
                <span className={styles.number}>{item.number}</span>
                <div className={styles.icon}>{item.icon}</div>
              </div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
