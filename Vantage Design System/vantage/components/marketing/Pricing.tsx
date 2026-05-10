import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const tiers = [
  {
    name: "Starter",
    price: "$49",
    desc: "For individual professionals looking to optimize their performance.",
    features: ["Basic Analytics", "Automated Roster Sync", "Standard Support", "5 Team Members"],
    cta: "Start for free",
    popular: false,
  },
  {
    name: "Pro",
    price: "$199",
    desc: "Advanced toolset for competitive teams and organizations.",
    features: ["Deep-tier Analytics", "Custom Workflows", "Priority Support", "Unlimited Members", "API Access"],
    cta: "Go Pro",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    desc: "Bespoke solutions for global premier gaming franchises.",
    features: ["Dedicated Infrastructure", "White-label Options", "24/7 Concierge", "SLA Guarantee", "Custom Integrations"],
    cta: "Contact Sales",
    popular: false,
  },
];

export function Pricing() {
  return (
    <section className="section-padding container border-t border-white/5">
      <div className="flex flex-col items-center text-center mb-24 max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Simple, transparent pricing.</h2>
        <p className="text-lg text-muted-foreground/80 leading-relaxed">
          Choose the plan that fits your organization's scale. All plans include our core performance engine.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {tiers.map((tier, i) => (
          <div 
            key={i} 
            className={`relative flex flex-col p-10 rounded-2xl border transition-all duration-300 ${
              tier.popular ? "border-white/10 bg-white/[0.02] shadow-premium" : "border-white/5 bg-transparent hover:border-white/10"
            }`}
          >
            {tier.popular && (
              <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-black text-[10px] uppercase tracking-widest font-bold px-4 py-1.5 rounded-full shadow-sm">
                Most Popular
              </span>
            )}
            <div className="mb-10">
              <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground/60 mb-6">{tier.name}</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-5xl font-bold tracking-tighter text-white">{tier.price}</span>
                {tier.price !== "Custom" && <span className="text-muted-foreground/60 text-sm font-medium">/mo</span>}
              </div>
              <p className="text-[15px] text-muted-foreground/80 leading-relaxed h-12">{tier.desc}</p>
            </div>
            
            <ul className="space-y-4 mb-12 flex-1">
              {tier.features.map((feature, j) => (
                <li key={j} className="flex items-center gap-3 text-[14px] text-muted-foreground/70">
                  <Check className="size-4 text-white/40 shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>

            <Button 
              variant={tier.popular ? "default" : "outline"}
              className="w-full h-12 rounded-full font-bold transition-all active:scale-[0.98]"
            >
              {tier.cta}
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
}
