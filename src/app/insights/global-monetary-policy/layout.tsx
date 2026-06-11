import type { Metadata } from 'next';
import { siteConfig, canonicalUrl } from '@/lib/seo';

const title = 'Global Monetary Policy Tracker';
const description = 'Tracking central bank policy decisions and monetary trends across global markets.';
const url = canonicalUrl('/insights/global-monetary-policy');
const imageUrl = canonicalUrl('/images/insights/monetary-policy-tracker.png');

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

export default function GlobalMonetaryPolicyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
