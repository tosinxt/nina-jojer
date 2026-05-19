import type { Metadata } from 'next';
import { canonicalUrl, buildKeywords } from '@/lib/seo';
import { BreadcrumbJsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Careers',
  description: 'Join Nina Jojer. We are looking for talented professionals to join our team of strategic advisors, policy experts, and technology specialists across Africa and LAC.',
  keywords: buildKeywords('Careers Africa Consulting', 'Policy Jobs Africa', 'Advisory Firm Jobs', 'Strategy Consulting Careers', 'Jobs Lagos Nigeria'),
  alternates: { canonical: canonicalUrl('/careers') },
  openGraph: {
    title: 'Careers | Nina Jojer',
    description: 'Join our team of strategic advisors, policy experts, and technology specialists. Build your career at Nina Jojer.',
    url: canonicalUrl('/careers'),
    type: 'website',
  },
};

import Link from 'next/link';
import Navbar from '@/components/Navbar';
import CtaSection from '@/components/CtaSection';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';
import styles from './careers.module.css';
import { client } from '@/sanity/client';
import { jobOpeningsQuery } from '@/sanity/queries';

const heroBars = [
  { left: 532.59, top: -221.54, width: 39.613 },
  { left: 395.27, top: -221.54, width: 73.944 },
  { left: 165.52, top: -221.54, width: 113.557 },
  { left: -11.42, top: -221.54, width: 113.557 },
  { left: -14.06, top: -44.6, width: 113.557 },
  { left: -11.42, top: 132.34, width: 221.833 },
  { left: -14.07, top: 309.28, width: 338.031 },
  { left: -58.96, top: 309.28, width: 338.031 },
  { left: -14.07, top: 486.22, width: 446.306 },
  { left: 45.24, top: -44.6, width: 113.557 },
  { left: 131.83, top: 132.34, width: 113.557 },
  { left: 218.44, top: 309.28, width: 113.557 },
  { left: 305.04, top: 486.22, width: 113.557 },
  { left: 391.65, top: 663.15, width: 113.557 },
  { left: 185.44, top: -44.6, width: 113.557 },
  { left: 274.11, top: 132.34, width: 113.557 },
  { left: 362.77, top: 309.28, width: 113.557 },
  { left: 325.65, top: -44.6, width: 57.734 },
  { left: 375.14, top: 132.34, width: 57.734 },
  { left: 424.63, top: 309.28, width: 57.734 },
  { left: 432.88, top: -44.6, width: 39.613 },
  { left: 494.74, top: 132.34, width: 39.613 },
  { left: 556.59, top: 309.28, width: 39.613 },
];

const whyCards = [
  {
    icon: '/images/icons/policy.svg',
    title: 'Impact that compounds over time',
    body: "Your work influences policy decisions affecting millions. You'll see the results of your analysis in real governance changes. This isn't abstract consulting work.",
  },
  {
    icon: '/images/icons/work.svg',
    title: 'A network of serious people',
    body: "You'll work alongside former government officials, economists, and strategists. The people here have done real things. You'll learn from them and build relationships that last.",
  },
  {
    icon: '/images/icons/automation.svg',
    title: 'Autonomy and responsibility',
    body: "We don't micromanage. You'll own your projects and make decisions. We hire adults and treat you like one. Mistakes happen and we learn from them.",
  },
];

type JobOpening = { _id: string; title: string; department?: string; location?: string; type?: string; description?: string; applyLink?: string };

export default async function CareersPage() {
  let jobs: JobOpening[] = [];
  try {
    jobs = await client.fetch<JobOpening[]>(jobOpeningsQuery);
  } catch { /* Sanity not configured yet */ }

  return (
    <main className={styles.page}>
      <BreadcrumbJsonLd items={[{ name: 'Home', href: '/' }, { name: 'Careers', href: '/careers' }]} />
      <Navbar />

      {/* ── HEADER ── */}
      <section className={styles.header}>
        <div className={styles.headerContent}>
          <h1 className={styles.headerTitle}>Build something meaningful</h1>
          <p className={styles.headerBody}>
            Join a team that shapes policy and drives change across Africa
          </p>
        </div>

        <div className={styles.heroArea}>
          {heroBars.map((bar, i) => (
            <div
              key={i}
              className={styles.heroBar}
              style={{ left: bar.left, top: bar.top, width: bar.width }}
            />
          ))}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/careers/hero-portrait.png"
            alt="Team member"
            className={styles.heroPortrait}
          />
        </div>
      </section>

      {/* ── OPEN ROLES ── */}
      <section className={styles.openRoles}>
        <div className={styles.container}>
          <div className={styles.openRolesHeader}>
            <h2 className={styles.sectionHeading}>Open roles</h2>
            <p className={styles.sectionBody}>
              {`We're looking for talented people to join our teams across Africa.`}
            </p>
          </div>
          {jobs.length > 0 ? (
            <div className={styles.rolesList}>
              {jobs.map((job) => (
                <div key={job._id} className={styles.roleItem}>
                  <div className={styles.roleInfo}>
                    <h3 className={styles.roleTitle}>{job.title}</h3>
                    <div className={styles.roleMeta}>
                      {job.department && <span className={styles.roleTag}>{job.department}</span>}
                      {job.location && <span className={styles.roleTag}>{job.location}</span>}
                      {job.type && <span className={styles.roleTag}>{job.type}</span>}
                    </div>
                    {job.description && <p className={styles.roleDesc}>{job.description}</p>}
                  </div>
                  {job.applyLink ? (
                    <a href={job.applyLink} className={styles.applyBtn} target="_blank" rel="noopener noreferrer">Apply</a>
                  ) : (
                    <Link href="/contact" className={styles.applyBtn}>Apply</Link>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className={styles.rolesPlaceholder} />
          )}
        </div>
      </section>

      {/* ── WHY JOIN ── */}
      <section className={styles.whySection}>
        <div className={styles.whyContainer}>
          <div className={styles.whySectionTitle}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowLine} />
              <span className={styles.eyebrowText}>WHY</span>
            </div>
            <div className={styles.whyContent}>
              <h2 className={styles.whyHeading}>Why join Nina Jojer Africa</h2>
              <p className={styles.whySubtitle}>
                Work that matters on problems that shape the continent.
              </p>
            </div>
          </div>

          <div className={styles.whyCards}>
            {whyCards.map((card) => (
              <div key={card.title} className={styles.whyCard}>
                <div className={styles.whyCardTop}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={card.icon} alt="" className={styles.whyCardIcon} />
                  <div className={styles.whyCardText}>
                    <h3 className={styles.whyCardTitle}>{card.title}</h3>
                    <p className={styles.whyCardBody}>{card.body}</p>
                  </div>
                </div>
                <div className={styles.whyCardActions}>
                  <Link href="/about" className={styles.learnBtn}>
                    Learn
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
      <Newsletter />
      <Footer />
    </main>
  );
}
