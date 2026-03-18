import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-text-primary text-white py-20 w-full border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl">
                D
              </div>
              <span className="text-2xl font-bold text-primary">Dineo</span>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              Dineo is a QR-first restaurant ordering and POS platform that helps restaurants 
              manage orders, tables, billing, and payments from a single dashboard.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-primary hover:text-white transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8">Product</h4>
            <ul className="space-y-4">
              {["Features", "How it Works", "Kitchen View", "Customer View"].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-white/40 hover:text-primary transition-colors text-sm font-medium">{link}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8">Company</h4>
            <ul className="space-y-4">
              {["About Us", "Contact", "Careers", "Privacy Policy"].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-white/40 hover:text-primary transition-colors text-sm font-medium">{link}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8">Subscribe to Newsletter</h4>
            <p className="text-white/40 text-sm mb-6 font-medium">Get the latest restaurant tech updates.</p>
            <div className="flex gap-2">
              <input type="email" placeholder="Email address" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 flex-1" />
              <button className="bg-primary text-white p-3 rounded-xl hover:bg-primary-dark transition-all">
                <Check size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/20 text-xs font-bold uppercase tracking-widest">
            © 2026 Dineo Technologies Pvt Ltd. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link href="#" className="text-white/20 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest">Terms of Service</Link>
            <Link href="#" className="text-white/20 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Check({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
