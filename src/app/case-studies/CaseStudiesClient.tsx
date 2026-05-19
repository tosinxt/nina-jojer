'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './case-studies.module.css';

export type CaseStudy = {
  _id: string;
  title: string;
  slug: { current: string } | string;
  category: string;
  excerpt: string;
  image: string;
};

const FILTERS = [
  'Policy & Advocacy Solutions',
  'Corporate Solutions',
  'Technology solutions',
  'Strategic Communications',
];

function CaseStudyCard({ study }: { study: CaseStudy }) {
  const slug = typeof study.slug === 'string' ? study.slug : study.slug?.current;
  return (
    <article className={styles.card}>
      <div className={styles.cardImageWrap}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={study.image} alt={study.title} className={styles.cardImage} />
      </div>
      <div className={styles.cardContent}>
        <div className={styles.cardTexts}>
          <h3 className={styles.cardTitle}>{study.title}</h3>
          <p className={styles.cardExcerpt}>{study.excerpt}</p>
        </div>
        <Link href={`/case-studies/${slug}`} className={styles.learnMore}>
          <span>LEARN MORE</span>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/events/arrow-circle.svg" alt="" aria-hidden="true" width={25} height={25} />
        </Link>
      </div>
    </article>
  );
}

export default function CaseStudiesClient({ caseStudies }: { caseStudies: CaseStudy[] }) {
  const [activeFilter, setActiveFilter] = useState(FILTERS[0]);

  const filtered = caseStudies.filter(s => !s.category || activeFilter === FILTERS[0] || s.category === activeFilter);
  const displayed = filtered.length > 0 ? filtered : caseStudies;

  return (
    <section className={styles.portfolioSection}>
      <div className={styles.filters}>
        {FILTERS.map((f) => (
          <button
            key={f}
            className={`${styles.filterBtn} ${activeFilter === f ? styles.filterBtnActive : ''}`}
            onClick={() => setActiveFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      <div className={styles.portfolioInner}>
        {displayed[0] && displayed[1] && (
          <div className={styles.cardRow2}>
            <CaseStudyCard study={displayed[0]} />
            <CaseStudyCard study={displayed[1]} />
          </div>
        )}
        {displayed[2] && (
          <div className={styles.cardRow1}>
            <CaseStudyCard study={displayed[2]} />
          </div>
        )}
        {displayed[3] && displayed[4] && (
          <div className={styles.cardRow2}>
            <CaseStudyCard study={displayed[3]} />
            <CaseStudyCard study={displayed[4]} />
          </div>
        )}
        <Link href="#" className={styles.viewMore}>
          <span>view more</span>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/events/arrow-circle.svg" alt="" aria-hidden="true" width={25} height={25} />
        </Link>
      </div>
    </section>
  );
}
