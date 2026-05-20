"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import CtaSection from "@/components/CtaSection";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import styles from "./technology.module.css";

/* ── FAQ data ── */
const faqs = [
  {
    q: "What scale of technology programmes have you delivered?",
    a: "In the UK and Nigeria combined, we have executed technology programmes valued at over £500 million. Our work has included national identity infrastructure, eBorders systems, foreign mission connectivity for a Ministry of Foreign Affairs, and cybersecurity deployments in top-secret, security-cleared environments.",
  },
  {
    q: "How does the Technology practice connect to NJA's advisory work?",
    a: "The connection is deliberate. Technology deployments in African contexts succeed or fail based on institutional relationships, regulatory alignment, and political buy-in — all of which are core NJA capabilities. We are one of very few firms that can manage both the technical delivery and the stakeholder environment simultaneously.",
  },
  {
    q: "Do you work with governments directly or through implementing partners?",
    a: "Both. We have worked as primary contractor, security technical architect, and as advisory partner to other implementers. Our role is defined by what the mandate requires, not by a fixed engagement model.",
  },
  {
    q: "Can you support private sector companies on technology regulatory matters?",
    a: "Yes. Particularly in telecoms, fintech, and data-intensive sectors, we provide regulatory intelligence, engagement support with the relevant agencies (NCC, NITDA, CBN, and equivalents across African markets), and technical advisory on compliance frameworks.",
  },
];

/* ── Sub-services data ── */
const subServices = [
  {
    title: "Biometric & Identity Solutions",
    desc: "Design and implementation of biometric verification systems, including fingerprint and facial recognition, iris recognition, smart border infrastructure, and mobile identity platforms. We have led the design and delivery of national-scale identity infrastructure, including billing, payments, key lifecycle management, and citizen identity auditing.",
  },
  {
    title: "Cybersecurity Solutions",
    desc: "Customised cybersecurity frameworks for government and private sector clients, including intrusion detection, threat modelling, network security architecture, and security-cleared implementation in sensitive environments. Our work spans confidentiality, integrity, availability, authentication, key management, physical security, and social engineering mitigation.",
  },
  {
    title: "IT Consultancy & Infrastructure",
    desc: "Expert advisory on IT systems architecture, software design, and technology infrastructure optimisation. We also support upskilling programmes for public sector technology teams and provide strategic advisory on digital policy and technology governance.",
  },
  {
    title: "Telecoms Solutions",
    desc: "Licensed Value Added Services (VAS) aggregator solutions, including SMS/USSD gateways, DND/MNP portals, core network architecture design, and Level 1–3 technical support for telecoms operators and regulators.",
  },
  {
    title: "Digital Economy Advisory",
    desc: "Strategic advisory on digital transformation, technology regulation, and the policy frameworks that govern Africa's emerging digital economy — bridging our technology expertise with our policy and advocacy capabilities.",
  },
];

/* ── Other solutions ── */
const otherSolutions = [
  {
    id: "policy",
    href: "/services/policy",
    image: "/images/Layout/419/NqA6w 1-4.png",
    title: "Policy & Advocacy Solutions",
    desc: "We help businesses navigate and shape Africa's regulatory and political landscape by turning policy into strategy and engaging key institutions.",
    tags: ["Policy Monitoring & Intelligence", "Regulatory Engagement & Advocacy", "Policy Design & Legislative Drafting", "Stakeholder Mapping & Management", "Risk Assessment & Political Economy Analysis", "Capacity Building"],
  },
  {
    id: "corporate",
    href: "/services/corporate",
    image: "/images/Layout/419/NqA6w 2-1.png",
    title: "Corporate Solutions",
    desc: "Africa-specialist advisory services offering granular intelligence, local networks, and on-the-ground insight to navigate Sub-Saharan markets.",
    tags: ["Market Entry Strategy", "Market Intelligence & Investment Analysis", "Contextual & Political Economy Analysis", "Due Diligence", "Corporate Strategy & Strategic Planning", "Enterprise Transformation", "Supply Chain Enablement", "Business Process Improvement", "HR Solutions"],
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

/* ── Arrow icon ── */
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
      {faqs.map((faq, i) => (
        <div key={i} className={styles.faqItem}>
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
export default function TechnologySolutionsPage() {
  return (
    <main className={styles.page}>
      <Navbar />

      {/* ── HEADER ── */}
      <section className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.headerText}>
            <h1 className={styles.headerTitle}>Technology Solutions</h1>
            <p className={styles.headerBody}>
              We help businesses navigate and shape Africa's regulatory and political landscape by turning policy into strategy and engaging key institutions.
            </p>
          </div>
        </div>
        <div className={styles.heroWrap}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/Layout/419/NqA6w 1-6.png" alt="Technology Solutions hero" className={styles.heroImg} />
        </div>
      </section>

      {/* ── OVERVIEW + WHAT THIS MEANS ── */}
      <section className={styles.contentSection}>
        <div className={styles.richText}>
          <div className={styles.overviewCol}>
            <h2 className={styles.colHeading}>Overview</h2>
            <p className={styles.colBody}>
              NINA JOJER's Technology Solutions practice sits at the intersection of critical infrastructure, institutional capacity, and the digital economy. We design, implement, and secure technology systems for governments, development organisations, and private sector clients — with a particular focus on the identity, border, connectivity, and cybersecurity infrastructure that underpins Africa's digital transformation.
            </p>
          </div>
          <div className={styles.practiceCol}>
            <h2 className={styles.colHeading}>What this means in practice</h2>
            <div className={styles.colBody}>
              <p>
                Technology in African public sector contexts is not a software procurement exercise. It involves navigating institutional complexity, building stakeholder trust, ensuring interoperability with legacy systems, and delivering solutions that are resilient in environments with constrained connectivity and evolving regulatory requirements. NINA JOJER has operated at this level — in live, security-cleared environments, delivering mission-critical systems across multiple countries.
              </p>
              <p>
                Our technology work is grounded in the same political economy understanding that drives our advisory practice. We know that a biometric identity system is not just a technology deployment — it is a governance infrastructure with political dimensions, procurement sensitivities, and long-term institutional implications. That integrated perspective is what distinguishes our technology offer from a standard systems integrator.
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
          <h2 className={styles.caseStudiesTitle}>Case Studies on Technology Solutions</h2>
          <Link href="/case-studies" className={styles.viewAll}>
            <span>VIEW ALL</span>
            <ArrowIcon />
          </Link>
        </div>
        <div className={styles.caseStudiesGrid}>
          {/* Card 1 */}
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
          {/* Card 2 */}
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
          <div className={styles.faqLeft}>
            <div className={styles.faqLeftTop}>
              <h2 className={styles.faqTitle}>Questions</h2>
              <p className={styles.faqSubtitle}>The answers you need about our technology work and how we approach it.</p>
            </div>
            <div className={styles.faqCta}>
              <h3 className={styles.faqCtaTitle}>Need more clarity?</h3>
              <p className={styles.faqCtaBody}>Reach out and let's talk about your specific situation.</p>
              <Link href="/contact" className={styles.faqCtaBtn}>Contact</Link>
            </div>
          </div>
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
