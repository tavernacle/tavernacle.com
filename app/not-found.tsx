import Link from "next/link";
import Header from "./components/Header";
import { Home, Calendar, UtensilsCrossed } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black">
      <Header />

      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Grid Background */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(247, 147, 30, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(247, 147, 30, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />

        {/* Animated Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-[#f7931e]/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="relative min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="text-center max-w-2xl">
          {/* 404 Number */}
          <div className="mb-8">
            <h1 className="text-8xl sm:text-9xl font-black text-transparent bg-clip-text bg-linear-to-br from-[#f7931e] to-[#ff6b35] mb-4 leading-none">
              404
            </h1>
            <div className="h-1 w-24 bg-linear-to-r from-[#f7931e] to-[#ff6b35] mx-auto rounded-full" />
          </div>

          {/* Message */}
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
            Page Not Found
          </h2>
          <p className="text-lg sm:text-xl text-foreground/70 mb-12 leading-relaxed">
            Looks like this page took a wrong turn on Broadway. Let's get you
            back to the party!
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 bg-linear-to-r from-[#f7931e] to-[#ff6b35] hover:from-[#ff6b35] hover:to-[#f7931e] text-black px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105"
            >
              <Home className="w-5 h-5" />
              Go Home
            </Link>
            <Link
              href="/schedule"
              className="inline-flex items-center justify-center gap-2 glass-effect border border-[#f7931e]/30 hover:bg-[#f7931e]/10 text-foreground px-8 py-4 rounded-full font-bold text-lg transition-all"
            >
              <Calendar className="w-5 h-5" />
              See Schedule
            </Link>
            <Link
              href="/menu"
              className="inline-flex items-center justify-center gap-2 glass-effect border border-[#f7931e]/30 hover:bg-[#f7931e]/10 text-foreground px-8 py-4 rounded-full font-bold text-lg transition-all"
            >
              <UtensilsCrossed className="w-5 h-5" />
              View Menu
            </Link>
          </div>

          {/* Quick Links */}
          <div className="glass-effect rounded-xl p-8 border border-white/10">
            <p className="text-sm text-foreground/60 mb-4">
              Looking for something specific?
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link
                href="/about"
                className="text-foreground/70 hover:text-[#f7931e] transition-colors"
              >
                About Us
              </Link>
              <Link
                href="/shows"
                className="text-foreground/70 hover:text-[#f7931e] transition-colors"
              >
                Our Shows
              </Link>
              <Link
                href="/venues"
                className="text-foreground/70 hover:text-[#f7931e] transition-colors"
              >
                Event Venues
              </Link>
              <Link
                href="/menu"
                className="text-foreground/70 hover:text-[#f7931e] transition-colors"
              >
                Menu
              </Link>
              <Link
                href="/contact"
                className="text-foreground/70 hover:text-[#f7931e] transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
