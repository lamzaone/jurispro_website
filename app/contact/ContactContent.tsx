'use client';

import React from "react"

import { useState } from 'react';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import styles from './contact.module.scss';

const SERVICE_OPTIONS = [
  'Infiintare SRL',
  'Infiintare PFA',
  'Modificari firma',
  'Consultanta juridica',
  'Servicii Social Media',
  'Altele',
];

/**
 * Contact page with lead generation form, company details,
 * map placeholder, and a sticky mobile CTA.
 */
export default function ContactContent() {
  const { ref: formRef, isVisible: formVisible } = useScrollReveal();
  const { ref: infoRef, isVisible: infoVisible } = useScrollReveal();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send data to a backend
    setIsSubmitted(true);
  };

  return (
    <main className={styles.page}>
      {/* Page hero */}
      <section className={styles.pageHero} aria-label="Contact header">
        <div className={styles.container}>
          <span className={styles.overline}>Contact</span>
          <h1 className={styles.pageTitle}>
            Hai sa discutam despre
            <br />
            <span className={styles.accent}>afacerea ta.</span>
          </h1>
          <p className={styles.pageSubtitle}>
            Completeaza formularul de mai jos si te contactam noi in maxim 24 de ore. Consultanta initiala este gratuita.
          </p>
        </div>
      </section>

      {/* Contact content */}
      <section className={styles.contactSection}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {/* Form */}
            <div
              ref={formRef}
              className={`${styles.formCard} ${formVisible ? styles.visible : ''}`}
            >
              {isSubmitted ? (
                <div className={styles.successMessage}>
                  <div className={styles.successIcon}>
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
                      <circle cx="24" cy="24" r="23" stroke="#C6A75E" strokeWidth="2"/>
                      <path d="M15 24L21 30L33 18" stroke="#C6A75E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 className={styles.successTitle}>Mesaj trimis cu succes!</h3>
                  <p className={styles.successText}>
                    Multumim pentru interesul acordat. Un consultant din echipa noastra te va contacta in cel mai scurt timp posibil.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className={styles.form}>
                  <h2 className={styles.formTitle}>Solicita oferta gratuita</h2>

                  <div className={styles.field}>
                    <label htmlFor="name" className={styles.label}>Nume complet</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Ex: Ion Popescu"
                      className={styles.input}
                    />
                  </div>

                  <div className={styles.fieldRow}>
                    <div className={styles.field}>
                      <label htmlFor="email" className={styles.label}>Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="email@exemplu.ro"
                        className={styles.input}
                      />
                    </div>
                    <div className={styles.field}>
                      <label htmlFor="phone" className={styles.label}>Telefon</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="+40 7XX XXX XXX"
                        className={styles.input}
                      />
                    </div>
                  </div>

                  <div className={styles.field}>
                    <label htmlFor="service" className={styles.label}>Tip serviciu</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className={styles.select}
                    >
                      <option value="" disabled>Selecteaza serviciul</option>
                      {SERVICE_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>

                  <div className={styles.field}>
                    <label htmlFor="message" className={styles.label}>Mesaj (optional)</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Spune-ne mai multe despre nevoile tale..."
                      className={styles.textarea}
                    />
                  </div>

                  <button type="submit" className={styles.submitButton}>
                    Trimite cererea
                  </button>

                  <p className={styles.microcopy}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#777" strokeWidth="1.5" aria-hidden="true">
                      <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Datele tale sunt 100% confidentiale.
                  </p>
                </form>
              )}
            </div>

            {/* Info sidebar */}
            <div
              ref={infoRef}
              className={`${styles.infoPanel} ${infoVisible ? styles.visible : ''}`}
            >
              <div className={styles.infoCard}>
                <h3 className={styles.infoTitle}>Informatii de contact</h3>

                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C6A75E" strokeWidth="1.5" aria-hidden="true">
                      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <span className={styles.infoLabel}>Email</span>
                    <a href="mailto:office@jurisproconsult.ro" className={`${styles.infoValue} ${styles.infoLink}`}>
                      office@jurisproconsult.ro
                    </a>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C6A75E" strokeWidth="1.5" aria-hidden="true">
                      <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <span className={styles.infoLabel}>Telefon</span>
                    <a href="tel:+40721000000" className={`${styles.infoValue} ${styles.infoLink}`}>
                      +40 721 000 000
                    </a>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C6A75E" strokeWidth="1.5" aria-hidden="true">
                      <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <span className={styles.infoLabel}>Program</span>
                    <span className={styles.infoValue}>Luni - Vineri: 09:00 - 18:00</span>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C6A75E" strokeWidth="1.5" aria-hidden="true">
                      <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <span className={styles.infoLabel}>Adresa</span>
                    <span className={styles.infoValue}>Str. Exemplu nr. 10, Timisoara</span>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className={styles.mapPlaceholder}>
                <div className={styles.mapOverlay}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C6A75E" strokeWidth="1.5" aria-hidden="true">
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Timisoara, Romania</span>
                </div>
              </div>

              {/* Trust elements */}
              <div className={styles.trustBadges}>
                <div className={styles.trustBadge}>
                  <span className={styles.trustValue}>500+</span>
                  <span className={styles.trustLabel}>Firme infiintate</span>
                </div>
                <div className={styles.trustBadge}>
                  <span className={styles.trustValue}>24h</span>
                  <span className={styles.trustLabel}>Timp de raspuns</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky mobile CTA */}
      <a href="tel:+40721000000" className={styles.stickyCta} aria-label="Suna acum">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        Suna acum
      </a>
    </main>
  );
}
