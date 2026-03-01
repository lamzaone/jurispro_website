'use client';

import SectionTitle from '@/components/shared/SectionTitle';
import ServiceCard from '@/components/shared/ServiceCard';
import PremiumButton from '@/components/shared/PremiumButton';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import styles from './servicii.module.scss';

/** Icons for service cards */
const SrlIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0H5m14 0h2m-16 0H3m2-8h4m-4 4h4m6-4h.01M17 15h.01" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const PfaIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ModificariIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    <path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ConsultantaIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    <path d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const SocialMediaIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    <path d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const SERVICES = [
  {
    icon: <SrlIcon />,
    title: 'Infiintare SRL',
    description: 'Infiintam societatea ta cu raspundere limitata rapid si profesional, cu toate actele necesare incluse.',
    benefits: [
      'Redactare act constitutiv',
      'Rezervare denumire firma',
      'Obtinere sediu social',
      'Inregistrare la Registrul Comertului',
      'Obtinere CUI si certificate',
    ],
    price: '500 RON',
    timeline: '3-7 zile lucratoare',
  },
  {
    icon: <PfaIcon />,
    title: 'Infiintare PFA',
    description: 'Persoana fizica autorizata — solutia ideala pentru freelanceri si consultanti independenti.',
    benefits: [
      'Consultanta alegere cod CAEN',
      'Pregatire documente complete',
      'Depunere dosar',
      'Obtinere certificat de inregistrare',
      'Consiliere fiscala initiala',
    ],
    price: '300 RON',
    timeline: '2-5 zile lucratoare',
  },
  {
    icon: <ModificariIcon />,
    title: 'Modificari firma',
    description: 'Schimbari de asociati, sediu social, obiect de activitate, majorare capital si orice alta modificare.',
    benefits: [
      'Modificare act constitutiv',
      'Schimbare sediu social',
      'Adaugare/eliminare asociati',
      'Modificare obiect activitate',
      'Majorare/reducere capital social',
    ],
    price: '400 RON',
    timeline: '5-10 zile lucratoare',
  },
  {
    icon: <ConsultantaIcon />,
    title: 'Consultanta juridica',
    description: 'Consultanta juridica personalizata pentru antreprenori, de la infiintare pana la dezvoltarea afacerii.',
    benefits: [
      'Analiza situatie juridica',
      'Recomandari forma juridica',
      'Consultanta contractuala',
      'Asistenta negocieri',
      'Suport juridic continuu',
    ],
    price: '200 RON / ora',
    timeline: 'La cerere',
  },
];

const STEPS = [
  {
    number: '01',
    title: 'Completezi formularul',
    desc: 'Ne spui ce serviciu te intereseaza si cateva detalii despre afacerea ta.',
  },
  {
    number: '02',
    title: 'Te contactam',
    desc: 'Un consultant dedicat te va suna in maxim 24 de ore pentru detalii.',
  },
  {
    number: '03',
    title: 'Ne ocupam de documentatie',
    desc: 'Pregatim si depunem toate documentele necesare in numele tau.',
  },
  {
    number: '04',
    title: 'Firma ta este gata',
    desc: 'Primesti toate actele si esti gata sa incepi activitatea.',
  },
];

export default function ServiciiContent() {
  const { ref: stepsRef, isVisible: stepsVisible } = useScrollReveal();

  return (
    <main className={styles.page}>
      {/* Page hero */}
      <section className={styles.pageHero} aria-label="Servicii header">
        <div className={styles.container}>
          <span className={styles.overline}>Serviciile noastre</span>
          <h1 className={styles.pageTitle}>
            Solutii juridice si digitale
            <br />
            <span className={styles.accent}>pentru antreprenori.</span>
          </h1>
          <p className={styles.pageSubtitle}>
            De la infiintare pana la consultanta continua si prezenta online, acoperim toate nevoile afacerii tale.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className={styles.servicesSection} aria-label="Lista servicii">
        <div className={styles.container}>
          <div className={styles.servicesGrid}>
            {SERVICES.map((service, idx) => (
              <ServiceCard key={idx} {...service} delay={idx * 120} />
            ))}
          </div>
        </div>
      </section>

      {/* Social media feature highlight */}
      <section className={styles.smHighlight} aria-label="Social Media highlight">
        <div className={styles.container}>
          <div className={styles.smHighlightInner}>
            <div className={styles.smHighlightContent}>
              <span className={styles.smOverline}>Nou</span>
              <h2 className={styles.smTitle}>
                Social media cu strategie,
                <br />
                <span className={styles.accent}>nu la intamplare.</span>
              </h2>
              <p className={styles.smDesc}>
                O prezenta online eficienta nu inseamna sa postezi mult. Inseamna sa postezi corect.
                Continut optimizat pentru Instagram, Facebook si TikTok, construit pe strategie,
                logica de business si obiective clare.
              </p>
              <div className={styles.smFeatures}>
                <div className={styles.smFeature}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C6A75E" strokeWidth="1.5" aria-hidden="true">
                    <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Pachete de la 200 EUR / luna</span>
                </div>
                <div className={styles.smFeature}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C6A75E" strokeWidth="1.5" aria-hidden="true">
                    <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Continut video, design si copywriting</span>
                </div>
                <div className={styles.smFeature}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C6A75E" strokeWidth="1.5" aria-hidden="true">
                    <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Strategie bazata pe psihologia clientului</span>
                </div>
              </div>
              <PremiumButton href="/servicii/social-media" variant="primary">
                Descopera pachetele Social Media
              </PremiumButton>
            </div>
            <div className={styles.smHighlightVisual} aria-hidden="true">
              <div className={styles.smPlatform}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="2" width="20" height="20" rx="5" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="12" r="5" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/>
                </svg>
                <span>Instagram</span>
              </div>
              <div className={styles.smPlatform}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Facebook</span>
              </div>
              <div className={styles.smPlatform}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M9 12a3 3 0 106 0 3 3 0 00-6 0zm3-9C6.5 3 2 7.5 2 12s4.5 9 10 9 10-4.5 10-9-4.5-9-10-9z" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M15 8.5c1 1 1.5 2.2 1.5 3.5" strokeLinecap="round"/>
                </svg>
                <span>TikTok</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works (timeline) */}
      <section className={styles.howItWorks} aria-label="Cum functioneaza">
        <div className={styles.container}>
          <SectionTitle
            overline="Procesul"
            title="Cum functioneaza colaborarea?"
            subtitle="Un proces simplu, in 4 pasi, prin care ne asiguram ca totul decurge perfect."
          />

          <div ref={stepsRef} className={`${styles.stepsGrid} ${stepsVisible ? styles.visible : ''}`}>
            {STEPS.map((step, idx) => (
              <div
                key={idx}
                className={styles.step}
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                <span className={styles.stepNumber}>{step.number}</span>
                <div className={styles.stepLine} aria-hidden="true" />
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection} aria-label="Call to action">
        <div className={styles.container}>
          <h2 className={styles.ctaTitle}>Pregatit sa incepi?</h2>
          <p className={styles.ctaSubtitle}>
            Solicita o oferta personalizata gratuita. Raspundem in maxim 24h.
          </p>
          <PremiumButton href="/contact" variant="primary" size="large">
            Solicita oferta gratuita
          </PremiumButton>
        </div>
      </section>
    </main>
  );
}
