import { MarketingNav } from "@/components/marketing/Nav";
import Link from "next/link";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <MarketingNav />
      <main className="flex-1">{children}</main>
      <footer className="border-t border-white/5 py-20 bg-black/20">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
            <div className="col-span-2">
              <Link href="/" className="inline-block font-bold text-xl tracking-tighter uppercase mb-6">
                Vantage
              </Link>
              <p className="max-w-xs text-sm text-muted-foreground leading-relaxed">
                The operating system for elite esports performance and organizational excellence. 
                Built for those who demand the absolute best.
              </p>
            </div>
            <div>
              <h5 className="font-bold text-xs uppercase tracking-widest text-white mb-6">Product</h5>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li><Link href="#" className="hover:text-white transition-colors">Features</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Analytics</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Automation</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Pricing</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-xs uppercase tracking-widest text-white mb-6">Company</h5>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li><Link href="#" className="hover:text-white transition-colors">About</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Contact</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Privacy</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-xs uppercase tracking-widest text-white mb-6">Connect</h5>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li><Link href="#" className="hover:text-white transition-colors">Twitter</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Discord</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">GitHub</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">LinkedIn</Link></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-white/5">
            <p className="text-xs text-muted-foreground">
              © 2026 Vantage Performance Inc. All rights reserved.
            </p>
            <div className="flex gap-8 text-xs text-muted-foreground">
              <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
