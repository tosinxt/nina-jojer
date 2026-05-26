import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import CtaSection from "@/components/CtaSection";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import { client } from "@/sanity/client";
import { eventBySlugQuery, upcomingEventsQuery } from "@/sanity/queries";
import styles from "./event-detail.module.css";

type Speaker = { name: string; avatar: string | null };

type Event = {
  _id: string;
  title: string;
  slug: string;
  description: string | null;
  category: string;
  date: string;
  time: string;
  location: string;
  image: string | null;
  registerLink?: string | null;
  speakers: Speaker[];
};

const fallbackEvents: Event[] = [
  {
    _id: "1",
    slug: "shaping-stisa-2034",
    time: "8:00 am",
    date: "Fri, 9th Feb",
    location: "Addis Ababa, Ethiopia",
    category: "Corporate",
    title: "SHAPING STISA 2034 FROM STRATEGY TO EXECUTION",
    description: "This dialogue brings together policymakers, development partners, and industry leaders to confront a critical question:\nHow do we move from ambitious STI frameworks to coordinated, bankable, and scalable implementation across African economies?",
    speakers: [{ name: "Hon Chukwuemeka Ujam, PHD, MNI", avatar: "/images/events/speaker-ujam-cropped.png" }],
    image: "/images/events/event-1.png",
    registerLink: null,
  },
  {
    _id: "2",
    slug: "galvanizing-transformation",
    time: "8:00 am",
    date: "Fri, 9th Feb",
    location: "Addis Ababa, Ethiopia",
    category: "Corporate",
    title: "GALVANIZING TRANSFORMATION-INTEGRATING AGRICULTURE, INDUSTRY AND MARKETS FOR SUSTAINABLE GROWTH",
    description: "This event will be the first to focus on Agriculture, and its importance is timely and relevant.",
    speakers: [{ name: "Hon Chukwuemeka Ujam, PHD, MNI", avatar: "/images/events/speaker-ujam-cropped.png" }],
    image: "/images/events/event-2.png",
    registerLink: null,
  },
];

export default async function EventDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  let event: Event | null = null;
  let otherEvents: Event[] = [];

  try {
    [event, otherEvents] = await Promise.all([
      client.fetch<Event>(eventBySlugQuery(slug)),
      client.fetch<Event[]>(upcomingEventsQuery),
    ]);
  } catch { /* Sanity not configured */ }

  // Always fall back to static data if Sanity returned nothing
  if (!event) {
    event = fallbackEvents.find((e) => e.slug === slug) ?? null;
  }
  if (!otherEvents?.length) {
    otherEvents = fallbackEvents;
  }
  otherEvents = otherEvents.filter((e) => e.slug !== slug);

  if (!event) notFound();

  const heroImage = event.image ?? "/images/events/event-detail-hero.png";

  return (
    <main className={styles.page}>
      <Navbar />

      {/* ── HEADER ── */}
      <section className={styles.header}>
        <div className={styles.headerBanner}>
          {/* Left: text content */}
          <div className={styles.headerLeft}>
            <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
              <Link href="/events" className={styles.breadcrumbLink}>Events</Link>
              <span className={styles.breadcrumbSep} aria-hidden="true">&gt;</span>
              <span className={styles.breadcrumbCurrent}>{event.category}</span>
            </nav>

            <div className={styles.headerTitleBlock}>
              <h1 className={styles.headerTitle}>{event.title}</h1>
              {event.description && (
                <p className={styles.headerSubtitle}>{event.description.split('\n')[0]}</p>
              )}
            </div>

            {event.registerLink ? (
              <a href={event.registerLink} target="_blank" rel="noopener noreferrer" className={styles.saveBtn}>Save my spot</a>
            ) : (
              <span className={styles.saveBtnDisabled}>Registration coming soon</span>
            )}

            <div className={styles.detailsList}>
              <div className={styles.detailsRow}>
                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>Date</span>
                  <span className={styles.detailValue}>{event.date}</span>
                </div>
                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>Location</span>
                  <span className={styles.detailValue}>{event.location}</span>
                </div>
              </div>
              <div className={styles.detailsRow}>
                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>Time</span>
                  <span className={styles.detailValue}>{event.time}</span>
                </div>
                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>Category</span>
                  <span className={styles.detailValue}>{event.category}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: event image */}
          <div className={styles.headerImageWrap}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={heroImage} alt={event.title} className={styles.headerImage} />
          </div>
        </div>
      </section>

      {/* ── CONTENT SECTION ── */}
      <section className={styles.contentSection}>
        <div className={styles.contentInner}>
          {/* Article body */}
          <div className={styles.articleCol}>
            {event.description && (
              <div className={styles.richText}>
                {event.description.split('\n').map((para, i) => (
                  <p key={i} className={styles.bodyText}>{para}</p>
                ))}
              </div>
            )}
            {event.registerLink ? (
              <a href={event.registerLink} target="_blank" rel="noopener noreferrer" className={styles.saveSpotBtn}>Save my spot</a>
            ) : (
              <span className={styles.saveSpotBtnDisabled}>Registration coming soon</span>
            )}
          </div>

          {/* Speaker sidebar */}
          {event.speakers?.length > 0 && (
            <aside className={styles.speakerSidebar}>
              <h2 className={styles.speakerSidebarTitle}>SPEAKER(S)</h2>
              {event.speakers.map((s) => (
                <div key={s.name} className={styles.speakerCard}>
                  <div className={styles.speakerAvatarWrap}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={s.avatar || "/images/events/speaker-ujam-cropped.png"}
                      alt={s.name}
                      className={styles.speakerAvatarLg}
                    />
                  </div>
                  <p className={styles.speakerNameLg}>{s.name}</p>
                </div>
              ))}
            </aside>
          )}
        </div>
      </section>

      {/* ── OTHER EVENTS ── */}
      {otherEvents.length > 0 && (
        <section className={styles.otherSection}>
          <div className={styles.otherInner}>
            <div className={styles.otherHeading}>
              <h2 className={styles.otherTitle}>Other Events</h2>
            </div>

            <div className={styles.otherList}>
              {otherEvents.map((e) => (
                <article key={e._id} className={styles.otherCard}>
                  <div className={styles.otherCardInfo}>
                    <div className={styles.eventMeta}>
                      <span className={styles.metaText}>{e.time}</span>
                      <span className={styles.metaDot} />
                      <span className={styles.metaText}>{e.date}</span>
                      <span className={styles.metaDot} />
                      <span className={styles.metaLocation}>{e.location}</span>
                    </div>

                    <div className={styles.eventBody}>
                      <div className={styles.categoryPill}>{e.category}</div>
                      <h3 className={styles.eventTitle}>{e.title}</h3>
                      {e.description && <p className={styles.eventDescription}>{e.description.split('\n')[0]}</p>}
                    </div>

                    <div className={styles.speakersBlock}>
                      <p className={styles.speakersLabel}>Speakers</p>
                      <div className={styles.speakersList}>
                        {e.speakers?.map((s) => (
                          <div key={s.name} className={styles.speakerItem}>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={s.avatar || "/images/events/speaker-ujam-cropped.png"}
                              alt={s.name}
                              className={styles.speakerAvatar}
                            />
                            <span className={styles.speakerName}>{s.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className={styles.eventActions}>
                      {e.registerLink ? (
                        <a href={e.registerLink} target="_blank" rel="noopener noreferrer" className={styles.registerBtn}>Register here</a>
                      ) : (
                        <span className={styles.registerBtnDisabled}>Register here</span>
                      )}
                      <Link href={`/events/${e.slug}`} className={styles.detailsLink}>See more details</Link>
                    </div>
                  </div>

                  <div className={styles.otherCardImageWrap}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={e.image ?? "/images/events/event-1.png"} alt={e.title} className={styles.otherCardImage} />
                  </div>
                </article>
              ))}
            </div>

            <Link href="/events" className={styles.viewMore}>
              <span>view more</span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/events/arrow-circle.svg" alt="" aria-hidden="true" width={25} height={25} />
            </Link>
          </div>
        </section>
      )}

      <CtaSection />
      <Newsletter />
      <Footer />
    </main>
  );
}
