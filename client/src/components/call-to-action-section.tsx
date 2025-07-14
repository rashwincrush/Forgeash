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
    <section id="contact" className="py-24 bg-gradient-to-br from-[var(--executive-blue)] via-[var(--executive-navy)] to-[var(--executive-charcoal)] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--executive-blue)]/20 to-[var(--executive-purple)]/20 backdrop-blur-3xl"></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Final Wealth Manifestation Programming */}
        <div className="subliminal-text prosperity-frequency top-8 left-24">Clients invest crores in my vision eagerly</div>
        <div className="subliminal-text abundance-flow top-16 right-32">My business attracts billion-dollar opportunities</div>
        <div className="subliminal-text success-magnetism bottom-24 left-20">Unlimited wealth flows to me effortlessly</div>
        <div className="subliminal-text prosperity-frequency bottom-32 right-16">I manifest Fortune 500 partnerships</div>
        <div className="subliminal-text abundance-flow top-1/2 left-1/2">My expertise commands crores in premium rates</div>
        
        <div className="mb-12 animate-fade-in">
          <span className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-[var(--executive-gold)]/20 to-[var(--executive-orange)]/20 text-[var(--executive-gold)] text-sm font-bold uppercase tracking-wide backdrop-blur-sm mb-8 professional-glow border border-[var(--executive-gold)]/30">
            TRANSFORM YOUR BUSINESS
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
            Ready to Lead with <span className="professional-gradient-text">AI Innovation</span>?
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join industry leaders who've achieved extraordinary growth through our strategic AI implementations and cutting-edge technology solutions.
          </p>
        </div>
        
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--executive-gold)] to-[var(--executive-orange)] rounded-3xl blur opacity-30"></div>
          <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-12 mb-12 professional-glow border border-white/20 animate-scale-in">
            <Button size="lg" className="professional-gradient text-white hover:opacity-90 hover:scale-105 mb-12 px-12 py-6 text-xl font-bold executive-shadow">
              Schedule Your Executive Consultation
            </Button>
            
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div key={index} className="flex flex-col items-center group animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="w-16 h-16 professional-gradient rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg executive-shadow">
                      <IconComponent className="text-white h-8 w-8" />
                    </div>
                    <span className="text-white font-bold text-lg mb-2">{benefit.title}</span>
                    <span className="text-white/70 text-sm">{benefit.subtitle}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        
        <div className="text-center animate-fade-in">
          <p className="text-white/80 text-lg mb-4">
            📞 <span className="font-semibold">Call Now:</span> +91 XXX XXX XXXX
          </p>
          <p className="text-white/80 text-lg">
            📧 <span className="font-semibold">Email:</span> info@forgeash.com
          </p>
        </div>
      </div>
    </section>
  );
}
