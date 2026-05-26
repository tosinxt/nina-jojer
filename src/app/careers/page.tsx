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
import BlurText from '@/components/BlurText';
import Navbar from '@/components/Navbar';
import CtaSection from '@/components/CtaSection';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';
import styles from './careers.module.css';
import JobEmbed from './JobEmbed';

const whyJoinReasons = [
  {
    icon: '/images/icons/about-us/impact.svg',
    title: 'Impact that Compounds Over Time',
    body: "Your work influences policy decisions affecting millions. You'll see the results of your analysis in real governance changes. This isn't abstract consulting work.",
  },
  {
    icon: '/images/icons/about-us/network.svg',
    title: 'A Network of Serious People',
    body: "You'll work alongside former government officials, economists, and strategists. The people here have done real things. You'll learn from them and build relationships that last.",
  },
  {
    icon: '/images/icons/about-us/autonomy.svg',
    title: 'Autonomy and Responsibility',
    body: "We don't micromanage. You'll own your projects and make decisions. We hire adults and treat you like one. Mistakes happen and we learn from them.",
  },
];

export default function CareersPage() {
  return (
    <main className={styles.page}>
      <BreadcrumbJsonLd items={[{ name: 'Home', href: '/' }, { name: 'Careers', href: '/careers' }]} />
      <Navbar />

      {/* ── HEADER ── */}
      <section className={styles.header}>
        <div className={styles.headerContent}>
          <BlurText as="h1" text="Build something meaningful" direction="bottom" delay={130} className={styles.headerTitle} />
          <BlurText text="Join a team that shapes policy and drives change across Africa" direction="bottom" delay={80} stepDuration={0.4} className={styles.headerBody} />
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
            <BlurText as="h2" text="Open roles" direction="bottom" delay={110} className={styles.sectionHeading} />
            <BlurText text="We're looking for talented people to join our teams across Africa." direction="bottom" delay={80} stepDuration={0.4} className={styles.sectionBody} />
          </div>
          <JobEmbed />
        </div>
      </section>

      {/* ── WHY JOIN US ── */}
      <section className={styles.valuesSection}>
        <div className={styles.valuesContainer}>

          {/* Section title */}
          <div className={styles.valuesTitleBlock}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowLine} />
              <span className={styles.eyebrowText}>WHY</span>
            </div>
            <div className={styles.valuesTitleContent}>
              <BlurText as="h2" text="Why Join NINA JOJER Africa" direction="bottom" delay={110} className={styles.valuesHeading} />
              <BlurText text="Work that matters on problems that shape the continent." direction="bottom" delay={80} stepDuration={0.4} className={styles.valuesSubtitle} />
            </div>
          </div>

          {/* 3 cards */}
          <div className={styles.valuesRow}>
            {whyJoinReasons.map((v) => (
              <div key={v.title} className={styles.valueCard}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={v.icon} alt="" className={styles.valueIcon} />
                <div className={styles.valueCardContent}>
                  <h3 className={styles.valueTitle}>{v.title}</h3>
                  <p className={styles.valueBody}>{v.body}</p>
                </div>
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
