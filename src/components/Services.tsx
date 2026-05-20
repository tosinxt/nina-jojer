import Link from 'next/link';
import styles from './Services.module.css';

const services = [
  {
    id: 'policy',
    image: '/images/Layout/419/NqA6w 1-4.png',
    title: 'Policy & Advocacy Solutions',
    description:
      "We help businesses navigate and shape Africa's regulatory and political landscape by turning policy into strategy and engaging key institutions.",
    tags: [
      'Policy Monitoring & Intelligence',
      'Regulatory Engagement & Advocacy',
      'Policy Design & Legislative Drafting',
      'Stakeholder Mapping & Management',
      'Risk Assessment & Political Economy Analysis',
      'Capacity Building',
    ],
    href: '/services/policy',
  },
  {
    id: 'corporate',
    image: '/images/Layout/419/NqA6w 2-1.png',
    title: 'Corporate Solutions',
    description:
      'Africa-specialist advisory services offering granular intelligence, local networks, and on-the-ground insight to navigate Sub-Saharan markets.',
    tags: [
      'Market Entry Strategy',
      'Market Intelligence & Investment Analysis',
      'Contextual & Political Economy Analysis',
      'Due Diligence',
      'Corporate Strategy & Strategic Planning',
      'Enterprise Transformation',
      'Supply Chain Enablement',
      'Business Process Improvement',
      'HR Solutions',
    ],
    href: '/services/corporate',
  },
  {
    id: 'technology',
    image: '/images/Layout/419/NqA6w 1-6.png',
    title: 'Technology Solutions',
    description:
      "We help businesses leverage cutting-edge technology to drive transformation and competitive advantage across African markets.",
    tags: [
      'Biometric & Identity Solutions',
      'Cybersecurity Solutions',
      'IT Consultancy & Infrastructure',
      'Telecoms Solutions',
      'Digital Economy Advisory',
    ],
    href: '/services/technology',
  },
  {
    id: 'communications',
    image: '/images/Layout/419/NqA6w 2.png',
    title: 'Strategic Communications',
    description:
      "We help businesses navigate and shape Africa's regulatory and political landscape by turning policy into strategy and engaging key institutions.",
    tags: [
      'Regulatory & Government Affairs Communications',
      'Crisis & Reputational Risk Communications',
      'Executive & Institutional Messaging',
      'Stakeholder & Community Engagement Communications',
      'Thought Leadership & Knowledge Products',
      'Media & Public Affairs Strategy',
    ],
    href: '/services/communications',
  },
];

const ArrowIcon = () => (
  <svg width="7" height="10" viewBox="0 0 10 14" fill="none">
    <path d="M2 1L8 7L2 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function Services() {
  return (
    <section className={styles.section}>
      {/* ── Sticky left label ── */}
      <div className={styles.leftPanel}>
        <div className={styles.leftInner}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowLine} />
            <span className={styles.eyebrowText}>Solutions</span>
          </div>
          <div className={styles.headingGroup}>
            <h2 className={styles.heading}>
              Comprehensive Services for Sustainable Success
            </h2>
            <p className={styles.subheading}>
              Four core practices built on decades of experience
            </p>
          </div>
        </div>
      </div>

      {/* ── Scrolling cards column ── */}
      <div className={styles.rightPanel}>
        {services.map((service) => (
          <div key={service.id} className={styles.cardWrapper}>
            <Link href={service.href} className={styles.card}>
              {/* Image */}
              <div className={styles.cardImageWrap}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={service.image} alt={service.title} />
              </div>

              {/* Text content */}
              <div className={styles.cardContent}>
                <div className={styles.cardTextGroup}>
                  <div className={styles.cardTitleGroup}>
                    <h3 className={styles.cardTitle}>{service.title}</h3>
                    <p className={styles.cardDesc}>{service.description}</p>
                  </div>
                  <div className={styles.tags}>
                    {service.tags.map((tag) => (
                      <span key={tag} className={styles.tag}>
                        <span className={styles.tagDot} />
                        <span className={styles.tagText}>{tag}</span>
                      </span>
                    ))}
                  </div>
                </div>

                <Link href={service.href} className={styles.learnMore}>
                  <span className={styles.learnMoreText}>Learn More</span>
                  <span className={styles.learnMoreArrow}>
                    <ArrowIcon />
                  </span>
                </Link>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
