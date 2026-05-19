import Navbar from "@/components/Navbar";
import CtaSection from "@/components/CtaSection";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import styles from "./insights.module.css";
import InsightsClient, { type Article } from "./InsightsClient";
import { client } from "@/sanity/client";
import { insightsQuery } from "@/sanity/queries";

/* ── Fallback hardcoded articles (shown before Sanity has content) ── */
const fallbackArticles: Article[] = [
  {
    _id: "1",
    image: "/images/insights/article-1.jpg",
    category: "Tech & Innovations",
    title: "A Review of Nigeria's National Blockchain Policy",
    excerpt: "Nigeria has displayed a growing interest in blockchain technology and cryptocurrencies, recognising their potential benefits in areas such as financial inclusion, transparency, and corruption reduction.",
    author: "EBERE OJADUA",
    publishedAt: "5th May 2026",
    readTime: "5 mins read",
    slug: "nigeria-blockchain-policy",
  },
  {
    _id: "2",
    image: "/images/insights/article-2.jpg",
    category: "Policy Analysis",
    title: "Boosting Trade Development Across West Africa",
    excerpt: "Trade blocs play a pivotal role in promoting economic integration and cooperation among countries, fostering regional growth and prosperity.",
    author: "DEJI MACAULAY",
    publishedAt: "5th May 2026",
    readTime: "5 mins read",
    slug: "boosting-trade-west-africa",
  },
  {
    _id: "3",
    image: "/images/insights/article-3.jpg",
    category: "Tech & Innovation",
    title: "A Review of the Data Protection Act 2020: Strengths and Weaknesses",
    excerpt: "Executive Summary This Policy Brief reviews the Data Protection Act 2020 (the Act), which protects individual privacy rights across digital platforms.",
    author: "CHINWE OHANELE",
    publishedAt: "5th May 2026",
    readTime: "5 mins read",
    slug: "data-protection-act-2020",
  },
  {
    _id: "4",
    image: "/images/insights/article-4.jpg",
    category: "Policy Analysis",
    title: "How Big Data Enables and Constrains AI Development in Africa",
    excerpt: "The report discusses the opportunities and challenges of using big data and AI for sustainable development in Africa and offers recommendations for policymakers, businesses, and researchers.",
    author: "CHINWE OHANELE",
    publishedAt: "5th May 2026",
    readTime: "5 mins read",
    slug: "big-data-ai-africa",
  },
  {
    _id: "5",
    image: "/images/insights/article-3.jpg",
    category: "Tech & Innovation",
    title: "A Review of the Data Protection Act 2020: Strengths and Weaknesses",
    excerpt: "Executive Summary This Policy Brief reviews the Data Protection Act 2020 (the Act), which protects individual privacy rights across digital platforms.",
    author: "CHINWE OHANELE",
    publishedAt: "5th May 2026",
    readTime: "5 mins read",
    slug: "data-protection-act-2020-2",
  },
  {
    _id: "6",
    image: "/images/insights/article-1.jpg",
    category: "Tech & Innovations",
    title: "A Review of Nigeria's National Blockchain Policy",
    excerpt: "Nigeria has displayed a growing interest in blockchain technology and cryptocurrencies, recognising their potential benefits in areas such as financial inclusion, transparency, and corruption reduction.",
    author: "EBERE OJADUA",
    publishedAt: "5th May 2026",
    readTime: "5 mins read",
    slug: "nigeria-blockchain-policy-2",
  },
  {
    _id: "7",
    image: "/images/insights/article-4.jpg",
    category: "Policy Analysis",
    title: "How Big Data Enables and Constrains AI Development in Africa",
    excerpt: "The report discusses the opportunities and challenges of using big data and AI for sustainable development in Africa and offers recommendations for policymakers, businesses, and researchers.",
    author: "CHINWE OHANELE",
    publishedAt: "5th May 2026",
    readTime: "5 mins read",
    slug: "big-data-ai-africa-2",
  },
  {
    _id: "8",
    image: "/images/insights/article-2.jpg",
    category: "Policy Analysis",
    title: "Boosting Trade Development Across West Africa",
    excerpt: "Trade blocs play a pivotal role in promoting economic integration and cooperation among countries, fostering regional growth and prosperity.",
    author: "DEJI MACAULAY",
    publishedAt: "5th May 2026",
    readTime: "5 mins read",
    slug: "boosting-trade-west-africa-2",
  },
];

export default async function InsightsPage() {
  let articles: Article[] = [];
  try {
    articles = await client.fetch<Article[]>(insightsQuery);
  } catch {
    /* Sanity not configured yet — use fallback */
  }
  if (!articles || articles.length === 0) articles = fallbackArticles;

  return (
    <main className={styles.page}>
      <Navbar />
      <InsightsClient articles={articles} />
      <CtaSection />
      <Newsletter />
      <Footer />
    </main>
  );
}
