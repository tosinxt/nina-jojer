'use client';

import { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import SectionTitle from '@/components/SectionTitle';
import DateFilterDropdown, { type DateRange } from '@/components/DateFilterDropdown';
import FilterButton from '@/components/FilterButton';
import styles from './events.module.css';

export type UpcomingEvent = {
  _id: string;
  title: string;
  slug: string;
  description: string;
  category: string;
  date: string;
  time: string;
  location: string;
  image: string;
  registerLink?: string | null;
  speakers: { name: string; avatar: string | null }[];
};

export type PastEvent = {
  _id: string;
  title: string;
  slug?: string;
  youtubeLink?: string | null;
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

const CalendarIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
    <rect x="2" y="3.5" width="14" height="12.5" rx="1" stroke="currentColor" strokeWidth="1.4" />
    <path d="M2 7h14" stroke="currentColor" strokeWidth="1.4" />
    <path d="M6 2v3M12 2v3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);

const LocationIconSm = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
    <path d="M9 1.5A5.25 5.25 0 003.75 6.75c0 3.938 5.25 9.75 5.25 9.75s5.25-5.812 5.25-9.75A5.25 5.25 0 009 1.5zm0 7.125a1.875 1.875 0 110-3.75 1.875 1.875 0 010 3.75z" fill="currentColor" />
  </svg>
);


export default function EventsClient({
  upcomingEvents,
  pastEvents,
}: {
  upcomingEvents: UpcomingEvent[];
  pastEvents: PastEvent[];
}) {
  const allCategories = Array.from(
    new Set([
      ...upcomingEvents.map((e) => e.category),
      ...pastEvents.map((e) => e.category),
    ].filter(Boolean))
  );
  const categoryFilters = [ALL, ...allCategories];

  const router = useRouter();
  const [activeFilter, setActiveFilter] = useState(ALL);
  const [dateRange, setDateRange] = useState<DateRange>('all');
  const [dateOpen, setDateOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState('');
  const filterBtnRef = useRef<HTMLButtonElement | null>(null);

  const q = query.trim().toLowerCase();
  const matchesSearch = (text: string) => !q || text.toLowerCase().includes(q);

  const matchesDate = (dateStr: string): boolean => {
    if (dateRange === 'all') return true;
    const parsed = new Date(dateStr);
    if (isNaN(parsed.getTime())) return true; // can't parse — don't hide it
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const eventDay = new Date(parsed.getFullYear(), parsed.getMonth(), parsed.getDate());

    if (dateRange === 'past') return eventDay < today;

    if (eventDay < today) return false; // remaining options are future-only

    if (dateRange === 'this-week') {
      const weekEnd = new Date(today);
      weekEnd.setDate(today.getDate() + 7);
      return eventDay <= weekEnd;
    }
    if (dateRange === 'this-month') {
      return parsed.getFullYear() === now.getFullYear() && parsed.getMonth() === now.getMonth();
    }
    if (dateRange === 'next-3-months') {
      const threeMonths = new Date(today);
      threeMonths.setMonth(today.getMonth() + 3);
      return eventDay <= threeMonths;
    }
    return true;
  };

  const visibleUpcoming = upcomingEvents.filter((e) => {
    const matchesCat = activeFilter === ALL || e.category === activeFilter;
    const matchesQ = matchesSearch(e.title) || matchesSearch(e.description) || matchesSearch(e.category) || matchesSearch(e.location);
    return matchesCat && matchesQ && matchesDate(e.date);
  });

  const visiblePast = pastEvents.filter((e) => {
    const matchesCat = activeFilter === ALL || e.category === activeFilter;
    const matchesQ = matchesSearch(e.title) || matchesSearch(e.excerpt) || matchesSearch(e.category) || matchesSearch(e.location);
    // "past" date filter should show all past events; future filters hide past events
    const dateOk = dateRange === 'all' || dateRange === 'past' || matchesDate(e.date);
    return matchesCat && matchesQ && dateOk;
  });

  return (
    <>
      {/* ── FILTER BAR ── */}
      <div className={styles.filterBar}>
        <div className={styles.filterPills}>
          {categoryFilters.map((f) => (
            <button
              key={f}
              className={`${styles.filterPill} ${activeFilter === f ? styles.filterPillActive : ''}`}
              onClick={() => setActiveFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <div className={styles.filterActions}>
          {searchOpen && (
            <input
              autoFocus
              type="text"
              placeholder="Search events…"
              className={styles.searchInput}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onBlur={() => { if (!query) setSearchOpen(false); }}
            />
          )}
          <div style={{ position: 'relative' }}>
            <FilterButton
              ref={filterBtnRef}
              onClick={() => setDateOpen((v) => !v)}
              aria-label="Filter by date"
              active={dateOpen || dateRange !== 'all'}
            />
            <DateFilterDropdown
              open={dateOpen}
              value={dateRange}
              onChange={setDateRange}
              onClose={() => setDateOpen(false)}
              anchorRef={filterBtnRef}
            />
          </div>
        </div>
      </div>

      {/* ── UPCOMING EVENTS ── */}
      <section className={styles.eventsSection}>
        <div className={styles.eventsList}>
          {visibleUpcoming.length > 0 ? visibleUpcoming.map((event) => (
            <article
              key={event._id}
              className={styles.eventCard}
              onClick={(e) => {
                if (event.slug && !(e.target as HTMLElement).closest('a, button')) {
                  router.push(`/events/${event.slug}`);
                }
              }}
            >
              {/* Left: meta + body */}
              <div className={styles.eventInfo}>
                {/* Meta row — desktop only */}
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
                  {event.category && (
                    <div className={styles.categoryPill}>{event.category}</div>
                  )}
                  <h2 className={styles.eventTitle}>{event.title}</h2>
                  <p className={styles.eventDescription}>{event.description}</p>
                </div>

                {/* Date + location — mobile only (Figma icon row) */}
                <div className={styles.mobileEventDetails}>
                  <div className={styles.mobileDetailItem}>
                    <CalendarIcon />
                    <span>{event.date}</span>
                  </div>
                  <div className={styles.mobileDetailItem}>
                    <LocationIconSm />
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>

              {/* Right: image */}
              <div className={styles.eventImageWrap}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={event.image} alt={event.title} className={styles.eventImage} />
              </div>

              {/* Bottom-left: speakers */}
              {event.speakers?.length > 0 && (
                <div className={styles.speakersBlock}>
                  <p className={styles.speakersLabel}>Speakers</p>
                  <div className={styles.speakersList}>
                    {event.speakers.map((s) => (
                      <div key={s.name} className={styles.speakerItem}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={s.avatar || '/images/events/speaker-ujam-cropped.png'}
                          alt={s.name}
                          className={styles.speakerAvatar}
                        />
                        <span className={styles.speakerName}>{s.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Bottom-right: actions — desktop */}
              <div className={styles.eventActions}>
                {event.registerLink ? (
                  <a href={event.registerLink} target="_blank" rel="noopener noreferrer" className={styles.registerBtn}>
                    Register here
                  </a>
                ) : (
                  <span className={styles.registerBtnDisabled}>Register here</span>
                )}
                {event.slug ? (
                  <Link href={`/events/${event.slug}`} className={styles.detailsLink}>
                    See more details
                  </Link>
                ) : (
                  <span className={styles.detailsLink}>See more details</span>
                )}
              </div>

              {/* VIEW EVENT — mobile only */}
              {event.slug ? (
                <Link href={`/events/${event.slug}`} className={styles.viewEventMobile}>
                  <span>VIEW EVENT</span>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/events/arrow-circle-sm.svg" alt="" aria-hidden="true" width={25} height={25} />
                </Link>
              ) : (
                <span className={styles.viewEventMobile}>
                  <span>VIEW EVENT</span>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/events/arrow-circle-sm.svg" alt="" aria-hidden="true" width={25} height={25} />
                </span>
              )}
            </article>
          )) : (
            <p className={styles.noEvents}>No upcoming events{q || activeFilter !== ALL ? ' matching your search' : ''}.</p>
          )}
        </div>
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
          {visiblePast.length === 0 && (
            <p className={styles.noEvents}>No past events{q || activeFilter !== ALL ? ' matching your search' : ''}.</p>
          )}
          <div className={styles.pastGrid}>
            {visiblePast.map((event) => (
              <article
                key={event._id}
                className={styles.pastCard}
                onClick={(e) => {
                  if (event.youtubeLink && !(e.target as HTMLElement).closest('a, button')) {
                    window.open(event.youtubeLink, '_blank', 'noopener,noreferrer');
                  }
                }}
              >
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
                  {event.youtubeLink ? (
                    <a href={event.youtubeLink} target="_blank" rel="noopener noreferrer" className={styles.viewEventLink}>
                      <span>WATCH ON YOUTUBE</span>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src="/images/events/arrow-circle-sm.svg" alt="" aria-hidden="true" width={25} height={25} />
                    </a>
                  ) : (
                    <span className={styles.viewEventLink}>
                      <span>WATCH ON YOUTUBE</span>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src="/images/events/arrow-circle-sm.svg" alt="" aria-hidden="true" width={25} height={25} />
                    </span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
