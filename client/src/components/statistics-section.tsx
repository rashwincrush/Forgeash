import { useEffect, useState } from "react";

export function StatisticsSection() {
  const [projectsCount, setProjectsCount] = useState(0);
  const [satisfactionCount, setSatisfactionCount] = useState(0);

  useEffect(() => {
    const projectsTimer = setInterval(() => {
      setProjectsCount(prev => {
        if (prev < 10) return prev + 1;
        clearInterval(projectsTimer);
        return 10;
      });
    }, 100);

    const satisfactionTimer = setInterval(() => {
      setSatisfactionCount(prev => {
        if (prev < 98) return prev + 1;
        clearInterval(satisfactionTimer);
        return 98;
      });
    }, 20);

    return () => {
      clearInterval(projectsTimer);
      clearInterval(satisfactionTimer);
    };
  }, []);

  return (
    <section className="py-24 bg-gradient-to-br from-background via-muted/30 to-background dark:from-background dark:via-muted/10 dark:to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl font-bold text-foreground mb-6">
            Driving <span className="text-transparent bg-gradient-to-r from-[var(--executive-blue)] to-[var(--executive-purple)] bg-clip-text">Excellence</span> Through Innovation
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Our proven track record demonstrates consistent delivery of transformative AI solutions that generate measurable business impact across diverse industries.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--executive-blue)] to-[var(--executive-purple)] rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
            <div className="relative text-center p-10 bg-gradient-to-br from-white/80 to-white/40 dark:from-card/80 dark:to-card/40 backdrop-blur-xl rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3 professional-glow border border-white/20">
              <div className="text-7xl font-bold text-transparent bg-gradient-to-r from-[var(--executive-blue)] to-[var(--executive-purple)] bg-clip-text mb-4 animate-counter">
                {projectsCount}+
              </div>
              <div className="text-lg font-semibold text-foreground mb-2">
                PROJECTS COMPLETED
              </div>
              <div className="text-sm text-muted-foreground">
                Successfully delivered across multiple industries
              </div>
            </div>
          </div>
          
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--executive-green)] to-[var(--executive-orange)] rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
            <div className="relative text-center p-10 bg-gradient-to-br from-white/80 to-white/40 dark:from-card/80 dark:to-card/40 backdrop-blur-xl rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3 professional-glow border border-white/20">
              <div className="text-7xl font-bold text-transparent bg-gradient-to-r from-[var(--executive-green)] to-[var(--executive-orange)] bg-clip-text mb-4 animate-counter">
                {satisfactionCount}%
              </div>
              <div className="text-lg font-semibold text-foreground mb-2">
                CLIENT SATISFACTION
              </div>
              <div className="text-sm text-muted-foreground">
                Consistently exceeding expectations
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
