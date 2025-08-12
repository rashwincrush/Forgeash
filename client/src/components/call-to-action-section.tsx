import { Button } from "@/components/ui/button";
import { Handshake, Trophy, Crown, Award, Phone, MessageCircle } from "lucide-react";
import { ContactForm } from "./contact-form";

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
        <div className="subliminal-text prosperity-frequency top-8 left-24">Clients invest in my vision eagerly</div>
        <div className="subliminal-text abundance-flow top-16 right-32">My business attracts unlimited opportunities</div>
        <div className="subliminal-text success-magnetism bottom-24 left-20">Revenue flows to me effortlessly</div>
        <div className="subliminal-text prosperity-frequency bottom-32 right-16">I manifest profitable partnerships</div>
        <div className="subliminal-text abundance-flow top-1/2 left-1/2">My expertise commands premium rates</div>
        
        <div className="mb-12 animate-fade-in">
          <span className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-[var(--executive-gold)]/20 to-[var(--executive-orange)]/20 text-[var(--executive-gold)] text-sm font-bold uppercase tracking-wide backdrop-blur-sm mb-8 professional-glow border border-[var(--executive-gold)]/30">
            TRANSFORM YOUR BUSINESS
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
            Ready to Lead with <span className="text-transparent bg-gradient-to-r from-[var(--executive-gold)] to-[var(--executive-orange)] bg-clip-text whitespace-nowrap">AI Innovation?</span>
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join industry leaders who've achieved extraordinary growth through our strategic AI implementations and cutting-edge technology solutions. Let's discuss how we can do the same for you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <ContactForm />

          <div className="space-y-8 text-left">
            <h3 className="text-3xl font-bold text-white mb-6">Or, Reach Us Directly</h3>
            <a href="tel:+916369126439" className="flex items-center gap-6 p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300">
              <div className="bg-white/10 p-4 rounded-xl border border-white/20">
                  <Phone className="h-8 w-8 text-[var(--executive-sapphire)]" />
              </div>
              <div>
                  <h4 className="text-2xl font-bold">Call Us</h4>
                  <p className="text-lg text-[var(--executive-amethyst)] hover:underline">+91 63691 26439</p>
              </div>
            </a>
            <a href="https://wa.me/916369126439" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300">
              <div className="bg-white/10 p-4 rounded-xl border border-white/20">
                  <MessageCircle className="h-8 w-8 text-[var(--executive-sapphire)]" />
              </div>
              <div>
                  <h4 className="text-2xl font-bold">WhatsApp</h4>
                  <p className="text-lg text-[var(--executive-amethyst)] hover:underline">Chat with us</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
