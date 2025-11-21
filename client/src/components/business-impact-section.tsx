export function BusinessImpactSection() {
  const metrics = [
    {
      percentage: "35%",
      title: "Less time lost to manual work",
      description: "Clients typically reclaim 2535% of their teams time by automating routine tasks and reporting."
    },
    {
      percentage: "2030%",
      title: "Increase in lead quality or conversion",
      description: "Clearer websites and funnels translate into more relevant enquiries and higher close rates."
    },
    {
      percentage: "40%",
      title: "Faster delivery of new features",
      description: "A clean architecture and focused scope mean new ideas ship in weeks, not quarters."
    },
    {
      percentage: "65%",
      title: "Better decision confidence",
      description: "Dashboards and analytics give leadership a single source of truth instead of conflicting spreadsheets."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-[var(--executive-navy-dark)] via-[var(--executive-navy)]/70 to-[var(--executive-navy-dark)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl font-bold text-white mb-6">
            Business <span className="text-transparent bg-gradient-to-r from-[var(--executive-amethyst)] to-[var(--executive-sapphire)] bg-clip-text">outcomes</span> we design for
          </h2>
          <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
            Behind every website or system we build, theres a simple goal: better numbers. More qualified leads, fewer manual hours, faster decisions, and clearer visibility for leadership.
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
