/**
 * components/nav/AppSidebar.tsx
 * Server component — only NavItem is client (uses usePathname).
 * Demonstrates the "server shell + tiny client island" pattern.
 */
import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { Eyebrow } from "@/components/ui/Card";
import { NavItem } from "./NavItem"; // "use client" file
import { Wallet, BarChart3, Trophy, Clock, Headset, Settings } from "lucide-react";

const items = [
  { id: "overview", icon: BarChart3, label: "Overview",      href: "/overview" },
  { id: "orders",   icon: Trophy,    label: "Active orders", href: "/orders", badge: "2" },
  { id: "history",  icon: Clock,     label: "Match history", href: "/history" },
  { id: "wallet",   icon: Wallet,    label: "Wallet",        href: "/wallet" },
  { id: "support",  icon: Headset,   label: "Support",       href: "/support" },
  { id: "settings", icon: Settings,  label: "Settings",      href: "/settings" },
] as const;

export function AppSidebar({ user }: { user: { handle: string; rank: string; balance: number } }) {
  return (
    <aside
      className="hidden lg:flex w-[248px] shrink-0 sticky top-0 h-screen flex-col p-3 bg-surface-1 border-r border-border"
      aria-label="Primary"
    >
      <Link href="/overview" className="flex items-center gap-2.5 px-2.5 py-2 mb-4">
        <Logo size={28} />
        <span className="font-semibold tracking-[-0.02em]">vantage</span>
      </Link>

      <Eyebrow className="px-2.5 pt-3 pb-2">Player</Eyebrow>
      <nav className="flex flex-col gap-0.5">
        {items.map((it) => (
          <NavItem key={it.id} href={it.href} icon={<it.icon size={16} />} label={it.label} badge={it.badge} />
        ))}
      </nav>

      <div className="mt-auto p-3.5 bg-surface-2 border border-border rounded-md shadow-inset-top">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-grad-brand grid place-items-center text-text-inverse font-bold text-[13px]">
            {user.handle.slice(0, 2).toUpperCase()}
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-[13px] font-medium truncate">{user.handle}</div>
            <div className="text-[11px] text-text-muted truncate">{user.rank}</div>
          </div>
        </div>
        <div className="mt-3 flex justify-between text-[11px]">
          <span className="text-text-secondary">Wallet</span>
          <span className="font-mono text-cyan tabular-nums">${user.balance.toFixed(2)}</span>
        </div>
      </div>
    </aside>
  );
}
