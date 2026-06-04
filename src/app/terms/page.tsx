import type { Metadata } from 'next';
import { canonicalUrl } from '@/lib/seo';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from '../privacy/legal.module.css';

export const metadata: Metadata = {
  title: 'Terms of Service | Nina Jojer',
  description: "The terms and conditions governing use of Nina Jojer Africa's website and services.",
  alternates: { canonical: canonicalUrl('/terms') },
};

const sections = [
  {
    id: 'acceptance',
    title: '1. Acceptance of Terms',
    content: (
      <>
        <p>
          By accessing or using the website of Nina Jojer Africa Limited ("Nina Jojer", "we", "us",
          or "our") at <a href="https://www.ninajojer.com">www.ninajojer.com</a>, or by engaging
          our advisory and consulting services, you agree to be bound by these Terms of Service
          ("Terms"). If you do not agree to these Terms, please do not use our website or services.
        </p>
        <p>
          These Terms constitute a legally binding agreement between you and Nina Jojer Africa
          Limited, a company incorporated in Nigeria. We reserve the right to update these Terms at
          any time, and continued use of the website following any changes constitutes acceptance of
          the revised Terms.
        </p>
      </>
    ),
  },
  {
    id: 'services',
    title: '2. Our Services',
    content: (
      <>
        <p>
          Nina Jojer Africa Limited provides strategic advisory, policy and advocacy solutions,
          corporate advisory, technology consulting, and strategic communications services to
          governments, institutions, and enterprises operating in Africa and beyond.
        </p>
        <p>
          The content published on our website — including insights, reports, event information,
          and case studies — is provided for general information purposes only. It does not
          constitute legal, financial, or professional advice, and should not be relied upon as such
          without engaging our services formally.
        </p>
      </>
    ),
  },
  {
    id: 'intellectual-property',
    title: '3. Intellectual Property',
    content: (
      <>
        <p>
          All content on this website, including text, graphics, logos, icons, images, audio clips,
          data compilations, and software, is the property of Nina Jojer Africa Limited or its
          content suppliers and is protected by applicable copyright, trademark, and intellectual
          property laws.
        </p>
        <p>
          You may view, download, and print pages from this website for personal, non-commercial
          use only, subject to the restrictions set out in these Terms. You must not reproduce,
          republish, distribute, transmit, modify, create derivative works from, or exploit any
          content from this website without our prior written consent.
        </p>
      </>
    ),
  },
  {
    id: 'acceptable-use',
    title: '4. Acceptable Use',
    content: (
      <>
        <p>You agree not to use our website to:</p>
        <ul>
          <li>Violate any applicable local, national, or international law or regulation.</li>
          <li>Transmit any unsolicited or unauthorised advertising or promotional material.</li>
          <li>Transmit any data or material that is defamatory, offensive, harmful, or otherwise objectionable.</li>
          <li>Attempt to gain unauthorised access to our servers, systems, or third-party systems.</li>
          <li>Introduce malicious code, viruses, or other technologically harmful material.</li>
          <li>Harvest or collect user data without consent.</li>
          <li>Impersonate any person or entity or misrepresent your affiliation.</li>
        </ul>
        <p>
          We reserve the right to restrict or terminate access to this website for any user who
          violates these conditions.
        </p>
      </>
    ),
  },
  {
    id: 'third-party-links',
    title: '5. Third-Party Links',
    content: (
      <>
        <p>
          Our website may contain links to third-party websites. These links are provided for your
          convenience and information only. We have no control over the content of those sites and
          accept no responsibility for them or for any loss or damage that may arise from your use
          of them. Linking to a third-party site does not imply endorsement.
        </p>
      </>
    ),
  },
  {
    id: 'disclaimer',
    title: '6. Disclaimer of Warranties',
    content: (
      <>
        <p>
          This website is provided on an "as is" and "as available" basis without any warranties
          of any kind, either express or implied, including but not limited to implied warranties
          of merchantability, fitness for a particular purpose, or non-infringement.
        </p>
        <p>
          We do not warrant that the website will be uninterrupted, error-free, or free of viruses
          or other harmful components. We make no representations about the accuracy, reliability,
          completeness, or timeliness of any content on the website.
        </p>
      </>
    ),
  },
  {
    id: 'limitation-of-liability',
    title: '7. Limitation of Liability',
    content: (
      <>
        <p>
          To the fullest extent permitted by applicable law, Nina Jojer Africa Limited shall not be
          liable for any indirect, incidental, special, consequential, or punitive damages arising
          out of or related to your use of this website or our services, including but not limited
          to loss of revenue, loss of data, or loss of goodwill, even if we have been advised of
          the possibility of such damages.
        </p>
        <p>
          Our total liability to you in connection with any claim arising out of or related to these
          Terms or your use of the website shall not exceed the amounts paid by you (if any) to us
          in the 12 months preceding the claim.
        </p>
      </>
    ),
  },
  {
    id: 'confidentiality',
    title: '8. Confidentiality',
    content: (
      <>
        <p>
          Any information shared with us through our website's contact form or in connection with a
          service enquiry will be treated with strict confidentiality. We will not disclose such
          information to third parties except as described in our{' '}
          <a href="/privacy">Privacy Policy</a> or as required by law.
        </p>
        <p>
          Where a formal engagement is established, confidentiality obligations will be governed by
          the specific engagement agreement or non-disclosure agreement between the parties.
        </p>
      </>
    ),
  },
  {
    id: 'governing-law',
    title: '9. Governing Law & Disputes',
    content: (
      <>
        <p>
          These Terms shall be governed by and construed in accordance with the laws of the Federal
          Republic of Nigeria, without regard to its conflict of law provisions.
        </p>
        <p>
          Any dispute arising out of or in connection with these Terms, including any question
          regarding their existence, validity, or termination, shall be referred to and finally
          resolved by arbitration under the Arbitration and Conciliation Act (Cap. A18) of Nigeria.
          The seat of arbitration shall be Lagos, Nigeria.
        </p>
      </>
    ),
  },
  {
    id: 'severability',
    title: '10. Severability',
    content: (
      <>
        <p>
          If any provision of these Terms is found to be invalid, illegal, or unenforceable under
          any applicable law, such provision shall be deemed severed from these Terms to the
          minimum extent necessary, and the remaining provisions shall continue in full force and
          effect.
        </p>
      </>
    ),
  },
  {
    id: 'contact',
    title: '11. Contact Us',
    content: (
      <>
        <p>
          If you have any questions about these Terms of Service, please contact us:
        </p>
        <div className={styles.contactBox}>
          <p><strong style={{ color: '#fff' }}>Nina Jojer Africa Limited</strong></p>
          <p>11A Chris Efuyemi Onanuga Street, Lekki Phase One, Lagos, Nigeria</p>
          <p>Email: <a href="mailto:business@ninajojer.com">business@ninajojer.com</a></p>
          <p>Phone: <a href="tel:+2347020013234">+234 (0)70 2001 3234</a></p>
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
        <h1 className={styles.heroTitle}>Terms of Service</h1>
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
