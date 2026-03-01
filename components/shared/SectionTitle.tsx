'use client';

import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import styles from './SectionTitle.module.scss';

interface SectionTitleProps {
  overline?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

/**
 * Premium section title with optional overline label,
 * scroll-reveal animation, and gold accent line.
 */
export default function SectionTitle({
  overline,
  title,
  subtitle,
  centered = true,
}: SectionTitleProps) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`${styles.sectionTitle} ${centered ? styles.centered : ''} ${isVisible ? styles.visible : ''}`}
    >
      {overline && <span className={styles.overline}>{overline}</span>}
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.goldLine} />
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
}
