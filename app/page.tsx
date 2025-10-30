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
  title: "Tavernacle Social Club | Dueling Piano Bar Downtown SLC",
  description:
    "Salt Lake City's best bar for live dueling pianos, local beers & great vibes. Downtown SLC's premier dueling piano bar and live entertainment destination since 2002. Open nightly 6pm-1am. LGBTQ+ friendly bar with full kitchen.",
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
      "Tavernacle Social Club | SLC's Premier Dueling Piano Bar & Live Entertainment Destination",
    description:
      "Salt Lake City's best bar for live music since 2002. Downtown SLC piano bar featuring dueling pianos, local beers, great drinks, and unforgettable entertainment. Top-rated bar open nightly 6pm-1am.",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tavernacle Social Club - Salt Lake City's Premier Dueling Piano Bar",
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
            src="/tavernacle-stage.webp"
            alt="Tavernacle stage"
            fill
            className="object-cover blur-sm opacity-40"
            sizes="100vw"
            quality={50}
            priority
          />
          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Gradient Background overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-purple-950/50 via-black/30 to-black/60"></div>

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
              src="/logo.webp"
              alt="Tavernacle Social Club - Salt Lake City's Premier Dueling Piano Bar"
              width={600}
              height={200}
              className="mx-auto h-24 sm:h-28 md:h-32 lg:h-36 w-auto"
              sizes="(max-width: 640px) 192px, (max-width: 768px) 224px, (max-width: 1024px) 256px, 288px"
              quality={60}
              priority
            />
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#f7931e]/50 bg-[#f7931e]/5 mb-6">
            <Sparkles className="text-[#f7931e] shrink-0" size={14} />
            <span className="text-[#f7931e] text-xs sm:text-sm font-medium tracking-wide">
              SLC's Original Dueling Piano Bar Since 2002
            </span>
          </div>

          {/* SEO-optimized H1 (visually hidden) */}
          <h1 className="sr-only">
            Best Bar in Salt Lake City - Tavernacle Social Club - Downtown SLC's
            Premier Dueling Piano Bar & Top-Rated Music Bar
          </h1>

          {/* Visual Headline (aria-hidden for SEO) */}
          <div
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 tracking-tight leading-none"
            aria-hidden="true"
          >
            <span className="text-[#f7931e]">THE SHOW STARTS</span>
            <br />
            <span className="text-foreground">THE MOMENT </span>
            <span className="text-[#f7931e]">YOU</span>
            <span className="text-foreground"> WALK IN</span>
          </div>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-foreground/70 mb-10 max-w-3xl mx-auto leading-relaxed">
            Downtown Salt Lake City's premier dueling piano bar and live
            entertainment destination since 2002. This iconic SLC bar features
            dueling piano entertainment and unforgettable experiences. Reserve
            your table tonight at the city's favorite bar for interactive shows,
            great drinks, great food, and the best vibe downtown.
          </p>

          {/* Feature Icons */}
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mb-10">
            <Link
              href="/contact"
              className="flex items-center gap-2 text-[#f7931e] hover:text-[#ff6b35] transition-colors"
            >
              <Calendar className="w-5 h-5" />
              <span className="text-sm sm:text-base font-medium">
                Table Reservations
              </span>
            </Link>
            <Link
              href="/menu"
              className="flex items-center gap-2 text-foreground hover:text-[#f7931e] transition-colors"
            >
              <Wine className="w-5 h-5" />
              <span className="text-sm sm:text-base font-medium">
                Drinks & local brews
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
              href="/contact"
              className="bg-[#f7931e] hover:bg-[#ff6b35] text-black px-10 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 inline-flex items-center gap-2 shadow-lg"
            >
              <Calendar className="w-5 h-5" />
              Reserve Your Table
            </Link>
            <Link
              href="/schedule"
              className="border-2 border-[#f7931e] hover:bg-[#f7931e]/20 text-foreground px-10 py-4 rounded-full font-bold text-lg transition-all inline-flex items-center gap-2"
            >
              <Music className="w-5 h-5" />
              See Tonight's Show
            </Link>
          </div>

          {/* Secondary CTA - Smaller */}
          <div className="mb-16">
            <Link
              href="/menu"
              className="text-foreground/70 hover:text-[#f7931e] text-sm transition-colors inline-flex items-center gap-1"
            >
              Check out our drinks & local brews
              <span className="underline">View drinks menu</span>
            </Link>
          </div>

          {/* Tagline */}
          <div className="space-y-4">
            <p className="text-foreground/60 text-sm uppercase tracking-wider">
              <Link
                href="/contact"
                className="text-[#f7931e] hover:text-[#ff6b35] transition-colors"
              >
                Reserve Your Table
              </Link>
              {" · Open 7 Days a Week · 6pm-1am"}
            </p>

            <div className="flex flex-col items-center justify-center gap-3 text-foreground/60 text-sm">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Tavernacle+Social+Club,+50+W+Broadway,+Salt+Lake+City,+UT+84101"
                target="_blank"
                rel="noopener noreferrer"
                className="text-center hover:text-[#f7931e] transition-colors group"
              >
                <div className="flex items-center justify-center gap-2 mb-1">
                  <MapPin className="w-4 h-4 text-[#f7931e]" />
                  <span className="text-foreground/80 font-medium group-hover:text-[#f7931e] transition-colors">
                    Broadway Media Building
                  </span>
                </div>
                <div>50 W Broadway, Salt Lake City, UT 84101</div>
              </a>
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
                  Paid parking is available under our building (Broadway Media
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

      {/* Divider Section */}
      <div className="relative bg-black">
        <div className="absolute inset-0 bg-linear-to-r from-transparent via-purple-500/20 to-transparent h-px top-0" />
        <div className="h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-r from-transparent via-[#f7931e]/20 to-transparent h-px bottom-0" />
      </div>

      {/* Featured Image Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/feature.png"
              alt="Tavernacle Social Club - Live dueling piano entertainment"
              width={600}
              height={425}
              className="w-full h-auto object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 896px, 1024px"
              priority
            />
          </div>

          <div className="text-center mt-12">
            <Link
              href="/schedule"
              className="border-2 border-[#f7931e] hover:bg-[#f7931e]/20 text-foreground px-10 py-4 rounded-full font-bold text-lg transition-all inline-flex items-center gap-2"
            >
              <Music className="w-5 h-5" />
              See What's Happening Tonight
            </Link>
          </div>
        </div>
      </section>

      {/* Divider Section */}
      <div className="relative bg-black">
        <div className="absolute inset-0 bg-linear-to-r from-transparent via-[#f7931e]/20 to-transparent h-px top-0" />
        <div className="h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-r from-transparent via-purple-500/20 to-transparent h-px bottom-0" />
      </div>

      {/* Reservation Priority Section */}
      <section className="relative py-20 bg-linear-to-br from-purple-950/30 via-black to-purple-900/20 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#f7931e]/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Secure Your Perfect Night Out
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Don't miss out on Salt Lake City's most famous dueling piano bar
              and entertainment destination. This downtown SLC bar is the place
              to be. Reserve your table in advance at our lively bar for
              guaranteed seating and priority service.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center group">
              <div className="bg-linear-to-br from-purple-500/20 to-purple-900/10 border border-purple-500/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:border-purple-400 group-hover:shadow-lg group-hover:shadow-purple-500/30 transition-all">
                <Calendar className="w-8 h-8 text-purple-400 group-hover:text-purple-300 transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Guaranteed Seating
              </h3>
              <p className="text-foreground/70">
                Reserve your table and ensure you have the best seats for our
                famous dueling piano shows.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-linear-to-br from-[#f7931e]/20 to-orange-900/10 border border-[#f7931e]/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:border-[#f7931e] group-hover:shadow-lg group-hover:shadow-[#f7931e]/30 transition-all">
                <Sparkles className="w-8 h-8 text-[#f7931e] group-hover:text-[#ff6b35] transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Optimal Experience
              </h3>
              <p className="text-foreground/70">
                Reserved tables give you the best spot to enjoy the show,
                atmosphere, and everything Tavernacle has to offer.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-linear-to-br from-pink-500/20 to-pink-900/10 border border-pink-500/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:border-pink-400 group-hover:shadow-lg group-hover:shadow-pink-500/30 transition-all">
                <Music className="w-8 h-8 text-pink-400 group-hover:text-pink-300 transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Dueling Piano Entertainment
              </h3>
              <p className="text-foreground/70">
                Experience our signature dueling pianos and interactive
                entertainment that made us famous.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/contact"
              className="bg-linear-to-r from-[#f7931e] to-[#ff6b35] hover:from-[#ff6b35] hover:to-[#f7931e] text-black px-8 py-3 rounded-full font-bold text-base sm:text-lg transition-all hover:scale-105 inline-flex items-center gap-2 shadow-lg shadow-[#f7931e]/30 hover:shadow-xl hover:shadow-[#f7931e]/50"
            >
              <Calendar className="w-5 h-5" />
              Reserve Your Table
            </Link>
          </div>
        </div>
      </section>

      {/* Divider Section */}
      <div className="relative bg-black">
        <div className="absolute inset-0 bg-linear-to-r from-transparent via-purple-500/20 to-transparent h-px top-0" />
        <div className="h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-r from-transparent via-[#f7931e]/20 to-transparent h-px bottom-0" />
      </div>

      {/* About Section - New Content */}
      <section className="relative py-20 bg-linear-to-br from-indigo-950/30 via-black to-blue-950/20 overflow-hidden">
        {/* Decorative background elements - different pattern */}
        <div className="absolute top-10 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-purple-600/5 rounded-full blur-3xl"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Downtown Salt Lake City's Best Bar & Live Music Destination Since
              2002
            </h2>
            <div className="w-20 h-1 bg-linear-to-r from-blue-500 via-indigo-500 to-purple-500 mx-auto rounded-full"></div>
          </div>

          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-foreground/80 leading-relaxed mb-6">
              For over two decades, Tavernacle Social Club has been the
              heartbeat of downtown Salt Lake City's bar scene and nightlife.
              Located in the historic Broadway Media Building at 50 W Broadway,
              this legendary bar has built its reputation as Utah's premier
              dueling piano bar and top-rated live music venue, bringing
              unforgettable entertainment to locals and visitors alike. When
              searching for the best bar in SLC, Tavernacle is the answer.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-6">
              What started as a unique bar concept in 2002 has grown into a Salt
              Lake City institution and one of the most popular bars downtown.
              Our famous dueling piano shows feature talented musicians who take
              requests, interact with the crowd, and create an electric
              atmosphere you won't find at any other bar in Utah. Whether you're
              celebrating a birthday, bachelor or bachelorette party, corporate
              event, or just looking for an amazing night out, this iconic bar
              delivers an experience that keeps people coming back.
            </p>

            <p className="text-foreground/80 leading-relaxed">
              We're proud to be an LGBTQ+ friendly bar that welcomes everyone to
              enjoy great music, exceptional drinks, and delicious food in a
              vibrant, inclusive atmosphere. Our full bar features an extensive
              selection of local Utah beers and drinks, making us a top choice
              when searching for bars near me in Salt Lake City. Our kitchen
              serves up satisfying fare to complement your evening at the bar.
              Open seven nights a week from 6pm to 1am, this downtown bar is
              here whenever you need a dose of live entertainment and good
              vibes.
            </p>
          </div>
        </div>
      </section>

      {/* Divider Section */}
      <div className="relative bg-black">
        <div className="absolute inset-0 bg-linear-to-r from-transparent via-purple-500/20 to-transparent h-px top-0" />
        <div className="h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-r from-transparent via-[#f7931e]/20 to-transparent h-px bottom-0" />
      </div>

      {/* What to Expect Section - New Content */}
      <section className="relative py-20 bg-linear-to-tr from-orange-950/20 via-black to-red-950/10 overflow-hidden">
        {/* Decorative background elements - different pattern */}
        <div className="absolute top-20 left-10 w-80 h-80 bg-orange-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-red-600/8 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-amber-600/8 rounded-full blur-3xl"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What to Expect at SLC's Best Bar
            </h2>
            <div className="w-20 h-1 bg-linear-to-r from-orange-500 via-red-500 to-[#f7931e] mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="relative overflow-hidden bg-linear-to-br from-[#f7931e]/10 via-black to-orange-900/10 border border-[#f7931e]/30 rounded-lg p-6 hover:border-[#f7931e] transition-all hover:shadow-xl hover:shadow-[#f7931e]/20 group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#f7931e]/5 rounded-full blur-3xl group-hover:bg-[#f7931e]/10 transition-all"></div>
              <h3 className="text-xl font-bold text-[#f7931e] mb-3 flex items-center gap-2 relative">
                <Music className="w-6 h-6" />
                Interactive Dueling Piano Shows
              </h3>
              <p className="text-foreground/70 leading-relaxed relative">
                Our signature dueling piano performances are unlike anything
                else at any bar in Salt Lake City. Two talented pianists go
                head-to-head, taking your song requests and creating an
                interactive show where YOU become part of the entertainment.
                This makes us the top entertainment bar in SLC. From classic
                rock to modern hits, country to pop, our players know thousands
                of songs and love a good challenge.
              </p>
            </div>

            <div className="relative overflow-hidden bg-linear-to-br from-purple-900/20 via-black to-purple-950/10 border border-purple-500/30 rounded-lg p-6 hover:border-purple-400 transition-all hover:shadow-xl hover:shadow-purple-500/20 group">
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/5 rounded-full blur-3xl group-hover:bg-purple-500/10 transition-all"></div>
              <h3 className="text-xl font-bold text-[#f7931e] mb-3 flex items-center gap-2 relative">
                <Wine className="w-6 h-6" />
                Full Bar - Drinks & Local Brews
              </h3>
              <p className="text-foreground/70 leading-relaxed relative">
                Our full bar features an impressive selection of local Utah
                beers from breweries across the state, plus wine and a variety
                of drink options. As a premier craft beer bar in downtown SLC,
                whether you prefer a cold local brew or want to try something
                different at the bar, we've got drinks to keep the good times
                rolling all night long.
              </p>
            </div>

            <div className="relative overflow-hidden bg-linear-to-br from-amber-900/10 via-black to-yellow-900/5 border border-amber-500/20 rounded-lg p-6 hover:border-amber-400 transition-all hover:shadow-xl hover:shadow-amber-500/20 group">
              <div className="absolute top-0 left-0 w-40 h-40 bg-amber-500/5 rounded-full blur-3xl group-hover:bg-amber-500/10 transition-all"></div>
              <h3 className="text-xl font-bold text-[#f7931e] mb-3 flex items-center gap-2 relative">
                <UtensilsCrossed className="w-6 h-6" />
                Full Kitchen & Great Food
              </h3>
              <p className="text-foreground/70 leading-relaxed relative">
                Don't let hunger interrupt your fun! Our full kitchen serves
                delicious food throughout the night. From appetizers perfect for
                sharing to satisfying entrees, we've got the fuel you need to
                keep the party going. Check out our menu to see all the tasty
                options available.
              </p>
            </div>

            <div className="relative overflow-hidden bg-linear-to-br from-pink-900/10 via-black to-rose-900/5 border border-pink-500/20 rounded-lg p-6 hover:border-pink-400 transition-all hover:shadow-xl hover:shadow-pink-500/20 group">
              <div className="absolute bottom-0 right-0 w-36 h-36 bg-pink-500/5 rounded-full blur-3xl group-hover:bg-pink-500/10 transition-all"></div>
              <h3 className="text-xl font-bold text-[#f7931e] mb-3 flex items-center gap-2 relative">
                <Sparkles className="w-6 h-6" />
                Perfect for Any Celebration
              </h3>
              <p className="text-foreground/70 leading-relaxed relative">
                From birthdays and anniversaries to bachelor/bachelorette
                parties and corporate events, this bar is the ideal venue for
                your special occasion. As the best party bar in Salt Lake City,
                our staff knows how to make celebrations memorable, and our
                energetic bar atmosphere ensures everyone has an amazing time.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/venues"
              className="text-[#f7931e] hover:text-[#ff6b35] transition-colors inline-flex items-center gap-2 font-medium"
            >
              Learn more about our venues
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
