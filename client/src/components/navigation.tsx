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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="w-12 h-12 bg-gradient-to-r from-[var(--executive-blue)] to-[var(--executive-purple)] rounded-xl flex items-center justify-center mr-3 shadow-lg p-2">
                <img 
                  src={logoPath} 
                  alt="ForgeAsh Technologies" 
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-bold text-xl text-foreground dark:text-white">ForgeAsh Technologies</span>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="#services" className="text-muted-foreground dark:text-white/80 hover:text-[var(--executive-blue)] dark:hover:text-[var(--executive-gold)] px-4 py-2 text-sm font-semibold transition-colors duration-200 hover:bg-white/50 dark:hover:bg-white/10 rounded-lg">Services</a>
              <a href="#expertise" className="text-muted-foreground dark:text-white/80 hover:text-[var(--executive-blue)] dark:hover:text-[var(--executive-gold)] px-4 py-2 text-sm font-semibold transition-colors duration-200 hover:bg-white/50 dark:hover:bg-white/10 rounded-lg">Expertise</a>
              <a href="#industries" className="text-muted-foreground dark:text-white/80 hover:text-[var(--executive-blue)] dark:hover:text-[var(--executive-gold)] px-4 py-2 text-sm font-semibold transition-colors duration-200 hover:bg-white/50 dark:hover:bg-white/10 rounded-lg">Industries</a>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="text-muted-foreground dark:text-white/80 hover:text-[var(--executive-blue)] dark:hover:text-[var(--executive-gold)] hover:bg-white/50 dark:hover:bg-white/10"
              >
                {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
              <Button asChild className="bg-gradient-to-r from-[var(--executive-navy)] to-[var(--executive-blue)] text-white hover:from-[var(--executive-navy-light)] hover:to-[var(--executive-blue)] professional-glow shadow-lg px-6 py-2">
                <a href="#contact">Contact Us</a>
              </Button>
            </div>
          </div>
          
          <div className="md:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="text-muted-foreground dark:text-white/80 hover:text-[var(--executive-blue)] dark:hover:text-[var(--executive-gold)]"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-muted-foreground dark:text-white/80"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-[var(--executive-navy)]/95 border-t border-white/20 dark:border-white/10 backdrop-blur-xl">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#services" className="block px-4 py-3 text-base font-medium text-muted-foreground dark:text-white/80 hover:text-[var(--executive-blue)] dark:hover:text-[var(--executive-gold)] hover:bg-white/50 dark:hover:bg-white/10 rounded-lg">Services</a>
            <a href="#expertise" className="block px-4 py-3 text-base font-medium text-muted-foreground dark:text-white/80 hover:text-[var(--executive-blue)] dark:hover:text-[var(--executive-gold)] hover:bg-white/50 dark:hover:bg-white/10 rounded-lg">Expertise</a>
            <a href="#industries" className="block px-4 py-3 text-base font-medium text-muted-foreground dark:text-white/80 hover:text-[var(--executive-blue)] dark:hover:text-[var(--executive-gold)] hover:bg-white/50 dark:hover:bg-white/10 rounded-lg">Industries</a>
            <a href="#contact" className="block px-4 py-3 text-base font-medium text-[var(--executive-blue)] dark:text-[var(--executive-gold)] font-semibold">Contact Us</a>
          </div>
        </div>
      )}
    </nav>
  );
}
