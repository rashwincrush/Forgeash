import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ServiceCategoriesSection } from "@/components/service-categories-section";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--executive-navy-dark)] via-[var(--executive-navy)]/70 to-[var(--executive-navy-dark)] text-white">
      <Navigation />
      <main className="pt-24 pb-12">
        <ServiceCategoriesSection />
      </main>
      <Footer />
    </div>
  );
}
