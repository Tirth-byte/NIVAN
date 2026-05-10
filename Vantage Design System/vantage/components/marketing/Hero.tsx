import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-40 pb-24 md:pt-56 md:pb-48 overflow-hidden">
      <div className="container relative z-10 flex flex-col items-center text-center">
        <Badge 
          variant="outline" 
          className="mb-10 border-white/5 bg-white/[0.02] text-white/40 px-5 py-1.5 rounded-full animate-fade-in font-semibold tracking-wider text-[11px] uppercase subtle-glow"
        >
          Performance OS for Esports
        </Badge>
        
        <h1 className="text-gradient text-5xl md:text-8xl font-bold tracking-tightest leading-[1.05] mb-10 max-w-5xl animate-slide-up">
          Engineering the next era of esports excellence.
        </h1>
        
        <p className="text-muted-foreground/80 text-lg md:text-xl max-w-2xl mb-14 animate-slide-up [animation-delay:200ms] leading-relaxed font-medium">
          Vantage is the premium SaaS platform for elite gaming organizations. 
          Unify your performance data, automate workflows, and scale with precision.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-5 animate-slide-up [animation-delay:400ms]">
          <Button 
            size="lg" 
            className="h-13 px-10 text-base rounded-full bg-white text-black hover:bg-white/90 font-bold shadow-lg"
          >
            Start Your Journey
            <ArrowRight className="ml-2 size-4 transition-transform group-hover/button:translate-x-1" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="h-13 px-10 text-base rounded-full glass hover:bg-white/[0.05] border-white/10 font-bold"
          >
            Talk to Sales
          </Button>
        </div>
      </div>
      
      {/* Visual Accents - Extremely Restrained */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1000px] pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[-300px] left-1/2 -translate-x-1/2 w-[1200px] h-[700px] bg-brand-violet/5 blur-[160px] rounded-full opacity-30" />
      </div>
    </section>
  );
}
