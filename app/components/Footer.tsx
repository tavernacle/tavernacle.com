import Image from "next/image";
import Link from "next/link";
import { Facebook, Twitter, Youtube, MapPin, Phone, Mail } from "lucide-react";
import { ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-white/10">
      {/* Subtle gradient at top */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#f7931e]/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo & About */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/logo.png"
                alt="Tavernacle Social Club"
                width={150}
                height={60}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-foreground/60 text-sm leading-relaxed mb-4">
              Salt Lake City&apos;s premier destination for live music and
              unforgettable experiences since 2002.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/TavernacleSLC"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#f7931e] border border-white/10 hover:border-[#f7931e] flex items-center justify-center transition-all group"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 text-foreground/60 group-hover:text-black transition-colors" />
              </a>
              <a
                href="https://x.com/Tavernacle"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#f7931e] border border-white/10 hover:border-[#f7931e] flex items-center justify-center transition-all group"
                aria-label="X (Twitter)"
              >
                <Twitter className="w-4 h-4 text-foreground/60 group-hover:text-black transition-colors" />
              </a>
              <a
                href="https://www.youtube.com/user/tavernaclesocialclub"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#f7931e] border border-white/10 hover:border-[#f7931e] flex items-center justify-center transition-all group"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4 text-foreground/60 group-hover:text-black transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">
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
                  href="/contact"
                  className="text-foreground/60 hover:text-[#f7931e] transition-colors text-sm"
                >
                  Contact & Book Event
                </Link>
              </li>
            </ul>
          </div>

          {/* Venues */}
          <div>
            <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">
              Our Venues
            </h3>
            <ul className="space-y-3">
              <li className="text-foreground/60 text-sm">The Tavernacle</li>
              <li className="text-foreground/60 text-sm flex items-center gap-1">
                <a
                  href="https://steykcenter.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#f7931e] transition-colors flex items-center gap-1"
                >
                  The Steyk Center
                  <ExternalLink
                    className="w-3.5 h-3.5 ml-1 text-[#f7931e]"
                    aria-hidden="true"
                  />
                </a>
              </li>
              <li className="text-foreground/60 text-sm">The Patio</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-foreground/60 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#f7931e]" />
                <span>
                  50 West Broadway
                  <br />
                  Salt Lake City, UT
                </span>
              </li>
              <li className="flex items-center gap-2 text-foreground/60 text-sm">
                <Phone className="w-4 h-4 flex-shrink-0 text-[#f7931e]" />
                <a
                  href="tel:801-555-0100"
                  className="hover:text-[#f7931e] transition-colors"
                >
                  Contact for details
                </a>
              </li>
              <li className="flex items-center gap-2 text-foreground/60 text-sm">
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
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-foreground/40 text-sm">
              © {new Date().getFullYear()} Tavernacle Social Club. All rights
              reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link
                href="/privacy"
                className="text-foreground/40 hover:text-[#f7931e] transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-foreground/40 hover:text-[#f7931e] transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
