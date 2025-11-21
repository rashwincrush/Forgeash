import { Button } from "@/components/ui/button";
import { BOOKING_URL } from "@/config";
import { trackEvent } from "@/lib/analytics";

const offers = [
  {
    id: "websites",
    title: "High-Performance Business Websites",
    target: "Clinics, institutes, coaches, agencies, and service businesses",
    description:
      "Modern, conversion-focused websites that look premium, load fast, and turn visitors into real enquiries and bookings.",
    outcomes: [
      "Clear funnels that guide visitors to call, book, or enquire",
      "Mobile-first experience with strong SEO foundations",
      "Structured pages for services, social proof, FAQs, and contact",
    ],
    timeline: "Typical timeline: 2–4 weeks depending on scope",
    investment: "Typical starting investment: project-based, with transparent fixed scopes",
    detailsHref: "/services/websites",
  },
  {
    id: "ai",
    title: "AI Systems & Automation",
    target: "Teams that want to eliminate manual work and improve decisions",
    description:
      "We map your workflows, find high-ROI automation opportunities, and build AI-powered systems that quietly run in the background while your team focuses on growth.",
    outcomes: [
      "Automation of repetitive operations and reporting",
      "Decision-support dashboards using your real data",
      "Roadmap from quick wins to long-term AI capabilities",
    ],
    timeline: "Typical engagement: 4–8 weeks for first live automations",
    investment: "Typical starting investment: scoped discovery + implementation",
    detailsHref: "/services/ai-automation",
  },
  {
    id: "saas",
    title: "SaaS MVP Build",
    target: "Founders and SMEs launching new products",
    description:
      "Launch a revenue-ready SaaS MVP with clean UX, solid foundations, and everything you need to start onboarding real customers—not just demo slides.",
    outcomes: [
      "Auth, dashboards, roles, and billing readiness",
      "Architecture built for scale",
      "Tight feedback loops so you can ship, learn, and iterate",
    ],
    timeline: "Typical timeline: 8–12 weeks for a validated MVP",
    investment: "Typical starting investment: fixed-scope MVP engagements",
    detailsHref: "/services/saas-mvp-build",
  },
  {
    id: "data",
    title: "Data Dashboards & Automation",
    target: "Decision-makers and operations-heavy teams",
    description:
      "Executive and operations dashboards that pull your key metrics into one place, with automations that kill spreadsheet chaos and manual reporting.",
    outcomes: [
      "Dashboards tailored to your KPIs",
      "Integrations with tools you already use",
      "Automated reporting to eliminate spreadsheet chaos",
    ],
    timeline: "Typical timeline: 3–8 weeks depending on data complexity",
    investment: "Typical starting investment: scoped per dashboard suite",
    detailsHref: "/services/data-dashboards",
  },
] as const;

export function CoreOffersSection() {
  const handleBookCall = (source: string, offerId: string) => {
    trackEvent("cta_click", { location: source, offerId, label: "book_strategy_call" });
  };

  const handleViewDetails = (source: string, offerId: string) => {
    trackEvent("cta_click", { location: source, offerId, label: "view_offer_details" });
  };

  return (
    <section className="py-24 bg-gradient-to-b from-[var(--executive-navy-dark)] via-[var(--executive-navy)]/80 to-[var(--executive-navy-dark)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-[var(--executive-amethyst)]/20 to-[var(--executive-sapphire)]/20 text-[var(--executive-silver)] text-xs font-semibold tracking-wide uppercase backdrop-blur-sm border border-white/10">
            Productized Services
          </span>
          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-white">
            <span className="text-transparent bg-gradient-to-r from-[var(--executive-amethyst)] to-[var(--executive-sapphire)] bg-clip-text">
              Clear, focused engagements
            </span>{" "}
            that move your business forward
          </h2>
          <p className="mt-4 text-lg text-[var(--executive-silver)] max-w-3xl mx-auto">
            Pick the engagement that matches where you are todaywhether youre upgrading your website, automating operations with AI, or turning an idea into a SaaS product. Every offer is scoped for speed, clarity, and measurable ROI.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-2">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className="relative overflow-hidden rounded-3xl bg-white/5 border border-white/10 backdrop-blur-2xl p-8 md:p-10 shadow-2xl hover:shadow-[0_24px_60px_rgba(0,0,0,0.45)] transition-all duration-500 hover:-translate-y-2"
            >
              <div className="absolute inset-0 opacity-40 pointer-events-none bg-[radial-gradient(circle_at_top,_rgba(145,66,204,0.18),_transparent_55%),_radial-gradient(circle_at_bottom,_rgba(26,86,240,0.18),_transparent_55%)]" />

              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{offer.title}</h3>
                  <p className="text-sm font-medium text-[var(--executive-silver)]/90">
                    For: {offer.target}
                  </p>
                </div>

                <p className="text-[var(--executive-silver)] mb-6 text-sm md:text-base leading-relaxed">
                  {offer.description}
                </p>

                <ul className="space-y-2 mb-6 text-sm md:text-base text-white/90">
                  {offer.outcomes.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-gradient-to-r from-[var(--executive-amethyst)] to-[var(--executive-sapphire)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mb-6 space-y-1 text-xs md:text-sm text-[var(--executive-silver)]/90">
                  <p>{offer.timeline}</p>
                  <p>{offer.investment}</p>
                </div>

                <div className="mt-auto flex flex-col sm:flex-row gap-3">
                  <Button
                    asChild
                    size="lg"
                    className="flex-1 bg-gradient-to-r from-[var(--executive-amethyst)] to-[var(--executive-sapphire)] text-white font-semibold shadow-lg hover:shadow-xl rounded-xl border border-white/20"
                  >
                    <a
                      href={BOOKING_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => handleBookCall("core_offers", offer.id)}
                      className="flex items-center justify-center gap-2"
                    >
                      <span>Book Strategy Call</span>
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="flex-1 border-white/30 text-[var(--executive-silver)] hover:text-white hover:bg-white/10 rounded-xl"
                  >
                    <a
                      href={offer.detailsHref}
                      onClick={() => handleViewDetails("core_offers", offer.id)}
                      className="flex items-center justify-center gap-2"
                    >
                      <span>View Details</span>
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
