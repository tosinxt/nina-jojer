"use client";

import { useState } from "react";
import Link from "next/link";
import BlurText from "@/components/BlurText";
import Navbar from "@/components/Navbar";
import CtaSection from "@/components/CtaSection";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import styles from "./corporate.module.css";

/* ── FAQ data ── */
const faqs = [
  {
    q: "How do you approach market entry for first-time entrants into Africa?",
    a: "We start with a structured market assessment — analysing the regulatory environment, competitive landscape, key institutional players, and on-the-ground realities that don't appear in public data. From there, we develop a sequenced market entry strategy that accounts for local partnership requirements, risk mitigation, and a realistic path to operational readiness. We stay engaged through implementation, not just the advisory phase.",
  },
  {
    q: "What makes your market intelligence different from third-party research providers?",
    a: "Our intelligence is relationship-based and real-time. We have embedded networks across government, the private sector, and civil society in our core markets. This means we can tell you not just what the data says, but what is likely to happen next — and why. We translate context into decisions, not just reports.",
  },
  {
    q: "Do you work with businesses that are already operating in Africa but facing growth challenges?",
    a: "Yes, a significant share of our work is with clients who are already on the ground but navigating an inflection point — whether that is expansion into new markets, a structural transformation, a regulatory shift, or a performance issue. We bring fresh eyes, deep context, and a track record of solving complex problems in environments that don't follow Western business playbooks.",
  },
  {
    q: "Can you support both strategy and execution?",
    a: "We do both, and we believe the distinction between strategy and execution is often a false one. A strategy that cannot be executed is not a strategy — it is a document. We stay engaged through implementation, adapt as conditions change, and measure our success by outcomes, not deliverables.",
  },
];

/* ── Sub-services data ── */
const subServices = [
  {
    title: "Market Entry Strategy",
    desc: "Structured market assessment and sequenced entry strategies that account for regulatory environments, competitive landscapes, and on-the-ground realities across Africa.",
  },
  {
    title: "Market Intelligence & Investment Analysis",
    desc: "Real-time, relationship-based intelligence that translates complex market signals into actionable decisions — going beyond public data to what is actually happening and why.",
  },
  {
    title: "Contextual & Political Economy Analysis",
    desc: "Deep analysis of the political, institutional, and social forces shaping business environments, helping clients anticipate change before it disrupts their operations.",
  },
  {
    title: "Due Diligence",
    desc: "Rigorous assessments of partners, assets, and operating environments — combining financial analysis with on-the-ground intelligence to surface risks that standard processes miss.",
  },
  {
    title: "Corporate Strategy & Strategic Planning",
    desc: "Long-term strategic frameworks grounded in African market realities, helping organisations define direction, allocate resources, and build competitive advantage on the continent.",
  },
  {
    title: "Enterprise Transformation",
    desc: "Organisational and operational restructuring to improve performance, adapt to market shifts, and build the capabilities required to compete in dynamic African markets.",
  },
  {
    title: "Supply Chain Enablement",
    desc: "Design and optimisation of supply chains suited to African infrastructure realities — reducing cost, improving resilience, and unlocking local sourcing opportunities.",
  },
  {
    title: "Business Process Improvement",
    desc: "Diagnostic and redesign of core business processes to improve efficiency, reduce waste, and create the operational foundations for sustainable growth.",
  },
  {
    title: "HR Solutions",
    desc: "Talent strategy, organisational design, and human capital advisory services that help businesses attract, retain, and develop the people needed to succeed in African markets.",
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
    id: "technology",
    href: "/services/technology",
    image: "/images/Layout/419/NqA6w 1-6.png",
    title: "Technology Solutions",
    desc: "We help businesses deploy and harness transformative technology across Africa — from identity systems and cybersecurity to digital economy infrastructure.",
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
export default function CorporateSolutionsPage() {
  return (
    <main className={styles.page}>
      <Navbar />

      {/* ── HEADER ── */}
      <section className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.headerText}>
            <BlurText as="h1" text="Corporate Solutions" direction="bottom" delay={130} className={styles.headerTitle} />
            <BlurText text="Africa-specialist advisory services offering granular intelligence, local networks, and on-the-ground insight to navigate Sub-Saharan markets." direction="bottom" delay={80} stepDuration={0.4} className={styles.headerBody} />
          </div>
        </div>
        <div className={styles.heroWrap}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/Layout/419/NqA6w 2-1.png" alt="Corporate Solutions hero" className={styles.heroImg} />
        </div>
      </section>

      {/* ── OVERVIEW + WHAT THIS MEANS ── */}
      <section className={styles.contentSection}>
        <div className={styles.richText}>
          <div className={styles.overviewCol}>
            <h2 className={styles.colHeading}>Overview</h2>
            <p className={styles.colBody}>
              Succeeding in Africa demands more than ambition — it demands intelligence. The gap between market opportunity and market reality is wide, and navigating it requires the kind of granular, relationship-grounded insight that only comes from genuine on-the-ground presence. NINA JOJER exists to close that gap. We provide Africa-specialist advisory services that translate complex market environments into clear strategy, and clear strategy into results.
            </p>
          </div>
          <div className={styles.practiceCol}>
            <h2 className={styles.colHeading}>What this means in practice</h2>
            <div className={styles.colBody}>
              <p>
                Africa's fastest-growing markets are defined by institutional complexity, infrastructure variability, and political dynamics that conventional advisory frameworks are not built to handle. Our corporate advisory practice is designed specifically for these environments — combining deep local knowledge with strategic rigour to help clients make better decisions, faster.
              </p>
              <p>
              Whether we are guiding a first-time market entrant through a structured entry process, helping an established business navigate a transformation, or providing the intelligence needed to make a high-stakes investment decision, we bring the same commitment: to understand the environment as it actually is, not as it appears from a distance. Our networks span government, the private sector, and civil society across Africa.
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
          <h2 className={styles.caseStudiesTitle}>Case Studies on Corporate Solutions</h2>
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
                alt="Market entry strategy"
                className={styles.caseCardImg1}
              />
            </div>
            <div className={styles.caseCardContent}>
              <div className={styles.caseCardText}>
                <h3 className={styles.caseCardTitle}>Strategic Market Entry for a Global Financial Services Provider into West Africa</h3>
                <p className={styles.caseCardDesc}>A global financial services firm successfully entered the West African market through a structured market assessment, local partnership strategy, and phased operational rollout that reduced time-to-revenue by 40%.</p>
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
                alt="Enterprise transformation"
                className={styles.caseCardImg2}
              />
            </div>
            <div className={styles.caseCardContent}>
              <div className={styles.caseCardText}>
                <h3 className={styles.caseCardTitle}>Enterprise Transformation and Supply Chain Optimisation for a Regional Manufacturing Group</h3>
                <p className={styles.caseCardDesc}>A regional manufacturing conglomerate restructured its operations across three markets, achieving significant efficiency gains and building a supply chain resilient to the infrastructure variability common across Africa.</p>
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
              <p className={styles.faqSubtitle}>The answers you need about our corporate advisory work and how we approach it.</p>
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
