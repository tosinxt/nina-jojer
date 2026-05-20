import Link from 'next/link';
import Reveal from './Reveal';
import styles from './CtaSection.module.css';

export default function CtaSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <Reveal delay={0}><h2 className={styles.heading}>Ready to move forward?</h2></Reveal>
        <Reveal delay={120}><p className={styles.subtext}>Let us help you navigate what comes next</p></Reveal>
        <Reveal delay={240}>
          <Link href="/contact" className={styles.button}>{"Let's Talk"}</Link>
        </Reveal>
      </div>
    </section>
  );
}
