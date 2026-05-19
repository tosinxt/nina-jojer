import Navbar from "@/components/Navbar";
import CtaSection from "@/components/CtaSection";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import styles from "./case-study-detail.module.css";

export default function CaseStudyDetailPage() {
  return (
    <main className={styles.page}>
      <Navbar />

      {/* ── HERO HEADER ── */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>
              Enhancing National Security through E-Borders Infrastructure Modernization
            </h1>
            <p className={styles.heroSubtitle}>
              A government agency needed clarity on regulatory direction. We provided it, and they moved forward with confidence.
            </p>
          </div>
        </div>
        <div className={styles.heroImageWrap}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/case-studies/detail-hero.png"
            alt="E-Borders Infrastructure"
            className={styles.heroImage}
          />
        </div>
      </section>

      {/* ── ABOUT THE CLIENT ── */}
      <section className={styles.contentRow}>
        <div className={styles.contentRowInner}>
          <div className={styles.contentRowLabel}>
            <h2 className={styles.sectionLabel}>ABOUT THE CLIENT</h2>
          </div>
          <div className={styles.contentRowBody}>
            <p className={styles.bodyText}>
              The client is a government entity responsible for maintaining and securing the nation&apos;s borders. They are committed to utilizing cutting-edge technology and strategic partnerships to ensure the safety and integrity of border operations.
            </p>
          </div>
        </div>
      </section>

      {/* ── CLIENT'S MISSION ── */}
      <section className={styles.contentRow}>
        <div className={styles.contentRowInner}>
          <div className={styles.contentRowLabel}>
            <h2 className={styles.sectionLabel}>CLIENT&apos;S MISSION</h2>
          </div>
          <div className={styles.contentRowBody}>
            <p className={styles.bodyText}>
              To safeguard national interests by implementing robust, technologically advanced systems that streamline and secure border control processes, ensuring efficient management of immigration and customs services.
            </p>
          </div>
        </div>
      </section>

      {/* ── SERVICE RENDERED ── */}
      <section className={styles.serviceSection}>
        <div className={styles.serviceSectionInner}>
          <h2 className={styles.sectionLabel}>SERVICE RENDERED</h2>
          <ul className={styles.serviceList}>
            {[
              "Strategic and Technical Leadership",
              "Collaboration and Liaison",
              "Infrastructure Solutions Design",
              "Deployment of Secure Network Solutions",
              "Virtualisation and System Optimisation",
            ].map((item) => (
              <li key={item} className={styles.serviceListItem}>
                <span className={styles.listBullet} aria-hidden="true" />
                <span className={styles.bodyText}>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── THE RESULTS ── */}
      <section className={styles.resultsSection}>
        <div className={styles.resultsSectionInner}>
          <h2 className={styles.sectionLabel}>THE RESULTS</h2>
          <div className={styles.resultsGrid}>
            {[
              {
                title: "ADVANCED BORDER SECURITY",
                body: "Successfully enhanced the national border security infrastructure, integrating state-of-the-art technology to monitor and manage border activities effectively.",
              },
              {
                title: "Streamlined Operations through Virtualization",
                body: "Achieved significant improvements in operational efficiency and security through the implementation of a virtualized environment.",
              },
              {
                title: "Strengthened Industry Partnerships",
                body: "Fostered strong collaborations with industry leaders, enhancing the research and development capabilities of the organization.",
              },
              {
                title: "Optimized Resource Allocation and Contractual Agreements",
                body: "Ensured optimal resource utilization and favorable contractual terms, supporting the project's long-term sustainability and success.",
              },
            ].map((result) => (
              <div key={result.title} className={styles.resultItem}>
                <h3 className={styles.resultTitle}>{result.title}</h3>
                <p className={styles.resultBody}>{result.body}</p>
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
