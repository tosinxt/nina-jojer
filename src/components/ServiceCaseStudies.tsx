import Link from 'next/link';
import { client } from '@/sanity/client';
import { caseStudiesByCategoryQuery } from '@/sanity/queries';

type CaseStudy = {
  _id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  image: string | null;
};

const ArrowIcon = () => (
  <svg width="10" height="14" viewBox="0 0 10 14" fill="none" aria-hidden="true">
    <path d="M2 1L8 7L2 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

type Props = {
  category: string;
  heading: string;
  styles: Record<string, string>;
};

export default async function ServiceCaseStudies({ category, heading, styles }: Props) {
  let studies: CaseStudy[] = [];
  try {
    studies = await client.fetch<CaseStudy[]>(caseStudiesByCategoryQuery(category));
  } catch { /* Sanity unavailable */ }

  if (!studies.length) return null;

  return (
    <section className={styles.caseStudies}>
      <div className={styles.caseStudiesHeader}>
        <h2 className={styles.caseStudiesTitle}>{heading}</h2>
        <Link href="/case-studies" className={styles.viewAll}>
          <span>VIEW ALL</span>
          <ArrowIcon />
        </Link>
      </div>
      <div className={styles.caseStudiesGrid}>
        {studies.map((cs, i) => (
          <div key={cs._id} className={styles.caseCard}>
            <div className={styles.caseCardImageWrap}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={cs.image ?? '/images/case-studies/card-image.jpg'}
                alt={cs.title}
                className={i === 0 ? styles.caseCardImg1 : styles.caseCardImg2}
              />
            </div>
            <div className={styles.caseCardContent}>
              <div className={styles.caseCardText}>
                <h3 className={styles.caseCardTitle}>{cs.title}</h3>
                {cs.excerpt && <p className={styles.caseCardDesc}>{cs.excerpt}</p>}
              </div>
              <Link href={`/case-studies/${cs.slug}`} className={styles.learnMore}>
                <span>LEARN MORE</span>
                <ArrowIcon />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
