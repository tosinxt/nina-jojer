'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import { formatInsightDate } from '@/lib/formatDate';
import BlurText from '@/components/BlurText';
import FilterButton from '@/components/FilterButton';
import InsightsFilterPanel, { DEFAULT_FILTERS, isFiltered, type InsightsFilters } from '@/components/InsightsFilterPanel';
import styles from './insights.module.css';

export type Article = {
  _id: string;
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  author: string;
  publishedAt: string;
  updatedAt?: string;
  readTime: string;
  tags?: string[];
  image: string;
  attachmentUrl?: string;
  attachmentName?: string;
};

const CATEGORY_STYLES: Record<string, { bg: string; dot: string; text: string }> = {
  'Tech & Innovation': { bg: 'rgba(58,74,90,0.12)', dot: '#3a4a5a', text: '#3a4a5a' },
  'Tech & Innovations': { bg: 'rgba(58,74,90,0.12)', dot: '#3a4a5a', text: '#3a4a5a' },
  'Policy Analysis': { bg: 'rgba(198,164,90,0.12)', dot: '#c6a45a', text: '#c6a45a' },
};

const DEFAULT_STYLE = { bg: 'rgba(97,2,3,0.10)', dot: '#610203', text: '#610203' };

const ALL_TAB = 'All';

const LearnMoreChevron = () => (
  <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden="true">
    <path d="M1 2L4 5L7 2" stroke="black" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" transform="rotate(-90 4 4)" />
  </svg>
);


const SearchIcon = () => (
  <svg width="19" height="19" viewBox="0 0 19 19" fill="none" aria-label="Search">
    <circle cx="8.5" cy="8.5" r="5.5" stroke="white" strokeWidth="1.5" />
    <path d="M13 13L16 16" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const PAGE_SIZE = 9;

export default function InsightsClient({ articles }: { articles: Article[] }) {
  const filterTabs = [ALL_TAB, ...Array.from(new Set(articles.map(a => a.category).filter(Boolean)))];
  const [activeFilter, setActiveFilter] = useState(ALL_TAB);
  const [visible, setVisible] = useState(PAGE_SIZE);
  const [query, setQuery] = useState('');
  const [filters, setFilters] = useState<InsightsFilters>(DEFAULT_FILTERS);
  const [dateOpen, setDateOpen] = useState(false);
  const [tagsExpanded, setTagsExpanded] = useState(false);
  const filterBtnRef = useRef<HTMLButtonElement | null>(null);
  const MOBILE_VISIBLE_TABS = 3;

  const authors = Array.from(new Set(articles.map((a) => a.author).filter(Boolean)));

  const q = query.trim().toLowerCase();

  const inDateRange = (dateStr: string | undefined, range: InsightsFilters['publishedAt']): boolean => {
    if (range === 'all' || !dateStr) return true;
    const parsed = new Date(dateStr);
    if (isNaN(parsed.getTime())) return true;
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const day = new Date(parsed.getFullYear(), parsed.getMonth(), parsed.getDate());
    if (range === 'this-week') {
      const start = new Date(today); start.setDate(today.getDate() - 7);
      return day >= start;
    }
    if (range === 'this-month') return parsed.getFullYear() === now.getFullYear() && parsed.getMonth() === now.getMonth();
    if (range === 'last-3-months') {
      const start = new Date(today); start.setMonth(today.getMonth() - 3);
      return day >= start;
    }
    return true;
  };

  const filtered = articles.filter((a) => {
    const matchesCategory = activeFilter === ALL_TAB || a.category.toLowerCase() === activeFilter.toLowerCase();
    const matchesSearch = !q || (
      a.title.toLowerCase().includes(q) ||
      a.excerpt.toLowerCase().includes(q) ||
      a.author.toLowerCase().includes(q) ||
      a.category.toLowerCase().includes(q)
    );
    const matchesAuthor = !filters.author || a.author === filters.author;
    const matchesPublished = inDateRange(a.publishedAt, filters.publishedAt);
    const matchesUpdated = inDateRange(a.updatedAt, filters.updatedAt);
    return matchesCategory && matchesSearch && matchesAuthor && matchesPublished && matchesUpdated;
  });

  const pageArticles = filtered.slice(0, visible);
  const hasMore = visible < filtered.length;

  const handleSearch = (value: string) => {
    setQuery(value);
    setVisible(PAGE_SIZE);
  };

  const handleFilterChange = (tab: string) => {
    setActiveFilter(tab);
    setVisible(PAGE_SIZE);
  };

  return (
    <section className={styles.blogSection}>
      <div className={styles.blogContainer}>
        <div className={styles.blogHeader}>
          <div className={styles.blogTitles}>
            <BlurText as="h1" text="THINKING OUT LOUD" animateBy="letters" direction="bottom" delay={100} className={styles.blogTitle} />
            <BlurText text="We write about what we know. Real problems, real solutions, real results from the ground." direction="bottom" delay={80} stepDuration={0.4} className={styles.blogSubtitle} />
          </div>
          <div className={styles.searchAndFilters}>
            <div className={styles.searchBar}>
              <input
                type="text"
                placeholder="Search Article"
                className={styles.searchInput}
                value={query}
                onChange={(e) => handleSearch(e.target.value)}
              />
              <button className={styles.searchBtn} aria-label="Search"><SearchIcon /></button>
            </div>
            <div className={styles.filterRow}>
              <div className={styles.filterTabs}>
                {filterTabs.map((tab, i) => {
                  const isHiddenOnMobile = !tagsExpanded && i >= MOBILE_VISIBLE_TABS && tab !== activeFilter;
                  return (
                    <button
                      key={tab}
                      className={`${styles.filterTab} ${activeFilter === tab ? styles.filterTabActive : ''} ${isHiddenOnMobile ? styles.filterTabMobileHidden : ''}`}
                      onClick={() => handleFilterChange(tab)}
                    >
                      {tab}
                    </button>
                  );
                })}
                {filterTabs.length > MOBILE_VISIBLE_TABS && (
                  <button
                    className={`${styles.filterTab} ${styles.filterTabToggle} ${tagsExpanded ? styles.filterTabToggleExpanded : ''}`}
                    onClick={() => setTagsExpanded(v => !v)}
                    aria-label={tagsExpanded ? 'Show fewer filters' : `Show ${filterTabs.length - MOBILE_VISIBLE_TABS} more filters`}
                  >
                    {tagsExpanded ? 'Less' : `+${filterTabs.length - MOBILE_VISIBLE_TABS}`}
                  </button>
                )}
              </div>
              <div className={styles.filterBtnWrap}>
                <FilterButton
                  ref={filterBtnRef}
                  onClick={() => setDateOpen((v) => !v)}
                  aria-label="Filter insights"
                  active={dateOpen || isFiltered(filters)}
                />
              </div>
            </div>
            <InsightsFilterPanel
              open={dateOpen}
              filters={filters}
              authors={authors}
              onChange={(f) => { setFilters(f); setVisible(PAGE_SIZE); }}
              onClear={() => { setFilters(DEFAULT_FILTERS); setVisible(PAGE_SIZE); }}
            />
          </div>
        </div>

        {pageArticles.length > 0 ? (
          <div className={styles.articlesGrid}>
            {pageArticles.map((article) => <ArticleCard key={article._id} article={article} />)}
          </div>
        ) : (
          <p className={styles.noResults}>No articles found for &ldquo;{query}&rdquo;</p>
        )}

        {hasMore && (
          <button className={styles.viewMore} onClick={() => setVisible(v => v + PAGE_SIZE)}>
            <span>view more</span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/events/arrow-circle.svg" alt="" aria-hidden="true" width={25} height={25} />
          </button>
        )}
      </div>
    </section>
  );
}

const DownloadIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path d="M7 1v8M4 6l3 3 3-3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M2 11h10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);

function ArticleCard({ article }: { article: Article }) {
  const catStyle = CATEGORY_STYLES[article.category] ?? DEFAULT_STYLE;
  const slug = article.slug;

  return (
    <div className={styles.articleCard}>
      <Link href={`/insights/${slug}`} className={styles.articleCardInner}>
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
                <span>{formatInsightDate(article.publishedAt, true)} . </span>
                <span className={styles.readTime}>{article.readTime}</span>
              </p>
            </div>
          </div>
        </div>
      </Link>
      <div className={styles.cardFooter}>
        <Link href={`/insights/${slug}`} className={styles.learnMore}>
          <span>LEARN MORE</span>
          <LearnMoreChevron />
        </Link>
        {article.attachmentUrl && (
          <a
            href={article.attachmentUrl}
            download={article.attachmentName ?? true}
            className={styles.downloadBtn}
            aria-label="Download document"
          >
            <DownloadIcon />
            <span>Download</span>
          </a>
        )}
      </div>
    </div>
  );
}
