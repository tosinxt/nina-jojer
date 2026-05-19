"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import CtaSection from "@/components/CtaSection";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import styles from "./insights.module.css";

/* ── Category badge colour tokens ── */
const CATEGORY_TECH = { bg: "rgba(58,74,90,0.12)", dot: "#3a4a5a", text: "#3a4a5a" };
const CATEGORY_POLICY = { bg: "rgba(198,164,90,0.12)", dot: "#c6a45a", text: "#c6a45a" };

/* ── Article data ── */
const articles = [
  {
    id: 1,
    image: "/images/insights/article-1.jpg",
    category: "Tech & Innovations",
    categoryStyle: CATEGORY_TECH,
    title: "A Review of Nigeria's National Blockchain Policy",
    excerpt: "Nigeria has displayed a growing interest in blockchain technology and cryptocurrencies, recognising their potential benefits in areas such as financial inclusion, transparency, and corruption reduction.",
    author: "EBERE OJADUA",
    date: "5th May 2026",
    readTime: "5 mins read",
  },
  {
    id: 2,
    image: "/images/insights/article-2.jpg",
    category: "Policy Analysis",
    categoryStyle: CATEGORY_POLICY,
    title: "Boosting Trade Development Across West Africa",
    excerpt: "Trade blocs play a pivotal role in promoting economic integration and cooperation among countries, fostering regional growth and prosperity.",
    author: "DEJI MACAULAY",
    date: "5th May 2026",
    readTime: "5 mins read",
  },
  {
    id: 3,
    image: "/images/insights/article-3.jpg",
    category: "Tech & Innovation",
    categoryStyle: CATEGORY_TECH,
    title: "A Review of the Data Protection Act 2020: Strengths and Weaknesses",
    excerpt: "Executive Summary This Policy Brief reviews the Data Protection Act 2020 (the Act), which protects t...",
    author: "CHINWE OHANELE",
    date: "5th May 2026",
    readTime: "5 mins read",
  },
  {
    id: 4,
    image: "/images/insights/article-4.jpg",
    category: "Policy Analysis",
    categoryStyle: CATEGORY_POLICY,
    title: "How Big Data Enables and Constrains AI Development in Africa",
    excerpt: "The report discusses the opportunities and challenges of using big data and AI for sustainable development in Africa and offers some recommendations for policymakers, businesses, and researchers.",
    author: "CHINWE OHANELE",
    date: "5th May 2026",
    readTime: "5 mins read",
  },
  {
    id: 5,
    image: "/images/insights/article-3.jpg",
    category: "Tech & Innovation",
    categoryStyle: CATEGORY_TECH,
    title: "A Review of the Data Protection Act 2020: Strengths and Weaknesses",
    excerpt: "Executive Summary This Policy Brief reviews the Data Protection Act 2020 (the Act), which protects t...",
    author: "CHINWE OHANELE",
    date: "5th May 2026",
    readTime: "5 mins read",
  },
  {
    id: 6,
    image: "/images/insights/article-1.jpg",
    category: "Tech & Innovations",
    categoryStyle: CATEGORY_TECH,
    title: "A Review of Nigeria's National Blockchain Policy",
    excerpt: "Nigeria has displayed a growing interest in blockchain technology and cryptocurrencies, recognising their potential benefits in areas such as financial inclusion, transparency, and corruption reduction.",
    author: "EBERE OJADUA",
    date: "5th May 2026",
    readTime: "5 mins read",
  },
  {
    id: 7,
    image: "/images/insights/article-4.jpg",
    category: "Policy Analysis",
    categoryStyle: CATEGORY_POLICY,
    title: "How Big Data Enables and Constrains AI Development in Africa",
    excerpt: "The report discusses the opportunities and challenges of using big data and AI for sustainable development in Africa and offers some recommendations for policymakers, businesses, and researchers.",
    author: "CHINWE OHANELE",
    date: "5th May 2026",
    readTime: "5 mins read",
  },
  {
    id: 8,
    image: "/images/insights/article-2.jpg",
    category: "Policy Analysis",
    categoryStyle: CATEGORY_POLICY,
    title: "Boosting Trade Development Across West Africa",
    excerpt: "Trade blocs play a pivotal role in promoting economic integration and cooperation among countries, fostering regional growth and prosperity.",
    author: "DEJI MACAULAY",
    date: "5th May 2026",
    readTime: "5 mins read",
  },
];

const filterTabs = ["Policy Advisory", "Tech & Innovation", "Cybersecurity", "Artificial Intelligence", "Manufacturing"];

/* ── Small chevron arrow for "Learn More" ── */
const LearnMoreChevron = () => (
  <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden="true">
    <path d="M2 1L5 4L2 7" stroke="black" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* ── Pagination prev arrow ── */
const PrevArrow = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
    <rect width="36" height="36" rx="18" fill="#EBEBEB" />
    <path d="M21 12L15 18L21 24" stroke="#0F0F0F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* ── Pagination next arrow ── */
const NextArrow = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
    <rect width="36" height="36" rx="18" fill="#0F0F0F" />
    <path d="M15 12L21 18L15 24" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* ── Search icon ── */
const SearchIcon = () => (
  <svg width="19" height="19" viewBox="0 0 19 19" fill="none" aria-label="Search">
    <circle cx="8.5" cy="8.5" r="5.5" stroke="white" strokeWidth="1.5" />
    <path d="M13 13L16 16" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export default function InsightsPage() {
  const [activeFilter, setActiveFilter] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3;

  const row1 = articles.slice(0, 4);
  const row2 = articles.slice(4, 8);

  return (
    <main className={styles.page}>
      <Navbar />

      {/* ── BLOG SECTION ── */}
      <section className={styles.blogSection}>
        <div className={styles.blogContainer}>

          {/* Header */}
          <div className={styles.blogHeader}>
            <div className={styles.blogTitles}>
              <h1 className={styles.blogTitle}>THINKING OUT LOUD</h1>
              <p className={styles.blogSubtitle}>We write about what we know. Real problems, real solutions, real results from the ground.</p>
            </div>

            {/* Search + filters */}
            <div className={styles.searchAndFilters}>
              <div className={styles.searchBar}>
                <input type="text" placeholder="Search Article" className={styles.searchInput} />
                <button className={styles.searchBtn} aria-label="Search">
                  <SearchIcon />
                </button>
              </div>
              <div className={styles.filterTabs}>
                {filterTabs.map((tab, i) => (
                  <button
                    key={tab}
                    className={`${styles.filterTab} ${activeFilter === i ? styles.filterTabActive : ""}`}
                    onClick={() => setActiveFilter(i)}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Article grid */}
          <div className={styles.articlesGrid}>
            {/* Row 1 */}
            <div className={styles.articlesRow}>
              {row1.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
            {/* Row 2 */}
            <div className={styles.articlesRow}>
              {row2.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </div>

          {/* Pagination */}
          <div className={styles.pagination}>
            <button
              className={styles.paginationArrow}
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              aria-label="Previous page"
            >
              <PrevArrow />
            </button>
            {[1, 2, 3].map((page) => (
              <button
                key={page}
                className={`${styles.pageNum} ${currentPage === page ? styles.pageNumActive : styles.pageNumInactive}`}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </button>
            ))}
            <button
              className={styles.paginationArrow}
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              aria-label="Next page"
            >
              <NextArrow />
            </button>
          </div>
        </div>
      </section>

      <CtaSection />
      <Newsletter />
      <Footer />
    </main>
  );
}

/* ── Article Card ── */
function ArticleCard({ article }: { article: typeof articles[0] }) {
  return (
    <article className={styles.articleCard}>
      <div className={styles.articleImageWrap}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={article.image} alt={article.title} className={styles.articleImage} />
      </div>
      <div className={styles.articleContent}>
        <div className={styles.articleTop}>
          <div className={styles.articleMeta}>
            {/* Category badge */}
            <div
              className={styles.categoryBadge}
              style={{ background: article.categoryStyle.bg }}
            >
              <span className={styles.categoryDot} style={{ background: article.categoryStyle.dot }} />
              <span className={styles.categoryLabel} style={{ color: article.categoryStyle.text }}>
                {article.category}
              </span>
            </div>
            {/* Title + excerpt */}
            <div className={styles.articleTexts}>
              <h2 className={styles.articleTitle}>{article.title}</h2>
              <p className={styles.articleExcerpt}>{article.excerpt}</p>
            </div>
          </div>
          {/* Author row */}
          <div className={styles.authorRow}>
            <p className={styles.authorName}>{article.author}</p>
            <p className={styles.articleDate}>
              <span>{article.date} . </span>
              <span className={styles.readTime}>{article.readTime}</span>
            </p>
          </div>
        </div>
        <Link href="/insights/article" className={styles.learnMore}>
          <span>LEARN MORE</span>
          <LearnMoreChevron />
        </Link>
      </div>
    </article>
  );
}
