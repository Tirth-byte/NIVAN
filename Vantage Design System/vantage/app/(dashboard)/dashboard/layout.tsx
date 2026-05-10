import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/dashboard/AppSidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <div className="relative flex min-h-screen bg-background">
        <AppSidebar />
        <div className="flex flex-1 flex-col">
          <header className="flex h-16 items-center border-b border-white/5 px-6">
            <SidebarTrigger className="-ml-1" />
            <div className="ml-4 flex items-center gap-2">
              <span className="text-sm font-medium text-muted-foreground">Overview</span>
            </div>
          </header>
          <main className="flex-1 overflow-auto p-6">
            <div className="mx-auto max-w-7xl">
              {children}
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
