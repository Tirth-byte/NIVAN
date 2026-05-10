"use client";

import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import { cn } from "@/lib/cn";

const orders = [
  { id: "4215", service: "Rank Boosting", rank: "Silver 1 → Gold 4", status: "Completed", date: "May 12, 2026", price: "$142.50" },
  { id: "4218", service: "Duo Queue", rank: "N/A (5 Matches)", status: "In Progress", date: "May 14, 2026", price: "$45.00" },
  { id: "4222", service: "1-on-1 Coaching", rank: "N/A (1 Hour)", status: "Pending", date: "May 15, 2026", price: "$60.00" },
];

export default function OrdersPage() {
  return (
    <div className="space-y-10 animate-fade-in pb-12">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-white">Active Orders</h2>
        <p className="text-muted-foreground font-medium">Manage and track your service progression in real-time.</p>
      </div>

      <Card className="glass border-white/5 overflow-hidden shadow-premium">
        <Table>
          <TableHeader className="bg-white/[0.02]">
            <TableRow className="border-white/5 hover:bg-transparent">
              <TableHead className="text-[11px] font-bold uppercase tracking-widest text-white/40 h-14 px-8">Order ID</TableHead>
              <TableHead className="text-[11px] font-bold uppercase tracking-widest text-white/40 h-14">Service</TableHead>
              <TableHead className="text-[11px] font-bold uppercase tracking-widest text-white/40 h-14">Progression</TableHead>
              <TableHead className="text-[11px] font-bold uppercase tracking-widest text-white/40 h-14">Status</TableHead>
              <TableHead className="text-[11px] font-bold uppercase tracking-widest text-white/40 h-14">Date</TableHead>
              <TableHead className="text-[11px] font-bold uppercase tracking-widest text-white/40 h-14 text-right px-8">Price</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id} className="border-white/5 hover:bg-white/[0.01] transition-colors group">
                <TableCell className="font-bold py-6 px-8 text-white/90">#{order.id}</TableCell>
                <TableCell className="font-bold text-white">{order.service}</TableCell>
                <TableCell className="font-medium text-white/60">{order.rank}</TableCell>
                <TableCell>
                  <Badge 
                    variant="outline" 
                    className={cn(
                      "rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider border-white/5",
                      order.status === "Completed" ? "bg-green-500/10 text-green-400" : 
                      order.status === "In Progress" ? "bg-brand-azure/10 text-brand-azure" : "bg-white/5 text-white/40"
                    )}
                  >
                    {order.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-white/40 text-sm font-medium">{order.date}</TableCell>
                <TableCell className="text-right font-bold px-8 text-white">{order.price}</TableCell>
                <TableCell className="pr-8">
                  <Button variant="ghost" size="icon" className="size-8 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                    <MoreHorizontal className="size-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}
