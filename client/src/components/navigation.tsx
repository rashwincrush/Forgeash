import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import logoPath from "@assets/Image_02-05-25_at_10.52_AM-removebg-preview_1752479361775.png";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed w-full top-0 z-50 bg-white/90 dark:bg-[var(--executive-navy)]/95 backdrop-blur-xl border-b border-white/20 dark:border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-20 py-4">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center group">
              <div className="w-14 h-14 professional-gradient rounded-2xl flex items-center justify-center mr-4 shadow-xl executive-shadow p-2.5 group-hover:shadow-2xl transition-all duration-300 border border-white/20">
                <img 
                  src={logoPath} 
                  alt="ForgeAsh Technologies" 
                  className="w-full h-full object-contain filter brightness-110"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl professional-gradient-text leading-tight">
                  ForgeAsh Technologies
                </span>
                <span className="text-xs text-muted-foreground dark:text-white/60 font-medium tracking-wide">
                  AI Solutions & Innovation
                </span>
              </div>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-12 flex items-center space-x-6">
              <a href="#services" className="relative text-muted-foreground dark:text-white/80 hover:text-[var(--executive-accent)] px-5 py-3 text-sm font-semibold transition-all duration-300 hover:bg-white/50 dark:hover:bg-white/10 rounded-xl group">
                <span className="relative z-10">Services</span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 professional-gradient group-hover:w-full transition-all duration-300"></div>
              </a>
              <a href="#expertise" className="relative text-muted-foreground dark:text-white/80 hover:text-[var(--executive-accent)] px-5 py-3 text-sm font-semibold transition-all duration-300 hover:bg-white/50 dark:hover:bg-white/10 rounded-xl group">
                <span className="relative z-10">Expertise</span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 professional-gradient group-hover:w-full transition-all duration-300"></div>
              </a>
              <a href="#industries" className="relative text-muted-foreground dark:text-white/80 hover:text-[var(--executive-accent)] px-5 py-3 text-sm font-semibold transition-all duration-300 hover:bg-white/50 dark:hover:bg-white/10 rounded-xl group">
                <span className="relative z-10">Industries</span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 professional-gradient group-hover:w-full transition-all duration-300"></div>
              </a>
              <div className="w-px h-6 bg-white/20 dark:bg-white/10"></div>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="text-muted-foreground dark:text-white/80 hover:text-[var(--executive-blue)] dark:hover:text-[var(--executive-gold)] hover:bg-white/50 dark:hover:bg-white/10 w-10 h-10 rounded-xl professional-glow"
              >
                {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
              <Button asChild className="professional-gradient text-white hover:opacity-90 executive-shadow px-8 py-3 rounded-xl font-semibold text-sm hover:scale-105 transition-all duration-300 border border-white/20">
                <a href="#contact">Contact Us</a>
              </Button>
            </div>
          </div>
          
          <div className="md:hidden flex items-center space-x-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="text-muted-foreground dark:text-white/80 hover:text-[var(--executive-blue)] dark:hover:text-[var(--executive-gold)] hover:bg-white/50 dark:hover:bg-white/10 w-10 h-10 rounded-xl professional-glow"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-muted-foreground dark:text-white/80 hover:text-[var(--executive-blue)] dark:hover:text-[var(--executive-gold)] hover:bg-white/50 dark:hover:bg-white/10 w-10 h-10 rounded-xl professional-glow"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-[var(--executive-navy)]/95 border-t border-white/20 dark:border-white/10 backdrop-blur-xl shadow-2xl">
          <div className="px-4 pt-4 pb-6 space-y-3">
            <a href="#services" onClick={() => setIsMenuOpen(false)} className="block px-6 py-4 text-base font-semibold text-muted-foreground dark:text-white/80 hover:text-[var(--executive-blue)] dark:hover:text-[var(--executive-gold)] hover:bg-white/50 dark:hover:bg-white/10 rounded-xl transition-all duration-300 border border-transparent hover:border-white/20">
              Services
            </a>
            <a href="#expertise" onClick={() => setIsMenuOpen(false)} className="block px-6 py-4 text-base font-semibold text-muted-foreground dark:text-white/80 hover:text-[var(--executive-blue)] dark:hover:text-[var(--executive-gold)] hover:bg-white/50 dark:hover:bg-white/10 rounded-xl transition-all duration-300 border border-transparent hover:border-white/20">
              Expertise
            </a>
            <a href="#industries" onClick={() => setIsMenuOpen(false)} className="block px-6 py-4 text-base font-semibold text-muted-foreground dark:text-white/80 hover:text-[var(--executive-blue)] dark:hover:text-[var(--executive-gold)] hover:bg-white/50 dark:hover:bg-white/10 rounded-xl transition-all duration-300 border border-transparent hover:border-white/20">
              Industries
            </a>
            <div className="h-px bg-white/20 dark:bg-white/10 my-2"></div>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block px-6 py-4 text-base font-bold text-white bg-gradient-to-r from-[var(--executive-navy)] to-[var(--executive-blue)] hover:from-[var(--executive-navy-light)] hover:to-[var(--executive-blue)] rounded-xl transition-all duration-300 shadow-lg professional-glow text-center">
              Contact Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
