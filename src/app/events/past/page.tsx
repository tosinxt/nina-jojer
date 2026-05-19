"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import CtaSection from "@/components/CtaSection";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import styles from "./past.module.css";

/* ── Past events data ── */
const pastEvents = [
  {
    id: 1,
    image: "/images/events/past-event-card.png",
    category: "Tech",
    title: "GALVANISING TRANSFORMATION - INTEGRATING AGRICULTURE, INDUSTRY AND MARKETS FOR SUSTAINABLE GROWTH",
    excerpt: "A conversation on regional commerce and economic cooperation",
    date: "Thu 08 Feb 2024",
    location: "Accra",
  },
  {
    id: 2,
    image: "/images/events/past-event-card.png",
    category: "Tech",
    title: "GALVANISING TRANSFORMATION - INTEGRATING AGRICULTURE, INDUSTRY AND MARKETS FOR SUSTAINABLE GROWTH",
    excerpt: "A conversation on regional commerce and economic cooperation",
    date: "Thu 08 Feb 2024",
    location: "Accra",
  },
  {
    id: 3,
    image: "/images/events/past-event-card.png",
    category: "Tech",
    title: "GALVANISING TRANSFORMATION - INTEGRATING AGRICULTURE, INDUSTRY AND MARKETS FOR SUSTAINABLE GROWTH",
    excerpt: "A conversation on regional commerce and economic cooperation",
    date: "Thu 08 Feb 2024",
    location: "Accra",
  },
];

/* ── Icons ── */
const CalendarIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
    <path
      d="M2.25 7.5h13.5M5.25 1.5v1.5m7.5-1.5v1.5M3.75 3h10.5A1.5 1.5 0 0115.75 4.5v10.5a1.5 1.5 0 01-1.5 1.5H3.75a1.5 1.5 0 01-1.5-1.5V4.5A1.5 1.5 0 013.75 3z"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const LocationIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
    <path
      d="M9 1.5A5.25 5.25 0 003.75 6.75c0 3.938 5.25 9.75 5.25 9.75s5.25-5.813 5.25-9.75A5.25 5.25 0 009 1.5zm0 7.125a1.875 1.875 0 110-3.75 1.875 1.875 0 010 3.75z"
      fill="currentColor"
    />
  </svg>
);

const ArrowCircleIcon = () => (
  /* eslint-disable-next-line @next/next/no-img-element */
  <img
    src="/images/events/arrow-circle.svg"
    alt=""
    aria-hidden="true"
    width={25}
    height={25}
  />
);

export default function PastEventsPage() {
  return (
    <main className={styles.page}>
      <Navbar />

      {/* ── PAGE HEADER ── */}
      <section className={styles.pageHeader}>
        <div className={styles.headerContainer}>
          <h1 className={styles.pageTitle}>Past Events</h1>
          <p className={styles.pageSubtitle}>
            Selected conferences, webinars, and engagements where NINA JOJER shared strategic insights on policy, governance, and technology.
          </p>
        </div>
      </section>

      {/* ── PAST EVENTS GRID ── */}
      <section className={styles.gridSection}>
        <div className={styles.gridContainer}>
          <div className={styles.grid}>
            {pastEvents.map((event) => (
              <article key={event.id} className={styles.card}>
                {/* Image */}
                <div className={styles.cardImage}>
                  <div className={styles.cardImageInner}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={event.image}
                      alt={event.title}
                      className={styles.cardImg}
                    />
                  </div>
                </div>

                {/* Content */}
                <div className={styles.cardContent}>
                  <div className={styles.cardTop}>
                    {/* Category pill */}
                    <div className={styles.categoryPill}>{event.category}</div>

                    {/* Title + excerpt */}
                    <div className={styles.cardTexts}>
                      <h2 className={styles.cardTitle}>{event.title}</h2>
                      <p className={styles.cardExcerpt}>{event.excerpt}</p>
                    </div>

                    {/* Date + location */}
                    <div className={styles.eventDetails}>
                      <div className={styles.detailItem}>
                        <CalendarIcon />
                        <span>{event.date}</span>
                      </div>
                      <div className={styles.detailItem}>
                        <LocationIcon />
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <Link href="#" className={styles.viewEvent}>
                    <span>VIEW EVENT</span>
                    <ArrowCircleIcon />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* View more */}
        <Link href="#" className={styles.viewMore}>
          <span>view more</span>
          <ArrowCircleIcon />
        </Link>
      </section>

      <CtaSection />
      <Newsletter />
      <Footer />
    </main>
  );
}
