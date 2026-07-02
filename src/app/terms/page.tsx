import type { Metadata } from 'next';
import { canonicalUrl } from '@/lib/seo';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from '../privacy/legal.module.css';

export const metadata: Metadata = {
  title: 'Terms of Use | Nina Jojer',
  description: 'Terms and conditions governing the use of the Nina Jojer website.',
  alternates: { canonical: canonicalUrl('/terms') },
};

const sections = [
  {
    id: 'acceptance',
    title: '1. Acceptance of Terms',
    content: (
      <>
        <p>
          Welcome to <a href="https://ninajojer.com/">https://ninajojer.com/</a> (the
          &ldquo;Website&rdquo;). This Website is owned and operated by Nina Jojer Limited, a
          registered private limited company in Nigeria, with its corporate office at 21 Lobito
          Crescent, Wuse, Abuja.
        </p>
        <p>
          By accessing, browsing, or using this Website, you acknowledge that you have read,
          understood, and agree to be bound by these Terms of Use and all applicable laws and
          regulations. If you do not agree with these terms, you must immediately cease using this
          Website.
        </p>
      </>
    ),
  },
  {
    id: 'no-advisory',
    title: '2. No Advisory or Professional Relationship',
    content: (
      <>
        <p>
          The materials, policy briefs, articles, insights, and information contained on this
          Website are provided for general informational and educational purposes only. Nothing on
          this Website constitutes formal public policy, legal, financial, commercial, or strategic
          business advisory services.
        </p>
        <p>
          Your use of this Website, or your transmission of information to us via contact forms or
          email, does not establish a consultant-client or advisory relationship between you and
          Nina Jojer Limited. A formal advisory relationship is only established through a written
          and signed Engagement Agreement between Nina Jojer Limited and a client.
        </p>
      </>
    ),
  },
  {
    id: 'intellectual-property',
    title: '3. Intellectual Property Rights',
    content: (
      <>
        <p>
          Unless otherwise stated, Nina Jojer Limited owns the intellectual property rights for all
          material, content, layout, designs, text, and graphics published on this Website. All
          intellectual property rights are reserved.
        </p>
        <p>
          You may view, download, and print pages from the Website for your own personal,
          non-commercial use, subject to the following restrictions. You must not:
        </p>
        <ul>
          <li>
            Republicize, sell, rent, or sub-license material from this Website without explicit
            written consent.
          </li>
          <li>
            Reproduce, duplicate, copy, or otherwise exploit material on this Website for
            commercial gain.
          </li>
          <li>Modify, adapt, or reverse-engineer any portion of the Website architecture.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'user-conduct',
    title: '4. User Conduct & Prohibited Uses',
    content: (
      <>
        <p>
          You agree to use the Website only for lawful purposes. You are strictly prohibited from:
        </p>
        <ul>
          <li>
            Using the Website in any way that causes, or may cause, damage to the Website or
            impairment of its availability or accessibility.
          </li>
          <li>
            Using the Website to copy, store, host, transmit, send, use, publish, or distribute
            any material linked to spy-ware, computer viruses, Trojan horses, or other malicious
            software.
          </li>
          <li>
            Conducting any systematic or automated data collection activities (including scraping,
            data mining, extraction, or harvesting) on or in relation to our Website.
          </li>
          <li>
            Submitting false, fraudulent, or misleading information through our talent acquisition
            or business inquiry portals.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'liability',
    title: '5. Limitation of Liability',
    content: (
      <>
        <p>
          While we strive to ensure that the information on this Website is accurate, complete, and
          up-to-date, Nina Jojer Limited makes no warranties or representations of any kind,
          express or implied, about the completeness, accuracy, reliability, suitability, or
          availability of the Website content.
        </p>
        <p>
          To the maximum extent permitted by applicable law (including the Laws of the Federation
          of Nigeria), Nina Jojer Limited shall not be liable for any direct, indirect, incidental,
          consequential, or punitive damages arising out of your access to, use of, or inability to
          use this Website, or any errors or omissions in the content thereof.
        </p>
      </>
    ),
  },
  {
    id: 'privacy',
    title: '6. Privacy and Data Protection',
    content: (
      <>
        <p>
          Your use of this Website is also governed by our{' '}
          <a href="/privacy">Privacy Policy</a>, which is incorporated into these Terms of Use by
          reference. Please review the Privacy Policy to understand how we collect, use, and
          safeguard your personal information.
        </p>
      </>
    ),
  },
  {
    id: 'modifications',
    title: '7. Modifications to Terms',
    content: (
      <>
        <p>
          Nina Jojer Limited reserves the right to revise, update, or modify these Terms of Use at
          any time without prior notice. Any changes will be posted directly to this page with an
          updated &ldquo;Last updated&rdquo; date. Your continued use of the Website after
          modifications are posted constitutes your acceptance of the revised terms.
        </p>
      </>
    ),
  },
  {
    id: 'governing-law',
    title: '8. Governing Law and Jurisdiction',
    content: (
      <>
        <p>
          These Terms of Use shall be governed by, construed, and enforced in accordance with the
          laws of the Federal Republic of Nigeria. Any disputes arising out of or in connection
          with the use of this Website shall be subject to the exclusive jurisdiction of the
          competent courts located in Abuja, Nigeria.
        </p>
      </>
    ),
  },
  {
    id: 'contact',
    title: '9. Contact Information',
    content: (
      <>
        <p>
          If you have any questions or require clarifications regarding these Terms of Use, please
          contact us at:
        </p>
        <div className={styles.contactBox}>
          <p><strong style={{ color: '#fff' }}>Nina Jojer Limited</strong></p>
          <p>21 Lobito Crescent, Wuse, Abuja, Nigeria.</p>
          <p>Email: <a href="mailto:business@ninajojer.com">business@ninajojer.com</a></p>
        </div>
      </>
    ),
  },
];

export default function TermsPage() {
  return (
    <main className={styles.page}>
      <Navbar />

      <section className={styles.hero}>
        <div className={styles.heroEyebrow}>
          <span className={styles.eyebrowLine} />
          <span className={styles.eyebrowText}>Legal</span>
        </div>
        <h1 className={styles.heroTitle}>Terms of Use</h1>
        <p className={styles.heroMeta}>Last updated: June 2026</p>
      </section>

      <div className={styles.content}>
        <nav className={styles.toc} aria-label="Table of contents">
          <p className={styles.tocTitle}>On this page</p>
          {sections.map((s) => (
            <a key={s.id} href={`#${s.id}`} className={styles.tocLink}>
              {s.title}
            </a>
          ))}
        </nav>

        <article className={styles.prose}>
          {sections.map((s) => (
            <section key={s.id} id={s.id} className={styles.section}>
              <h2 className={styles.sectionHeading}>{s.title}</h2>
              <div className={styles.sectionBody}>{s.content}</div>
            </section>
          ))}
        </article>
      </div>

      <Footer />
    </main>
  );
}
