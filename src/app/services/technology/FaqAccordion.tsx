'use client';

import { useState } from 'react';
import styles from './technology.module.css';

const faqs = [
  {
    q: "What scale of technology programmes have you delivered?",
    a: "In the UK and Nigeria combined, we have executed technology programmes valued at over £500 million. Our work has included national identity infrastructure, eBorders systems, foreign mission connectivity for a Ministry of Foreign Affairs, and cybersecurity deployments in top-secret, security-cleared environments.",
  },
  {
    q: "How does the Technology practice connect to NJA's advisory work?",
    a: "The connection is deliberate. Technology deployments in African contexts succeed or fail based on institutional relationships, regulatory alignment, and political buy-in — all of which are core NJA capabilities. We are one of very few firms that can manage both the technical delivery and the stakeholder environment simultaneously.",
  },
  {
    q: "Do you work with governments directly or through implementing partners?",
    a: "Both. We have worked as primary contractor, security technical architect, and as advisory partner to other implementers. Our role is defined by what the mandate requires, not by a fixed engagement model.",
  },
  {
    q: "Can you support private sector companies on technology regulatory matters?",
    a: "Yes. Particularly in telecoms, fintech, and data-intensive sectors, we provide regulatory intelligence, engagement support with the relevant agencies (NCC, NITDA, CBN, and equivalents across African markets), and technical advisory on compliance frameworks.",
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
