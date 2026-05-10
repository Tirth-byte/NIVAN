"use client";

import { SERVICES } from "../types";
import { cn } from "@/lib/cn";
import { CheckCircle2 } from "lucide-react";

interface ServiceSelectionProps {
  selected: string;
  onSelect: (id: string) => void;
}

export function ServiceSelection({ selected, onSelect }: ServiceSelectionProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {SERVICES.map((service) => (
        <button
          key={service.id}
          onClick={() => onSelect(service.id)}
          className={cn(
            "relative flex flex-col p-6 rounded-2xl border text-left transition-all duration-300 active:scale-[0.98]",
            selected === service.id
              ? "border-white/20 bg-white/[0.04] shadow-premium"
              : "border-white/5 bg-transparent hover:border-white/10"
          )}
        >
          {selected === service.id && (
            <CheckCircle2 className="absolute top-4 right-4 size-5 text-white animate-fade-in" />
          )}
          <h3 className="text-lg font-bold mb-2">{service.title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
            {service.description}
          </p>
          <span className="text-xs font-bold uppercase tracking-widest text-white/40">
            {service.priceLabel}
          </span>
        </button>
      ))}
    </div>
  );
}
