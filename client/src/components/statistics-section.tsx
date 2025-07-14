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
        {/* Crore-Focused Subliminal Wealth Programming */}
        <div className="subliminal-text prosperity-frequency top-16 left-12">Every project generates crores in value</div>
        <div className="subliminal-text abundance-flow top-24 right-20">I create billion-dollar transformations</div>
        <div className="subliminal-text success-magnetism bottom-20 left-16">My solutions generate unlimited wealth</div>
        <div className="subliminal-text prosperity-frequency bottom-28 right-28">Crores flow through every interaction</div>
        <div className="subliminal-text abundance-flow top-1/3 left-2/3">I am a magnet for millionaire clients</div>
        <div className="subliminal-text success-magnetism top-2/3 right-1/3">My statistics attract unlimited prosperity</div>
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl font-bold text-foreground mb-6">
            Driving <span className="premium-gradient-text">Excellence</span> Through Innovation
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Our proven track record demonstrates consistent delivery of transformative AI solutions that generate measurable business impact across diverse industries.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="group relative">
            <div className="absolute inset-0 subtle-gradient rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
            <div className="relative text-center p-10 premium-card shadow-2xl hover:shadow-3xl transition-all duration-500 animate-scale-in">
              <div className="text-7xl font-bold premium-gradient-text mb-4 animate-counter">
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
            <div className="absolute inset-0 subtle-gradient rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
            <div className="relative text-center p-10 premium-card shadow-2xl hover:shadow-3xl transition-all duration-500 animate-scale-in">
              <div className="text-7xl font-bold premium-gradient-text mb-4 animate-counter">
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
