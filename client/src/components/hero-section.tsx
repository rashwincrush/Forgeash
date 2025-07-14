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
            {/* Enhanced Professional Orbital System */}
            <div className="relative w-[500px] h-[500px] mx-auto">
              {/* Visible Orbital Rings with Gradients */}
              <div className="absolute inset-0">
                {/* Outer Ring - Blue Gradient */}
                <div className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-blue-400/40 via-cyan-400/40 to-blue-400/40 p-0.5">
                  <div className="w-full h-full rounded-full bg-gradient-to-r from-slate-900/80 to-slate-800/80 backdrop-blur-xl"></div>
                </div>
                
                {/* Middle Ring - Purple Gradient */}
                <div className="absolute inset-16 rounded-full border-2 border-transparent bg-gradient-to-r from-purple-400/30 via-pink-400/30 to-purple-400/30 p-0.5">
                  <div className="w-full h-full rounded-full bg-gradient-to-r from-slate-900/60 to-slate-800/60 backdrop-blur-xl"></div>
                </div>
                
                {/* Inner Ring - Gold Gradient */}
                <div className="absolute inset-32 rounded-full border-2 border-transparent bg-gradient-to-r from-yellow-400/20 via-orange-400/20 to-yellow-400/20 p-0.5">
                  <div className="w-full h-full rounded-full bg-gradient-to-r from-slate-900/40 to-slate-800/40 backdrop-blur-xl"></div>
                </div>
                
                {/* Glowing Effects */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 blur-2xl animate-pulse"></div>
                <div className="absolute inset-8 rounded-full bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-purple-500/10 blur-xl animate-pulse"></div>
                <div className="absolute inset-16 rounded-full bg-gradient-to-r from-yellow-500/10 via-orange-500/10 to-yellow-500/10 blur-lg animate-pulse"></div>
              </div>
              
              {/* Enhanced Central Logo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/50 to-purple-400/50 rounded-full blur-xl animate-pulse"></div>
                  <div className="relative w-36 h-36 bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-2xl rounded-full flex items-center justify-center shadow-2xl professional-glow border-2 border-white/40">
                    <img 
                      src={forgeAshLogo} 
                      alt="ForgeAsh Technologies Logo" 
                      className="w-28 h-28 object-contain drop-shadow-2xl"
                    />
                  </div>
                </div>
              </div>
              
              {/* Professional Rotating Industry Icons */}
              <div className="absolute inset-0 animate-spin-very-slow">
                <div className="absolute w-full h-full">
                  {/* Healthcare - Top */}
                  <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/40 to-teal-400/40 rounded-xl blur-sm"></div>
                      <div className="relative w-12 h-12 bg-gradient-to-br from-emerald-400/90 to-teal-500/90 rounded-xl shadow-xl flex items-center justify-center border border-emerald-300/20 backdrop-blur-sm">
                        <svg className="w-6 h-6 text-white drop-shadow-md" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  {/* Finance - Top Right */}
                  <div className="absolute top-16 right-8">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-orange-400/40 to-yellow-400/40 rounded-xl blur-sm"></div>
                      <div className="relative w-12 h-12 bg-gradient-to-br from-orange-400/90 to-yellow-500/90 rounded-xl shadow-xl flex items-center justify-center border border-orange-300/20 backdrop-blur-sm">
                        <svg className="w-6 h-6 text-white drop-shadow-md" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17h-2v-9.28c-.35.17-.74.28-1.17.28-.95 0-1.8-.7-1.95-1.65L8.5 8h7l-.62-.35c-.15.95-1 1.65-1.95 1.65-.43 0-.82-.11-1.17-.28V19z"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  {/* E-commerce - Right */}
                  <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-green-400/40 to-emerald-400/40 rounded-xl blur-sm"></div>
                      <div className="relative w-12 h-12 bg-gradient-to-br from-green-400/90 to-emerald-500/90 rounded-xl shadow-xl flex items-center justify-center border border-green-300/20 backdrop-blur-sm">
                        <svg className="w-6 h-6 text-white drop-shadow-md" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M7 4V2C7 1.45 7.45 1 8 1h8c.55 0 1 .45 1 1v2h5v2h-2v13c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V6H2V4h5zm10 15V6H7v13h10zM9 3v1h6V3H9zm0 5h2v8H9V8zm4 0h2v8h-2V8z"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  {/* Education - Bottom */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-400/40 to-indigo-400/40 rounded-xl blur-sm"></div>
                      <div className="relative w-12 h-12 bg-gradient-to-br from-blue-400/90 to-indigo-500/90 rounded-xl shadow-xl flex items-center justify-center border border-blue-300/20 backdrop-blur-sm">
                        <svg className="w-6 h-6 text-white drop-shadow-md" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6L23 9l-11-6zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  {/* Manufacturing - Left */}
                  <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-400/40 to-pink-400/40 rounded-xl blur-sm"></div>
                      <div className="relative w-12 h-12 bg-gradient-to-br from-purple-400/90 to-pink-500/90 rounded-xl shadow-xl flex items-center justify-center border border-purple-300/20 backdrop-blur-sm">
                        <svg className="w-6 h-6 text-white drop-shadow-md" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Enhanced Stats Cards - Outside Orbit */}
            <div className="absolute -top-16 -right-16 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 shadow-2xl professional-glow border-2 border-white/20">
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full animate-pulse shadow-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <div className="text-white">
                  <div className="text-2xl font-bold">10+</div>
                  <div className="text-sm text-white/80 font-medium">Projects Completed</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-16 -left-16 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 shadow-2xl professional-glow border-2 border-white/20">
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
                  </svg>
                </div>
                <div className="text-white">
                  <div className="text-2xl font-bold">98%</div>
                  <div className="text-sm text-white/80 font-medium">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
