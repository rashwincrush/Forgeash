import { Handshake, Trophy, Crown, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    <section id="contact" className="py-24 bg-gradient-to-br from-[var(--executive-blue)] via-[var(--executive-navy)] to-[var(--executive-charcoal)] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--executive-blue)]/20 to-[var(--executive-purple)]/20 backdrop-blur-3xl"></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Subtle Subliminal Prosperity Affirmations */}
        <div className="subliminal-text prosperity-frequency top-8 left-24">The work I commit to now improves the next quarter</div>
        <div className="subliminal-text abundance-flow top-16 right-32">Strategic projects flow to me at the right time</div>
        <div className="subliminal-text success-magnetism bottom-24 left-20">Each aligned engagement compounds future revenue</div>
        <div className="subliminal-text prosperity-frequency bottom-32 right-16">The right conversations open up bigger opportunities</div>
        <div className="subliminal-text abundance-flow top-1/2 left-1/2">My expertise helps clients move faster with more confidence</div>
        
        <div className="mb-12 animate-fade-in">
          <span className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-[var(--executive-gold)]/20 to-[var(--executive-orange)]/20 text-[var(--executive-gold)] text-sm font-bold uppercase tracking-wide backdrop-blur-sm mb-8 professional-glow border border-[var(--executive-gold)]/30">
            TRANSFORM YOUR NEXT QUARTER
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
            Ready to make your website, data, and AI work together?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Whether it starts with a new site, an AI workflow, or a SaaS MVP, the first step is a focused conversation about your goals, constraints, and timelines. We recommend a realistic path—and you decide how fast to move.
          </p>
          <div className="flex justify-center">
            <Button
              asChild
              className="bg-gradient-to-r from-[var(--executive-amethyst)] to-[var(--executive-sapphire)] text-white luxury-glow shadow-xl px-10 py-3 rounded-xl font-semibold text-lg hover:scale-105 transition-all duration-300 border border-white/20"
            >
              <a href="/contact">Contact Us</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
