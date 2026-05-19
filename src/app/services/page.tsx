"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import styles from "./services.module.css";

const heroImage = "https://www.figma.com/api/mcp/asset/0885460e-d6b2-4c70-b8bc-099d34e346fb";

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
          <img src={heroImage} alt="Hero" className={styles.heroImage} />
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
      <section className={styles.newsletter}>
        <div className={styles.newsletterInner}>
          <div className={styles.newsletterLeft}>
            <div className={styles.panelLabel}>
              <span className={styles.labelLine} />
              <span className={styles.labelText}>NEWSLETTERS</span>
            </div>
            <h2 className={styles.newsletterTitle}>Stay informed</h2>
          </div>
          <div className={styles.newsletterRight}>
            <p className={styles.newsletterBody}>
              Get our latest thinking delivered to your inbox each month
            </p>
            <div className={styles.newsletterForm}>
              <div className={styles.formRow}>
                <input
                  type="email"
                  placeholder="Your email address"
                  className={styles.emailInput}
                />
                <button className={styles.subscribeBtn}>Subscribe</button>
              </div>
              <p className={styles.newsletterDisclaimer}>
                We respect your inbox. Unsubscribe anytime from any email.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
