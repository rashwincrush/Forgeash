import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Award, Trophy } from "lucide-react";
import forgeAshLogo from "@assets/Image_02-05-25_at_10.52_AM-removebg-preview_1752479361775.png";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[var(--executive-navy)] via-[var(--executive-slate)] to-[var(--executive-charcoal)] dark:from-[var(--executive-navy)] dark:via-[var(--executive-slate)] dark:to-background overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[size:30px_30px] dark:bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.05)_1px,transparent_0)]"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        {/* Ultra-Powerful Crore-Magnetism Subliminal Programming */}
        <div className="subliminal-text prosperity-frequency top-10 left-10">I attract crores of rupees daily</div>
        <div className="subliminal-text abundance-flow top-20 right-16">My AI solutions generate unlimited wealth</div>
        <div className="subliminal-text success-magnetism bottom-32 left-20">Billion-dollar opportunities flow to me</div>
        <div className="subliminal-text prosperity-frequency bottom-40 right-24">I manifest millionaire clients instantly</div>
        <div className="subliminal-text abundance-flow top-1/2 left-1/3">My expertise commands crores in revenue</div>
        <div className="subliminal-text success-magnetism top-1/3 right-1/4">Unlimited wealth multiplies through my work</div>
        <div className="subliminal-text prosperity-frequency top-40 left-1/3">I attract Fortune 500 clients effortlessly</div>
        <div className="subliminal-text abundance-flow bottom-50 right-1/3">My business scales to billions automatically</div>
        <div className="subliminal-text success-magnetism top-2/3 left-2/3">Money flows to me from every direction</div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left animate-slide-in-left">
            <div className="mb-6">
              <span className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-primary/20 to-[var(--executive-blue)]/20 text-blue-200 dark:text-blue-300 text-sm font-medium backdrop-blur-sm professional-glow">
                🚀 Build Smarter, Work Faster, Grow Bigger – with AI!
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Transform Your Business With{" "}
              <span className="primary-gradient-text">
                Strategic AI Solutions
              </span>
            </h1>
            
            <p className="text-xl text-slate-300 dark:text-slate-400 mb-8 leading-relaxed max-w-2xl">
              We leverage AI, automation, and custom software to help businesses streamline operations, create new revenue streams, and achieve extraordinary results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <Button size="lg" className="primary-gradient text-white hover:opacity-90 hover:scale-105 group professional-shadow px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 border border-white/20">
                Schedule a Free Strategy Call
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="border-white/40 text-white hover:bg-white/15 hover:border-white/60 hover:scale-105 transition-all duration-300 backdrop-blur-sm bg-white/5 rounded-xl font-semibold text-lg px-8 py-4 shadow-lg">
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
            {/* Ultra-Refined Orbital System */}
            <div className="relative w-[480px] h-[480px] mx-auto">
              {/* Professional Orbital Ring System */}
              <div className="absolute inset-0">
                {/* Outer Ring - Professional Blue */}
                <div className="absolute inset-0 orbital-ring border-[var(--executive-accent)]/20"></div>
                
                {/* Middle Ring - Refined Blue */}
                <div className="absolute inset-20 orbital-ring border-[var(--executive-accent)]/15" style={{animationDelay: '-10s'}}></div>
                
                {/* Inner Ring - Subtle Blue */}
                <div className="absolute inset-40 orbital-ring border-[var(--executive-accent)]/10" style={{animationDelay: '-5s'}}></div>
                
                {/* Professional Ambient Glow */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[var(--executive-accent)]/5 via-[var(--executive-accent-light)]/5 to-[var(--executive-accent)]/5 blur-3xl"></div>
              </div>
              
              {/* Professional Central Logo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-[var(--executive-accent)]/15 to-[var(--executive-accent-light)]/15 rounded-full blur-xl"></div>
                  <div className="relative w-32 h-32 bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-2xl rounded-full flex items-center justify-center shadow-[0_8px_32px_rgba(0,0,0,0.3)] border border-white/20 executive-shadow">
                    <img 
                      src={forgeAshLogo} 
                      alt="ForgeAsh Technologies Logo" 
                      className="w-24 h-24 object-contain drop-shadow-xl"
                    />
                  </div>
                </div>
              </div>
              
              {/* Minimalist Floating Icons */}
              <div className="absolute inset-0 animate-spin-very-slow">
                <div className="absolute w-full h-full">
                  {/* Healthcare - Top */}
                  <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
                    <div className="w-10 h-10 bg-white/8 backdrop-blur-xl rounded-full flex items-center justify-center shadow-[0_4px_16px_rgba(0,0,0,0.15)] border border-white/15 hover:bg-white/12 transition-all duration-300 executive-shadow">
                      <svg className="w-5 h-5 text-[var(--executive-success)]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/>
                      </svg>
                    </div>
                  </div>
                  
                  {/* Finance - Top Right */}
                  <div className="absolute top-20 right-12">
                    <div className="w-10 h-10 bg-white/8 backdrop-blur-xl rounded-full flex items-center justify-center shadow-[0_4px_16px_rgba(0,0,0,0.15)] border border-white/15 hover:bg-white/12 transition-all duration-300 executive-shadow">
                      <svg className="w-5 h-5 text-[var(--executive-warning)]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17h-2v-9.28c-.35.17-.74.28-1.17.28-.95 0-1.8-.7-1.95-1.65L8.5 8h7l-.62-.35c-.15.95-1 1.65-1.95 1.65-.43 0-.82-.11-1.17-.28V19z"/>
                      </svg>
                    </div>
                  </div>
                  
                  {/* E-commerce - Right */}
                  <div className="absolute top-1/2 right-8 transform -translate-y-1/2">
                    <div className="w-12 h-12 bg-white/10 backdrop-blur-2xl rounded-full flex items-center justify-center shadow-[0_6px_20px_rgba(0,0,0,0.2)] border border-white/20 hover:bg-white/15 transition-all duration-300 executive-glow">
                      <svg className="w-6 h-6 text-[var(--executive-green)]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M7 4V2C7 1.45 7.45 1 8 1h8c.55 0 1 .45 1 1v2h5v2h-2v13c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V6H2V4h5zm10 15V6H7v13h10zM9 3v1h6V3H9zm0 5h2v8H9V8zm4 0h2v8h-2V8z"/>
                      </svg>
                    </div>
                  </div>
                  
                  {/* Education - Bottom */}
                  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                    <div className="w-12 h-12 bg-white/10 backdrop-blur-2xl rounded-full flex items-center justify-center shadow-[0_6px_20px_rgba(0,0,0,0.2)] border border-white/20 hover:bg-white/15 transition-all duration-300 executive-glow">
                      <svg className="w-6 h-6 text-[var(--success-sapphire)]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6L23 9l-11-6zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
                      </svg>
                    </div>
                  </div>
                  
                  {/* Manufacturing - Left */}
                  <div className="absolute top-1/2 left-8 transform -translate-y-1/2">
                    <div className="w-12 h-12 bg-white/10 backdrop-blur-2xl rounded-full flex items-center justify-center shadow-[0_6px_20px_rgba(0,0,0,0.2)] border border-white/20 hover:bg-white/15 transition-all duration-300 executive-glow">
                      <svg className="w-6 h-6 text-[var(--luxury-amethyst)]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Minimalist Stats Cards */}
            <div className="absolute -top-16 -right-16 bg-white/6 backdrop-blur-3xl rounded-2xl p-6 shadow-[0_8px_32px_rgba(0,0,0,0.2)] border border-white/10 z-10">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-emerald-400/20 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                </div>
                <div className="text-white">
                  <div className="text-lg font-semibold">10+</div>
                  <div className="text-xs text-white/60 font-medium">Projects</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-16 -left-16 bg-white/6 backdrop-blur-3xl rounded-2xl p-6 shadow-[0_8px_32px_rgba(0,0,0,0.2)] border border-white/10 z-10">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-yellow-400/20 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                </div>
                <div className="text-white">
                  <div className="text-lg font-semibold">98%</div>
                  <div className="text-xs text-white/60 font-medium">Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
