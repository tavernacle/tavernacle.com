import Header from "../components/Header";
import {
  Music,
  UtensilsCrossed,
  Trees,
  MapPin,
  Users,
  Phone,
  Mail,
} from "lucide-react";
import Link from "next/link";
import VenueImage from "../components/VenueImage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Private Event Venues - Three Unique Spaces for Your Celebration",
  description:
    "Host your next event at Tavernacle Social Club! Three unique venues in downtown Salt Lake City perfect for private parties, corporate events, weddings, and celebrations. Accommodating groups of all sizes with full service bar and catering.",
  keywords: [
    "private event venue Salt Lake City",
    "party venue downtown SLC",
    "corporate event space Utah",
    "wedding venue Salt Lake City",
    "birthday party venue SLC",
    "event space downtown Salt Lake",
  ],
  openGraph: {
    title: "Private Event Venues - Tavernacle Social Club SLC",
    description:
      "Three unique event spaces in the heart of downtown Salt Lake City. Perfect for any celebration!",
  },
};

export default function VenuesPage() {
  return (
    <div>
      <Header />

      {/* Hero Section with gradient background */}
      <div className="relative pt-32 pb-12 overflow-hidden">
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
        <div className="absolute inset-0 bg-linear-to-b from-purple-950/20 via-black to-black pointer-events-none" />

        {/* Animated Orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute top-20 right-1/4 w-72 h-72 bg-amber-500/15 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black mb-6">
              <span className="text-[#f7931e]">Your Party,</span>
              <br />
              <span className="text-foreground">Your Way</span>
            </h1>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              The Tavernacle Social Club features multiple customizable
              spaces—from our live music venue to restaurant-style dining and a
              full outdoor patio. Let's make your next event unforgettable.
            </p>
          </div>
        </div>
      </div>

      {/* Venue Sections - Alternating Layout */}
      <div className="relative bg-[#0a0a0a]">
        {/* The Tavernacle - Image Right */}
        <div className="relative py-20 overflow-hidden">
          {/* Top Border */}
          <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div className="order-1">
                <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-[#f7931e]/10 border border-[#f7931e]/20">
                  <Music className="w-4 h-4 text-[#f7931e]" />
                  <span className="text-sm font-semibold text-[#f7931e]">
                    The Venue
                  </span>
                </div>
                <h2 className="text-4xl font-bold mb-4">
                  <span className="text-foreground">The Tavernacle</span>
                </h2>
                <div className="flex items-center gap-2 mb-6">
                  <Users className="w-5 h-5 text-[#f7931e]" />
                  <span className="text-lg text-foreground/70 font-medium">
                    Up to 120 guests
                  </span>
                </div>
                <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                  Salt Lake City's ultimate private event venue, available for
                  full buyouts and unforgettable celebrations. With seating for
                  up to 120 guests, our space combines the energy of a
                  live-music venue with the comfort of a full-service bar and
                  restaurant.
                </p>
                <p className="text-foreground/70 mb-8 leading-relaxed">
                  A state-of-the-art sound and lighting system ensures every
                  toast, performance, or announcement shines with impact. From
                  corporate parties and birthdays to weddings and team outings,
                  our staff delivers seamless service, customizable food and
                  drink packages, and unforgettable entertainment.
                </p>
                <div className="flex flex-wrap gap-3">
                  <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-foreground/70">
                    Live Dueling Pianos
                  </div>
                  <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-foreground/70">
                    Premium Sound & Lighting
                  </div>
                  <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-foreground/70">
                    Full-Service Bar
                  </div>
                  <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-foreground/70">
                    Private Events
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="relative order-2 lg:order-last">
                <VenueImage
                  venueSlug="tavernacle"
                  alt="The Tavernacle interior - Downtown Salt Lake City piano bar venue"
                  className="w-full"
                  layoutVariant="A"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* The Steyk Center - Image Left */}
        <div className="relative py-20 overflow-hidden bg-black/40">
          {/* Top Border */}
          <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div className="relative order-2 lg:order-first">
                <VenueImage
                  venueSlug="steyk-center"
                  alt="The Steyk Center restaurant - Private event space in Salt Lake City"
                  className="w-full"
                  layoutVariant="B"
                />
              </div>

              {/* Content */}
              <div className="order-1">
                <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-[#f7931e]/10 border border-[#f7931e]/20">
                  <UtensilsCrossed className="w-4 h-4 text-[#f7931e]" />
                  <span className="text-sm font-semibold text-[#f7931e]">
                    The Restaurant
                  </span>
                </div>
                <h2 className="text-4xl font-bold mb-4">
                  <span className="text-foreground">The Steyk Center</span>
                </h2>
                <div className="flex items-center gap-2 mb-6">
                  <Users className="w-5 h-5 text-[#f7931e]" />
                  <span className="text-lg text-foreground/70 font-medium">
                    Up to 80 guests
                  </span>
                </div>
                <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                  The perfect spot for private parties, casual gatherings, and
                  live entertainment in a more intimate setting. Seating up to
                  80 guests, the restaurant features a smaller stage ideal for
                  pub games, trivia, and live music acts ranging from solo
                  performers to trios.
                </p>
                <p className="text-foreground/70 mb-8 leading-relaxed">
                  With TVs throughout the space, it's also great for watch
                  parties and casual celebrations. Guests can enjoy excellent
                  food, a full bar, and a carefully curated wine selection.
                  Whether it's a team outing, reunion, or just a night of fun,
                  the Steyk Center delivers unforgettable experiences.
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                  <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-foreground/70">
                    Full Bar
                  </div>
                  <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-foreground/70">
                    TVs for Watch Parties
                  </div>
                  <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-foreground/70">
                    Live Entertainment
                  </div>
                  <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-foreground/70">
                    Wine Selection
                  </div>
                </div>
                <a
                  href="https://steykcenter.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#f7931e] hover:text-[#ff6b35] transition-colors font-semibold"
                >
                  Visit steykcenter.net
                  <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* The Patio - Image Right */}
        <div className="relative py-20 overflow-hidden">
          {/* Top Border */}
          <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div className="order-1">
                <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-[#f7931e]/10 border border-[#f7931e]/20">
                  <Trees className="w-4 h-4 text-[#f7931e]" />
                  <span className="text-sm font-semibold text-[#f7931e]">
                    The Patio
                  </span>
                </div>
                <h2 className="text-4xl font-bold mb-4">
                  <span className="text-foreground">The Tavernacle Patio</span>
                </h2>
                <div className="flex items-center gap-2 mb-6">
                  <Users className="w-5 h-5 text-[#f7931e]" />
                  <span className="text-lg text-foreground/70 font-medium">
                    80-100 guests
                  </span>
                </div>
                <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                  Step outside and experience our urban oasis in the heart of
                  downtown Salt Lake City. Nestled beneath the American Towers
                  and the Wells Fargo Building, our patio hosts 80–100 guests
                  for everything from DJ dance parties and live bands to
                  day-drinking crews soaking in the city vibes.
                </p>
                <p className="text-foreground/70 mb-8 leading-relaxed">
                  With plenty of space, unbeatable atmosphere, and the perfect
                  mix of energy and relaxation, the Tavernacle patio turns any
                  gathering into a one-of-a-kind downtown celebration.
                </p>
                <div className="flex flex-wrap gap-3">
                  <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-foreground/70">
                    Outdoor Atmosphere
                  </div>
                  <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-foreground/70">
                    DJ & Live Bands
                  </div>
                  <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-foreground/70">
                    Downtown Location
                  </div>
                  <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-foreground/70">
                    City Vibes
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="relative order-2 lg:order-last">
                <VenueImage
                  venueSlug="patio"
                  alt="The Tavernacle Patio - Outdoor event space in downtown SLC"
                  className="w-full"
                  layoutVariant="D"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative py-24 overflow-hidden bg-zinc-950">
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
        <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#f7931e]/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#f7931e]/30 to-transparent" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl font-bold mb-6">
            <span className="text-foreground">Ready to Book </span>
            <span className="text-[#f7931e]">Your Event?</span>
          </h2>
          <p className="text-lg text-foreground/70 mb-10 leading-relaxed max-w-2xl mx-auto">
            Whether you're planning a wild birthday bash, a classy cocktail
            reception, a private concert, or a corporate mixer—we'll help you
            shape the experience exactly how you want it.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#f7931e] hover:bg-[#ff6b35] text-black px-10 py-5 rounded-full font-bold text-lg transition-all hover:scale-105"
          >
            <Mail className="w-5 h-5" />
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
}
