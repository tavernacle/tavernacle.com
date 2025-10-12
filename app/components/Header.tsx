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
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="Tavernacle Social Club"
                width={180}
                height={60}
                className="h-12 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-medium transition-colors ${
                    isActive(link.href)
                      ? "text-[#f7931e]"
                      : "text-foreground hover:text-[#f7931e]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="bg-gradient-to-r from-[#f7931e] to-[#ff6b35] hover:from-[#ff6b35] hover:to-[#f7931e] text-black px-6 py-2.5 rounded-full font-semibold transition-all hover:scale-105"
              >
                Contact
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
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
            <div className="md:hidden pb-4 space-y-2">
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
                className="block mt-4 bg-gradient-to-r from-[#f7931e] to-[#ff6b35] hover:from-[#ff6b35] hover:to-[#f7931e] text-black px-6 py-2.5 rounded-full font-semibold text-center transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          )}
        </nav>
      </header>

      {/* Mobile menu overlay - closes menu when clicked */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </>
  );
}
