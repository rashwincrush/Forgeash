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
  MoreHorizontal 
} from "lucide-react";

export function IndustryExpertiseSection() {
  const industries = [
    [
      { icon: Heart, name: "Healthcare", color: "from-red-50 to-pink-50", iconColor: "text-red-600" },
      { icon: GraduationCap, name: "Education", color: "from-blue-50 to-indigo-50", iconColor: "text-blue-600" },
      { icon: ShoppingCart, name: "Retail", color: "from-purple-50 to-violet-50", iconColor: "text-purple-600" }
    ],
    [
      { icon: TrendingUp, name: "Financial Services", color: "from-green-50 to-emerald-50", iconColor: "text-green-600" },
      { icon: Factory, name: "Manufacturing", color: "from-orange-50 to-amber-50", iconColor: "text-orange-600" },
      { icon: Laptop, name: "Technology", color: "from-cyan-50 to-teal-50", iconColor: "text-cyan-600" }
    ],
    [
      { icon: Truck, name: "Logistics", color: "from-yellow-50 to-orange-50", iconColor: "text-yellow-600" },
      { icon: Briefcase, name: "Professional Services", color: "from-indigo-50 to-purple-50", iconColor: "text-indigo-600" },
      { icon: MoreHorizontal, name: "And More...", color: "from-slate-50 to-gray-50", iconColor: "text-slate-600" }
    ]
  ];

  return (
    <section id="industries" className="py-20 bg-background dark:bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-slide-in-left">
            <h2 className="text-4xl font-bold text-foreground mb-4">INDUSTRY EXPERTISE</h2>
            <h3 className="text-2xl font-semibold text-muted-foreground mb-6">Solutions For Every Industry</h3>
            <p className="text-xl text-muted-foreground mb-8">
              We deliver tailored solutions for diverse industries, addressing sector-specific challenges with specialized expertise and innovative approaches.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Our team combines deep industry knowledge with cutting-edge technical capabilities to create solutions that drive meaningful results for your specific business context.
            </p>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 professional-glow hover-lift">
              Learn About Our Approach
            </Button>
          </div>
          
          <div className="grid grid-cols-3 gap-4 animate-slide-in-right">
            {industries.map((column, columnIndex) => (
              <div key={columnIndex} className={`space-y-4 ${columnIndex === 1 ? 'mt-8' : ''}`}>
                {column.map((industry, industryIndex) => {
                  const IconComponent = industry.icon;
                  return (
                    <div key={industryIndex} className={`bg-gradient-to-br ${industry.color} dark:bg-gradient-to-br dark:from-card dark:to-card/50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 professional-glow animate-scale-in`} style={{ animationDelay: `${(columnIndex * 3 + industryIndex) * 0.1}s` }}>
                      <IconComponent className={`${industry.iconColor} h-8 w-8 mb-3`} />
                      <h4 className="font-semibold text-foreground">{industry.name}</h4>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
