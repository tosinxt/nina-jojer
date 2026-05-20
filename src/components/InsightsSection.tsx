import Link from 'next/link';
import Reveal from './Reveal';
import styles from './InsightsSection.module.css';
import { client } from '@/sanity/client';
import { featuredInsightsQuery } from '@/sanity/queries';

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

const fallbackInsights = [
  {
    _id: '1',
    image: '/images/Blog/insight-1.png',
    category: 'Tech & Innovations',
    title: 'A Review of Nigeria’s National Blockchain Policy',
    excerpt: 'Nigeria has displayed a growing interest in blockchain technology and cryptocurrencies, recognising their potential benefits in areas such as financial inclusion, transparency, and corruption reduction.',
    author: 'EBERE OJADUA',
    publishedAt: '5th May 2026',
    readTime: '5 mins read',
    slug: 'nigeria-blockchain-policy',
  },
  {
    _id: '2',
    image: '/images/Blog/insight-2.png',
    category: 'Policy Analysis',
    title: 'Boosting Trade Development Across West Africa',
    excerpt: 'Trade blocs play a pivotal role in promoting economic integration and cooperation among countries, fostering regional growth and prosperity.',
    author: 'DEJI MACAULAY',
    publishedAt: '5th May 2026',
    readTime: '5 mins read',
    slug: 'west-africa-trade',
  },
  {
    _id: '3',
    image: '/images/Blog/insight-3.png',
    category: 'Tech & Innovation',
    title: 'A Review of the Data Protection Act 2020: Strengths and Weaknesses',
    excerpt: 'Executive Summary This Policy Brief reviews the Data Protection Act 2020 (the Act), which protects the rights of data subjects and regulates the processing of personal data.',
    author: 'CHINWE OHANELE',
    publishedAt: '5th May 2026',
    readTime: '5 mins read',
    slug: 'data-protection-act',
  },
  {
    _id: '4',
    image: '/images/Blog/insight-4.png',
    category: 'Policy Analysis',
    title: 'How Big Data Enables and Constrains AI Development in Africa',
    excerpt: 'The report discusses the opportunities and challenges of using big data and AI for sustainable development in Africa and offers some recommendations for policymakers, businesses, and researchers.',
    author: 'CHINWE OHANELE',
    publishedAt: '5th May 2026',
    readTime: '5 mins read',
    slug: 'big-data-ai-africa',
  },
];

type FeaturedInsight = {
  _id: string;
  image: string;
  category: string;
  title: string;
  excerpt: string;
  author: string;
  publishedAt: string;
  readTime: string;
  slug: { current: string } | string;
};

export default async function InsightsSection() {
  let insights: FeaturedInsight[] = [];
  try {
    insights = await client.fetch<FeaturedInsight[]>(featuredInsightsQuery);
  } catch { /* Sanity not configured yet */ }
  if (!insights?.length) insights = fallbackInsights as FeaturedInsight[];

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
            const slug = typeof post.slug === 'string' ? post.slug : post.slug?.current;
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
                      <p className={styles.authorName}>{post.author}</p>
                      <p className={styles.authorDate}>
                        {post.publishedAt} . <span className={styles.readTime}>{post.readTime}</span>
                      </p>
                    </div>
                  </div>
                  <div className={styles.learnMore}>
                    <span className={styles.learnMoreText}>Learn More</span>
                    <ChevronRight />
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
