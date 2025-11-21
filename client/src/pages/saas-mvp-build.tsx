import { useEffect } from "react";
import { BrainCircuit, Workflow, LineChart, Sparkles, ArrowRight, Check, Users, Target, ChevronRight, ClipboardList, Rocket } from "lucide-react";
import { BOOKING_URL } from "@/config";
import { trackEvent } from "@/lib/analytics";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { EnquiryButton } from "@/components/EnquiryButton";
import { applySeo, applyBreadcrumbJsonLd } from "@/lib/seo";

// Simple floating wrapper for subtle motion (reuses keyframes from local <style>)
const Floating = ({ children }: { children: React.ReactNode }) => (
  <div className="animate-float-saas">{children}</div>
);

export default function SaasMvpBuildPage() {
  useEffect(() => {
    applySeo({
      title: "SaaS MVP Development in Chennai – Launch Revenue-Ready SaaS with ForgeAsh",
      description:
        "ForgeAsh offers SaaS MVP design and development from Chennai, India – helping founders and SMEs launch revenue-ready SaaS products in 8–12 weeks with clean UX and scalable foundations.",
      keywords: [
        "SaaS MVP development Chennai",
        "SaaS development company Chennai",
        "SaaS product development India",
        "build SaaS MVP in India",
      ],
      canonicalPath: "/services/saas-mvp-build",
    });
    applyBreadcrumbJsonLd("services-saas-mvp-build", [
      { name: "Home", path: "/" },
      { name: "Services", path: "/services" },
      { name: "SaaS MVP Build", path: "/services/saas-mvp-build" },
    ]);
  }, []);

  const handleCtaClick = (label: string) => {
    trackEvent("cta_click", { location: "saas_mvp_page", label });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white overflow-hidden">
      <style>{`
        @keyframes float-saas {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-14px); }
        }
        .animate-float-saas {
          animation: float-saas 8s ease-in-out infinite;
        }
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

      <main className="relative pt-4">
        {/* Background glows */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        </div>

        {/* Hero */}
        <section id="overview" className="relative px-4 sm:px-6 lg:px-8 pt-16 pb-24">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 mb-6 text-xs sm:text-sm">
                <Sparkles className="h-4 w-4 text-purple-300" />
                <span>For founders & SMEs launching new products</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-5">
                Launch a <span className="gradient-text">Revenue-Ready SaaS MVP</span> in 8–12 Weeks
              </h1>

              <p className="text-lg text-slate-300 mb-6 max-w-xl">
                We partner with founders and growing businesses to design, build, and launch focused SaaS products with clean UX,
                robust foundations, and everything you need to start charging real customers—especially if you're looking for a SaaS development company in Chennai that can work with clients across India.
              </p>

              <ul className="space-y-2 text-sm sm:text-base text-slate-200 mb-8">
                <li>• Core features: auth, dashboards, user roles, basic billing readiness</li>
                <li>• Architecture that can scale from MVP to v1 and beyond</li>
                <li>• Tight feedback loops so you can ship, learn, and iterate</li>
                <li>• Typical timeline: 8–12 weeks for a validated MVP</li>
                <li>• Typical starting investment: fixed-scope SaaS MVP engagements</li>
              </ul>

              <div className="flex flex-wrap gap-4 items-center">
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleCtaClick("book_strategy_call_hero")}
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 font-semibold text-base hover:from-purple-700 hover:to-blue-700 transition-all shadow-2xl hover:shadow-purple-500/50 hover:scale-105"
                >
                  Book SaaS MVP Strategy Call
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#included"
                  onClick={() => handleCtaClick("view_sample_scope")}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border-2 border-white/25 text-base text-slate-200 hover:bg-white/10 transition-all"
                >
                  Download Sample MVP Scope
                  <ClipboardList className="h-5 w-5" />
                </a>
                <EnquiryButton
                  serviceId="saas_mvp_build"
                  serviceLabel="SaaS MVP Build"
                  sourcePage="/services/saas-mvp-build"
                  size="md"
                  variant="secondary"
                />
              </div>

              <p className="mt-4 text-xs text-slate-400">
                No obligation. We'll map a realistic MVP and next steps. You decide if you want to move forward.
              </p>
            </div>

            {/* Right side visuals */}
            <div className="relative">
              <Floating>
                <div className="glass-card glow-effect rounded-3xl p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                      <BrainCircuit className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400">Sample SaaS MVP Dashboard</p>
                      <p className="font-semibold">Founders see this on day one</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div className="bg-gradient-to-br from-green-500/15 to-emerald-500/20 rounded-xl p-4 border border-green-500/30">
                      <p className="text-xs text-slate-300 mb-1">Time to first usable version</p>
                      <p className="text-2xl font-bold text-green-400">6–8 weeks</p>
                      <p className="text-[11px] text-slate-400 mt-1">From idea to internal pilot</p>
                    </div>
                    <div className="bg-gradient-to-br from-blue-500/15 to-cyan-500/20 rounded-xl p-4 border border-blue-500/30">
                      <p className="text-xs text-slate-300 mb-1">Core modules shipped</p>
                      <p className="text-2xl font-bold text-blue-400">3–5</p>
                      <p className="text-[11px] text-slate-400 mt-1">Laser-focused on MVP value</p>
                    </div>
                  </div>

                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <div className="flex items-center justify-between mb-2 text-xs text-slate-300">
                      <span>Typical MVP scope includes</span>
                      <span className="px-2 py-1 rounded-full bg-purple-500/20 text-purple-200 border border-purple-500/40">
                        Auth • Roles • Dashboard
                      </span>
                    </div>
                    <ul className="space-y-1 text-xs text-slate-200">
                      <li>• Authentication & onboarding</li>
                      <li>• Owner/admin/user roles & permissions</li>
                      <li>• Core dashboard + 2–3 primary flows</li>
                      <li>• Settings & basic admin tools</li>
                    </ul>
                  </div>
                </div>
              </Floating>
            </div>
          </div>
        </section>

        {/* Who this is for */}
        <section className="relative px-4 sm:px-6 lg:px-8 pb-20">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-[3fr_2fr] gap-8 items-start">
            <div className="glass-card rounded-3xl p-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Is This SaaS MVP Build For You?</h2>
              <p className="text-sm sm:text-base text-slate-200 mb-4">
                This engagement is designed for founders and teams who want to launch something real, quicklywithout burning a year on a bloated v1.
              </p>
              <ul className="space-y-2 text-sm sm:text-base text-slate-200">
                <li>• First-time founders who want to launch quickly without burning cash on a huge build</li>
                <li>• SMEs turning internal tools or spreadsheets into a real product</li>
                <li>• Agencies or consultants converting their services into a SaaS platform</li>
                <li>• Existing businesses spinning off a new product or vertical</li>
              </ul>
            </div>
            <div className="glass-card rounded-3xl p-8">
              <h3 className="text-lg font-semibold mb-3">You're in the right place if…</h3>
              <ul className="space-y-2 text-sm text-slate-200">
                <li>• You have a solid idea and a rough workflow in mind</li>
                <li>• You don't want to waste 6–12 months building the wrong thing</li>
                <li>• You want something you can actually demo, sell, and charge for</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Problem → Solution */}
        <section className="relative px-4 sm:px-6 lg:px-8 pb-24">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
            <div className="glass-card rounded-3xl p-8 border-red-500/40">
              <div className="flex items-center gap-3 mb-4">
                <LineChart className="h-6 w-6 text-red-400" />
                <h2 className="text-2xl font-bold text-red-200">The Problem With Most SaaS Builds</h2>
              </div>
              <ul className="space-y-2 text-sm sm:text-base text-slate-200">
                <li>• Endless "feature wishlist" that never ships</li>
                <li>• Over-engineered architecture from day one</li>
                <li>• No real users by the time the budget runs out</li>
                <li>• Clunky UX that confuses prospects and buyers</li>
                <li>• Poor foundations: no clear roles, no analytics, messy code</li>
              </ul>
            </div>
            <div className="glass-card glow-effect rounded-3xl p-8 border-green-500/40">
              <div className="flex items-center gap-3 mb-4">
                <Workflow className="h-6 w-6 text-green-400" />
                <h2 className="text-2xl font-bold text-green-200">The SaaS MVP Build Approach</h2>
              </div>
              <ul className="space-y-2 text-sm sm:text-base text-slate-200">
                <li>• Laser-focused scope: only what's needed to prove value and charge</li>
                <li>• Clean UX & onboarding so users understand the product in minutes</li>
                <li>• Solid core: auth, roles, dashboards, basic billing readiness built-in</li>
                <li>• Tight loops: ship fast, gather feedback, iterate intentionally</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Use cases */}
        <section id="use-cases" className="relative px-4 sm:px-6 lg:px-8 pb-24">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 flex items-center gap-2">
              <Target className="h-7 w-7 text-purple-400" />
              <span>SaaS MVP Use Cases We Build</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-300 max-w-3xl mb-10">
              Whether you're productizing an internal tool or launching a brand new SaaS, we help you design and ship a focused MVP you can put in front of real customers.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Internal Tool → SaaS Product */}
              <div className="glass-card rounded-2xl p-6">
                <h3 className="text-xl font-semibold mb-2">Internal Tool → SaaS Product</h3>
                <p className="text-sm text-slate-300 mb-2">Turn an internal spreadsheet or workflow into a revenue-generating product:</p>
                <ul className="space-y-1 text-sm text-slate-200">
                  <li>• Customer or partner portals</li>
                  <li>• Ops dashboards (logistics, inventory, workflow management)</li>
                  <li>• Reporting tools wrapped as SaaS</li>
                </ul>
              </div>

              {/* Niche Vertical SaaS */}
              <div className="glass-card rounded-2xl p-6">
                <h3 className="text-xl font-semibold mb-2">Niche Vertical SaaS</h3>
                <p className="text-sm text-slate-300 mb-2">Specialized products in focused markets:</p>
                <ul className="space-y-1 text-sm text-slate-200">
                  <li>• Clinics: appointments, EMR-lite, billing overview</li>
                  <li>• Coaching/education: student dashboards, analytics</li>
                  <li>• Logistics: shipment tracking, route overview</li>
                  <li>• Agencies: client portals, reporting, approvals</li>
                </ul>
              </div>

              {/* Membership / Subscription Platforms */}
              <div className="glass-card rounded-2xl p-6">
                <h3 className="text-xl font-semibold mb-2">Membership & Subscription Platforms</h3>
                <ul className="space-y-1 text-sm text-slate-200">
                  <li>• Course/membership dashboards</li>
                  <li>• Community portals</li>
                  <li>• Content libraries with paid tiers</li>
                  <li>• Client access areas with different permissions</li>
                </ul>
              </div>

              {/* Analytics / Dashboard Products */}
              <div className="glass-card rounded-2xl p-6">
                <h3 className="text-xl font-semibold mb-2">Analytics & Dashboard Products</h3>
                <p className="text-sm text-slate-300 mb-2">Connect existing data sources and offer:</p>
                <ul className="space-y-1 text-sm text-slate-200">
                  <li>• KPI dashboards</li>
                  <li>• Revenue/expense overview</li>
                  <li>• Performance analytics</li>
                  <li>• Alerts & basic recommendations</li>
                </ul>
              </div>

              {/* Marketplace MVPs */}
              <div className="glass-card rounded-2xl p-6">
                <h3 className="text-xl font-semibold mb-2">Marketplace / Multi-Party MVPs</h3>
                <ul className="space-y-1 text-sm text-slate-200">
                  <li>• Simple two-sided marketplaces</li>
                  <li>• Listings, inquiries, and bookings</li>
                  <li>• Basic payment readiness</li>
                  <li>• Admin controls for moderation</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* What's included */}
        <section id="included" className="relative px-4 sm:px-6 lg:px-8 pb-24">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 flex items-center gap-2">
              <ClipboardList className="h-7 w-7 text-purple-400" />
              <span>What's Included in a SaaS MVP Build</span>
            </h2>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-6 text-sm sm:text-base text-slate-200">
                <div className="glass-card rounded-2xl p-6">
                  <h3 className="text-lg font-semibold mb-2">Product Strategy & Scope Definition</h3>
                  <ul className="space-y-1">
                    <li>• Clarify the core user journey (first 5–10 key actions)</li>
                    <li>• Define MVP feature set vs later roadmap</li>
                    <li>• Map user roles: admin, owner, team member, customer</li>
                    <li>• Prioritize activation so users see value fast</li>
                  </ul>
                </div>

                <div className="glass-card rounded-2xl p-6">
                  <h3 className="text-lg font-semibold mb-2">UX & UI Design</h3>
                  <ul className="space-y-1">
                    <li>• Clickable prototype of core flows</li>
                    <li>• Clean, responsive layout for desktop + mobile</li>
                    <li>• Simple onboarding (sign-up → guided first steps)</li>
                    <li>• Thoughtful empty states, error states, and messages</li>
                  </ul>
                </div>

                <div className="glass-card rounded-2xl p-6">
                  <h3 className="text-lg font-semibold mb-2">Core SaaS Foundations</h3>
                  <ul className="space-y-1">
                    <li>• Authentication & onboarding (email + password, reset)</li>
                    <li>• Roles & permissions (owner/admin/user separation)</li>
                    <li>• Core dashboard with key metrics/actions</li>
                    <li>• Settings area for profile, team, and basic config</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6 text-sm sm:text-base text-slate-200">
                <div className="glass-card rounded-2xl p-6">
                  <h3 className="text-lg font-semibold mb-2">Data Model & Architecture</h3>
                  <ul className="space-y-1">
                    <li>• Schema design for main entities (users, accounts, projects, etc.)</li>
                    <li>• Structure that can grow from MVP to v1 without rewrites</li>
                    <li>• API structure that can later power mobile apps and integrations</li>
                  </ul>
                </div>

                <div className="glass-card rounded-2xl p-6">
                  <h3 className="text-lg font-semibold mb-2">Billing Readiness</h3>
                  <ul className="space-y-1">
                    <li>• Plan/tier & feature-flag support in the data model</li>
                    <li>• Trial vs paid status tracking</li>
                    <li>• Usage metrics hooks (so you can price by usage later)</li>
                    <li>• UI support for upgrade prompts and plan limits</li>
                  </ul>
                </div>

                <div className="glass-card rounded-2xl p-6">
                  <h3 className="text-lg font-semibold mb-2">Admin, Analytics & Feedback</h3>
                  <ul className="space-y-1">
                    <li>• Admin dashboard for users/accounts and usage</li>
                    <li>• Manual overrides (suspend/reactivate users, etc.)</li>
                    <li>• Key event tracking (logins, activations, drop-offs)</li>
                    <li>• Built-in "Send feedback" / "Report an issue" hooks</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Workflow */}
        <section id="workflow" className="relative px-4 sm:px-6 lg:px-8 pb-24">
          <div className="max-w-6xl mx-auto glass-card rounded-3xl p-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 flex items-center gap-2">
              <Workflow className="h-7 w-7 text-purple-400" />
              <span>From Idea to Live MVP – How We Work</span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-sm text-slate-200">
              <div>
                <h3 className="font-semibold mb-2">Weeks 1–2: Strategy & UX</h3>
                <ul className="space-y-1">
                  <li>• MVP planning workshop</li>
                  <li>• Use-case mapping & user roles</li>
                  <li>• Wireframes & click-through prototype</li>
                  <li>• Finalized MVP scope & success criteria</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Weeks 3–6: Build Core Product</h3>
                <ul className="space-y-1">
                  <li>• Implement auth, roles, core entities</li>
                  <li>• Primary dashboards and key flows</li>
                  <li>• Settings and basics of admin panel</li>
                  <li>• Early test deploy for internal usage</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Weeks 7–8: Polish & Prepare</h3>
                <ul className="space-y-1">
                  <li>• UX refinements & UI polish</li>
                  <li>• Basic analytics & tracking added</li>
                  <li>• Bug fixing & performance checks</li>
                  <li>• Documentation + quickstart guide</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Weeks 9–12: Live Iteration (Optional)</h3>
                <ul className="space-y-1">
                  <li>• Onboard first real users</li>
                  <li>• Collect feedback inside the product</li>
                  <li>• Implement 1–2 high-impact improvements</li>
                  <li>• Prepare v1 roadmap and next steps</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing & engagement models */}
        <section id="pricing" className="relative px-4 sm:px-6 lg:px-8 pb-24">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 flex items-center gap-2">
              <LineChart className="h-7 w-7 text-purple-400" />
              <span>How We Structure SaaS MVP Engagements</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-300 max-w-3xl mb-10">
              We keep pricing simple and transparent. You get a clear scope, timeline, and ownership of your product.
            </p>

            <div className="grid md:grid-cols-3 gap-6 text-sm text-slate-200">
              <div className="glass-card rounded-2xl p-6">
                <h3 className="text-xl font-semibold mb-2">Fixed-Scope MVP</h3>
                <p className="text-slate-300 mb-3">Best for founders with a clear idea and defined scope.</p>
                <ul className="space-y-1">
                  <li>• Fixed set of features agreed at the start</li>
                  <li>• Clear timeline (usually 8–12 weeks)</li>
                  <li>• Ideal when you want predictability and a launch deadline</li>
                </ul>
              </div>
              <div className="glass-card glow-effect rounded-2xl p-6 border border-purple-500/50">
                <h3 className="text-xl font-semibold mb-2">Guided Build with Iteration</h3>
                <p className="text-slate-300 mb-3">Best for early-stage ideas that might evolve.</p>
                <ul className="space-y-1">
                  <li>• Core MVP defined early</li>
                  <li>• Space for 1–2 iteration cycles based on early user feedback</li>
                  <li>• Flexible scope within a fixed time window</li>
                </ul>
              </div>
              <div className="glass-card rounded-2xl p-6">
                <h3 className="text-xl font-semibold mb-2">Post-MVP Support</h3>
                <p className="text-slate-300 mb-3">Optional retainer to keep improving after launch.</p>
                <ul className="space-y-1">
                  <li>• Ongoing improvements & feature tweaks</li>
                  <li>• Bug fixes and maintenance</li>
                  <li>• Technical guidance for your product team</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Mini case studies */}
        <section id="case-studies" className="relative px-4 sm:px-6 lg:px-8 pb-24">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 flex items-center gap-2">
              <Sparkles className="h-7 w-7 text-purple-400" />
              <span>Sample SaaS MVP Outcomes</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-300 max-w-3xl mb-10">
              These are modeled examples based on typical SaaS MVP patterns. Exact results depend on your market, product, and execution.
            </p>

            <div className="grid md:grid-cols-3 gap-6 text-sm text-slate-200">
              <div className="glass-card rounded-2xl p-6">
                <p className="text-xs uppercase tracking-[0.18em] text-slate-400 mb-2">Example 1 · Clinic SaaS</p>
                <h3 className="text-lg font-semibold mb-2">Niche Clinic SaaS</h3>
                <p className="mb-2">MVP: appointment scheduling, basic EMR-like notes, revenue dashboard.</p>
                <p className="text-slate-300">Outcome: live with 3 pilot clinics in ~10 weeks, giving the founder real usage data and case studies.</p>
              </div>
              <div className="glass-card rounded-2xl p-6">
                <p className="text-xs uppercase tracking-[0.18em] text-slate-400 mb-2">Example 2 · Coaching Platform</p>
                <h3 className="text-lg font-semibold mb-2">Training & Coaching Platform</h3>
                <p className="mb-2">MVP: student dashboards, content modules, assignment tracking.</p>
                <p className="text-slate-300">Outcome: first paying cohort onboarded using the platform instead of scattered tools.</p>
              </div>
              <div className="glass-card rounded-2xl p-6">
                <p className="text-xs uppercase tracking-[0.18em] text-slate-400 mb-2">Example 3 · Logistics SaaS</p>
                <h3 className="text-lg font-semibold mb-2">Logistics Dashboard SaaS</h3>
                <p className="mb-2">MVP: shipment status board, driver app integration, basic reporting.</p>
                <p className="text-slate-300">Outcome: team able to demo to prospects and onboard first paying customers.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why ForgeAsh */}
        <section className="relative px-4 sm:px-6 lg:px-8 pb-24">
          <div className="max-w-6xl mx-auto glass-card rounded-3xl p-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 flex items-center gap-2">
              <Users className="h-7 w-7 text-purple-400" />
              <span>Why Work With ForgeAsh for SaaS MVP</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-300 max-w-3xl mb-6">
              We've built complex web applications with multi-role access, dashboards, and workflows—including alumni platforms and internal tools that behave like SaaS products. As a Chennai-based SaaS MVP development partner in India, we care about long-term product health just as much as launch speed.
            </p>
            <ul className="grid md:grid-cols-2 gap-4 text-sm text-slate-200">
              <li>• Experience designing roles, permissions, dashboards, and operations workflows</li>
              <li>• Focus on clean UX and performance, not just "code that works"</li>
              <li>• India-based boutique studio serving global clients with high-care engagements</li>
              <li>• We ship, we don't overcomplicate the stack or the scope</li>
              <li>• We think about v1 and scale from day one</li>
              <li>• We&apos;re honest about what fits in an MVP vs later phases</li>
            </ul>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative px-4 sm:px-6 lg:px-8 pb-24">
          <div className="max-w-4xl mx-auto">
            <div className="relative overflow-hidden glass-card rounded-3xl p-10 text-center border border-purple-500/40">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/15 via-blue-500/10 to-purple-500/15 pointer-events-none" />
              <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Launch Your SaaS MVP?</h2>
                <p className="text-sm sm:text-base text-slate-200 max-w-2xl mx-auto mb-8">
                  Share your idea, and we&apos;ll map an MVP that can be launched in weeks, not months.
                  You get clarity on scope, timelines, and what it takes to ship.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                  <a
                    href={BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => handleCtaClick("book_strategy_call_final")}
                    className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 font-semibold text-base hover:from-purple-700 hover:to-blue-700 transition-all shadow-2xl hover:shadow-purple-500/50 hover:scale-105"
                  >
                    Book SaaS MVP Strategy Call
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a
                    href="/contact"
                    onClick={() => handleCtaClick("send_saas_idea")}
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl border-2 border-white/25 text-base text-slate-200 hover:bg-white/10 transition-all"
                  >
                    Send My SaaS Idea for Review
                  </a>
                </div>
                <p className="text-xs text-slate-400">
                  No obligation, just clarity. You keep all ideas and materials. We only propose work we can confidently deliver.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
