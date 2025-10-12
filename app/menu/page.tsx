import Header from "../components/Header";
import {
  Wine,
  UtensilsCrossed,
  ExternalLink,
  ArrowRight,
  Flame,
  Pizza,
  Salad,
  Beef,
} from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Drinks Menu - Local Beers & Cocktails",
  description:
    "Explore Tavernacle Social Club's drink menu featuring local Utah beers on tap, cocktails, wine, and spirits. Salt Lake City's premier dueling piano bar.",
  keywords: [
    "Tavernacle drinks menu",
    "Salt Lake City beer",
    "local Utah beer",
    "beer on tap SLC",
    "downtown SLC bar",
    "dueling piano bar drinks",
    "Utah breweries",
  ],
  openGraph: {
    title: "Drinks Menu - Tavernacle Social Club",
    description:
      "Local Utah beers on tap, cocktails, and premium spirits at Salt Lake City's original dueling piano bar.",
  },
};

export default function MenuPage() {
  return (
    <div>
      <Header />

      {/* Hero Section */}
      <div className="relative pt-32 pb-8 overflow-hidden">
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
          {/* Title Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4">
              <span className="text-[#f7931e]">Menu</span>
            </h1>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Drinks, food, and good times
            </p>
          </div>

          {/* Two Column Layout - Drinks & Food */}
          <div className="grid lg:grid-cols-3 gap-6 mb-12">
            {/* Left Side - Drinks Menu (2/3 width) */}
            <div className="lg:col-span-2">
              <div className="border border-white/10 rounded-lg p-6 bg-black/20">
                <div className="flex items-center gap-2 mb-4">
                  <Wine className="w-5 h-5 text-[#f7931e]" />
                  <h2 className="text-xl font-bold text-foreground">Drinks</h2>
                </div>

                {/* Cocktails */}
                <div className="mb-6">
                  <h3 className="text-base font-bold text-[#f7931e] mb-2">
                    Cocktails
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-x-4 gap-y-1 text-sm">
                    <div className="flex justify-between">
                      <span className="text-foreground/90">
                        Espresso Martini
                      </span>
                      <span className="text-foreground/60">$14</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-foreground/90">Gin Ol' Fashie</span>
                      <span className="text-foreground/60">$14</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-foreground/90">
                        Irish Gentleman
                      </span>
                      <span className="text-foreground/60">$12</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-foreground/90">Painkiller</span>
                      <span className="text-foreground/60">$12</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-foreground/90">
                        Matt B's Left Hand
                      </span>
                      <span className="text-foreground/60">$15</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-foreground/90">
                        T's Effen Spicy
                      </span>
                      <span className="text-foreground/60">$15</span>
                    </div>
                  </div>
                </div>

                {/* Staff Favorites */}
                <div className="mb-6">
                  <h3 className="text-base font-bold text-[#f7931e] mb-2">
                    Staff Favorites
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-x-4 gap-y-1 text-sm">
                    <div className="flex justify-between">
                      <span className="text-foreground/90">
                        Irish Root Beer
                      </span>
                      <span className="text-foreground/60">$10</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-foreground/90">
                        Starburst Martini
                      </span>
                      <span className="text-foreground/60">$12</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-foreground/90">
                        Raspberry Lemon Drop
                      </span>
                      <span className="text-foreground/60">$12</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-foreground/90">
                        Watermelon Jolly Rancher
                      </span>
                      <span className="text-foreground/60">$10</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-foreground/90">
                        Peach Long Island
                      </span>
                      <span className="text-foreground/60">$14</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-foreground/90">
                        Liquid Mary Jane
                      </span>
                      <span className="text-foreground/60">$12</span>
                    </div>
                  </div>
                </div>

                {/* Mules & Shots */}
                <div className="grid sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h3 className="text-base font-bold text-[#f7931e] mb-2">
                      Mules - $12
                    </h3>
                    <div className="text-sm text-foreground/80 space-y-1">
                      <p>The Classic</p>
                      <p>Full Tilt Boogie</p>
                      <p>Jack Mormon</p>
                      <p>London Bridge</p>
                      <p>Watermelon Tequila</p>
                      <p>Key Lime Pie</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#f7931e] mb-2">
                      Shots - $8
                    </h3>
                    <div className="text-sm text-foreground/80 space-y-1">
                      <p>German Birthday Cake</p>
                      <p>Blow Job</p>
                      <p>The Bachelorette</p>
                      <p>White Gummy Bear</p>
                      <p>X-Rated Kamikaze</p>
                      <p>Dick Pic</p>
                    </div>
                  </div>
                </div>

                {/* Beer */}
                <div className="mb-6">
                  <h3 className="text-base font-bold text-[#f7931e] mb-2">
                    Beer on Tap
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-x-4 gap-y-1 text-sm">
                    <div className="flex justify-between">
                      <span className="text-foreground/90">
                        Guinness (20oz)
                      </span>
                      <span className="text-foreground/60">$8</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-foreground/90">Pacifico</span>
                      <span className="text-foreground/60">$6/$8</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-foreground/90">
                        Roosters Nut Brown
                      </span>
                      <span className="text-foreground/60">$6/$8</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-foreground/90">
                        Uinta Hazy Nosh
                      </span>
                      <span className="text-foreground/60">$6/$8</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-foreground/90">Kona Big Wave</span>
                      <span className="text-foreground/60">$6/$8</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-foreground/90">
                        Sierra Nevada Pale Ale
                      </span>
                      <span className="text-foreground/60">$6/$8</span>
                    </div>
                  </div>
                </div>

                {/* Bottled Beer & Seltzers */}
                <div className="mb-6">
                  <h3 className="text-base font-bold text-[#f7931e] mb-2">
                    Bottled Beer
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-x-4 gap-y-1 text-sm mb-4">
                    <div className="flex justify-between">
                      <span className="text-foreground/90">Bud Light</span>
                      <span className="text-foreground/60">$5</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-foreground/90">Miller Light</span>
                      <span className="text-foreground/60">$5</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-foreground/90">Coors Light</span>
                      <span className="text-foreground/60">$5</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-foreground/90">Corona</span>
                      <span className="text-foreground/60">$5</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-foreground/90">Blue Moon</span>
                      <span className="text-foreground/60">$5</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-foreground/90">Stella</span>
                      <span className="text-foreground/60">$7</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-foreground/90">PBR</span>
                      <span className="text-foreground/60">$3</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-foreground/90">Epic Brainless</span>
                      <span className="text-foreground/60">$12</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-foreground/90">
                        Squatters Juicy IPA
                      </span>
                      <span className="text-foreground/60">$5</span>
                    </div>
                  </div>
                  <p className="text-xs text-foreground/60">
                    + many more local Utah brews
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="text-base font-bold text-[#f7931e] mb-2">
                    Seltzers & Ciders
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-x-4 gap-y-1 text-sm">
                    <div className="flex justify-between">
                      <span className="text-foreground/90">White Claw</span>
                      <span className="text-foreground/60">$5</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-foreground/90">Truly</span>
                      <span className="text-foreground/60">$5</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-foreground/90">High Noon</span>
                      <span className="text-foreground/60">$6</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-foreground/90">Angry Orchard</span>
                      <span className="text-foreground/60">$7</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-foreground/90">Ace Pineapple</span>
                      <span className="text-foreground/60">$8</span>
                    </div>
                  </div>
                </div>

                {/* Wine */}
                <div>
                  <h3 className="text-base font-bold text-[#f7931e] mb-2">
                    Wine
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-x-4 gap-y-1 text-sm">
                    <div className="flex justify-between">
                      <span className="text-foreground/90">Chardonnay</span>
                      <span className="text-foreground/60">
                        Btl $45 / Gls $10
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-foreground/90">Cabernet</span>
                      <span className="text-foreground/60">
                        Btl $45 / Gls $10
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-foreground/90">
                        Sauvignon Blanc
                      </span>
                      <span className="text-foreground/60">
                        Btl $45 / Gls $10
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-foreground/90">
                        La Marca Prosecco
                      </span>
                      <span className="text-foreground/60">Btl $60</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-foreground/90">Veuve Clicquot</span>
                      <span className="text-foreground/60">Btl $100</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Food Section (1/3 width) */}
            <div className="lg:col-span-1" id="food">
              <div className="border border-white/10 rounded-lg p-6 bg-black/20">
                <div className="flex items-center gap-2 mb-3">
                  <UtensilsCrossed className="w-5 h-5 text-[#f7931e]" />
                  <h2 className="text-xl font-bold text-foreground">Hungry?</h2>
                </div>

                <p className="text-sm text-foreground/80 mb-4">
                  Our full kitchen,{" "}
                  <span className="font-bold text-[#f7931e]">
                    The Steyk Center
                  </span>
                  , has you covered. Ask your bartender or server to grab you
                  anything from their menu, or order delivery directly from
                  their site.
                </p>

                <div className="space-y-2 mb-4 text-sm text-foreground/70">
                  <p className="flex items-center gap-2">
                    <Flame className="w-4 h-4 text-[#f7931e]" /> Starters &
                    Shareables
                  </p>
                  <p className="flex items-center gap-2">
                    <Pizza className="w-4 h-4 text-[#f7931e]" /> Artisan
                    Flatbreads
                  </p>
                  <p className="flex items-center gap-2">
                    <UtensilsCrossed className="w-4 h-4 text-[#f7931e]" />{" "}
                    Burgers & Sandwiches
                  </p>
                  <p className="flex items-center gap-2">
                    <Salad className="w-4 h-4 text-[#f7931e]" /> Fresh Salads
                  </p>
                  <p className="flex items-center gap-2">
                    <Beef className="w-4 h-4 text-[#f7931e]" /> Premium Steaks &
                    Skewers
                  </p>
                </div>

                <a
                  href="https://steykcenter.net/menu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#f7931e] hover:bg-[#ff6b35] text-black px-6 py-3 rounded-lg font-bold text-sm transition-all hover:scale-105"
                >
                  Full Food Menu
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section - Full Width */}
      <div className="relative border-t border-[#f7931e]/20 bg-gradient-to-b from-[#f7931e]/5 to-black py-16">
        {/* Grid Background */}
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(247, 147, 30, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(247, 147, 30, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <p className="text-foreground/70 mb-8 text-lg">
            Ready to experience it for yourself?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/schedule"
              className="bg-[#f7931e] hover:bg-[#ff6b35] text-black px-10 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 inline-flex items-center justify-center gap-2"
            >
              See Tonight's Show
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="border-2 border-foreground/20 hover:border-[#f7931e] hover:bg-[#f7931e]/10 text-foreground px-10 py-4 rounded-full font-bold text-lg transition-all inline-flex items-center justify-center"
            >
              Make a Reservation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
