import Link from 'next/link';
import styles from './OurStories.module.css';

const ArrowIcon = ({ color = 'black' }: { color?: string }) => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <path d="M2.5 6H9.5M9.5 6L6.5 3M9.5 6L6.5 9" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const cases = [
  {
    image: '/images/Layout/484/Gemini_Generated_Image_mrnhjfmrnhjfmrnh 1.png',
    imageAlt: 'E-Borders security infrastructure',
    imagePosition: 'object-bottom',
    title: 'Enhancing National Security through E-Borders Infrastructure Modernization',
    description:
      'A government border agency successfully modernized its E-Borders infrastructure through strategic leadership, secure networks, and virtualization, enhancing national security and operational efficiency.',
    href: '/case-studies/e-borders',
  },
  {
    image: '/images/Layout/484/NqA6w 1.png',
    imageAlt: 'Global financial network transformation',
    imagePosition: 'object-center',
    title: 'Strategic Network Transformation and Security Enhancement for Global Financial Institutions',
    description:
      'A global financial provider successfully deployed a secure IP-VPN across 5000 sites, achieving enhanced network security, major cost savings, and smooth merger integration.',
    href: '/case-studies/financial-network',
  },
];

export default function OurStories() {
  return (
    <section className={styles.section}>
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.titleBlock}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowLine} />
            <span className={styles.eyebrowText}>Case Studies</span>
          </div>
          <h2 className={styles.heading}>
            Delivering Results{' '}
            <span className={styles.headingMuted}>Making Impact</span>
          </h2>
        </div>
        <Link href="/case-studies" className={styles.viewAll}>
          <span className={styles.viewAllText}>View All</span>
          <span className={styles.viewAllArrow}>
            <ArrowIcon />
          </span>
        </Link>
      </div>

      {/* Cards */}
      <div className={styles.grid}>
        {cases.map((c, i) => (
          <div key={i} className={styles.card}>
            <div className={styles.cardImage}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={c.image} alt={c.imageAlt} className={c.imagePosition} />
            </div>
            <div className={styles.cardContent}>
              <div className={styles.cardText}>
                <p className={styles.cardTitle}>{c.title}</p>
                <p className={styles.cardDesc}>{c.description}</p>
              </div>
              <Link href={c.href} className={styles.learnMore}>
                <span className={styles.learnMoreText}>Learn More</span>
                <span className={styles.learnMoreArrow}>
                  <ArrowIcon />
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
