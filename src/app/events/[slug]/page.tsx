"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import CtaSection from "@/components/CtaSection";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import styles from "./event-detail.module.css";

const DATE_FILTERS = ["Fri 09 Feb", "Sat 10 Feb", "Sun 11 Feb"];

const otherEvents = [
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
    title: "SHAPING STISA 2034 FROM STRATEGY TO EXECUTION",
    description:
      "This dialogue brings together policymakers, development partners, and industry leaders to confront a critical question:\nHow do we move from ambitious STI frameworks to coordinated, bankable, and scalable implementation across African economies?",
    speakers: [{ name: "Hon Chukwuemeka Ujam, PHD, MNI", avatar: "/images/events/speaker-ujam.png" }],
    image: "/images/events/event-2.png",
  },
  {
    id: 3,
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
];

const LocationIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path
      d="M8 1.333A4.674 4.674 0 003.333 6c0 3.5 4.667 8.667 4.667 8.667S12.667 9.5 12.667 6A4.674 4.674 0 008 1.333zm0 6.334a1.667 1.667 0 110-3.334 1.667 1.667 0 010 3.334z"
      fill="currentColor"
    />
  </svg>
);

const CalendarIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
    <rect x="2" y="3" width="14" height="13" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <path d="M6 1v4M12 1v4M2 7h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export default function EventDetailPage() {
  const [activeFilter, setActiveFilter] = useState("Fri 09 Feb");

  return (
    <main className={styles.page}>
      <Navbar />

      {/* ── HEADER ── */}
      <section className={styles.header}>
        <div className={styles.headerBanner}>
          {/* Left: text content */}
          <div className={styles.headerLeft}>
            {/* Breadcrumbs */}
            <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
              <Link href="/events" className={styles.breadcrumbLink}>Events</Link>
              <span className={styles.breadcrumbSep} aria-hidden="true">&gt;</span>
              <span className={styles.breadcrumbCurrent}>Policy forum</span>
            </nav>

            {/* Title block */}
            <div className={styles.headerTitleBlock}>
              <h1 className={styles.headerTitle}>POLICY FORUM</h1>
              <p className={styles.headerSubtitle}>Three days of strategic dialogue on African policy</p>
            </div>

            {/* CTA button */}
            <Link href="#" className={styles.saveBtn}>Save my spot</Link>

            {/* Event details */}
            <div className={styles.detailsList}>
              <div className={styles.detailsRow}>
                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>Date</span>
                  <span className={styles.detailValue}>10th - 12th February, 2026</span>
                </div>
                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>Location</span>
                  <span className={styles.detailValue}>Skylight, Addis Ababa, Ethiopia.</span>
                </div>
              </div>
              <div className={styles.detailsRow}>
                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>Type</span>
                  <span className={styles.detailValue}>In-person</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: image */}
          <div className={styles.headerImageWrap}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/events/event-detail-hero.png"
              alt="Policy Forum"
              className={styles.headerImage}
            />
          </div>
        </div>
      </section>

      {/* ── CONTENT SECTION ── */}
      <section className={styles.contentSection}>
        <div className={styles.contentInner}>
          {/* Article body */}
          <div className={styles.articleCol}>
            <div className={styles.richText}>
              <p className={styles.bodyText}>
                Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien varius id.
              </p>
              <p className={styles.bodyText}>
                Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu quis fusce augue enim. Quis at habitant diam at. Suscipit tristique risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie aliquet sodales id est ac volutpat.
              </p>
              <p className={`${styles.bodyText} ${styles.bodyTextBold}`}>
                Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla.
              </p>
              <p className={styles.bodyText}>
                Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet commodo consectetur convallis risus. Sed condimentum enim dignissim adipiscing faucibus consequat, urna. Viverra purus et erat auctor aliquam. Risus, volutpat vulputate posuere purus sit congue convallis aliquet. Arcu id augue ut feugiat donec porttitor neque. Mauris, neque ultricies eu vestibulum, bibendum quam lorem id. Dolor lacus, eget nunc lectus in tellus, pharetra, porttitor.
              </p>
              <p className={styles.bodyText}>
                Tristique odio senectus nam posuere ornare leo metus, ultricies. Blandit duis ultricies vulputate morbi feugiat cras placerat elit. Aliquam tellus lorem sed ac. Montes, sed mattis pellentesque suscipit accumsan. Cursus viverra aenean magna risus elementum faucibus molestie pellentesque. Arcu ultricies sed mauris vestibulum.
              </p>
            </div>
            <Link href="#" className={styles.saveSpotBtn}>Save my spot</Link>
          </div>

          {/* Speaker sidebar */}
          <aside className={styles.speakerSidebar}>
            <h2 className={styles.speakerSidebarTitle}>SPEAKER(S)</h2>
            <div className={styles.speakerCard}>
              <div className={styles.speakerAvatarWrap}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/events/speaker-ujam.png"
                  alt="Hon Chukwuemeka Ujam, PHD, MNI"
                  className={styles.speakerAvatarLg}
                />
              </div>
              <p className={styles.speakerNameLg}>Hon Chukwuemeka Ujam, PHD, MNI</p>
            </div>
          </aside>
        </div>
      </section>

      {/* ── OTHER EVENTS ── */}
      <section className={styles.otherSection}>
        <div className={styles.otherInner}>
          {/* Section heading */}
          <div className={styles.otherHeading}>
            <h2 className={styles.otherTitle}>Other Events</h2>
            <p className={styles.otherSubtitle}>The day unfolds in three sessions, each building on the last</p>
          </div>

          <div className={styles.otherContent}>
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
            <div className={styles.otherList}>
              {otherEvents.map((event) => (
                <article key={event.id} className={styles.otherCard}>
                  {/* Left: info */}
                  <div className={styles.otherCardInfo}>
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

                    <div className={styles.eventBody}>
                      <div className={styles.categoryPill}>{event.category}</div>
                      <h3 className={styles.eventTitle}>{event.title}</h3>
                      <p className={styles.eventDescription}>{event.description}</p>
                    </div>

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

                    <div className={styles.eventActions}>
                      <Link href="#" className={styles.registerBtn}>Register here</Link>
                      <span className={styles.detailsLink}>See more details</span>
                    </div>
                  </div>

                  {/* Right: image */}
                  <div className={styles.otherCardImageWrap}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={event.image} alt={event.title} className={styles.otherCardImage} />
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* View more */}
          <Link href="/events" className={styles.viewMore}>
            <span>view more</span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/events/arrow-circle.svg" alt="" aria-hidden="true" width={25} height={25} />
          </Link>
        </div>
      </section>

      <CtaSection />
      <Newsletter />
      <Footer />
    </main>
  );
}
