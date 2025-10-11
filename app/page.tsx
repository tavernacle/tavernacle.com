import Header from "./components/Header";
import {
  Music,
  UtensilsCrossed,
  Wine,
  Calendar,
  Sparkles,
  Clock,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/tavernacle-stage.jpg"
            alt="Tavernacle stage"
            fill
            className="object-cover blur-sm opacity-40"
            priority
          />
          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Gradient Background overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-950/50 via-black/30 to-black/60"></div>

        {/* Grid Overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(247, 147, 30, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(247, 147, 30, 0.3) 1px, transparent 1px)`,
            backgroundSize: "100px 100px",
          }}
        ></div>

        {/* Animated Orbs */}
        <div className="absolute inset-0 opacity-20">
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

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20 sm:py-24">
          {/* Logo */}
          <div className="mb-6">
            <Image
              src="/logo.png"
              alt="Tavernacle Social Club"
              width={600}
              height={200}
              className="mx-auto h-28 sm:h-32 md:h-36 w-auto"
              priority
            />
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#f7931e]/50 bg-[#f7931e]/5 mb-6">
            <Sparkles className="text-[#f7931e]" size={14} />
            <span className="text-[#f7931e] text-sm font-medium tracking-wide">
              SLC&apos;s Original Dueling Piano Bar Since 2002
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 tracking-tight leading-none">
            <span className="text-[#f7931e]">THE SHOW STARTS</span>
            <br />
            <span className="text-foreground">THE MOMENT </span>
            <span className="text-[#f7931e]">YOU</span>
            <span className="text-foreground"> WALK IN</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-foreground/70 mb-10 max-w-3xl mx-auto leading-relaxed">
            Where downtown Salt Lake comes alive. Live dueling pianos, great
            food, good drinks, and the best crowd in the city.
          </p>

          {/* Feature Icons */}
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mb-10 text-[#f7931e]">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span className="text-sm sm:text-base font-medium">
                Open 6pm - 1am
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
              href="/contact"
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
