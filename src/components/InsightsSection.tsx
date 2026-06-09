import Link from 'next/link';
import Reveal from './Reveal';
import styles from './InsightsSection.module.css';
import { client } from '@/sanity/client';
import { featuredInsightsQuery } from '@/sanity/queries';
import { formatInsightDate } from '@/lib/formatDate';

const ChevronRight = () => (
  <svg className={styles.chevron} width="6" height="10" viewBox="0 0 6 10" fill="none">
    <path d="M1 1.5L4.5 5L1 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);


const ArrowIcon = () => (
  <svg width="7" height="10" viewBox="0 0 10 14" fill="none">
    <path d="M2 1L8 7L2 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

type TagVariant = 'tech' | 'policy';

const Tag = ({ label, variant }: { label: string; variant: TagVariant }) => (
  <span className={`${styles.tag} ${styles[`tag--${variant}`]}`}>
    <span className={styles.tagDot} />
    {label}
  </span>
);

const CATEGORY_VARIANT: Record<string, TagVariant> = {
  'Tech & Innovation': 'tech',
  'Tech & Innovations': 'tech',
  'Policy Analysis': 'policy',
};

type FeaturedInsight = {
  _id: string;
  image: string;
  category: string;
  title: string;
  excerpt: string;
  authors?: { name: string; photo?: string | null }[] | null;
  author: string;
  publishedAt: string;
  readTime: string;
  slug: string;
  attachmentUrl?: string;
  attachmentName?: string;
};

export default async function InsightsSection() {
  let insights: FeaturedInsight[] = [];
  try {
    insights = await client.fetch<FeaturedInsight[]>(featuredInsightsQuery);
  } catch { /* Sanity not configured yet */ }
  if (!insights?.length) return null;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <Reveal as="div" className={styles.titleBlock}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowLine} />
              <span className={styles.eyebrowText}>Insights &amp; Perspective</span>
            </div>
            <h2 className={styles.heading}>Perspectives on policy, strategy, and technology.</h2>
          </Reveal>
          <Reveal delay={150}><Link href="/insights" className={styles.viewAll}>
            <span className={styles.viewAllText}>View All</span>
            <span className={styles.viewAllArrow}><ArrowIcon /></span>
          </Link></Reveal>
        </div>

        {/* Cards */}
        <div className={styles.grid}>
          {insights.map((post, i) => {
            const slug = post.slug;
            const variant = CATEGORY_VARIANT[post.category] ?? 'tech';
            return (
              <Reveal key={post._id} delay={i * 100}>
              <Link href={`/insights/${slug}`} className={styles.card}>
                <div className={styles.cardImage}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={post.image} alt={post.title} />
                </div>
                <div className={styles.cardBody}>
                  <div className={styles.cardTop}>
                    <div className={styles.cardMeta}>
                      <Tag label={post.category} variant={variant} />
                      <div className={styles.cardText}>
                        <h3 className={styles.cardTitle}>{post.title}</h3>
                        <p className={styles.cardExcerpt}>{post.excerpt}</p>
                      </div>
                    </div>
                    <div className={styles.cardAuthor}>
                      <p className={styles.authorName}>
                        {post.authors && post.authors.length > 0 ? post.authors.map(a => a.name).join(', ') : post.author}
                      </p>
                      <p className={styles.authorDate}>
                        {formatInsightDate(post.publishedAt, true)} . <span className={styles.readTime}>{post.readTime}</span>
                      </p>
                    </div>
                  </div>
                  <div className={styles.cardFooter}>
                    <div className={styles.learnMore}>
                      <span className={styles.learnMoreText}>Learn More</span>
                      <ChevronRight />
                    </div>
                  </div>
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
