import React from 'react';
import styles from './StatCard.module.css';

interface StatCardProps {
  label: string;
  value: string;
  description: string;
}

const StatCard: React.FC<StatCardProps> = ({ label, value, description }) => {
  return (
    <div className={styles.card}>
      {/* Background chevron polygons — inlined from Figma SVG */}
      <svg
        className={styles.bg}
        viewBox="0 0 360 503"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          opacity="0.06"
          d="M-482.663 668.441L-482.663 -236.609L-58.045 215.916L-482.663 668.441Z"
          stroke="black"
          strokeWidth="133.819"
        />
        <path
          opacity="0.06"
          d="M-209.37 668.441L-209.37 -236.609L215.248 215.916L-209.37 668.441Z"
          stroke="black"
          strokeWidth="133.819"
        />
      </svg>

      <p className={styles.label}>{label}</p>

      <div className={styles.content}>
        <p className={styles.number}>{value}</p>
        <div className={styles.divider} />
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default StatCard;
