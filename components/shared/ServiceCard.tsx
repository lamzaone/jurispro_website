'use client';

import React from "react"

import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import PremiumButton from './PremiumButton';
import styles from './ServiceCard.module.scss';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits: string[];
  price: string;
  timeline: string;
  delay?: number;
  href?: string;
}

/**
 * Premium service card with gold accent icon, benefits list,
 * timeline, price hint, and CTA.
 */
export default function ServiceCard({
  icon,
  title,
  description,
  benefits,
  price,
  timeline,
  delay = 0,
  href,
}: ServiceCardProps) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <article
      ref={ref}
      className={`${styles.card} ${isVisible ? styles.visible : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className={styles.iconWrap}>{icon}</div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>

      <ul className={styles.benefits}>
        {benefits.map((benefit, idx) => (
          <li key={idx}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M13.3 4.3L6 11.6L2.7 8.3" stroke="#C6A75E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {benefit}
          </li>
        ))}
      </ul>

      <div className={styles.meta}>
        <div className={styles.metaItem}>
          <span className={styles.metaLabel}>Durata</span>
          <span className={styles.metaValue}>{timeline}</span>
        </div>
        <div className={styles.metaItem}>
          <span className={styles.metaLabel}>De la</span>
          <span className={styles.metaValue}>{price}</span>
        </div>
      </div>

      {href ? (
        <PremiumButton href={href} variant="primary">
          Vezi pachete si preturi
        </PremiumButton>
      ) : (
        <PremiumButton href="/contact" variant="outline">
          Solicita oferta
        </PremiumButton>
      )}
    </article>
  );
}
