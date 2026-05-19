import type { Metadata } from 'next';
import { canonicalUrl, buildKeywords } from '@/lib/seo';
import { BreadcrumbJsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Case Studies',
  description: 'See how Nina Jojer delivers results — from E-Borders infrastructure modernisation to network transformation for global financial institutions across Africa and beyond.',
  keywords: buildKeywords('Case Studies Africa', 'E-Borders Infrastructure', 'Network Transformation', 'Government Advisory Results', 'Security Modernisation'),
  alternates: { canonical: canonicalUrl('/case-studies') },
  openGraph: {
    title: 'Case Studies | Nina Jojer',
    description: 'Real results. Transformative impact. Explore our case studies across government, finance, and technology sectors.',
    url: canonicalUrl('/case-studies'),
    type: 'website',
  },
};

import Navbar from "@/components/Navbar";
import CtaSection from "@/components/CtaSection";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import styles from "./case-studies.module.css";
import CaseStudiesClient, { type CaseStudy } from "./CaseStudiesClient";
import { client } from "@/sanity/client";
import { caseStudiesQuery } from "@/sanity/queries";

const fallbackCaseStudies: CaseStudy[] = [
  { _id: "1", title: "A Review of Nigeria's National Blockchain Policy", excerpt: "We help businesses navigate and shape Africa's regulatory and political landscape.", image: "/images/case-studies/card-image.jpg", slug: "nigeria-blockchain-policy", category: "" },
  { _id: "2", title: "A Review of Nigeria's National Blockchain Policy", excerpt: "We help businesses navigate and shape Africa's regulatory and political landscape.", image: "/images/case-studies/card-image.jpg", slug: "nigeria-blockchain-policy-2", category: "" },
  { _id: "3", title: "A Review of Nigeria's National Blockchain Policy", excerpt: "We help businesses navigate and shape Africa's regulatory and political landscape.", image: "/images/case-studies/card-image.jpg", slug: "nigeria-blockchain-policy-3", category: "" },
  { _id: "4", title: "A Review of Nigeria's National Blockchain Policy", excerpt: "We help businesses navigate and shape Africa's regulatory and political landscape.", image: "/images/case-studies/card-image.jpg", slug: "nigeria-blockchain-policy-4", category: "" },
  { _id: "5", title: "A Review of Nigeria's National Blockchain Policy", excerpt: "We help businesses navigate and shape Africa's regulatory and political landscape.", image: "/images/case-studies/card-image.jpg", slug: "nigeria-blockchain-policy-5", category: "" },
];

export default async function CaseStudiesPage() {
  let caseStudies: CaseStudy[] = [];
  try {
    caseStudies = await client.fetch<CaseStudy[]>(caseStudiesQuery);
  } catch {
    /* Sanity not configured yet — use fallback */
  }
  if (!caseStudies || caseStudies.length === 0) caseStudies = fallbackCaseStudies;

  return (
    <main className={styles.page}>
      <BreadcrumbJsonLd items={[{ name: 'Home', href: '/' }, { name: 'Case Studies', href: '/case-studies' }]} />
      <Navbar />

      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.heroTextRow}>
          <h1 className={styles.heroTitle}>REAL PROBLEMS, REAL SOLUTIONS</h1>
          <p className={styles.heroBody}>
            We partner with governments, institutions, and leading enterprises to solve complex challenges.
            The following engagements demonstrate our ability to combine strategic insight with practical
            delivery, while respecting the confidentiality of our clients.
          </p>
        </div>

        <div className={styles.heroBanner}>
          <div className={styles.heroColumns} aria-hidden="true">
            <span className={styles.col} style={{ width: 74, height: 116, left: 101 }} />
            <span className={styles.col} style={{ width: 74, height: 116, left: 176 }} />
            <span className={styles.col} style={{ width: 75, height: 116, left: 251 }} />
            <span className={styles.col} style={{ width: 49, height: 116, left: 336 }} />
            <span className={styles.col} style={{ width: 26, height: 116, left: 385 }} />
            <span className={styles.col} style={{ width: 146, height: 116, top: 157, left: -15 }} />
            <span className={styles.col} style={{ width: 75, height: 116, top: 157, left: 131 }} />
            <span className={styles.col} style={{ width: 75, height: 116, top: 157, left: 251 }} />
            <span className={styles.col} style={{ width: 49, height: 116, top: 157, left: 336 }} />
            <span className={styles.col} style={{ width: 26, height: 116, top: 157, left: 437 }} />
            <span className={styles.col} style={{ width: 223, height: 116, top: 274, left: -47 }} />
            <span className={styles.col} style={{ width: 75, height: 116, top: 274, left: 204 }} />
            <span className={styles.col} style={{ width: 75, height: 116, top: 274, left: 326 }} />
            <span className={styles.col} style={{ width: 49, height: 116, top: 274, left: 378 }} />
            <span className={styles.col} style={{ width: 26, height: 116, top: 274, left: 489 }} />
            <span className={styles.col} style={{ width: 294, height: 116, top: 391, left: -17 }} />
            <span className={styles.col} style={{ width: 75, height: 116, top: 391, left: 277 }} />
            <span className={styles.col} style={{ width: 75, height: 116, top: 391, left: 401 }} />
          </div>
          <div className={styles.heroImageArea}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/case-studies/hero-binoculars.png" alt="Binoculars" className={styles.heroBinoculars} />
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO GRID ── */}
      <CaseStudiesClient caseStudies={caseStudies} />

      <CtaSection />
      <Newsletter />
      <Footer />
    </main>
  );
}
