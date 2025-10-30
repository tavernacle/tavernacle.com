import Image from "next/image";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  MapPin,
  Phone,
  Mail,
  Clock,
  Music,
} from "lucide-react";
import { ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-linear-to-b from-black to-zinc-950 border-t border-white/10">
      {/* Decorative top border */}
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#f7931e]/50 to-transparent" />

      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 20px,
            #f7931e 20px,
            #f7931e 21px
          )`,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo & About */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4 group">
              <Image
                src="/logo.webp"
                alt="Tavernacle Social Club - Best Bar in SLC"
                width={150}
                height={60}
                className="h-12 w-auto transition-transform group-hover:scale-105"
                sizes="150px"
              />
            </Link>
            <p className="text-foreground/70 text-sm leading-relaxed mb-6">
              Downtown Salt Lake City&apos;s best bar and premier destination
              for live music and unforgettable experiences since 2002. The
              top-rated piano bar in SLC.
            </p>

            {/* Bar Hours Callout */}
            <div className="mb-6 p-3 rounded-lg bg-white/5 border border-[#f7931e]/20">
              <div className="flex items-center gap-2 mb-1">
                <Clock className="w-4 h-4 text-[#f7931e]" />
                <span className="text-xs font-semibold text-foreground/60 uppercase tracking-wider">
                  Open Daily
                </span>
              </div>
              <p className="text-sm font-bold text-[#f7931e]">6pm - 1am</p>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/TavernacleSLC"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#f7931e] border border-white/10 hover:border-[#f7931e] flex items-center justify-center transition-all hover:scale-110 group"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 text-foreground/60 group-hover:text-black transition-colors" />
              </a>
              <a
                href="https://www.instagram.com/tavernaclesocialclub/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#f7931e] border border-white/10 hover:border-[#f7931e] flex items-center justify-center transition-all hover:scale-110 group"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 text-foreground/60 group-hover:text-black transition-colors" />
              </a>
              <a
                href="https://www.youtube.com/user/tavernaclesocialclub"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#f7931e] border border-white/10 hover:border-[#f7931e] flex items-center justify-center transition-all hover:scale-110 group"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4 text-foreground/60 group-hover:text-black transition-colors" />
              </a>
              <a
                href="https://x.com/Tavernacle"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#f7931e] border border-white/10 hover:border-[#f7931e] flex items-center justify-center transition-all hover:scale-110 group"
                aria-label="X (Twitter)"
              >
                <Twitter className="w-4 h-4 text-foreground/60 group-hover:text-black transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-5 text-sm uppercase tracking-wider flex items-center gap-2">
              <span className="w-1 h-4 bg-[#f7931e] rounded-full"></span>
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/venues"
                  className="text-foreground/60 hover:text-[#f7931e] transition-colors text-sm"
                >
                  Venues
                </Link>
              </li>
              <li>
                <Link
                  href="/shows"
                  className="text-foreground/60 hover:text-[#f7931e] transition-colors text-sm"
                >
                  Shows
                </Link>
              </li>
              <li>
                <Link
                  href="/menu"
                  className="text-foreground/60 hover:text-[#f7931e] transition-colors text-sm"
                >
                  Menu
                </Link>
              </li>
              <li>
                <Link
                  href="/schedule"
                  className="text-foreground/60 hover:text-[#f7931e] transition-colors text-sm"
                >
                  Schedule
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-foreground/60 hover:text-[#f7931e] transition-colors text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-foreground/60 hover:text-[#f7931e] transition-colors text-sm"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-foreground/60 hover:text-[#f7931e] transition-colors text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Venues */}
          <div>
            <h3 className="text-white font-bold mb-5 text-sm uppercase tracking-wider flex items-center gap-2">
              <span className="w-1 h-4 bg-[#f7931e] rounded-full"></span>
              Our Venues
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/venues"
                  className="text-foreground/70 text-sm font-medium hover:text-[#f7931e] transition-colors"
                >
                  The Tavernacle
                </Link>
              </li>
              <li className="text-foreground/70 text-sm flex items-center gap-1">
                <a
                  href="https://steykcenter.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#f7931e] transition-colors flex items-center gap-1 font-medium"
                >
                  The Steyk Center
                  <ExternalLink
                    className="w-3.5 h-3.5 ml-1 text-[#f7931e]"
                    aria-hidden="true"
                  />
                </a>
              </li>
              <li>
                <Link
                  href="/venues"
                  className="text-foreground/70 text-sm font-medium hover:text-[#f7931e] transition-colors"
                >
                  The Patio
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-5 text-sm uppercase tracking-wider flex items-center gap-2">
              <span className="w-1 h-4 bg-[#f7931e] rounded-full"></span>
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-foreground/70 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-[#f7931e]" />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Tavernacle+Social+Club,+50+W+Broadway,+Salt+Lake+City,+UT+84101"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="leading-relaxed hover:text-[#f7931e] transition-colors"
                >
                  Broadway Media Building
                  <br />
                  50 West Broadway
                  <br />
                  Salt Lake City, UT
                </a>
              </li>
              <li className="flex items-center gap-3 text-foreground/70 text-sm">
                <Phone className="w-4 h-4 shrink-0 text-[#f7931e]" />
                <a
                  href="tel:+18015198900"
                  className="hover:text-[#f7931e] transition-colors"
                >
                  (801) 519-8900
                </a>
              </li>
              <li className="flex items-center gap-3 text-foreground/70 text-sm">
                <Mail className="w-4 h-4 shrink-0 text-[#f7931e]" />
                <a
                  href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#105;&#110;&#102;&#111;&#64;&#116;&#97;&#118;&#101;&#114;&#110;&#97;&#99;&#108;&#101;&#46;&#99;&#111;&#109;"
                  className="hover:text-[#f7931e] transition-colors"
                >
                  <span>&#105;&#110;&#102;&#111;</span>
                  <span>&#64;</span>
                  <span>
                    &#116;&#97;&#118;&#101;&#114;&#110;&#97;&#99;&#108;&#101;
                  </span>
                  <span>&#46;</span>
                  <span>&#99;&#111;&#109;</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-foreground/40 text-sm">
              &copy; {new Date().getFullYear()} The Tavernacle Social Club. All
              rights reserved.
            </p>
            <p className="text-foreground/30 text-xs flex items-center gap-2">
              Making memories since 2002
              <Music className="w-3.5 h-3.5" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
