"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import CtaSection from "@/components/CtaSection";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";
import styles from "./events.module.css";

/* ── Date filter tabs ── */
const DATE_FILTERS = ["Fri 09 Feb", "Sat 10 Feb", "Sun 11 Feb"];

/* ── Upcoming events ── */
const upcomingEvents = [
  {
    id: 1,
    time: "8:00 am",
    date: "Fri, 9th Feb",
    location: "Addis Ababa, Ethiopia",
    category: "Corporate",
    title: "SHAPING STISA 2034 FROM STRATEGY TO EXECUTION",
    description:
      "This dialogue brings together policymakers, development partners, and industry leaders to confront a critical question:\nHow do we move from ambitious STI frameworks to coordinated, bankable, and scalable implementation across African economies?",
    speakers: [{ name: "Hon Chukwuemeka Ujam, PHD, MNI", avatar: "/images/events/speaker-ujam.png" }],
    image: "/images/events/event-1.png",
  },
  {
    id: 2,
    time: "8:00 am",
    date: "Fri, 9th Feb",
    location: "Addis Ababa, Ethiopia",
    category: "Corporate",
    title: "GALVANIZING TRANSFORMATION-INTEGRATING AGRICULTURE, INDUSTRY AND MARKETS FOR SUSTAINABLE GROWTH",
    description:
      "This event will be the first to focus on Agriculture, and its importance is timely and relevant.",
    speakers: [{ name: "Hon Chukwuemeka Ujam, PHD, MNI", avatar: "/images/events/speaker-ujam.png" }],
    image: "/images/events/event-2.png",
  },
];

/* ── Past events ── */
const pastEvents = [
  {
    id: 1,
    image: "/images/events/past-card.png",
    category: "Tech",
    title: "GALVANISING TRANSFORMATION - INTEGRATING AGRICULTURE, INDUSTRY AND MARKETS FOR SUSTAINABLE GROWTH",
    excerpt: "A conversation on regional commerce and economic cooperation",
    date: "Thu 08 Feb 2024",
    location: "Accra",
  },
  {
    id: 2,
    image: "/images/events/past-card.png",
    category: "Tech",
    title: "GALVANISING TRANSFORMATION - INTEGRATING AGRICULTURE, INDUSTRY AND MARKETS FOR SUSTAINABLE GROWTH",
    excerpt: "A conversation on regional commerce and economic cooperation",
    date: "Thu 08 Feb 2024",
    location: "Accra",
  },
  {
    id: 3,
    image: "/images/events/past-card.png",
    category: "Tech",
    title: "GALVANISING TRANSFORMATION - INTEGRATING AGRICULTURE, INDUSTRY AND MARKETS FOR SUSTAINABLE GROWTH",
    excerpt: "A conversation on regional commerce and economic cooperation",
    date: "Thu 08 Feb 2024",
    location: "Accra",
  },
];

/* ── Icons ── */
const LocationIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path
      d="M8 1.333A4.674 4.674 0 003.333 6c0 3.5 4.667 8.667 4.667 8.667S12.667 9.5 12.667 6A4.674 4.674 0 008 1.333zm0 6.334a1.667 1.667 0 110-3.334 1.667 1.667 0 010 3.334z"
      fill="currentColor"
    />
  </svg>
);

export default function EventsPage() {
  const [activeFilter, setActiveFilter] = useState("Fri 09 Feb");

  return (
    <main className={styles.page}>
      <Navbar />

      {/* ── HERO HEADER ── */}
      <section className={styles.heroSection}>
        <div className={styles.heroContainer}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>Events &amp; Forums</h1>
            <p className={styles.heroSubtitle}>Upcoming events, webinars, and speaking engagements.</p>
          </div>
        </div>
        <div className={styles.heroBanner}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/events/hero-banner.png"
            alt="Events & Forums hero banner"
            className={styles.heroBannerImg}
          />
        </div>
      </section>

      {/* ── UPCOMING EVENTS SECTION ── */}
      <section className={styles.eventsSection}>
        <div className={styles.eventsInner}>

          {/* Date filter pills */}
          <div className={styles.dateFilters}>
            {DATE_FILTERS.map((filter) => (
              <button
                key={filter}
                className={`${styles.dateFilter} ${activeFilter === filter ? styles.dateFilterActive : ""}`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Event cards */}
          <div className={styles.eventsList}>
            {upcomingEvents.map((event) => (
              <article key={event.id} className={styles.eventCard}>
                {/* Left: info panel */}
                <div className={styles.eventInfo}>
                  {/* Time / date / location row */}
                  <div className={styles.eventMeta}>
                    <span className={styles.metaText}>{event.time}</span>
                    <span className={styles.metaDot} />
                    <span className={styles.metaText}>{event.date}</span>
                    <span className={styles.metaDot} />
                    <span className={styles.metaLocation}>
                      <LocationIcon />
                      {event.location}
                    </span>
                  </div>

                  {/* Category + title + description */}
                  <div className={styles.eventBody}>
                    <div className={styles.categoryPill}>{event.category}</div>
                    <h2 className={styles.eventTitle}>{event.title}</h2>
                    <p className={styles.eventDescription}>{event.description}</p>
                  </div>

                  {/* Speakers */}
                  <div className={styles.speakersBlock}>
                    <p className={styles.speakersLabel}>Speakers</p>
                    <div className={styles.speakersList}>
                      {event.speakers.map((s) => (
                        <div key={s.name} className={styles.speakerItem}>
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={s.avatar} alt={s.name} className={styles.speakerAvatar} />
                          <span className={styles.speakerName}>{s.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className={styles.eventActions}>
                    <Link href="#" className={styles.registerBtn}>Register here</Link>
                    <span className={styles.detailsLink}>See more details</span>
                  </div>
                </div>

                {/* Right: image */}
                <div className={styles.eventImageWrap}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={event.image} alt={event.title} className={styles.eventImage} />
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* View more */}
        <Link href="#" className={styles.viewMore}>
          <span>view more</span>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/events/arrow-circle.svg" alt="" aria-hidden="true" width={25} height={25} />
        </Link>
      </section>

      {/* ── PAST EVENTS SECTION (Event / 20 /) ── */}
      <section className={styles.pastSection}>
        <div className={styles.pastContainer}>

          {/* Header row (node 787-6873) */}
          <SectionTitle
            label="ARCHIVE"
            title="Past Events"
            subtitle="Revisit insights from our past gatherings"
            linkLabel="view more"
            linkHref="/events/past"
          />

          {/* 3-column card grid */}
          <div className={styles.pastGrid}>
            {pastEvents.map((event) => (
              <article key={event.id} className={styles.pastCard}>
                {/* Image: aspect-[405/404] */}
                <div className={styles.pastCardImageWrap}>
                  <div className={styles.pastCardImageInner}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={event.image} alt={event.title} className={styles.pastCardImg} />
                  </div>
                </div>

                {/* Content: 408px, p-30px, justify-between */}
                <div className={styles.pastCardContent}>
                  <div className={styles.pastCardTop}>
                    <div className={styles.categoryPill}>{event.category}</div>
                    <div className={styles.pastCardTexts}>
                      <h3 className={styles.pastCardTitle}>{event.title}</h3>
                      <p className={styles.pastCardExcerpt}>{event.excerpt}</p>
                    </div>
                    <div className={styles.pastEventDetails}>
                      <div className={styles.pastDetailItem}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="/images/events/calendar-icon.svg" alt="" aria-hidden="true" width={18} height={18} />
                        <span>{event.date}</span>
                      </div>
                      <div className={styles.pastDetailItem}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="/images/events/location-icon.svg" alt="" aria-hidden="true" width={18} height={18} />
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </div>
                  <Link href="/events/past" className={styles.viewEventLink}>
                    <span>VIEW EVENT</span>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/images/events/arrow-circle-sm.svg" alt="" aria-hidden="true" width={25} height={25} />
                  </Link>
                </div>
              </article>
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
