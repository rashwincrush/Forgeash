import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, MessageCircle, DollarSign, PoundSterling, IndianRupee } from "lucide-react";
import logoPath from "@assets/Image_02-05-25_at_10.52_AM-removebg-preview_1752479361775.png";

const services = [
  {
    title: "High-Performance Websites",
    href: "/services/websites",
    description:
      "Modern, conversion-focused business sites for clinics, institutes, coaches, and service brands.",
  },
  {
    title: "AI Systems & Automation",
    href: "/services/ai-automation",
    description:
      "Automate workflows, reporting, and routine tasks so your team can focus on high-value work.",
  },
  {
    title: "SaaS MVP Build",
    href: "/services/saas-mvp-build",
    description:
      "Launch a focused, revenue-ready SaaS MVP in 8–12 weeks with clean UX and solid foundations.",
  },
  {
    title: "Data Dashboards & Automation",
    href: "/services/data-dashboards",
    description:
      "Real-time KPIs and automated reporting that replace ad-hoc spreadsheets and manual updates.",
  },
];

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 bg-[var(--executive-navy)]/95 backdrop-blur-xl border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-20 py-4">
          <Link href="/" className="flex items-center cursor-pointer">
            <div className="flex-shrink-0 flex items-center group">
              {/* Logo with rotating currency symbols */}
              <div className="relative w-14 h-14 mr-4">
  <div className="w-full h-full bg-gradient-to-br from-[var(--executive-amethyst)] to-[var(--executive-sapphire)] rounded-2xl flex items-center justify-center shadow-xl luxury-glow p-2.5 group-hover:shadow-2xl transition-all duration-300 border border-white/20">
    <img 
      src={logoPath} 
      alt="ForgeAsh Technologies" 
      className="w-full h-full object-contain filter brightness-110"
    />
  </div>
</div>
              <div className="flex flex-col">
                <span className="font-bold text-xl text-transparent bg-gradient-to-r from-white to-[var(--executive-silver)] bg-clip-text leading-tight">
                  ForgeAsh Technologies
                </span>
                <span className="text-xs text-[var(--executive-silver)]/80 font-medium tracking-wide">
                  AI Solutions & Innovation
                </span>
              </div>
            </div>
          </Link>
          
          <div className="hidden md:block">
            <div className="ml-12 flex items-center space-x-6">
              <Link
                href="/"
                className="relative text-[var(--executive-silver)] hover:text-white px-5 py-3 text-sm font-semibold transition-all duration-300 hover:bg-white/5 rounded-xl group"
              >
                <span className="relative z-10">Home</span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[var(--executive-amethyst)] to-[var(--executive-sapphire)] group-hover:w-full transition-all duration-300"></div>
              </Link>

              <div className="relative group">
                <Link
                  href="/services"
                  aria-haspopup="true"
                  aria-label="Open services menu"
                  className="relative text-[var(--executive-silver)] hover:text-white px-5 py-3 text-sm font-semibold transition-all duration-300 hover:bg-white/5 rounded-xl group"
                >
                  <span className="relative z-10">Services</span>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[var(--executive-amethyst)] to-[var(--executive-sapphire)] group-hover:w-full transition-all duration-300"></div>
                </Link>
                <div className="absolute left-0 mt-3 w-[420px] bg-[var(--executive-navy)] text-[var(--executive-silver)] rounded-2xl shadow-2xl border border-white/15 hidden group-hover:block group-focus-within:block">
                  <div className="p-4 grid grid-cols-1 gap-2">
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="block rounded-xl px-4 py-3 hover:bg-white/5 transition-colors"
                      >
                        <div className="text-sm font-semibold text-white">{service.title}</div>
                        <div className="text-xs text-[var(--executive-silver)] mt-1 leading-snug">{service.description}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link
                href="/work"
                className="relative text-[var(--executive-silver)] hover:text-white px-5 py-3 text-sm font-semibold transition-all duration-300 hover:bg-white/5 rounded-xl group"
              >
                <span className="relative z-10">Our Work</span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[var(--executive-amethyst)] to-[var(--executive-sapphire)] group-hover:w-full transition-all duration-300"></div>
              </Link>

              <Link
                href="/about"
                className="relative text-[var(--executive-silver)] hover:text-white px-5 py-3 text-sm font-semibold transition-all duration-300 hover:bg-white/5 rounded-xl group"
              >
                <span className="relative z-10">About</span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[var(--executive-amethyst)] to-[var(--executive-sapphire)] group-hover:w-full transition-all duration-300"></div>
              </Link>

              <div className="w-px h-6 bg-white/20"></div>

              <Button
                asChild
                className="bg-gradient-to-r from-[var(--executive-amethyst)] to-[var(--executive-sapphire)] text-white luxury-glow shadow-xl px-8 py-3 rounded-xl font-semibold text-sm hover:scale-105 transition-all duration-300 border border-white/20"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>

              <Button
                asChild
                variant="ghost"
                size="icon"
                className="text-[var(--executive-silver)] hover:text-white hover:bg-white/10 w-10 h-10 rounded-xl luxury-glow border border-white/15"
              >
                <a
                  href="https://wa.me/916369126439"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Chat on WhatsApp"
                >
                  <MessageCircle className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
          
          <div className="md:hidden flex items-center space-x-3">

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[var(--executive-silver)] hover:text-white hover:bg-white/10 w-10 h-10 rounded-xl luxury-glow"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[var(--executive-navy)]/95 border-t border-white/10 backdrop-blur-xl shadow-2xl">
          <div className="px-4 pt-4 pb-6 space-y-3">
            <Link
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className="block px-6 py-4 text-base font-semibold text-[var(--executive-silver)] hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300 border border-transparent hover:border-white/20"
            >
              Home
            </Link>
            <Link
              href="/services"
              onClick={() => setIsMenuOpen(false)}
              className="block px-6 py-4 text-base font-semibold text-[var(--executive-silver)] hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300 border border-transparent hover:border-white/20"
            >
              Services
            </Link>
            <Link
              href="/work"
              onClick={() => setIsMenuOpen(false)}
              className="block px-6 py-4 text-base font-semibold text-[var(--executive-silver)] hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300 border border-transparent hover:border-white/20"
            >
              Our Work
            </Link>
            <Link
              href="/about"
              onClick={() => setIsMenuOpen(false)}
              className="block px-6 py-4 text-base font-semibold text-[var(--executive-silver)] hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300 border border-transparent hover:border-white/20"
            >
              About
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="block px-6 py-4 text-base font-bold text-white bg-gradient-to-r from-[var(--executive-amethyst)] to-[var(--executive-sapphire)] rounded-xl transition-all duration-300 shadow-lg luxury-glow text-center"
            >
              Contact Us
            </Link>
            <a
              href="https://wa.me/916369126439"
              target="_blank"
              rel="noreferrer"
              onClick={() => setIsMenuOpen(false)}
              className="block px-6 py-4 text-base font-semibold text-[var(--executive-silver)] hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300 border border-transparent hover:border-white/20 text-center"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
