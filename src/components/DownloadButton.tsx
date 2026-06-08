'use client';

import styles from './InsightsSection.module.css';

const DownloadIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path d="M7 1v8M4 6l3 3 3-3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M2 11h10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);

export default function DownloadButton({ href, name }: { href: string; name?: string }) {
  return (
    <a
      href={href}
      download={name ?? true}
      className={styles.downloadBtn}
      onClick={(e) => e.stopPropagation()}
      aria-label="Download document"
    >
      <DownloadIcon />
      <span>Download</span>
    </a>
  );
}
