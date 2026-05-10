"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { User, Bell, Shield, CreditCard } from "lucide-react";
import { cn } from "@/lib/cn";

export default function SettingsPage() {
  return (
    <div className="space-y-10 animate-fade-in pb-12">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-white">Settings</h2>
        <p className="text-muted-foreground font-medium">Manage your account preferences and security settings.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
        {/* Navigation Sidebar */}
        <div className="lg:col-span-1 space-y-1">
          {[
            { label: "Profile", icon: User, active: true },
            { label: "Notifications", icon: Bell },
            { label: "Security", icon: Shield },
            { label: "Billing", icon: CreditCard },
          ].map((item) => (
            <button
              key={item.label}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-colors",
                item.active ? "bg-white/[0.04] text-white" : "text-white/40 hover:text-white hover:bg-white/[0.02]"
              )}
            >
              <item.icon className="size-4" />
              {item.label}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="lg:col-span-3 space-y-8">
          <Card className="glass border-white/5 p-8 shadow-premium">
            <h3 className="text-lg font-bold mb-8 text-white">Personal Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <Label className="text-[11px] font-bold uppercase tracking-widest text-white/40">First Name</Label>
                <Input placeholder="Tirth" className="bg-white/[0.02] border-white/5 h-11 rounded-xl font-medium" />
              </div>
              <div className="space-y-3">
                <Label className="text-[11px] font-bold uppercase tracking-widest text-white/40">Last Name</Label>
                <Input placeholder="Patel" className="bg-white/[0.02] border-white/5 h-11 rounded-xl font-medium" />
              </div>
              <div className="space-y-3 md:col-span-2">
                <Label className="text-[11px] font-bold uppercase tracking-widest text-white/40">Email Address</Label>
                <Input placeholder="tirth@vantage.gg" className="bg-white/[0.02] border-white/5 h-11 rounded-xl font-medium" />
              </div>
            </div>
            <Button className="mt-10 rounded-full font-bold px-8 shadow-lg h-11">Save Changes</Button>
          </Card>

          <Card className="glass border-white/5 p-8 shadow-premium">
            <h3 className="text-lg font-bold mb-8 text-white">Security Preferences</h3>
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <span className="block font-bold text-sm text-white/90">Email Notifications</span>
                  <p className="text-xs text-muted-foreground font-medium">Receive updates about new services and promotions.</p>
                </div>
                <Switch />
              </div>
              <Separator className="bg-white/5" />
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <span className="block font-bold text-sm text-white/90">Session Encryption</span>
                  <p className="text-xs text-muted-foreground font-medium">Enable hardware-level encryption for all active game sessions.</p>
                </div>
                <Switch checked />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
