'use client';

import SectionTitle from '@/components/shared/SectionTitle';
import PremiumButton from '@/components/shared/PremiumButton';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import styles from './social-media.module.scss';

/* ──────────────────────────── SVG icons ──────────────────────────────── */
const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M13.3 4.3L6 11.6L2.7 8.3" stroke="#C6A75E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const XIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M12 4L4 12M4 4l8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

/* ────────────────────────── Pricing tiers ─────────────────────────────── */
const PACKAGES = [
  {
    name: 'Start',
    price: '200',
    currency: 'EUR',
    features: [
      '10 postari / luna',
      '2 video-uri scurte',
      'Continut personalizat pentru brand',
      'Design profesional',
      'Adaptare pentru fiecare platforma',
    ],
    featured: false,
  },
  {
    name: 'Crestere',
    price: '300',
    currency: 'EUR',
    features: [
      '13 postari / luna',
      '5 video-uri scurte',
      'Texte optimizate pentru engagement',
      'Design profesional avansat',
      'Strategie de comunicare coerenta',
      'Raport lunar de performanta',
    ],
    featured: true,
  },
  {
    name: 'Premium',
    price: '500',
    currency: 'EUR',
    features: [
      '18 postari / luna',
      '8 video-uri scurte',
      'Continut bazat pe psihologia clientului',
      'Structuri de postari care vand',
      'Brand positioning corect',
      'Strategie avansata de comunicare',
      'Management complet al conturilor',
    ],
    featured: false,
  },
];

/* ───────────────────── Value propositions ──────────────────────────── */
const VALUES = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Strategie, nu intamplare',
    desc: 'Fiecare postare este gandita strategic, bazata pe psihologia clientului si pe obiectivele tale de business.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Structuri care vand',
    desc: 'Folosim structuri de copywriting dovedite care transforma scroll-ul in actiune si urmaritorii in clienti.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Mesaje clare si convingatore',
    desc: 'Comunicare profesionala care construieste incredere si pozitioneaza brandul tau ca lider in domeniu.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Imagine profesionala si credibila',
    desc: 'Design consistent si brand positioning corect care inspira incredere din prima secunda.',
  },
];

export default function SocialMediaContent() {
  const { ref: pricingRef, isVisible: pricingVisible } = useScrollReveal();
  const { ref: valueRef, isVisible: valueVisible } = useScrollReveal();

  return (
    <main className={styles.page}>
      {/* ─── Hero ──────────────────────────────────────────── */}
      <section className={styles.pageHero} aria-label="Social media hero">
        <div className={styles.container}>
          <span className={styles.overline}>Servicii Social Media</span>
          <h1 className={styles.pageTitle}>
            Social media cu strategie,
            <br />
            <span className={styles.accent}>nu la intamplare.</span>
          </h1>
          <p className={styles.pageSubtitle}>
            O prezenta online eficienta nu inseamna sa postezi mult. Inseamna sa postezi corect.
            Continut optimizat pentru Instagram, Facebook si TikTok, construit pe strategie,
            logica de business si obiective clare.
          </p>
          <div className={styles.platforms}>
            <span className={styles.platform}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="12" r="5" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/>
              </svg>
              Instagram
            </span>
            <span className={styles.platform}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Facebook
            </span>
            <span className={styles.platform}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path d="M9 12a3 3 0 106 0 3 3 0 00-6 0zm3-9C6.5 3 2 7.5 2 12s4.5 9 10 9 10-4.5 10-9-4.5-9-10-9z" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M15 8.5c1 1 1.5 2.2 1.5 3.5" strokeLinecap="round"/>
              </svg>
              TikTok
            </span>
          </div>
        </div>
      </section>

      {/* ─── Pricing ───────────────────────────────────────── */}
      <section className={styles.pricingSection} aria-label="Pachete de pret">
        <div className={styles.container}>
          <SectionTitle
            overline="Pachete"
            title="Alege pachetul potrivit afacerii tale"
            subtitle="Fiecare pachet include continut personalizat, design profesional si adaptare pentru fiecare platforma."
          />

          <div ref={pricingRef} className={styles.pricingGrid}>
            {PACKAGES.map((pkg, idx) => (
              <article
                key={idx}
                className={`${styles.pricingCard} ${pricingVisible ? styles.visible : ''} ${pkg.featured ? styles.featured : ''}`}
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                {pkg.featured && <span className={styles.featuredBadge}>Recomandat</span>}
                <h3 className={styles.cardName}>{pkg.name}</h3>
                <div className={styles.cardPriceWrap}>
                  <span className={styles.cardPrice}>{pkg.price}</span>
                  <span className={styles.cardPricePer}>{pkg.currency} / luna</span>
                </div>
                <div className={styles.cardDivider} />
                <span className={styles.cardIncludes}>Include:</span>
                <div className={styles.cardFeatures}>
                  {pkg.features.map((feat, fIdx) => (
                    <div key={fIdx} className={styles.cardFeature}>
                      <CheckIcon />
                      {feat}
                    </div>
                  ))}
                </div>
                <PremiumButton href="/contact" variant={pkg.featured ? 'primary' : 'outline'}>
                  Solicita oferta
                </PremiumButton>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── De ce noi ─────────────────────────────────────── */}
      <section className={styles.valueSection} aria-label="De ce JurisProConsult">
        <div className={styles.container}>
          <SectionTitle
            overline="De ce noi"
            title="De ce JurisProConsult?"
            subtitle="Pentru ca noi lucram cu strategie, nu la intamplare."
          />

          <div ref={valueRef} className={styles.valueGrid}>
            {VALUES.map((val, idx) => (
              <div
                key={idx}
                className={`${styles.valueCard} ${valueVisible ? styles.visible : ''}`}
                style={{ transitionDelay: `${idx * 120}ms` }}
              >
                <div className={styles.valueIcon}>{val.icon}</div>
                <div className={styles.valueContent}>
                  <h3 className={styles.valueTitle}>{val.title}</h3>
                  <p className={styles.valueDesc}>{val.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Promise (not / yes) ───────────────────────────── */}
      <section className={styles.promiseSection} aria-label="Promisiunea noastra">
        <div className={styles.container}>
          <SectionTitle
            overline="Promisiunea noastra"
            title="Ce poti astepta de la noi"
            subtitle="Social media nu mai inseamna postam ca sa fim prezenti. Inseamna strategie, influenta si conversie."
          />

          <div className={styles.promiseGrid}>
            <div className={styles.promiseLeft}>
              <h3 className={styles.promiseNotTitle}>Nu promitem:</h3>
              <div className={styles.promiseNotList}>
                <div className={styles.promiseNotItem}>
                  <XIcon />
                  Viralizare garantata
                </div>
                <div className={styles.promiseNotItem}>
                  <XIcon />
                  Milioane de vizualizari peste noapte
                </div>
                <div className={styles.promiseNotItem}>
                  <XIcon />
                  Rezultate fara strategie
                </div>
              </div>
            </div>

            <div className={styles.promiseRight}>
              <h3 className={styles.promiseYesTitle}>Promitem:</h3>
              <div className={styles.promiseYesList}>
                <div className={styles.promiseYesItem}>
                  <CheckIcon />
                  Crestere reala si masurabila
                </div>
                <div className={styles.promiseYesItem}>
                  <CheckIcon />
                  Consistenta in comunicare
                </div>
                <div className={styles.promiseYesItem}>
                  <CheckIcon />
                  Imagine profesionala si credibila
                </div>
                <div className={styles.promiseYesItem}>
                  <CheckIcon />
                  Pozitionare corecta in piata
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Final CTA ─────────────────────────────────────── */}
      <section className={styles.ctaSection} aria-label="Call to action">
        <div className={styles.container}>
          <span className={styles.ctaTagline}>Construim branduri. Cream vizibilitate. Generam incredere.</span>
          <h2 className={styles.ctaTitle}>
            Pentru afaceri care vor mai mult decat prezenta online.
          </h2>
          <p className={styles.ctaSubtitle}>
            Pentru afaceri care vor crestere reala. Solicita o oferta personalizata astazi.
          </p>
          <PremiumButton href="/contact" variant="primary" size="large">
            Solicita oferta gratuita
          </PremiumButton>
        </div>
      </section>
    </main>
  );
}
