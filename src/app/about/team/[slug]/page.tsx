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
  credentials: string | null;
  role: string;
  bio: string | null;
  expertise: string[] | null;
  linkedIn: string | null;
  photo: string | null;
};

const LinkedInIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="currentColor" />
  </svg>
);

export default async function StaffDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  let member: TeamMember | null = null;
  try {
    member = await client.fetch<TeamMember>(teamMemberBySlugQuery(slug), {}, { next: { revalidate: 60 } });
  } catch { /* Sanity not configured */ }

  if (!member) notFound();

  const bioParagraphs = member.bio?.split('\n').filter(Boolean) ?? [];

  return (
    <main className={styles.page}>
      <Navbar />

      <section className={styles.header}>
        <div className={styles.headerPhoto}>
          {member.photo ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={member.photo} alt={member.name} />
          ) : (
            <div className={styles.photoPlaceholder} />
          )}
        </div>

        <div className={styles.headerInfo}>
          <span className={styles.badge}>NJ EXPERT</span>
          <h1 className={styles.headerName}>
            {member.name}{member.credentials ? `, ${member.credentials}` : ''}
          </h1>
          <p className={styles.headerRole}>{member.role}</p>
        </div>
      </section>

      {(bioParagraphs.length > 0 || member.expertise?.length) && (
        <section className={styles.bioSection}>
          <div className={styles.bioInner}>
            {bioParagraphs.length > 0 && (
              <div className={styles.bioText}>
                {bioParagraphs.map((para, i) => (
                  <p key={i} className={styles.bioPara}>{para}</p>
                ))}
                {member.linkedIn && (
                  <a
                    href={member.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.linkedInLink}
                  >
                    <LinkedInIcon />
                    <span>LinkedIn</span>
                  </a>
                )}
              </div>
            )}

            {member.expertise?.length ? (
              <div className={styles.expertiseSidebar}>
                <h2 className={styles.expertiseHeading}>Expertise</h2>
                <ul className={styles.expertiseList}>
                  {member.expertise.map((item) => (
                    <li key={item} className={styles.expertiseItem}>{item}</li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </section>
      )}

      <CtaSection />
      <Newsletter />
      <Footer />
    </main>
  );
}
