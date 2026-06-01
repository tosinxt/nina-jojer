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
  detailedCredentials?: { title: string; institution: string }[] | null;
  role: string;
  bio: string | null;
  expertise: string[] | null;
  detailedExpertise?: { area: string; description: string }[] | null;
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

      <section className={styles.container}>
        <div className={styles.containerChild}>
          {member.photo ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={member.photo} alt={member.name} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
          ) : null}
        </div>
        <div className={styles.content}>
          <div className={styles.frameParent}>
            <div className={styles.textWrapper}>
              <div className={styles.text}>NJ EXPERT</div>
            </div>
            <div className={styles.heading}>
              <span className={styles.honChukwuemekaUjam}>{member.name}</span>
              {member.credentials && <span className={styles.bengrMscPhd}>{`, ${member.credentials}`}</span>}
            </div>
            <div className={styles.text2}>{member.role}</div>
          </div>
        </div>
      </section>

      <section className={styles.stats7}>
        <div className={styles.row}>
          {/* Left Column: Bio */}
          <div className={styles.loremIpsumDolor}>
            {bioParagraphs.map((para, i) => (
              <span key={i}>
                {para}
                <br /><br />
              </span>
            ))}
            {member.linkedIn && (
              <a href={member.linkedIn} target="_blank" rel="noopener noreferrer" className={styles.linkedInLink}>
                <LinkedInIcon />
                <span>LinkedIn</span>
              </a>
            )}
          </div>

          {/* Middle Column: Credentials */}
          {member.detailedCredentials && member.detailedCredentials.length > 0 && (
            <div className={styles.column}>
              <div className={styles.heading}>Credentials</div>
              {member.detailedCredentials.map((cred, idx) => (
                <div key={idx} className={styles.textParent}>
                  <div className={styles.text}>{cred.title}</div>
                  {cred.institution && (
                    <div className={styles.text2}>{cred.institution}</div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Right Column: Expertise */}
          {(member.detailedExpertise?.length || member.expertise?.length) ? (
            <div className={styles.column}>
              <div className={styles.heading}>EXPERTISE</div>
              {member.detailedExpertise && member.detailedExpertise.length > 0 ? (
                <div className={styles.expertiseList}>
                  {member.detailedExpertise.map((item, idx) => (
                    <div key={idx} className={styles.expertiseItem}>
                      <div className={styles.expertiseArea}>{item.area}</div>
                      {item.description && (
                        <div className={styles.expertiseDesc}>{item.description}</div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                member.expertise?.map((item, idx) => (
                  <div key={idx} className={styles.text19}>{item}</div>
                ))
              )}
            </div>
          ) : null}
        </div>
      </section>

      <CtaSection />
      <Newsletter />
      <Footer />
    </main>
  );
}
