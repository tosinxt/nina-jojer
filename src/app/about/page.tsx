"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import CtaSection from "@/components/CtaSection";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import styles from "./about.module.css";

/* ── Decorative bar data for hero ── */
const heroBars = [
  { left: 412.87, top: -52, width: 30.929 },
  { left: 305.65, top: -52, width: 57.734 },
  { left: 126.26, top: -52, width: 88.662 },
  { left: -11.89, top: -52, width: 88.662 },
  { left: -13.95, top: 86.15, width: 88.662 },
  { left: -11.88, top: 224.3, width: 173.201 },
  { left: -13.95, top: 362.45, width: 263.925 },
  { left: -49, top: 362.45, width: 263.925 },
  { left: -13.95, top: 500.59, width: 348.464 },
  { left: 74.72, top: 86.15, width: 88.662 },
  { left: 161.31, top: 224.3, width: 88.662 },
  { left: 247.92, top: 362.45, width: 88.662 },
  { left: 334.52, top: 500.59, width: 88.662 },
  { left: 421.12, top: 638.74, width: 88.662 },
  { left: 214.92, top: 86.15, width: 88.662 },
  { left: 303.59, top: 224.3, width: 88.662 },
  { left: 392.25, top: 362.45, width: 88.662 },
  { left: 480.91, top: 500.59, width: 88.662 },
  { left: 355.13, top: 86.15, width: 57.734 },
  { left: 404.62, top: 224.3, width: 57.734 },
  { left: 454.11, top: 362.45, width: 57.734 },
  { left: 462.36, top: 86.15, width: 30.929 },
  { left: 524.22, top: 224.3, width: 30.929 },
  { left: 586.07, top: 362.45, width: 30.929 },
];

/* ── Stats ── */
const stats = [
  { value: "2014", label: "Founded" },
  { value: "25", label: "Governments and corporations advised" },
  { value: "18", label: "Countries where we operate" },
  { value: "94%", label: "Client retention rate" },
];

/* ── Values ── */
const values = [
  {
    icon: "/images/icons/transparency.svg",
    title: "Transparency",
    desc: "We are honest and open with our employees, customers and stakeholders about our goals, performance and challenges, and we foster trust in our relationships.",
  },
  {
    icon: "/images/icons/innovation.svg",
    title: "Innovation",
    desc: "We encourage creativity and innovation in our work environment, and we offer cutting-edge services that anticipate and respond to the changing needs of the market.",
  },
  {
    icon: "/images/icons/data-driven.svg",
    title: "Data-Driven",
    desc: "We use data and insights to inform our decisions and actions, and to help our clients achieve their objectives.",
  },
  {
    icon: "/images/icons/quality.svg",
    title: "Quality",
    desc: "We pay close attention to detail and listen to our customers' needs and expectations, and we deliver high-quality products and services that exceed their satisfaction.",
  },
  {
    icon: "/images/icons/inclusivity.svg",
    title: "Inclusivity",
    desc: "We embrace and respect the diversity of backgrounds, perspectives, and identities of our employees, customers, and stakeholders, and we create a culture of belonging and collaboration.",
  },
  {
    icon: "/images/icons/social-responsibility.svg",
    title: "Social Responsibility",
    desc: "We are aware of our impact on the environment and society, and we align our services with the UN SDG goals.",
  },
];

/* ── Team members (placeholder data from Figma) ── */
const team = [
  { name: "Hon. Chukwuemeka Ujam,", credentials: "B.Engr, M.Sc, PhD, FNSE, mni", role: "Managing Partner" },
  { name: "Hon. Chukwuemeka Ujam,", credentials: "B.Engr, M.Sc, PhD, FNSE, mni", role: "Managing Partner" },
  { name: "Hon. Chukwuemeka Ujam,", credentials: "B.Engr, M.Sc, PhD, FNSE, mni", role: "Managing Partner" },
  { name: "Hon. Chukwuemeka Ujam,", credentials: "B.Engr, M.Sc, PhD, FNSE, mni", role: "Managing Partner" },
  { name: "Hon. Chukwuemeka Ujam,", credentials: "B.Engr, M.Sc, PhD, FNSE, mni", role: "Managing Partner" },
  { name: "Hon. Chukwuemeka Ujam,", credentials: "B.Engr, M.Sc, PhD, FNSE, mni", role: "Managing Partner" },
];

/* ── LinkedIn icon SVG ── */
const LinkedInIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-label="LinkedIn">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="currentColor" />
  </svg>
);

export default function AboutPage() {
  return (
    <main className={styles.page}>
      <Navbar />

      {/* ── HEADER ── */}
      <section className={styles.header}>
        {/* Right-aligned text block */}
        <div className={styles.headerContent}>
          <div className={styles.headerText}>
            <h1 className={styles.headerTitle}>Empowering Growth and Impact</h1>
            <p className={styles.headerBody}>
              At Nina Jojer, we are passionate about empowering businesses and organizations across sub-Saharan Africa to thrive in a rapidly changing world.
            </p>
          </div>
        </div>

        {/* Hero area with decorative bars + portrait */}
        <div className={styles.heroArea}>
          {/* Decorative staircase bars */}
          {heroBars.map((bar, i) => (
            <div
              key={i}
              className={styles.heroBar}
              style={{ left: bar.left, top: bar.top, width: bar.width }}
            />
          ))}
          {/* Portrait image */}
          <div className={styles.heroPortraitWrap}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/Header/144/7Ekyx 2.png"
              alt="About Nina Jojer"
              className={styles.heroPortraitImg}
            />
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className={styles.statsSection}>
        <div className={styles.statsContainer}>
          <h2 className={styles.statsHeading}>What we've achieved over the years</h2>
          <div className={styles.statsRow}>
            {stats.map((s) => (
              <div key={s.value} className={styles.statItem}>
                <p className={styles.statValue}>{s.value}</p>
                <p className={styles.statLabel}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO WE ARE ── */}
      <section className={styles.whoSection}>
        <div className={styles.whoContainer}>
          <div className={styles.whoContent}>
            <h2 className={styles.whoHeading}>Strategy rooted in African realities</h2>
            <div className={styles.whoBody}>
              <p>
                We are a dynamic consulting firm recognized for leveraging deep expertise in communications, public policy, corporate strategy, human capital development, technology solutions, and advocacy to deliver transformative results. Our success is built on a strong network spanning the political landscape and the private sector.
              </p>
              <p>
                Since our inception, Nina Jojer has cultivated in-house capabilities to provide tailored solutions that meet the unique needs of our clients. We specialize in facilitating seamless operations across markets in Sub-Saharan Africa by fostering strategic relationships with Ministries, Departments, Agencies, National Assemblies, and influential political stakeholders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── DIRECTION (Vision + Mission) ── */}
      <section className={styles.directionSection}>
        <div className={styles.directionContainer}>
          {/* Left column */}
          <div className={styles.directionLeft}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowLine} />
              <span className={styles.eyebrowText}>DIRECTION</span>
            </div>
            <h2 className={styles.directionHeading}>Where we're headed and why</h2>
            <p className={styles.directionBody}>
              We believe Africa's challenges demand African solutions. Our vision is a continent where institutions lead with clarity and purpose.
            </p>
          </div>
          {/* Right column — Vision + Mission */}
          <div className={styles.directionRight}>
            <div className={styles.visionMissionRow}>
              <div className={styles.visionMissionItem}>
                <h3 className={styles.visionMissionTitle}>Our vision</h3>
                <p className={styles.visionMissionBody}>African institutions that lead with clarity and strategic purpose.</p>
              </div>
              <div className={styles.visionMissionItem}>
                <h3 className={styles.visionMissionTitle}>Our mission</h3>
                <p className={styles.visionMissionBody}>We provide strategy and counsel rooted in African realities.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className={styles.valuesSection}>
        <div className={styles.valuesContainer}>
          {/* Header row */}
          <div className={styles.valuesHeader}>
            <div className={styles.valuesHeaderLeft}>
              <div className={styles.eyebrow}>
                <span className={styles.eyebrowLine} />
                <span className={styles.eyebrowText}>VALUES</span>
              </div>
              <h2 className={styles.valuesHeading}>What we deliver</h2>
            </div>
            <p className={styles.valuesSubtitle}>Real change across African institutions and governments</p>
          </div>
          {/* Grid: 2 rows × 3 cols */}
          <div className={styles.valuesGrid}>
            {values.map((v) => (
              <div key={v.title} className={styles.valueCard}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={v.icon} alt={v.title} className={styles.valueIcon} />
                <h3 className={styles.valueTitle}>{v.title}</h3>
                <p className={styles.valueDesc}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className={styles.teamSection}>
        <div className={styles.teamContainer}>
          {/* Section header */}
          <div className={styles.teamHeader}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowLine} />
              <span className={styles.eyebrowText}>PEOPLE</span>
            </div>
            <h2 className={styles.teamHeading}>The people behind it</h2>
            <p className={styles.teamSubtitle}>
              Strategy is only as good as the minds shaping it. Our team brings decades of experience across policy, governance, and African institutions.
            </p>
          </div>

          {/* Team grid: 2 rows × 3 cards */}
          <div className={styles.teamGrid}>
            {team.map((member, i) => (
              <div key={i} className={styles.teamCard}>
                <div className={styles.teamCardImage} />
                <div className={styles.teamCardInfo}>
                  <div className={styles.teamCardTitles}>
                    <p className={styles.teamCardName}>
                      <span className={styles.teamCardNameBold}>{member.name} </span>
                      <span className={styles.teamCardNameBold}>{member.credentials}</span>
                    </p>
                    <p className={styles.teamCardRole}>{member.role}</p>
                  </div>
                  <a href="#" className={styles.teamCardLinkedIn} aria-label="LinkedIn">
                    <LinkedInIcon />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Join our team CTA */}
          <div className={styles.joinTeam}>
            <div className={styles.joinTeamText}>
              <h3 className={styles.joinTeamTitle}>Join our team</h3>
              <p className={styles.joinTeamBody}>We're building something that matters. If you think like we do, we want to hear from you.</p>
            </div>
            <Link href="/career" className={styles.joinTeamBtn}>View Careers</Link>
          </div>
        </div>
      </section>

      <CtaSection />
      <Newsletter />
      <Footer />
    </main>
  );
}
