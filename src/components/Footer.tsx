import Link from 'next/link';
import styles from './Footer.module.css';

const offices = [
  { city: 'Lagos', address: '160, Awolowo Road\nIkoyi, Lagos, Nigeria' },
  { city: 'Abuja', address: '21 Lobito Crescent,\nWuse 2, Abuja, Nigeria' },
  { city: 'South Africa', address: 'Maine, 1 Amarand Ave,\nMenlyn, Pretoria, 0181,\nSouth Africa' },
  { city: 'Sierra Leone Office', address: '12A Main Motor Road,\nCongo Cross, Freetown,\nSierra Leone' },
];

const solutionsLinks = [
  { label: 'Policy & Advocacy Solutions', href: '/services/policy' },
  { label: 'Corporate Solutions', href: '/services/corporate' },
  { label: 'Technology solutions', href: '/services/technology' },
  { label: 'Strategic Communications', href: '/services/communications' },
];

const aboutLinks = [
  { label: 'Who We Are', href: '/about' },
  { label: 'Our Team', href: '/about#team' },
  { label: 'Our Values', href: '/about#values' },
];

const otherLinks = [
  { label: 'Case studies', href: '/case-studies' },
  { label: 'Insights & Perspectives', href: '/insights' },
  { label: 'Career', href: '/careers' },
  { label: 'Events', href: '/events' },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Office addresses */}
        <div className={styles.offices}>
          {offices.map((office) => (
            <div key={office.city} className={styles.officeItem}>
              <p className={styles.officeCity}>{office.city}</p>
              <p className={styles.officeAddress}>
                {office.address.split('\n').map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < office.address.split('\n').length - 1 && <br />}
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>

        {/* Links row */}
        <div className={styles.linksRow}>
          {/* Brand col */}
          <div className={styles.brandCol}>
            <div className={styles.brandInfo}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className={styles.logo}
                src="/logo/Footer/3/Layer_2.svg"
                alt="Nina Jojer"
              />
              <p className={styles.tagline}>
                Making a positive impact on the world of business in Sub-Saharan Africa.
              </p>
              <div className={styles.contact}>
                <div className={styles.contactRow}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/logo/Footer/3/phone_in_talk.svg" alt="" className={styles.contactIcon} />
                  <a href="tel:+2347020013234" className={styles.contactText}>
                    +234 (0)70 2001 3234
                  </a>
                </div>
                <div className={styles.contactRow}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/logo/Footer/3/mail.svg" alt="" className={styles.contactIcon} />
                  <span className={styles.contactText}>business@ninajojer.com</span>
                </div>
              </div>
              <div className={styles.socialLinks}>
                <a href="#" aria-label="LinkedIn" className={styles.socialIcon}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/logo/Footer/3/LinkedIn.svg" alt="LinkedIn" width={24} height={24} />
                </a>
                <a href="#" aria-label="YouTube" className={styles.socialIcon}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/logo/Footer/3/Youtube.svg" alt="YouTube" width={24} height={24} />
                </a>
              </div>
            </div>
            
            {/* Audit Compliance Certificate */}
            <div className={styles.badge}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/Footer/3/Screenshot 2026-05-13 at 11.01.47 PM 1.png"
                alt="NDPR Audit Compliant Badge"
                className={styles.badgeImg}
              />
            </div>
          </div>

          {/* Solutions links */}
          <div className={styles.linkList}>
            <span className={styles.linkListTitle}>Solutions</span>
            {solutionsLinks.map((l) => (
              <Link key={l.href} href={l.href} className={styles.linkItem}>
                {l.label}
              </Link>
            ))}
          </div>

          {/* About links */}
          <div className={styles.linkList}>
            <span className={styles.linkListTitle}>About Us</span>
            {aboutLinks.map((l) => (
              <Link key={l.href} href={l.href} className={styles.linkItem}>
                {l.label}
              </Link>
            ))}
          </div>

          {/* Other links */}
          <div className={styles.linkList}>
            <span className={styles.linkListTitle}>Other Links</span>
            {otherLinks.map((l) => (
              <Link key={l.href} href={l.href} className={styles.linkItem}>
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Credits */}
        <div className={styles.credits}>
          <div className={styles.divider} />
          <div className={styles.creditsRow}>
            <p>© 2025 Nina Jojer Africa. All rights reserved.</p>
            <div className={styles.footerLinks}>
              <Link href="/privacy" className={styles.footerLink}>
                Privacy policy
              </Link>
              <Link href="/terms" className={styles.footerLink}>
                Terms of service
              </Link>
              <Link href="/cookies" className={styles.footerLink}>
                Cookie settings
              </Link>
            </div>
          </div>
        </div>

        {/* Branding Outline Watermark Graphic */}
        <div className={styles.watermark}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/Footer/3/Layer_3.svg"
            alt="Nina Jojer Outline branding graphic"
            className={styles.watermarkImg}
          />
        </div>
      </div>
    </footer>
  );
}
