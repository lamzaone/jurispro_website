'use client';

import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import SectionTitle from '@/components/shared/SectionTitle';
import styles from './ProblemSolution.module.scss';

const PROBLEMS = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Drumuri inutile la institutii',
    desc: 'Ore pierdute in drumuri la Registrul Comertului, ANAF si alte institutii publice.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M9 12h6m-3-3v6m-7 4h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Documentatie complicata',
    desc: 'Formulare confuze, acte notariale si cerinte care se schimba constant.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M12 6v6l4 2m6-2a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Timp pretios pierdut',
    desc: 'Saptamani de asteptare si confuzie in loc sa te concentrezi pe afacerea ta.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Lipsa prezentei online',
    desc: 'Social media fara strategie, postari rare sau lipsa totala de vizibilitate digitala.',
  },
];

const SOLUTIONS = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Proces complet gestionat',
    desc: 'Ne ocupam de toate demersurile, de la A la Z.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Rapid si eficient',
    desc: 'Procesul dureaza zile, nu saptamani.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Siguranta juridica totala',
    desc: 'Totul este realizat conform legislatiei in vigoare.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Crestere digitala reala',
    desc: 'Strategie de social media construita pe obiective de business, nu la intamplare.',
  },
];

/**
 * Problem-Solution section: shows the pain points (bureaucracy)
 * then presents the firm's solution with gold-accented cards.
 */
export default function ProblemSolution() {
  const { ref: problemRef, isVisible: problemVisible } = useScrollReveal();
  const { ref: solutionRef, isVisible: solutionVisible } = useScrollReveal();

  return (
    <section className={styles.section} aria-label="Problema si solutie">
      <div className={styles.container}>
        <SectionTitle
          overline="De ce noi"
          title="Birocratia nu ar trebui sa iti incetineasca visul."
          subtitle="Multi antreprenori pierd timp cu birocratia si ignora prezenta online. Noi rezolvam ambele probleme."
        />

        {/* Problems */}
        <div ref={problemRef} className={`${styles.grid} ${problemVisible ? styles.visible : ''}`}>
          {PROBLEMS.map((item, idx) => (
            <div key={idx} className={styles.problemCard} style={{ transitionDelay: `${idx * 100}ms` }}>
              <div className={styles.problemIcon}>{item.icon}</div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Divider with arrow */}
        <div className={styles.divider}>
          <div className={styles.dividerLine} />
          <div className={styles.dividerIcon}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C6A75E" strokeWidth="2" aria-hidden="true">
              <path d="M12 5v14m0 0l-6-6m6 6l6-6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className={styles.dividerLine} />
        </div>

        {/* Solutions */}
        <div ref={solutionRef} className={`${styles.grid} ${solutionVisible ? styles.visible : ''}`}>
          {SOLUTIONS.map((item, idx) => (
            <div key={idx} className={styles.solutionCard} style={{ transitionDelay: `${idx * 100}ms` }}>
              <div className={styles.solutionIcon}>{item.icon}</div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
