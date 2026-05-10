"use client";
/**
 * components/nav/NavItem.tsx — client island for active-route detection.
 * The rest of AppSidebar stays in a server component; only this 30-line file
 * ships JS to the browser.
 */
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";

type Props = { href: string; icon: React.ReactNode; label: string; badge?: string };

export function NavItem({ href, icon, label, badge }: Props) {
  const path = usePathname();
  const active = path === href || path.startsWith(href + "/");
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={cn(
        "flex items-center gap-3 px-3 py-2.5 rounded-sm text-[14px]",
        "transition-colors duration-micro ease-smooth",
        active
          ? "bg-surface-3 text-text-primary shadow-inset-top"
          : "text-text-secondary hover:text-text-primary hover:bg-surface-2"
      )}
    >
      <span className="shrink-0">{icon}</span>
      <span className="flex-1">{label}</span>
      {badge && (
        <span className="px-1.5 h-[18px] inline-flex items-center rounded-pill bg-violet-soft text-[10px] font-mono text-violet">
          {badge}
        </span>
      )}
    </Link>
  );
}
