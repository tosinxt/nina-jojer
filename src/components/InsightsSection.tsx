import Link from 'next/link';
import styles from './InsightsSection.module.css';

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

const insights = [
  {
    image: '/images/Blog/insight-1.png',
    alt: 'Nigeria blockchain policy',
    tag: { label: 'Tech & Innovations', variant: 'tech' as TagVariant },
    title: 'A Review of Nigeria’s National Blockchain Policy',
    excerpt:
      'Nigeria has displayed a growing interest in blockchain technology and cryptocurrencies, recognising their potential benefits in areas such as financial inclusion, transparency, and corruption reduction. The adoption of cryptocurrencies, with Bitcoin as the most popular, has been increasing in the country.',
    author: 'EBERE OJADUA',
    date: '5th May 2026',
    readTime: '5 mins read',
    href: '/insights/nigeria-blockchain-policy',
  },
  {
    image: '/images/Blog/insight-2.png',
    alt: 'Trade development across West Africa',
    tag: { label: 'Policy Analysis', variant: 'policy' as TagVariant },
    title: 'Boosting Trade Development Across West Africa',
    excerpt:
      'Trade blocs play a pivotal role in promoting economic integration and cooperation among countries, fostering regional growth and prosperity.',
    author: 'DEJI MACAULAY',
    date: '5th May 2026',
    readTime: '5 mins read',
    href: '/insights/west-africa-trade',
  },
  {
    image: '/images/Blog/insight-3.png',
    alt: 'Data Protection Act 2020',
    tag: { label: 'Tech & Innovation', variant: 'tech' as TagVariant },
    title: 'A Review of the Data Protection Act 2020: Strengths and Weaknesses',
    excerpt:
      'Executive Summary This Policy Brief reviews the Data Protection Act 2020 (the Act), which protects the rights of data subjects and regulates the processing of personal data.',
    author: 'CHINWE OHANELE',
    date: '5th May 2026',
    readTime: '5 mins read',
    href: '/insights/data-protection-act',
  },
  {
    image: '/images/Blog/insight-4.png',
    alt: 'Big data and AI in Africa',
    tag: { label: 'Policy Analysis', variant: 'policy' as TagVariant },
    title: 'How Big Data Enables and Constrains AI Development in Africa',
    excerpt:
      'The report discusses the opportunities and challenges of using big data and AI for sustainable development in Africa and offers some recommendations for policymakers, businesses, and researchers.',
    author: 'CHINWE OHANELE',
    date: '5th May 2026',
    readTime: '5 mins read',
    href: '/insights/big-data-ai-africa',
  },
];

export default function InsightsSection() {
  return (
    <section className={styles.section} id="insights">
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.titleBlock}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowLine} />
              <span className={styles.eyebrowText}>Insights &amp; Perspective</span>
            </div>
            <h2 className={styles.heading}>
              Perspectives on policy, strategy, and technology.
            </h2>
          </div>
          <Link href="/insights" className={styles.viewAll}>
            <span className={styles.viewAllText}>View All</span>
            <span className={styles.viewAllArrow}>
              <ArrowIcon />
            </span>
          </Link>
        </div>

        {/* Cards */}
        <div className={styles.grid}>
          {insights.map((post, i) => (
            <Link key={i} href={post.href} className={styles.card}>
              <div className={styles.cardImage}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={post.image} alt={post.alt} />
              </div>
              <div className={styles.cardBody}>
                <div className={styles.cardTop}>
                  <div className={styles.cardMeta}>
                    <Tag label={post.tag.label} variant={post.tag.variant} />
                    <div className={styles.cardText}>
                      <h3 className={styles.cardTitle}>{post.title}</h3>
                      <p className={styles.cardExcerpt}>{post.excerpt}</p>
                    </div>
                  </div>
                  <div className={styles.cardAuthor}>
                    <p className={styles.authorName}>{post.author}</p>
                    <p className={styles.authorDate}>
                      {post.date} . <span className={styles.readTime}>{post.readTime}</span>
                    </p>
                  </div>
                </div>
                <div className={styles.learnMore}>
                  <span className={styles.learnMoreText}>Learn More</span>
                  <ChevronRight />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
