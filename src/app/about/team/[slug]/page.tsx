import Link from 'next/link';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import CtaSection from '@/components/CtaSection';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';
import { client } from '@/sanity/client';
import { teamMemberBySlugQuery } from '@/sanity/queries';
import styles from './staff.module.css';

type TeamMember = {
  _id: string;
  name: string;
  slug: string;
  credentials: string;
  role: string;
  bio: string | null;
  linkedIn: string | null;
  photo: string | null;
};

const fallbackMember: TeamMember = {
  _id: '1',
  name: 'Hon. Chukwuemeka Ujam,',
  slug: 'hon-chukwuemeka-ujam',
  credentials: 'B.Engr, M.Sc, PhD, FNSE, mni',
  role: 'Managing Partner',
  bio: 'A distinguished leader with decades of experience across policy, governance, and African institutions.',
  linkedIn: null,
  photo: '/images/events/speaker-ujam.png',
};

const LinkedInIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-label="LinkedIn">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="currentColor" />
  </svg>
);

export default async function StaffDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  let member: TeamMember | null = null;
  try {
    member = await client.fetch<TeamMember>(teamMemberBySlugQuery(slug));
  } catch { /* Sanity not configured */ }

  if (!member) {
    // Try fallback for demo slugs
    if (slug.startsWith('hon-chukwuemeka-ujam')) {
      member = fallbackMember;
    } else {
      notFound();
    }
  }

  return (
    <main className={styles.page}>
      <Navbar />

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
            <Link href="/about" className={styles.breadcrumbLink}>About</Link>
            <span className={styles.breadcrumbSep} aria-hidden="true">&rsaquo;</span>
            <Link href="/about#team" className={styles.breadcrumbLink}>Our Team</Link>
            <span className={styles.breadcrumbSep} aria-hidden="true">&rsaquo;</span>
            <span className={styles.breadcrumbCurrent}>{member.name}</span>
          </nav>

          <div className={styles.profile}>
            <div className={styles.photoWrap}>
              {member.photo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={member.photo} alt={member.name} className={styles.photo} />
              ) : (
                <div className={styles.photoPlaceholder} />
              )}
            </div>

            <div className={styles.info}>
              <div className={styles.nameBlock}>
                <h1 className={styles.name}>{member.name} {member.credentials}</h1>
                <p className={styles.role}>{member.role}</p>
              </div>

              {member.bio && (
                <div className={styles.bio}>
                  {member.bio.split('\n').map((para, i) => (
                    <p key={i} className={styles.bioPara}>{para}</p>
                  ))}
                </div>
              )}

              {member.linkedIn && (
                <a
                  href={member.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.linkedIn}
                  aria-label="LinkedIn profile"
                >
                  <LinkedInIcon />
                  <span>LinkedIn</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
      <Newsletter />
      <Footer />
    </main>
  );
}
