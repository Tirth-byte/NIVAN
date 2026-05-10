"use client";

import { OrderState, SERVICES } from "../types";
import { Check, ShieldCheck, CreditCard } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export function OrderReview({ state }: { state: OrderState }) {
  const selectedService = SERVICES.find((s) => s.id === state.serviceType);

  return (
    <div className="space-y-10 animate-fade-in">
      <div className="p-8 rounded-3xl border border-white/5 bg-white/[0.01]">
        <div className="flex items-center gap-4 mb-8">
          <div className="size-12 rounded-full bg-white text-black flex items-center justify-center">
            <Check className="size-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold">Review Your Order</h3>
            <p className="text-sm text-muted-foreground">Please confirm your service details and preferences.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          <div className="space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">Selected Service</span>
            <p className="font-bold">{selectedService?.title}</p>
          </div>
          <div className="space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">Rank Progression</span>
            <p className="font-bold">{state.config.currentRank} → {state.config.desiredRank}</p>
          </div>
          <div className="space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">Region & Queue</span>
            <p className="font-bold">{state.config.region} • {state.config.queueType}</p>
          </div>
          <div className="space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">Security Settings</span>
            <p className="font-bold">VPN Active • Private Mode</p>
          </div>
        </div>

        <Separator className="my-10 bg-white/5" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-6 rounded-2xl bg-white/[0.03] border border-white/5">
          <div className="flex items-center gap-4">
            <div className="size-10 rounded-lg bg-white/5 flex items-center justify-center">
              <ShieldCheck className="size-5 text-white/60" />
            </div>
            <div>
              <span className="block font-bold text-sm">Professional Execution</span>
              <p className="text-xs text-muted-foreground">Your order is backed by our 100% safety guarantee.</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-white/40">
            <CreditCard className="size-4" />
            <span className="text-[11px] font-bold uppercase tracking-widest">Encrypted Checkout</span>
          </div>
        </div>
      </div>
    </div>
  );
}
