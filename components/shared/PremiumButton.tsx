'use client';

import React from "react"

import Link from 'next/link';
import styles from './PremiumButton.module.scss';

interface PremiumButtonProps {
  href?: string;
  variant?: 'primary' | 'outline';
  size?: 'default' | 'large';
  children: React.ReactNode;
  type?: 'button' | 'submit';
  onClick?: () => void;
}

/**
 * Premium gold button — primary (filled) or outline variant.
 * Renders as a Link when href is provided, otherwise as a button.
 */
export default function PremiumButton({
  href,
  variant = 'primary',
  size = 'default',
  children,
  type = 'button',
  onClick,
}: PremiumButtonProps) {
  const className = `${styles.button} ${styles[variant]} ${styles[size]}`;

  if (href) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={className} onClick={onClick}>
      {children}
    </button>
  );
}
