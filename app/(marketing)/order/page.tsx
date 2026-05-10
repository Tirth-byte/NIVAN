"use client";

import { useState } from "react";
import { OrderState, ServiceType } from "@/features/orders/types";
import { OrderSummary } from "@/features/orders/components/OrderSummary";
import { ServiceSelection } from "@/features/orders/components/ServiceSelection";
import { OrderConfigurator } from "@/features/orders/components/OrderConfigurator";
import { AccountPreferences } from "@/features/orders/components/AccountPreferences";
import { OrderReview } from "@/features/orders/components/OrderReview";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/cn";

export default function OrderPage() {
  const [state, setState] = useState<OrderState>({
    serviceType: "boosting",
    config: {
      currentRank: "Silver 1",
      desiredRank: "Gold 4",
      region: "North America",
      queueType: "Solo/Duo (5v5)",
      addOns: [],
    },
    preferences: {
      loginMethod: "riot-sign-on",
      isPrivate: true,
      useVpn: true,
      vpnRegion: "North America",
      playPreference: "solo",
    },
    step: 1,
  });

  const nextStep = () => setState((prev) => ({ ...prev, step: Math.min(prev.step + 1, 4) }));
  const prevStep = () => setState((prev) => ({ ...prev, step: Math.max(prev.step - 1, 1) }));

  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
      <div className="container max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Flow */}
          <div className="flex-1">
            <div className="mb-10 flex items-center justify-between">
              <div className="flex items-center gap-4">
                {state.step > 1 && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={prevStep}
                    className="h-8 w-8 rounded-full p-0 hover:bg-white/5"
                  >
                    <ArrowLeft className="size-4" />
                  </Button>
                )}
                <div>
                  <h1 className="text-2xl font-bold tracking-tight">Configure Your Order</h1>
                  <p className="text-sm text-muted-foreground">Step {state.step} of 4 — {getStepTitle(state.step)}</p>
                </div>
              </div>
              
              {/* Trust Indicator */}
              <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/5 bg-white/[0.02]">
                <ShieldCheck className="size-3.5 text-white/40" />
                <span className="text-[11px] font-bold uppercase tracking-wider text-white/40">Secure Session</span>
              </div>
            </div>

            <div className="animate-fade-in">
              {state.step === 1 && (
                <ServiceSelection 
                  selected={state.serviceType} 
                  onSelect={(id) => setState(s => ({ ...s, serviceType: id as ServiceType }))} 
                />
              )}
              {state.step === 2 && (
                <OrderConfigurator 
                  state={state} 
                  onChange={(config) => setState(s => ({ ...s, config: { ...s.config, ...config } }))} 
                />
              )}
              {state.step === 3 && (
                <AccountPreferences 
                  state={state} 
                  onChange={(prefs) => setState(s => ({ ...s, preferences: { ...s.preferences, ...prefs } }))} 
                />
              )}
              {state.step === 4 && (
                <OrderReview state={state} />
              )}
            </div>

            <div className="mt-12 pt-8 border-t border-white/5 flex items-center justify-between">
              <p className="text-xs text-muted-foreground max-w-[300px]">
                By continuing, you agree to our professional standards and service guarantees.
              </p>
              <Button 
                onClick={nextStep} 
                className="h-11 px-8 rounded-full font-bold shadow-lg"
              >
                {state.step === 4 ? "Complete Order" : "Continue"}
              </Button>
            </div>
          </div>

          {/* Sidebar Summary */}
          <aside className="lg:w-[380px]">
            <div className="sticky top-24">
              <OrderSummary state={state} />
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

function getStepTitle(step: number) {
  switch (step) {
    case 1: return "Select Service";
    case 2: return "Order Configuration";
    case 3: return "Security & Preferences";
    case 4: return "Final Review";
    default: return "";
  }
}
