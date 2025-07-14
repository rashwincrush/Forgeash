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
    <section className="py-20 bg-muted/50 dark:bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">BUSINESS IMPACT</h2>
          <h3 className="text-2xl font-semibold text-muted-foreground mb-6">Measurable Results That Matter</h3>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our clients consistently achieve significant improvements in key business metrics through our strategic technology implementations.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div key={index} className="bg-background dark:bg-card rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group professional-glow animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="text-center">
                <div className={`text-6xl font-bold ${metric.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {metric.percentage}
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-3">{metric.title}</h4>
                <p className="text-muted-foreground">{metric.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
