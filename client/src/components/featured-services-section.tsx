import { Button } from "@/components/ui/button";
import {
  Brain,
  Cloud,
  TrendingUp,
  Check,
  Code,
  LineChart,
  Database,
  Puzzle,
  PenTool,
  Globe,
  ShieldCheck,
  Cpu,
  BarChart,
  Sparkles,
  Zap,
  Diamond,
  Star,
  Crown
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

export function FeaturedServicesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    // Create random prosperity sparkles
    const interval = setInterval(() => {
      setActiveIndex(Math.floor(Math.random() * 3));
      setTimeout(() => setActiveIndex(null), 800);
    }, 4000);
    
    return () => {
      observer.disconnect();
      clearInterval(interval);
    };
  }, []);
  
  const services = [
    {
      icon: Brain,
      secondaryIcon: Diamond,
      title: "Enterprise AI Implementation",
      description: "Transform your operations with custom AI solutions that automate tasks, generate insights, and drive strategic decision-making.",
      features: [
        "Custom AI models tailored to your business needs",
        "Seamless integration with existing systems",
        "Ongoing optimization and support"
      ],
      bgGradient: "from-[var(--executive-navy)]/20 to-[var(--executive-blue)]/20",
      iconGradient: "from-[var(--executive-navy)] to-[var(--executive-blue)]",
      buttonGradient: "from-[var(--executive-navy)] to-[var(--executive-blue)]",
      affirmation: "My AI solutions multiply profits exponentially",
      particleColor: "bg-blue-400"
    },
    {
      icon: Cloud,
      secondaryIcon: Crown,
      title: "SaaS Platform Innovation",
      description: "Create scalable, cloud-based applications that generate recurring revenue and deliver continuous value to your customers.",
      features: [
        "Subscription-based business models",
        "Multi-tenant architecture design",
        "User-friendly interfaces that drive adoption"
      ],
      bgGradient: "from-[var(--executive-purple)]/20 to-[var(--executive-blue)]/20",
      iconGradient: "from-[var(--executive-purple)] to-[var(--executive-blue)]",
      buttonGradient: "from-[var(--executive-purple)] to-[var(--executive-blue)]",
      affirmation: "My SaaS solutions attract unlimited recurring revenue",
      particleColor: "bg-purple-400"
    },
    {
      icon: TrendingUp,
      secondaryIcon: Star,
      title: "Data Analysis & Visualization",
      description: "Turn complex data into actionable insights with powerful analytics and intuitive visualizations that inform strategic decisions.",
      features: [
        "Interactive dashboards that reveal patterns",
        "Predictive analytics that anticipate trends",
        "Custom reporting tailored to your KPIs"
      ],
      bgGradient: "from-[var(--executive-gold)]/20 to-[var(--executive-orange)]/20",
      iconGradient: "from-[var(--executive-amethyst)] to-[var(--executive-sapphire)]",
      buttonGradient: "from-[var(--executive-amethyst)] to-[var(--executive-sapphire)]",
      affirmation: "My data insights generate massive wealth opportunities",
      particleColor: "bg-amber-400"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="services" 
      className="relative py-24 overflow-hidden bg-gradient-to-br from-[var(--executive-navy-dark)] via-[var(--executive-navy)]/60 to-[var(--executive-navy-dark)]">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zMCAzMGMzLjMgMCA2LTIuNyA2LTZzLTIuNy02LTYtNi02IDIuNy02IDYgMi43IDYgNiA2em0wLTJjMi4yIDAgNC0xLjggNC00cy0xLjgtNC00LTQtNCAxLjgtNCA0IDEuOCA0IDQgNHoiIGZpbGw9IiMyOGE3NDUiIG9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] bg-repeat opacity-20"></div>
        <div className="absolute top-1/3 right-1/3 w-72 h-72 bg-[var(--executive-gold)]/5 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 left-1/3 w-72 h-72 bg-[var(--executive-blue)]/5 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: "2.5s" }}></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Subtle Subliminal Innovation Affirmations */}
        <div className="subliminal-text prosperity-frequency top-12 left-14">My services create extraordinary value</div>
        <div className="subliminal-text abundance-flow top-20 right-18">Innovation flows through my solutions</div>
        <div className="subliminal-text success-magnetism bottom-16 left-22">Clients see immediate transformation</div>
        <div className="subliminal-text prosperity-frequency bottom-24 right-20">My expertise commands premium investment</div>
        <div className={`text-center mb-20 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-block mb-4">
            <span className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-[var(--executive-amethyst)]/20 to-[var(--executive-sapphire)]/20 text-foreground text-sm font-medium backdrop-blur-sm professional-glow dark:text-white shadow-lg">
              <span className="animate-pulse mr-2">✨</span> Transformative Technology Solutions
            </span>
          </div>
          
          <h2 className="text-5xl font-bold mb-6">
            <span className="text-transparent bg-gradient-to-r from-[var(--executive-amethyst)] to-[var(--executive-sapphire)] bg-clip-text animate-gradient">FEATURED</span>
            <span className="text-foreground dark:text-white"> SERVICES</span>
          </h2>
          
          <div className="relative">
            <div className="absolute -left-1/4 top-1/2 w-16 h-16 bg-[var(--executive-amethyst)]/10 rounded-full filter blur-xl animate-pulse-slow"></div>
            <div className="absolute -right-1/4 top-1/2 w-16 h-16 bg-[var(--executive-blue)]/10 rounded-full filter blur-xl animate-pulse-slow" style={{ animationDelay: "1.5s" }}></div>
            
            <p className="text-xl text-muted-foreground dark:text-slate-400 max-w-4xl mx-auto leading-relaxed">
              We deliver <span className="text-transparent bg-gradient-to-r from-[var(--executive-sapphire)] to-[var(--executive-navy)] bg-clip-text font-medium">strategic technology solutions</span> that drive <span className="text-transparent bg-gradient-to-r from-[var(--executive-amethyst)] to-[var(--executive-sapphire)] bg-clip-text font-medium">growth, efficiency,</span> and <span className="text-transparent bg-gradient-to-r from-[var(--executive-sapphire)] to-[var(--executive-amethyst)] bg-clip-text font-medium">competitive advantage</span> for forward-thinking businesses across diverse industries.
            </p>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-10">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const SecondaryIconComponent = service.secondaryIcon;
            const isActive = activeIndex === index;
            
            return (
              <div 
                key={index} 
                className="group relative" 
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                  transition: `all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) ${index * 0.2}s`
                }}
              >
                {/* Outer glow */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-r ${service.iconGradient} rounded-3xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-500 ${isActive ? 'animate-pulse' : ''}`}
                ></div>
                
                {/* Card content */}
                <div className="relative bg-gradient-to-br from-white/95 to-white/80 dark:from-card/95 dark:to-card/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 transform group-hover:-translate-y-3 professional-glow border border-white/20 overflow-hidden">
                  {/* Hidden prosperity affirmation */}
                  <div className="absolute -bottom-20 left-0 right-0 text-center text-xs font-medium text-white bg-gradient-to-r from-black/80 to-black/80 backdrop-blur-md py-2 px-4 transition-all duration-500 opacity-0 group-hover:opacity-100 group-hover:bottom-0 z-20">
                    "{service.affirmation}"
                  </div>
                  
                  {/* Floating particles */}
                  <div className="absolute top-1/3 left-1/4 w-1.5 h-1.5 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-float transition-opacity duration-300" style={{backgroundColor: `var(--executive-gold)`}}></div>
                  <div className="absolute bottom-1/3 right-1/3 w-1 h-1 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-float transition-opacity duration-300" style={{backgroundColor: `var(--executive-blue)`, animationDelay: '1s'}}></div>
                  <div className="absolute top-2/3 right-1/4 w-1 h-1 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-float transition-opacity duration-300" style={{backgroundColor: `var(--executive-purple)`, animationDelay: '1.5s'}}></div>
                  
                  {/* Animated border */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden rounded-3xl z-0">
                    <div className="absolute -top-1 -bottom-1 -left-1 -right-1 rounded-3xl border-2 border-white/30 animate-border-flow"></div>
                  </div>
                  
                  {/* Icon container */}
                  <div className="relative">
                    <div className={`flex items-center justify-center w-20 h-20 bg-gradient-to-br ${service.iconGradient} rounded-2xl mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg overflow-hidden z-10`}>
                      <div className={`absolute inset-0 bg-gradient-to-r ${service.iconGradient} opacity-80`}></div>
                      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJhIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBzdG9wLWNvbG9yPSIjZmZmZmZmIiBzdG9wLW9wYWNpdHk9Ii4yIiBvZmZzZXQ9IjAlIi8+PHN0b3Agc3RvcC1jb2xvcj0iI2ZmZmZmZiIgc3RvcC1vcGFjaXR5PSIwIiBvZmZzZXQ9IjEwMCUiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cGF0aCBmaWxsPSJ1cmwoI2EpIiBkPSJNMCAwaDIwMHYyMDBIMHoiLz48L3N2Zz4=')] bg-cover opacity-40"></div>
                      <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent transform skew-x-12 group-hover:animate-shine"></div>
                      <IconComponent className="text-white h-10 w-10 relative z-20" />
                      
                      {/* Secondary icon that appears on hover */}
                      <SecondaryIconComponent className="text-white h-10 w-10 absolute opacity-0 group-hover:opacity-100 transform group-hover:rotate-12 transition-all duration-500 z-20" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <h4 className="text-2xl font-bold mb-4 text-foreground dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[var(--executive-gold)] group-hover:to-[var(--executive-orange)] group-hover:bg-clip-text transition-all duration-300">
                      {service.title}
                    </h4>
                    <p className="text-muted-foreground dark:text-slate-400 mb-8 leading-relaxed">{service.description}</p>
                    
                    <ul className="space-y-4 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start text-muted-foreground dark:text-slate-400 group-hover:transform group-hover:translate-x-1 transition-transform duration-300" style={{ transitionDelay: `${featureIndex * 0.1}s` }}>
                          <div className={`flex-shrink-0 w-5 h-5 bg-gradient-to-r ${service.buttonGradient} rounded-full flex items-center justify-center mr-3 mt-0.5 shadow-md`}>
                            <Check className="text-white h-3 w-3" />
                          </div>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button className={`w-full bg-gradient-to-r ${service.buttonGradient} text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 luxury-glow group overflow-hidden`}>
                      <Sparkles className="mr-2 h-4 w-4 group-hover:animate-ping opacity-70" />
                      <span>Learn More</span>
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="text-center mt-16">
          <Button size="lg" className="bg-gradient-to-r from-[var(--executive-amethyst)] to-[var(--executive-sapphire)] text-white hover:from-[var(--executive-amethyst-light)] hover:to-[var(--executive-sapphire-light)] luxury-glow hover-lift px-8 py-4 text-lg shadow-lg">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
}
