import Link from 'next/link';
import styles from './AboutSection.module.css';

const ArrowIcon = () => (
  <svg width="7" height="10" viewBox="0 0 10 14" fill="none">
    <path d="M2 1L8 7L2 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

function StatCard({
  variant,
  label,
  number,
  description,
  decoration,
}: {
  variant: string;
  label: string;
  number: string;
  description: string;
  decoration?: React.ReactNode;
}) {
  return (
    <div className={`${styles.stat} ${styles[variant as keyof typeof styles]}`}>
      {decoration}
      <span className={styles.statLabel}>{label}</span>
      <div className={styles.statBottom}>
        <p className={styles.statNumber}>{number}</p>
        <div className={styles.statDivider} />
        <p className={styles.statDesc}>{description}</p>
      </div>
    </div>
  );
}

export default function AboutSection() {
  return (
    <section className={styles.section}>
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.titleBlock}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowLine} />
            <span className={styles.eyebrowText}>About Us</span>
          </div>
          <h2 className={styles.heading}>
            Our success is built on a strong network{' '}
            <span className={styles.headingMuted}>spanning the political.</span>
          </h2>
        </div>
        <Link href="/about" className={styles.learnMore}>
          <span className={styles.learnMoreText}>Learn More</span>
          <span className={styles.learnMoreArrow}>
            <ArrowIcon />
          </span>
        </Link>
      </div>

      {/* Stats grid — 3 columns */}
      <div className={styles.grid}>

        {/* Col 1: Expertise */}
        <div className={`${styles.col} ${styles.colFull}`}>
          <StatCard
            variant="statExpertise"
            label="Expertise"
            number="22+"
            description="Specialists in business strategy and policy."
            decoration={
              <svg
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
                viewBox="0 0 360 503"
                preserveAspectRatio="xMidYMid slice"
                fill="none"
                aria-hidden="true"
              >
                <path opacity="0.06" d="M-482.663 668.441L-482.663 -236.609L-58.045 215.916L-482.663 668.441Z" stroke="black" strokeWidth="133.819" />
                <path opacity="0.06" d="M-209.37 668.441L-209.37 -236.609L215.248 215.916L-209.37 668.441Z" stroke="black" strokeWidth="133.819" />
              </svg>
            }
          />
        </div>

        {/* Col 2: image on top + Global Reach stat below */}
        <div className={styles.col}>
          <div className={styles.imageCard}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/Layout/484/2149991019 1.png"
              alt="Abstract 3D composition"
            />
          </div>
          <StatCard
            variant="statGlobalReach"
            label="Global Reach"
            number="20+"
            description="Markets in Across Africa & LAC"
            decoration={
              <div className={styles.polygonDecorGlobalReach}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/Layout/484/Polygon3.svg" alt="" aria-hidden="true" />
              </div>
            }
          />
        </div>

        {/* Col 3: Client Trust + Employees */}
        <div className={styles.col}>
          <StatCard
            variant="statClientTrust"
            label="Client Trust"
            number="97%"
            description="Client satisfaction across our engagements."
            decoration={
              <div className={styles.starDecor}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/Layout/484/Star2.svg" alt="" aria-hidden="true" />
              </div>
            }
          />
          <StatCard
            variant="statEmployees"
            label="Employees"
            number="600+"
            description="achieving sustainable results."
            decoration={
              <div className={styles.starDecor}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/Layout/484/Star2.svg" alt="" aria-hidden="true" />
              </div>
            }
          />
        </div>

      </div>
    </section>
  );
}
