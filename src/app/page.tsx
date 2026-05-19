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

