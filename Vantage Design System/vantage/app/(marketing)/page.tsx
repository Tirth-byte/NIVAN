import { Hero } from "@/components/marketing/Hero";
import { SocialProof } from "@/components/marketing/SocialProof";
import { Features } from "@/components/marketing/Features";
import { Pricing } from "@/components/marketing/Pricing";
import { FAQ } from "@/components/marketing/FAQ";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full bg-background overflow-x-hidden">
      <Hero />
      <SocialProof />
      <Features />
      
      {/* Visual Break / Mid-page CTA */}
      <section className="container py-24 md:py-32">
        <div className="relative p-12 md:p-24 rounded-[2.5rem] overflow-hidden border border-white/5 bg-white/[0.01] shadow-premium group">
          <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-6xl font-bold mb-8 tracking-tight">
              Built for those who lead, <br />
              <span className="text-muted-foreground/60">not those who follow.</span>
            </h2>
            <p className="text-muted-foreground/80 text-lg md:text-xl mb-12 leading-relaxed font-medium">
              Experience the platform that is redefining competitive gaming infrastructure. 
              Zero complexity, infinite scale.
            </p>
            <Button size="lg" className="rounded-full px-12 h-14 bg-white text-black font-bold shadow-xl transition-all active:scale-[0.97]">
              Get Started Now
              <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
          
          {/* Subtle Accent */}
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-violet/5 blur-[120px] rounded-full -translate-x-1/4 translate-y-1/4 pointer-events-none opacity-50" />
        </div>
      </section>

      <Pricing />
      <FAQ />
      
      {/* Final Bottom CTA */}
      <section className="section-padding container border-t border-white/5">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-8xl font-bold tracking-tightest mb-10 text-gradient">
            Ready to upgrade?
          </h2>
          <p className="text-muted-foreground/80 text-xl md:text-2xl mb-14 leading-relaxed font-medium">
            Join the elite clubs and organizations already using Vantage.
          </p>
          <div className="flex flex-col sm:flex-row gap-5">
            <Button size="lg" className="h-14 px-12 rounded-full bg-white text-black font-bold shadow-lg">
              Join Vantage
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-12 rounded-full glass border-white/10 hover:bg-white/5 font-bold shadow-sm">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
