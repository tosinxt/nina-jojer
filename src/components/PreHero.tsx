import Reveal from './Reveal';
import styles from './PreHero.module.css';

// Positions derived from Figma's 1363px overlay centred over the full-width image.
// left/right values are relative to the image edges.
const badges = [
  { label: 'Transformative Impact',  top: 148, left: 118,  side: 'left'  },
  { label: 'Strategic Advisory',     top: 414, left: 280,  side: 'left'  },
  { label: 'Innovative Consulting',  top: 222, right: 132, side: 'right' },
  { label: 'Growth Catalysts',       top: 543, right: 157, side: 'right' },
] as const;

export default function PreHero() {
  return (
    <section className={styles.preHero}>
      {/* Text + CTA */}
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textGroup}>
            <Reveal as="h1" className={styles.title}>GLOBAL VISION, LOCAL IMPACT</Reveal>
            <Reveal delay={150}><p className={styles.description}>
              A Strategic Advisory firm with strong technology implementation and delivery capabilities.
            </p></Reveal>
          </div>
          <Reveal delay={280} as="div" className={styles.cta}>
            <div className={styles.iconBox}>
              <svg width="10" height="14" viewBox="0 0 10 14" fill="none">
                <path d="M2 1L8 7L2 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className={styles.ctaText}>See What We Do</span>
          </Reveal>
        </div>
      </div>

      {/* Hero image with floating badges */}
      <div className={styles.imageSection}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/Header/144/5785 1.png"
          alt="Strategic advisory — city skyline"
          className={styles.heroImage}
        />
        <div className={styles.badgeOverlay}>
          {badges.map((b) => (
            <div
              key={b.label}
              className={`${styles.badge} ${b.side === 'right' ? styles.badgeRight : styles.badgeLeft}`}
              style={{
                top: b.top,
                ...('left'  in b ? { left:  b.left  } : {}),
                ...('right' in b ? { right: b.right } : {}),
              }}
            >
              <span className={styles.dot} />
              <span className={styles.pill}>
                <span className={styles.pillText}>{b.label}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
