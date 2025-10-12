import Header from "../components/Header";
import { Music, Mic2, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Live Shows & Performers - Dueling Pianos Every Night",
  description:
    "Experience live dueling piano shows at Tavernacle Social Club! Meet our talented performers bringing energy and entertainment to downtown Salt Lake City every night. Request your favorite songs and sing along!",
  keywords: [
    "dueling pianos Salt Lake City",
    "live piano show SLC",
    "Salt Lake City performers",
    "interactive piano bar",
    "live music entertainment Utah",
    "piano show downtown SLC",
  ],
  openGraph: {
    title: "Live Piano Shows - Tavernacle Social Club",
    description:
      "Incredible live dueling piano performances every night in downtown Salt Lake City. Request songs and be part of the show!",
  },
};

export default function ShowsPage() {
  return (
    <div>
      <Header />

      {/* Hero Section */}
      <div className="relative pt-32 pb-12 overflow-hidden">
        {/* Grid Background */}
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(247, 147, 30, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(247, 147, 30, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
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
          <div className="text-center mb-10">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black mb-6 leading-tight">
              <span className="text-[#f7931e]">Live Pianos.</span>
              <br />
              <span className="text-foreground">Pure Emotion.</span>
            </h1>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
              Join us for an unforgettable night of music, passion, and
              performance. Whether you're a longtime fan or a first-time guest,
              our piano show will leave you inspired.
            </p>
          </div>

          <div className="flex justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#f7931e] to-[#ff6b35] hover:from-[#ff6b35] hover:to-[#f7931e] text-black px-10 py-4 rounded-full font-bold text-lg transition-all hover:scale-105"
            >
              <Music className="w-5 h-5" />
              Reserve Your Seats Now!
            </Link>
          </div>
        </div>
      </div>

      {/* About the Show Section */}
      <div className="relative py-20 overflow-hidden bg-white/[0.005] border-y border-[#f7931e]/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-black mb-8 text-[#f7931e]">
              About the Show
            </h2>
            <p className="text-lg text-foreground/80 max-w-4xl mx-auto leading-relaxed">
              The Tavernacle's legendary dueling piano show is a
              no-holds-barred, all-request rock 'n roll party where the audience
              is just as much a part of the show as the performers. With two
              grand pianos, world-class entertainers, and thousands of songs
              ready to go, no genre is off-limits and no seat is safe from the
              spotlight. It's high-energy, hilarious, and hands-down the most
              fun you can have with your clothes on. Sing loud, drink proud, and
              prepare to party.
            </p>
          </div>
        </div>
      </div>

      {/* Our Talented Musicians Section */}
      <div className="relative py-20 overflow-hidden bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black mb-6 text-foreground">
              Our Talented Musicians
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              Meet the world-class performers who bring the magic to life every
              night.
            </p>
          </div>

          {/* Musicians Grid - 4 columns with better spacing */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
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
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-foreground">
                  Troy Baldwin
                </h3>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  The ringleader and star performer. An electric entertainer and
                  the driving force behind SLC's wildest musical party.
                </p>
              </div>
            </div>

            {/* Drew Ballard */}
            <div className="glass-effect rounded-2xl overflow-hidden hover:bg-white/10 transition-all group">
              <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02]">
                <Image
                  src="/people/drew.png"
                  alt="Drew Ballard"
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-foreground">
                  Drew Ballard
                </h3>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  Classical training meets chaotic genius. Transforms any
                  request into a musical spectacle with razor-sharp wit.
                </p>
              </div>
            </div>

            {/* Julianna Boutter */}
            <div className="glass-effect rounded-2xl overflow-hidden hover:bg-white/10 transition-all group">
              <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02]">
                <Image
                  src="/people/julianna.png"
                  alt="Julianna Boutter"
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-foreground">
                  Julianna Boutter
                </h3>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  Our resident songstress and piano diva. Serving powerhouse
                  vocals and a stage presence that delivers every night.
                </p>
              </div>
            </div>

            {/* South West */}
            <div className="glass-effect rounded-2xl overflow-hidden hover:bg-white/10 transition-all group">
              <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02]">
                <Image
                  src="/people/south.png"
                  alt="South West"
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-foreground">
                  South West
                </h3>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  Genre-bending powerhouse with a vocal range that defies logic.
                  When the lights go up, he owns the room.
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
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-foreground">
                  Mike Rogers
                </h3>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  A Tavernacle original—master juggler, insane dancer, and the
                  ultimate team player with explosive energy.
                </p>
              </div>
            </div>

            {/* JD Rouillard */}
            <div className="glass-effect rounded-2xl overflow-hidden hover:bg-white/10 transition-all group">
              <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02]">
                <Image
                  src="/people/jd.png"
                  alt="JD Rouillard"
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-foreground">
                  JD Rouillard
                </h3>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  Pure fire on the keys—our resident rocker with a heart for
                  reggae and a soul wired for the wild.
                </p>
              </div>
            </div>

            {/* Landon Keele */}
            <div className="glass-effect rounded-2xl overflow-hidden hover:bg-white/10 transition-all group">
              <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02]">
                <Image
                  src="/people/landon.png"
                  alt="Landon Keele"
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-foreground">
                  Landon Keele
                </h3>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  Motown soul wrapped in a megawatt smile—a velvet-voiced
                  crooner with style that makes every song smooth.
                </p>
              </div>
            </div>

            {/* Anthony Carroll */}
            <div className="glass-effect rounded-2xl overflow-hidden hover:bg-white/10 transition-all group">
              <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02]">
                <Image
                  src="/people/anthony.png"
                  alt="Anthony Carroll"
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-foreground">
                  Anthony Carroll
                </h3>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  An old soul with a baritone that melts hearts—blending vintage
                  vibes with sharp, modern sparkle.
                </p>
              </div>
            </div>

            {/* Grayson Ivory */}
            <div className="glass-effect rounded-2xl overflow-hidden hover:bg-white/10 transition-all group">
              <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02]">
                <Image
                  src="/people/grayson.png"
                  alt="Grayson Ivory"
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-foreground">
                  Grayson Ivory
                </h3>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  Magnetic performer with killer harmonies and Tony-worthy
                  showmanship that brings the house down every time.
                </p>
              </div>
            </div>

            {/* Liam Lars */}
            <div className="glass-effect rounded-2xl overflow-hidden hover:bg-white/10 transition-all group">
              <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02]">
                <Image
                  src="/people/liam.png"
                  alt="Liam Lars"
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-foreground">
                  Liam Lars
                </h3>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  Rising rockstar with sky-high tenor vocals and jazz
                  soul—grabbing the mic like he was born to.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Powerball Karaoke Section */}
      <div className="relative py-20 overflow-hidden bg-gradient-to-br from-amber-950/20 via-black to-black border-y border-[#f7931e]/30">
        {/* Animated Orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#f7931e]/20 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-amber-500/15 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl sm:text-4xl font-black mb-4 text-[#f7931e]">
                Where Karaoke Meets Cold, Hard Cash!
              </h2>
              <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                You've never played karaoke like this before! At Powerball
                Karaoke, all you need to do is sing a song and pick the right
                Powerball Number. It's simple, it's thrilling, and it's
                happening every Sunday through Thursday night at The Tavernacle.
              </p>
              <div className="border-l-4 border-[#f7931e] pl-6">
                <div className="flex items-center gap-3 mb-3">
                  <Sparkles className="w-6 h-6 text-[#f7931e]" />
                  <h4 className="text-xl font-bold text-[#f7931e]">
                    THE JACKPOT IS RISING!
                  </h4>
                </div>
                <p className="text-foreground/70 leading-relaxed">
                  We start the pot at $200. If nobody wins, it rolls over and
                  grows by $50 every night until someone hits the winning
                  number. The longer it goes unclaimed, the bigger the prize
                  gets.
                </p>
              </div>
            </div>

            {/* Jackpot Card */}
            <div className="order-1 lg:order-2">
              <div className="glass-effect rounded-2xl p-12 bg-black/60 border border-[#f7931e]/30 text-center">
                <h2 className="text-4xl sm:text-5xl font-black mb-8 text-foreground">
                  POWERBALL Karaoke
                </h2>
                <Mic2 className="w-20 h-20 text-[#f7931e] mx-auto mb-6" />
                <div className="text-2xl font-bold text-foreground mb-3">
                  Starting at
                </div>
                <div className="text-7xl font-black text-[#f7931e] mb-4">
                  $200
                </div>
                <div className="text-lg text-foreground/70">
                  + $50 every night it rolls over
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sunday Sendoff Section */}
      <div className="relative py-20 overflow-hidden bg-black border-y border-[#f7931e]/20">
        {/* Diagonal Lines Pattern */}
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              rgba(247, 147, 30, 0.1) 0px,
              rgba(247, 147, 30, 0.1) 2px,
              transparent 2px,
              transparent 20px
            )`,
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Logo Card */}
            <div className="order-1 lg:order-1">
              <div className="glass-effect rounded-2xl p-16 bg-black/60 border border-[#f7931e]/30 text-center">
                <Music className="w-32 h-32 text-[#f7931e] mx-auto mb-8" />
                <h2 className="text-5xl sm:text-6xl font-black text-foreground">
                  Sunday Sendoff
                </h2>
              </div>
            </div>

            {/* Content */}
            <div className="order-2 lg:order-2">
              <h3 className="text-3xl sm:text-4xl font-black text-[#f7931e] mb-4">
                Supporting Live Music in SLC
              </h3>
              <h4 className="text-xl sm:text-2xl font-bold text-foreground mb-6">
                Sending you back to work Monday with one last show.
              </h4>
              <p className="text-lg text-foreground/80 leading-relaxed mb-8">
                Every week, we turn up the volume and shine the spotlight on
                fresh vocal talent from around the city and beyond! Our Sunday
                Sendoff is your chance to discover your new favorite singer in
                an electric, up-close-and-personal setting. From soulful
                crooners and powerhouse belters to indie darlings and
                genre-bending voices, no two nights are the same—but every one
                is unforgettable. Grab a drink, grab a seat, and get ready to be
                blown away by raw talent, killer vibes, and the kind of energy
                only live music can bring.
              </p>
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-[#f7931e] bg-[#f7931e]/10">
                <Music className="text-[#f7931e]" size={20} />
                <span className="text-[#f7931e] font-bold text-lg">
                  Every Sunday Night
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative pt-32 pb-24 overflow-hidden">
        {/* Radial Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-950/30 via-black to-black pointer-events-none" />

        {/* Dot Pattern */}
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(247, 147, 30, 0.3) 1px, transparent 1px)`,
            backgroundSize: "30px 30px",
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="glass-effect rounded-2xl p-12 max-w-4xl mx-auto text-center">
            <Music className="w-16 h-16 text-[#f7931e] mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-6">
              <span className="text-foreground">Ready for the </span>
              <span className="text-[#f7931e]">Show of a Lifetime?</span>
            </h2>
            <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
              Check out our schedule and reserve your spot for an unforgettable
              night of live music!
            </p>
            <Link
              href="/schedule"
              className="inline-flex items-center gap-2 bg-[#f7931e] hover:bg-[#ff6b35] text-black px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105"
            >
              See What's Coming
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
