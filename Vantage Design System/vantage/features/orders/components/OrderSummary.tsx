"use client";

import { OrderState, SERVICES } from "../types";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Clock, Shield, Zap } from "lucide-react";

export function OrderSummary({ state }: { state: OrderState }) {
  const selectedService = SERVICES.find((s) => s.id === state.serviceType);

  return (
    <Card className="glass border-white/5 p-8 rounded-[2rem] shadow-premium">
      <h2 className="text-xl font-bold mb-6 tracking-tight">Order Summary</h2>
      
      <div className="space-y-6">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-2 block">Service</span>
          <p className="font-bold text-lg">{selectedService?.title}</p>
        </div>

        <Separator className="bg-white/5" />

        <div className="grid grid-cols-2 gap-6">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-1 block">Region</span>
            <p className="text-sm font-semibold">{state.config.region}</p>
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-1 block">Queue</span>
            <p className="text-sm font-semibold">{state.config.queueType}</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground font-medium">Rank Progression</span>
            <span className="font-bold">{state.config.currentRank} → {state.config.desiredRank}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground font-medium">Professional VPN</span>
            <span className="text-white font-bold">{state.preferences.useVpn ? "Active" : "Disabled"}</span>
          </div>
        </div>

        <Separator className="bg-white/5" />

        <div className="space-y-3">
          <div className="flex items-center gap-3 text-xs text-muted-foreground/80">
            <Clock className="size-3.5" />
            <span>Estimated completion: 24-48 hours</span>
          </div>
          <div className="flex items-center gap-3 text-xs text-muted-foreground/80">
            <Shield className="size-3.5" />
            <span>Enterprise-grade encryption active</span>
          </div>
          <div className="flex items-center gap-3 text-xs text-muted-foreground/80">
            <Zap className="size-3.5" />
            <span>Instant start available</span>
          </div>
        </div>

        <div className="pt-4">
          <div className="flex items-baseline justify-between mb-2">
            <span className="font-bold text-lg">Total Amount</span>
            <span className="text-3xl font-bold tracking-tighter">$142.50</span>
          </div>
          <p className="text-[11px] text-muted-foreground leading-relaxed text-center italic">
            Secure checkout via Stripe. No hidden fees.
          </p>
        </div>
      </div>
    </Card>
  );
}
