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
    <section id="services" className="py-20 bg-background dark:bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">FEATURED SERVICES</h2>
          <h3 className="text-2xl font-semibold text-muted-foreground mb-6">Our Core Solutions</h3>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We deliver strategic technology solutions that drive growth, efficiency, and competitive advantage for forward-thinking businesses.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className={`bg-gradient-to-br ${service.bgColor} dark:bg-gradient-to-br dark:from-card dark:to-card/50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group professional-glow animate-scale-in`} style={{ animationDelay: `${index * 0.1}s` }}>
                <div className={`flex items-center justify-center w-16 h-16 ${service.iconColor} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="text-white h-8 w-8" />
                </div>
                
                <h4 className="text-2xl font-bold text-foreground mb-4">{service.title}</h4>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-muted-foreground">
                      <Check className="text-[var(--executive-green)] mr-3 h-4 w-4" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button className={`${service.buttonColor} text-white shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200 professional-glow`}>
                  Learn more
                </Button>
              </div>
            );
          })}
        </div>
        
        <div className="text-center mt-12">
          <Button size="lg" className="bg-[var(--executive-navy)] text-white hover:bg-[var(--executive-navy-light)] professional-glow hover-lift">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
}
