'use client';

import { useState } from 'react';
import styles from './corporate.module.css';

const faqs = [
  {
    q: "How do you approach market entry for first-time entrants into Africa?",
    a: "We start with a structured market assessment — analysing the regulatory environment, competitive landscape, key institutional players, and on-the-ground realities that don't appear in public data. From there, we develop a sequenced market entry strategy that accounts for local partnership requirements, risk mitigation, and a realistic path to operational readiness. We stay engaged through implementation, not just the advisory phase.",
  },
  {
    q: "What makes your market intelligence different from third-party research providers?",
    a: "Our intelligence is relationship-based and real-time. We have embedded networks across government, the private sector, and civil society in our core markets. This means we can tell you not just what the data says, but what is likely to happen next — and why. We translate context into decisions, not just reports.",
  },
  {
    q: "Do you work with businesses that are already operating in Africa but facing growth challenges?",
    a: "Yes, a significant share of our work is with clients who are already on the ground but navigating an inflection point — whether that is expansion into new markets, a structural transformation, a regulatory shift, or a performance issue. We bring fresh eyes, deep context, and a track record of solving complex problems in environments that don't follow Western business playbooks.",
  },
  {
    q: "Can you support both strategy and execution?",
    a: "We do both, and we believe the distinction between strategy and execution is often a false one. A strategy that cannot be executed is not a strategy — it is a document. We stay engaged through implementation, adapt as conditions change, and measure our success by outcomes, not deliverables.",
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
