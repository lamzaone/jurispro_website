'use client';

import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import SectionTitle from '@/components/shared/SectionTitle';
import TestimonialCard from '@/components/shared/TestimonialCard';
import styles from './SocialProof.module.scss';

const STATS = [
  { value: '500+', label: 'Firme infiintate' },
  { value: '10+', label: 'Ani experienta' },
  { value: '98%', label: 'Clienti recurenti' },
  { value: '24h', label: 'Timp de raspuns' },
  { value: '50+', label: 'Branduri gestionate online' },
];

const TESTIMONIALS = [
  {
    quote: 'Am reusit sa imi infiintez SRL-ul in mai putin de o saptamana. Echipa JurisProConsult a gestionat totul impecabil, iar eu nu a trebuit sa fac decat sa semnez. Recomand cu incredere!',
    name: 'Andrei Popescu',
    role: 'Fondator, TechStart SRL',
  },
  {
    quote: 'Profesionalism de exceptie. Au raspuns la toate intrebarile mele cu rabdare si au rezolvat toate modificarile de care aveam nevoie la firma. Cu siguranta voi apela din nou la serviciile lor.',
    name: 'Maria Ionescu',
    role: 'Administrator, Design Studio SRL',
  },
  {
    quote: 'Cea mai buna decizie a fost sa externalizez partea juridica catre JurisProConsult. Mi-am transformat PFA-ul in SRL fara niciun stres. Pret corect, servicii premium.',
    name: 'Cristian Dumitrescu',
    role: 'Consultant independent',
  },
];

/**
 * Social proof section: stats counters and testimonial cards.
 */
export default function SocialProof() {
  const { ref: statsRef, isVisible: statsVisible } = useScrollReveal();

  return (
    <section className={styles.section} aria-label="Social proof">
      <div className={styles.container}>
        {/* Stats */}
        <div ref={statsRef} className={`${styles.stats} ${statsVisible ? styles.visible : ''}`}>
          {STATS.map((stat, idx) => (
            <div key={idx} className={styles.statItem} style={{ transitionDelay: `${idx * 100}ms` }}>
              <span className={styles.statValue}>{stat.value}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <SectionTitle
          overline="Testimoniale"
          title="Ce spun clientii nostri"
          subtitle="Increderea clientilor este cel mai important lucru pentru noi."
        />

        <div className={styles.testimonials}>
          {TESTIMONIALS.map((t, idx) => (
            <TestimonialCard
              key={idx}
              quote={t.quote}
              name={t.name}
              role={t.role}
              delay={idx * 150}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
