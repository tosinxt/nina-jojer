import Link from "next/link";
import styles from "./SectionTitle.module.css";

interface SectionTitleProps {
  label: string;
  title: string;
  subtitle?: string;
  linkLabel?: string;
  linkHref?: string;
}

export default function SectionTitle({
  label,
  title,
  subtitle,
  linkLabel,
  linkHref,
}: SectionTitleProps) {
  return (
    <div className={styles.root}>
      {/* Left: label + heading */}
      <div className={styles.left}>
        <div className={styles.labelRow}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/events/section-line.svg"
            alt=""
            aria-hidden="true"
            className={styles.line}
          />
          <span className={styles.label}>{label}</span>
        </div>
        <div className={styles.headingGroup}>
          <h2 className={styles.title}>{title}</h2>
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </div>
      </div>

      {/* Right: view more link */}
      {linkLabel && linkHref && (
        <Link href={linkHref} className={styles.viewMore}>
          <span>{linkLabel}</span>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/events/arrow-circle-sm.svg"
            alt=""
            aria-hidden="true"
            width={25}
            height={25}
          />
        </Link>
      )}
    </div>
  );
}
