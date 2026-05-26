'use client';

import { useState, useEffect } from 'react';
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

const ALL = 'All';
const PAGE_SIZE = 4;

function CaseStudyCard({ study }: { study: CaseStudy }) {
  const slug = typeof study.slug === 'string' ? study.slug : study.slug?.current;
  return (
    <article className={styles.card}>
      <div className={styles.cardImageWrap}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={study.image} alt={study.title} className={styles.cardImage} />
        {study.category && (
          <span className={styles.cardCategory}>{study.category}</span>
        )}
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
  const filters = [ALL, ...Array.from(new Set(caseStudies.map(s => s.category).filter(Boolean)))];
  const [activeFilter, setActiveFilter] = useState(ALL);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [showNoMore, setShowNoMore] = useState(false);

  const filtered = activeFilter === ALL
    ? caseStudies
    : caseStudies.filter(s => s.category === activeFilter);

  const displayed = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  const handleFilterChange = (f: string) => {
    setActiveFilter(f);
    setVisibleCount(PAGE_SIZE);
    setShowNoMore(false);
  };

  const handleViewMore = () => {
    if (hasMore) {
      setVisibleCount(v => v + PAGE_SIZE);
    } else {
      setShowNoMore(true);
      setTimeout(() => setShowNoMore(false), 2500);
    }
  };

  // Layout pattern: 2, 1, 2, 1, 2, ... per page
  const chunks: { studies: CaseStudy[]; wide: boolean }[] = [];
  let i = 0;
  while (i < displayed.length) {
    if (chunks.length % 2 === 0) {
      chunks.push({ studies: displayed.slice(i, i + 2), wide: true });
      i += 2;
    } else {
      chunks.push({ studies: displayed.slice(i, i + 1), wide: false });
      i += 1;
    }
  }

  return (
    <section className={styles.portfolioSection}>
      <div className={styles.filters}>
        {filters.map((f) => (
          <button
            key={f}
            className={`${styles.filterBtn} ${activeFilter === f ? styles.filterBtnActive : ''}`}
            onClick={() => handleFilterChange(f)}
          >
            {f}
          </button>
        ))}
      </div>

      <div className={styles.portfolioInner}>
        {chunks.map((chunk, idx) => (
          <div key={idx} className={chunk.wide ? styles.cardRow2 : styles.cardRow1}>
            {chunk.studies.map(study => <CaseStudyCard key={study._id} study={study} />)}
          </div>
        ))}

        <button className={styles.viewMore} onClick={handleViewMore}>
          <span>VIEW MORE</span>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/events/arrow-circle.svg" alt="" aria-hidden="true" width={25} height={25} />
        </button>

        {showNoMore && (
          <div className={styles.noMoreToast}>
            You&apos;ve reached the end of all case studies.
          </div>
        )}
      </div>
    </section>
  );
}
