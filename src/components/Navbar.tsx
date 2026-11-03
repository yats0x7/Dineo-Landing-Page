"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Logo from "./Logo";

const navLinks = [
  { name: "How it works", href: "#how-it-works" },
  { name: "Features", href: "#features" },
  { name: "Live demo", href: "#demo" },
  { name: "Pricing", href: "#pricing" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,padding] duration-300 ${
        isScrolled || isMobileMenuOpen ? "bg-ground py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="frame flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5" aria-label="Dineo home">
          <Logo />
        </Link>

        <div className="hidden lg:flex items-center gap-9">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-body text-ink hover:text-action-dark transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#contact"
            className="press bg-ink text-ground hover:bg-action px-5 py-2.5 rounded-tile text-body font-semibold"
          >
            Book a free demo
          </Link>
        </div>

        <button
          className="lg:hidden text-ink p-2 -mr-2"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden frame flex flex-col gap-1 pt-4 pb-6">
          {[...navLinks, { name: "Contact", href: "#contact" }].map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="py-2.5 text-lead font-medium text-ink"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="press mt-3 bg-action text-white px-6 py-4 rounded-tile text-body font-semibold text-center"
          >
            Book a free demo
          </Link>
        </div>
      )}
    </nav>
  );
}
