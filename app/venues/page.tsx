import Header from "../components/Header";
import { Music, UtensilsCrossed, Trees, MapPin, Cigarette } from "lucide-react";

export default function VenuesPage() {
  return (
    <div>
      <Header />

      {/* Hero Section with gradient background */}
      <div className="relative pt-32 pb-24 overflow-hidden">
        {/* Grid Background */}
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(247, 147, 30, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(247, 147, 30, 0.1) 1px, transparent 1px)
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
          <div className="text-center mb-16">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black mb-6">
              <span className="text-[#f7931e]">Three Unique</span>
              <br />
              <span className="text-foreground">Venues</span>
            </h1>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              One unforgettable experience under one roof
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-24">
            <div className="glass-effect rounded-2xl p-8 hover:bg-white/10 transition-all group">
              <Music className="w-12 h-12 mb-4 text-[#f7931e]" />
              <h3 className="text-2xl font-bold mb-4 group-hover:text-[#f7931e] transition-colors">
                The Tavernacle
              </h3>
              <p className="text-foreground/70 mb-6 leading-relaxed">
                Our main stage hosts live dueling pianos 7 nights a week.
                Experience the energy of live performance in an intimate setting
                with world-class sound and the best crowd in town.
              </p>
              <ul className="space-y-2 text-foreground/60">
                <li className="flex items-center">
                  <span className="text-[#f7931e] mr-2">→</span>
                  Live dueling pianos nightly
                </li>
                <li className="flex items-center">
                  <span className="text-[#f7931e] mr-2">→</span>
                  Premium sound system
                </li>
                <li className="flex items-center">
                  <span className="text-[#f7931e] mr-2">→</span>
                  Full bar & local brews
                </li>
                <li className="flex items-center">
                  <span className="text-[#f7931e] mr-2">→</span>
                  Open 7 days a week
                </li>
              </ul>
            </div>

            {/* Steyk Center */}
            <div className="glass-effect rounded-2xl p-8 hover:bg-white/10 transition-all group">
              <UtensilsCrossed className="w-12 h-12 mb-4 text-[#f7931e]" />
              <h3 className="text-2xl font-bold mb-4 group-hover:text-[#f7931e] transition-colors">
                Steyk Center
              </h3>
              <p className="text-foreground/70 mb-6 leading-relaxed">
                A full-service restaurant next door serving expertly crafted
                burgers, wings, steaks, and more. Steyk Center is its own
                entity—order your food there and enjoy it at the Tavernacle!
              </p>
              <ul className="space-y-2 text-foreground/60">
                <li className="flex items-center">
                  <span className="text-[#f7931e] mr-2">→</span>
                  50¢ Wings specials
                </li>
                <li className="flex items-center">
                  <span className="text-[#f7931e] mr-2">→</span>
                  Burgers, steaks & more
                </li>
                <li className="flex items-center">
                  <span className="text-[#f7931e] mr-2">→</span>
                  Dine-in, takeout & delivery
                </li>
                <li className="flex items-center">
                  <span className="text-[#f7931e] mr-2">→</span>
                  <a
                    href="https://steykcenter.net/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#f7931e] transition-colors"
                  >
                    Visit steykcenter.net
                  </a>
                </li>
              </ul>
            </div>

            {/* The Patio */}
            <div className="glass-effect rounded-2xl p-8 hover:bg-white/10 transition-all group">
              <Trees className="w-12 h-12 mb-4 text-[#f7931e]" />
              <h3 className="text-2xl font-bold mb-4 group-hover:text-[#f7931e] transition-colors">
                The Patio
              </h3>
              <p className="text-foreground/70 mb-6 leading-relaxed">
                An outdoor oasis in the heart of downtown. Enjoy fresh air,
                ambient lighting, and a relaxed atmosphere perfect for
                socializing under the stars.
              </p>
              <ul className="space-y-2 text-foreground/60">
                <li className="flex items-center">
                  <span className="text-[#f7931e] mr-2">→</span>
                  Outdoor seating
                </li>
                <li className="flex items-center">
                  <span className="text-[#f7931e] mr-2">→</span>
                  Ambient lighting
                </li>
                <li className="flex items-center">
                  <Cigarette className="w-4 h-4 text-[#f7931e] mr-2" />
                  <strong>Smoking-friendly patio</strong>
                </li>
                <li className="flex items-center">
                  <span className="text-[#f7931e] mr-2">→</span>
                  Perfect for groups
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
