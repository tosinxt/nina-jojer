import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Navbar from "@/components/Navbar";
import CtaSection from "@/components/CtaSection";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import { client } from "@/sanity/client";
import { caseStudyBySlugQuery } from "@/sanity/queries";
import { siteConfig, canonicalUrl, ogImageUrl } from "@/lib/seo";
import styles from "./case-study-detail.module.css";

type Result = { title: string; body: string };

type CaseStudy = {
  _id: string;
  title: string;
  excerpt?: string;
  heroSubtitle?: string;
  aboutClient?: string;
  clientMission?: string;
  servicesRendered?: string[];
  results?: Result[];
  image?: string;
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  let cs: CaseStudy | null = null;
  try {
    cs = await client.fetch<CaseStudy>(caseStudyBySlugQuery(slug));
  } catch { /* Sanity not configured */ }

  if (!cs) return {};

  const description = cs.excerpt ?? cs.heroSubtitle ?? cs.aboutClient ?? undefined;
  const imageUrl = ogImageUrl(cs.image ?? '/images/og/case-study.jpg');
  const url = canonicalUrl(`/case-studies/${slug}`);

  return {
    title: cs.title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: cs.title,
      description,
      url,
      siteName: siteConfig.name,
      type: 'article',
      images: [{ url: imageUrl, width: 1200, height: 630, alt: cs.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: cs.title,
      description,
      images: [imageUrl],
    },
  };
}

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs: CaseStudy | null = await client.fetch(caseStudyBySlugQuery(slug));

  if (!cs) notFound();

  return (
    <main className={styles.page}>
      <Navbar />

      {/* ── HERO HEADER ── */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>{cs.title}</h1>
            {cs.heroSubtitle && (
              <p className={styles.heroSubtitle}>{cs.heroSubtitle}</p>
            )}
          </div>
        </div>
        <div className={styles.heroImageWrap}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={cs.image ?? '/images/case-studies/detail-hero.png'}
            alt={cs.title}
            className={styles.heroImage}
          />
        </div>
      </section>

      {/* ── ABOUT THE CLIENT ── */}
      {cs.aboutClient && (
        <section className={styles.contentRow}>
          <div className={styles.contentRowInner}>
            <div className={styles.contentRowLabel}>
              <h2 className={styles.sectionLabel}>ABOUT THE CLIENT</h2>
            </div>
            <div className={styles.contentRowBody}>
              <p className={styles.bodyText}>{cs.aboutClient}</p>
            </div>
          </div>
        </section>
      )}

      {/* ── CLIENT'S MISSION ── */}
      {cs.clientMission && (
        <section className={styles.contentRow}>
          <div className={styles.contentRowInner}>
            <div className={styles.contentRowLabel}>
              <h2 className={styles.sectionLabel}>CLIENT&apos;S MISSION</h2>
            </div>
            <div className={styles.contentRowBody}>
              <p className={styles.bodyText}>{cs.clientMission}</p>
            </div>
          </div>
        </section>
      )}

      {/* ── SERVICE RENDERED ── */}
      {cs.servicesRendered && cs.servicesRendered.length > 0 && (
        <section className={styles.serviceSection}>
          <div className={styles.serviceSectionInner}>
            <h2 className={styles.sectionLabel}>SERVICE RENDERED</h2>
            <ul className={styles.serviceList}>
              {cs.servicesRendered.map((item) => (
                <li key={item} className={styles.serviceListItem}>
                  <span className={styles.listBullet} aria-hidden="true" />
                  <span className={styles.bodyText}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* ── THE RESULTS ── */}
      {cs.results && cs.results.length > 0 && (
        <section className={styles.resultsSection}>
          <div className={styles.resultsSectionInner}>
            <h2 className={styles.sectionLabel}>THE RESULTS</h2>
            <div className={styles.resultsGrid}>
              {cs.results.map((result) => (
                <div key={result.title} className={styles.resultItem}>
                  <h3 className={styles.resultTitle}>{result.title}</h3>
                  <p className={styles.resultBody}>{result.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaSection />
      <Newsletter />
      <Footer />
    </main>
  );
}
