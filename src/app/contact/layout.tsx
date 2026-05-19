import type { Metadata } from 'next';
import { canonicalUrl, buildKeywords } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Nina Jojer. We have offices in Lagos, London, and Washington D.C. Reach our team of strategic advisors and policy experts today.',
  keywords: buildKeywords(
    'Contact Nina Jojer',
    'Advisory Firm Lagos',
    'Policy Consulting Contact',
    'Strategic Advisor Africa',
    'Consulting Office Lagos Nigeria',
  ),
  alternates: { canonical: canonicalUrl('/contact') },
  openGraph: {
    title: 'Contact Us | Nina Jojer',
    description: 'Reach our team of strategic advisors and policy experts. Offices in Lagos, London, and Washington D.C.',
    url: canonicalUrl('/contact'),
    type: 'website',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
