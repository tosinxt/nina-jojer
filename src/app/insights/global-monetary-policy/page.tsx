"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import CtaSection from "@/components/CtaSection";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import styles from "./global-monetary-policy.module.css";

/* ── Related articles ── */
const CATEGORY_TECH = { bg: "rgba(58,74,90,0.12)", dot: "#3a4a5a", text: "#3a4a5a" };
const CATEGORY_POLICY = { bg: "rgba(198,164,90,0.12)", dot: "#c6a45a", text: "#c6a45a" };

const relatedArticles = [
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
];

/* ── Icons ── */
const LinkIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-label="Copy link">
    <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-label="Share on LinkedIn">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="currentColor" />
  </svg>
);

const XIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-label="Share on X">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.745l7.73-8.835L1.254 2.25H8.08l4.254 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" fill="currentColor" />
  </svg>
);

const FacebookIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-label="Share on Facebook">
    <path d="M24 12.073C24 5.404 18.627 0 12 0 5.373 0 0 5.404 0 12.073c0 6.024 4.388 11.02 10.125 11.927v-8.437H7.078v-3.49h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.49h-2.796v8.437C19.612 23.093 24 18.097 24 12.073z" fill="currentColor" />
  </svg>
);

const ChevronRight = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const LearnMoreChevron = () => (
  <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden="true">
    <path d="M2 1L5 4L2 7" stroke="black" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ArrowIcon = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
    <rect width="36" height="36" rx="18" fill="#0F0F0F" />
    <path d="M15 12L21 18L15 24" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function GlobalMonetaryPolicyPage() {
  return (
    <main className={styles.page}>
      <Navbar />

      {/* ── ARTICLE HEADER (white bg) ── */}
      <section className={styles.articleHeader}>
        <div className={styles.headerContainer}>
          <div className={styles.headerContent}>

            {/* Breadcrumbs */}
            <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
              <Link href="/insights" className={styles.breadcrumbLink}>Insights</Link>
              <ChevronRight />
              <Link href="/insights" className={styles.breadcrumbLink}>Tech</Link>
              <ChevronRight />
              <span className={styles.breadcrumbCurrent}>Global Monetary Policy Tracker</span>
            </nav>

            {/* Title */}
            <h1 className={styles.articleTitle}>Global Monetary Policy Tracker</h1>
          </div>

          {/* Author + Share */}
          <div className={styles.articleMeta}>
            <div className={styles.authorInfo}>
              <div className={styles.authorAvatarPlaceholder} />
              <div className={styles.authorDetails}>
                <div className={styles.authorNameRow}>
                  <span className={styles.authorName}>AMANKO ADELINE</span>
                  <span className={styles.expertBadge}>NJ EXPERT</span>
                </div>
                <p className={styles.articleDate}>
                  <span>5th Nov. 2026 . </span>
                  <span className={styles.readTime}>5 mins read</span>
                </p>
              </div>
            </div>

            <div className={styles.shareButtons}>
              <button className={styles.shareBtn} aria-label="Copy link"><LinkIcon /></button>
              <button className={styles.shareBtn} aria-label="Share on LinkedIn"><LinkedInIcon /></button>
              <button className={styles.shareBtn} aria-label="Share on X"><XIcon /></button>
              <button className={styles.shareBtn} aria-label="Share on Facebook"><FacebookIcon /></button>
            </div>
          </div>
        </div>

        {/* Hero — world map image, very wide/zoomed */}
        <div className={styles.heroWrap}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/insights/monetary-policy-tracker.png"
            alt="Global Monetary Policy Tracker world map"
            className={styles.heroImg}
          />
        </div>
      </section>

      {/* ── CONTENT SECTION ── */}
      <section className={styles.contentSection}>
        {/* Full-width chart/visualization */}
        <div className={styles.chartContainer}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/insights/monetary-policy-tracker.png"
            alt="CFR Global Monetary Policy Tracker chart"
            className={styles.chartImage}
          />
        </div>

        {/* Body text */}
        <div className={styles.bodyTextWrap}>
          <p className={styles.bodyParagraph}>
            Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien varius id.
          </p>
          <p className={styles.bodyParagraph}>
            Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu quis fusce augue enim. Quis at habitant diam at. Suscipit tristique risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie aliquet sodales id est ac volutpat.
          </p>
        </div>
      </section>

      {/* ── MORE FROM OUR TEAM ── */}
      <section className={styles.moreSection}>
        <div className={styles.moreContainer}>
          <div className={styles.moreHeader}>
            <h2 className={styles.moreHeading}>More from our team</h2>
            <p className={styles.moreSubtitle}>Explore related perspectives on policy, markets, and African leadership</p>
          </div>

          <div className={styles.relatedGrid}>
            {relatedArticles.map((article) => (
              <article key={article.id} className={styles.relatedCard}>
                <div className={styles.relatedCardImage}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={article.image} alt={article.title} className={styles.relatedCardImg} />
                </div>
                <div className={styles.relatedCardContent}>
                  <div className={styles.relatedCardTop}>
                    <div className={styles.relatedCardMeta}>
                      <div
                        className={styles.categoryBadge}
                        style={{ background: article.categoryStyle.bg }}
                      >
                        <span className={styles.categoryDot} style={{ background: article.categoryStyle.dot }} />
                        <span className={styles.categoryLabel} style={{ color: article.categoryStyle.text }}>{article.category}</span>
                      </div>
                      <div className={styles.relatedCardTexts}>
                        <h3 className={styles.relatedCardTitle}>{article.title}</h3>
                        <p className={styles.relatedCardExcerpt}>{article.excerpt}</p>
                      </div>
                    </div>
                    <div className={styles.relatedAuthorRow}>
                      <p className={styles.relatedAuthorName}>{article.author}</p>
                      <p className={styles.relatedDate}>
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
            ))}
          </div>

          <Link href="/insights" className={styles.viewAll}>
            <span>VIEW ALL</span>
            <ArrowIcon />
          </Link>
        </div>
      </section>

      <CtaSection />
      <Newsletter />
      <Footer />
    </main>
  );
}
