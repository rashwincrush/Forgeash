import { Button } from "@/components/ui/button";
import { Brain, Cloud, TrendingUp, Check } from "lucide-react";

export function FeaturedServicesSection() {
  const services = [
    {
      icon: Brain,
      title: "Enterprise AI Implementation",
      description: "Transform your operations with custom AI solutions that automate tasks, generate insights, and drive strategic decision-making.",
      features: [
        "Custom AI models tailored to your business needs",
        "Seamless integration with existing systems",
        "Ongoing optimization and support"
      ],
      bgColor: "from-blue-50 to-primary/10",
      iconColor: "bg-primary",
      buttonColor: "bg-primary hover:bg-primary/90"
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
      bgColor: "from-green-50 to-emerald-50",
      iconColor: "bg-green-600",
      buttonColor: "bg-green-600 hover:bg-green-700"
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
      bgColor: "from-purple-50 to-violet-50",
      iconColor: "bg-purple-600",
      buttonColor: "bg-purple-600 hover:bg-purple-700"
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-[var(--professional-primary)] via-[var(--professional-primary-light)] to-[var(--professional-primary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Crore-Focused Subliminal Wealth Programming */}
        <div className="subliminal-text prosperity-frequency top-12 left-14">My services generate crores in revenue</div>
        <div className="subliminal-text abundance-flow top-20 right-18">Premium clients invest billions in my expertise</div>
        <div className="subliminal-text success-magnetism bottom-16 left-22">Every service creates unlimited wealth</div>
        <div className="subliminal-text prosperity-frequency bottom-24 right-20">I attract Fortune 500 partnerships</div>
        <div className="subliminal-text abundance-flow top-1/2 left-1/2">My solutions scale to billions effortlessly</div>
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl font-bold text-foreground mb-6">
            <span className="violet-blue-gradient-text">FEATURED</span> SERVICES
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            We deliver strategic technology solutions that drive growth, efficiency, and competitive advantage for forward-thinking businesses across diverse industries.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-10">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="group relative" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="absolute inset-0 violet-gradient rounded-3xl blur opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
                <div className="relative professional-card p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 animate-scale-in">
                  <div className="flex items-center justify-center w-20 h-20 blue-gradient rounded-2xl mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg professional-shadow">
                    <IconComponent className="text-white h-10 w-10" />
                  </div>
                  
                  <h4 className="text-2xl font-bold text-foreground mb-4">{service.title}</h4>
                  <p className="text-muted-foreground mb-8 leading-relaxed">{service.description}</p>
                  
                  <ul className="space-y-4 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-muted-foreground">
                        <div className="flex-shrink-0 w-5 h-5 bg-gradient-to-r from-[var(--executive-green)] to-[var(--executive-orange)] rounded-full flex items-center justify-center mr-3 mt-0.5">
                          <Check className="text-white h-3 w-3" />
                        </div>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button className="w-full bg-gradient-to-r from-[var(--executive-navy)] to-[var(--executive-blue)] text-white hover:from-[var(--executive-navy-light)] hover:to-[var(--executive-blue)] shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 professional-glow">
                    Learn More
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="text-center mt-16">
          <Button size="lg" className="bg-gradient-to-r from-[var(--executive-navy)] to-[var(--executive-blue)] text-white hover:from-[var(--executive-navy-light)] hover:to-[var(--executive-blue)] professional-glow hover-lift px-8 py-4 text-lg">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
}
