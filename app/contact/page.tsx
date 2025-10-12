import Header from "../components/Header";
import {
  Phone,
  Mail,
  Calendar,
  Music,
  UtensilsCrossed,
  Sparkles,
  Facebook,
  Twitter,
  Youtube,
  Car,
  Lightbulb,
} from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Reservations - Book Your Event Today",
  description:
    "Contact Tavernacle Social Club for private events, reservations, and bookings. Located at 50 W Broadway, downtown Salt Lake City. Call (801) 519-8900. Perfect venue for birthdays, corporate events, and celebrations.",
  keywords: [
    "Tavernacle contact",
    "Salt Lake City event venue",
    "private events SLC",
    "downtown SLC reservations",
    "party venue Salt Lake City",
    "corporate events Utah",
    "birthday party venue SLC",
  ],
  openGraph: {
    title: "Contact Tavernacle Social Club - Private Events & Reservations",
    description:
      "Book your next event at downtown SLC's premier live music venue. Private parties, corporate events, and more!",
  },
};

export default function ContactPage() {
  return (
    <div>
      <Header />

      {/* Hero Section - Combined Get In Touch & Perfect For Any Occasion */}
      <div className="relative pt-32 pb-24 overflow-hidden">
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
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black mb-6 leading-tight">
              <span className="text-foreground">Get In </span>
              <span className="text-[#f7931e]">Touch</span>
            </h1>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto mb-12">
              Let's make your next event unforgettable
            </p>
          </div>

          {/* Perfect For Any Occasion */}
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3">
              <span className="text-foreground">Perfect For </span>
              <span className="text-[#f7931e]">Any Occasion</span>
            </h2>
            <p className="text-base sm:text-lg text-foreground/70 max-w-3xl mx-auto">
              From corporate events to birthday parties, we've got three unique
              venues and world-class entertainment to make your event one for
              the books.
            </p>
          </div>

          {/* Occasion Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
            <div className="glass-effect rounded-lg sm:rounded-xl p-4 sm:p-6 hover:bg-white/10 transition-all">
              <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-[#f7931e] mb-2 sm:mb-3" />
              <h3 className="text-base sm:text-lg font-bold mb-1 sm:mb-2 text-foreground">
                Corporate Events
              </h3>
              <p className="text-foreground/70 text-xs sm:text-sm">
                Team building, holiday parties, and company celebrations with a
                twist
              </p>
            </div>

            <div className="glass-effect rounded-lg sm:rounded-xl p-4 sm:p-6 hover:bg-white/10 transition-all">
              <Calendar className="w-6 h-6 sm:w-8 sm:h-8 text-[#f7931e] mb-2 sm:mb-3" />
              <h3 className="text-base sm:text-lg font-bold mb-1 sm:mb-2 text-foreground">
                Private Parties
              </h3>
              <p className="text-foreground/70 text-xs sm:text-sm">
                Birthdays, bachelor/bachelorette parties, anniversaries, and
                more
              </p>
            </div>

            <div className="glass-effect rounded-lg sm:rounded-xl p-4 sm:p-6 hover:bg-white/10 transition-all">
              <Music className="w-6 h-6 sm:w-8 sm:h-8 text-[#f7931e] mb-2 sm:mb-3" />
              <h3 className="text-base sm:text-lg font-bold mb-1 sm:mb-2 text-foreground">
                Live Entertainment
              </h3>
              <p className="text-foreground/70 text-xs sm:text-sm">
                Our legendary dueling piano shows, karaoke, and Sunday send-offs
              </p>
            </div>

            <div className="glass-effect rounded-lg sm:rounded-xl p-4 sm:p-6 hover:bg-white/10 transition-all">
              <UtensilsCrossed className="w-6 h-6 sm:w-8 sm:h-8 text-[#f7931e] mb-2 sm:mb-3" />
              <h3 className="text-base sm:text-lg font-bold mb-1 sm:mb-2 text-foreground">
                Full Catering
              </h3>
              <p className="text-foreground/70 text-xs sm:text-sm">
                Custom menus designed by our executive chef to fit your event
              </p>
            </div>

            <div className="glass-effect rounded-lg sm:rounded-xl p-4 sm:p-6 hover:bg-white/10 transition-all">
              <Calendar className="w-6 h-6 sm:w-8 sm:h-8 text-[#f7931e] mb-2 sm:mb-3" />
              <h3 className="text-base sm:text-lg font-bold mb-1 sm:mb-2 text-foreground">
                Flexible Spaces
              </h3>
              <p className="text-foreground/70 text-xs sm:text-sm">
                Choose from three distinct venues, or book the whole place
              </p>
            </div>

            <div className="glass-effect rounded-lg sm:rounded-xl p-4 sm:p-6 hover:bg-white/10 transition-all">
              <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-[#f7931e] mb-2 sm:mb-3" />
              <h3 className="text-base sm:text-lg font-bold mb-1 sm:mb-2 text-foreground">
                Unforgettable Vibes
              </h3>
              <p className="text-foreground/70 text-xs sm:text-sm">
                The energy, atmosphere, and crew that make every night legendary
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Form Section */}
      <div className="relative py-20 overflow-hidden bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Side: Booking Form */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h2 className="text-4xl font-bold mb-4">
                  <span className="text-foreground">Book Your </span>
                  <span className="text-[#f7931e]">Event</span>
                </h2>
                <p className="text-lg text-foreground/70">
                  Fill out the form below and we'll get back to you within 24
                  hours to start planning the details.
                </p>
              </div>

              {/* Google Form Embed */}
              <div className="glass-effect rounded-2xl p-4 overflow-hidden">
                <div className="relative w-full" style={{ height: "1000px" }}>
                  <iframe
                    src="https://docs.google.com/forms/d/1V711jhukwCUCq9RJ7wbNJ21aEX8wymRXmFAHSIbL9Jg/viewform?embedded=true"
                    className="absolute top-0 left-0 w-full h-full rounded-lg"
                    style={{ border: "none" }}
                    title="Event Booking Form"
                  >
                    Loading…
                  </iframe>
                </div>
              </div>
            </div>

            {/* Right Side: Contact Cards */}
            <div className="lg:col-span-1">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-foreground">
                  Contact Our Team
                </h2>
              </div>

              <div className="space-y-4">
                {/* Tiffany Oaks - General Venue */}
                <div className="glass-effect rounded-2xl p-6 hover:bg-white/10 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#f7931e]/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-6 h-6 text-[#f7931e]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-1 text-foreground">
                        Tiffany Oaks
                      </h3>
                      <p className="text-foreground/60 text-sm mb-2">
                        General Venue
                      </p>
                      <a
                        href="tel:8016230987"
                        className="text-[#f7931e] hover:text-[#ff6b35] font-semibold transition-colors flex items-center gap-2"
                      >
                        <Phone className="w-4 h-4" />
                        801.623.0987
                      </a>
                    </div>
                  </div>
                </div>

                {/* Troy Baldwin - Music/Entertainment */}
                <div className="glass-effect rounded-2xl p-6 hover:bg-white/10 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#f7931e]/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Music className="w-6 h-6 text-[#f7931e]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-1 text-foreground">
                        Troy Baldwin
                      </h3>
                      <p className="text-foreground/60 text-sm mb-2">
                        Music/Entertainment
                      </p>
                      <a
                        href="tel:8016044414"
                        className="text-[#f7931e] hover:text-[#ff6b35] font-semibold transition-colors flex items-center gap-2"
                      >
                        <Phone className="w-4 h-4" />
                        801.604.4414
                      </a>
                    </div>
                  </div>
                </div>

                {/* Jodie Rogers - Catering & Food */}
                <div className="glass-effect rounded-2xl p-6 hover:bg-white/10 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#f7931e]/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <UtensilsCrossed className="w-6 h-6 text-[#f7931e]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-1 text-foreground">
                        Jodie Rogers
                      </h3>
                      <p className="text-foreground/60 text-sm mb-2">
                        Catering & Food Menus
                      </p>
                      <a
                        href="tel:4359620440"
                        className="text-[#f7931e] hover:text-[#ff6b35] font-semibold transition-colors flex items-center gap-2"
                      >
                        <Phone className="w-4 h-4" />
                        435.962.0440
                      </a>
                    </div>
                  </div>
                </div>

                {/* Parking Information - Refined */}
                <div className="glass-effect rounded-2xl p-6 border border-[#f7931e]/20">
                  <div className="flex items-start gap-3">
                    <Car className="w-5 h-5 text-[#f7931e] flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-base font-bold mb-2 text-foreground">
                        Parking
                      </h3>
                      <div className="text-foreground/80 text-sm space-y-1.5">
                        <p>
                          Parking is available below our building (Broadway
                          Media Building).
                        </p>
                        <p>
                          You can also park in the paid lot on the south side of
                          Broadway across the street.
                        </p>
                        <p className="text-[#f7931e] text-xs flex items-center gap-1.5 pt-2">
                          <Lightbulb className="w-3.5 h-3.5" />
                          We suggest ride sharing as this will be the safest way
                          to enjoy the evening.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Google Map Section */}
      <div className="relative py-16 overflow-hidden border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="text-foreground">Find Us in </span>
              <span className="text-[#f7931e]">Downtown SLC</span>
            </h2>
            <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
              Located in the heart of Salt Lake City&apos;s Gateway District at
              50 W Broadway. Just minutes from Vivint Arena, Gateway Mall, and
              major hotels.
            </p>
          </div>

          <div className="glass-effect rounded-2xl overflow-hidden border border-white/10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2!2d-111.891!3d40.7634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ1JzQ4LjIiTiAxMTHCsDUzJzI3LjYiVw!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Tavernacle Social Club Location"
              className="w-full"
            ></iframe>
          </div>

          {/* Quick Directions */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="glass-effect rounded-lg p-4 text-center border border-white/10">
              <h3 className="font-bold text-foreground mb-2">
                From Vivint Arena
              </h3>
              <p className="text-sm text-foreground/70">
                3 minute walk west on 100 South to Broadway
              </p>
            </div>
            <div className="glass-effect rounded-lg p-4 text-center border border-white/10">
              <h3 className="font-bold text-foreground mb-2">
                From Gateway Mall
              </h3>
              <p className="text-sm text-foreground/70">
                2 minute walk east on 50 West to Broadway
              </p>
            </div>
            <div className="glass-effect rounded-lg p-4 text-center border border-white/10">
              <h3 className="font-bold text-foreground mb-2">
                From Temple Square
              </h3>
              <p className="text-sm text-foreground/70">
                10 minute walk south on State Street
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media */}
      <div className="relative py-12 overflow-hidden border-t border-white/5">
        {/* Orange accent line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f7931e] to-transparent opacity-50" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="glass-effect rounded-2xl p-8 max-w-2xl mx-auto border border-[#f7931e]/20">
            <h2 className="text-2xl font-bold mb-6 text-center text-foreground">
              <span className="text-[#f7931e]">Stay Connected</span> With Us
            </h2>
            <div className="flex justify-center gap-6">
              <a
                href="https://www.facebook.com/TavernacleSLC"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                aria-label="Facebook"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#f7931e]/20 to-transparent hover:from-[#f7931e] hover:to-[#ff6b35] border border-[#f7931e]/30 hover:border-[#f7931e] flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                  <Facebook className="w-7 h-7 text-[#f7931e] group-hover:text-black transition-colors" />
                </div>
              </a>
              <a
                href="https://x.com/Tavernacle"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                aria-label="X (Twitter)"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#f7931e]/20 to-transparent hover:from-[#f7931e] hover:to-[#ff6b35] border border-[#f7931e]/30 hover:border-[#f7931e] flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                  <Twitter className="w-7 h-7 text-[#f7931e] group-hover:text-black transition-colors" />
                </div>
              </a>
              <a
                href="https://www.youtube.com/user/tavernaclesocialclub"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                aria-label="YouTube"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#f7931e]/20 to-transparent hover:from-[#f7931e] hover:to-[#ff6b35] border border-[#f7931e]/30 hover:border-[#f7931e] flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                  <Youtube className="w-7 h-7 text-[#f7931e] group-hover:text-black transition-colors" />
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Orange accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f7931e] to-transparent opacity-50" />
      </div>
    </div>
  );
}
