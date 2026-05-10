"use client";

import { OrderState } from "../types";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";
import { Shield, Lock, EyeOff, User } from "lucide-react";
import { cn } from "@/lib/cn";

interface AccountPreferencesProps {
  state: OrderState;
  onChange: (prefs: Partial<OrderState["preferences"]>) => void;
}

export function AccountPreferences({ state, onChange }: AccountPreferencesProps) {
  return (
    <div className="space-y-12 animate-fade-in">
      {/* Login Method */}
      <div className="space-y-6">
        <Label className="text-sm font-bold uppercase tracking-widest text-white/40">Login Method</Label>
        <RadioGroup 
          value={state.preferences.loginMethod} 
          onValueChange={(val) => onChange({ loginMethod: val as any })}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <div className={cn(
            "relative flex items-center gap-4 p-5 rounded-xl border transition-all cursor-pointer",
            state.preferences.loginMethod === "riot-sign-on" ? "border-white/20 bg-white/[0.04]" : "border-white/5 hover:border-white/10"
          )}>
            <RadioGroupItem value="riot-sign-on" id="riot" className="sr-only" />
            <div className="size-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
              <Shield className="size-5 text-white/60" />
            </div>
            <label htmlFor="riot" className="cursor-pointer">
              <span className="block font-bold">Riot Sign-On</span>
              <span className="text-xs text-muted-foreground">Secure OAuth-based authentication.</span>
            </label>
          </div>

          <div className={cn(
            "relative flex items-center gap-4 p-5 rounded-xl border transition-all cursor-pointer",
            state.preferences.loginMethod === "credentials" ? "border-white/20 bg-white/[0.04]" : "border-white/5 hover:border-white/10"
          )}>
            <RadioGroupItem value="credentials" id="creds" className="sr-only" />
            <div className="size-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
              <Lock className="size-5 text-white/60" />
            </div>
            <label htmlFor="creds" className="cursor-pointer">
              <span className="block font-bold">Manual Credentials</span>
              <span className="text-xs text-muted-foreground">Provide login details securely.</span>
            </label>
          </div>
        </RadioGroup>
      </div>

      {/* Security Switches */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="flex items-start justify-between gap-6 p-6 rounded-2xl border border-white/5 bg-white/[0.01]">
          <div className="flex gap-4">
            <div className="size-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
              <EyeOff className="size-4 text-white/40" />
            </div>
            <div className="space-y-1">
              <span className="block font-bold text-sm">Appear Offline</span>
              <p className="text-xs text-muted-foreground leading-relaxed">Play in offline mode to preserve privacy from your friend list.</p>
            </div>
          </div>
          <Switch 
            checked={state.preferences.isPrivate} 
            onCheckedChange={(val) => onChange({ isPrivate: val })} 
          />
        </div>

        <div className="flex items-start justify-between gap-6 p-6 rounded-2xl border border-white/5 bg-white/[0.01]">
          <div className="flex gap-4">
            <div className="size-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
              <GlobeIcon className="size-4 text-white/40" />
            </div>
            <div className="space-y-1">
              <span className="block font-bold text-sm">Professional VPN</span>
              <p className="text-xs text-muted-foreground leading-relaxed">Matches your local IP address for maximum account safety.</p>
            </div>
          </div>
          <Switch 
            checked={state.preferences.useVpn} 
            onCheckedChange={(val) => onChange({ useVpn: val })} 
          />
        </div>
      </div>
    </div>
  );
}

function GlobeIcon({ className }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}
