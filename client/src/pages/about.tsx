import { useEffect } from "react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { BOOKING_URL } from "@/config";
import { trackEvent } from "@/lib/analytics";
import { applySeo, applyBreadcrumbJsonLd } from "@/lib/seo";

export default function AboutPage() {
  useEffect(() => {
    applySeo({
      title: "About ForgeAsh Technologies – Web, AI & SaaS Partner in Chennai, India",
      description:
        "Learn about ForgeAsh Technologies, a Chennai-based studio building high-performance websites, AI systems, data dashboards and SaaS products for ambitious teams across Tamil Nadu, India and beyond.",
      keywords: [
        "about ForgeAsh",
        "web development company in Chennai",
        "AI automation Chennai",
        "SaaS development partner India",
      ],
      canonicalPath: "/about",
    });

    applyBreadcrumbJsonLd("about", [
      { name: "Home", path: "/" },
      { name: "About", path: "/about" },
    ]);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--executive-navy-dark)] via-[var(--executive-navy)]/70 to-[var(--executive-navy-dark)] text-white">
      <Navigation />
      <main className="pt-28 pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          <section className="space-y-4">
            <p className="text-xs font-semibold tracking-[0.2em] text-white/50 uppercase text-center">
              ABOUT FORGEASH
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-center mb-6 text-transparent bg-gradient-to-r from-[var(--executive-amethyst)] via-[var(--executive-gold)] to-[var(--executive-sapphire)] bg-clip-text">
              Building digital systems that actually move the business needle
            </h1>
            <p className="text-lg md:text-xl text-center text-white/80 max-w-3xl mx-auto">
              ForgeAsh, based in Chennai, Tamil Nadu, India, partners with ambitious teams across India and beyond to design and build websites, AI systems, and SaaS products that are fast, clear, and relentlessly focused on business outcomes as a long-term web development and AI solutions partner.
            </p>
          </section>

          <section className="grid gap-10 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] items-start">
            <div className="space-y-6">
              <p className="text-xs font-semibold tracking-[0.2em] text-white/40 uppercase">FOUNDER</p>
              <h2 className="text-2xl md:text-3xl font-bold">Founder story</h2>
              <p className="text-white/80 text-base leading-relaxed">
                ForgeAsh was started by{" "}
                <a
                  href="https://www.linkedin.com/in/ashwin-kumar-612021124/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--executive-gold)] underline-offset-4 hover:underline"
                >
                  Ashwin
                </a>{" "}
                after years of building websites, SaaS products, and AI-powered tools for universities, clinics,
                service businesses, and founders. The pattern was always the same: teams didn&apos;t need more &quot;experiments&quot;
                —they needed clear systems that convert traffic, surface the right data, and remove manual busywork.
              </p>
              <p className="text-white/80 text-base leading-relaxed">
                From alumni platforms like ForgeCircle, to high-converting sites for dental practices, logistics providers, and education brands, the focus has always been the same: performance, clarity, and measurable impact on leads, revenue, or operations.
              </p>
            </div>
            <div className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl p-6 md:p-8 shadow-2xl">
              <h3 className="text-xl font-semibold mb-4">What this means for you</h3>
              <ul className="space-y-3 text-white/80 text-sm md:text-base">
                <li>• You work directly with a builder who understands both tech and business.</li>
                <li>• Every project starts from your outcomes, not from a stack preference.</li>
                <li>• We keep scope focused so you can launch, learn, and iterate quickly.</li>
              </ul>
            </div>
          </section>

          <section className="space-y-8">
            <div className="max-w-xl space-y-4">
              <p className="text-xs font-semibold tracking-[0.2em] text-white/40 uppercase">PROCESS</p>
              <h2 className="text-2xl md:text-3xl font-bold">How we work</h2>
              <p className="text-white/80 text-base leading-relaxed">
                A simple, transparent process that lets you see progress early and often.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-2xl bg-white/5 border border-white/15 p-5 shadow-lg shadow-black/30 hover:bg-white/8 transition-colors">
                <h3 className="font-semibold mb-2">1. Discovery Call</h3>
                <p className="text-sm text-white/80">
                  We clarify goals, constraints, and success metrics, and identify the fastest path to impact.
                </p>
              </div>
              <div className="rounded-2xl bg-white/5 border border-white/15 p-5 shadow-lg shadow-black/30 hover:bg-white/8 transition-colors">
                <h3 className="font-semibold mb-2">2. Proposal &amp; Plan</h3>
                <p className="text-sm text-white/80">
                  You receive a focused engagement plan, timeline, and investment range aligned with your priorities.
                </p>
              </div>
              <div className="rounded-2xl bg-white/5 border border-white/15 p-5 shadow-lg shadow-black/30 hover:bg-white/8 transition-colors">
                <h3 className="font-semibold mb-2">3. Build &amp; Iterate</h3>
                <p className="text-sm text-white/80">
                  We design, build, and iterate in tight feedback loops so you see working software early.
                </p>
              </div>
              <div className="rounded-2xl bg-white/5 border border-white/15 p-5 shadow-lg shadow-black/30 hover:bg-white/8 transition-colors">
                <h3 className="font-semibold mb-2">4. Launch</h3>
                <p className="text-sm text-white/80">
                  We handle the technical launch details so your new site or system goes live smoothly.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-8">
            <div className="max-w-xl space-y-4">
              <p className="text-xs font-semibold tracking-[0.2em] text-white/40 uppercase">WHO WE WORK WITH</p>
              <h2 className="text-2xl md:text-3xl font-bold">Who we&apos;re a good fit for</h2>
              <p className="text-white/80 text-base leading-relaxed">
                ForgeAsh works best with teams who care about long-term systems, not just one-off launches: founders,
                marketing leaders, and operators who want a technical partner that stays close to the numbers.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-3xl bg-gradient-to-r from-[var(--executive-navy)]/70 to-[var(--executive-navy-dark)]/70 border border-white/15 p-5 md:p-6 space-y-2">
                <h3 className="font-semibold">10+ projects</h3>
                <p className="text-sm text-white/80">
                  Websites, SaaS products, and AI implementations shipped for real businesses.
                </p>
              </div>
              <div className="rounded-3xl bg-gradient-to-r from-[var(--executive-sapphire)]/70 to-[var(--executive-amethyst)]/70 border border-white/15 p-5 md:p-6 space-y-2">
                <h3 className="font-semibold">Industries served</h3>
                <p className="text-sm text-white/80">
                  Education, healthcare, logistics, professional services, alumni networks, and more.
                </p>
              </div>
            </div>
          </section>

          <section
            id="approach"
            className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-2xl p-8 md:p-10 space-y-10"
          >
            <div className="space-y-4 text-left">
              <p className="text-xs font-semibold tracking-[0.2em] text-white/40 uppercase">OUR APPROACH</p>
              <h2 className="text-2xl md:text-3xl font-bold">Learn About Our Approach</h2>
              <p className="text-white/80 text-base leading-relaxed">
                At ForgeAsh Technologies, we don&apos;t sell one-size-fits-all templates. We build websites, dashboards,
                SaaS platforms, and AI-assisted workflows that are shaped around how your world actually operates—on
                the ground, with real teams and real constraints.
              </p>
              <p className="text-white/80 text-base leading-relaxed">
                We&apos;ve worked with universities, clinics, logistics and transport brands, professional services, and
                growing SMEs across Chennai, Tamil Nadu, India and beyond. The common thread: systems that respect
                existing processes while still pushing them forward.
              </p>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-xl md:text-2xl font-semibold">Industry Expertise</h3>
                <p className="text-white/80 text-base leading-relaxed">
                  Instead of forcing generic solutions, we start by understanding how work really happens today (not
                  just what&apos;s written in SOPs), who your stakeholders are and how decisions are made, and what
                  constraints you live with—compliance, operations, staffing, and budgets.
                </p>
                <p className="text-white/80 text-base leading-relaxed">
                  From there, we design websites, portals, dashboards, and AI-assisted tools that feel natural to your
                  team—because they&apos;re built around how you already operate, not how a template thinks you should.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <h4 className="text-lg font-semibold">1. Human-First, Workflow-First Design</h4>
                  <p className="text-white/80 text-sm leading-relaxed">
                    Our starting point is always people, not features. We talk to and observe the real users in your
                    ecosystem—leadership, operations, front-line staff, students, patients, customers, finance, IT—and
                    map what they do before, during, and after each key interaction.
                  </p>
                  <p className="text-white/80 text-sm leading-relaxed">
                    We design around journeys, not just pages or screens, remove unnecessary clicks and duplicate data
                    entry, and keep interfaces clear, calm, and focused on the task at hand.
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="text-lg font-semibold">2. One Source of Truth, Many Use Cases</h4>
                  <p className="text-white/80 text-sm leading-relaxed">
                    We follow a single source of truth mindset for data. Information that&apos;s captured once—whether it&apos;s a
                    profile, record, transaction, or status update—is reused everywhere it&apos;s needed, instead of being
                    scattered across forms, spreadsheets, and disconnected tools.
                  </p>
                  <p className="text-white/80 text-sm leading-relaxed">
                    We design data models that match your real-world objects (people, assets, cases, accounts, records,
                    locations, branches), reuse that data across modules, and turn isolated entries into continuous
                    timelines that tell a clear story over time.
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="text-lg font-semibold">3. Built for Teams, Roles, and Responsibility</h4>
                  <p className="text-white/80 text-sm leading-relaxed">
                    We design for teams, not just individuals. Different roles see different parts of the system based on
                    what they&apos;re responsible for and what they actually need to do.
                  </p>
                  <p className="text-white/80 text-sm leading-relaxed">
                    That means clear role definitions, interfaces that adapt to each role&apos;s daily reality, and
                    multi-tenant patterns where needed so multiple branches, locations, or clients can safely coexist in
                    the same system.
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="text-lg font-semibold">4. Human-First, AI-Assisted (Not a Black Box)</h4>
                  <p className="text-white/80 text-sm leading-relaxed">
                    We use automation and AI to remove friction, not remove control. We use rules for the obvious,
                    repeatable patterns; AI for the messy, ambiguous, or unstructured parts; and always keep humans in
                    charge of the final decision.
                  </p>
                  <p className="text-white/80 text-sm leading-relaxed">
                    Wherever it fits your context, we automate repetitive categorisation, routing, or flagging, provide
                    smart defaults and suggestions instead of hard locks, and keep every action explainable and
                    reversible.
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="text-lg font-semibold">5. Modern, Secure, Privacy-Conscious Architecture</h4>
                  <p className="text-white/80 text-sm leading-relaxed">
                    We take your data and your users seriously. Our systems are built on modern, secure infrastructure
                    with strong authentication, strict access controls, and role-aware and tenant-aware design from day
                    one.
                  </p>
                  <p className="text-white/80 text-sm leading-relaxed">
                    Where possible, we keep sensitive processing close to you—on your infrastructure or your devices—and
                    only connect to external services when there&apos;s a clear benefit and explicit consent.
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="text-lg font-semibold">6. Fast, Focused Workflows</h4>
                  <p className="text-white/80 text-sm leading-relaxed">
                    Small delays add up. We care about the details that save seconds hundreds of times a day: smart
                    defaults based on context and history, inline editing instead of clunky dialogs, shortcuts and
                    one-click actions, and clear visual hierarchy so the eye always knows where to look next.
                  </p>
                  <p className="text-white/80 text-sm leading-relaxed">
                    We measure not just &quot;does it work?&quot; but &quot;how quickly and calmly can someone get this done?&quot;
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold">7. Continuous, Evidence-Based Evolution</h4>
                <p className="text-white/80 text-sm leading-relaxed">
                  We don&apos;t treat launch day as the finish line. We start small and specific, ship the core flows that
                  matter most, validate with real usage, and refine in tight loops based on feedback and analytics.
                </p>
                <p className="text-white/80 text-sm leading-relaxed">
                  Only then do we scale what works and layer on more advanced functionality, automation, or AI—keeping
                  your systems maintainable, understandable, and adaptable as your industry and strategy evolve.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl md:text-2xl font-semibold">What It Feels Like To Work With Us</h3>
                <p className="text-white/80 text-base leading-relaxed">
                  Working with ForgeAsh feels structured, calm, and transparent. You always know what we&apos;re focusing
                  on, what&apos;s already shipped, and what&apos;s coming next—and why it matters to your goals.
                </p>
                <p className="text-white/80 text-base leading-relaxed">
                  Whether you&apos;re a Chennai-based organisation or a global team, we stay close to your people and
                  workflows, make decisions based on real usage and numbers, and keep the implementation grounded in your
                  constraints and opportunities.
                </p>
                <p className="text-white/80 text-base leading-relaxed">
                  You bring the domain expertise. We bring the product, UX, and engineering approach that turns it into
                  systems your teams will actually use.
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-2xl p-8 md:p-10 flex flex-col md:flex-row items-center md:items-center md:justify-between gap-6">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-white/40 uppercase mb-2">NEXT STEP</p>
              <h2 className="text-2xl md:text-3xl font-bold mb-3">Ready to discuss your project?</h2>
              <p className="text-white/80 text-base max-w-xl">
                Whether you&apos;re planning a new website, an AI workflow, or a SaaS MVP, we&apos;ll use the first call to understand your goals and share a clear next step.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <Button
                asChild
                size="lg"
                className="flex-1 bg-gradient-to-r from-[var(--executive-amethyst)] to-[var(--executive-sapphire)] text-white font-semibold rounded-xl border border-white/20 shadow-lg"
              >
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackEvent("cta_click", {
                      location: "about",
                      label: "book_strategy_call",
                    })
                  }
                  className="flex items-center justify-center"
                >
                  Book Strategy Call
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="flex-1 border-white/30 text-white rounded-xl"
              >
                <a
                  href="/contact"
                  onClick={() =>
                    trackEvent("cta_click", {
                      location: "about",
                      label: "go_to_contact",
                    })
                  }
                  className="flex items-center justify-center"
                >
                  Send a Message
                </a>
              </Button>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
