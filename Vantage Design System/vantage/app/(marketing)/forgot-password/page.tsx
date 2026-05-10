"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft } from "lucide-react";

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-[400px] space-y-10 animate-fade-in">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="size-12 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center shadow-premium mb-2">
            <span className="font-bold text-xl tracking-tighter uppercase">V</span>
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-white">Reset your password</h1>
          <p className="text-sm text-muted-foreground font-medium">Enter your email and we'll send you a reset link.</p>
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
          </div>

          <Button className="w-full h-11 rounded-full font-bold shadow-lg" size="lg">
            Send Reset Link
          </Button>
        </form>

        <p className="text-center">
          <Link href="/login" className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors font-bold">
            <ArrowLeft className="size-3" />
            Back to login
          </Link>
        </p>
      </div>
    </div>
  );
}
