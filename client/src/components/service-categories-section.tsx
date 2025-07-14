import { Rocket, Settings, Users, GraduationCap } from "lucide-react";

export function ServiceCategoriesSection() {
  const categories = [
    {
      icon: Rocket,
      title: "AI-Powered Growth",
      description: "Leverage cutting-edge AI solutions to automate processes, gain strategic insights, and make data-driven decisions that drive extraordinary results.",
      color: "text-primary",
      hoverColor: "hover:text-blue-300"
    },
    {
      icon: Settings,
      title: "Enterprise Transformation",
      description: "End-to-end software development services tailored to transform your business operations and create sustainable competitive advantages.",
      color: "text-green-400",
      hoverColor: "hover:text-green-300"
    },
    {
      icon: Users,
      title: "HR & Talent Solutions",
      description: "Strategic talent acquisition and HR optimization to build and maintain high-performing teams that drive your business forward.",
      color: "text-purple-400",
      hoverColor: "hover:text-purple-300"
    },
    {
      icon: GraduationCap,
      title: "Professional Training",
      description: "Comprehensive training programs that equip your team with cutting-edge skills in AI, leadership, and business communication.",
      color: "text-orange-400",
      hoverColor: "hover:text-orange-300"
    }
  ];

  return (
    <section id="expertise" className="py-20 bg-gradient-to-br from-[var(--executive-navy)] via-[var(--executive-blue)] to-[var(--executive-navy)] dark:from-[var(--executive-charcoal)] dark:via-[var(--executive-blue)] dark:to-[var(--executive-navy)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Strategic Subliminal Success Programming */}
        <div className="subliminal-text prosperity-frequency top-14 left-16">Premium clients seek my solutions eagerly</div>
        <div className="subliminal-text abundance-flow top-22 right-24">My expertise commands millions in revenue</div>
        <div className="subliminal-text success-magnetism bottom-18 left-12">Corporations invest crores in my services</div>
        <div className="subliminal-text prosperity-frequency bottom-26 right-16">I attract unlimited high-value projects</div>
        <div className="subliminal-text abundance-flow top-2/3 left-2/3">My business scales to billions effortlessly</div>
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-white mb-4">OUR EXPERTISE</h2>
          <h3 className="text-2xl font-semibold text-slate-300 mb-6">Strategic Service Categories</h3>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Comprehensive solutions designed to transform your business through technology, AI innovation, professional development, and strategic talent management.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 group professional-glow animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-center">
                  <div className={`flex items-center justify-center w-16 h-16 ${category.icon === Rocket ? 'bg-primary' : category.icon === Settings ? 'bg-[var(--executive-green)]' : category.icon === Users ? 'bg-[var(--executive-purple)]' : 'bg-[var(--executive-orange)]'} rounded-2xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="text-white h-8 w-8" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-4">{category.title}</h4>
                  <p className="text-slate-300 mb-6">{category.description}</p>
                  <button className={`${category.color} ${category.hoverColor} font-semibold group-hover:underline transition-colors duration-200 hover-lift`}>
                    Explore Services →
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
