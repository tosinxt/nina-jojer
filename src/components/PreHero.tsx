import Link from 'next/link';
import Reveal from './Reveal';
import BlurText from './BlurText';
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
            <BlurText as="h1" text="GLOBAL VISION, LOCAL IMPACT" direction="bottom" delay={120} className={styles.title} />
            <BlurText text="A Strategic Advisory firm with strong technology implementation and delivery capabilities." direction="bottom" delay={80} stepDuration={0.4} className={styles.description} />
          </div>
          <Reveal delay={280}>
            <Link href="/services" className={styles.cta}>
              <div className={styles.iconBox}>
                <svg width="10" height="14" viewBox="0 0 10 14" fill="none">
                  <path d="M2 1L8 7L2 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className={styles.ctaText}>See What We Do</span>
            </Link>
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
        {/* Desktop overlay: full-width, badges positioned from image edges */}
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
        {/* Mobile overlay: centered 421px container matching Figma node 883:10911 */}
        <div className={styles.mobileBadgeOverlay}>
          <div className={styles.badge + ' ' + styles.badgeLeft + ' ' + styles.mobileBadge1}>
            <span className={styles.dot} /><span className={styles.pill}><span className={styles.pillText}>Transformative Impact</span></span>
          </div>
          <div className={styles.badge + ' ' + styles.badgeLeft + ' ' + styles.mobileBadge2}>
            <span className={styles.dot} /><span className={styles.pill}><span className={styles.pillText}>Strategic Advisory</span></span>
          </div>
          <div className={styles.badge + ' ' + styles.badgeRight + ' ' + styles.mobileBadge3}>
            <span className={styles.pill}><span className={styles.pillText}>Innovative Consulting</span></span><span className={styles.dot} />
          </div>
          <div className={styles.badge + ' ' + styles.badgeRight + ' ' + styles.mobileBadge4}>
            <span className={styles.pill}><span className={styles.pillText}>Growth Catalysts</span></span><span className={styles.dot} />
          </div>
        </div>
      </div>
    </section>
  );
}
