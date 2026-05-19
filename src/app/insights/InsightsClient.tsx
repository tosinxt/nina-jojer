'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './insights.module.css';

export type Article = {
  _id: string;
  title: string;
  slug: { current: string } | string;
  category: string;
  excerpt: string;
  author: string;
  publishedAt: string;
  readTime: string;
  image: string;
};

const CATEGORY_STYLES: Record<string, { bg: string; dot: string; text: string }> = {
  'Tech & Innovation': { bg: 'rgba(58,74,90,0.12)', dot: '#3a4a5a', text: '#3a4a5a' },
  'Tech & Innovations': { bg: 'rgba(58,74,90,0.12)', dot: '#3a4a5a', text: '#3a4a5a' },
  'Policy Analysis': { bg: 'rgba(198,164,90,0.12)', dot: '#c6a45a', text: '#c6a45a' },
};

const DEFAULT_STYLE = { bg: 'rgba(97,2,3,0.10)', dot: '#610203', text: '#610203' };

const filterTabs = ['Policy Advisory', 'Tech & Innovation', 'Cybersecurity', 'Artificial Intelligence', 'Manufacturing'];

const LearnMoreChevron = () => (
  <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden="true">
    <path d="M2 1L5 4L2 7" stroke="black" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const PrevArrow = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
    <rect width="36" height="36" rx="18" fill="#EBEBEB" />
    <path d="M21 12L15 18L21 24" stroke="#0F0F0F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const NextArrow = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
    <rect width="36" height="36" rx="18" fill="#0F0F0F" />
    <path d="M15 12L21 18L15 24" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const SearchIcon = () => (
  <svg width="19" height="19" viewBox="0 0 19 19" fill="none" aria-label="Search">
    <circle cx="8.5" cy="8.5" r="5.5" stroke="white" strokeWidth="1.5" />
    <path d="M13 13L16 16" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const ARTICLES_PER_PAGE = 8;

export default function InsightsClient({ articles }: { articles: Article[] }) {
  const [activeFilter, setActiveFilter] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(articles.length / ARTICLES_PER_PAGE);
  const start = (currentPage - 1) * ARTICLES_PER_PAGE;
  const pageArticles = articles.slice(start, start + ARTICLES_PER_PAGE);
  const row1 = pageArticles.slice(0, 4);
  const row2 = pageArticles.slice(4, 8);

  return (
    <section className={styles.blogSection}>
      <div className={styles.blogContainer}>
        <div className={styles.blogHeader}>
          <div className={styles.blogTitles}>
            <h1 className={styles.blogTitle}>THINKING OUT LOUD</h1>
            <p className={styles.blogSubtitle}>We write about what we know. Real problems, real solutions, real results from the ground.</p>
          </div>
          <div className={styles.searchAndFilters}>
            <div className={styles.searchBar}>
              <input type="text" placeholder="Search Article" className={styles.searchInput} />
              <button className={styles.searchBtn} aria-label="Search"><SearchIcon /></button>
            </div>
            <div className={styles.filterTabs}>
              {filterTabs.map((tab, i) => (
                <button
                  key={tab}
                  className={`${styles.filterTab} ${activeFilter === i ? styles.filterTabActive : ''}`}
                  onClick={() => setActiveFilter(i)}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.articlesGrid}>
          <div className={styles.articlesRow}>
            {row1.map((article) => <ArticleCard key={article._id} article={article} />)}
          </div>
          <div className={styles.articlesRow}>
            {row2.map((article) => <ArticleCard key={article._id} article={article} />)}
          </div>
        </div>

        {totalPages > 1 && (
          <div className={styles.pagination}>
            <button className={styles.paginationArrow} onClick={() => setCurrentPage(p => Math.max(1, p - 1))} aria-label="Previous page">
              <PrevArrow />
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                className={`${styles.pageNum} ${currentPage === page ? styles.pageNumActive : styles.pageNumInactive}`}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </button>
            ))}
            <button className={styles.paginationArrow} onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))} aria-label="Next page">
              <NextArrow />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

function ArticleCard({ article }: { article: Article }) {
  const catStyle = CATEGORY_STYLES[article.category] ?? DEFAULT_STYLE;
  const slug = typeof article.slug === 'string' ? article.slug : article.slug?.current;

  return (
    <article className={styles.articleCard}>
      <div className={styles.articleImageWrap}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={article.image} alt={article.title} className={styles.articleImage} />
      </div>
      <div className={styles.articleContent}>
        <div className={styles.articleTop}>
          <div className={styles.articleMeta}>
            <div className={styles.categoryBadge} style={{ background: catStyle.bg }}>
              <span className={styles.categoryDot} style={{ background: catStyle.dot }} />
              <span className={styles.categoryLabel} style={{ color: catStyle.text }}>{article.category}</span>
            </div>
            <div className={styles.articleTexts}>
              <h2 className={styles.articleTitle}>{article.title}</h2>
              <p className={styles.articleExcerpt}>{article.excerpt}</p>
            </div>
          </div>
          <div className={styles.authorRow}>
            <p className={styles.authorName}>{article.author}</p>
            <p className={styles.articleDate}>
              <span>{article.publishedAt} . </span>
              <span className={styles.readTime}>{article.readTime}</span>
            </p>
          </div>
        </div>
        <Link href={`/insights/${slug}`} className={styles.learnMore}>
          <span>LEARN MORE</span>
          <LearnMoreChevron />
        </Link>
      </div>
    </article>
  );
}
