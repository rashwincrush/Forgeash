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
    <section className="py-24 bg-gradient-to-br from-[var(--executive-navy-dark)] via-[var(--executive-navy)]/70 to-[var(--executive-navy-dark)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Subtle Subliminal Success Affirmations */}
        <div className="subliminal-text prosperity-frequency top-16 left-12">Success multiplies through my work</div>
        <div className="subliminal-text abundance-flow top-24 right-20">I create value that transforms businesses</div>
        <div className="subliminal-text success-magnetism bottom-20 left-16">My solutions generate abundant returns</div>
        <div className="subliminal-text prosperity-frequency bottom-28 right-28">Excellence flows through every project</div>
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl font-bold text-white mb-6">
            Driving <span className="text-transparent bg-gradient-to-r from-[var(--executive-amethyst)] to-[var(--executive-sapphire)] bg-clip-text">Excellence</span> Through Innovation
          </h2>
          <p className="text-xl text-[var(--executive-silver)] max-w-4xl mx-auto leading-relaxed">
            Our proven track record demonstrates consistent delivery of transformative AI solutions that generate measurable business impact across diverse industries.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--executive-amethyst)] to-[var(--executive-sapphire)] rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
            <div className="relative text-center p-10 bg-gradient-to-br from-[var(--executive-navy)]/50 to-[var(--executive-charcoal)]/50 backdrop-blur-xl rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3 luxury-glow border border-white/20">
              <div className="text-7xl font-bold text-transparent bg-gradient-to-r from-[var(--executive-amethyst)] to-[var(--executive-sapphire)] bg-clip-text mb-4 animate-counter">
                {projectsCount}+
              </div>
              <div className="text-lg font-semibold text-white mb-2">
                PROJECTS COMPLETED
              </div>
              <div className="text-sm text-[var(--executive-silver)]">
                Successfully delivered across multiple industries
              </div>
            </div>
          </div>
          
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--executive-gold)] to-[var(--executive-silver)] rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
            <div className="relative text-center p-10 bg-gradient-to-br from-[var(--executive-navy)]/50 to-[var(--executive-charcoal)]/50 backdrop-blur-xl rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3 luxury-glow border border-white/20">
              <div className="text-7xl font-bold text-transparent bg-gradient-to-r from-[var(--executive-gold)] to-[var(--executive-silver)] bg-clip-text mb-4 animate-counter">
                {satisfactionCount}%
              </div>
              <div className="text-lg font-semibold text-white mb-2">
                CLIENT SATISFACTION
              </div>
              <div className="text-sm text-[var(--executive-silver)]">
                Consistently exceeding expectations
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
