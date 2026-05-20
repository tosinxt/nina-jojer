import Link from 'next/link';
import Reveal from './Reveal';
import styles from './OurStories.module.css';
import { client } from '@/sanity/client';
import { featuredCaseStudiesQuery } from '@/sanity/queries';

const ArrowIcon = () => (
  <svg width="7" height="10" viewBox="0 0 10 14" fill="none">
    <path d="M2 1L8 7L2 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const fallbackCases = [
  {
    _id: '1',
    image: '/images/Layout/484/Gemini_Generated_Image_mrnhjfmrnhjfmrnh 1.png',
    title: 'Enhancing National Security through E-Borders Infrastructure Modernization',
    excerpt: 'A government border agency successfully modernized its E-Borders infrastructure through strategic leadership, secure networks, and virtualization, enhancing national security and operational efficiency.',
    slug: 'e-borders',
  },
  {
    _id: '2',
    image: '/images/Layout/484/NqA6w 1.png',
    title: 'Strategic Network Transformation and Security Enhancement for Global Financial Institutions',
    excerpt: 'A global financial provider successfully deployed a secure IP-VPN across 5000 sites, achieving enhanced network security, major cost savings, and smooth merger integration.',
    slug: 'financial-network',
  },
];

type FeaturedCase = { _id: string; title: string; excerpt: string; image: string; slug: { current: string } | string };

export default async function OurStories() {
  let cases: FeaturedCase[] = [];
  try {
    cases = await client.fetch<FeaturedCase[]>(featuredCaseStudiesQuery);
  } catch { /* Sanity not configured yet */ }
  if (!cases?.length) cases = fallbackCases as FeaturedCase[];

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <Reveal as="div" className={styles.titleBlock}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowLine} />
            <span className={styles.eyebrowText}>Case Studies</span>
          </div>
          <h2 className={styles.heading}>
            Delivering Results{' '}
            <span className={styles.headingMuted}>Making Impact</span>
          </h2>
          <Link href="/case-studies" className={`${styles.viewAll} ${styles.viewAllMobile}`}>
            <span className={styles.viewAllText}>View All</span>
            <span className={styles.viewAllArrow}><ArrowIcon /></span>
          </Link>
        </Reveal>
        <Reveal delay={150}>
        <Link href="/case-studies" className={`${styles.viewAll} ${styles.viewAllDesktop}`}>
          <span className={styles.viewAllText}>View All</span>
          <span className={styles.viewAllArrow}><ArrowIcon /></span>
        </Link>
        </Reveal>
      </div>

      <div className={styles.grid}>
        {cases.map((c, i) => {
          const slug = typeof c.slug === 'string' ? c.slug : c.slug?.current;
          return (
            <Reveal key={c._id} as="div" delay={i * 100} className={styles.card}>
              <div className={styles.cardImage}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={c.image} alt={c.title} />
              </div>
              <div className={styles.cardContent}>
                <div className={styles.cardText}>
                  <p className={styles.cardTitle}>{c.title}</p>
                  <p className={styles.cardDesc}>{c.excerpt}</p>
                </div>
                <Link href={`/case-studies/${slug}`} className={styles.learnMore}>
                  <span className={styles.learnMoreText}>Learn More</span>
                  <span className={styles.learnMoreArrow}><ArrowIcon /></span>
                </Link>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
