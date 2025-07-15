import { BrainCircuit, Cloud, TrendingUp, CheckCircle, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

export function ServiceCategoriesSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = [
    {
      icon: BrainCircuit,
      title: "Enterprise AI Implementation",
      description: "Transform your operations with custom AI solutions that automate tasks, generate insights, and drive strategic decision-making.",
      features: [
        "Custom AI models tailored to your business needs",
        "Seamless integration with existing systems",
        "Ongoing optimization and support"
      ],
      affirmation: "My AI solutions create unprecedented value."
    },
    {
      icon: Cloud,
      title: "SaaS Platform Innovation",
      description: "Create scalable, cloud-based applications that generate recurring revenue and deliver continuous value to your customers.",
      features: [
        "Subscription-based business models",
        "Multi-tenant architecture design",
        "User-friendly interfaces that drive adoption"
      ],
      affirmation: "My platforms scale effortlessly to millions of users."
    },
    {
      icon: TrendingUp,
      title: "Data Analysis & Visualization",
      description: "Turn complex data into actionable insights with powerful analytics and intuitive visualizations that inform strategic decisions.",
      features: [
        "Interactive dashboards that reveal patterns",
        "Predictive analytics that anticipate trends",
        "Custom reporting tailored to your KPIs"
      ],
      affirmation: "My data insights generate massive wealth opportunities."
    }
  ];

  return (
    <section id="expertise" className="relative py-24 bg-gradient-to-br from-[var(--executive-navy-dark)] via-[var(--executive-navy)]/70 to-[var(--executive-navy-dark)] overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] bg-[size:30px_30px]"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[var(--executive-gold)]/30 rounded-full filter blur-3xl animate-pulse-slow opacity-30"></div>
        <div className="absolute -bottom-60 -left-40 w-96 h-96 bg-[var(--executive-purple)]/30 rounded-full filter blur-3xl animate-pulse-slow opacity-20" style={{ animationDelay: "1s" }}></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Subliminal Prosperity Messages */}
        <div className="subliminal-text prosperity-frequency top-10 left-12">I effortlessly attract clients who value my expertise</div>
        <div className="subliminal-text abundance-flow top-20 right-24">Success flows naturally to my business</div>
        <div className="subliminal-text success-magnetism bottom-12 left-16">My services create abundant prosperity</div>
        <div className="subliminal-text prosperity-frequency bottom-24 right-20">I am a powerful magnet for business growth</div>

        <div className="text-center mb-20 animate-slide-in-top">
          <div className="inline-block mb-4">
            <span className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-[var(--executive-amethyst)]/80 to-[var(--executive-sapphire)]/80 text-white text-sm font-medium backdrop-blur-sm luxury-glow">
              OUR EXPERTISE
            </span>
          </div>
          <h2 className="text-5xl font-bold text-white mb-6">
            FEATURED SERVICES
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-[var(--executive-silver)]">
            We deliver <span className='text-transparent bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text'>strategic technology solutions</span> that drive <span className='text-transparent bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text'>growth, efficiency, and competitive advantage</span> for forward-thinking businesses across diverse industries.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            const isFeatured = index === 2;
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
                    <button className="w-full py-3 rounded-xl font-semibold flex items-center justify-center shadow-md text-lg transition-all duration-200 text-white hover:brightness-110 bg-white/20 ring-1 ring-white/40">
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
