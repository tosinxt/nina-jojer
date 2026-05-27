export const revalidate = 60;

import type { Metadata } from 'next';
import { canonicalUrl, buildKeywords } from '@/lib/seo';
import { BreadcrumbJsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Insights & Perspectives',
  description: 'Explore Nina Jojer\'s latest thinking on public policy, business strategy, technology, and African markets. Expert analysis from our advisory team.',
  keywords: buildKeywords('Policy Analysis Africa', 'Business Strategy Insights', 'Tech Innovation Africa', 'Nigeria Blockchain Policy', 'West Africa Trade', 'AI Africa', 'Data Protection Policy'),
  alternates: { canonical: canonicalUrl('/insights') },
  openGraph: {
    title: 'Insights & Perspectives | Nina Jojer',
    description: 'Expert analysis on public policy, business strategy, and technology across Africa and LAC markets.',
    url: canonicalUrl('/insights'),
    type: 'website',
  },
};

import Navbar from "@/components/Navbar";
import CtaSection from "@/components/CtaSection";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import styles from "./insights.module.css";
import InsightsClient, { type Article } from "./InsightsClient";
import { client } from "@/sanity/client";
import { insightsQuery } from "@/sanity/queries";

export default async function InsightsPage() {
  let articles: Article[] = [];
  try {
    articles = await client.fetch<Article[]>(insightsQuery);
  } catch { /* Sanity unavailable */ }

  return (
    <main className={styles.page}>
      <BreadcrumbJsonLd items={[{ name: 'Home', href: '/' }, { name: 'Insights', href: '/insights' }]} />
      <Navbar />
      <InsightsClient articles={articles ?? []} />
      <CtaSection />
      <Newsletter />
      <Footer />
    </main>
  );
}
