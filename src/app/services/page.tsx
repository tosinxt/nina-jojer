"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import styles from "./services.module.css";

const heroImage = "/images/services/hero.png";

export default function ServicesPage() {
  return (
    <main className={styles.page}>
      <Navbar />

      {/* ── HEADER ── */}
      <section className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.headerText}>
            <p className={styles.tagline}>
              Solutions for Strategic Advantage
            </p>
            <p className={styles.headerBody}>
              We combine institutional insight, strategic advisory, and technology
              delivery to help clients navigate complexity and achieve lasting impact.
            </p>
          </div>
        </div>
        <div className={styles.heroImageWrap}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={heroImage} alt="" aria-hidden="true" className={styles.heroImage} />
        </div>
      </section>

      {/* ── SERVICES ── */}
      <Services />

      {/* ── CTA ── */}
      <section className={styles.cta}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>Ready to move forward?</h2>
          <p className={styles.ctaBody}>Let us help you navigate what comes next</p>
          <Link href="/contact" className={styles.ctaButton}>
            LET'S TALK
          </Link>
        </div>
      </section>

      {/* ── NEWSLETTER ── */}
      <Newsletter />

      <Footer />
    </main>
  );
}
