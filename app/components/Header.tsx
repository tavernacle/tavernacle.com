"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/venues", label: "Venues" },
    { href: "/shows", label: "Shows" },
    { href: "/menu", label: "Menu" },
    { href: "/schedule", label: "Schedule" },
    { href: "/about", label: "About" },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-md border-b border-white/5">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20 lg:relative">
            {/* Logo */}
            <Link href="/" className="flex items-center lg:absolute lg:left-0">
              <Image
                src="/logo.webp"
                alt="Tavernacle Social Club - Best Bar in Salt Lake City"
                width={180}
                height={60}
                className="h-12 w-auto"
                sizes="180px"
                quality={60}
                priority
                fetchPriority="high"
              />
            </Link>

            {/* Desktop Navigation - Centered */}
            <div className="hidden lg:flex items-center justify-center gap-2 lg:flex-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-medium transition-all px-4 py-2 rounded-full ${
                    isActive(link.href)
                      ? "text-[#f7931e] bg-[#f7931e]/10"
                      : "text-foreground hover:text-[#f7931e] hover:bg-[#f7931e]/10"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Reservations Button - Right aligned on desktop */}
            <div className="hidden lg:block lg:absolute lg:right-0">
              <Link
                href="/contact"
                className="bg-linear-to-r from-[#f7931e] to-[#ff6b35] hover:from-[#ff6b35] hover:to-[#f7931e] text-black px-6 py-2.5 rounded-full font-bold text-base transition-all hover:scale-105 shadow-lg"
              >
                Reservations
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {mobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile menu */}
          {mobileMenuOpen && (
            <div id="mobile-menu" className="lg:hidden pb-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block py-2 font-medium transition-colors ${
                    isActive(link.href)
                      ? "text-[#f7931e]"
                      : "text-foreground hover:text-[#f7931e]"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="block mt-4 bg-linear-to-r from-[#f7931e] to-[#ff6b35] hover:from-[#ff6b35] hover:to-[#f7931e] text-black px-8 py-3 rounded-full font-bold text-center transition-all shadow-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Reservations
              </Link>
            </div>
          )}
        </nav>
      </header>

      {/* Mobile menu overlay - closes menu when clicked */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </>
  );
}
