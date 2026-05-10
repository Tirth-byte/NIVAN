"use client";

import { Card } from "@/components/ui/card";
import { BarChart3, TrendingUp, Users, DollarSign, ArrowUpRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { label: "Account Rank", value: "Diamond 2", icon: TrendingUp, trend: "Top 2%" },
  { label: "Active Orders", value: "2", icon: Clock, trend: "In Progress" },
  { label: "Total Matches", value: "142", icon: Users, trend: "+12 this week" },
  { label: "Service Balance", value: "$45.00", icon: DollarSign, trend: "Available" },
];

export default function DashboardPage() {
  return (
    <div className="space-y-10 animate-fade-in pb-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-white">Dashboard</h2>
          <p className="text-muted-foreground font-medium">Welcome back, Tirth. Here's your performance overview.</p>
        </div>
        <Button className="rounded-full font-bold shadow-lg h-11 px-6">
          New Order
          <ArrowUpRight className="ml-2 size-4" />
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <Card key={i} className="glass p-6 border-white/5 hover:border-white/10 transition-colors group">
            <div className="flex items-center justify-between mb-4">
              <div className="size-10 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center group-hover:bg-white/[0.05] transition-colors">
                <stat.icon className="size-5 text-white/40 group-hover:text-white transition-colors" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-brand-azure">{stat.trend}</span>
            </div>
            <p className="text-sm font-bold uppercase tracking-widest text-white/30 mb-1">{stat.label}</p>
            <h3 className="text-2xl font-bold text-white">{stat.value}</h3>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="glass border-white/5 p-8 lg:col-span-2">
          <div className="flex items-center justify-between mb-8">
            <h4 className="font-bold text-sm uppercase tracking-widest text-white/40">Active Session Performance</h4>
            <Button variant="ghost" size="sm" className="text-xs font-bold text-white/40 hover:text-white">View Details</Button>
          </div>
          <div className="flex h-[300px] items-center justify-center border border-dashed border-white/5 rounded-2xl bg-white/[0.01]">
            <div className="flex flex-col items-center text-center space-y-2">
              <BarChart3 className="size-8 text-white/10" />
              <p className="text-sm text-muted-foreground font-medium italic">Performance analytics visualization placeholder</p>
            </div>
          </div>
        </Card>

        <Card className="glass border-white/5 p-8">
          <h4 className="font-bold text-sm uppercase tracking-widest text-white/40 mb-8">Recent Notifications</h4>
          <div className="space-y-6">
            {[
              { title: "Order #4215 Completed", time: "2h ago", type: "success" },
              { title: "New Message from Analyst", time: "5h ago", type: "message" },
              { title: "VPN Session Secured", time: "1d ago", type: "security" },
            ].map((note, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="size-2 rounded-full bg-brand-azure mt-1.5 shrink-0" />
                <div>
                  <p className="text-sm font-bold text-white/90 leading-none mb-1">{note.title}</p>
                  <span className="text-[11px] font-bold text-white/20 uppercase tracking-wider">{note.time}</span>
                </div>
              </div>
            ))}
          </div>
          <Button variant="outline" className="w-full mt-10 rounded-xl border-white/5 bg-white/[0.02] text-xs font-bold py-5">
            View All Activity
          </Button>
        </Card>
      </div>
    </div>
  );
}
