import { Twitter, Linkedin, Github, MessageCircle, MapPin, Mail, Phone, ArrowRight, Sparkles } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-slate-950 via-blue-950/30 to-slate-950 text-white overflow-hidden">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .glass-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .gradient-text {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>

      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 md:py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-start">
            {/* Brand & Description */}
            <div>
              <div className="flex items-center mb-2 group cursor-pointer">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl blur opacity-40 group-hover:opacity-70 transition-opacity"></div>
                  <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center border border-white/20">
                    <span className="text-xl font-bold">F</span>
                  </div>
                </div>
                <div className="ml-2 flex flex-col">
                  <span className="font-semibold text-base leading-tight">ForgeAsh Technologies</span>
                  <span className="text-xs text-slate-400">Websites · AI · SaaS</span>
                </div>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed mb-3 max-w-xs">
                Studio partner for founders and teams who want high-performance websites, AI systems, and SaaS products that actually move business metrics.
              </p>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-sm font-semibold text-slate-200 tracking-wide mb-2 flex items-center gap-2">
                <div className="h-0.5 w-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
                Services
              </h4>
              <ul className="space-y-1.5 text-sm text-slate-300">
                <li>
                  <a href="/services/websites" className="hover:text-white transition-colors flex items-center gap-1 group">
                    <ArrowRight className="h-3 w-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    <span>High-Performance Websites</span>
                  </a>
                </li>
                <li>
                  <a href="/services/ai-automation" className="hover:text-white transition-colors flex items-center gap-1 group">
                    <ArrowRight className="h-3 w-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    <span>AI Systems &amp; Automation</span>
                  </a>
                </li>
                <li>
                  <a href="/services/saas-mvp-build" className="hover:text-white transition-colors flex items-center gap-1 group">
                    <ArrowRight className="h-3 w-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    <span>SaaS MVP Build</span>
                  </a>
                </li>
                <li>
                  <a href="/services/data-dashboards" className="hover:text-white transition-colors flex items-center gap-1 group">
                    <ArrowRight className="h-3 w-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    <span>Data Dashboards &amp; Automation</span>
                  </a>
                </li>
                <li className="pt-1">
                  <a href="/work" className="hover:text-white transition-colors flex items-center gap-1 group">
                    <ArrowRight className="h-3 w-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    <span>Our Work</span>
                  </a>
                </li>
                <li>
                  <a href="/about" className="hover:text-white transition-colors flex items-center gap-1 group">
                    <ArrowRight className="h-3 w-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    <span>About</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-sm font-semibold text-slate-200 tracking-wide mb-2 flex items-center gap-2">
                <div className="h-0.5 w-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
                Contact
              </h4>
              <div className="space-y-1.5 text-sm text-slate-300">
                <div className="flex items-start gap-2">
                  <MapPin className="h-3.5 w-3.5 mt-0.5 text-purple-300" />
                  <span>Chennai, Tamil Nadu, India</span>
                </div>
                <div className="flex items-start gap-2">
                  <Mail className="h-3.5 w-3.5 mt-0.5 text-blue-300" />
                  <a href="mailto:connect@forgeash.in" className="hover:text-white transition-colors">
                    connect@forgeash.in
                  </a>
                </div>
                <div className="flex items-start gap-2">
                  <Phone className="h-3.5 w-3.5 mt-0.5 text-green-300" />
                  <a href="tel:+916369126439" className="hover:text-white transition-colors">
                    +91 63691 26439
                  </a>
                </div>
                <div className="flex items-start gap-2">
                  <MessageCircle className="h-3.5 w-3.5 mt-0.5 text-[#25D366]" />
                  <a
                    href="https://wa.me/916369126439"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
                <div className="flex items-center gap-2 pt-1">
                  <a
                    href="#"
                    aria-label="LinkedIn"
                    className="h-8 w-8 rounded-lg glass-card flex items-center justify-center text-slate-300 hover:text-white hover:border-purple-500/50 transition-all"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a
                    href="#"
                    aria-label="Twitter"
                    className="h-8 w-8 rounded-lg glass-card flex items-center justify-center text-slate-300 hover:text-white hover:border-blue-500/50 transition-all"
                  >
                    <Twitter className="h-4 w-4" />
                  </a>
                  <a
                    href="#"
                    aria-label="GitHub"
                    className="h-8 w-8 rounded-lg glass-card flex items-center justify-center text-slate-300 hover:text-white hover:border-white/50 transition-all"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 text-xs md:text-sm text-slate-400">
            <p>© 2024 ForgeAsh Technologies. All rights reserved.</p>
            <div className="flex flex-wrap items-center gap-4 md:ml-4">
              <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="/cookies" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}