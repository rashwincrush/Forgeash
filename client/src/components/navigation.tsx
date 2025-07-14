import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Atom, Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme-provider";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed w-full top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50 shadow-sm dark:bg-background/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <Atom className="h-8 w-8 text-primary mr-3 animate-pulse" />
              <span className="font-bold text-xl text-foreground">ForgeAsh Technologies</span>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#services" className="text-muted-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors duration-200">Services</a>
              <a href="#expertise" className="text-muted-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors duration-200">Expertise</a>
              <a href="#industries" className="text-muted-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors duration-200">Industries</a>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="text-muted-foreground hover:text-primary"
              >
                {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 professional-glow">
                <a href="#contact">Contact</a>
              </Button>
            </div>
          </div>
          
          <div className="md:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="text-muted-foreground hover:text-primary"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 border-t border-border/50 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#services" className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-primary">Services</a>
            <a href="#expertise" className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-primary">Expertise</a>
            <a href="#industries" className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-primary">Industries</a>
            <a href="#contact" className="block px-3 py-2 text-base font-medium text-primary">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}
