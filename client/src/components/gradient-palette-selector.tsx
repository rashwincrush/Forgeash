import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Palette, Check } from "lucide-react";

interface GradientPalette {
  id: string;
  name: string;
  description: string;
  colors: {
    primary: string;
    primaryLight: string;
    secondary: string;
    secondaryLight: string;
    accent: string;
  };
  preview: string;
}

const gradientPalettes: GradientPalette[] = [
  {
    id: "deep-ocean",
    name: "Deep Ocean Blue",
    description: "Professional corporate blue with sophisticated depth",
    colors: {
      primary: "hsl(210, 100%, 50%)",
      primaryLight: "hsl(210, 100%, 65%)",
      secondary: "hsl(220, 90%, 60%)",
      secondaryLight: "hsl(220, 90%, 75%)",
      accent: "hsl(200, 100%, 45%)"
    },
    preview: "linear-gradient(135deg, hsl(210, 100%, 50%) 0%, hsl(210, 100%, 65%) 100%)"
  },
  {
    id: "royal-purple",
    name: "Royal Purple",
    description: "Luxurious purple with elegant sophistication",
    colors: {
      primary: "hsl(270, 80%, 55%)",
      primaryLight: "hsl(270, 80%, 70%)",
      secondary: "hsl(280, 70%, 60%)",
      secondaryLight: "hsl(280, 70%, 75%)",
      accent: "hsl(260, 90%, 50%)"
    },
    preview: "linear-gradient(135deg, hsl(270, 80%, 55%) 0%, hsl(270, 80%, 70%) 100%)"
  },
  {
    id: "emerald-forest",
    name: "Emerald Forest",
    description: "Rich green with natural premium feeling",
    colors: {
      primary: "hsl(160, 70%, 45%)",
      primaryLight: "hsl(160, 70%, 60%)",
      secondary: "hsl(150, 80%, 50%)",
      secondaryLight: "hsl(150, 80%, 65%)",
      accent: "hsl(170, 90%, 40%)"
    },
    preview: "linear-gradient(135deg, hsl(160, 70%, 45%) 0%, hsl(160, 70%, 60%) 100%)"
  },
  {
    id: "sunset-orange",
    name: "Sunset Orange",
    description: "Warm orange with energetic vibrance",
    colors: {
      primary: "hsl(25, 90%, 55%)",
      primaryLight: "hsl(25, 90%, 70%)",
      secondary: "hsl(35, 85%, 60%)",
      secondaryLight: "hsl(35, 85%, 75%)",
      accent: "hsl(15, 95%, 50%)"
    },
    preview: "linear-gradient(135deg, hsl(25, 90%, 55%) 0%, hsl(25, 90%, 70%) 100%)"
  },
  {
    id: "midnight-violet",
    name: "Midnight Violet",
    description: "Deep violet with mysterious elegance",
    colors: {
      primary: "hsl(250, 70%, 60%)",
      primaryLight: "hsl(250, 70%, 75%)",
      secondary: "hsl(260, 80%, 65%)",
      secondaryLight: "hsl(260, 80%, 80%)",
      accent: "hsl(240, 90%, 55%)"
    },
    preview: "linear-gradient(135deg, hsl(250, 70%, 60%) 0%, hsl(250, 70%, 75%) 100%)"
  },
  {
    id: "rose-gold",
    name: "Rose Gold",
    description: "Elegant rose gold with luxury appeal",
    colors: {
      primary: "hsl(340, 60%, 60%)",
      primaryLight: "hsl(340, 60%, 75%)",
      secondary: "hsl(350, 70%, 65%)",
      secondaryLight: "hsl(350, 70%, 80%)",
      accent: "hsl(330, 80%, 55%)"
    },
    preview: "linear-gradient(135deg, hsl(340, 60%, 60%) 0%, hsl(340, 60%, 75%) 100%)"
  }
];

export function GradientPaletteSelector() {
  const [selectedPalette, setSelectedPalette] = useState<string>("deep-ocean");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const applyPalette = (palette: GradientPalette) => {
    setIsAnimating(true);
    
    // Update CSS variables
    const root = document.documentElement;
    root.style.setProperty('--professional-primary', palette.colors.primary);
    root.style.setProperty('--professional-primary-light', palette.colors.primaryLight);
    root.style.setProperty('--professional-secondary', palette.colors.secondary);
    root.style.setProperty('--professional-secondary-light', palette.colors.secondaryLight);
    root.style.setProperty('--professional-accent', palette.colors.accent);
    
    // Add transition classes temporarily
    document.body.classList.add('palette-transition');
    
    setTimeout(() => {
      setIsAnimating(false);
      document.body.classList.remove('palette-transition');
    }, 800);
  };

  const handlePaletteSelect = (paletteId: string) => {
    const palette = gradientPalettes.find(p => p.id === paletteId);
    if (palette) {
      setSelectedPalette(paletteId);
      applyPalette(palette);
      setIsOpen(false);
    }
  };

  const selectedPaletteData = gradientPalettes.find(p => p.id === selectedPalette);

  return (
    <>
      {/* Floating Palette Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full primary-gradient text-white hover:opacity-90 hover:scale-110 transition-all duration-300 professional-shadow border-2 border-white/20"
          aria-label="Open gradient palette selector"
        >
          <Palette className="h-6 w-6" />
        </Button>
      </div>

      {/* Palette Selector Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 flex items-center justify-center p-4">
          <div className="w-full max-w-4xl max-h-[80vh] overflow-y-auto bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-2 border-white/20 shadow-2xl rounded-xl">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-foreground">
                    <span className="primary-gradient-text">Gradient Palette</span> Selector
                  </h2>
                  <p className="text-muted-foreground mt-1">
                    Choose your perfect color theme with live preview
                  </p>
                </div>
                <Button
                  variant="ghost"
                  onClick={() => setIsOpen(false)}
                  className="text-muted-foreground hover:text-foreground"
                >
                  ✕
                </Button>
              </div>

              {/* Current Selection Info */}
              <div className="mb-6 p-4 rounded-xl border-2 border-white/20 bg-white/50 dark:bg-gray-800/50">
                <div className="flex items-center gap-4">
                  <div 
                    className="w-16 h-16 rounded-xl shadow-lg border-2 border-white/30"
                    style={{ background: selectedPaletteData?.preview }}
                  />
                  <div>
                    <h3 className="font-semibold text-foreground">
                      Current Theme: {selectedPaletteData?.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {selectedPaletteData?.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Palette Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {gradientPalettes.map((palette) => (
                  <div
                    key={palette.id}
                    className={`relative group cursor-pointer transition-all duration-300 ${
                      selectedPalette === palette.id ? 'scale-105' : 'hover:scale-102'
                    }`}
                    onClick={() => handlePaletteSelect(palette.id)}
                  >
                    <div className="p-4 rounded-xl border-2 border-white/20 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm hover:bg-white/90 dark:hover:bg-gray-700/90 transition-all duration-300">
                      {/* Preview Circle */}
                      <div className="relative mb-3">
                        <div 
                          className="w-full h-20 rounded-xl shadow-lg border-2 border-white/30 transition-all duration-300"
                          style={{ background: palette.preview }}
                        />
                        {selectedPalette === palette.id && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center">
                              <Check className="h-5 w-5 text-green-600" />
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Palette Info */}
                      <div className="text-center">
                        <h4 className="font-semibold text-foreground mb-1">
                          {palette.name}
                        </h4>
                        <p className="text-xs text-muted-foreground">
                          {palette.description}
                        </p>
                      </div>

                      {/* Color Swatches */}
                      <div className="flex justify-center gap-1 mt-3">
                        <div 
                          className="w-3 h-3 rounded-full border border-white/30"
                          style={{ backgroundColor: palette.colors.primary }}
                        />
                        <div 
                          className="w-3 h-3 rounded-full border border-white/30"
                          style={{ backgroundColor: palette.colors.primaryLight }}
                        />
                        <div 
                          className="w-3 h-3 rounded-full border border-white/30"
                          style={{ backgroundColor: palette.colors.secondary }}
                        />
                        <div 
                          className="w-3 h-3 rounded-full border border-white/30"
                          style={{ backgroundColor: palette.colors.accent }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Animation Status */}
              {isAnimating && (
                <div className="mt-6 p-4 rounded-xl bg-blue-50 dark:bg-blue-900/30 border-2 border-blue-200 dark:border-blue-700">
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded-full bg-blue-500 animate-pulse" />
                    <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                      Applying new theme with smooth transitions...
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}