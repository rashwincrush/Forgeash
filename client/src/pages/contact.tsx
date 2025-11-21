import { useEffect } from "react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/contact-form";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { BOOKING_URL } from "@/config";
import { trackEvent } from "@/lib/analytics";
import { applySeo, applyBreadcrumbJsonLd } from "@/lib/seo";

export default function ContactPage() {
  useEffect(() => {
    applySeo({
      title: "Contact ForgeAsh – Web, AI & SaaS Studio in Chennai, India",
      description:
        "Contact ForgeAsh Technologies in Chennai, Tamil Nadu, India to discuss high-performance websites, AI automation, SaaS MVPs and data dashboards. Enquiries go directly to our team.",
      keywords: [
        "contact ForgeAsh",
        "web development company in Chennai contact",
        "AI automation Chennai contact",
        "SaaS development Chennai contact",
      ],
      canonicalPath: "/contact",
    });
    applyBreadcrumbJsonLd("contact", [
      { name: "Home", path: "/" },
      { name: "Contact", path: "/contact" },
    ]);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--executive-navy-dark)] via-[var(--executive-navy)]/70 to-[var(--executive-navy-dark)] text-white">
      <Navigation />
      <main className="pt-28 pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <section className="space-y-4 text-center">
            <p className="text-xs font-semibold tracking-[0.2em] text-white/50 uppercase">
              Contact
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-center text-transparent bg-gradient-to-r from-[var(--executive-amethyst)] via-[var(--executive-gold)] to-[var(--executive-sapphire)] bg-clip-text">
              Let&apos;s talk about your project
            </h1>
            <p className="text-lg md:text-xl text-center text-white/80 max-w-3xl mx-auto">
              Share a bit about what you&apos;re working on and we&apos;ll get back within one business day with a clear
              next step—no pressure, no generic sales pitch.
            </p>
          </section>

          <section className="grid gap-10 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] items-start">
            <ContactForm />

            <div className="space-y-6">
              <div className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-2xl p-6 md:p-7 space-y-4">
                <h3 className="text-lg md:text-xl font-semibold">Prefer to skip the form?</h3>
                <p className="text-sm md:text-base text-white/75">
                  If you already know you want to talk through ideas or timelines, you can go straight to booking a
                  slot for a short call.
                </p>
                <Button
                  asChild
                  size="lg"
                  className="w-full bg-gradient-to-r from-[var(--executive-amethyst)] to-[var(--executive-sapphire)] text-white font-semibold rounded-xl border border-white/20 shadow-lg"
                >
                  <a
                    href={BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackEvent("cta_click", {
                        location: "contact",
                        label: "book_strategy_call",
                      })
                    }
                    className="flex items-center justify-center"
                  >
                    Book an Appointment
                  </a>
                </Button>
              </div>

              <div className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-2xl p-6 md:p-7 space-y-5">
                <h3 className="text-lg md:text-xl font-semibold">Other ways to reach us</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-white/10 p-3 rounded-xl border border-white/20">
                      <Mail className="h-6 w-6 text-[var(--executive-sapphire)]" />
                    </div>
                    <div>
                      <h4 className="text-base md:text-lg font-semibold">Email</h4>
                      <p className="text-white/70 text-sm md:text-base">General inquiries &amp; project outlines</p>
                      <a
                        href="mailto:connect@forgeash.in"
                        className="text-sm md:text-base text-[var(--executive-amethyst)] hover:underline"
                      >
                        connect@forgeash.in
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-white/10 p-3 rounded-xl border border-white/20">
                      <Phone className="h-6 w-6 text-[var(--executive-sapphire)]" />
                    </div>
                    <div>
                      <h4 className="text-base md:text-lg font-semibold">Phone</h4>
                      <p className="text-white/70 text-sm md:text-base">Mon–Fri, 9am–5pm IST</p>
                      <a
                        href="tel:+916369126439"
                        className="text-sm md:text-base text-[var(--executive-amethyst)] hover:underline"
                      >
                        +91 63691 26439
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-white/10 p-3 rounded-xl border border-white/20">
                      <MessageCircle className="h-6 w-6 text-[var(--executive-sapphire)]" />
                    </div>
                    <div>
                      <h4 className="text-base md:text-lg font-semibold">WhatsApp</h4>
                      <p className="text-white/70 text-sm md:text-base">Quick questions &amp; follow-ups</p>
                      <a
                        href="https://wa.me/916369126439"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm md:text-base text-[var(--executive-amethyst)] hover:underline"
                      >
                        Chat on WhatsApp
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-white/10 p-3 rounded-xl border border-white/20">
                      <MapPin className="h-6 w-6 text-[var(--executive-sapphire)]" />
                    </div>
                    <div>
                      <h4 className="text-base md:text-lg font-semibold">Office</h4>
                      <p className="text-white/70 text-sm md:text-base">Registered office</p>
                      <p className="text-sm md:text-base text-[var(--executive-amethyst)]">Chennai, Tamil Nadu</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
