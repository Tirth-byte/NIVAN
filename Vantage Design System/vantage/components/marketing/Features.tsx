import { Zap, Shield, BarChart3, Users, Globe, Cpu } from "lucide-react";

const features = [
  {
    title: "Performance Analytics",
    desc: "Real-time data processing for deep-tier competitive insights and strategic growth.",
    icon: BarChart3,
  },
  {
    title: "Automated Workflows",
    desc: "Scale your operations with intelligent automation designed for high-stakes environments.",
    icon: Cpu,
  },
  {
    title: "Global Infrastructure",
    desc: "Deploy on a world-class network optimized for the lowest latency possible.",
    icon: Globe,
  },
  {
    title: "Elite Security",
    desc: "Enterprise-grade protection for your most sensitive organizational and player data.",
    icon: Shield,
  },
  {
    title: "Team Management",
    desc: "Centralized hub for roster tracking, performance reviews, and contract management.",
    icon: Users,
  },
  {
    title: "Instant Execution",
    desc: "Lightning-fast response times for all critical platform operations and service tasks.",
    icon: Zap,
  },
];

export function Features() {
  return (
    <section className="section-padding container border-t border-white/5">
      <div className="flex flex-col mb-24 max-w-2xl">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
          Everything you need to <br />
          <span className="text-muted-foreground/60">lead the industry.</span>
        </h2>
        <p className="text-lg text-muted-foreground/80 leading-relaxed max-w-xl">
          Vantage provides the technical backbone for the world's most successful esports franchises. 
          Built by engineers who understand the demands of professional gaming.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-20">
        {features.map((feature, i) => (
          <div key={i} className="group flex flex-col items-start transition-all duration-300">
            <div className="size-11 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center mb-8 group-hover:border-white/10 group-hover:bg-white/[0.05] transition-all duration-500 shadow-sm">
              <feature.icon className="size-5 text-white/30 group-hover:text-white transition-colors duration-500" />
            </div>
            <h3 className="text-lg font-bold mb-3 tracking-tight group-hover:text-white/90 transition-colors">{feature.title}</h3>
            <p className="text-muted-foreground/70 leading-relaxed text-[15px] max-w-[280px]">
              {feature.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
