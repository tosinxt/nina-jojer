"use client";

import Link from "next/link";
import BlurText from "@/components/BlurText";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import styles from "./services.module.css";

export default function ServicesPage() {
  return (
    <main className={styles.page}>
      <Navbar />

      {/* ── HEADER ── */}
      <section className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.headerText}>
            <BlurText text="Solutions for Strategic Advantage" direction="bottom" delay={130} className={styles.tagline} />
            <BlurText text="We combine institutional insight, strategic advisory, and technology delivery to help clients navigate complexity and achieve lasting impact." direction="bottom" delay={80} stepDuration={0.4} className={styles.headerBody} />
          </div>
        </div>

        {/* Desktop banner */}
        <div className={styles.heroDesktop}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/services.png" alt="" aria-hidden="true" className={styles.heroFullImage} />
        </div>

        {/* Mobile banner */}
        <div className={styles.heroMobile}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/servicesmobile.png" alt="" aria-hidden="true" className={styles.heroFullImage} />
        </div>
      </section>

      {/* ── SERVICES ── */}
      <Services />

      {/* ── CTA ── */}
      <section className={styles.cta}>
        <div className={styles.ctaContent}>
          <BlurText as="h2" text="Ready to move forward?" direction="bottom" delay={120} className={styles.ctaTitle} />
          <BlurText text="Let us help you navigate what comes next" direction="bottom" delay={100} stepDuration={0.4} className={styles.ctaBody} />
          <Link href="/contact" className={styles.ctaButton}>
            LET&apos;S TALK
          </Link>
        </div>
      </section>

      {/* ── NEWSLETTER ── */}
      <Newsletter />

      <Footer />
    </main>
  );
}
