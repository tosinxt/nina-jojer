"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import CtaSection from "@/components/CtaSection";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import styles from "./policy.module.css";

/* ── FAQ data ── */
const faqs = [
  {
    q: "Can you share examples of advocacy outcomes you have achieved?",
    a: "Given the confidential nature of our mandates, we do not disclose client identities. What we can say is that our work has resulted in the stoppage of adverse legislation, the removal of tax provisions targeting digital companies, and the incorporation of client positions into finalised legislation in multiple jurisdictions. We are happy to discuss the nature of a specific challenge in a confidential conversation.",
  },
  {
    q: "Do you work with both private sector clients and governments?",
    a: "Yes. We advise multinational corporations, trade associations, and development organisations seeking to engage the government — and we work with government ministries and regulatory agencies seeking technical advisory support. The two sides of that experience make us more effective on both.",
  },
  {
    q: "How do you maintain effectiveness across multiple African markets simultaneously?",
    a: "Through a combination of in-country presence, embedded relationships built over years of engagement, and a monitoring infrastructure that tracks policy developments in real time. Our team includes specialists with direct government experience in Nigeria, South Africa, Sierra Leone, Kenya, and Ghana.",
  },
  {
    q: "How quickly can you mobilise on a regulatory issue?",
    a: "Where we have an active retainer relationship, immediately. For new engagements, we can typically be operational within two weeks. Speed matters in legislative environments, and our existing relationships compress the time required to engage effectively.",
  },
];

/* ── Sub-services data ── */
const subServices = [
  {
    title: "Policy Monitoring & Intelligence",
    desc: "Continuous tracking of legislative and regulatory developments across target markets, with structured briefings that translate political signals into business implications.",
  },
  {
    title: "Regulatory Engagement & Advocacy",
    desc: "Direct engagement with Ministries, Departments and Agencies, parliamentary committees, and regulatory bodies to advance client positions on pending or proposed legislation.",
  },
  {
    title: "Policy Design & Legislative Drafting",
    desc: "Technical support for the design of regulatory frameworks, impact assessments, and legislative drafting — working with both government clients and private sector actors seeking to shape enabling environments.",
  },
  {
    title: "Stakeholder Mapping & Management",
    desc: "Identification of the key actors whose positions determine outcomes, and sustained relationship management to build the coalitions necessary for advocacy success.",
  },
  {
    title: "Risk Assessment & Political Economy Analysis",
    desc: "Structured analysis of the political landscape — including electoral dynamics, institutional relationships, and vested interests — to help clients anticipate and mitigate regulatory risk before it crystallises.",
  },
  {
    title: "Capacity Building",
    desc: "Training programmes for public officials, regulatory staff, and private sector teams on policy process, legislative engagement, and regulatory compliance.",
  },
];

/* ── Other solutions ── */
const otherSolutions = [
  {
    id: "corporate",
    href: "/services/corporate",
    image: "/images/Layout/419/NqA6w 2-1.png",
    title: "Corporate Solutions",
    desc: "Africa-specialist advisory services offering granular intelligence, local networks, and on-the-ground insight to navigate Sub-Saharan markets.",
    tags: ["Market Entry Strategy", "Market Intelligence & Investment Analysis", "Contextual & Political Economy Analysis", "Due Diligence", "Corporate Strategy & Strategic Planning", "Enterprise Transformation", "Supply Chain Enablement", "Business Process Improvement", "HR Solutions"],
  },
  {
    id: "technology",
    href: "/services/technology",
    image: "/images/Layout/419/NqA6w 1-6.png",
    title: "Technology Solutions",
    desc: "We help businesses navigate and shape Africa's regulatory and political landscape by turning policy into strategy and engaging key institutions.",
    tags: ["Biometric & Identity Solutions", "Cybersecurity Solutions", "IT Consultancy & Infrastructure", "Telecoms Solutions", "Digital Economy Advisory"],
  },
  {
    id: "communications",
    href: "/services/communications",
    image: "/images/Layout/419/NqA6w 2.png",
    title: "Strategic Communications",
    desc: "We help businesses navigate and shape Africa's regulatory and political landscape by turning policy into strategy and engaging key institutions.",
    tags: ["Regulatory & Government Affairs Communications", "Crisis & Reputational Risk Communications", "Executive & Institutional Messaging", "Stakeholder & Community Engagement Communications", "Thought Leadership & Knowledge Products", "Media & Public Affairs Strategy"],
  },
];

/* ── Arrow icon — black filled square with white arrow, matches Figma Frame26 ── */
const ArrowIcon = () => (
  <svg width="25" height="25" viewBox="0 0 25 25" fill="none" aria-hidden="true">
    <rect width="25" height="25" fill="black" />
    <path d="M7 12.5H18M18 12.5L13.5 8M18 12.5L13.5 17" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* ── Chevron for FAQ ── */
const ChevronIcon = ({ open }: { open: boolean }) => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true" style={{ transform: open ? "rotate(180deg)" : "none", transition: "transform 0.25s" }}>
    <path d="M8 12L16 20L24 12" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* ── FAQ Accordion ── */
function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className={styles.faqList}>
      {faqs.map((faq) => (
        <div key={faq.q} className={styles.faqItem}>
          <button className={styles.faqQuestion} onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i}>
            <span>{faq.q}</span>
            <ChevronIcon open={open === i} />
          </button>
          {open === i && (
            <div className={styles.faqAnswer}>
              <p>{faq.a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

/* ── Page ── */
export default function PolicyAdvocacyPage() {
  return (
    <main className={styles.page}>
      <Navbar />

      {/* ── HEADER ── */}
      <section className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.headerText}>
            <h1 className={styles.headerTitle}>Policy &amp; Advocacy Solutions</h1>
            <p className={styles.headerBody}>
              We advise governments and corporations on the decisions that matter. Clear thinking. Real results.
            </p>
          </div>
        </div>
        <div className={styles.heroWrap}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/Layout/419/NqA6w 1-4.png" alt="Policy hero" className={styles.heroImg} />
        </div>
      </section>

      {/* ── OVERVIEW + WHAT THIS MEANS ── */}
      <section className={styles.contentSection}>
        <div className={styles.richText}>
          <div className={styles.overviewCol}>
            <h2 className={styles.colHeading}>Overview</h2>
            <p className={styles.colBody}>
              Operating in Africa requires more than understanding the rules — it requires shaping them. NINA JOJER helps clients navigate, influence, and stay ahead of the regulatory and political forces that determine whether a business thrives or stalls on the continent. We translate complex policy environments into actionable strategy, and we engage the institutions that matter — from national legislatures to continental bodies — on behalf of the clients we represent.
            </p>
          </div>
          <div className={styles.practiceCol}>
            <h2 className={styles.colHeading}>What this means in practice</h2>
            <div className={styles.colBody}>
              <p>
                Policy is rarely static in Africa's fastest-growing markets. Legislation moves quickly, political transitions shift regulatory priorities overnight, and the difference between a favourable outcome and an adverse one often comes down to who is in the room and when. NINA JOJER provides the intelligence, access, and advocacy capability to ensure our clients are not reacting to change — they are participating in its design.
              </p>
              <p>
                Our work spans the full policy lifecycle: from early-stage monitoring and risk identification, through active engagement with regulators and legislators, to the drafting and review of frameworks that shape how industries are governed. We have advised governments, influenced legislation, and secured outcomes that protect client interests across Nigeria, Kenya, South Africa, Ghana, Sierra Leone, and beyond.
              </p>
            </div>
          </div>
        </div>

        {/* ── SUB SERVICES ── */}
        <div className={styles.subServices}>
          <h2 className={styles.subServicesTitle}>Sub Services</h2>
          <div className={styles.subServicesGrid}>
            {subServices.map((s) => (
              <div key={s.title} className={styles.subServiceCard}>
                <h3 className={styles.subServiceTitle}>{s.title}</h3>
                <p className={styles.subServiceDesc}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CASE STUDIES ── */}
      <section className={styles.caseStudies}>
        <div className={styles.caseStudiesHeader}>
          <h2 className={styles.caseStudiesTitle}>Case Studies on Policy &amp; Advocacy Solutions</h2>
          <Link href="/case-studies" className={styles.viewAll}>
            <span>VIEW ALL</span>
            <ArrowIcon />
          </Link>
        </div>
        <div className={styles.caseStudiesGrid}>
          {/* Card 1 — Gemini AI shield image on left */}
          <div className={styles.caseCard}>
            <div className={styles.caseCardImageWrap}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/Layout/484/Gemini_Generated_Image_mrnhjfmrnhjfmrnh 1.png"
                alt="E-Borders infrastructure"
                className={styles.caseCardImg1}
              />
            </div>
            <div className={styles.caseCardContent}>
              <div className={styles.caseCardText}>
                <h3 className={styles.caseCardTitle}>Enhancing National Security through E-Borders Infrastructure Modernization</h3>
                <p className={styles.caseCardDesc}>A government border agency successfully modernized its E-Borders infrastructure through strategic leadership, secure networks, and virtualization, enhancing national security and operational efficiency.</p>
              </div>
              <Link href="/case-studies" className={styles.learnMore}>
                <span>LEARN MORE</span>
                <ArrowIcon />
              </Link>
            </div>
          </div>
          {/* Card 2 — coins/scales image on left */}
          <div className={styles.caseCard}>
            <div className={styles.caseCardImageWrap}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/Layout/484/NqA6w 1.png"
                alt="Financial network transformation"
                className={styles.caseCardImg2}
              />
            </div>
            <div className={styles.caseCardContent}>
              <div className={styles.caseCardText}>
                <h3 className={styles.caseCardTitle}>Strategic Network Transformation and Security Enhancement for Global Financial Institutions</h3>
                <p className={styles.caseCardDesc}>A global financial provider successfully deployed a secure IP-VPN across 5000 sites, achieving enhanced network security, major cost savings, and smooth merger integration.</p>
              </div>
              <Link href="/case-studies" className={styles.learnMore}>
                <span>LEARN MORE</span>
                <ArrowIcon />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className={styles.faqSection}>
        <div className={styles.faqInner}>
          {/* Left */}
          <div className={styles.faqLeft}>
            <div className={styles.faqLeftTop}>
              <h2 className={styles.faqTitle}>Questions</h2>
              <p className={styles.faqSubtitle}>The answers you need about policy work and how we approach it.</p>
            </div>
            <div className={styles.faqCta}>
              <h3 className={styles.faqCtaTitle}>Need more clarity?</h3>
              <p className={styles.faqCtaBody}>Reach out and let's talk about your specific situation.</p>
              <Link href="/contact" className={styles.faqCtaBtn}>Contact</Link>
            </div>
          </div>
          {/* Right */}
          <div className={styles.faqRight}>
            <FaqAccordion />
          </div>
        </div>
      </section>

      {/* ── SEE OTHER SOLUTIONS ── */}
      <section className={styles.otherSolutions}>
        <div className={styles.otherLeft}>
          <h2 className={styles.otherTitle}>See Other Solutions</h2>
        </div>
        <div className={styles.otherCards}>
          {otherSolutions.map((s, i) => (
            <div key={s.id} className={styles.otherCardWrapper} style={{ zIndex: i + 1 }}>
              <Link href={s.href} className={styles.otherCard}>
                <div className={styles.otherCardImageWrap}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={s.image} alt={s.title} className={styles.otherCardImage} />
                </div>
                <div className={styles.otherCardBody}>
                  <div className={styles.otherCardTop}>
                    <h3 className={styles.otherCardTitle}>{s.title}</h3>
                    <p className={styles.otherCardDesc}>{s.desc}</p>
                    <div className={styles.tags}>
                      {s.tags.map((tag) => (
                        <span key={tag} className={styles.tag}>
                          <span className={styles.tagDot} />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className={styles.learnMore}>
                    <span>LEARN MORE</span>
                    <ArrowIcon />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>

      <CtaSection />
      <Newsletter />
      <Footer />
    </main>
  );
}
