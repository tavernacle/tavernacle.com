import Header from "./components/Header";
import { Music, UtensilsCrossed, Wine, Calendar, Sparkles } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/30 to-black"></div>

        {/* Animated Orbs */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        {/* Grid Overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(rgba(251, 191, 36, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(251, 191, 36, 0.3) 1px, transparent 1px)`,
            backgroundSize: "100px 100px",
          }}
        ></div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-32">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-[#f7931e] bg-[#f7931e]/10 mb-8">
            <Sparkles className="text-[#f7931e]" size={16} />
            <span className="text-[#f7931e] font-semibold tracking-wide">
              SLC&apos;s Original Dueling Piano Bar Since 2002
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight leading-none">
            <span className="text-[#f7931e]">THE SHOW STARTS</span>
            <br />
            <span className="text-foreground">THE MOMENT </span>
            <span className="text-[#f7931e]">YOU</span>
            <span className="text-foreground"> WALK IN</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-foreground/70 mb-12 max-w-3xl mx-auto leading-relaxed">
            Where downtown Salt Lake comes alive. Live dueling pianos, great
            food, good drinks, and the best crowd in the city.
          </p>

          {/* Feature Icons */}
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mb-12 text-[#f7931e]">
            <div className="flex items-center gap-2">
              <Music className="w-5 h-5" />
              <span className="text-sm sm:text-base font-medium">
                Live Every Night
              </span>
            </div>
            <div className="flex items-center gap-2">
              <UtensilsCrossed className="w-5 h-5" />
              <span className="text-sm sm:text-base font-medium">
                Full Kitchen
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Wine className="w-5 h-5" />
              <span className="text-sm sm:text-base font-medium">
                Local Brews
              </span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link
              href="/events"
              className="bg-[#f7931e] hover:bg-[#ff6b35] text-black px-10 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 inline-flex items-center gap-2"
            >
              <Calendar className="w-5 h-5" />
              Book Your Event
            </Link>
            <Link
              href="/schedule"
              className="border-2 border-foreground/20 hover:border-[#f7931e] hover:bg-[#f7931e]/10 text-foreground px-10 py-4 rounded-full font-bold text-lg transition-all"
            >
              See This Week's Shows
            </Link>
          </div>

          {/* Tagline */}
          <div className="space-y-2">
            <p className="text-foreground/60 text-sm uppercase tracking-wider">
              Open 7 Days a Week
            </p>
            <p className="text-[#f7931e] text-xl italic font-semibold">
              &quot;The Happy Place - with booze&quot;
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
