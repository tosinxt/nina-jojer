import Link from "next/link";
import BlurText from "@/components/BlurText";
import Navbar from "@/components/Navbar";
import CtaSection from "@/components/CtaSection";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import ServiceCaseStudies from "@/components/ServiceCaseStudies";
import FaqAccordion from "./FaqAccordion";
import styles from "./corporate.module.css";

const subServices = [
  { title: "Market Entry Strategy", desc: "Structured market assessment and sequenced entry strategies that account for regulatory environments, competitive landscapes, and on-the-ground realities across Africa." },
  { title: "Market Intelligence & Investment Analysis", desc: "Real-time, relationship-based intelligence that translates complex market signals into actionable decisions — going beyond public data to what is actually happening and why." },
  { title: "Contextual & Political Economy Analysis", desc: "Deep analysis of the political, institutional, and social forces shaping business environments, helping clients anticipate change before it disrupts their operations." },
  { title: "Due Diligence", desc: "Rigorous assessments of partners, assets, and operating environments — combining financial analysis with on-the-ground intelligence to surface risks that standard processes miss." },
  { title: "Corporate Strategy & Strategic Planning", desc: "Long-term strategic frameworks grounded in African market realities, helping organisations define direction, allocate resources, and build competitive advantage on the continent." },
  { title: "Enterprise Transformation", desc: "Organisational and operational restructuring to improve performance, adapt to market shifts, and build the capabilities required to compete in dynamic African markets." },
  { title: "Supply Chain Enablement", desc: "Design and optimisation of supply chains suited to African infrastructure realities — reducing cost, improving resilience, and unlocking local sourcing opportunities." },
  { title: "Business Process Improvement", desc: "Diagnostic and redesign of core business processes to improve efficiency, reduce waste, and create the operational foundations for sustainable growth." },
  { title: "HR Solutions", desc: "Talent strategy, organisational design, and human capital advisory services that help businesses attract, retain, and develop the people needed to succeed in African markets." },
];

const otherSolutions = [
  { id: "policy", href: "/services/policy", image: "/images/Layout/419/NqA6w 1-4.png", title: "Policy & Advocacy Solutions", desc: "We help businesses navigate and shape Africa's regulatory and political landscape by turning policy into strategy and engaging key institutions.", tags: ["Policy Monitoring & Intelligence", "Regulatory Engagement & Advocacy", "Policy Design & Legislative Drafting", "Stakeholder Mapping & Management", "Risk Assessment & Political Economy Analysis", "Capacity Building"] },
  { id: "technology", href: "/services/technology", image: "/images/Layout/419/NqA6w 1-6.png", title: "Technology Solutions", desc: "We help businesses deploy and harness transformative technology across Africa — from identity systems and cybersecurity to digital economy infrastructure.", tags: ["Biometric & Identity Solutions", "Cybersecurity Solutions", "IT Consultancy & Infrastructure", "Telecoms Solutions", "Digital Economy Advisory"] },
  { id: "communications", href: "/services/communications", image: "/images/Layout/419/NqA6w 2.png", title: "Strategic Communications", desc: "We help businesses navigate and shape Africa's regulatory and political landscape by turning policy into strategy and engaging key institutions.", tags: ["Regulatory & Government Affairs Communications", "Crisis & Reputational Risk Communications", "Executive & Institutional Messaging", "Stakeholder & Community Engagement Communications", "Thought Leadership & Knowledge Products", "Media & Public Affairs Strategy"] },
];

const ArrowIcon = () => (
  <svg width="25" height="25" viewBox="0 0 25 25" fill="none" aria-hidden="true">
    <rect width="25" height="25" fill="black" />
    <path d="M7 12.5H18M18 12.5L13.5 8M18 12.5L13.5 17" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default async function CorporateSolutionsPage() {
  return (
    <main className={styles.page}>
      <Navbar />

      <section className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.headerText}>
            <BlurText as="h1" text="Corporate Solutions" direction="bottom" delay={130} className={styles.headerTitle} />
            <BlurText text="Africa-specialist advisory services offering granular intelligence, local networks, and on-the-ground insight to navigate African markets." direction="bottom" delay={80} stepDuration={0.4} className={styles.headerBody} />
          </div>
        </div>
        <div className={styles.heroWrap}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/Layout/419/NqA6w 2-1.png" alt="Corporate Solutions hero" className={styles.heroImg} />
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.richText}>
          <div className={styles.overviewCol}>
            <h2 className={styles.colHeading}>Overview</h2>
            <p className={styles.colBody}>Succeeding in Africa demands more than ambition — it demands intelligence. The gap between market opportunity and market reality is wide, and navigating it requires the kind of granular, relationship-grounded insight that only comes from genuine on-the-ground presence. NINA JOJER exists to close that gap. We provide Africa-specialist advisory services that translate complex market environments into clear strategy, and clear strategy into results.</p>
          </div>
          <div className={styles.practiceCol}>
            <h2 className={styles.colHeading}>What this means in practice</h2>
            <div className={styles.colBody}>
              <p>Africa&apos;s fastest-growing markets are defined by institutional complexity, infrastructure variability, and political dynamics that conventional advisory frameworks are not built to handle. Our corporate advisory practice is designed specifically for these environments — combining deep local knowledge with strategic rigour to help clients make better decisions, faster.</p>
              <p>Whether we are guiding a first-time market entrant through a structured entry process, helping an established business navigate a transformation, or providing the intelligence needed to make a high-stakes investment decision, we bring the same commitment: to understand the environment as it actually is, not as it appears from a distance.</p>
            </div>
          </div>
        </div>
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

      <ServiceCaseStudies category="Corporate Solutions" heading="Case Studies on Corporate Solutions" styles={styles} />

      <section className={styles.faqSection}>
        <div className={styles.faqInner}>
          <div className={styles.faqLeft}>
            <div className={styles.faqLeftTop}>
              <h2 className={styles.faqTitle}>Questions</h2>
              <p className={styles.faqSubtitle}>The answers you need about our corporate advisory work and how we approach it.</p>
            </div>
            <div className={styles.faqCta}>
              <h3 className={styles.faqCtaTitle}>Need more clarity?</h3>
              <p className={styles.faqCtaBody}>Reach out and let&apos;s talk about your specific situation.</p>
              <Link href="/contact" className={styles.faqCtaBtn}>Contact</Link>
            </div>
          </div>
          <div className={styles.faqRight}>
            <FaqAccordion />
          </div>
        </div>
      </section>

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
                        <span key={tag} className={styles.tag}><span className={styles.tagDot} />{tag}</span>
                      ))}
                    </div>
                  </div>
                  <div className={styles.learnMore}><span>LEARN MORE</span><ArrowIcon /></div>
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
