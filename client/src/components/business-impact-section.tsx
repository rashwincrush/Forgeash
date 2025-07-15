export function BusinessImpactSection() {
  const metrics = [
    {
      percentage: "35%",
      title: "Increase Operational Efficiency",
      description: "Our clients typically see a 35% improvement in operational efficiency through strategic automation and workflow optimization."
    },
    {
      percentage: "28%",
      title: "Boost Revenue Growth",
      description: "Leverage AI-driven insights and optimized customer experiences to achieve an average 28% increase in revenue growth."
    },
    {
      percentage: "40%",
      title: "Reduce Development Time",
      description: "Our AI-augmented development approach reduces project timelines by up to 40% compared to traditional methods."
    },
    {
      percentage: "65%",
      title: "Enhance Decision Quality",
      description: "Data-driven strategies and predictive analytics improve decision quality by 65%, leading to better business outcomes."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-[var(--executive-navy-dark)] via-[var(--executive-navy)]/70 to-[var(--executive-navy-dark)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl font-bold text-white mb-6">
            BUSINESS <span className="text-transparent bg-gradient-to-r from-[var(--executive-amethyst)] to-[var(--executive-sapphire)] bg-clip-text">IMPACT</span>
          </h2>
          <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
            Our clients consistently achieve significant improvements in key business metrics through our strategic technology implementations and AI-driven solutions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div key={index} className="relative" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="relative bg-gradient-to-br from-[var(--executive-amethyst)]/80 to-[var(--executive-sapphire)]/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 animate-scale-in">
                <div className="text-center">
                  <div className="text-6xl font-bold text-white mb-4">
                    {metric.percentage}
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-4">{metric.title}</h4>
                  <p className="text-white/80 text-sm leading-relaxed">{metric.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
