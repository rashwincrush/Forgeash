import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Award, Trophy, DollarSign, PoundSterling, IndianRupee } from "lucide-react";
import forgeAshLogo from "@assets/Image_02-05-25_at_10.52_AM-removebg-preview_1752479361775.png";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[var(--executive-navy-dark)] via-[var(--executive-navy)] to-[var(--executive-amethyst)]/80 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[size:30px_30px] dark:bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.05)_1px,transparent_0)]"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        {/* Subtle Subliminal Layer */}
        <div className="subliminal-text prosperity-frequency top-10 left-10">I attract abundant clients effortlessly</div>
        <div className="subliminal-text abundance-flow top-20 right-16">My AI solutions generate massive revenue</div>
        <div className="subliminal-text success-magnetism bottom-32 left-20">Innovation flows through me naturally</div>
        <div className="subliminal-text prosperity-frequency bottom-40 right-24">I manifest extraordinary business success</div>
        <div className="subliminal-text abundance-flow top-1/2 left-1/3">My code creates limitless possibilities</div>
        <div className="subliminal-text success-magnetism top-1/3 right-1/4">Clients are drawn to my expertise</div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left animate-slide-in-left">
            <div className="mb-6">
              <span className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-[var(--executive-sapphire)]/90 to-[var(--executive-amethyst)]/90 text-white text-sm font-medium backdrop-blur-sm luxury-glow shadow-lg">
                🚀 Build Smarter, Work Faster, Grow Bigger – with AI!
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Transform Your Business With{" "}
              <span className="bg-gradient-to-r from-[var(--executive-amethyst)] to-[var(--executive-sapphire)] bg-clip-text text-transparent animate-gradient">
                Strategic AI Solutions
              </span>
            </h1>
            
            <p className="text-xl text-[var(--executive-silver)] mb-8 leading-relaxed max-w-2xl">
              We leverage AI, automation, and custom software to help businesses streamline operations, create new revenue streams, and achieve extraordinary results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <Button size="lg" className="bg-gradient-to-r from-[var(--executive-amethyst)] to-[var(--executive-sapphire)] text-white luxury-glow hover:shadow-2xl hover:scale-105 transition-all duration-300 shadow-lg rounded-xl font-semibold group text-lg border border-white/20">
                Schedule a Free Strategy Call
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="border-[var(--executive-navy)]/40 dark:border-white/40 text-[var(--executive-navy)] dark:text-white hover:bg-[var(--executive-navy)]/10 dark:hover:bg-white/15 hover:border-[var(--executive-navy)]/60 dark:hover:border-white/60 hover:scale-105 transition-all duration-300 backdrop-blur-sm bg-[var(--executive-navy)]/5 dark:bg-white/5 rounded-xl font-semibold text-lg px-8 py-4 shadow-lg">
                Explore Our Services
              </Button>
            </div>
            
            <div className="mt-12 flex items-center justify-center lg:justify-start animate-fade-in">
              <span className="text-[var(--executive-navy)]/80 dark:text-slate-400 text-sm mr-4 font-medium">TRUSTED BY INDUSTRY LEADERS</span>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-[var(--executive-navy)]/20 dark:bg-white/10 rounded-full flex items-center justify-center hover-lift shadow-lg">
                  <Star className="h-4 w-4 text-[var(--executive-gold)] fill-current" />
                </div>
                <div className="w-8 h-8 bg-[var(--executive-navy)]/20 dark:bg-white/10 rounded-full flex items-center justify-center hover-lift shadow-lg">
                  <Award className="h-4 w-4 text-[var(--executive-blue)] dark:text-blue-400" />
                </div>
                <div className="w-8 h-8 bg-[var(--executive-navy)]/20 dark:bg-white/10 rounded-full flex items-center justify-center hover-lift shadow-lg">
                  <Trophy className="h-4 w-4 text-[var(--executive-gold)]" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative animate-slide-in-right">
            {/* Ultra-Refined Orbital System */}
            <div className="relative w-[480px] h-[480px] mx-auto">
              {/* Minimalist Orbital Rings */}
              <div className="absolute inset-0">
                {/* Outer Ring - Subtle Blue */}
                <div className="absolute inset-0 rounded-full border border-blue-400/15 shadow-[0_0_20px_rgba(59,130,246,0.1)]"></div>
                
                {/* Middle Ring - Elegant Purple */}
                <div className="absolute inset-20 rounded-full border border-purple-400/12 shadow-[0_0_15px_rgba(147,51,234,0.08)]"></div>
                
                {/* Inner Ring - Soft Gold */}
                <div className="absolute inset-40 rounded-full border border-yellow-400/10 shadow-[0_0_10px_rgba(251,191,36,0.06)]"></div>
                
                {/* Subtle Ambient Glow */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/3 via-purple-500/3 to-blue-500/3 blur-3xl"></div>
              </div>
              
              {/* Refined Central Logo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-2xl"></div>
                  <div className="relative w-32 h-32 bg-gradient-to-br from-white/15 to-white/8 backdrop-blur-3xl rounded-full flex items-center justify-center shadow-[0_8px_32px_rgba(0,0,0,0.3)] border border-white/20">
                    <img 
                      src={forgeAshLogo} 
                      alt="ForgeAsh Technologies Logo" 
                      className="w-24 h-24 object-contain drop-shadow-xl"
                    />
                  </div>
                </div>
              </div>
              
              {/* Minimalist Floating Icons and Currency Orbits */}
              <div className="absolute inset-0 animate-spin-very-slow">
                <div className="absolute w-full h-full">
                  {/* Healthcare - Top */}
                  <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
                    <div className="w-10 h-10 bg-white/8 backdrop-blur-2xl rounded-full flex items-center justify-center shadow-[0_4px_16px_rgba(0,0,0,0.15)] border border-white/10 hover:bg-white/12 transition-all duration-300">
                      <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/>
                      </svg>
                    </div>
                  </div>
                  {/* Currency Icons - Planetary Orbit */}
                  <style>
                    {`
                      @keyframes orbit-spin {
                        from { transform: rotate(0deg); }
                        to { transform: rotate(360deg); }
                      }
                      .currency-orbit-spin {
                        animation: orbit-spin 18s linear infinite;
                      }
                    `}
                  </style>
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="relative w-[320px] h-[320px] currency-orbit-spin">
                      {/* Dollar - 0deg */}
                      <div className="absolute left-1/2 top-0 -translate-x-1/2">
                        <div className="w-10 h-10 bg-white/8 backdrop-blur-2xl rounded-full flex items-center justify-center shadow-[0_4px_16px_rgba(0,0,0,0.15)] border border-yellow-400/30">
                          <DollarSign className="w-5 h-5 text-yellow-400" />
                        </div>
                      </div>
                      {/* Pound - 120deg */}
                      <div className="absolute left-0 top-1/2 -translate-y-1/2" style={{ transform: 'rotate(120deg) translateY(-160px) rotate(-120deg)' }}>
                        <div className="w-10 h-10 bg-white/8 backdrop-blur-2xl rounded-full flex items-center justify-center shadow-[0_4px_16px_rgba(0,0,0,0.15)] border border-blue-400/30">
                          <PoundSterling className="w-5 h-5 text-blue-400" />
                        </div>
                      </div>
                      {/* Rupee - 240deg */}
                      <div className="absolute right-0 top-1/2 -translate-y-1/2" style={{ transform: 'rotate(240deg) translateY(-160px) rotate(-240deg)' }}>
                        <div className="w-10 h-10 bg-white/8 backdrop-blur-2xl rounded-full flex items-center justify-center shadow-[0_4px_16px_rgba(0,0,0,0.15)] border border-green-400/30">
                          <IndianRupee className="w-5 h-5 text-green-400" />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Finance - Top Right */}
                  <div className="absolute top-20 right-12">
                    <div className="w-10 h-10 bg-white/8 backdrop-blur-2xl rounded-full flex items-center justify-center shadow-[0_4px_16px_rgba(0,0,0,0.15)] border border-white/10 hover:bg-white/12 transition-all duration-300">
                      <svg className="w-5 h-5 text-orange-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17h-2v-9.28c-.35.17-.74.28-1.17.28-.95 0-1.8-.7-1.95-1.65L8.5 8h7l-.62-.35c-.15.95-1 1.65-1.95 1.65-.43 0-.82-.11-1.17-.28V19z"/>
                      </svg>
                    </div>
                  </div>
                  
                  {/* E-commerce - Right */}
                  <div className="absolute top-1/2 right-8 transform -translate-y-1/2">
                    <div className="w-10 h-10 bg-white/8 backdrop-blur-2xl rounded-full flex items-center justify-center shadow-[0_4px_16px_rgba(0,0,0,0.15)] border border-white/10 hover:bg-white/12 transition-all duration-300">
                      <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M7 4V2C7 1.45 7.45 1 8 1h8c.55 0 1 .45 1 1v2h5v2h-2v13c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V6H2V4h5zm10 15V6H7v13h10zM9 3v1h6V3H9zm0 5h2v8H9V8zm4 0h2v8h-2V8z"/>
                      </svg>
                    </div>
                  </div>
                  
                  {/* Education - Bottom */}
                  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                    <div className="w-10 h-10 bg-white/8 backdrop-blur-2xl rounded-full flex items-center justify-center shadow-[0_4px_16px_rgba(0,0,0,0.15)] border border-white/10 hover:bg-white/12 transition-all duration-300">
                      <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6L23 9l-11-6zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
                      </svg>
                    </div>
                  </div>
                  
                  {/* Manufacturing - Left */}
                  <div className="absolute top-1/2 left-8 transform -translate-y-1/2">
                    <div className="w-10 h-10 bg-white/8 backdrop-blur-2xl rounded-full flex items-center justify-center shadow-[0_4px_16px_rgba(0,0,0,0.15)] border border-white/10 hover:bg-white/12 transition-all duration-300">
                      <svg className="w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
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
