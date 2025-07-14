export function BusinessImpactSection() {
  const metrics = [
    {
      percentage: "35%",
      title: "Increase Operational Efficiency",
      description: "Our clients typically see a 35% improvement in operational efficiency through strategic automation and workflow optimization.",
      color: "text-primary"
    },
    {
      percentage: "28%",
      title: "Boost Revenue Growth",
      description: "Leverage AI-driven insights and optimized customer experiences to achieve an average 28% increase in revenue growth.",
      color: "text-green-600"
    },
    {
      percentage: "40%",
      title: "Reduce Development Time",
      description: "Our AI-augmented development approach reduces project timelines by up to 40% compared to traditional methods.",
      color: "text-purple-600"
    },
    {
      percentage: "65%",
      title: "Enhance Decision Quality",
      description: "Data-driven strategies and predictive analytics improve decision quality by 65%, leading to better business outcomes.",
      color: "text-orange-600"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-[var(--executive-navy)] via-[var(--executive-charcoal)] to-[var(--executive-navy)] dark:from-[var(--executive-navy)] dark:via-[var(--executive-charcoal)] dark:to-[var(--executive-navy)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Powerful Subliminal Wealth Affirmations */}
        <div className="subliminal-text prosperity-frequency top-10 left-8">I attract crores of rupees effortlessly</div>
        <div className="subliminal-text abundance-flow top-16 right-12">Massive wealth flows to me constantly</div>
        <div className="subliminal-text success-magnetism bottom-12 left-20">My business generates unlimited income</div>
        <div className="subliminal-text prosperity-frequency bottom-20 right-8">Clients pay me crores for my expertise</div>
        <div className="subliminal-text abundance-flow top-1/2 left-1/3">Money multiplies in my accounts daily</div>
        <div className="subliminal-text success-magnetism top-1/3 right-1/4">I manifest billion-dollar opportunities</div>
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl font-bold text-white mb-6">
            BUSINESS <span className="premium-gradient-text">IMPACT</span>
          </h2>
          <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
            Our clients consistently achieve significant improvements in key business metrics through our strategic technology implementations and AI-driven solutions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div key={index} className="group relative" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="absolute inset-0 subtle-gradient rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="relative premium-card p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 animate-scale-in">
                <div className="text-center">
                  <div className="text-6xl font-bold premium-gradient-text mb-4 group-hover:scale-110 transition-transform duration-300">
                    {metric.percentage}
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-4">{metric.title}</h4>
                  <p className="text-white/70 text-sm leading-relaxed">{metric.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
