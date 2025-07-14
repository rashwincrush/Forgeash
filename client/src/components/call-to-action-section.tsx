import { Button } from "@/components/ui/button";
import { Handshake, Trophy, Crown, Award } from "lucide-react";

export function CallToActionSection() {
  const benefits = [
    {
      icon: Handshake,
      title: "No Obligations",
      subtitle: "Book Today",
      color: "text-primary"
    },
    {
      icon: Trophy,
      title: "Guaranteed Results",
      subtitle: "Or Money Back",
      color: "text-green-400"
    },
    {
      icon: Crown,
      title: "Executive Strategy",
      subtitle: "Custom Roadmap",
      color: "text-purple-400"
    },
    {
      icon: Award,
      title: "Industry Leadership",
      subtitle: "Proven Success",
      color: "text-yellow-400"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary via-blue-800 to-[var(--executive-navy)] dark:from-[var(--executive-navy)] dark:via-[var(--executive-charcoal)] dark:to-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8 animate-fade-in">
          <span className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-primary/20 to-[var(--executive-blue)]/20 text-blue-200 dark:text-blue-300 text-sm font-medium backdrop-blur-sm mb-6 professional-glow">
            LIMITED OPPORTUNITY
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Transform Your Business with Strategic AI
          </h2>
          <p className="text-xl text-slate-300 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
            Join industry leaders who've achieved extraordinary growth through our executive technology solutions.
          </p>
        </div>
        
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 mb-8 professional-glow animate-scale-in">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 mb-8 w-full md:w-auto professional-glow hover-lift">
            Schedule Your Executive Assessment
          </Button>
          
          <div className="grid md:grid-cols-4 gap-6 text-center">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="flex flex-col items-center animate-slide-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <IconComponent className={`${benefit.color} h-8 w-8 mb-2`} />
                  <span className="text-white font-semibold">{benefit.title}</span>
                  <span className="text-slate-300 text-sm">{benefit.subtitle}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
