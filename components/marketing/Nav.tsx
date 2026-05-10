"use client";

import { cn } from "@/lib/cn";
import Link from "next/link";
import { marketingConfig } from "@/config/nav";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export function MarketingNav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-500",
        isScrolled || mobileMenuOpen ? "h-16 border-b border-white/5 bg-background/80 backdrop-blur-xl shadow-sm" : "h-20 bg-transparent"
      )}
    >
      <div className="container h-full flex items-center justify-between">
        <div className="flex items-center gap-12">
          <Link href="/" className="flex items-center space-x-2 transition-opacity hover:opacity-80 active:scale-[0.98]">
            <span className="font-bold text-lg tracking-tighter uppercase">Vantage</span>
          </Link>
          <nav className="hidden md:flex items-center gap-10">
            {marketingConfig.mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-[13px] font-semibold text-muted-foreground/80 transition-all hover:text-white"
                )}
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Link 
            href="/login" 
            className="hidden sm:block text-[13px] font-semibold text-muted-foreground/80 hover:text-white transition-all px-4 py-2 active:scale-[0.95]"
          >
            Log in
          </Link>
          <Button 
            size="sm" 
            variant="default"
            className="hidden sm:inline-flex h-9 rounded-full px-6 font-bold transition-all active:scale-[0.96] shadow-md"
            asChild
          >
            <Link href="/order">Join Vantage</Link>
          </Button>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden size-10 rounded-full bg-white/5 flex items-center justify-center border border-white/5"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-background border-b border-white/5 p-6 animate-fade-in">
          <nav className="flex flex-col gap-6">
            {marketingConfig.mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-lg font-bold text-white/90"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.title}
              </Link>
            ))}
            <div className="pt-6 border-t border-white/5 flex flex-col gap-4">
              <Button asChild className="w-full rounded-full font-bold h-12" onClick={() => setMobileMenuOpen(false)}>
                <Link href="/order">Join Vantage</Link>
              </Button>
              <Button asChild variant="outline" className="w-full rounded-full font-bold h-12" onClick={() => setMobileMenuOpen(false)}>
                <Link href="/login">Log in</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
