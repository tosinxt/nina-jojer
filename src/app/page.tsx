import type { Metadata } from 'next';
import { siteConfig, canonicalUrl, buildKeywords } from '@/lib/seo';
import Navbar from "@/components/Navbar";
import PreHero from "@/components/PreHero";
import PartnerLogos from "@/components/PartnerLogos";
import Services from "@/components/Services";
import AboutSection from "@/components/AboutSection";
import OurStories from "@/components/OurStories";
import InsightsSection from "@/components/InsightsSection";
import CtaSection from "@/components/CtaSection";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: siteConfig.defaultTitle,
  description: siteConfig.defaultDescription,
  keywords: buildKeywords('Home', 'Strategic Consulting', 'Advisory Firm Africa'),
  alternates: { canonical: canonicalUrl('/') },
  openGraph: {
    title: siteConfig.defaultTitle,
    description: siteConfig.defaultDescription,
    url: canonicalUrl('/'),
    type: 'website',
  },
};

export default function Home() {
  return (
    <main>
      <Navbar />
      <PreHero />
      <PartnerLogos />
      <Services />
      <AboutSection />
      <OurStories />
      <InsightsSection />
      <CtaSection />
      <Newsletter />
      <Footer />
    </main>
  );
}

