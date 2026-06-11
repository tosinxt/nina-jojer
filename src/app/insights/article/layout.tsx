import type { Metadata } from 'next';
import { siteConfig, canonicalUrl } from '@/lib/seo';

const title = "A Review of Nigeria's National Blockchain Policy";
const description = "An in-depth review of Nigeria's National Blockchain Policy and what it means for innovation, regulation, and adoption.";
const url = canonicalUrl('/insights/article');
const imageUrl = canonicalUrl('/images/insights/article-hero.jpg');

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: {
    title,
    description,
    url,
    siteName: siteConfig.name,
    type: 'article',
    images: [{ url: imageUrl, width: 1200, height: 630, alt: title }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [imageUrl],
  },
};

export default function StaticArticleLayout({ children }: { children: React.ReactNode }) {
  return children;
}
