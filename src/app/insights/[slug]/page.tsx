import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { PortableText, type PortableTextComponents } from '@portabletext/react';
import Navbar from '@/components/Navbar';
import CtaSection from '@/components/CtaSection';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';
import { client } from '@/sanity/client';
import { insightBySlugQuery, insightsQuery } from '@/sanity/queries';
import { formatInsightDate } from '@/lib/formatDate';
import styles from '../article/article.module.css';

export const revalidate = 60;

type InsightAuthor = { name: string; photo: string | null };

type Insight = {
  _id: string;
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  authors: InsightAuthor[] | null;
  author: string;
  authorImage: string | null;
  publishedAt: string;
  readTime: string;
  tags: string[] | null;
  image: string | null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  body: any[] | null;
  attachmentUrl?: string;
  attachmentName?: string;
};

const ChevronRight = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const LinkIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-label="Copy link">
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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

const LearnMoreChevron = () => (
  <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden="true">
    <path d="M2 1L5 4L2 7" stroke="black" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CATEGORY_STYLES: Record<string, { bg: string; dot: string; text: string }> = {
  'Tech & Innovation': { bg: 'rgba(58,74,90,0.12)', dot: '#3a4a5a', text: '#3a4a5a' },
  'Tech & Innovations': { bg: 'rgba(58,74,90,0.12)', dot: '#3a4a5a', text: '#3a4a5a' },
  'Policy Analysis': { bg: 'rgba(198,164,90,0.12)', dot: '#c6a45a', text: '#c6a45a' },
};
const DEFAULT_STYLE = { bg: 'rgba(97,2,3,0.10)', dot: '#610203', text: '#610203' };

const portableTextComponents: PortableTextComponents = {
  block: {
    h1: ({ children }) => <h1>{children}</h1>,
    h2: ({ children }) => <h2>{children}</h2>,
    h3: ({ children }) => <h3>{children}</h3>,
    h4: ({ children }) => <h4>{children}</h4>,
    blockquote: ({ children }) => <blockquote>{children}</blockquote>,
    normal: ({ children }) => <p>{children}</p>,
  },
  list: {
    bullet: ({ children }) => <ul>{children}</ul>,
    number: ({ children }) => <ol>{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li>{children}</li>,
    number: ({ children }) => <li>{children}</li>,
  },
  marks: {
    strong: ({ children }) => <strong>{children}</strong>,
    em: ({ children }) => <em>{children}</em>,
    underline: ({ children }) => <span style={{ textDecoration: 'underline' }}>{children}</span>,
    'strike-through': ({ children }) => <span style={{ textDecoration: 'line-through' }}>{children}</span>,
    link: ({ value, children }) => (
      <a href={value?.href} target="_blank" rel="noopener noreferrer">{children}</a>
    ),
  },
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  let article: Insight | null = null;
  try {
    article = await client.fetch<Insight>(insightBySlugQuery(slug));
  } catch { /* Sanity not configured */ }

  if (!article) return {};

  const authorNames = article.authors?.map(a => a.name) ?? (article.author ? [article.author] : []);
  const description = article.excerpt ?? undefined;
  const imageUrl = article.image ?? undefined;

  return {
    title: article.title,
    description,
    authors: authorNames.map(name => ({ name })),
    openGraph: {
      title: article.title,
      description,
      type: 'article',
      publishedTime: article.publishedAt,
      authors: authorNames,
      images: imageUrl ? [{ url: imageUrl, width: 1200, height: 630, alt: article.title }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description,
      images: imageUrl ? [imageUrl] : [],
    },
  };
}

export default async function InsightDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  let article: Insight | null = null;
  let related: Insight[] = [];

  try {
    [article, related] = await Promise.all([
      client.fetch<Insight>(insightBySlugQuery(slug)),
      client.fetch<Insight[]>(insightsQuery),
    ]);
  } catch { /* Sanity not configured */ }

  if (!article) notFound();

  const otherArticles = related.filter((a) => a.slug !== slug).slice(0, 4);

  return (
    <main className={styles.page}>
      <Navbar />

      {/* ── HEADER ── */}
      <section className={styles.articleHeader}>
        <div className={styles.headerContainer}>
          <div className={styles.headerContent}>
            <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
              <Link href="/insights" className={styles.breadcrumbLink}>Insights</Link>
              <ChevronRight />
              <span className={styles.breadcrumbCurrent}>{article.category}</span>
            </nav>
            <h1 className={styles.articleTitle}>{article.title}</h1>
            {article.excerpt && (
              <p className={styles.articleExcerpt}>{article.excerpt}</p>
            )}
          </div>

          <div className={styles.articleMeta}>
            {(() => {
              const resolvedAuthors: InsightAuthor[] =
                article.authors && article.authors.length > 0
                  ? article.authors
                  : article.author
                  ? [{ name: article.author, photo: article.authorImage }]
                  : [];
              return resolvedAuthors.map((au, i) => (
                <div key={i} className={styles.authorInfo}>
                  {au.photo && (
                    <div className={styles.authorAvatarWrap}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={au.photo} alt={au.name} className={styles.authorAvatar} />
                    </div>
                  )}
                  <div className={styles.authorDetails}>
                    <div className={styles.authorNameRow}>
                      <span className={styles.authorName}>{au.name}</span>
                      <span className={styles.expertBadge}>NJ EXPERT</span>
                    </div>
                    {i === 0 && (
                      <p className={styles.articleDate}>
                        <span>{formatInsightDate(article.publishedAt, true)} . </span>
                        <span className={styles.readTime}>{article.readTime}</span>
                      </p>
                    )}
                  </div>
                </div>
              ));
            })()}
            <div className={styles.shareButtons}>
              <button className={styles.shareBtn} aria-label="Copy link"><LinkIcon /></button>
              <button className={styles.shareBtn} aria-label="Share on LinkedIn"><LinkedInIcon /></button>
              <button className={styles.shareBtn} aria-label="Share on X"><XIcon /></button>
              <button className={styles.shareBtn} aria-label="Share on Facebook"><FacebookIcon /></button>
            </div>
          </div>
        </div>

        {article.image && (
          <div className={styles.heroWrap}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={article.image} alt={article.title} className={styles.heroImg} />
          </div>
        )}
      </section>

      {/* ── CONTENT ── */}
      <section className={styles.contentSection}>
        <div className={styles.contentContainer}>
          <div className={styles.contentInner}>
            <div className={styles.richText}>
              {article.body && (
                <PortableText value={article.body} components={portableTextComponents} />
              )}
              {!article.body && article.excerpt && (
                <p>{article.excerpt}</p>
              )}
            </div>

            <div className={styles.shareAndTags}>
              <div className={styles.sharePost}>
                <p className={styles.sharePostLabel}>Share this article</p>
                <div className={styles.shareButtons}>
                  <button className={styles.shareBtn} aria-label="Copy link"><LinkIcon /></button>
                  <button className={styles.shareBtn} aria-label="Share on LinkedIn"><LinkedInIcon /></button>
                  <button className={styles.shareBtn} aria-label="Share on X"><XIcon /></button>
                  <button className={styles.shareBtn} aria-label="Share on Facebook"><FacebookIcon /></button>
                </div>
              </div>
              {article.tags && article.tags.length > 0 && (
                <div className={styles.tags}>
                  {article.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
                </div>
              )}
            </div>

            {article.attachmentUrl && (
              <div className={styles.downloadCard}>
                <p className={styles.downloadCardEyebrow}>Document</p>
                <p className={styles.downloadCardName}>
                  {article.attachmentName
                    ? article.attachmentName.replace(/\.[^.]+$/, '').replace(/[-_]/g, ' ')
                    : article.title}
                </p>
                <a
                  href={article.attachmentUrl}
                  download={article.attachmentName ?? true}
                  className={styles.downloadCardLink}
                >
                  <span>Download the report</span>
                  <span className={styles.downloadCardArrow} aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 13L13 3M13 3H5M13 3V11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </a>
              </div>
            )}

            <hr className={styles.divider} />

            {(() => {
              const resolvedAuthors: InsightAuthor[] =
                article.authors && article.authors.length > 0
                  ? article.authors
                  : article.author
                  ? [{ name: article.author, photo: article.authorImage }]
                  : [];
              return resolvedAuthors.map((au, i) => (
                <div key={i} className={styles.authorBio}>
                  <div className={styles.authorAvatarWrap}>
                    {au.photo ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={au.photo} alt={au.name} className={styles.authorAvatar} />
                    ) : (
                      <div className={styles.authorAvatarPlaceholder}>{au.name.charAt(0)}</div>
                    )}
                  </div>
                  <div className={styles.authorBioDetails}>
                    <p className={styles.authorBioName}>{au.name}</p>
                    {i === 0 && (
                      <p className={styles.authorBioDate}>
                        {article.publishedAt && <span>{formatInsightDate(article.publishedAt, true)}</span>}
                        {article.publishedAt && article.readTime && <span> · </span>}
                        {article.readTime && <span className={styles.authorBioReadTime}>{article.readTime}</span>}
                      </p>
                    )}
                  </div>
                </div>
              ));
            })()}
          </div>

        </div>
      </section>

      {/* ── MORE FROM OUR TEAM ── */}
      {otherArticles.length > 0 && (
        <section className={styles.relatedArticlesSection}>
          <div className={styles.relatedArticlesInner}>
            <div className={styles.relatedArticlesHeader}>
              <h2 className={styles.relatedArticlesHeading}>More from our team</h2>
              <p className={styles.relatedArticlesSubtitle}>Explore related perspectives on policy, markets, and African leadership</p>
            </div>
            <div className={styles.relatedGrid}>
              {otherArticles.map((a) => {
                const catStyle = CATEGORY_STYLES[a.category] ?? DEFAULT_STYLE;
                return (
                  <Link key={a._id} href={`/insights/${a.slug}`} className={styles.relatedCard} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div className={styles.relatedCardImage}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={a.image ?? '/images/insights/article-1.jpg'} alt={a.title} className={styles.relatedCardImg} />
                    </div>
                    <div className={styles.relatedCardContent}>
                      <div className={styles.relatedCardTop}>
                        <div className={styles.relatedCardMeta}>
                          <div className={styles.categoryBadge} style={{ background: catStyle.bg }}>
                            <span className={styles.categoryDot} style={{ background: catStyle.dot }} />
                            <span className={styles.categoryLabel} style={{ color: catStyle.text }}>{a.category}</span>
                          </div>
                          <div className={styles.relatedCardTexts}>
                            <h3 className={styles.relatedCardTitle}>{a.title}</h3>
                            {a.excerpt && <p className={styles.relatedCardExcerpt}>{a.excerpt}</p>}
                          </div>
                        </div>
                        <div className={styles.relatedAuthorRow}>
                          <p className={styles.relatedAuthorName}>
                            {a.authors && a.authors.length > 0 ? a.authors.map(au => au.name).join(', ') : a.author}
                          </p>
                          <p className={styles.relatedDate}>
                            <span>{formatInsightDate(a.publishedAt)} . </span>
                            <span className={styles.relatedReadTime}>{a.readTime}</span>
                          </p>
                        </div>
                      </div>
                      <div className={styles.learnMore}>
                        <span>LEARN MORE</span>
                        <LearnMoreChevron />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
            <Link href="/insights" className={styles.viewAll}>
              <span className={styles.viewAllText}>VIEW ALL</span>
              <span className={styles.viewAllArrow}>
                <svg width="10" height="14" viewBox="0 0 10 14" fill="none" aria-hidden="true">
                  <path d="M2 1L8 7L2 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>
          </div>
        </section>
      )}

      <CtaSection />
      <Newsletter />
      <Footer />
    </main>
  );
}
