import { BrainCircuit, Cloud, TrendingUp, CheckCircle, Sparkles, Globe } from "lucide-react";
import { useEffect, useState } from "react";
import { trackEvent } from "@/lib/analytics";

export function ServiceCategoriesSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = [
    {
      icon: Globe,
      title: "High-Performance Business Websites",
      description:
        "Flagship websites for clinics, institutes, coaches, agencies, and service businesses that want a premium look and consistent enquiries.",
      features: [
        "Homepage, services, work, testimonials, FAQ, contact",
        "Conversion-optimized enquiry and booking flows",
        "Fast, responsive, SEO-ready foundations",
      ],
      affirmation: "My website quietly works as a full-time salesperson."
    },
    {
      icon: BrainCircuit,
      title: "AI Systems & Automation",
      description:
        "AI workflows that remove repetitive work from your team’s day—lead qualification, reports, approvals, and more.",
      features: [
        "Convert manual processes into stable flows",
        "Decision support dashboards",
        "Automation roadmap for scale",
      ],
      affirmation: "The more my business grows, the less my team does manually."
    },
    {
      icon: TrendingUp,
      title: "Dashboards & SaaS Platforms",
      description:
        "Dashboards and SaaS platforms that centralize information, streamline operations, and improve decision-making.",
      features: [
        "Executive/ops dashboards",
        "SaaS-ready features: auth, roles, usage tracking",
        "Integrations with CRMs, ERP, HR, finance tools",
      ],
      affirmation: "I always know what’s happening without chasing reports."
    }
  ];

  return (
    <section id="websites" className="relative py-24 bg-gradient-to-br from-[var(--executive-navy-dark)] via-[var(--executive-navy)]/70 to-[var(--executive-navy-dark)] overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] bg-[size:30px_30px]"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[var(--executive-gold)]/30 rounded-full filter blur-3xl animate-pulse-slow opacity-30"></div>
        <div className="absolute -bottom-60 -left-40 w-96 h-96 bg-[var(--executive-purple)]/30 rounded-full filter blur-3xl animate-pulse-slow opacity-20" style={{ animationDelay: "1s" }}></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Subliminal Prosperity Messages */}
        <div className="subliminal-text prosperity-frequency top-10 left-12">My work attracts clients who value depth and craft</div>
        <div className="subliminal-text abundance-flow top-20 right-24">Success flows naturally when systems are well-designed</div>
        <div className="subliminal-text success-magnetism bottom-12 left-16">The services I offer create lasting prosperity</div>
        <div className="subliminal-text prosperity-frequency bottom-24 right-20">My business is a strong magnet for the right projects</div>

        <div className="text-center mb-20 animate-slide-in-top">
          <div className="inline-block mb-4">
            <span className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-[var(--executive-amethyst)]/80 to-[var(--executive-sapphire)]/80 text-white text-sm font-medium backdrop-blur-sm luxury-glow">
              Websites · AI · Data
            </span>
          </div>
          <h2 className="text-5xl font-bold text-white mb-6">
            What ForgeAsh can own for you end-to-end
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-[var(--executive-silver)]">
            Whether you need a flagship website, an AI workflow, or a SaaS platform, we step in as your product and engineering partner—owning the thinking, the build, and the launch.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            const isFeatured = index === 2;
            const isWebsitesCategory = category.title === "High-Performance Business Websites";
            return (
              <div key={index} className="relative flex flex-col items-stretch">
                {/* Glassy Card */}
                <div
                  className="backdrop-blur-xl rounded-3xl shadow-2xl flex flex-col min-h-[500px] px-8 pt-8 pb-16 transition-all duration-300 bg-gradient-to-r from-purple-600 to-blue-600 border border-white/20"
                  style={{ boxShadow: '0 8px 40px 0 rgba(140,120,255,0.35), 0 1.5px 8px 0 rgba(120,90,255,0.25)' }}
                >
                  {/* Icon Box */}
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg mb-7 bg-white/20 ring-1 ring-white/40">
                    <IconComponent className="h-9 w-9 text-white drop-shadow-lg" />
                  </div>
                  {/* Title */}
                  <h3 className="text-2xl font-extrabold mb-3 tracking-tight text-white">
                    {category.title}
                  </h3>
                  {/* Description */}
                  <p className="mb-7 text-base text-white/90">{category.description}</p>
                  {/* Features */}
                  <ul className="space-y-4 mb-8">
                    {category.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <div className="w-6 h-6 mr-3 rounded-full flex items-center justify-center shadow-md bg-white/20">
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-base text-white/90">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  {/* Button */}
                  <div className="mt-auto">
                    <button
                      className="w-full py-3 rounded-xl font-semibold flex items-center justify-center shadow-md text-lg transition-all duration-200 text-white hover:brightness-110 bg-white/20 ring-1 ring-white/40"
                      onClick={() => {
                        if (isWebsitesCategory) {
                          trackEvent("view_website_plans", {
                            location: "services_websites",
                            label: "learn_more_high_performance_websites"
                          });
                          window.location.href = "/services/websites";
                        }
                      }}
                    >
                      <Sparkles className="h-5 w-5 mr-2" />
                      Learn More
                    </button>
                  </div>
                </div>
                {/* Glassy Affirmation Banner */}

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
