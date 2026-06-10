import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { canonicalUrl } from '@/lib/seo';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from '../privacy/legal.module.css';

export const metadata: Metadata = {
  title: 'Cookie Policy | Nina Jojer',
  description: 'How Nina Jojer Africa uses cookies and tracking technologies on our website.',
  alternates: { canonical: canonicalUrl('/cookies') },
};

const sections = [
  {
    id: 'what-are-cookies',
    title: '1. What Are Cookies?',
    content: (
      <>
        <p>
          Cookies are small text files placed on your device by a website when you visit it. They
          are widely used to make websites work more efficiently, to remember your preferences, and
          to provide information to the owners of the site. Cookies do not typically contain
          personally identifying information, but personal data that we store about you may be
          linked to information obtained from cookies.
        </p>
      </>
    ),
  },
  {
    id: 'how-we-use',
    title: '2. How We Use Cookies',
    content: (
      <>
        <p>
          Nina Jojer Africa Limited uses cookies and similar tracking technologies on our website
          for the following purposes:
        </p>
        <ul>
          <li>To ensure the website functions correctly and securely.</li>
          <li>To remember your preferences and settings across sessions.</li>
          <li>To understand how visitors use our website (analytics).</li>
          <li>To measure the effectiveness of our content and communications.</li>
        </ul>
        <p>
          We do not use cookies to serve targeted advertising or to track you across third-party
          websites for commercial profiling purposes.
        </p>
      </>
    ),
  },
  {
    id: 'types',
    title: '3. Types of Cookies We Use',
    content: (
      <>
        <p>We use the following categories of cookies:</p>
        <ul>
          <li>
            <strong>Strictly Necessary Cookies —</strong> These are essential for the website to
            function and cannot be disabled. They include cookies that remember your session and
            security settings. No consent is required for these.
          </li>
          <li>
            <strong>Performance & Analytics Cookies —</strong> These cookies help us understand how
            visitors interact with our website by collecting anonymous data about page visits,
            traffic sources, and user journeys. We use this information to improve our website.
            These require your consent.
          </li>
          <li>
            <strong>Functionality Cookies —</strong> These allow the website to remember choices you
            make (such as your language preference) to provide a more personalised experience. These
            require your consent.
          </li>
          <li>
            <strong>Third-Party Cookies —</strong> Some pages on our site may embed content from
            third-party services (e.g. video players, social sharing buttons). These services may
            set their own cookies. We do not control these cookies and recommend reviewing the
            relevant third party's cookie policy.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'specific-cookies',
    title: '4. Specific Cookies in Use',
    content: (
      <>
        <p>The table below describes the cookies currently in use on this website:</p>
        <ul>
          <li>
            <strong>_session</strong> — Strictly Necessary. Maintains your browsing session.
            Expires at session end.
          </li>
          <li>
            <strong>_csrf</strong> — Strictly Necessary. Protects against cross-site request
            forgery. Expires at session end.
          </li>
          <li>
            <strong>_ga, _gid</strong> — Performance (Google Analytics). Distinguishes users and
            tracks page views anonymously. Expires after 2 years / 24 hours respectively.
          </li>
          <li>
            <strong>cookie_consent</strong> — Functionality. Remembers your cookie preferences.
            Expires after 12 months.
          </li>
        </ul>
        <p>
          This list is updated periodically as our technology stack evolves.
        </p>
      </>
    ),
  },
  {
    id: 'managing',
    title: '5. Managing Your Cookie Preferences',
    content: (
      <>
        <p>
          When you first visit our website, you will be presented with a cookie consent banner
          allowing you to accept all cookies, reject non-essential cookies, or customise your
          preferences. You can change your preferences at any time by clicking "Cookie settings"
          in the footer of any page.
        </p>
        <p>
          You can also control cookies through your browser settings. Most browsers allow you to:
        </p>
        <ul>
          <li>View what cookies are stored on your device and delete them.</li>
          <li>Block all cookies or block cookies from specific websites.</li>
          <li>Set your browser to notify you before a cookie is placed.</li>
        </ul>
        <p>
          Please note that disabling certain cookies may affect the functionality of our website.
          Strictly necessary cookies cannot be disabled through our consent tool, as the site
          requires them to function.
        </p>
        <p>
          For guidance on managing cookies in your browser, visit{' '}
          <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer">
            www.allaboutcookies.org
          </a>.
        </p>
      </>
    ),
  },
  {
    id: 'do-not-track',
    title: '6. Do Not Track',
    content: (
      <>
        <p>
          Some browsers include a "Do Not Track" (DNT) feature that signals to websites that you
          do not want your online activity tracked. Our website does not currently respond to DNT
          signals, but you may manage your preferences through our cookie consent tool as described
          above.
        </p>
      </>
    ),
  },
  {
    id: 'changes',
    title: '7. Changes to This Policy',
    content: (
      <>
        <p>
          We may update this Cookie Policy from time to time to reflect changes in the cookies we
          use or for other operational, legal, or regulatory reasons. Any changes will be posted on
          this page with an updated "Last revised" date. Please revisit this page periodically to
          stay informed.
        </p>
      </>
    ),
  },
  {
    id: 'contact',
    title: '8. Contact Us',
    content: (
      <>
        <p>
          If you have any questions about our use of cookies, please contact us:
        </p>
        <div className={styles.contactBox}>
          <p><strong style={{ color: '#fff' }}>Nina Jojer Africa Limited</strong></p>
          <p>11A Chris Efuyemi Onanuga Street, Lekki Phase One, Lagos, Nigeria</p>
          <p>Email: <a href="mailto:privacy@ninajojer.com">privacy@ninajojer.com</a></p>
          <p>Phone: <a href="tel:+2347020013234">+234 (0)70 2001 3234</a></p>
        </div>
      </>
    ),
  },
];

export default function CookiesPage() {
  notFound();
  return (
    <main className={styles.page}>
      <Navbar />

      <section className={styles.hero}>
        <div className={styles.heroEyebrow}>
          <span className={styles.eyebrowLine} />
          <span className={styles.eyebrowText}>Legal</span>
        </div>
        <h1 className={styles.heroTitle}>Cookie Policy</h1>
        <p className={styles.heroMeta}>Last revised: 24 May 2025</p>
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
