export function SocialProof() {
  return (
    <section className="container py-24 border-t border-white/5">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-16 lg:gap-24">
        <div className="flex flex-col max-w-sm">
          <h4 className="text-[11px] font-bold uppercase tracking-[0.25em] text-white/30 mb-6 animate-fade-in">Trusted Worldwide</h4>
          <p className="text-muted-foreground/70 text-[14px] leading-relaxed font-medium">
            Powering the mission-critical operations of the world's most elite competitive gaming organizations and franchises.
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-12 md:gap-16 lg:gap-20 w-full lg:w-auto">
          {[
            { label: "Active Players", value: "250k+" },
            { label: "Tournaments", value: "1,200+" },
            { label: "Data Points", value: "85Bn" },
            { label: "Up-time", value: "99.99%" },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col animate-fade-in" style={{ animationDelay: `${i * 100}ms` }}>
              <span className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tighter">
                {stat.value}
              </span>
              <span className="text-[10px] uppercase tracking-widest text-white/20 font-bold">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
