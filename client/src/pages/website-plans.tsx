import { useEffect } from "react";
import { applySeo, applyBreadcrumbJsonLd } from "@/lib/seo";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { EnquiryButton } from "@/components/EnquiryButton";

const liveWebsites = [
  {
    name: "Route Revolution – Courier & Tracking Platform",
    url: "https://routerevolution.in/#home",
    bullets: [
      "Smart shipping companion for Indian businesses and customers, with flows for business clients, collection centers, and individual shipments",
      "Delhivery-powered live tracking views so every parcel update is visible in real time",
      "WhatsApp-first enquiry and booking flows so pickups, queries, and updates land straight in your phone"
    ]
  },
  {
    name: "Aakrati Interior Studio – Bengaluru",
    url: "https://artkrati.in/",
    bullets: [
      "High-end interior studio website migrated to clean, fast static HTML for improved speed and reliability",
      "Preserves the original luxury look and feel while significantly reducing hosting and maintenance costs",
      "Ideal reference for brands that want a premium aesthetic without heavyweight infrastructure"
    ]
  },
  {
    name: "Jay Mahal – Elegant Marriage Hall",
    url: "https://jaymahal.in/",
    bullets: [
      "Bilingual (English + Tamil) marketing site for an elegant marriage hall in Thoothukudi",
      "Photography-driven hero and sections that highlight capacity, amenities, and events",
      "WhatsApp-powered booking journey that turns visitors into real event enquiries"
    ]
  },
  {
    name: "Bezalel Interiors – The Art of Elegant Living",
    url: "https://bezalelinterior.com/",
    bullets: [
      "Refined, typography-led portfolio experience for a luxury interiors brand",
      "Clean single-page React app optimized around project storytelling and visuals",
      "Branding and copy centered on crafting soulful, elevated everyday living"
    ]
  },
  {
    name: "KON Sun Energy Solutions – Solar Power Made Simple",
    url: "https://konsunenergy.in/",
    bullets: [
      "Single-page React marketing site for a Tamil Nadu–based solar brand",
      "Combines hero media, clear value proposition, and section-based storytelling across services, installations, FAQs, and contact",
      "Built to convert visitors into consultation leads with clear CTAs and contact flows"
    ]
  }
];

export default function WebsitePlansPage() {
  useEffect(() => {
    applySeo({
      title: "Website Packages & Pricing – High-Performance Business Websites in Chennai – ForgeAsh",
      description:
        "Browse ForgeAsh website packages for high-performance business websites, ideal for clinics, institutes and service businesses in Chennai, Tamil Nadu and across India.",
      keywords: [
        "website packages Chennai",
        "business website pricing Chennai",
        "web design packages Tamil Nadu",
        "website development plans India",
      ],
      canonicalPath: "/services/websites",
    });
    applyBreadcrumbJsonLd("services-websites", [
      { name: "Home", path: "/" },
      { name: "Services", path: "/services" },
      { name: "Website Packages", path: "/services/websites" },
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
      <Navigation />
      <main className="relative pt-28 pb-16">
        {/* Animated background glows */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
        </div>
        {/* Plans section */}
        <section className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="mb-10 relative z-10">
              <p className="text-xs tracking-[0.25em] text-[var(--executive-silver)] uppercase mb-2">
                Web Development Plans
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3">
                High-Performance <span className="gradient-text">Business Websites</span>
              </h1>
              <p className="text-sm sm:text-base text-[var(--executive-silver)] max-w-2xl">
                Choose a website plan that matches where your business is today. Every package includes a custom design aligned to your brand, clear enquiry paths, and performance-focused implementation that feels fast on both desktop and mobile. Ideal if you&apos;re looking for a web development company in Chennai or need website development services in Chennai delivered from an India-based team.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3 relative z-10">
              {/* Basic */}
              <div className="glass-card rounded-2xl p-6 flex flex-col h-full hover:border-purple-400/50 transition-all">
                <div className="mb-4">
                  <p className="text-xs font-semibold tracking-[0.25em] text-[var(--executive-silver)] uppercase">
                    Basic Package
                  </p>
                  <h2 className="text-lg font-bold text-white mt-1">
                    Starts from ₹ 12,000
                  </h2>
                </div>
                <ul className="space-y-2 text-sm text-[var(--executive-silver)] flex-1">
                  <li>Up to 5 pages (Home, About, Services, Gallery, Contact)</li>
                  <li>WhatsApp click-to-chat button</li>
                  <li>One enquiry form connected to your preferred email/WhatsApp</li>
                  <li>Basic SEO setup (titles, descriptions, on-page basics)</li>
                  <li>Mobile responsive design</li>
                  <li>Simple image gallery for key highlights</li>
                  <li>Hosting free for 1st year (on supported providers)</li>
                </ul>
                <p className="mt-4 text-xs font-medium text-[var(--executive-silver)]">
                  Delivery in 4 hours* once content and assets are finalized.
                </p>
                <div className="mt-3">
                  <EnquiryButton
                    serviceId="websites_basic"
                    serviceLabel="Website Package – Basic"
                    sourcePage="/services/websites"
                    size="sm"
                    variant="primary"
                  />
                </div>
              </div>

              {/* Advanced */}
              <div className="glass-card glow-effect rounded-2xl bg-gradient-to-b from-[var(--executive-amethyst)]/35 via-[var(--executive-sapphire)]/20 to-transparent p-6 flex flex-col h-full border border-white/30">
                <div className="mb-4">
                  <p className="text-xs font-semibold tracking-[0.25em] text-[var(--executive-silver)] uppercase">
                    Advanced Package
                  </p>
                  <h2 className="text-lg font-bold text-white mt-1">
                    Starts from ₹ 20,000
                  </h2>
                </div>
                <ul className="space-y-2 text-sm text-[var(--executive-silver)] flex-1">
                  <li>Up to 12 pages across services, team, FAQ, and resources</li>
                  <li>WhatsApp click-to-chat button on key CTAs</li>
                  <li>Multiple enquiry/contact forms for different services</li>
                  <li>On-page SEO + basic Schema implementation</li>
                  <li>Basic chatbot embedded for common questions</li>
                  <li>Image optimization for faster loading</li>
                  <li>Upload &amp; optimize up to 6 client videos (YouTube or self-hosted)</li>
                  <li>One month of post-launch content and minor tweaks</li>
                </ul>
                <p className="mt-4 text-xs font-medium text-[var(--executive-silver)]">
                  Delivery in 4 days after all content, images, and structure are confirmed.
                </p>
                <div className="mt-3">
                  <EnquiryButton
                    serviceId="websites_advanced"
                    serviceLabel="Website Package – Advanced"
                    sourcePage="/services/websites"
                    size="sm"
                    variant="primary"
                  />
                </div>
              </div>

              {/* Premium */}
              <div className="glass-card glow-effect rounded-2xl bg-gradient-to-b from-[var(--executive-gold)]/25 via-[var(--executive-orange)]/20 to-transparent p-6 flex flex-col h-full border border-[var(--executive-gold)]/60">
                <div className="mb-4">
                  <p className="text-xs font-semibold tracking-[0.25em] text-[var(--executive-silver)] uppercase">
                    Premium Package
                  </p>
                  <h2 className="text-lg font-bold text-white mt-1">
                    Starts from ₹ 40,000
                  </h2>
                </div>
                <ul className="space-y-2 text-sm text-[var(--executive-silver)] flex-1">
                  <li>Up to 50 pages, including detailed service pages and landing pages</li>
                  <li>WhatsApp Business/API chat integration for faster follow-ups</li>
                  <li>Advanced forms &amp; lead workflows (multi-step, conditional fields)</li>
                  <li>Advanced SEO foundations &amp; AI-powered chatbot for FAQs</li>
                  <li>Upload &amp; optimize up to 15 client videos and case highlights</li>
                  <li>Content Management System with social media integration</li>
                  <li>Three months of support for tweaks, improvements, and minor changes</li>
                </ul>
                <p className="mt-4 text-xs font-medium text-[var(--executive-silver)]">
                  Delivery in 2 weeks for agreed scope, assuming timely content approvals.
                </p>
                <div className="mt-3">
                  <EnquiryButton
                    serviceId="websites_premium"
                    serviceLabel="Website Package – Premium"
                    sourcePage="/services/websites"
                    size="sm"
                    variant="primary"
                  />
                </div>
              </div>
            </div>

            <p className="mt-5 text-[11px] text-[var(--executive-silver)]/80">
              *Delivery timelines assume all required content, images, and approvals are provided on time. GST is extra. Domain and long-term hosting costs are separate. WhatsApp BSP fees, if applicable, are billed directly by the provider.
            </p>
          </div>
        </section>

        {/* Recent implementations */}
        <section className="mt-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="mb-8 text-center">
              <div className="inline-block mb-3">
                <span className="inline-block px-6 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-[0.25em] uppercase text-[var(--executive-silver)]">
                  Recent Website Implementations
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
                Sites We&apos;ve Launched on These Foundations
              </h2>
              <p className="max-w-3xl mx-auto text-sm sm:text-base text-white/70">
                A sample of live websites built on ForgeAsh foundations—fast, clear, and tuned to generate real enquiries, bookings, and trust for local and global audiences. These sites were built for brands in Tamil Nadu and other parts of India across different industries.
              </p>
            </div>

            <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
              {liveWebsites.map((site) => (
                <a
                  key={site.url}
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block h-full"
                >
                  <div className="h-full glass-card rounded-2xl hover:border-purple-500/50 transition-all duration-300 p-6 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[var(--executive-gold)] transition-colors">
                        {site.name}
                      </h3>
                      <ul className="space-y-1.5 text-sm text-white/75 mb-4">
                        {site.bullets.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-[var(--executive-amethyst)] to-[var(--executive-sapphire)]" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-2 flex items-center text-xs font-semibold text-[var(--executive-silver)] group-hover:text-white">
                      <span>View live site</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="ml-2 h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                      >
                        <path d="M13 5h6v6h-2V8.41l-7.29 7.3-1.42-1.42 7.3-7.29H13V5z" />
                      </svg>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

