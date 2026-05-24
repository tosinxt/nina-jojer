import type { Metadata } from 'next';
import { canonicalUrl, buildKeywords } from '@/lib/seo';
import { BreadcrumbJsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Careers',
  description: 'Join Nina Jojer. We are looking for talented professionals to join our team of strategic advisors, policy experts, and technology specialists across Africa and LAC.',
  keywords: buildKeywords('Careers Africa Consulting', 'Policy Jobs Africa', 'Advisory Firm Jobs', 'Strategy Consulting Careers', 'Jobs Lagos Nigeria'),
  alternates: { canonical: canonicalUrl('/careers') },
  openGraph: {
    title: 'Careers | Nina Jojer',
    description: 'Join our team of strategic advisors, policy experts, and technology specialists. Build your career at Nina Jojer.',
    url: canonicalUrl('/careers'),
    type: 'website',
  },
};

import Link from 'next/link';
import Navbar from '@/components/Navbar';
import CtaSection from '@/components/CtaSection';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';
import styles from './careers.module.css';
import { client } from '@/sanity/client';
import { jobOpeningsQuery } from '@/sanity/queries';


const values = [
  {
    icon: '/images/icons/about-us/transparency.png',
    title: 'Transparency',
    body: 'We are honest and open with our employees, customers and stakeholders about our goals, performance and challenges, and we foster trust in our relationships.',
  },
  {
    icon: '/images/icons/about-us/innovation.png',
    title: 'Innovation',
    body: 'We encourage creativity and innovation in our work environment, and we offer cutting-edge services that anticipate and respond to the changing needs of the market.',
  },
  {
    icon: '/images/icons/about-us/data-driven.png',
    title: 'Data-Driven',
    body: 'We use data and insights to inform our decisions and actions, and to help our clients achieve their objectives.',
  },
  {
    icon: '/images/icons/about-us/quality.png',
    title: 'Quality',
    body: "We pay close attention to detail and listen to our customers' needs and expectations, and we deliver high-quality products and services that exceed their satisfaction.",
  },
  {
    icon: '/images/icons/about-us/inclusivity.png',
    title: 'Inclusivity',
    body: 'We embrace and respect the diversity of backgrounds, perspectives, and identities of our employees, customers, and stakeholders, and we create a culture of belonging and collaboration.',
  },
  {
    icon: '/images/icons/about-us/social-responsibility.png',
    title: 'Social Responsibility',
    body: 'We are aware of our impact on the environment and society, and we align our services with the UN SDG goals.',
  },
];

type JobOpening = { _id: string; title: string; department?: string; location?: string; type?: string; description?: string; applyLink?: string };

export default async function CareersPage() {
  let jobs: JobOpening[] = [];
  try {
    jobs = await client.fetch<JobOpening[]>(jobOpeningsQuery);
  } catch { /* Sanity not configured yet */ }

  return (
    <main className={styles.page}>
      <BreadcrumbJsonLd items={[{ name: 'Home', href: '/' }, { name: 'Careers', href: '/careers' }]} />
      <Navbar />

      {/* ── HEADER ── */}
      <section className={styles.header}>
        <div className={styles.headerContent}>
          <h1 className={styles.headerTitle}>Build something meaningful</h1>
          <p className={styles.headerBody}>
            Join a team that shapes policy and drives change across Africa
          </p>
        </div>

        {/* Desktop banner */}
        <div className={styles.heroDesktop}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/career.png" alt="" className={styles.heroFullImage} />
        </div>

        {/* Mobile banner */}
        <div className={styles.heroMobile}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/careermobile.png" alt="" className={styles.heroFullImage} />
        </div>
      </section>

      {/* ── OPEN ROLES ── */}
      <section className={styles.openRoles}>
        <div className={styles.container}>
          <div className={styles.openRolesHeader}>
            <h2 className={styles.sectionHeading}>Open roles</h2>
            <p className={styles.sectionBody}>
              {`We're looking for talented people to join our teams across Africa.`}
            </p>
          </div>
          {jobs.length > 0 ? (
            <div className={styles.rolesList}>
              {jobs.map((job) => (
                <div key={job._id} className={styles.roleItem}>
                  <div className={styles.roleInfo}>
                    <h3 className={styles.roleTitle}>{job.title}</h3>
                    <div className={styles.roleMeta}>
                      {job.department && <span className={styles.roleTag}>{job.department}</span>}
                      {job.location && <span className={styles.roleTag}>{job.location}</span>}
                      {job.type && <span className={styles.roleTag}>{job.type}</span>}
                    </div>
                    {job.description && <p className={styles.roleDesc}>{job.description}</p>}
                  </div>
                  {job.applyLink ? (
                    <a href={job.applyLink} className={styles.applyBtn} target="_blank" rel="noopener noreferrer">Apply</a>
                  ) : (
                    <Link href="/contact" className={styles.applyBtn}>Apply</Link>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className={styles.rolesEmpty}><p className={styles.rolesEmptyText}>No open roles at this time. Check back soon — or send us a speculative application at <a href="mailto:careers@ninajojer.com" className={styles.rolesEmptyLink}>careers@ninajojer.com</a>.</p></div>
          )}
        </div>
      </section>

      {/* ── WHAT WE DELIVER ── */}
      <section className={styles.valuesSection}>
        <div className={styles.valuesContainer}>

          {/* Section title row */}
          <div className={styles.valuesTitleRow}>
            <div className={styles.valuesTitleLeft}>
              <div className={styles.eyebrow}>
                <span className={styles.eyebrowLine} />
                <span className={styles.eyebrowText}>VALUES</span>
              </div>
              <h2 className={styles.valuesHeading}>What we deliver</h2>
            </div>
            <p className={styles.valuesBody}>
              Real change across African institutions and governments
            </p>
          </div>

          {/* 2 rows × 3 columns */}
          <div className={styles.valuesContent}>
            {[values.slice(0, 3), values.slice(3)].map((row, ri) => (
              <div key={ri} className={styles.valuesRow}>
                {row.map((v) => (
                  <div key={v.title} className={styles.valueCol}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={v.icon} alt="" className={styles.valueIcon} />
                    <h3 className={styles.valueTitle}>{v.title}</h3>
                    <p className={styles.valueBody}>{v.body}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>

        </div>
      </section>

      <CtaSection />
      <Newsletter />
      <Footer />
    </main>
  );
}
