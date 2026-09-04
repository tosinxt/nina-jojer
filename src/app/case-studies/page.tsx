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

import BlurText from "@/components/BlurText";
import Navbar from "@/components/Navbar";
import CtaSection from "@/components/CtaSection";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import styles from "./case-studies.module.css";
import CaseStudiesClient, { type CaseStudy } from "./CaseStudiesClient";
import { client } from "@/sanity/client";
import { caseStudiesQuery } from "@/sanity/queries";

export default async function CaseStudiesPage() {
  let caseStudies: CaseStudy[] = [];
  try {
    caseStudies = await client.fetch<CaseStudy[]>(caseStudiesQuery, {}, { next: { revalidate: 60 } });
  } catch {
    /* Sanity unavailable */
  }

  return (
    <main className={styles.page}>
      <BreadcrumbJsonLd items={[{ name: 'Home', href: '/' }, { name: 'Case Studies', href: '/case-studies' }]} />
      <Navbar />

      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.heroTextRow}>
          <BlurText as="h1" text="REAL PROBLEMS, REAL SOLUTIONS" animateBy="letters" direction="bottom" delay={90} className={styles.heroTitle} />
          <BlurText text="We collaborate with governments, institutions, and leading enterprises to address intricate challenges. The subsequent engagements illustrate our capacity to integrate strategic acumen with tangible implementation, while maintaining the requisite confidentiality for our clients and partners." direction="bottom" delay={70} stepDuration={0.4} className={styles.heroBody} />
        </div>

        {/* Desktop banner */}
        <div className={`${styles.heroBanner} ${styles.heroDesktop}`} aria-hidden="true">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/casestudies.png" alt="" className={styles.heroFullImage} />
        </div>

        {/* Mobile banner */}
        <div className={`${styles.heroBannerMobile} ${styles.heroMobile}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/casestudiesmobile.png" alt="" className={styles.heroFullImage} />
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
