'use client';

import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import styles from './TestimonialCard.module.scss';

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  delay?: number;
}

/**
 * Premium testimonial card with gold quote mark and subtle hover glow.
 */
export default function TestimonialCard({
  quote,
  name,
  role,
  delay = 0,
}: TestimonialCardProps) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <blockquote
      ref={ref}
      className={`${styles.card} ${isVisible ? styles.visible : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <svg className={styles.quoteIcon} width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M10 16H6C6 12.686 8.686 10 12 10V6C6.478 6 2 10.478 2 16V26H12V16H10ZM24 16H20C20 12.686 22.686 10 26 10V6C20.478 6 16 10.478 16 16V26H26V16H24Z" fill="#C6A75E" opacity="0.3"/>
      </svg>
      <p className={styles.quote}>{quote}</p>
      <footer className={styles.author}>
        <div className={styles.avatar}>
          {name.charAt(0)}
        </div>
        <div>
          <cite className={styles.name}>{name}</cite>
          <span className={styles.role}>{role}</span>
        </div>
      </footer>
    </blockquote>
  );
}
