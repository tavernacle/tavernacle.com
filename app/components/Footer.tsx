import Image from "next/image";
import Link from "next/link";
import {
  Facebook,
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
    <footer className="relative bg-gradient-to-b from-black to-zinc-950 border-t border-white/10">
      {/* Animated top border */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#f7931e]/50 to-transparent" />

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
                src="/logo.png"
                alt="Tavernacle Social Club"
                width={150}
                height={60}
                className="h-12 w-auto transition-transform group-hover:scale-105"
              />
            </Link>
            <p className="text-foreground/70 text-sm leading-relaxed mb-6">
              Salt Lake City&apos;s premier destination for live music and
              unforgettable experiences since 2002.
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
                href="https://x.com/Tavernacle"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#f7931e] border border-white/10 hover:border-[#f7931e] flex items-center justify-center transition-all hover:scale-110 group"
                aria-label="X (Twitter)"
              >
                <Twitter className="w-4 h-4 text-foreground/60 group-hover:text-black transition-colors" />
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
                  className="text-foreground/60 hover:text-[#f7931e] transition-colors text-sm flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 rounded-full bg-foreground/30 group-hover:bg-[#f7931e] transition-colors"></span>
                  Venues
                </Link>
              </li>
              <li>
                <Link
                  href="/shows"
                  className="text-foreground/60 hover:text-[#f7931e] transition-colors text-sm flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 rounded-full bg-foreground/30 group-hover:bg-[#f7931e] transition-colors"></span>
                  Shows
                </Link>
              </li>
              <li>
                <Link
                  href="/menu"
                  className="text-foreground/60 hover:text-[#f7931e] transition-colors text-sm flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 rounded-full bg-foreground/30 group-hover:bg-[#f7931e] transition-colors"></span>
                  Menu
                </Link>
              </li>
              <li>
                <Link
                  href="/schedule"
                  className="text-foreground/60 hover:text-[#f7931e] transition-colors text-sm flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 rounded-full bg-foreground/30 group-hover:bg-[#f7931e] transition-colors"></span>
                  Schedule
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-foreground/60 hover:text-[#f7931e] transition-colors text-sm flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 rounded-full bg-foreground/30 group-hover:bg-[#f7931e] transition-colors"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-foreground/60 hover:text-[#f7931e] transition-colors text-sm flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 rounded-full bg-foreground/30 group-hover:bg-[#f7931e] transition-colors"></span>
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
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#f7931e]" />
                <span className="leading-relaxed">
                  50 West Broadway
                  <br />
                  Salt Lake City, UT
                </span>
              </li>
              <li className="flex items-center gap-3 text-foreground/70 text-sm">
                <Phone className="w-4 h-4 flex-shrink-0 text-[#f7931e]" />
                <Link
                  href="/contact"
                  className="hover:text-[#f7931e] transition-colors"
                >
                  Contact for details
                </Link>
              </li>
              <li className="flex items-center gap-3 text-foreground/70 text-sm">
                <Mail className="w-4 h-4 flex-shrink-0 text-[#f7931e]" />
                <a
                  href="mailto:info@tavernacle.com"
                  className="hover:text-[#f7931e] transition-colors"
                >
                  info@tavernacle.com
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
