import Link from 'next/link';
import BlurText from './BlurText';
import styles from './CtaSection.module.css';

export default function CtaSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <BlurText as="h2" text="Ready to move forward?" direction="bottom" delay={120} className={styles.heading} />
        <BlurText text="Let us help you navigate what comes next" direction="bottom" delay={100} stepDuration={0.4} className={styles.subtext} />
        <Link href="/contact" className={styles.button}>{"Let's Talk"}</Link>
      </div>
    </section>
  );
}
