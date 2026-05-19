import Link from 'next/link';
import styles from './CtaSection.module.css';

export default function CtaSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Ready to move forward?</h2>
        <p className={styles.subtext}>Let us help you navigate what comes next</p>
        <Link href="/contact" className={styles.button}>
          {"Let's Talk"}
        </Link>
      </div>
    </section>
  );
}
