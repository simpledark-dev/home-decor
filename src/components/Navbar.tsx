"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Trang chủ", href: "/" },
  { label: "Dự án", href: "/du-an" },
  { label: "Dịch vụ", href: "/dich-vu" },
  { label: "Về chúng tôi", href: "/gioi-thieu" },
  { label: "Liên hệ", href: "/lien-he" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl border-b border-black/5 shadow-[0_4px_30px_rgba(0,0,0,0.06)]"
          : "bg-white/95 backdrop-blur-xl border-b border-black/5"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-10 py-5 flex justify-between items-center">
        <Link href="/" className="font-serif text-2xl font-semibold tracking-wide">
          <span className="text-gold">LUXURY</span> HOUSE
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex gap-10 text-xs tracking-[2px] uppercase font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-dark hover:text-gold transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          href="/lien-he"
          className="hidden lg:inline-block bg-gold text-white px-8 py-3 text-[11px] tracking-[2px] uppercase font-medium hover:bg-dark transition-colors duration-400"
        >
          Tư Vấn Miễn Phí
        </Link>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          <span className={`block w-6 h-[1.5px] bg-dark transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`block w-6 h-[1.5px] bg-dark transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-[1.5px] bg-dark transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-black/5 px-10 py-8 flex flex-col gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm tracking-[2px] uppercase font-medium text-dark hover:text-gold transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/lien-he"
            className="bg-gold text-white px-8 py-3 text-[11px] tracking-[2px] uppercase font-medium text-center hover:bg-dark transition-colors mt-2"
            onClick={() => setMobileOpen(false)}
          >
            Tư Vấn Miễn Phí
          </Link>
        </div>
      )}
    </nav>
  );
}
