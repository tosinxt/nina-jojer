import Link from 'next/link';
import styles from './AboutSection.module.css';

const ArrowIcon = ({ color = 'white' }: { color?: string }) => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <path d="M2.5 6H9.5M9.5 6L6.5 3M9.5 6L6.5 9" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
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
              <>
                <div className={styles.polygonDecorLeft}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/Layout/484/Polygon1.svg" alt="" aria-hidden="true" />
                </div>
                <div className={styles.polygonDecorRight}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/Layout/484/Polygon2.svg" alt="" aria-hidden="true" />
                </div>
              </>
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
