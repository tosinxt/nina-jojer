"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import CtaSection from "@/components/CtaSection";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import styles from "./case-studies.module.css";

const FILTERS = [
  "Policy & Advocacy Solutions",
  "Corporate Solutions",
  "Technology solutions",
  "Strategic Communications",
];

const caseStudies = [
  {
    id: 1,
    title: "A Review of Nigeria's National Blockchain Policy",
    excerpt: "We help businesses navigate and shape Africa's regulatory and political landscape.",
    image: "/images/case-studies/card-image.jpg",
    slug: "nigeria-blockchain-policy",
  },
  {
    id: 2,
    title: "A Review of Nigeria's National Blockchain Policy",
    excerpt: "We help businesses navigate and shape Africa's regulatory and political landscape.",
    image: "/images/case-studies/card-image.jpg",
    slug: "nigeria-blockchain-policy-2",
  },
  {
    id: 3,
    title: "A Review of Nigeria's National Blockchain Policy",
    excerpt: "We help businesses navigate and shape Africa's regulatory and political landscape.",
    image: "/images/case-studies/card-image.jpg",
    slug: "nigeria-blockchain-policy-3",
  },
  {
    id: 4,
    title: "A Review of Nigeria's National Blockchain Policy",
    excerpt: "We help businesses navigate and shape Africa's regulatory and political landscape.",
    image: "/images/case-studies/card-image.jpg",
    slug: "nigeria-blockchain-policy-4",
  },
  {
    id: 5,
    title: "A Review of Nigeria's National Blockchain Policy",
    excerpt: "We help businesses navigate and shape Africa's regulatory and political landscape.",
    image: "/images/case-studies/card-image.jpg",
    slug: "nigeria-blockchain-policy-5",
  },
];

function CaseStudyCard({ study }: { study: typeof caseStudies[0] }) {
  return (
    <article className={styles.card}>
      <div className={styles.cardImageWrap}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={study.image} alt={study.title} className={styles.cardImage} />
      </div>
      <div className={styles.cardContent}>
        <div className={styles.cardTexts}>
          <h3 className={styles.cardTitle}>{study.title}</h3>
          <p className={styles.cardExcerpt}>{study.excerpt}</p>
        </div>
        <Link href={`/case-studies/${study.slug}`} className={styles.learnMore}>
          <span>LEARN MORE</span>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/events/arrow-circle.svg" alt="" aria-hidden="true" width={25} height={25} />
        </Link>
      </div>
    </article>
  );
}

export default function CaseStudiesPage() {
  const [activeFilter, setActiveFilter] = useState(FILTERS[0]);

  return (
    <main className={styles.page}>
      <Navbar />

      {/* ── HERO ── */}
      <section className={styles.hero}>
        {/* Text row */}
        <div className={styles.heroTextRow}>
          <h1 className={styles.heroTitle}>REAL PROBLEMS, REAL SOLUTIONS</h1>
          <p className={styles.heroBody}>
            We partner with governments, institutions, and leading enterprises to solve complex challenges.
            The following engagements demonstrate our ability to combine strategic insight with practical
            delivery, while respecting the confidentiality of our clients.
          </p>
        </div>

        {/* Decorative banner */}
        <div className={styles.heroBanner}>
          {/* Left: geometric dark-red columns */}
          <div className={styles.heroColumns} aria-hidden="true">
            {/* Column group — widths and heights from Figma */}
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

          {/* Right: binoculars image */}
          <div className={styles.heroImageArea}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/case-studies/hero-binoculars.png"
              alt="Binoculars"
              className={styles.heroBinoculars}
            />
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO GRID ── */}
      <section className={styles.portfolioSection}>

        {/* Category filter pills */}
        <div className={styles.filters}>
          {FILTERS.map((f) => (
            <button
              key={f}
              className={`${styles.filterBtn} ${activeFilter === f ? styles.filterBtnActive : ""}`}
              onClick={() => setActiveFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <div className={styles.portfolioInner}>
          {/* Row 1: 2 cards */}
          <div className={styles.cardRow2}>
            <CaseStudyCard study={caseStudies[0]} />
            <CaseStudyCard study={caseStudies[1]} />
          </div>

          {/* Row 2: 1 full-width card */}
          <div className={styles.cardRow1}>
            <CaseStudyCard study={caseStudies[2]} />
          </div>

          {/* Row 3: 2 cards */}
          <div className={styles.cardRow2}>
            <CaseStudyCard study={caseStudies[3]} />
            <CaseStudyCard study={caseStudies[4]} />
          </div>

          {/* View more */}
          <Link href="#" className={styles.viewMore}>
            <span>view more</span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/events/arrow-circle.svg" alt="" aria-hidden="true" width={25} height={25} />
          </Link>
        </div>
      </section>

      <CtaSection />
      <Newsletter />
      <Footer />
    </main>
  );
}
