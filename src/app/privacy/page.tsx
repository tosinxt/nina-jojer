import type { Metadata } from 'next';
import { canonicalUrl } from '@/lib/seo';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './legal.module.css';

export const metadata: Metadata = {
  title: 'Privacy Policy | Nina Jojer',
  description: 'How Nina Jojer Limited collects, uses, and safeguards your personal information.',
  alternates: { canonical: canonicalUrl('/privacy') },
};

const sections = [
  {
    id: 'introduction',
    title: 'Introduction',
    content: (
      <>
        <p>
          Nina Jojer Limited (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is
          committed to protecting your privacy. This Privacy Policy explains how we collect, use,
          disclose, and safeguard your information when you visit our website at{' '}
          <a href="https://ninajojer.com/">https://ninajojer.com/</a>.
        </p>
        <p>
          Nina Jojer Limited is a premier Pan-African public policy, strategy, and business
          advisory firm headquartered in Abuja, Nigeria, serving clients across Sub-Saharan Africa.
          We leverage deep expertise in communications, public policy, corporate strategy,
          advocacy, and technology solutions to deliver transformative results for businesses and
          organizations operating across the continent.
        </p>
        <p>
          We are firmly committed to safeguarding the privacy rights of our users
          (&ldquo;Data Subjects&rdquo;). This Privacy Policy outlines our practices regarding the
          processing of personal data collected through our website, ensuring compliance with
          Section 37 of the Constitution of the Federal Republic of Nigeria (CFRN) 1999 (as
          amended), the Nigeria Data Protection Act (NDP Act) 2023, and its subsequent General
          Application and Implementation Directive (GAID) 2025.
        </p>
        <p>
          This Privacy Policy applies solely to our online infrastructure and operations via our
          website. It does not apply to third-party services, applications, or platforms that we
          do not own or control.
        </p>
        <p>
          We may change this Privacy Policy from time to time. If we make changes, we will notify
          you by revising the date at the top of this policy. If we make material changes, we will
          provide you with additional notice (such as by adding a statement to our homepage or
          sending you an email notification). We encourage you to review this Privacy Policy
          regularly to stay informed about our information practices and the choices available
          to you.
        </p>
      </>
    ),
  },
  {
    id: 'principles',
    title: 'Our Guiding Principles on Data Processing',
    content: (
      <>
        <p>
          In processing your personal data, we adhere strictly to the principles set out under
          Section 24 of the NDP Act. Our obligations include ensuring that personal data is:
        </p>
        <ul>
          <li>Processed in a fair, lawful, and transparent manner;</li>
          <li>
            Collected for specified, explicit, and legitimate purposes, and not further processed
            in a way incompatible with these purposes;
          </li>
          <li>
            Adequate, relevant, and limited to the minimum necessary for the purposes for which
            it was collected;
          </li>
          <li>
            Retained for no longer than necessary to achieve the lawful bases for which it was
            collected;
          </li>
          <li>
            Accurate, complete, not misleading, and, where necessary, kept up to date; and
          </li>
          <li>
            Processed in a manner that ensures appropriate security, including protection against
            unauthorized or unlawful processing, access, loss, destruction, damage, or any form
            of data breach.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'scope',
    title: 'Scope of Data Processing',
    content: (
      <>
        <p>
          Depending on your interaction with our website and the choices you make, we may collect
          and process various types of personal data for different purposes and lawful bases,
          including:
        </p>
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Purpose</th>
                <th>Type of Data</th>
                <th>Lawful Basis</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Business Inquiries &amp; Advisory Requests</strong></td>
                <td>Name, company, job title, email address, phone number, and any details shared via our contact/lead generation forms.</td>
                <td>Contractual Necessity / Legitimate Interest: To evaluate, respond to, and fulfill requests for policy and strategic advisory services.</td>
              </tr>
              <tr>
                <td><strong>Talent Acquisition &amp; Recruitment</strong></td>
                <td>Name, email address, CV/Resume, academic qualifications, employment history, and professional references.</td>
                <td>Contractual Necessity: To evaluate prospective candidates for open employment opportunities within the firm.</td>
              </tr>
              <tr>
                <td><strong>Communications &amp; Insights</strong></td>
                <td>Name, email address, and communication preferences.</td>
                <td>Legitimate Interest: To distribute thought leadership articles, policy briefs, newsletters, and regulatory update alerts.</td>
              </tr>
              <tr>
                <td><strong>Website Optimization &amp; Security</strong></td>
                <td>IP address, browser type, device information, and usage tracking logs via cookies.</td>
                <td>Legitimate Interest: To monitor website security, prevent fraud, and optimize our digital presence and user experience.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    ),
  },
  {
    id: 'rights',
    title: 'Rights of Data Subjects',
    content: (
      <>
        <p>
          We uphold your privacy rights under the NDP Act, which include but are not limited to:
        </p>
        <ul>
          <li>Right to be Informed</li>
          <li>Right to Access Information</li>
          <li>Right to Rectification</li>
          <li>Right to Object to Processing</li>
          <li>Right to Restriction of Processing</li>
          <li>Right to Data Portability</li>
          <li>Right to be Forgotten (Deletion)</li>
          <li>Right to Object to Automated Decision Making</li>
        </ul>
        <p>
          You also have the right to lodge a complaint with the Nigeria Data Protection Commission
          (NDPC) as outlined in Part VI of the NDP Act.
        </p>
        <p>
          <strong>Data Subject&rsquo;s Standard Notice to Address Grievance (SNAG)</strong>
        </p>
        <p>
          We encourage you to use the Standard Notice to Address Grievance (SNAG) if you believe
          your data privacy rights have been violated. The SNAG is a standardized template that
          allows you to formally request an internal resolution from us. You can submit a SNAG
          directly or through someone acting on your behalf. We will track these notices, and if
          unresolved, the NDPC may initiate an investigation.
        </p>
        <p>
          To submit a SNAG, please fill out the form available in Schedule 9 of GAID on the
          NDPC&rsquo;s website or send an email to{' '}
          <a href="mailto:business@ninajojer.com">business@ninajojer.com</a> with
          &lsquo;SNAG&rsquo; in the subject line, outlining the details of your grievance. You
          can also serve a SNAG via our physical address listed in the contact section below.
        </p>
        <p>
          To exercise any of your rights as a data subject, please contact our administrative and
          compliance desk at{' '}
          <a href="mailto:business@ninajojer.com">business@ninajojer.com</a>.
        </p>
      </>
    ),
  },
  {
    id: 'transfers',
    title: 'Transfer of Data to Third Parties and Countries',
    content: (
      <>
        <p>
          To provide our advisory services and maintain our online platform effectively, we may
          engage third-party service providers in the following areas:
        </p>
        <ul>
          <li>Cloud hosting and data storage services;</li>
          <li>Website hosting, maintenance, and technical support;</li>
          <li>Event management, webinar hosting, and virtual meeting platforms;</li>
          <li>
            Other service providers engaged to support the delivery, administration, security,
            and improvement of our services.
          </li>
        </ul>
        <p>
          In transferring your data to these third parties, or across borders within Sub-Saharan
          Africa and globally, we strictly comply with the cross-border transfer requirements of
          the NDP Act 2023, ensuring that appropriate safeguards and data sharing agreements are
          in place to protect your data.
        </p>
      </>
    ),
  },
  {
    id: 'disclosure',
    title: 'Disclosure of Information',
    content: (
      <>
        <p>We disclose the categories of information described above as follows:</p>
        <ul>
          <li>
            <strong>Vendors &amp; Consultants —</strong> We disclose information to trusted
            vendors, service providers, contractors, and consultants who assist us with web
            hosting, business intelligence, and talent acquisition operations.
          </li>
          <li>
            <strong>Regulatory Authorities —</strong> We may disclose information to public
            authorities or regulatory bodies for compliance purposes where required by applicable
            law, legal processes, or statutory obligations.
          </li>
          <li>
            <strong>Consent —</strong> We may disclose information when we have your explicit
            consent to do so.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'cookies',
    title: 'Technical Information and Cookies',
    content: (
      <>
        <p>
          Our website collects certain technical information, such as your IP address and browser
          details, to enhance your browsing experience. We also use cookies — small text files
          stored on your device — to remember your preferences and ensure functional web
          performance.
        </p>
        <p>
          When you first visit our website, you will be presented with a cookie banner. You have
          the right to accept or decline cookies. Essential cookies required for the basic running
          of the website cannot be disabled, but analytics or marketing tracking cookies can be
          adjusted at any time via your browser settings. You can read more about our{' '}
          <a href="/cookies">Cookie Policy</a>.
        </p>
      </>
    ),
  },
  {
    id: 'security',
    title: 'Data Security, Integrity, and Retention',
    content: (
      <>
        <p>
          We employ industry-standard technical and organizational measures to safeguard your
          personal data from loss, misuse, and unauthorized access, disclosure, alteration, or
          destruction.
        </p>
        <p>
          In the event of a significant data breach that impacts your rights and freedoms, Nina
          Jojer Limited will notify the Nigeria Data Protection Commission within 72 hours of
          discovery, as well as affected individuals without undue delay.
        </p>
        <p>
          We retain your personal data only for as long as necessary to fulfill the operational
          purposes for which it was collected, to resolve disputes, or to comply with statutory
          retention requirements under Nigerian law.
        </p>
      </>
    ),
  },
  {
    id: 'children',
    title: 'Children',
    content: (
      <>
        <p>
          Our website and advisory services are strictly tailored to corporate entities,
          professionals, and adults. We do not knowingly target or collect personal data from
          children under the age of 18. If you have reason to believe that a minor has provided
          us with personal data, please contact us immediately, and we will take appropriate steps
          to purge the information from our systems.
        </p>
      </>
    ),
  },
  {
    id: 'contact',
    title: 'Contact Information',
    content: (
      <>
        <p>
          For any questions, concerns, or inquiries regarding this Privacy Policy or our data
          processing practices, please contact us at:
        </p>
        <div className={styles.contactBox}>
          <p><strong style={{ color: '#fff' }}>Nina Jojer Limited</strong></p>
          <p>21 Lobito Crescent, Wuse, Abuja, Nigeria.</p>
          <p>Email: <a href="mailto:business@ninajojer.com">business@ninajojer.com</a></p>
          <p>Effective Date: June 11, 2026</p>
        </div>
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
