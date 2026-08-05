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

type FeaturedCase = { _id: string; title: string; excerpt: string; image: string; slug: { current: string } | string };

export default async function OurStories() {
  let cases: FeaturedCase[] = [];
  try {
    cases = await client.fetch<FeaturedCase[]>(featuredCaseStudiesQuery);
  } catch { /* Sanity not configured yet */ }

  if (!cases.length) return null;

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
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
              <Link href={`/case-studies/${slug}`} style={{ display: 'contents', color: 'inherit', textDecoration: 'none' }}>
              <div className={styles.cardImage}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={c.image} alt={c.title} />
              </div>
              <div className={styles.cardContent}>
                <div className={styles.cardText}>
                  <p className={styles.cardTitle}>{c.title}</p>
                  <p className={styles.cardDesc}>{c.excerpt}</p>
                </div>
                <span className={styles.learnMore}>
                  <span className={styles.learnMoreText}>Learn More</span>
                  <span className={styles.learnMoreArrow}><ArrowIcon /></span>
                </span>
              </div>
              </Link>
            </Reveal>
          );
        })}
      </div>
      </div>
    </section>
  );
}
