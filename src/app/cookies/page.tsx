import type { Metadata } from 'next';
import { canonicalUrl } from '@/lib/seo';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from '../privacy/legal.module.css';

export const metadata: Metadata = {
  title: 'Cookie Policy | Nina Jojer',
  description: 'How Nina Jojer Limited uses cookies and tracking technologies on our website.',
  alternates: { canonical: canonicalUrl('/cookies') },
};

const sections = [
  {
    id: 'introduction',
    title: '1. Introduction',
    content: (
      <>
        <p>
          This Cookie Policy explains how Nina Jojer Limited (&ldquo;we,&rdquo; &ldquo;our,&rdquo;
          or &ldquo;us&rdquo;) uses cookies and similar tracking technologies on our website,{' '}
          <a href="https://ninajojer.com/">https://ninajojer.com/</a>. In line with our commitment
          to privacy and transparency under the Nigeria Data Protection Act (NDP Act) 2023, this
          policy outlines what these technologies are, why we use them, and your rights to control
          their use.
        </p>
      </>
    ),
  },
  {
    id: 'what-are-cookies',
    title: '2. What Are Cookies?',
    content: (
      <>
        <p>
          Cookies are small text files that are downloaded and stored on your computer, smartphone,
          or other internet-enabled device when you visit a website. They allow websites to
          recognise your device, remember your preferences, and collect technical information about
          your browsing habits.
        </p>
      </>
    ),
  },
  {
    id: 'how-we-use',
    title: '3. How We Use Cookies',
    content: (
      <>
        <p>
          We use cookies to enhance your browsing experience, secure our website, and gather
          analytics to improve our thought leadership delivery and user engagement. The cookies
          used on our website fall into the following categories:
        </p>
        <ul>
          <li>
            <strong>Essential Cookies —</strong> These cookies are strictly necessary for the
            website to function properly. They enable core functionalities such as page navigation,
            security, and access to secure areas of the site. These cannot be disabled through our
            cookie banner.
          </li>
          <li>
            <strong>Analytics Cookies —</strong> These cookies help us understand how visitors
            interact with our website by collecting and reporting information anonymously. We use
            this data to measure traffic, see which policy briefs or advisory pages are most
            popular, and optimise our platform&rsquo;s user experience.
          </li>
          <li>
            <strong>Functional &amp; Preference Cookies —</strong> These cookies allow our website
            to remember choices you make (such as your preferred region or text size) to provide a
            more personalised experience.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'managing',
    title: '4. Managing Your Cookie Preferences',
    content: (
      <>
        <p>
          When you first visit our website, you will be presented with a cookie banner requesting
          your consent. You have the right to accept, decline, and choose your preferred cookie
          options.
        </p>
        <p>
          You can also manage or disable cookies at any time through your web browser settings.
        </p>
        <p>
          Please note that blocking all cookies (including essential cookies) may impact your
          ability to access or fully use certain parts of our website.
        </p>
        <p>
          To adjust your browser settings, follow the instructions provided by your specific
          browser (e.g. Google Chrome, Safari, Microsoft Edge, Mozilla Firefox).
        </p>
      </>
    ),
  },
  {
    id: 'contact',
    title: '5. Contact Us',
    content: (
      <>
        <p>For any questions regarding our use of cookies, please contact us at:</p>
        <div className={styles.contactBox}>
          <p><strong style={{ color: '#fff' }}>Nina Jojer Limited</strong></p>
          <p>21 Lobito Crescent, Wuse, Abuja, Nigeria.</p>
          <p>Email: <a href="mailto:business@ninajojer.com">business@ninajojer.com</a></p>
        </div>
      </>
    ),
  },
];

export default function CookiesPage() {
  return (
    <main className={styles.page}>
      <Navbar />

      <section className={styles.hero}>
        <div className={styles.heroEyebrow}>
          <span className={styles.eyebrowLine} />
          <span className={styles.eyebrowText}>Legal</span>
        </div>
        <h1 className={styles.heroTitle}>Cookie Policy</h1>
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
