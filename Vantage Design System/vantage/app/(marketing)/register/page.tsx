"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ShieldCheck, CheckCircle2 } from "lucide-react";

export default function RegisterPage() {
  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-[450px] space-y-10 animate-fade-in">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="size-12 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center shadow-premium mb-2">
            <span className="font-bold text-xl tracking-tighter uppercase">V</span>
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-white">Create your account</h1>
          <p className="text-sm text-muted-foreground font-medium">Join the elite platform for esports performance.</p>
        </div>

        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="first-name" className="text-[11px] font-bold uppercase tracking-widest text-white/40">First Name</Label>
              <Input 
                id="first-name" 
                placeholder="Tirth" 
                className="h-11 bg-white/[0.02] border-white/5 focus:border-white/10 transition-colors rounded-xl font-medium"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="last-name" className="text-[11px] font-bold uppercase tracking-widest text-white/40">Last Name</Label>
              <Input 
                id="last-name" 
                placeholder="Patel" 
                className="h-11 bg-white/[0.02] border-white/5 focus:border-white/10 transition-colors rounded-xl font-medium"
              />
            </div>
          </div>
          
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
              <Label htmlFor="password" className="text-[11px] font-bold uppercase tracking-widest text-white/40">Password</Label>
              <Input 
                id="password" 
                type="password" 
                placeholder="••••••••" 
                className="h-11 bg-white/[0.02] border-white/5 focus:border-white/10 transition-colors rounded-xl font-medium"
              />
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-3 p-4 rounded-xl border border-white/5 bg-white/[0.01]">
              <CheckCircle2 className="size-4 text-white/40 mt-0.5 shrink-0" />
              <p className="text-[12px] text-muted-foreground leading-relaxed">
                I agree to the <Link href="#" className="text-white hover:underline">Terms of Service</Link> and <Link href="#" className="text-white hover:underline">Privacy Policy</Link>.
              </p>
            </div>
          </div>

          <Button className="w-full h-11 rounded-full font-bold shadow-lg" size="lg">
            Create Account
          </Button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-white/5" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-4 text-white/20 font-bold tracking-widest">Or sign up with</span>
            </div>
          </div>

          <Button variant="outline" className="w-full h-11 rounded-full border-white/5 bg-white/[0.02] font-bold hover:bg-white/5 transition-all">
            Riot Sign-On
          </Button>
        </form>

        <p className="text-center text-sm text-muted-foreground font-medium">
          Already have an account?{" "}
          <Link href="/login" className="text-white hover:underline font-bold">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}
