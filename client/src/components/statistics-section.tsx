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
    <section className="py-20 bg-background dark:bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left animate-slide-in-left">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Proven Results That Drive{" "}
              <span className="text-primary">Success</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Our track record speaks for itself. We've helped businesses across Chennai and beyond achieve remarkable growth through strategic AI implementation.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8 animate-slide-in-right">
            <div className="text-center p-6 bg-gradient-to-br from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 professional-glow">
              <div className="text-5xl font-bold text-primary mb-2 animate-counter">
                {projectsCount}+
              </div>
              <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                Projects Completed
              </div>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-[var(--executive-green)]/10 to-[var(--executive-green)]/5 dark:from-[var(--executive-green)]/20 dark:to-[var(--executive-green)]/10 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 professional-glow">
              <div className="text-5xl font-bold text-[var(--executive-green)] mb-2 animate-counter">
                {satisfactionCount}%
              </div>
              <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                Client Satisfaction
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
