'use client';

import { useState } from 'react';
import SectionTitle from '@/components/shared/SectionTitle';
import styles from './FAQ.module.scss';

const FAQ_ITEMS = [
  {
    question: 'Cat dureaza infiintarea unui SRL?',
    answer: 'In conditii normale, procesul de infiintare a unui SRL dureaza intre 3-7 zile lucratoare. Ne ocupam de pregatirea tuturor documentelor si depunerea dosarului la Registrul Comertului.',
  },
  {
    question: 'Ce acte sunt necesare pentru infiintarea firmei?',
    answer: 'Actele necesare includ: carte de identitate, dovada sediului social (contract de inchiriere sau act de proprietate), specimen de semnatura si declaratii pe propria raspundere. Va ghidam pas cu pas prin intregul proces.',
  },
  {
    question: 'Pot face totul online, fara sa vin la birou?',
    answer: 'Da, marea majoritate a procesului poate fi realizata online sau prin corespondenta. Singura etapa care poate necesita prezenta fizica este autentificarea actelor la notar, dar va ajutam sa gasiti solutii convenabile.',
  },
  {
    question: 'Care sunt costurile totale?',
    answer: 'Costurile variaza in functie de tipul de serviciu ales. Oferim transparenta totala - veti cunoaste costul complet inainte de a incepe. Nu exista costuri ascunse. Solicitati o oferta personalizata gratuita.',
  },
  {
    question: 'Ce se intampla dupa infiintarea firmei?',
    answer: 'Dupa finalizare, va oferim documentatia completa si va putem recomanda servicii de contabilitate. Ramanem la dispozitia dumneavoastra pentru orice modificari sau consultanta ulterioara.',
  },
  {
    question: 'Ce diferentiaza JurisProConsult de alte firme?',
    answer: 'Experienta de peste 10 ani, transparenta totala in privinta costurilor, comunicare constanta si suport dupa finalizarea procesului. 98% dintre clientii nostri revin sau ne recomanda.',
  },
  {
    question: 'Oferiti si servicii de social media?',
    answer: 'Da, oferim pachete complete de administrare social media pentru Instagram, Facebook si TikTok. Fiecare pachet include continut personalizat, design profesional, video-uri scurte si strategie de comunicare coerenta. Pachetele pornesc de la 200 EUR pe luna.',
  },
];

/**
 * FAQ accordion section to eliminate objections and build trust.
 */
export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className={styles.section} aria-label="Intrebari frecvente">
      <div className={styles.container}>
        <SectionTitle
          overline="FAQ"
          title="Intrebari frecvente"
          subtitle="Raspunsuri la cele mai comune intrebari primite de la clientii nostri."
        />

        <div className={styles.accordion} role="list">
          {FAQ_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className={`${styles.item} ${openIndex === idx ? styles.open : ''}`}
              role="listitem"
            >
              <button
                className={styles.question}
                onClick={() => toggle(idx)}
                aria-expanded={openIndex === idx}
              >
                <span>{item.question}</span>
                <svg
                  className={styles.chevron}
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  aria-hidden="true"
                >
                  <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <div className={styles.answer}>
                <div className={styles.answerInner}>
                  <p>{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
