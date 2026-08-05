import Link from "next/link";
import BlurText from "@/components/BlurText";
import Navbar from "@/components/Navbar";
import CtaSection from "@/components/CtaSection";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import ServiceCaseStudies from "@/components/ServiceCaseStudies";
import FaqAccordion from "./FaqAccordion";
import styles from "./policy.module.css";

const subServices = [
  { title: "Policy Monitoring & Intelligence", desc: "Continuous tracking of legislative and regulatory developments across target markets, with structured briefings that translate political signals into business implications." },
  { title: "Regulatory Engagement & Advocacy", desc: "Direct engagement with Ministries, Departments and Agencies, parliamentary committees, and regulatory bodies to advance client positions on pending or proposed legislation." },
  { title: "Policy Design & Legislative Drafting", desc: "Technical support for the design of regulatory frameworks, impact assessments, and legislative drafting — working with both government clients and private sector actors seeking to shape enabling environments." },
  { title: "Stakeholder Mapping & Management", desc: "Identification of the key actors whose positions determine outcomes, and sustained relationship management to build the coalitions necessary for advocacy success." },
  { title: "Risk Assessment & Political Economy Analysis", desc: "Structured analysis of the political landscape — including electoral dynamics, institutional relationships, and vested interests — to help clients anticipate and mitigate regulatory risk before it crystallises." },
  { title: "Capacity Building", desc: "Training programmes for public officials, regulatory staff, and private sector teams on policy process, legislative engagement, and regulatory compliance." },
];

const otherSolutions = [
  { id: "corporate", href: "/services/corporate", image: "/images/Layout/419/NqA6w 2-1.png", title: "Corporate Solutions", desc: "Africa-specialist advisory services offering granular intelligence, local networks, and on-the-ground insight to navigate African markets.", tags: ["Market Entry Strategy", "Market Intelligence & Investment Analysis", "Contextual & Political Economy Analysis", "Due Diligence", "Corporate Strategy & Strategic Planning", "Enterprise Transformation", "Supply Chain Enablement", "Business Process Improvement", "HR Solutions"] },
  { id: "technology", href: "/services/technology", image: "/images/Layout/419/NqA6w 1-6.png", title: "Technology Solutions", desc: "We help businesses deploy and harness transformative technology across Africa — from identity systems and cybersecurity to digital economy infrastructure.", tags: ["Biometric & Identity Solutions", "Cybersecurity Solutions", "IT Consultancy & Infrastructure", "Telecoms Solutions", "Digital Economy Advisory"] },
  { id: "communications", href: "/services/communications", image: "/images/Layout/419/NqA6w 2.png", title: "Strategic Communications", desc: "We help businesses navigate and shape Africa's regulatory and political landscape by turning policy into strategy and engaging key institutions.", tags: ["Regulatory & Government Affairs Communications", "Crisis & Reputational Risk Communications", "Executive & Institutional Messaging", "Stakeholder & Community Engagement Communications", "Thought Leadership & Knowledge Products", "Media & Public Affairs Strategy"] },
];

const ArrowIcon = () => (
  <svg width="25" height="25" viewBox="0 0 25 25" fill="none" aria-hidden="true">
    <rect width="25" height="25" fill="black" />
    <path d="M7 12.5H18M18 12.5L13.5 8M18 12.5L13.5 17" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default async function PolicyAdvocacyPage() {
  return (
    <main className={styles.page}>
      <Navbar />

      <section className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.headerText}>
            <BlurText as="h1" text="Policy & Advocacy Solutions" direction="bottom" delay={130} className={styles.headerTitle} />
            <BlurText text="We advise governments and corporations on the decisions that matter. Clear thinking. Real results." direction="bottom" delay={80} stepDuration={0.4} className={styles.headerBody} />
          </div>
        </div>
        <div className={styles.heroWrap}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/Layout/419/NqA6w 1-4.png" alt="Policy hero" className={styles.heroImg} />
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.richText}>
          <div className={styles.overviewCol}>
            <h2 className={styles.colHeading}>Overview</h2>
            <p className={styles.colBody}>Operating in Africa requires more than understanding the rules — it requires shaping them. NINA JOJER helps clients navigate, influence, and stay ahead of the regulatory and political forces that determine whether a business thrives or stalls on the continent. We translate complex policy environments into actionable strategy, and we engage the institutions that matter — from national legislatures to continental bodies — on behalf of the clients we represent.</p>
          </div>
          <div className={styles.practiceCol}>
            <h2 className={styles.colHeading}>What this means in practice</h2>
            <div className={styles.colBody}>
              <p>Policy is rarely static in Africa&apos;s fastest-growing markets. Legislation moves quickly, political transitions shift regulatory priorities overnight, and the difference between a favourable outcome and an adverse one often comes down to who is in the room and when. NINA JOJER provides the intelligence, access, and advocacy capability to ensure our clients are not reacting to change — they are participating in its design.</p>
              <p>Our work spans the full policy lifecycle: from early-stage monitoring and risk identification, through active engagement with regulators and legislators, to the drafting and review of frameworks that shape how industries are governed.</p>
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

      <ServiceCaseStudies category="Policy & Advocacy Solutions" heading="Case Studies on Policy & Advocacy Solutions" styles={styles} />

      <section className={styles.faqSection}>
        <div className={styles.faqInner}>
          <div className={styles.faqLeft}>
            <div className={styles.faqLeftTop}>
              <h2 className={styles.faqTitle}>Questions</h2>
              <p className={styles.faqSubtitle}>The answers you need about policy work and how we approach it.</p>
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
