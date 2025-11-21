import { useEffect } from "react";
import { applySeo, applyBreadcrumbJsonLd } from "@/lib/seo";
import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { CoreOffersSection } from "@/components/core-offers-section";
import { StatisticsSection } from "@/components/statistics-section";
import { BusinessImpactSection } from "@/components/business-impact-section";
import { IndustryExpertiseSection } from "@/components/industry-expertise-section";
import { CallToActionSection } from "@/components/call-to-action-section";
import { Footer } from "@/components/footer";
import { EnquiryButton } from "@/components/EnquiryButton";

export default function Home() {
  useEffect(() => {
    applySeo({
      title: "ForgeAsh Technologies – Web Development, AI Automation & SaaS in Chennai",
      description:
        "ForgeAsh Technologies is a web development and AI automation studio based in Chennai, Tamil Nadu, India, helping clinics, institutes, logistics brands and service businesses build high-performance websites, AI systems, SaaS MVPs and dashboards.",
      keywords: [
        "web development company in Chennai",
        "website development Chennai",
        "AI automation Chennai",
        "AI solutions Chennai",
        "SaaS development Chennai",
        "data dashboards Chennai",
        "web development Tamil Nadu",
        "AI automation India",
      ],
      canonicalPath: "/",
      ogType: "website",
    });

    applyBreadcrumbJsonLd("home", [
      { name: "Home", path: "/" },
    ]);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white overflow-hidden">
      <style>{`
        .gradient-text {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .glass-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .glow-effect {
          box-shadow: 0 0 40px rgba(102, 126, 234, 0.3);
        }
      `}</style>

      {/* Background glows */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <Navigation />
      <main className="relative">
        <HeroSection />
        <CoreOffersSection />
        <StatisticsSection />
        <BusinessImpactSection />
        <IndustryExpertiseSection />
        <CallToActionSection />
        <div className="relative z-10 flex justify-center pb-16 px-4">
          <EnquiryButton
            serviceId="general"
            serviceLabel="General Enquiry"
            sourcePage="/"
            size="md"
            variant="secondary"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
