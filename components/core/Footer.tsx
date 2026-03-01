import Link from 'next/link';
import styles from './Footer.module.scss';

/**
 * Premium footer with firm details, quick links, and legal info.
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Brand column */}
          <div className={styles.brand}>
            <div className={styles.logo}>
              <span className={styles.logoIcon}>JC</span>
              <span className={styles.logoText}>
                Juridic<span className={styles.logoAccent}>Consult</span>
              </span>
            </div>
            <p className={styles.brandDesc}>
              Consultanta juridica premium pentru antreprenori. Ne ocupam de birocratie, tu te ocupi de afacerea ta.
            </p>
          </div>

          {/* Quick links */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Navigare</h4>
            <ul className={styles.linksList}>
              <li><Link href="/">Acasa</Link></li>
              <li><Link href="/servicii">Servicii</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Servicii</h4>
            <ul className={styles.linksList}>
              <li><Link href="/servicii">Infiintare SRL</Link></li>
              <li><Link href="/servicii">Infiintare PFA</Link></li>
              <li><Link href="/servicii">Modificari firma</Link></li>
              <li><Link href="/servicii">Consultanta juridica</Link></li>
            </ul>
          </div>

          {/* Contact info */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Contact</h4>
            <ul className={styles.contactList}>
              <li>
                <span className={styles.contactLabel}>Email</span>
                <a href="mailto:office@juridicconsult.ro">office@juridicconsult.ro</a>
              </li>
              <li>
                <span className={styles.contactLabel}>Telefon</span>
                <a href="tel:+40721000000">+40 721 000 000</a>
              </li>
              <li>
                <span className={styles.contactLabel}>Program</span>
                <span>Luni - Vineri: 09:00 - 18:00</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            &copy; {currentYear} JuridicConsult. Toate drepturile rezervate.
          </p>
          <div className={styles.legalLinks}>
            <Link href="/">Politica de confidentialitate</Link>
            <Link href="/">Termeni si conditii</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
