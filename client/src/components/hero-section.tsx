import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Award, Trophy } from "lucide-react";
import forgeAshLogo from "@assets/Image_02-05-25_at_10.52_AM-removebg-preview_1752479361775.png";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-blue-800 to-[var(--executive-navy)] dark:from-[var(--executive-navy)] dark:via-[var(--executive-charcoal)] dark:to-background overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[size:30px_30px] dark:bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.05)_1px,transparent_0)]"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left animate-slide-in-left">
            <div className="mb-6">
              <span className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-primary/20 to-[var(--executive-blue)]/20 text-blue-200 dark:text-blue-300 text-sm font-medium backdrop-blur-sm professional-glow">
                🚀 Build Smarter, Work Faster, Grow Bigger – with AI!
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Transform Your Business With{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent animate-gradient">
                Strategic AI Solutions
              </span>
            </h1>
            
            <p className="text-xl text-slate-300 dark:text-slate-400 mb-8 leading-relaxed max-w-2xl">
              We leverage AI, automation, and custom software to help businesses streamline operations, create new revenue streams, and achieve extraordinary results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 group professional-glow hover-lift">
                Schedule a Free Strategy Call
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 hover-lift">
                Explore Our Services
              </Button>
            </div>
            
            <div className="mt-12 flex items-center justify-center lg:justify-start animate-fade-in">
              <span className="text-slate-400 text-sm mr-4">TRUSTED BY INDUSTRY LEADERS</span>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover-lift">
                  <Star className="h-4 w-4 text-[var(--executive-gold)] fill-current" />
                </div>
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover-lift">
                  <Award className="h-4 w-4 text-blue-400" />
                </div>
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover-lift">
                  <Trophy className="h-4 w-4 text-[var(--executive-gold)]" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative animate-slide-in-right">
            {/* Circular Animation Container */}
            <div className="relative w-96 h-96 mx-auto">
              {/* Central ForgeAsh Logo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center shadow-2xl professional-glow animate-pulse border-2 border-white/20">
                  <img 
                    src={forgeAshLogo} 
                    alt="ForgeAsh Technologies Logo" 
                    className="w-24 h-24 object-contain"
                  />
                </div>
              </div>
              
              {/* Professional Multi-Orbital System - 5 Industry Icons */}
              
              {/* Ring 1 - Healthcare (Blue) */}
              <div className="absolute inset-0 animate-spin-very-slow">
                <div className="relative w-full h-full">
                  <div className="absolute inset-2 border border-white/5 rounded-full shadow-inner"></div>
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-14 h-14 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full flex items-center justify-center shadow-2xl professional-glow border-2 border-white/20">
                    <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/>
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Ring 2 - Finance (Orange) */}
              <div className="absolute inset-0 animate-spin-very-slow">
                <div className="relative w-full h-full">
                  <div className="absolute inset-4 border border-white/5 rounded-full shadow-inner"></div>
                  <div className="absolute top-6 right-6 transform -translate-y-1/2 w-13 h-13 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full flex items-center justify-center shadow-2xl professional-glow border-2 border-white/20">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17h-2v-9.28c-.35.17-.74.28-1.17.28-.95 0-1.8-.7-1.95-1.65L8.5 8h7l-.62-.35c-.15.95-1 1.65-1.95 1.65-.43 0-.82-.11-1.17-.28V19z"/>
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Ring 3 - E-commerce (Green) */}
              <div className="absolute inset-0 animate-spin-very-slow">
                <div className="relative w-full h-full">
                  <div className="absolute inset-6 border border-white/5 rounded-full shadow-inner"></div>
                  <div className="absolute top-1/2 right-4 transform -translate-y-1/2 w-12 h-12 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center shadow-2xl professional-glow border-2 border-white/20">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M7 4V2C7 1.45 7.45 1 8 1h8c.55 0 1 .45 1 1v2h5v2h-2v13c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V6H2V4h5zm10 15V6H7v13h10zM9 3v1h6V3H9zm0 5h2v8H9V8zm4 0h2v8h-2V8z"/>
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Ring 4 - Education (Teal) */}
              <div className="absolute inset-0 animate-spin-very-slow">
                <div className="relative w-full h-full">
                  <div className="absolute inset-8 border border-white/5 rounded-full shadow-inner"></div>
                  <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-11 h-11 bg-gradient-to-br from-teal-400 to-teal-500 rounded-full flex items-center justify-center shadow-2xl professional-glow border-2 border-white/20">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6L23 9l-11-6zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Ring 5 - Manufacturing (Purple) */}
              <div className="absolute inset-0 animate-spin-very-slow">
                <div className="relative w-full h-full">
                  <div className="absolute inset-10 border border-white/5 rounded-full shadow-inner"></div>
                  <div className="absolute top-1/2 left-8 transform -translate-y-1/2 w-10 h-10 bg-gradient-to-br from-purple-400 to-purple-500 rounded-full flex items-center justify-center shadow-2xl professional-glow border-2 border-white/20">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                </div>
              </div>
              

            </div>
            
            {/* Stats Cards - Outside Orbit */}
            <div className="absolute -top-10 -right-10 bg-white/5 backdrop-blur-xl rounded-2xl p-6 shadow-2xl professional-glow border border-white/10">
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-gradient-to-br from-[var(--executive-green)] to-green-500 rounded-full animate-pulse shadow-lg"></div>
                <div className="text-white">
                  <div className="text-xl font-semibold">10+</div>
                  <div className="text-sm text-white/70">Projects Completed</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-10 -left-10 bg-white/5 backdrop-blur-xl rounded-2xl p-6 shadow-2xl professional-glow border border-white/10">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-gradient-to-br from-primary to-blue-500 rounded-full flex items-center justify-center shadow-lg">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <div className="text-white">
                  <div className="text-xl font-semibold">98%</div>
                  <div className="text-sm text-white/70">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
