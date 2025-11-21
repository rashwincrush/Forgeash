import { useEffect } from "react";
import { applySeo, applyBreadcrumbJsonLd } from "@/lib/seo";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { BOOKING_URL } from "@/config";
import { EnquiryButton } from "@/components/EnquiryButton";

export default function ServicesPage() {
  useEffect(() => {
    applySeo({
      title: "Services – Websites, AI Systems & SaaS Solutions – ForgeAsh, Chennai",
      description:
        "Explore ForgeAsh services including high-performance business websites, AI systems & automation, SaaS MVP builds and data dashboards for businesses in Chennai, Tamil Nadu, India and across India.",
      keywords: [
        "website development services Chennai",
        "AI automation services Chennai",
        "SaaS MVP development Chennai",
        "dashboard development company in Chennai",
        "web development Tamil Nadu",
      ],
      canonicalPath: "/services",
    });

    applyBreadcrumbJsonLd("services", [
      { name: "Home", path: "/" },
      { name: "Services", path: "/services" },
    ]);
  }, []);

  const primaryCtaHref = BOOKING_URL || "/contact";

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
          background: rgba(15, 23, 42, 0.85);
          backdrop-filter: blur(14px);
          border: 1px solid rgba(148, 163, 184, 0.3);
        }
      `}</style>

      <Navigation />

      {/* Background glows */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <main className="relative pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-20">
          {/* Hero */}
          <section className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-5">
              <span className="text-[10px] font-semibold tracking-[0.26em] uppercase text-slate-300">
                Services · Websites · AI · SaaS
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              Websites, AI Systems & SaaS Solutions for Businesses in
              <span className="gradient-text"> Chennai and Across India</span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-slate-200/90 mb-8">
              ForgeAsh Technologies is a web development and AI automation company in Chennai, Tamil Nadu, India,
              helping clinics, institutes, logistics brands, and service businesses across India launch
              high-performance websites, AI systems, SaaS MVPs, and real-time dashboards. If you need a SaaS
              development partner for businesses across India, this is where we start the conversation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={primaryCtaHref}
                target={primaryCtaHref === BOOKING_URL ? "_blank" : undefined}
                rel={primaryCtaHref === BOOKING_URL ? "noopener noreferrer" : undefined}
                className="inline-flex items-center justify-center px-7 py-3 rounded-xl bg-gradient-to-r from-[var(--executive-amethyst)] to-[var(--executive-sapphire)] text-sm sm:text-base font-semibold shadow-lg hover:brightness-110 transition-all"
              >
                Book a Strategy Call
              </a>
              <a
                href="/work"
                className="inline-flex items-center justify-center px-7 py-3 rounded-xl border border-white/25 text-sm sm:text-base font-semibold text-white/90 hover:bg-white/5 transition-all"
              >
                View Our Work
              </a>
            </div>
          </section>

          {/* Service cards */}
          <section>
            <div className="grid gap-6 md:grid-cols-2">
              {/* High-Performance Websites */}
              <div className="glass-card rounded-2xl p-6 sm:p-7">
                <h2 className="text-xl sm:text-2xl font-bold mb-2">High-Performance Business Websites</h2>
                <p className="text-sm text-slate-300 mb-4">
                  Modern, conversion-focused websites for clinics, institutes, and service businesses in Chennai and
                  across India. Perfect if you&apos;re looking for a web development company in Chennai that offers
                  website development services in Chennai with fast, enquiry-focused execution.
                </p>
                <ul className="space-y-2 text-sm text-slate-200 mb-4">
                  <li>• Custom website design aligned to your brand, messaging, and business goals</li>
                  <li>• Optimized for search (SEO), speed, and mobile performance</li>
                  <li>• Built for enquiries, bookings, and WhatsApp or phone leads</li>
                  <li>• Clear foundations if you later want AI chat, dashboards, or SaaS-style portals</li>
                </ul>
                <a
                  href="/services/websites"
                  className="inline-flex items-center text-sm font-semibold text-[var(--executive-gold)] hover:text-[var(--executive-gold-soft)]"
                >
                  Learn More
                  <span className="ml-1 text-xs">→</span>
                </a>
                <div className="mt-4">
                  <EnquiryButton
                    serviceId="websites"
                    serviceLabel="High-Performance Business Websites"
                    sourcePage="/services"
                    size="sm"
                    variant="secondary"
                  />
                </div>
              </div>

              {/* AI Systems & Automation */}
              <div className="glass-card rounded-2xl p-6 sm:p-7">
                <h2 className="text-xl sm:text-2xl font-bold mb-2">AI Systems & Automation</h2>
                <p className="text-sm text-slate-300 mb-4">
                  AI automation services for businesses in Chennai, Tamil Nadu, and teams operating across India. Ideal
                  if you&apos;re searching for AI automation services in Chennai or an AI solutions company in Chennai that
                  can plug into your existing tools and CRMs.
                </p>
                <ul className="space-y-2 text-sm text-slate-200 mb-4">
                  <li>• Automate repetitive workflows, reports, notifications, and follow-ups</li>
                  <li>• Connect AI assistants to CRMs, support tools, internal systems, and data sources</li>
                  <li>• Reduce manual work while improving accuracy and response time</li>
                  <li>• Start small with one workflow and expand into a full AI operations layer</li>
                </ul>
                <a
                  href="/services/ai-automation"
                  className="inline-flex items-center text-sm font-semibold text-[var(--executive-gold)] hover:text-[var(--executive-gold-soft)]"
                >
                  Learn More
                  <span className="ml-1 text-xs">→</span>
                </a>
                <div className="mt-4">
                  <EnquiryButton
                    serviceId="ai_automation"
                    serviceLabel="AI Systems & Automation"
                    sourcePage="/services"
                    size="sm"
                    variant="secondary"
                  />
                </div>
              </div>

              {/* SaaS MVP Build */}
              <div className="glass-card rounded-2xl p-6 sm:p-7">
                <h2 className="text-xl sm:text-2xl font-bold mb-2">SaaS MVP Build</h2>
                <p className="text-sm text-slate-300 mb-4">
                  Launch a revenue-ready SaaS product with a Chennai-based development partner serving clients across
                  India. If you&apos;re looking for a SaaS development company in Chennai or SaaS MVP development in India,
                  this engagement is built for you.
                </p>
                <ul className="space-y-2 text-sm text-slate-200 mb-4">
                  <li>• Core features: auth, roles, dashboards, admin, and billing readiness</li>
                  <li>• Architecture that can grow from MVP to full v1 without a full rewrite</li>
                  <li>• Ideal for founders and SMEs in India validating new SaaS ideas</li>
                  <li>• Tight feedback loops so you can ship, get usage, and iterate with confidence</li>
                </ul>
                <a
                  href="/services/saas-mvp-build"
                  className="inline-flex items-center text-sm font-semibold text-[var(--executive-gold)] hover:text-[var(--executive-gold-soft)]"
                >
                  Learn More
                  <span className="ml-1 text-xs">→</span>
                </a>
                <div className="mt-4">
                  <EnquiryButton
                    serviceId="saas_mvp_build"
                    serviceLabel="SaaS MVP Build"
                    sourcePage="/services"
                    size="sm"
                    variant="secondary"
                  />
                </div>
              </div>

              {/* Data Dashboards & Automation */}
              <div className="glass-card rounded-2xl p-6 sm:p-7">
                <h2 className="text-xl sm:text-2xl font-bold mb-2">Data Dashboards & Automation</h2>
                <p className="text-sm text-slate-300 mb-4">
                  Executive and operations dashboards for Chennai-based and pan-India teams who need real-time
                  visibility. We act as a dashboard development company in Chennai building business intelligence
                  dashboards in Chennai and for distributed teams across the country.
                </p>
                <ul className="space-y-2 text-sm text-slate-200 mb-4">
                  <li>• Centralized KPI dashboards for revenue, operations, and finance</li>
                  <li>• Automated reporting and alerts for decision-makers</li>
                  <li>• Dashboards for logistics, clinics, institutions, and service businesses</li>
                  <li>• Optional automations that trigger workflows when KPIs cross thresholds</li>
                </ul>
                <a
                  href="/services/data-dashboards"
                  className="inline-flex items-center text-sm font-semibold text-[var(--executive-gold)] hover:text-[var(--executive-gold-soft)]"
                >
                  Learn More
                  <span className="ml-1 text-xs">→</span>
                </a>
                <div className="mt-4">
                  <EnquiryButton
                    serviceId="data_dashboards"
                    serviceLabel="Data Dashboards & Automation"
                    sourcePage="/services"
                    size="sm"
                    variant="secondary"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Who we serve / locations */}
          <section className="border border-white/10 rounded-3xl bg-white/5 px-6 sm:px-8 py-8 sm:py-10">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">
              Serving Businesses in Chennai and Across India
            </h2>
            <p className="text-sm sm:text-base text-slate-200 max-w-3xl">
              While ForgeAsh is based in Chennai, Tamil Nadu, India, we work with clients across major cities including
              Bengaluru, Hyderabad, Mumbai, Delhi, Coimbatore, Madurai, Tiruchirappalli, and beyond. If you&apos;re looking
              for a reliable web development or AI automation partner in India, we can collaborate fully remotely
              without compromising on care or clarity.
            </p>
          </section>

          {/* Final CTA */}
          <section className="rounded-3xl border border-purple-500/40 bg-gradient-to-r from-purple-900/40 via-blue-900/30 to-slate-900/40 px-6 sm:px-8 py-10 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Not Sure Which Service You Need?
            </h2>
            <p className="text-sm sm:text-base text-slate-200 max-w-2xl mx-auto mb-6">
              Share where your business is today—website, operations, or SaaS idea—and we&apos;ll recommend a practical
              starting point. You don&apos;t need the perfect brief; just a clear sense of how you&apos;d like things to work
              better.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 rounded-xl bg-gradient-to-r from-[var(--executive-amethyst)] to-[var(--executive-sapphire)] font-semibold text-sm sm:text-base shadow-lg hover:brightness-110 transition-all"
            >
              Contact Us
            </a>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
