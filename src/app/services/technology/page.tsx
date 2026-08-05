import Link from "next/link";
import BlurText from "@/components/BlurText";
import Navbar from "@/components/Navbar";
import CtaSection from "@/components/CtaSection";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import ServiceCaseStudies from "@/components/ServiceCaseStudies";
import FaqAccordion from "./FaqAccordion";
import styles from "./technology.module.css";

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
    desc: "Africa-specialist advisory services offering granular intelligence, local networks, and on-the-ground insight to navigate African markets.",
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

const ArrowIcon = () => (
  <svg width="25" height="25" viewBox="0 0 25 25" fill="none" aria-hidden="true">
    <rect width="25" height="25" fill="black" />
    <path d="M7 12.5H18M18 12.5L13.5 8M18 12.5L13.5 17" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default async function TechnologySolutionsPage() {
  return (
    <main className={styles.page}>
      <Navbar />

      {/* ── HEADER ── */}
      <section className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.headerText}>
            <BlurText as="h1" text="Technology Solutions" direction="bottom" delay={130} className={styles.headerTitle} />
            <BlurText text="We help businesses navigate and shape Africa's regulatory and political landscape by turning policy into strategy and engaging key institutions." direction="bottom" delay={80} stepDuration={0.4} className={styles.headerBody} />
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
              NINA JOJER&apos;s Technology Solutions practice sits at the intersection of critical infrastructure, institutional capacity, and the digital economy. We design, implement, and secure technology systems for governments, development organisations, and private sector clients — with a particular focus on the identity, border, connectivity, and cybersecurity infrastructure that underpins Africa&apos;s digital transformation.
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

      {/* ── CASE STUDIES (from Sanity) ── */}
      <ServiceCaseStudies
        category="Technology Solutions"
        heading="Case Studies on Technology Solutions"
        styles={styles}
      />

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
              <p className={styles.faqCtaBody}>Reach out and let&apos;s talk about your specific situation.</p>
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
