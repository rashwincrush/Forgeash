import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { StatisticsSection } from "@/components/statistics-section";
import { BusinessImpactSection } from "@/components/business-impact-section";
import { FeaturedServicesSection } from "@/components/featured-services-section";
import { ServiceCategoriesSection } from "@/components/service-categories-section";
import { IndustryExpertiseSection } from "@/components/industry-expertise-section";
import { CallToActionSection } from "@/components/call-to-action-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <StatisticsSection />
      <BusinessImpactSection />

      <ServiceCategoriesSection />
      <IndustryExpertiseSection />
      <CallToActionSection />
      <Footer />
    </div>
  );
}
