import { cn } from "@/lib/cn";

interface NavConfig {
  mainNav: {
    title: string;
    href: string;
    disabled?: boolean;
  }[];
}

export const marketingConfig: NavConfig = {
  mainNav: [
    {
      title: "Services",
      href: "/services",
    },
    {
      title: "Pricing",
      href: "/pricing",
    },
    {
      title: "Why Choose Us",
      href: "/why-us",
    },
    {
      title: "Activity",
      href: "/activity",
    },
  ],
};

export const dashboardConfig: NavConfig = {
  mainNav: [
    {
      title: "Overview",
      href: "/dashboard",
    },
    {
      title: "Orders",
      href: "/dashboard/orders",
    },
    {
      title: "Analytics",
      href: "/dashboard/analytics",
    },
    {
      title: "Chat",
      href: "/dashboard/chat",
    },
    {
      title: "Settings",
      href: "/dashboard/settings",
    },
  ],
};
