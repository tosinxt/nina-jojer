import Link from "next/link";
import BlurText from "@/components/BlurText";
import Navbar from "@/components/Navbar";
import CtaSection from "@/components/CtaSection";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import ServiceCaseStudies from "@/components/ServiceCaseStudies";
import FaqAccordion from "./FaqAccordion";
import styles from "./communications.module.css";

const subServices = [
  { title: "Regulatory & Government Affairs Communications", desc: "Development of strategic narratives, position papers, and messaging frameworks for engagement with government ministries, regulatory agencies, and legislative bodies. Designed to advance client positions in high-stakes institutional environments." },
  { title: "Crisis & Reputational Risk Communications", desc: "Rapid-response communications advisory for clients navigating regulatory investigations, adverse legislative proposals, reputational challenges, or political transitions that affect business operations." },
  { title: "Executive & Institutional Messaging", desc: "Speechwriting, briefing documents, and executive positioning for senior client representatives engaging government officials, continental institutions, or high-level forums across Africa." },
  { title: "Stakeholder & Community Engagement Communications", desc: "Design and delivery of public consultation frameworks, community engagement strategies, and stakeholder communication programmes — particularly for clients in extractive, infrastructure, and technology sectors where social licence is a material operating condition." },
  { title: "Thought Leadership & Knowledge Products", desc: "Development of policy papers, research publications, and public commentary that position client organisations as credible voices in African policy discourse. This includes the intelligence reports, briefing notes, and analytical products that NJA produces for retainer clients." },
  { title: "Media & Public Affairs Strategy", desc: "Strategic advisory on media engagement, public affairs positioning, and narrative management across African markets — with particular expertise in Nigerian, Kenyan, and South African media environments." },
];

const otherSolutions = [
  { id: "policy", href: "/services/policy", image: "/images/Layout/419/NqA6w 1-4.png", title: "Policy & Advocacy Solutions", desc: "We help businesses navigate and shape Africa's regulatory and political landscape by turning policy into strategy and engaging key institutions.", tags: ["Policy Monitoring & Intelligence", "Regulatory Engagement & Advocacy", "Policy Design & Legislative Drafting", "Stakeholder Mapping & Management", "Risk Assessment & Political Economy Analysis", "Capacity Building"] },
  { id: "corporate", href: "/services/corporate", image: "/images/Layout/419/NqA6w 2-1.png", title: "Corporate Solutions", desc: "Africa-specialist advisory services offering granular intelligence, local networks, and on-the-ground insight to navigate African markets.", tags: ["Market Entry Strategy", "Market Intelligence & Investment Analysis", "Contextual & Political Economy Analysis", "Due Diligence", "Corporate Strategy & Strategic Planning", "Enterprise Transformation", "Supply Chain Enablement", "Business Process Improvement", "HR Solutions"] },
  { id: "technology", href: "/services/technology", image: "/images/Layout/419/NqA6w 1-6.png", title: "Technology Solutions", desc: "We help businesses navigate and shape Africa's regulatory and political landscape by turning policy into strategy and engaging key institutions.", tags: ["Biometric & Identity Solutions", "Cybersecurity Solutions", "IT Consultancy & Infrastructure", "Telecoms Solutions", "Digital Economy Advisory"] },
];

const ArrowIcon = () => (
  <svg width="25" height="25" viewBox="0 0 25 25" fill="none" aria-hidden="true">
    <rect width="25" height="25" fill="black" />
    <path d="M7 12.5H18M18 12.5L13.5 8M18 12.5L13.5 17" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default async function StrategicCommunicationsPage() {
  return (
    <main className={styles.page}>
      <Navbar />

      <section className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.headerText}>
            <BlurText as="h1" text="Strategic Communications" direction="bottom" delay={130} className={styles.headerTitle} />
            <BlurText text="We help businesses navigate and shape Africa's regulatory and political landscape by turning policy into strategy and engaging key institutions." direction="bottom" delay={80} stepDuration={0.4} className={styles.headerBody} />
          </div>
        </div>
        <div className={styles.heroWrap}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/Layout/419/NqA6w 2.png" alt="Strategic Communications hero" className={styles.heroImg} />
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.richText}>
          <div className={styles.overviewCol}>
            <h2 className={styles.colHeading}>Overview</h2>
            <p className={styles.colBody}>Strategic communications is not a support function at NINA JOJER — it is a core advisory capability. In Africa&apos;s political and regulatory environments, how a message is framed, when it is delivered, and through which channels it reaches decision-makers often determines the outcome of an engagement more than the substance of the argument itself. We help clients communicate with precision and impact at the moments that matter most.</p>
          </div>
          <div className={styles.practiceCol}>
            <h2 className={styles.colHeading}>What this means in practice</h2>
            <div className={styles.colBody}>
              <p>Our communications work is inseparable from our policy and corporate advisory practice. We are not a PR agency. We do not manage press releases or brand campaigns. We develop the strategic narratives, stakeholder communication frameworks, and institutional messaging that shape how clients are perceived by governments, regulators, legislators, and the public — particularly at moments of regulatory risk, policy change, or market entry.</p>
              <p>We have developed communication narratives for client engagements with the Nigerian Presidency, the National Assembly, and multiple African heads of government. We have positioned clients ahead of legislative processes, managed communications through regulatory crises, and built the institutional credibility that allows our clients to be taken seriously in rooms that are otherwise difficult to access.</p>
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

      <ServiceCaseStudies category="Strategic Communications" heading="Case Studies on Strategic Communications" styles={styles} />

      <section className={styles.faqSection}>
        <div className={styles.faqInner}>
          <div className={styles.faqLeft}>
            <div className={styles.faqLeftTop}>
              <h2 className={styles.faqTitle}>Questions</h2>
              <p className={styles.faqSubtitle}>The answers you need about our communications work and how we approach it.</p>
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
