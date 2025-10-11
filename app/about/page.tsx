import Header from "../components/Header";
import { Music, Calendar, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div>
      <Header />

      {/* Hero Section with gradient background */}
      <div className="relative pt-32 pb-24 overflow-hidden">
        {/* Grid Background - Made more visible */}
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(247, 147, 30, 0.15) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(247, 147, 30, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />

        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-950/20 via-black to-black pointer-events-none" />

        {/* Animated Orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute top-20 right-1/4 w-72 h-72 bg-amber-500/15 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Hero Title */}
          <div className="text-center mb-20">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black mb-6 leading-tight">
              <span className="text-foreground">About </span>
              <span className="text-[#f7931e]">The Tavernacle</span>
            </h1>
            <p className="text-2xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
              SLC's legendary dueling piano bar since 2002
            </p>
          </div>

          {/* Quick Stats - Integrated Design */}
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-6xl sm:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-br from-[#f7931e] to-[#ff6b35] mb-2">
                23+
              </div>
              <div className="text-foreground/60 font-medium text-sm uppercase tracking-wider">
                Years Strong
              </div>
            </div>

            <div className="hidden md:block w-px h-20 bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>

            <div className="text-center">
              <div className="text-6xl sm:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-br from-[#f7931e] to-[#ff6b35] mb-2">
                7
              </div>
              <div className="text-foreground/60 font-medium text-sm uppercase tracking-wider">
                Nights a Week
              </div>
            </div>

            <div className="hidden md:block w-px h-20 bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>

            <div className="text-center">
              <div className="text-6xl sm:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-br from-[#f7931e] to-[#ff6b35] mb-2">
                3
              </div>
              <div className="text-foreground/60 font-medium text-sm uppercase tracking-wider">
                Unique Venues
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Story Section - Clean Design */}
      <div className="relative py-20 overflow-hidden bg-[#0a0a0a]">
        {/* Top Border */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-[#f7931e]">Our Story</span>
              </h2>
              <div className="space-y-4 text-lg text-foreground/80 leading-relaxed">
                <p>
                  For over two decades, we've been bringing world-class
                  entertainment to the heart of Salt Lake City. What started as
                  a bold vision has evolved into{" "}
                  <strong className="text-[#f7931e]">
                    three distinct venues
                  </strong>{" "}
                  under one roof.
                </p>
                <p>
                  Our legendary dueling piano shows draw crowds every single
                  night—people come for the music and stay for the energy, the
                  drinks, and the best crowd in SLC.
                </p>
              </div>
            </div>
            {/* Quote Card - Dark Cutout with Grid */}
            <div className="relative rounded-2xl p-8 bg-black/80 border border-white/5 overflow-hidden">
              {/* Grid Background Inside Card */}
              <div
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                  backgroundImage: `
                    linear-gradient(to right, rgba(247, 147, 30, 0.3) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(247, 147, 30, 0.3) 1px, transparent 1px)
                  `,
                  backgroundSize: "30px 30px",
                }}
              />
              <div className="relative z-10">
                <Music className="w-16 h-16 text-[#f7931e]/60 mx-auto mb-6" />
                <blockquote className="text-2xl font-light italic text-center text-foreground/90 mb-4">
                  "The Happy Place - with booze"
                </blockquote>
                <p className="text-center text-foreground/60 text-sm">
                  Whether you're celebrating, unwinding, or just looking for a
                  good time, this is where you belong.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      {/* The First Presidency of FUN! - Black Background */}
      <div className="relative py-20 overflow-hidden bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-black mb-6">
              <span className="text-foreground">The First Presidency of </span>
              <span className="text-[#f7931e]">FUN!</span>
            </h2>
            <p className="text-lg text-foreground/70 max-w-4xl mx-auto leading-relaxed">
              Our executive team isn't just running the show—they're
              orchestrating revelations in entertainment, food, and good times.
              With deep roots in Utah and a reverence for rebellion, these
              former choir boys and Relief Society misfits traded pews for
              pianos and potlucks for party planning. Now they lead The
              Tavernacle with a sacred mission:{" "}
              <strong className="text-[#f7931e]">
                make every night unforgettable
              </strong>
              .
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {/* Troy Baldwin */}
            <div className="glass-effect rounded-2xl overflow-hidden hover:bg-white/10 transition-all group">
              <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02]">
                <Image
                  src="/people/troy.png"
                  alt="Troy Baldwin"
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-1 text-foreground">
                  Troy Baldwin
                </h3>
                <p className="text-[#f7931e] font-semibold mb-2">
                  President/Entertainer
                </p>
              </div>
            </div>

            {/* Tiffany Oaks */}
            <div className="glass-effect rounded-2xl overflow-hidden hover:bg-white/10 transition-all group">
              <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02]">
                <Image
                  src="/people/tiffany.png"
                  alt="Tiffany Oaks"
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-1 text-foreground">
                  Tiffany Oaks
                </h3>
                <p className="text-[#f7931e] font-semibold mb-2">Bar Manager</p>
              </div>
            </div>

            {/* Jodie Rogers */}
            <div className="glass-effect rounded-2xl overflow-hidden hover:bg-white/10 transition-all group">
              <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02]">
                <Image
                  src="/people/jodie.png"
                  alt="Jodie Rogers"
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-1 text-foreground">
                  Jodie Rogers
                </h3>
                <p className="text-[#f7931e] font-semibold mb-2">
                  Executive Chef
                </p>
              </div>
            </div>

            {/* Mike Rogers */}
            <div className="glass-effect rounded-2xl overflow-hidden hover:bg-white/10 transition-all group">
              <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02]">
                <Image
                  src="/people/mike.png"
                  alt="Mike Rogers"
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-1 text-foreground">
                  Mike Rogers
                </h3>
                <p className="text-[#f7931e] font-semibold mb-2">Entertainer</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative pt-32 pb-24 overflow-hidden bg-zinc-950">
        {/* Diagonal Stripes Background */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              #f7931e,
              #f7931e 2px,
              transparent 2px,
              transparent 20px
            )`,
          }}
        />

        {/* Accent Border Lines */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f7931e]/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f7931e]/30 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Music className="w-16 h-16 text-[#f7931e] mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-6">
              <span className="text-foreground">Ready to Experience </span>
              <span className="text-[#f7931e]">The Magic?</span>
            </h2>
            <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
              Whether you're planning a night out or looking to book your next
              event, we're here to make it unforgettable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/schedule"
                className="inline-flex items-center gap-2 bg-[#f7931e] hover:bg-[#ff6b35] text-black px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105"
              >
                <Calendar className="w-5 h-5" />
                See What's Coming
              </Link>
              <Link
                href="/venues"
                className="inline-flex items-center gap-2 border-2 border-foreground/20 hover:border-[#f7931e] hover:bg-[#f7931e]/10 text-foreground px-8 py-4 rounded-full font-bold text-lg transition-all"
              >
                <MapPin className="w-5 h-5" />
                Visit Our Venues
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
