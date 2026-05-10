import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { dashboardConfig } from "@/config/nav";
import { LayoutDashboard, ShoppingCart, BarChart3, MessageSquare, Settings, User } from "lucide-react";
import Link from "next/link";

const iconMap: Record<string, any> = {
  Overview: LayoutDashboard,
  Orders: ShoppingCart,
  Analytics: BarChart3,
  Chat: MessageSquare,
  Settings: Settings,
};

export function AppSidebar() {
  return (
    <Sidebar variant="inset" className="border-r border-white/5 bg-card/50">
      <SidebarHeader className="h-16 flex items-center px-6 border-b border-white/5">
        <Link href="/" className="flex items-center gap-2">
          <div className="size-6 bg-white rounded-sm" />
          <span className="font-bold tracking-tight">VANTAGE</span>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="px-6 text-white/40 text-[10px] uppercase tracking-widest font-bold mb-2">Platform</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="px-3 gap-1">
              {dashboardConfig.mainNav.map((item) => {
                const Icon = iconMap[item.title] || LayoutDashboard;
                return (
                  <SidebarMenuItem key={item.href}>
                    <Link 
                      href={item.href} 
                      className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-white/5 transition-colors group"
                    >
                      <Icon className="size-4 text-muted-foreground group-hover:text-white transition-colors" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="p-4 border-t border-white/5">
        <div className="flex items-center gap-3 px-2 py-1.5 rounded-md hover:bg-white/5 cursor-pointer transition-colors">
          <div className="size-8 rounded-full bg-accent flex items-center justify-center">
            <User className="size-4" />
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-semibold">Tirth Patel</span>
            <span className="text-[10px] text-muted-foreground">Pro Member</span>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
