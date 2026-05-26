import type { Metadata } from 'next';
import { canonicalUrl, buildKeywords } from '@/lib/seo';
import { BreadcrumbJsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Events',
  description: 'Stay up to date with Nina Jojer events — conferences, roundtables, and thought leadership sessions on policy, strategy, and technology across Africa and global markets.',
  keywords: buildKeywords('Policy Conferences Africa', 'Strategy Roundtables', 'Advisory Events Nigeria', 'Business Events Africa'),
  alternates: { canonical: canonicalUrl('/events') },
  openGraph: {
    title: 'Events | Nina Jojer',
    description: 'Conferences, roundtables, and thought leadership sessions on policy, strategy, and technology.',
    url: canonicalUrl('/events'),
    type: 'website',
  },
};

import BlurText from "@/components/BlurText";
import Navbar from "@/components/Navbar";
import CtaSection from "@/components/CtaSection";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import styles from "./events.module.css";
import EventsClient, { type UpcomingEvent, type PastEvent } from "./EventsClient";
import { client } from "@/sanity/client";
import { upcomingEventsQuery, pastEventsQuery } from "@/sanity/queries";

const fallbackUpcoming: UpcomingEvent[] = [
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

const fallbackPast: PastEvent[] = [
  { _id: "1", image: "/images/events/past-card.png", category: "Tech", title: "GALVANISING TRANSFORMATION - INTEGRATING AGRICULTURE, INDUSTRY AND MARKETS FOR SUSTAINABLE GROWTH", excerpt: "A conversation on regional commerce and economic cooperation", date: "Thu 08 Feb 2024", location: "Accra" },
  { _id: "2", image: "/images/events/past-card.png", category: "Tech", title: "GALVANISING TRANSFORMATION - INTEGRATING AGRICULTURE, INDUSTRY AND MARKETS FOR SUSTAINABLE GROWTH", excerpt: "A conversation on regional commerce and economic cooperation", date: "Thu 08 Feb 2024", location: "Accra" },
  { _id: "3", image: "/images/events/past-card.png", category: "Tech", title: "GALVANISING TRANSFORMATION - INTEGRATING AGRICULTURE, INDUSTRY AND MARKETS FOR SUSTAINABLE GROWTH", excerpt: "A conversation on regional commerce and economic cooperation", date: "Thu 08 Feb 2024", location: "Accra" },
];

export default async function EventsPage() {
  let upcomingEvents: UpcomingEvent[] = [];
  let pastEvents: PastEvent[] = [];
  try {
    [upcomingEvents, pastEvents] = await Promise.all([
      client.fetch<UpcomingEvent[]>(upcomingEventsQuery),
      client.fetch<PastEvent[]>(pastEventsQuery),
    ]);
  } catch {
    /* Sanity not configured yet — use fallback */
  }
  if (!upcomingEvents?.length) upcomingEvents = fallbackUpcoming;
  if (!pastEvents?.length) pastEvents = fallbackPast;

  return (
    <main className={styles.page}>
      <BreadcrumbJsonLd items={[{ name: 'Home', href: '/' }, { name: 'Events', href: '/events' }]} />
      <Navbar />

      {/* ── HERO ── */}
      <section className={styles.heroSection}>
        <div className={styles.heroContainer}>
          <div className={styles.heroText}>
            <BlurText as="h1" text="Events & Forums" direction="bottom" delay={130} className={styles.heroTitle} />
            <BlurText text="Upcoming events, webinars, and speaking engagements." direction="bottom" delay={80} stepDuration={0.4} className={styles.heroSubtitle} />
          </div>
        </div>
        <div className={styles.heroBanner}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/events/hero-banner.png" alt="Events & Forums hero banner" className={styles.heroBannerImg} />
        </div>
      </section>

      <EventsClient upcomingEvents={upcomingEvents} pastEvents={pastEvents} />

      <CtaSection />
      <Newsletter />
      <Footer />
    </main>
  );
}
