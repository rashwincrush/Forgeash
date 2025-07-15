import { Button } from "@/components/ui/button";
import { 
  Heart, 
  GraduationCap, 
  ShoppingCart, 
  TrendingUp, 
  Factory, 
  Laptop, 
  Truck, 
  Briefcase, 
  MoreHorizontal,
  Sparkles,
  Diamond,
  Star,
  ArrowRight
} from "lucide-react";
import { useEffect, useState } from "react";
import { ClientLogosSlider } from "./client-logos-slider";

export function IndustryExpertiseSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  useEffect(() => {
    setIsVisible(true);
    
    // Create random prosperity sparkles
    const interval = setInterval(() => {
      setHoverIndex(Math.floor(Math.random() * 9));
      setTimeout(() => setHoverIndex(null), 800);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  const industries = [
    [
      { icon: Heart, name: "Healthcare" },
      { icon: GraduationCap, name: "Education" },
      { icon: ShoppingCart, name: "Retail" }
    ],
    [
      { icon: TrendingUp, name: "Financial Services" },
      { icon: Factory, name: "Manufacturing" },
      { icon: Laptop, name: "Technology" }
    ],
    [
      { icon: Truck, name: "Logistics" },
      { icon: Briefcase, name: "Professional Services" },
      { icon: Star, name: "And More..." }
    ]
  ];

  return (
    <section id="industries" className="relative py-24 bg-gradient-to-br from-[var(--executive-navy-dark)] via-[var(--executive-navy)]/70 to-[var(--executive-navy-dark)] overflow-hidden">
      {/* Animated luxury background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMxLjIgMCAyLjIuOCAyLjIgMS45bC43IDQuMmMuMS43LjcgMS4yIDEuNCAxLjJoMy4xYzEuMiAwIDEuOS44IDEuOSAxLjlzLS43IDEuOS0xLjkgMS45SDQwYy0xLjMgMC0yLjQtLjktMi42LTIuMWwtLjctNC4yYy0uMS0uNy0uNy0xLjItMS40LTEuMmgtNi41Yy0uNyAwLTEuNC41LTEuNSAxLjNsLS43IDQuMWMtLjIgMS4yLTEuMyAyLTIuNiAyaC0zLjFjLTEuMiAwLTEuOS0uOC0xLjktMS45cy43LTEuOSAxLjktMS45SDIzYy43IDAgMS4zLS41IDEuNC0xLjJsLjctNC4yYzAtMS4xIDEtMS45IDIuMi0xLjlIMzZ6IiBmaWxsPSIjOTE0MmNjIiBvcGFjaXR5PSIuMTUiLz48cGF0aCBkPSJNMzAgMEMxMy40IDAgMCAxMy40IDAgMzBzMTMuNCAzMCAzMCAzMCAzMC0xMy40IDMwLTMwUzQ2LjYgMCAzMCAwem0wIDUyLjVDMTcuNCA1Mi41IDcuNSA0Mi42IDcuNSAzMFMxNy40IDcuNSAzMCA3LjUgNTIuNSAxNy40IDUyLjUgMzAgNDIuNiA1Mi41IDMwIDUyLjV6IiBzdHJva2U9IiMxQTU2RjAiIHN0cm9rZS13aWR0aD0iLjc1IiBvcGFjaXR5PSIuMTUiLz48L2c+PC9zdmc+')] bg-repeat opacity-40"></div>
        {/* Animated glowing orbs */}
        <div className="absolute w-[300px] h-[300px] top-[10%] left-[5%] rounded-full bg-[var(--executive-amethyst)]/10 filter blur-[80px] animate-pulse-slow"></div>
        <div className="absolute w-[250px] h-[250px] bottom-[15%] right-[8%] rounded-full bg-[var(--executive-sapphire)]/10 filter blur-[60px] animate-pulse-slower"></div>
        <div className="absolute w-[200px] h-[200px] top-[40%] right-[15%] rounded-full bg-[var(--executive-gold)]/5 filter blur-[50px] animate-float"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-[var(--executive-gold)]/5 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-[var(--executive-blue)]/5 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }}></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Subliminal Prosperity Messages */}
        <div className="subliminal-text prosperity-frequency top-10 left-14">My industry expertise attracts ideal clients</div>
        <div className="subliminal-text abundance-flow top-16 right-20">Every industry I serve creates abundant prosperity</div>
        <div className="subliminal-text success-magnetism bottom-24 left-28">I naturally attract business from all industries</div>
        <div className="subliminal-text prosperity-frequency bottom-12 right-16">My solutions create exponential wealth for clients</div>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-16 opacity-0'}`}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {/* Industry cards */}
              <div className="col-span-1 md:col-span-3 text-center relative">
                <div className="text-center">        
                  <h2 className="text-5xl font-bold mb-4">
                    <span className="text-transparent bg-gradient-to-r from-[var(--executive-amethyst)] via-[var(--executive-gold)] to-[var(--executive-sapphire)] bg-clip-text animate-gradient">INDUSTRY</span>
                    <span className="text-[var(--executive-silver)]"> EXPERTISE</span>
                  </h2>
                  <div className="mt-2 h-1 w-36 mx-auto bg-gradient-to-r from-[var(--executive-amethyst)] to-[var(--executive-sapphire)] rounded-full"></div>
                  <h3 className="text-2xl font-semibold text-[var(--executive-silver-light)] mt-6 mb-6">
                    Solutions That <span className="text-transparent bg-gradient-to-r from-[var(--executive-amethyst)] to-[var(--executive-sapphire)] bg-clip-text">Magnetize Success</span> In Every Industry
                  </h3>
                  <div className="relative">
                    <div className="absolute -left-6 -top-6 w-12 h-12 bg-[var(--executive-amethyst)]/20 rounded-full filter blur-xl animate-pulse-slow"></div>
                    <p className="text-xl text-[var(--executive-silver-dark)] mb-8 relative z-10">
                      We deliver tailored solutions for diverse industries, addressing sector-specific challenges with specialized expertise and innovative approaches.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-4 mt-8">
                  <Button className="w-full bg-gradient-to-r from-[var(--executive-amethyst)] to-[var(--executive-sapphire)] text-white shadow-lg luxury-glow hover:shadow-xl hover-lift font-medium">
                    Explore Industry Solutions
                  </Button>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -right-6 -bottom-6 w-12 h-12 bg-[var(--executive-purple)]/20 rounded-full filter blur-xl animate-pulse-slow"></div>
              <p className="text-lg text-muted-foreground dark:text-slate-400 mb-8 relative z-10">
                Our team combines deep industry knowledge with cutting-edge technical capabilities to create solutions that drive meaningful results for your specific business context.
              </p>
            </div>
            <Button size="lg" className="bg-gradient-to-r from-[var(--executive-blue)] to-[var(--executive-purple)] text-white hover:from-[var(--executive-blue)] hover:to-[var(--executive-purple)] hover:scale-105 group professional-glow shadow-xl px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 border border-white/10">
              <Sparkles className="mr-2 h-5 w-5 animate-pulse" />
              Learn About Our Approach
            </Button>
          </div>
          
          <div className={`grid grid-cols-3 gap-4 transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-16 opacity-0'}`}>
            {industries.map((column, columnIndex) => (
              <div key={columnIndex} className={`space-y-6 ${columnIndex === 1 ? 'mt-10' : ''}`}>
                {column.map((industry, industryIndex) => {
                  const IconComponent = industry.icon;
                  const index = columnIndex * 3 + industryIndex;
                  const isHovered = hoverIndex === index;
                  
                  return (
                    <div 
                      key={industryIndex} 
                      className="relative group"
                      style={{ 
                        transitionDelay: `${index * 0.15}s`,
                        transform: `translateY(${isVisible ? '0' : '30px'})`,
                        opacity: isVisible ? 1 : 0,
                        transition: 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                      }}
                    >
                      {/* Content */}
                      <div 
                        className={`relative bg-gradient-to-br from-slate-800/40 to-slate-900/60 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 border border-white/10 group overflow-hidden`}
                      >

                        
                        <div className="relative z-10 flex flex-col items-center justify-center h-full">
                          <IconComponent className="text-white/80 h-8 w-8 mb-4 group-hover:scale-110 transition-transform duration-300" />
                          <h4 className="font-semibold text-white/90 text-center transition-all duration-300">{industry.name}</h4>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
        {/* Client Logos Slider */}
        <div className="mt-12">
          <ClientLogosSlider />
        </div>
      </div>
    </section>
  );
}
