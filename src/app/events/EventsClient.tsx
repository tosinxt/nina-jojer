'use client';

import { useState } from 'react';
import Link from 'next/link';
import SectionTitle from '@/components/SectionTitle';
import styles from './events.module.css';

export type UpcomingEvent = {
  _id: string;
  title: string;
  description: string;
  category: string;
  date: string;
  time: string;
  location: string;
  image: string;
  speakers: { name: string; avatar: string }[];
};

export type PastEvent = {
  _id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  location: string;
  image: string;
};

const ALL = 'All';

const LocationIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M8 1.333A4.674 4.674 0 003.333 6c0 3.5 4.667 8.667 4.667 8.667S12.667 9.5 12.667 6A4.674 4.674 0 008 1.333zm0 6.334a1.667 1.667 0 110-3.334 1.667 1.667 0 010 3.334z" fill="currentColor" />
  </svg>
);

export default function EventsClient({
  upcomingEvents,
  pastEvents,
}: {
  upcomingEvents: UpcomingEvent[];
  pastEvents: PastEvent[];
}) {
  const categoryFilters = [ALL, ...Array.from(new Set(upcomingEvents.map((e) => e.category).filter(Boolean)))];
  const [activeFilter, setActiveFilter] = useState(ALL);

  const visibleEvents =
    activeFilter === ALL
      ? upcomingEvents
      : upcomingEvents.filter((e) => e.category === activeFilter);

  return (
    <>
      {/* ── UPCOMING EVENTS ── */}
      <section className={styles.eventsSection}>
        <div className={styles.eventsInner}>
          <div className={styles.filterBar}>
            <div className={styles.dateFilters}>
              {categoryFilters.map((filter) => (
                <button
                  key={filter}
                  className={`${styles.dateFilter} ${activeFilter === filter ? styles.dateFilterActive : ''}`}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>
            <div className={styles.filterIconWrap} aria-label="Filter">
              <svg width="17" height="17" viewBox="0 0 17 17" fill="none" aria-hidden="true">
                <path d="M2 4h13M5 8.5h7M7.5 13h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
          </div>

          <div className={styles.eventsList}>
            {visibleEvents.length > 0 ? visibleEvents.map((event) => (
              <article key={event._id} className={styles.eventCard}>
                <div className={styles.eventInfo}>
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
                    <h2 className={styles.eventTitle}>{event.title}</h2>
                    <p className={styles.eventDescription}>{event.description}</p>
                  </div>
                  <div className={styles.speakersBlock}>
                    <p className={styles.speakersLabel}>Speakers</p>
                    <div className={styles.speakersList}>
                      {event.speakers?.map((s) => (
                        <div key={s.name} className={styles.speakerItem}>
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={s.avatar} alt={s.name} className={styles.speakerAvatar} />
                          <span className={styles.speakerName}>{s.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className={styles.eventActions}>
                    <Link href="/contact" className={styles.registerBtn}>Register here</Link>
                    <span className={styles.detailsLink}>See more details</span>
                  </div>
                </div>
                <div className={styles.eventImageWrap}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={event.image} alt={event.title} className={styles.eventImage} />
                </div>
              </article>
            )) : (
              <p className={styles.noEvents}>No events scheduled for this date.</p>
            )}
          </div>
        </div>

        <Link href="/events/past" className={styles.viewMore}>
          <span>view more</span>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/events/arrow-circle.svg" alt="" aria-hidden="true" width={25} height={25} />
        </Link>
      </section>

      {/* ── PAST EVENTS ── */}
      <section className={styles.pastSection}>
        <div className={styles.pastContainer}>
          <SectionTitle
            label="ARCHIVE"
            title="Past Events"
            subtitle="Revisit insights from our past gatherings"
            linkLabel="view more"
            linkHref="/events/past"
          />
          <div className={styles.pastGrid}>
            {pastEvents.map((event) => (
              <article key={event._id} className={styles.pastCard}>
                <div className={styles.pastCardImageWrap}>
                  <div className={styles.pastCardImageInner}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={event.image} alt={event.title} className={styles.pastCardImg} />
                  </div>
                </div>
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
    </>
  );
}
