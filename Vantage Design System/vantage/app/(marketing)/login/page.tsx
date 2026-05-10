"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ShieldCheck } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-[400px] space-y-10 animate-fade-in">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="size-12 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center shadow-premium mb-2">
            <span className="font-bold text-xl tracking-tighter uppercase">V</span>
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-white">Welcome back</h1>
          <p className="text-sm text-muted-foreground font-medium">Enter your credentials to access your dashboard.</p>
        </div>

        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-[11px] font-bold uppercase tracking-widest text-white/40">Email Address</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="name@company.com" 
                className="h-11 bg-white/[0.02] border-white/5 focus:border-white/10 transition-colors rounded-xl font-medium"
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password" className="text-[11px] font-bold uppercase tracking-widest text-white/40">Password</Label>
                <Link href="/forgot-password" className="text-[11px] font-bold text-white/40 hover:text-white transition-colors">
                  Forgot?
                </Link>
              </div>
              <Input 
                id="password" 
                type="password" 
                placeholder="••••••••" 
                className="h-11 bg-white/[0.02] border-white/5 focus:border-white/10 transition-colors rounded-xl font-medium"
              />
            </div>
          </div>

          <Button className="w-full h-11 rounded-full font-bold shadow-lg" size="lg">
            Sign In
          </Button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-white/5" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-4 text-white/20 font-bold tracking-widest">Or continue with</span>
            </div>
          </div>

          <Button variant="outline" className="w-full h-11 rounded-full border-white/5 bg-white/[0.02] font-bold hover:bg-white/5 transition-all">
            Riot Sign-On
          </Button>
        </form>

        <p className="text-center text-sm text-muted-foreground font-medium">
          Don't have an account?{" "}
          <Link href="/register" className="text-white hover:underline font-bold">
            Join Vantage
          </Link>
        </p>

        <div className="pt-8 border-t border-white/5 flex items-center justify-center gap-2 text-white/20">
          <ShieldCheck className="size-3.5" />
          <span className="text-[10px] font-bold uppercase tracking-wider">Enterprise Security Guaranteed</span>
        </div>
      </div>
    </div>
  );
}
