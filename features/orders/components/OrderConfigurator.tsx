"use client";

import { OrderState, RANKS, REGIONS } from "../types";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

interface OrderConfiguratorProps {
  state: OrderState;
  onChange: (config: Partial<OrderState["config"]>) => void;
}

export function OrderConfigurator({ state, onChange }: OrderConfiguratorProps) {
  return (
    <div className="space-y-10 animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <Label className="text-sm font-bold uppercase tracking-widest text-white/40">Current Rank</Label>
          <Select 
            value={state.config.currentRank} 
            onValueChange={(val) => val && onChange({ currentRank: val })}
          >
            <SelectTrigger className="h-12 rounded-xl bg-white/[0.02] border-white/5 hover:border-white/10 transition-colors">
              <SelectValue placeholder="Select current rank" />
            </SelectTrigger>
            <SelectContent className="glass border-white/10">
              {RANKS.map((rank) => (
                <SelectItem key={rank} value={rank} className="hover:bg-white/5 transition-colors">
                  {rank}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-4">
          <Label className="text-sm font-bold uppercase tracking-widest text-white/40">Desired Rank</Label>
          <Select 
            value={state.config.desiredRank} 
            onValueChange={(val) => val && onChange({ desiredRank: val })}
          >
            <SelectTrigger className="h-12 rounded-xl bg-white/[0.02] border-white/5 hover:border-white/10 transition-colors">
              <SelectValue placeholder="Select desired rank" />
            </SelectTrigger>
            <SelectContent className="glass border-white/10">
              {RANKS.map((rank) => (
                <SelectItem key={rank} value={rank} className="hover:bg-white/5 transition-colors">
                  {rank}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <Separator className="bg-white/5" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <Label className="text-sm font-bold uppercase tracking-widest text-white/40">Region</Label>
          <Select 
            value={state.config.region} 
            onValueChange={(val) => val && onChange({ region: val })}
          >
            <SelectTrigger className="h-12 rounded-xl bg-white/[0.02] border-white/5 hover:border-white/10 transition-colors">
              <SelectValue placeholder="Select region" />
            </SelectTrigger>
            <SelectContent className="glass border-white/10">
              {REGIONS.map((region) => (
                <SelectItem key={region} value={region} className="hover:bg-white/5 transition-colors">
                  {region}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-4">
          <Label className="text-sm font-bold uppercase tracking-widest text-white/40">Queue Type</Label>
          <Select 
            value={state.config.queueType} 
            onValueChange={(val) => val && onChange({ queueType: val })}
          >
            <SelectTrigger className="h-12 rounded-xl bg-white/[0.02] border-white/5 hover:border-white/10 transition-colors">
              <SelectValue placeholder="Select queue type" />
            </SelectTrigger>
            <SelectContent className="glass border-white/10">
              <SelectItem value="Solo/Duo (5v5)" className="hover:bg-white/5">Solo/Duo (5v5)</SelectItem>
              <SelectItem value="Flex Queue (5v5)" className="hover:bg-white/5">Flex Queue (5v5)</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}
