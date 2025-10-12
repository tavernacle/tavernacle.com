import Header from "./components/Header";
import {
  Music,
  UtensilsCrossed,
  Wine,
  Calendar,
  Sparkles,
  Clock,
  MapPin,
  Phone,
  Car,
  Lightbulb,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "./lib/seo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Tavernacle Social Club | Salt Lake City's Premier Dueling Piano Bar & Live Music Venue",
  description:
    "Salt Lake City's premier destination for live music and unforgettable experiences since 2002. Live entertainment every night, local beers, cocktails, great food, and the best vibe in downtown SLC. Open 6pm-1am.",
  keywords: [
    "Salt Lake City bars",
    "downtown SLC nightlife",
    "piano bar Salt Lake City",
    "dueling pianos SLC",
    "live music Salt Lake City",
    "bars near me Salt Lake City",
    "best bars in Salt Lake City",
    "downtown Salt Lake City nightlife",
    "live entertainment SLC",
    "SLC piano bar",
    "what to do tonight SLC",
    "Broadway SLC",
    "LGBTQ+ friendly bars SLC",
    "local beer Salt Lake City",
    "Utah breweries downtown",
  ],
  openGraph: {
    title:
      "Tavernacle Social Club | SLC's Premier Piano Bar & Live Music Venue",
    description:
      "Salt Lake City's premier destination for live music since 2002. Dueling pianos, local beers, cocktails, great food & unforgettable entertainment. Open nightly 6pm-1am.",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tavernacle Social Club - Salt Lake City's Premier Piano Bar",
      },
    ],
  },
};

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

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-32 pb-20 sm:py-24">
          {/* Logo */}
          <div className="mb-6 md:mt-16 lg:mt-16">
            <Image
              src="/logo.png"
              alt="Tavernacle Social Club - Salt Lake City's Premier Dueling Piano Bar"
              width={600}
              height={200}
              className="mx-auto h-24 sm:h-28 md:h-32 lg:h-36 w-auto"
              priority
            />
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#f7931e]/50 bg-[#f7931e]/5 mb-6">
            <Sparkles className="text-[#f7931e] flex-shrink-0" size={14} />
            <span className="text-[#f7931e] text-xs sm:text-sm font-medium tracking-wide">
              SLC's Original Dueling Piano Bar Since 2002
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
            Salt Lake City's premier destination for live music and
            unforgettable experiences since 2002. Live entertainment every
            night, cocktails, great food, and the best vibe in downtown SLC.
            Doors open at 6pm.
          </p>

          {/* Feature Icons */}
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mb-10">
            <Link
              href="/schedule"
              className="flex items-center gap-2 text-[#f7931e] hover:text-[#ff6b35] transition-colors"
            >
              <Music className="w-5 h-5" />
              <span className="text-sm sm:text-base font-medium">
                Live Shows Nightly
              </span>
            </Link>
            <Link
              href="/menu"
              className="flex items-center gap-2 text-foreground hover:text-[#f7931e] transition-colors"
            >
              <Wine className="w-5 h-5" />
              <span className="text-sm sm:text-base font-medium">
                Cocktails & local brews
              </span>
            </Link>
            <Link
              href="/menu#food"
              className="flex items-center gap-2 text-foreground hover:text-[#f7931e] transition-colors"
            >
              <UtensilsCrossed className="w-5 h-5" />
              <span className="text-sm sm:text-base font-medium">
                Full Kitchen
              </span>
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Link
              href="/schedule"
              className="bg-[#f7931e] hover:bg-[#ff6b35] text-black px-10 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 inline-flex items-center gap-2"
            >
              <Music className="w-5 h-5" />
              See Tonight's Show
            </Link>
            <Link
              href="/menu"
              className="border-2 border-[#f7931e] hover:bg-[#f7931e]/20 text-foreground px-10 py-4 rounded-full font-bold text-lg transition-all inline-flex items-center gap-2"
            >
              <Wine className="w-5 h-5" />
              View Menu
            </Link>
          </div>

          {/* Secondary CTA - Smaller */}
          <div className="mb-16">
            <Link
              href="/contact"
              className="text-foreground/70 hover:text-[#f7931e] text-sm transition-colors inline-flex items-center gap-1"
            >
              Planning a private event?
              <span className="underline">Book here</span>
            </Link>
          </div>

          {/* Tagline */}
          <div className="space-y-4">
            <p className="text-foreground/60 text-sm uppercase tracking-wider">
              Open 7 Days a Week · 6pm-1am
            </p>

            <div className="flex flex-col items-center justify-center gap-3 text-foreground/60 text-sm">
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <MapPin className="w-4 h-4 text-[#f7931e]" />
                  <span className="text-foreground/80 font-medium">
                    Broadway Media Building
                  </span>
                </div>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Tavernacle+Social+Club,+50+W+Broadway,+Salt+Lake+City,+UT+84101"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#f7931e] transition-colors"
                >
                  50 W Broadway, Salt Lake City, UT 84101
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#f7931e]" />
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="hover:text-[#f7931e] transition-colors"
                >
                  {siteConfig.phone}
                </a>
              </div>
            </div>

            {/* Parking Info - Refined */}
            <div className="pt-4 max-w-xl mx-auto">
              <p className="text-[#f7931e] text-xl italic font-semibold mb-6">
                &quot;The Happy Place - with booze&quot;
              </p>

              <div className="bg-black/30 border border-[#f7931e]/20 rounded-lg p-4 text-sm">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Car className="w-4 h-4 text-[#f7931e]" />
                  <span className="text-foreground/90 font-medium">
                    Parking
                  </span>
                </div>
                <p className="text-foreground/70 mb-1">
                  Parking is available below our building (Broadway Media
                  Building).
                </p>
                <p className="text-foreground/70 mb-2">
                  You can also park in the paid lot on the south side of
                  Broadway across the street.
                </p>
                <p className="text-[#f7931e]/90 text-xs flex items-center gap-1.5 justify-center text-center">
                  <Lightbulb className="w-3.5 h-3.5" />
                  We suggest ride sharing as this will be the safest way to
                  enjoy the evening.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
