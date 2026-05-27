'use client';

import { useState } from 'react';
import styles from './policy.module.css';

const faqs = [
  {
    q: "Can you share examples of advocacy outcomes you have achieved?",
    a: "Given the confidential nature of our mandates, we do not disclose client identities. What we can say is that our work has resulted in the stoppage of adverse legislation, the removal of tax provisions targeting digital companies, and the incorporation of client positions into finalised legislation in multiple jurisdictions. We are happy to discuss the nature of a specific challenge in a confidential conversation.",
  },
  {
    q: "Do you work with both private sector clients and governments?",
    a: "Yes. We advise multinational corporations, trade associations, and development organisations seeking to engage the government — and we work with government ministries and regulatory agencies seeking technical advisory support. The two sides of that experience make us more effective on both.",
  },
  {
    q: "How do you maintain effectiveness across multiple African markets simultaneously?",
    a: "Through a combination of in-country presence, embedded relationships built over years of engagement, and a monitoring infrastructure that tracks policy developments in real time. Our team includes specialists with direct government experience in Nigeria, South Africa, Sierra Leone, Kenya, and Ghana.",
  },
  {
    q: "How quickly can you mobilise on a regulatory issue?",
    a: "Where we have an active retainer relationship, immediately. For new engagements, we can typically be operational within two weeks. Speed matters in legislative environments, and our existing relationships compress the time required to engage effectively.",
  },
];

const ChevronIcon = ({ open }: { open: boolean }) => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true" style={{ transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 0.25s' }}>
    <path d="M8 12L16 20L24 12" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className={styles.faqList}>
      {faqs.map((faq, i) => (
        <div key={faq.q} className={styles.faqItem}>
          <button className={styles.faqQuestion} onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i}>
            <span>{faq.q}</span>
            <ChevronIcon open={open === i} />
          </button>
          {open === i && (
            <div className={styles.faqAnswer}>
              <p>{faq.a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
