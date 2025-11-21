import { useEffect, useState, type ReactNode } from "react";
import { BrainCircuit, Workflow, LineChart, Sparkles, ArrowRight, Check, Zap, TrendingUp, Shield, Clock, DollarSign, Users, Target, ChevronRight, Star } from "lucide-react";
import { BOOKING_URL } from "@/config";
import { trackEvent } from "@/lib/analytics";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { EnquiryButton } from "@/components/EnquiryButton";
import { applySeo, applyBreadcrumbJsonLd } from "@/lib/seo";

// Animated Counter Component
const AnimatedCounter = ({
  end,
  duration = 2000,
  suffix = "",
  prefix = "",
}: {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | undefined;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / duration;

      if (progress < 1) {
        setCount(Math.floor(end * progress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return <span>{prefix}{count}{suffix}</span>;
};

// Floating Element Component
const FloatingElement = ({ children, delay = 0 }: { children: ReactNode; delay?: number }) => {
  return (
    <div 
      className="animate-float"
      style={{
        animation: `float 6s ease-in-out infinite`,
        animationDelay: `${delay}s`
      }}
    >
      {children}
    </div>
  );
};

export default function AiAutomationPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    applySeo({
      title: "AI Systems & Automation Services in Chennai – ForgeAsh",
      description:
        "AI automation services from ForgeAsh in Chennai, Tamil Nadu, India – we design and build AI systems and workflows that save time, cut costs and scale operations for businesses across India and beyond.",
      keywords: [
        "AI automation services Chennai",
        "AI systems Chennai",
        "AI solutions company Chennai",
        "workflow automation India",
        "business process automation Chennai",
      ],
      canonicalPath: "/services/ai-automation",
    });
    applyBreadcrumbJsonLd("services-ai-automation", [
      { name: "Home", path: "/" },
      { name: "Services", path: "/services" },
      { name: "AI Systems & Automation", path: "/services/ai-automation" },
    ]);
  }, []);

  const handleCtaClick = (label: string) => {
    trackEvent("cta_click", { location: "ai_automation_page", label });
  };

  const benefits = [
    { icon: Clock, title: "Save 40+ Hours/Month", desc: "Automate repetitive tasks" },
    { icon: DollarSign, title: "Cut Costs by 60%", desc: "Reduce operational overhead" },
    { icon: TrendingUp, title: "3x Productivity", desc: "Scale without hiring" },
    { icon: Shield, title: "99.9% Accuracy", desc: "Eliminate human errors" }
  ];

  const industries = [
    "Healthcare", "Education", "Logistics", "Finance", "E-commerce", "Manufacturing"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white overflow-hidden">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
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
        {/* Animated Background Elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        {/* Hero Section */}
        <section id="overview" className="relative px-4 sm:px-6 lg:px-8 pt-20 pb-32">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Column */}
              <div className={`${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 mb-6">
                  <Sparkles className="h-4 w-4 text-purple-400" />
                  <span className="text-sm font-semibold text-purple-300">Trusted by 200+ Businesses Globally</span>
                </div>
                
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                  Transform Your Business with 
                  <span className="gradient-text"> AI Automation</span>
                </h1>
              
                <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                  Save 40+ hours a week, cut operational costs by up to 60%, and scale without adding headcount. Our AI systems run 24/7 so your team can focus on high-value work, with AI automation services in Chennai and support for distributed teams across India.
                </p>

                {/* Trust Indicators */}
                <div className="flex flex-wrap gap-6 mb-8">
                  <div className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-green-400" />
                    <span className="text-sm text-slate-300">SOC 2 Compliant</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="h-5 w-5 text-yellow-400" />
                    <span className="text-sm text-slate-300">4.9/5 Rating</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-blue-400" />
                    <span className="text-sm text-slate-300">10,000+ Workflows</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 items-center">
                  <a
                    href="/contact"
                    onClick={() => handleCtaClick("contact_hero")}
                    className="group relative px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 font-bold text-lg hover:from-purple-700 hover:to-blue-700 transition-all shadow-2xl hover:shadow-purple-500/50 hover:scale-105 inline-flex items-center gap-2"
                  >
                    Contact Us
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a
                    href="#case-studies"
                    className="px-8 py-4 rounded-xl border-2 border-white/20 font-semibold text-lg hover:bg-white/10 transition-all inline-flex items-center gap-2"
                  >
                    See Results
                    <ChevronRight className="h-5 w-5" />
                  </a>
                  <EnquiryButton
                    serviceId="ai_automation"
                    serviceLabel="AI Systems & Automation"
                    sourcePage="/services/ai-automation"
                    size="md"
                    variant="secondary"
                  />
                </div>

                <p className="text-sm text-slate-400 mt-4">
                  ✓ No credit card required  ✓ 30-day money-back guarantee
                </p>
              </div>

              {/* Right Column - Interactive Dashboard Preview */}
              <div className="relative" style={{animationDelay: '0.3s'}}>
                <FloatingElement>
                  <div className="glass-card rounded-3xl p-8 glow-effect">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                        <BrainCircuit className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-sm text-slate-400">Live Dashboard</p>
                        <p className="font-semibold">Real-Time Insights</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {/* Metric Cards */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl p-4 border border-green-500/30">
                          <p className="text-sm text-slate-300 mb-1">Time Saved</p>
                          <p className="text-3xl font-bold text-green-400">
                            <AnimatedCounter end={42} suffix=" hours" />
                          </p>
                          <p className="text-xs text-slate-400 mt-1">↑ 23% this week</p>
                        </div>
                        <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl p-4 border border-blue-500/30">
                          <p className="text-sm text-slate-300 mb-1">Cost Reduced</p>
                          <p className="text-3xl font-bold text-blue-400">
                            <AnimatedCounter end={60} suffix="%" />
                          </p>
                          <p className="text-xs text-slate-400 mt-1">↑ 15% this month</p>
                        </div>
                      </div>

                      {/* Workflow Status */}
                      <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-sm font-semibold">Active Workflows</span>
                          <span className="text-xs px-2 py-1 rounded-full bg-green-500/20 text-green-400 border border-green-500/30">Running</span>
                        </div>
                        <div className="space-y-2">
                          {['Invoice Processing', 'Lead Qualification', 'Report Generation'].map((workflow, i) => (
                            <div key={i} className="flex items-center gap-2 text-sm">
                              <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></div>
                              <span className="text-slate-300">{workflow}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </FloatingElement>

                {/* Floating badges */}
                <FloatingElement delay={1}>
                  <div className="absolute -top-6 -right-6 glass-card rounded-2xl p-4 border border-purple-500/30">
                    <div className="flex items-center gap-2">
                      <Zap className="h-5 w-5 text-yellow-400" />
                      <div>
                        <p className="text-xs text-slate-400">Processing Speed</p>
                        <p className="font-bold">10x Faster</p>
                      </div>
                    </div>
                  </div>
                </FloatingElement>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Bar */}
        <section className="relative px-4 sm:px-6 lg:px-8 py-12 border-y border-white/10 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, i) => {
                const Icon = benefit.icon;
                return (
                  <div key={i} className="text-center">
                    <div className="inline-flex h-16 w-16 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 items-center justify-center mb-4 border border-white/10">
                      <Icon className="h-8 w-8 text-purple-400" />
                    </div>
                    <h3 className="font-bold text-xl mb-1">{benefit.title}</h3>
                    <p className="text-sm text-slate-400">{benefit.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Problem vs Solution */}
        <section className="relative px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                Stop Wasting Time on <span className="gradient-text">Repetitive Tasks</span>
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Your team shouldn't be drowning in busywork. Let AI handle the routine so they can focus on growth.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Problems */}
              <div className="glass-card rounded-3xl p-8 border-2 border-red-500/30">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-12 w-12 rounded-xl bg-red-500/20 flex items-center justify-center">
                    <span className="text-2xl">😰</span>
                  </div>
                  <h3 className="text-2xl font-bold text-red-400">Without AI Automation</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    'Team spends 40+ hours/week on manual data entry',
                    'Decisions are delayed by scattered information',
                    'Errors lead to costly rework',
                    'No time left for strategic work',
                    'Scaling means hiring more people',
                    'Reports are rebuilt manually every month'
                  ].map((problem, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-300">
                      <span className="text-red-400 mt-1">✗</span>
                      <span>{problem}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Solutions */}
              <div className="glass-card rounded-3xl p-8 border-2 border-green-500/30 glow-effect">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-12 w-12 rounded-xl bg-green-500/20 flex items-center justify-center">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <h3 className="text-2xl font-bold text-green-400">With Our AI Systems</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    'Zero manual data entry—key workflows run end to end',
                    'Real-time dashboards for instant, shared visibility',
                    '99.9% accuracy so errors rarely reach customers',
                    'Team freed up to work on high-impact initiatives',
                    'Scale 10x without adding headcount',
                    'Automated reports delivered on a predictable schedule'
                  ].map((solution, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-300">
                      <Check className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                      <span>{solution}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Industries Served */}
        <section className="relative px-4 sm:px-6 lg:px-8 py-12 bg-white/5">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-sm text-slate-400 mb-4">TRUSTED ACROSS INDUSTRIES</p>
            <div className="flex flex-wrap justify-center gap-4">
              {industries.map((industry, i) => (
                <span key={i} className="px-6 py-3 rounded-full glass-card text-sm font-semibold">
                  {industry}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* AI Solutions */}
        <section id="solutions" className="relative px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                Powerful <span className="gradient-text">AI Solutions</span> for Every Department
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                From operations to sales, we build custom AI systems that integrate seamlessly with your existing toolsideal if you&apos;re looking for an AI solutions company in Chennai that can work remotely with teams across India.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Business Process Automation',
                  badge: 'Most Popular',
                  badgeColor: 'from-yellow-500 to-orange-500',
                  icon: Workflow,
                  features: [
                    'Auto-update records across systems',
                    'Generate reports instantly',
                    'Smart routing & approvals',
                    'Event-driven workflows'
                  ]
                },
                {
                  title: 'AI Assistants for Teams',
                  badge: 'Fastest ROI',
                  badgeColor: 'from-green-500 to-emerald-500',
                  icon: BrainCircuit,
                  features: [
                    'Sales assistant for CRM',
                    'HR assistant for recruiting',
                    'Finance assistant for reporting',
                    'Support assistant for tickets'
                  ]
                },
                {
                  title: 'Document Intelligence',
                  icon: Target,
                  features: [
                    'Extract data from PDFs',
                    'Process invoices automatically',
                    'Validate & structure data',
                    'Searchable repositories'
                  ]
                },
                {
                  title: 'Predictive Analytics',
                  icon: LineChart,
                  features: [
                    'Forecast sales & revenue',
                    'Identify bottlenecks early',
                    'Detect anomalies instantly',
                    'Recommend next actions'
                  ]
                },
                {
                  title: 'Operations & Logistics',
                  icon: Zap,
                  features: [
                    'Auto-route deliveries',
                    'Track SLA compliance',
                    'Smart scheduling',
                    'Vendor automation'
                  ]
                },
                {
                  title: 'Industry-Specific AI',
                  icon: Sparkles,
                  features: [
                    'Healthcare: Patient workflows',
                    'Education: Performance tracking',
                    'Finance: Expense automation',
                    'Custom solutions available'
                  ]
                }
              ].map((solution, i) => {
                const Icon = solution.icon;
                return (
                  <div key={i} className="group glass-card rounded-2xl p-6 hover:border-purple-500/50 transition-all hover:scale-105 cursor-pointer relative overflow-hidden">
                    {solution.badge && (
                      <span className={`absolute top-4 right-4 px-3 py-1 rounded-full bg-gradient-to-r ${solution.badgeColor} text-xs font-bold`}>
                        {solution.badge}
                      </span>
                    )}
                    <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center mb-4 border border-white/10 group-hover:scale-110 transition-transform">
                      <Icon className="h-7 w-7 text-purple-400" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">{solution.title}</h3>
                    <ul className="space-y-2">
                      {solution.features.map((feature, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-slate-300">
                          <Check className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Pricing section removed as per request */}

        {/* Case Studies */}
        <section id="case-studies" className="relative px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                Real Results from <span className="gradient-text">Real Businesses</span>
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                See how companies like yours transformed their operations with AI automation.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  company: 'Global Logistics Co.',
                  industry: 'Logistics',
                  result: '4 hours saved daily',
                  metric: '95% on-time delivery',
                  story: 'Automated route planning across 5 cities eliminated manual scheduling and improved delivery performance.'
                },
                {
                  company: 'Premier Dental Clinic',
                  industry: 'Healthcare',
                  result: '30% revenue increase',
                  metric: '85% follow-up rate',
                  story: 'Automated appointment reminders and billing workflows transformed patient engagement and cash flow.'
                },
                {
                  company: 'Tech University',
                  industry: 'Education',
                  result: '20 hours saved weekly',
                  metric: '40% early intervention',
                  story: 'Real-time performance dashboards identified at-risk students early, improving retention rates.'
                }
              ].map((study, i) => (
                <div key={i} className="glass-card rounded-2xl p-6 hover:border-purple-500/50 transition-all">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full bg-purple-500/20 text-xs font-semibold text-purple-300">
                      {study.industry}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{study.company}</h3>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-green-500/10 rounded-lg p-3 border border-green-500/30">
                      <p className="text-2xl font-bold text-green-400">{study.result}</p>
                      <p className="text-xs text-slate-400">Time/Cost Saved</p>
                    </div>
                    <div className="bg-blue-500/10 rounded-lg p-3 border border-blue-500/30">
                      <p className="text-2xl font-bold text-blue-400">{study.metric}</p>
                      <p className="text-xs text-slate-400">Performance</p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-300">{study.story}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Social proof & testimonials sections removed as per request */}

        {/* Process Section */}
        <section className="relative px-4 sm:px-6 lg:px-8 py-24 bg-gradient-to-b from-purple-950/20 to-transparent">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                Your Journey to <span className="gradient-text">AI-Powered Success</span>
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Simple, proven process from discovery to deployment in 4-8 weeks
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  step: '01',
                  title: 'Discovery Call',
                  desc: 'We map your workflows and identify high-impact automation opportunities',
                  icon: Users
                },
                {
                  step: '02',
                  title: 'Custom Strategy',
                  desc: 'Receive a detailed roadmap with ROI projections and timeline',
                  icon: Target
                },
                {
                  step: '03',
                  title: 'Build & Deploy',
                  desc: 'We build, test, and integrate AI systems with your existing tools',
                  icon: Workflow
                },
                {
                  step: '04',
                  title: 'Scale & Optimize',
                  desc: 'Ongoing support to maximize results and add new capabilities',
                  icon: TrendingUp
                }
              ].map((phase, i) => {
                const Icon = phase.icon;
                return (
                  <div key={i} className="relative">
                    {i < 3 && (
                      <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-purple-500 to-transparent"></div>
                    )}
                    <div className="glass-card rounded-2xl p-6 text-center hover:border-purple-500/50 transition-all relative z-10">
                      <div className="text-6xl font-bold text-purple-500/20 mb-2">{phase.step}</div>
                      <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center mx-auto mb-4 border border-white/10">
                        <Icon className="h-7 w-7 text-purple-400" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">{phase.title}</h3>
                      <p className="text-sm text-slate-300">{phase.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="relative px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "How long does implementation take?",
                  a: "Most projects are live in 4-8 weeks depending on complexity. Simple automations can be deployed in 2-3 weeks."
                },
                {
                  q: "Will this work with our existing tools?",
                  a: "Yes! We integrate with 100+ platforms including Salesforce, SAP, QuickBooks, Google Workspace, and custom systems."
                },
                {
                  q: "What if we don't have technical staff?",
                  a: "No problem. We handle everything from setup to training. Your team just needs to use the systems—no coding required."
                },
                {
                  q: "What's the typical ROI?",
                  a: "Most clients see 5-10x ROI within 6 months through time savings, error reduction, and operational efficiency gains."
                },
                {
                  q: "Do you provide ongoing support?",
                  a: "Yes. All packages include post-launch support, and we offer maintenance plans for continuous optimization."
                }
              ].map((faq, i) => (
                <div key={i} className="glass-card rounded-xl p-6 hover:border-purple-500/50 transition-all">
                  <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
                    <ChevronRight className="h-5 w-5 text-purple-400" />
                    {faq.q}
                  </h3>
                  <p className="text-slate-300 ml-7">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-5xl mx-auto">
            <div className="relative overflow-hidden rounded-3xl border-2 border-purple-500/50 bg-gradient-to-br from-purple-900/40 via-blue-900/40 to-slate-900/40 p-12 text-center shadow-2xl">
              {/* Animated background effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-purple-500/10 animate-pulse"></div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-green-500/20 border border-green-500/30 mb-6">
                  <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></div>
                  <span className="text-sm font-semibold text-green-300">Limited Slots Available This Month</span>
                </div>

                <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
                  Join 200+ companies that eliminated busywork and scaled faster with AI automation. Book your free strategy call today.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                  <a
                    href={BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => handleCtaClick("contact_final_cta")}
                    className="group inline-flex items-center justify-center gap-3 px-10 py-5 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 font-bold text-lg hover:from-purple-700 hover:to-blue-700 transition-all shadow-2xl hover:shadow-purple-500/50 hover:scale-105"
                  >
                    Book Free Strategy Call
                    <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a
                    href="#case-studies"
                    className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-xl border-2 border-white/30 font-bold text-lg hover:bg-white/10 transition-all"
                  >
                    View Case Studies
                  </a>
                </div>

                <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-300">
                  <div className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-400" />
                    <span>No credit card required</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-400" />
                    <span>30-day money-back guarantee</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-400" />
                    <span>Free consultation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Bar */}
        <section className="relative px-4 sm:px-6 lg:px-8 py-12 border-t border-white/10">
          <div className="max-w-7xl mx-auto">
            <p className="text-center text-sm text-slate-400 mb-6">TRUSTED BY LEADING COMPANIES</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-50">
              {['Healthcare', 'Education', 'Logistics', 'Finance', 'Manufacturing', 'E-commerce'].map((industry, i) => (
                <div key={i} className="px-6 py-3 rounded-lg glass-card text-sm font-semibold">
                  {industry}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}