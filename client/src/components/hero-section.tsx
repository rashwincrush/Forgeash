import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Award, Trophy } from "lucide-react";

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
            <div className="relative z-10 animate-float">
              <img
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                alt="AI technology visualization with neural networks and data processing"
                className="rounded-2xl shadow-2xl w-full h-auto professional-glow"
              />
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-6 -right-6 bg-white/10 backdrop-blur-md rounded-xl p-4 shadow-lg animate-bounce professional-glow">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-[var(--executive-green)] rounded-full animate-pulse"></div>
                <span className="text-white text-sm font-medium">AI Active</span>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur-md rounded-xl p-4 shadow-lg animate-pulse professional-glow">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-primary rounded flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span className="text-white text-sm font-medium">98% Success Rate</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
