import type { Metadata } from 'next';
import { canonicalUrl, buildKeywords } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Nina Jojer offers Strategic Advisory, Policy Analysis, Technology Consulting, and Corporate Communications services across Africa and LAC markets. Global vision, local impact.',
  keywords: buildKeywords(
    'Strategic Advisory Services',
    'Policy Analysis Services Africa',
    'Technology Consulting Africa',
    'Corporate Communications Africa',
    'Government Relations Consulting',
    'Business Strategy Services',
  ),
  alternates: { canonical: canonicalUrl('/services') },
  openGraph: {
    title: 'Services | Nina Jojer',
    description: 'Strategic Advisory, Policy Analysis, Technology Consulting, and Corporate Communications across Africa and LAC.',
    url: canonicalUrl('/services'),
    type: 'website',
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
