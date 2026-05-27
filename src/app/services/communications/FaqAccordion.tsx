'use client';

import { useState } from 'react';
import styles from './communications.module.css';

const faqs = [
  {
    q: "How is your communications offering different from a public relations firm?",
    a: "We do not manage media campaigns or brand visibility. Our communications work is embedded in our policy and advisory practice — we develop the narratives that shape how clients are perceived in institutional and government contexts. The distinction is between communications designed to win public attention and communications designed to influence policy outcomes.",
  },
  {
    q: "Can you manage communications across multiple African markets simultaneously?",
    a: "Yes. We have developed country-specific communication strategies and institutional messaging for clients operating across Nigeria, Kenya, South Africa, Ghana, and Sierra Leone simultaneously, tailored to the distinct media, regulatory, and political environments in each market.",
  },
  {
    q: "Do you support crisis communications?",
    a: "Yes. We provide rapid-response advisory when a client faces a regulatory challenge, adverse legislative proposal, or reputational risk event. Our value in crisis situations comes from our institutional relationships and understanding of how regulatory processes work — which allows us to advise on both the communications response and the substantive engagement strategy simultaneously.",
  },
  {
    q: "Can you produce the actual communications materials, or only the strategy?",
    a: "Both. We develop strategy and produce the deliverables — from detailed briefing documents and position papers to executive speeches and public consultation frameworks. Our clients typically engage us for the full cycle: strategy, drafting, and delivery.",
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
