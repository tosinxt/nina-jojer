import type { Metadata } from 'next';
import { canonicalUrl } from '@/lib/seo';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './legal.module.css';

export const metadata: Metadata = {
  title: 'Privacy Policy | Nina Jojer',
  description: 'Learn how Nina Jojer Africa collects, uses, and protects your personal data.',
  alternates: { canonical: canonicalUrl('/privacy') },
};

const sections = [
  {
    id: 'introduction',
    title: '1. Introduction',
    content: (
      <>
        <p>
          Nina Jojer Africa Limited ("Nina Jojer", "we", "our", or "us") is committed to protecting
          your privacy and handling your personal data responsibly. This Privacy Policy explains how
          we collect, use, disclose, and safeguard information about you when you visit our website
          or engage our services.
        </p>
        <p>
          This policy is compliant with the Nigeria Data Protection Act 2023 (NDPA), the Nigeria
          Data Protection Regulation (NDPR) 2019, and other applicable data protection laws across
          the jurisdictions in which we operate.
        </p>
        <p>
          By accessing our website or providing your information to us, you consent to the practices
          described in this Privacy Policy.
        </p>
      </>
    ),
  },
  {
    id: 'information-we-collect',
    title: '2. Information We Collect',
    content: (
      <>
        <p>We may collect the following categories of personal data:</p>
        <ul>
          <li><strong>Identity data:</strong> first name, last name, title, and job position.</li>
          <li><strong>Contact data:</strong> email address, telephone number, and business address.</li>
          <li><strong>Technical data:</strong> IP address, browser type and version, time zone, browser plug-in types, operating system and platform, and other technology on the devices you use to access our website.</li>
          <li><strong>Usage data:</strong> information about how you use our website, products, and services.</li>
          <li><strong>Communications data:</strong> messages, enquiries, and feedback you send us through our contact form or by email.</li>
          <li><strong>Professional data:</strong> organisation name, sector, role, and any other information you voluntarily provide in relation to a business enquiry.</li>
        </ul>
        <p>
          We do not collect any special categories of personal data (such as racial or ethnic origin,
          political opinions, religious beliefs, health data, or biometric data) unless you
          expressly provide it and consent to its use.
        </p>
      </>
    ),
  },
  {
    id: 'how-we-use',
    title: '3. How We Use Your Information',
    content: (
      <>
        <p>We use the personal data we collect for the following purposes:</p>
        <ul>
          <li>To respond to your enquiries and communicate with you about our services.</li>
          <li>To provide, manage, and improve our advisory and consulting services.</li>
          <li>To send you our newsletter, insights, and event invitations where you have subscribed or consented.</li>
          <li>To comply with legal and regulatory obligations.</li>
          <li>To analyse website usage and improve our digital presence.</li>
          <li>To prevent fraud, enforce our terms, and protect the security of our systems.</li>
        </ul>
        <p>
          We process your data on the following lawful bases: your consent, the performance of a
          contract, compliance with a legal obligation, or our legitimate interests where these are
          not overridden by your rights.
        </p>
      </>
    ),
  },
  {
    id: 'sharing',
    title: '4. Sharing Your Information',
    content: (
      <>
        <p>
          We do not sell, rent, or trade your personal data. We may share your information only in
          the following circumstances:
        </p>
        <ul>
          <li><strong>Service providers:</strong> trusted third-party vendors who assist us in operating our website or delivering our services (e.g. email platforms, analytics tools, hosting providers), subject to confidentiality agreements.</li>
          <li><strong>Professional advisers:</strong> lawyers, auditors, and insurers where necessary for the running of our business.</li>
          <li><strong>Regulatory bodies:</strong> government agencies, law enforcement, or courts where we are legally required to disclose information.</li>
          <li><strong>Business transfers:</strong> in the event of a merger, acquisition, or sale of assets, your data may be transferred to a successor entity.</li>
        </ul>
        <p>
          Any third parties with whom we share data are required to respect its security and handle
          it in accordance with applicable data protection law.
        </p>
      </>
    ),
  },
  {
    id: 'international-transfers',
    title: '5. International Data Transfers',
    content: (
      <>
        <p>
          Nina Jojer operates across multiple jurisdictions in Africa and beyond. Where your personal
          data is transferred to countries outside Nigeria or your home country, we take appropriate
          steps to ensure that your data receives an adequate level of protection, including the use
          of standard contractual clauses or relying on adequacy decisions where applicable.
        </p>
      </>
    ),
  },
  {
    id: 'retention',
    title: '6. Data Retention',
    content: (
      <>
        <p>
          We retain your personal data only for as long as necessary to fulfil the purposes for
          which it was collected, including to satisfy legal, accounting, or reporting requirements.
        </p>
        <p>
          In general, we retain contact and enquiry data for up to 3 years after our last
          interaction, unless a longer period is required by law. You may request deletion of your
          data at any time (see Section 8).
        </p>
      </>
    ),
  },
  {
    id: 'security',
    title: '7. Data Security',
    content: (
      <>
        <p>
          We implement appropriate technical and organisational measures to protect your personal
          data against unauthorised access, loss, destruction, or disclosure. These include
          encryption, access controls, and regular security reviews.
        </p>
        <p>
          However, no transmission over the internet or electronic storage method is 100% secure.
          While we strive to protect your personal data, we cannot guarantee its absolute security.
        </p>
      </>
    ),
  },
  {
    id: 'your-rights',
    title: '8. Your Rights',
    content: (
      <>
        <p>Depending on your location and applicable law, you may have the following rights:</p>
        <ul>
          <li><strong>Access:</strong> request a copy of the personal data we hold about you.</li>
          <li><strong>Correction:</strong> request correction of inaccurate or incomplete data.</li>
          <li><strong>Deletion:</strong> request erasure of your personal data where there is no legitimate reason for us to continue processing it.</li>
          <li><strong>Objection:</strong> object to processing based on legitimate interests or for direct marketing.</li>
          <li><strong>Restriction:</strong> request restriction of processing of your personal data in certain circumstances.</li>
          <li><strong>Portability:</strong> request transfer of your data to you or a third party in a structured, machine-readable format.</li>
          <li><strong>Withdraw consent:</strong> where processing is based on consent, you have the right to withdraw it at any time without affecting the lawfulness of prior processing.</li>
        </ul>
        <p>
          To exercise any of these rights, please contact us at{' '}
          <a href="mailto:privacy@ninajojer.com">privacy@ninajojer.com</a>. We will respond within
          30 days.
        </p>
      </>
    ),
  },
  {
    id: 'cookies',
    title: '9. Cookies',
    content: (
      <>
        <p>
          Our website uses cookies and similar tracking technologies to enhance your experience.
          Please see our{' '}
          <a href="/cookies">Cookie Policy</a> for full details of the cookies we use, why we use
          them, and how you can manage your preferences.
        </p>
      </>
    ),
  },
  {
    id: 'third-party-links',
    title: '10. Third-Party Links',
    content: (
      <>
        <p>
          Our website may contain links to third-party websites, plug-ins, and applications. Clicking
          on those links may allow third parties to collect or share data about you. We do not
          control these third-party websites and are not responsible for their privacy practices.
          We encourage you to read the privacy notice of every website you visit.
        </p>
      </>
    ),
  },
  {
    id: 'changes',
    title: '11. Changes to This Policy',
    content: (
      <>
        <p>
          We may update this Privacy Policy from time to time. Any changes will be posted on this
          page with an updated "Last revised" date. Where changes are material, we will notify you
          by email or a prominent notice on our website. We encourage you to review this policy
          periodically.
        </p>
      </>
    ),
  },
  {
    id: 'contact',
    title: '12. Contact Us',
    content: (
      <>
        <p>
          If you have any questions about this Privacy Policy or how we handle your personal data,
          or if you wish to exercise your data rights, please contact our Data Protection Officer:
        </p>
        <div className={styles.contactBox}>
          <p><strong style={{ color: '#fff' }}>Nina Jojer Africa Limited</strong></p>
          <p>11A Chris Efuyemi Onanuga Street, Lekki Phase One, Lagos, Nigeria</p>
          <p>Email: <a href="mailto:privacy@ninajojer.com">privacy@ninajojer.com</a></p>
          <p>Phone: <a href="tel:+2347020013234">+234 (0)70 2001 3234</a></p>
        </div>
        <p>
          You also have the right to lodge a complaint with the Nigeria Data Protection Commission
          (NDPC) or any other competent supervisory authority in your jurisdiction.
        </p>
      </>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <main className={styles.page}>
      <Navbar />

      <section className={styles.hero}>
        <div className={styles.heroEyebrow}>
          <span className={styles.eyebrowLine} />
          <span className={styles.eyebrowText}>Legal</span>
        </div>
        <h1 className={styles.heroTitle}>Privacy Policy</h1>
        <p className={styles.heroMeta}>Last revised: 24 May 2025</p>
      </section>

      <div className={styles.content}>
        {/* Table of contents */}
        <nav className={styles.toc} aria-label="Table of contents">
          <p className={styles.tocTitle}>On this page</p>
          {sections.map((s) => (
            <a key={s.id} href={`#${s.id}`} className={styles.tocLink}>
              {s.title}
            </a>
          ))}
        </nav>

        {/* Prose */}
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
