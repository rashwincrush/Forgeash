import { useEffect } from "react";
import { Workflow, LineChart, Sparkles, ArrowRight, Check, Target, BarChart3, Bell, Database } from "lucide-react";
import { BOOKING_URL } from "@/config";
import { trackEvent } from "@/lib/analytics";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { EnquiryButton } from "@/components/EnquiryButton";
import { applySeo, applyBreadcrumbJsonLd } from "@/lib/seo";

export default function DataDashboardsPage() {
  useEffect(() => {
    applySeo({
      title: "Data Dashboards & Automation in Chennai – ForgeAsh",
      description:
        "ForgeAsh designs and builds custom data dashboards, BI reports and automation for decision-makers in Chennai, Tamil Nadu and teams across India, giving leaders a single real-time view of the business.",
      keywords: [
        "data dashboards Chennai",
        "dashboard development company in Chennai",
        "business intelligence Chennai",
        "reporting automation India",
      ],
      canonicalPath: "/services/data-dashboards",
    });
    applyBreadcrumbJsonLd("services-data-dashboards", [
      { name: "Home", path: "/" },
      { name: "Services", path: "/services" },
      { name: "Data Dashboards & Automation", path: "/services/data-dashboards" },
    ]);
  }, []);

  const handleCtaClick = (label: string) => {
    trackEvent("cta_click", { location: "data_dashboards_page", label });
  };

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

      {/* Background glows */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <main className="relative px-4 sm:px-6 lg:px-8 pt-24 pb-24">
        <div className="max-w-7xl mx-auto">
          {/* Hero */}
          <section id="overview" className="grid lg:grid-cols-2 gap-14 items-center mb-20">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 mb-6 text-xs sm:text-sm">
                <Sparkles className="h-4 w-4 text-purple-300" />
                <span>For decision-makers & operations-heavy teams</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-5">
                Your Entire Business in One Clear, <span className="gradient-text">Real-Time Dashboard</span>
              </h1>

              <p className="text-lg text-slate-300 mb-6 max-w-xl">
                We build custom dashboards and automated reporting systems that give leadership and operations teams a single, reliable view of performancefor decision-makers in Chennai, Tamil Nadu, India and teams across the country.
                Move faster, make better decisions, and leave spreadsheet chaos behind.
              </p>

              <ul className="space-y-2 text-sm sm:text-base text-slate-200 mb-8">
                <li>• Executive dashboards tailored to your KPIs</li>
                <li>• Operations dashboards that reveal bottlenecks instantly</li>
                <li>• Integrations with your existing systems</li>
                <li>• Automated reporting that saves hours every week</li>
                <li>• Typical timeline: 3–8 weeks depending on data sources</li>
                <li>• Typical starting investment: scoped per dashboard suite</li>
              </ul>

              <div className="flex flex-wrap gap-4 items-center">
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleCtaClick("book_strategy_call_hero")}
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 font-semibold text-base hover:from-purple-700 hover:to-blue-700 transition-all shadow-2xl hover:shadow-purple-500/50 hover:scale-105"
                >
                  Book Dashboard Strategy Call
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#dashboard-types"
                  onClick={() => handleCtaClick("view_sample_dashboards")}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border-2 border-white/25 text-base text-slate-200 hover:bg-white/10 transition-all"
                >
                  View Sample Dashboards
                  <BarChart3 className="h-5 w-5" />
                </a>
                <EnquiryButton
                  serviceId="data_dashboards"
                  serviceLabel="Data Dashboards & Automation"
                  sourcePage="/services/data-dashboards"
                  size="md"
                  variant="secondary"
                />
              </div>
            </div>

            {/* Hero visual */}
            <div className="glass-card glow-effect rounded-3xl p-6 md:p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-xs text-slate-400">Executive Snapshot</p>
                  <p className="text-lg font-semibold">Today&apos;s Performance</p>
                </div>
                <LineChart className="h-8 w-8 text-purple-300" />
              </div>
              <div className="grid grid-cols-3 gap-4 mb-6 text-sm">
                <div className="bg-green-500/15 rounded-xl p-3 border border-green-500/30">
                  <p className="text-xs text-slate-300 mb-1">Revenue (MTD)</p>
                  <p className="text-xl font-bold text-green-400">+18%</p>
                </div>
                <div className="bg-blue-500/15 rounded-xl p-3 border border-blue-500/30">
                  <p className="text-xs text-slate-300 mb-1">On-time Delivery</p>
                  <p className="text-xl font-bold text-blue-300">96%</p>
                </div>
                <div className="bg-amber-500/15 rounded-xl p-3 border border-amber-500/30">
                  <p className="text-xs text-slate-300 mb-1">SLA Breaches</p>
                  <p className="text-xl font-bold text-amber-300">↓ 35%</p>
                </div>
              </div>
              <div className="bg-white/5 rounded-xl p-4 border border-white/10 text-xs text-slate-200">
                <p className="mb-1">Your team sees:</p>
                <ul className="space-y-1">
                  <li>• Revenue, operations, and customer metrics on a single screen</li>
                  <li>• Clear red/green indicators for KPIs that need attention</li>
                  <li>• Alerts when metrics cross agreed thresholds</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Who this is for */}
          <section className="mb-20">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-[3fr_2fr] gap-8 items-start">
              <div className="glass-card rounded-3xl p-8">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">Perfect For Teams Who Need Clarity, Speed, and Control</h2>
                <p className="text-sm sm:text-base text-slate-200 mb-4">
                  This offering is built for leadership and operations teams who are done with spreadsheet chaos and want a clear view of the business.
                </p>
                <ul className="space-y-2 text-sm sm:text-base text-slate-200">
                  <li>• Founders & CEOs who need a single source of truth</li>
                  <li>• Operations teams juggling too many trackers, spreadsheets, and reports</li>
                  <li>• Sales & marketing leaders who need real-time performance data</li>
                  <li>• Finance teams tired of manual report prep</li>
                  <li>• Institutions (schools, clinics, logistics firms) with high operational volume</li>
                </ul>
              </div>
              <div className="glass-card rounded-3xl p-8">
                <h3 className="text-lg font-semibold mb-3">You&apos;re in the right place if…</h3>
                <ul className="space-y-2 text-sm text-slate-200">
                  <li>• You want fewer spreadsheets</li>
                  <li>• You want faster decisions</li>
                  <li>• You want dashboards your team actually uses</li>
                  <li>• You want visibility without manual effort</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Problem → Solution */}
          <section className="mb-20">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
              <div className="glass-card rounded-3xl p-8 border-red-500/40">
                <h2 className="text-2xl font-bold mb-3 text-red-200">The Real Problem Most Businesses Face</h2>
                <ul className="space-y-2 text-sm sm:text-base text-slate-200">
                  <li>• Data scattered across multiple tools</li>
                  <li>• Weekly or monthly reports manually stitched together</li>
                  <li>• No real-time visibility into performance</li>
                  <li>• Leaders making decisions too late</li>
                  <li>• Teams drowning in Excel and multiple trackers</li>
                  <li>• No consistent KPI definitions</li>
                </ul>
              </div>
              <div className="glass-card rounded-3xl p-8 glow-effect border-green-500/40">
                <h2 className="text-2xl font-bold mb-3 text-green-200">What We Deliver Instead</h2>
                <ul className="space-y-2 text-sm sm:text-base text-slate-200">
                  <li>• Centralized dashboards, live and always accurate</li>
                  <li>• Automated reporting (daily/weekly/monthly)</li>
                  <li>• Custom KPIs built for your business</li>
                  <li>• Zero manual effort for your team</li>
                  <li>• A system that works even when workloads explode</li>
                  <li>• A clear view of operations, finances, customers, and performance</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Dashboard types */}
          <section id="dashboard-types" className="mb-20">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 flex items-center gap-2">
                <Target className="h-7 w-7 text-purple-400" />
                <span>Dashboard Types We Build</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-300 max-w-3xl mb-10">
                From executive snapshots to deep operations boards, we design dashboards that match how your team thinks and worksideal if you&apos;re looking for a dashboard development company in Chennai to deliver business intelligence dashboards in Chennai and beyond.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-sm text-slate-200">
                <div className="glass-card rounded-2xl p-6">
                  <h3 className="text-xl font-semibold mb-2">Executive Dashboards</h3>
                  <ul className="space-y-1">
                    <li>• Revenue & growth</li>
                    <li>• Top KPIs</li>
                    <li>• Priority alerts</li>
                    <li>• Performance vs targets</li>
                    <li>• Forecasted trends</li>
                  </ul>
                </div>
                <div className="glass-card rounded-2xl p-6">
                  <h3 className="text-xl font-semibold mb-2">Operations Dashboards</h3>
                  <ul className="space-y-1">
                    <li>• Workflow status & WIP</li>
                    <li>• Bottleneck identification</li>
                    <li>• SLA tracking</li>
                    <li>• Process throughput</li>
                    <li>• Team-level performance</li>
                  </ul>
                </div>
                <div className="glass-card rounded-2xl p-6">
                  <h3 className="text-xl font-semibold mb-2">Sales & Marketing Dashboards</h3>
                  <ul className="space-y-1">
                    <li>• Sales pipeline</li>
                    <li>• Lead sources</li>
                    <li>• Campaign performance</li>
                    <li>• Conversion rates</li>
                    <li>• Rep performance</li>
                  </ul>
                </div>
                <div className="glass-card rounded-2xl p-6">
                  <h3 className="text-xl font-semibold mb-2">Finance & Accounting Dashboards</h3>
                  <ul className="space-y-1">
                    <li>• Expense tracking</li>
                    <li>• Cash flow overview</li>
                    <li>• P&L summaries</li>
                    <li>• Vendor analytics</li>
                    <li>• Outstanding payments</li>
                  </ul>
                </div>
                <div className="glass-card rounded-2xl p-6">
                  <h3 className="text-xl font-semibold mb-2">Logistics & Supply Chain Dashboards</h3>
                  <ul className="space-y-1">
                    <li>• Shipment statuses</li>
                    <li>• Route analytics</li>
                    <li>• Delay predictions</li>
                    <li>• Fulfillment performance</li>
                    <li>• Vendor SLAs</li>
                  </ul>
                </div>
                <div className="glass-card rounded-2xl p-6">
                  <h3 className="text-xl font-semibold mb-2">Education / Institution Dashboards</h3>
                  <ul className="space-y-1">
                    <li>• Student performance analytics</li>
                    <li>• Attendance & engagement metrics</li>
                    <li>• Faculty reporting</li>
                    <li>• Placement / alumni analytics</li>
                    <li>• Fee collection dashboards</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Automations */}
          <section className="mb-20">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 flex items-center gap-2">
                <Workflow className="h-7 w-7 text-purple-400" />
                <span>Automations You Can Add</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-300 max-w-3xl mb-10">
                Dashboards are powerful. Dashboards + automation are transformative. These can be sold separately or as add-ons.
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-sm text-slate-200">
                <div className="glass-card rounded-2xl p-6">
                  <h3 className="text-lg font-semibold mb-2">Reporting Automation</h3>
                  <ul className="space-y-1">
                    <li>• Daily/weekly/monthly auto-generated reports</li>
                    <li>• PDFs or dashboards auto-sent to decision makers</li>
                    <li>• Automated alerts for critical KPI drops/spikes</li>
                  </ul>
                </div>
                <div className="glass-card rounded-2xl p-6">
                  <h3 className="text-lg font-semibold mb-2">Data Preparation Automation</h3>
                  <ul className="space-y-1">
                    <li>• Auto-cleaning messy spreadsheets</li>
                    <li>• Harmonizing inconsistent data across sources</li>
                    <li>• Normalizing formats and auto-tagging</li>
                  </ul>
                </div>
                <div className="glass-card rounded-2xl p-6">
                  <h3 className="text-lg font-semibold mb-2">Workflow Automation</h3>
                  <ul className="space-y-1">
                    <li>• Trigger workflows when metrics hit thresholds</li>
                    <li>• Auto-update records across systems</li>
                    <li>• Notify teams of anomalies and follow-up actions</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* What&apos;s included */}
          <section className="mb-20">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 flex items-center gap-2">
                <Database className="h-7 w-7 text-purple-400" />
                <span>What&apos;s Included in Every Dashboard Engagement</span>
              </h2>
              <div className="grid lg:grid-cols-3 gap-6 text-sm text-slate-200">
                <div className="space-y-4">
                  <div className="glass-card rounded-2xl p-6">
                    <h3 className="text-lg font-semibold mb-2">KPI Mapping Session</h3>
                    <ul className="space-y-1">
                      <li>• Define the 5–20 metrics that matter most</li>
                      <li>• Identify data sources</li>
                      <li>• Create a unified KPI dictionary</li>
                    </ul>
                  </div>
                  <div className="glass-card rounded-2xl p-6">
                    <h3 className="text-lg font-semibold mb-2">Data Architecture</h3>
                    <ul className="space-y-1">
                      <li>• Design clean data models</li>
                      <li>• Map relationships & transformations</li>
                      <li>• Set up consistent refresh cycles</li>
                    </ul>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="glass-card rounded-2xl p-6">
                    <h3 className="text-lg font-semibold mb-2">Dashboard UX & UI</h3>
                    <ul className="space-y-1">
                      <li>• Minimal, executive-friendly UX</li>
                      <li>• Mobile-responsive views</li>
                      <li>• Filters, drill-downs, and highlights</li>
                      <li>• Clarity-focused layouts</li>
                    </ul>
                  </div>
                  <div className="glass-card rounded-2xl p-6">
                    <h3 className="text-lg font-semibold mb-2">Integrations</h3>
                    <ul className="space-y-1">
                      <li>• CRM & sales tools</li>
                      <li>• Spreadsheets / CSV systems</li>
                      <li>• ERP, inventory, or POS</li>
                      <li>• Finance tools & HR/attendance systems</li>
                      <li>• Cloud apps & API-based systems</li>
                    </ul>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="glass-card rounded-2xl p-6">
                    <h3 className="text-lg font-semibold mb-2">Automated Reporting</h3>
                    <ul className="space-y-1">
                      <li>• Scheduled email reports</li>
                      <li>• Visual summaries & action alerts</li>
                      <li>• Weekly KPI rollups</li>
                      <li>• Insights pulled directly from dashboards</li>
                    </ul>
                  </div>
                  <div className="glass-card rounded-2xl p-6">
                    <h3 className="text-lg font-semibold mb-2">Training & Handover</h3>
                    <ul className="space-y-1">
                      <li>• 1–3 short training sessions</li>
                      <li>• Easy-to-use documentation</li>
                      <li>• Team onboarding (optional)</li>
                      <li>• 30–60 days of support</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Example flows */}
          <section className="mb-20">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 flex items-center gap-2">
                <BarChart3 className="h-7 w-7 text-purple-400" />
                <span>Example Dashboard Flows</span>
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-sm text-slate-200">
                <div className="glass-card rounded-2xl p-6">
                  <h3 className="text-lg font-semibold mb-2">CEO Snapshot</h3>
                  <ul className="space-y-1">
                    <li>• Revenue & expenses</li>
                    <li>• Top KPIs</li>
                    <li>• Red/Green indicators</li>
                    <li>• Forecast for next 30/90 days</li>
                  </ul>
                </div>
                <div className="glass-card rounded-2xl p-6">
                  <h3 className="text-lg font-semibold mb-2">Operations Command Center</h3>
                  <ul className="space-y-1">
                    <li>• Task queues & status overview</li>
                    <li>• SLA breaches & exceptions</li>
                    <li>• Team workload</li>
                    <li>• Process bottlenecks</li>
                  </ul>
                </div>
                <div className="glass-card rounded-2xl p-6">
                  <h3 className="text-lg font-semibold mb-2">Marketing Performance Board</h3>
                  <ul className="space-y-1">
                    <li>• Lead sources & CAC estimates</li>
                    <li>• ROAS / CTR / Conversion rates</li>
                    <li>• Live campaign performance</li>
                  </ul>
                </div>
                <div className="glass-card rounded-2xl p-6">
                  <h3 className="text-lg font-semibold mb-2">Finance Control Tower</h3>
                  <ul className="space-y-1">
                    <li>• Cash flow</li>
                    <li>• Accounts receivable/payable</li>
                    <li>• Monthly P&L</li>
                    <li>• Vendor performance</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Timeline */}
          <section className="mb-20">
            <div className="max-w-6xl mx-auto glass-card rounded-3xl p-8">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 flex items-center gap-2">
                <Workflow className="h-7 w-7 text-purple-400" />
                <span>Typical Timeline: 3–8 Weeks</span>
              </h2>
              <div className="grid md:grid-cols-4 gap-6 text-sm text-slate-200">
                <div>
                  <h3 className="font-semibold mb-2">Week 1</h3>
                  <ul className="space-y-1">
                    <li>• KPI mapping</li>
                    <li>• Data source audit</li>
                    <li>• Early wireframes</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Weeks 2–4</h3>
                  <ul className="space-y-1">
                    <li>• Data modeling & connectors</li>
                    <li>• Dashboard design</li>
                    <li>• First working prototypes</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Weeks 5–7</h3>
                  <ul className="space-y-1">
                    <li>• Automation layering</li>
                    <li>• Alerts & reporting</li>
                    <li>• UX polish</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Week 8</h3>
                  <ul className="space-y-1">
                    <li>• Documentation</li>
                    <li>• Team training</li>
                    <li>• Go-live</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Pricing models */}
          <section className="mb-20">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 flex items-center gap-2">
                <LineChart className="h-7 w-7 text-purple-400" />
                <span>Pricing Models</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-300 max-w-3xl mb-8">
                Scoping depends on the number of dashboards, complexity of data sources, and the automations you need. Here&apos;s how we typically work:
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-sm text-slate-200">
                <div className="glass-card rounded-2xl p-6">
                  <h3 className="text-xl font-semibold mb-2">Dashboards Only</h3>
                  <ul className="space-y-1">
                    <li>• KPI mapping</li>
                    <li>• 1–3 dashboards</li>
                    <li>• Limited automation</li>
                    <li>• Great for leadership teams</li>
                  </ul>
                </div>
                <div className="glass-card glow-effect rounded-2xl p-6 border border-purple-500/50">
                  <h3 className="text-xl font-semibold mb-2">Dashboards + Automations</h3>
                  <ul className="space-y-1">
                    <li>• Multiple dashboards</li>
                    <li>• Automated reports & triggers</li>
                    <li>• Ideal for operations-heavy teams</li>
                  </ul>
                </div>
                <div className="glass-card rounded-2xl p-6">
                  <h3 className="text-xl font-semibold mb-2">Full Visibility Suite</h3>
                  <ul className="space-y-1">
                    <li>• End-to-end dashboards</li>
                    <li>• Extensive automations</li>
                    <li>• Team training</li>
                    <li>• Monthly analytics support</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Case studies */}
          <section className="mb-20">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 flex items-center gap-2">
                <Sparkles className="h-7 w-7 text-purple-400" />
                <span>Mini Case Studies</span>
              </h2>
              <div className="grid md:grid-cols-3 gap-6 text-sm text-slate-200">
                <div className="glass-card rounded-2xl p-6">
                  <h3 className="text-lg font-semibold mb-2">Logistics Firm</h3>
                  <p className="mb-2">Built delivery & delay dashboard with route analytics and auto-generated summaries.</p>
                  <p className="text-slate-300">Ops team saved ~20 hours/week and could see bottlenecks in real time.</p>
                </div>
                <div className="glass-card rounded-2xl p-6">
                  <h3 className="text-lg font-semibold mb-2">Clinic Chain</h3>
                  <p className="mb-2">Patient volume analytics and doctor utilization dashboards across multiple locations.</p>
                  <p className="text-slate-300">Management finally got a clear view of performance without manual reports.</p>
                </div>
                <div className="glass-card rounded-2xl p-6">
                  <h3 className="text-lg font-semibold mb-2">Education Institution</h3>
                  <p className="mb-2">Student performance dashboards with attendance automation and faculty reporting.</p>
                  <p className="text-slate-300">Reporting was simplified drastically, freeing faculty time.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Why ForgeAsh */}
          <section className="mb-20">
            <div className="max-w-6xl mx-auto glass-card rounded-3xl p-8">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 flex items-center gap-2">
                <Target className="h-7 w-7 text-purple-400" />
                <span>Why Teams Choose ForgeAsh</span>
              </h2>
              <ul className="grid md:grid-cols-2 gap-4 text-sm text-slate-200">
                <li>• Deep understanding of operations workflows</li>
                <li>• Strong experience with data-heavy applications</li>
                <li>• Ability to integrate with complex systems</li>
                <li>• Clear, fast UX built for speed and clarity</li>
                <li>• Boutique, high-service delivery model</li>
                <li>• India-based, globally aligned</li>
              </ul>
            </div>
          </section>

          {/* Final CTA */}
          <section className="mb-10">
            <div className="max-w-4xl mx-auto">
              <div className="relative overflow-hidden glass-card rounded-3xl p-10 text-center border border-purple-500/40">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/15 via-blue-500/10 to-purple-500/15 pointer-events-none" />
                <div className="relative z-10">
                  <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to See Your Entire Business Clearly?</h2>
                  <p className="text-sm sm:text-base text-slate-200 max-w-2xl mx-auto mb-8">
                    Book a call and we&apos;ll map the dashboards and automations that will save your team time and accelerate your decisions.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                    <a
                      href={BOOKING_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => handleCtaClick("book_strategy_call_final")}
                      className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 font-semibold text-base hover:from-purple-700 hover:to-blue-700 transition-all shadow-2xl hover:shadow-purple-500/50 hover:scale-105"
                    >
                      Book Dashboard Strategy Call
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a
                      href="/contact"
                      onClick={() => handleCtaClick("share_kpis")}
                      className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl border-2 border-white/25 text-base text-slate-200 hover:bg-white/10 transition-all"
                    >
                      Share My KPIs & Requirements
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
