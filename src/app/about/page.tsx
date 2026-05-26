import type { Metadata } from 'next';
import { canonicalUrl, buildKeywords } from '@/lib/seo';
import { BreadcrumbJsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Nina Jojer — a Strategic Advisory firm delivering transformative impact across Africa and LAC through expertise in public policy, business strategy, and technology.',
  keywords: buildKeywords('About Nina Jojer', 'Advisory Team Africa', 'Consulting Firm History', 'Strategic Advisory Leadership'),
  alternates: { canonical: canonicalUrl('/about') },
  openGraph: {
    title: 'About Nina Jojer | Strategic Advisory & Consulting',
    description: 'Learn about Nina Jojer — a Strategic Advisory firm delivering transformative impact across Africa and LAC.',
    url: canonicalUrl('/about'),
    type: 'website',
  },
};

import Link from "next/link";
import Navbar from "@/components/Navbar";
import CtaSection from "@/components/CtaSection";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import BlurText from "@/components/BlurText";
import styles from "./about.module.css";
import { client } from "@/sanity/client";
import { teamMembersQuery } from "@/sanity/queries";

/* ── Decorative bar data for hero ── */
const heroBars = [
  { left: 412.87, top: -52, width: 30.929 },
  { left: 305.65, top: -52, width: 57.734 },
  { left: 126.26, top: -52, width: 88.662 },
  { left: -11.89, top: -52, width: 88.662 },
  { left: -13.95, top: 86.15, width: 88.662 },
  { left: -11.88, top: 224.3, width: 173.201 },
  { left: -13.95, top: 362.45, width: 263.925 },
  { left: -49, top: 362.45, width: 263.925 },
  { left: -13.95, top: 500.59, width: 348.464 },
  { left: 74.72, top: 86.15, width: 88.662 },
  { left: 161.31, top: 224.3, width: 88.662 },
  { left: 247.92, top: 362.45, width: 88.662 },
  { left: 334.52, top: 500.59, width: 88.662 },
  { left: 421.12, top: 638.74, width: 88.662 },
  { left: 214.92, top: 86.15, width: 88.662 },
  { left: 303.59, top: 224.3, width: 88.662 },
  { left: 392.25, top: 362.45, width: 88.662 },
  { left: 480.91, top: 500.59, width: 88.662 },
  { left: 355.13, top: 86.15, width: 57.734 },
  { left: 404.62, top: 224.3, width: 57.734 },
  { left: 454.11, top: 362.45, width: 57.734 },
  { left: 462.36, top: 86.15, width: 30.929 },
  { left: 524.22, top: 224.3, width: 30.929 },
  { left: 586.07, top: 362.45, width: 30.929 },
];

/* ── Stats ── */
const stats = [
  { value: "2014", label: "Founded" },
  { value: "50+", label: "Governments and corporations advised" },
  { value: "20+", label: "Countries where we operate" },
  { value: "98%", label: "Client retention rate" },
];

/* ── Values ── */
const DataDrivenIcon = () => (
  <svg width="59" height="59" viewBox="0 0 59 59" fill="none" xmlns="http://www.w3.org/2000/svg" style={{display:"block"}}>
    <path d="M11.195 51.9925C10.0436 51.9925 9.05786 51.5825 8.23759 50.7627C7.41774 49.9424 7.00781 48.9566 7.00781 47.8053V11.1946C7.00781 10.0392 7.41774 9.05009 8.23759 8.22737C9.05786 7.40424 10.0436 6.99268 11.195 6.99268H47.8057C48.9611 6.99268 49.9502 7.40424 50.7729 8.22737C51.596 9.05009 52.0076 10.0392 52.0076 11.1946V47.8053C52.0076 48.9566 51.596 49.9424 50.7729 50.7627C49.9502 51.5825 48.9611 51.9925 47.8057 51.9925H11.195ZM42.7925 47.8053H47.8057V42.7922L42.7925 47.8053ZM13.2993 47.8053H18.7132L26.0882 40.4303H30.4517L23.0767 47.8053H28.5785L35.9535 40.4303H40.317L32.942 47.8053H38.429L45.804 40.4303H47.8057V11.1946H11.195V45.5461L16.3108 40.4303H20.6743L13.2993 47.8053ZM25.9357 26.2986L18.6198 33.5537C18.2313 33.9008 17.7794 34.0845 17.264 34.105C16.7485 34.1255 16.3007 33.9417 15.9205 33.5537C15.5325 33.1604 15.3385 32.7093 15.3385 32.2004C15.3385 31.6915 15.5325 31.238 15.9205 30.8397L24.454 22.3069C24.8789 21.8889 25.3746 21.68 25.9413 21.68C26.5075 21.68 26.9996 21.8889 27.4175 22.3069L31.467 26.3711L40.3809 17.4418C40.7693 17.0636 41.2217 16.8746 41.7379 16.8746C42.2542 16.8746 42.7065 17.0686 43.0949 17.4566C43.4731 17.845 43.6622 18.293 43.6622 18.8007C43.6622 19.3083 43.4731 19.76 43.0949 20.1558L32.9488 30.3481C32.5239 30.7758 32.0281 30.9897 31.4615 30.9897C30.8952 30.9897 30.4032 30.7758 29.9852 30.3481L25.9357 26.2986Z" fill="currentColor"/>
  </svg>
);

const values = [
  {
    icon: "/images/icons/about-us/transparency.png",
    title: "Transparency",
    desc: "We are honest and open with our employees, customers and stakeholders about our goals, performance and challenges, and we foster trust in our relationships.",
  },
  {
    icon: "/images/icons/about-us/innovation.png",
    title: "Innovation",
    desc: "We encourage creativity and innovation in our work environment, and we offer cutting-edge services that anticipate and respond to the changing needs of the market.",
  },
  {
    icon: null,
    svgIcon: <DataDrivenIcon />,
    title: "Data-Driven",
    desc: "We use data and insights to inform our decisions and actions, and to help our clients achieve their objectives.",
  },
  {
    icon: "/images/icons/about-us/quality.png",
    title: "Quality",
    desc: "We pay close attention to detail and listen to our customers' needs and expectations, and we deliver high-quality products and services that exceed their satisfaction.",
  },
  {
    icon: "/images/icons/about-us/inclusivity.png",
    title: "Inclusivity",
    desc: "We embrace and respect the diversity of backgrounds, perspectives, and identities of our employees, customers, and stakeholders, and we create a culture of belonging and collaboration.",
  },
  {
    icon: "/images/icons/about-us/social-responsibility.png",
    title: "Social Responsibility",
    desc: "We are aware of our impact on the environment and society, and we align our services with the UN SDG goals.",
  },
];

const fallbackTeam = [
  { _id: "1", name: "Hon. Chukwuemeka Ujam,", slug: "hon-chukwuemeka-ujam-1", credentials: "B.Engr, M.Sc, PhD, FNSE, mni", role: "Managing Partner", linkedIn: null, photo: "/images/events/speaker-ujam.png", bio: null },
  { _id: "2", name: "Hon. Chukwuemeka Ujam,", slug: "hon-chukwuemeka-ujam-2", credentials: "B.Engr, M.Sc, PhD, FNSE, mni", role: "Managing Partner", linkedIn: null, photo: "/images/events/speaker-ujam.png", bio: null },
  { _id: "3", name: "Hon. Chukwuemeka Ujam,", slug: "hon-chukwuemeka-ujam-3", credentials: "B.Engr, M.Sc, PhD, FNSE, mni", role: "Managing Partner", linkedIn: null, photo: "/images/events/speaker-ujam.png", bio: null },
  { _id: "4", name: "Hon. Chukwuemeka Ujam,", slug: "hon-chukwuemeka-ujam-4", credentials: "B.Engr, M.Sc, PhD, FNSE, mni", role: "Managing Partner", linkedIn: null, photo: "/images/events/speaker-ujam.png", bio: null },
  { _id: "5", name: "Hon. Chukwuemeka Ujam,", slug: "hon-chukwuemeka-ujam-5", credentials: "B.Engr, M.Sc, PhD, FNSE, mni", role: "Managing Partner", linkedIn: null, photo: "/images/events/speaker-ujam.png", bio: null },
  { _id: "6", name: "Hon. Chukwuemeka Ujam,", slug: "hon-chukwuemeka-ujam-6", credentials: "B.Engr, M.Sc, PhD, FNSE, mni", role: "Managing Partner", linkedIn: null, photo: "/images/events/speaker-ujam.png", bio: null },
];

/* ── LinkedIn icon SVG ── */
const LinkedInIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-label="LinkedIn">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="currentColor" />
  </svg>
);

type TeamMember = { _id: string; name: string; slug: string; credentials: string; role: string; bio: string | null; linkedIn: string | null; photo: string | null };

export default async function AboutPage() {
  let team: TeamMember[] = [];
  try {
    team = await client.fetch<TeamMember[]>(teamMembersQuery);
  } catch { /* Sanity not configured yet */ }
  if (!team?.length) team = fallbackTeam;

  return (
    <main className={styles.page}>
      <BreadcrumbJsonLd items={[{ name: 'Home', href: '/' }, { name: 'About', href: '/about' }]} />
      <Navbar />

      {/* ── HEADER ── */}
      <section className={styles.header}>
        {/* Right-aligned text block */}
        <div className={styles.headerContent}>
          <div className={styles.headerText}>
            <BlurText as="h1" text="Empowering Growth and Impact" direction="bottom" delay={130} className={styles.headerTitle} />
            <BlurText text="At NINA JOJER, we are passionate about empowering businesses and organizations across Africa to thrive in a rapidly changing world." direction="bottom" delay={80} stepDuration={0.4} className={styles.headerBody} />
          </div>
        </div>

        {/* Hero area with decorative bars + portrait */}
        <div className={styles.heroArea}>
          {/* Decorative staircase bars */}
          {heroBars.map((bar, i) => (
            <div
              key={i}
              className={styles.heroBar}
              style={{ left: bar.left, top: bar.top, width: bar.width }}
            />
          ))}
          {/* Portrait image */}
          <div className={styles.heroPortraitWrap}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/Header/144/7Ekyx 2.png"
              alt="About Nina Jojer"
              className={styles.heroPortraitImg}
            />
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className={styles.statsSection}>
        <div className={styles.statsContainer}>
          <BlurText as="h2" text="What we've achieved over the years" direction="bottom" delay={110} className={styles.statsHeading} />
          <div className={styles.statsRow}>
            {stats.map((s) => (
              <div key={s.value} className={styles.statItem}>
                <p className={styles.statValue}>{s.value}</p>
                <p className={styles.statLabel}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO WE ARE ── */}
      <section className={styles.whoSection}>
        <div className={styles.whoContainer}>
          <div className={styles.whoContent}>
            <BlurText as="h2" text="Strategy rooted in African realities" direction="bottom" delay={110} className={styles.whoHeading} />
            <div className={styles.whoBody}>
              <p>
                We are a dynamic consulting firm recognized for leveraging deep expertise in communications, public policy, corporate strategy, human capital development, technology solutions, and advocacy to deliver transformative results. Our success is built on a strong network spanning the political landscape and the private sector.
              </p>
              <p>
                Since our inception, Nina Jojer has cultivated in-house capabilities to provide tailored solutions that meet the unique needs of our clients. We specialize in facilitating seamless operations across markets in Sub-Saharan Africa by fostering strategic relationships with Ministries, Departments, Agencies, National Assemblies, and influential political stakeholders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── DIRECTION (Vision + Mission) ── */}
      <section className={styles.directionSection}>
        <div className={styles.directionContent}>
          {/* Top: eyebrow + heading + body */}
          <div className={styles.directionTop}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowLine} />
              <span className={styles.eyebrowText}>DIRECTION</span>
            </div>
            <BlurText as="h2" text="Where we're headed and why" direction="bottom" delay={110} className={styles.directionHeading} />
            <p className={styles.directionBody}>
              We believe Africa&apos;s challenges demand African solutions. Our vision is a continent where institutions lead with clarity and purpose.
            </p>
          </div>

          {/* Bottom: Mission + Vision two-column row */}
          <div className={styles.missionVisionRow}>
            <div className={styles.missionVisionItem}>
              <span className={styles.pill}>OUR MISSION</span>
              <BlurText as="h3" text="Catalysing Growth, Driving Impact" direction="bottom" delay={100} className={styles.missionVisionHeading} />
              <p className={styles.missionVisionBody}>
                We are dedicated to delivering exceptional solutions by leveraging our expertise in corporate strategy, policy innovation, human capital development, advocacy, research, strategic communication, and cutting-edge innovation.
              </p>
            </div>
            <div className={styles.missionVisionItem}>
              <span className={styles.pill}>OUR VISION</span>
              <BlurText as="h3" text="Empowering Transformation" direction="bottom" delay={100} className={styles.missionVisionHeading} />
              <p className={styles.missionVisionBody}>
                To make a positive impact on the world of business in Africa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className={styles.valuesSection}>
        <div className={styles.valuesContainer}>
          {/* Header row */}
          <div className={styles.valuesHeader}>
            <div className={styles.valuesHeaderLeft}>
              <div className={styles.eyebrow}>
                <span className={styles.eyebrowLine} />
                <span className={styles.eyebrowText}>VALUES</span>
              </div>
              <BlurText as="h2" text="What we deliver" direction="bottom" delay={110} className={styles.valuesHeading} />
            </div>
            <p className={styles.valuesSubtitle}>Real change across African institutions and governments</p>
          </div>
          {/* Grid: 2 rows × 3 cols */}
          <div className={styles.valuesGrid}>
            {values.map((v) => (
              <div key={v.title} className={styles.valueCard}>
                {"svgIcon" in v && v.svgIcon
                  ? <span className={styles.valueIcon} style={{display:"block",width:59,lineHeight:0}}>{v.svgIcon}</span>
                  : /* eslint-disable-next-line @next/next/no-img-element */
                    <img src={v.icon!} alt={v.title} className={styles.valueIcon} />
                }
                <h3 className={styles.valueTitle}>{v.title}</h3>
                <p className={styles.valueDesc}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className={styles.teamSection}>
        <div className={styles.teamContainer}>
          {/* Section header */}
          <div className={styles.teamHeader}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowLine} />
              <span className={styles.eyebrowText}>PEOPLE</span>
            </div>
            <BlurText as="h2" text="The people behind it" direction="bottom" delay={110} className={styles.teamHeading} />
            <p className={styles.teamSubtitle}>
              Strategy is only as good as the minds shaping it. Our team brings decades of experience across policy, governance, and African institutions.
            </p>
          </div>

          {/* Team grid: 2 rows × 3 cards */}
          <div className={styles.teamGrid}>
            {team.map((member) => (
              <div key={member._id} className={styles.teamCard}>
                <div className={styles.teamCardImage}>
                  {member.photo && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={member.photo} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  )}
                </div>
                <div className={styles.teamCardInfo}>
                  <div className={styles.teamCardTitles}>
                    <Link href={`/about/team/${member.slug}`} className={styles.teamCardName}>
                      <span className={styles.teamCardNameBold}>{member.name} </span>
                      <span className={styles.teamCardNameBold}>{member.credentials}</span>
                    </Link>
                    <p className={styles.teamCardRole}>{member.role}</p>
                  </div>
                  <a href={member.linkedIn ?? '#'} className={styles.teamCardLinkedIn} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                    <LinkedInIcon />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Join our team CTA */}
          <div className={styles.joinTeam}>
            <div className={styles.joinTeamText}>
              <h3 className={styles.joinTeamTitle}>Join our team</h3>
              <p className={styles.joinTeamBody}>We're building something that matters. If you think like we do, we want to hear from you.</p>
            </div>
            <Link href="/careers" className={styles.joinTeamBtn}>View Careers</Link>
          </div>
        </div>
      </section>

      <CtaSection />
      <Newsletter />
      <Footer />
    </main>
  );
}
