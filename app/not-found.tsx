import Link from "next/link";
import Header from "./components/Header";
import { Home, Calendar, Music } from "lucide-react";

export default function NotFound() {
  return (
    <div>
      <Header />
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-2xl">
          <h1 className="text-9xl font-black text-[#f7931e] mb-4">404</h1>
          <h2 className="text-4xl font-bold mb-4">Page Not Found</h2>
          <p className="text-xl text-foreground/70 mb-8">
            Looks like this page took a wrong turn on Broadway. Let's get you
            back to the party!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-[#f7931e] hover:bg-[#ff6b35] text-black px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105"
            >
              <Home className="w-5 h-5" />
              Go Home
            </Link>
            <Link
              href="/schedule"
              className="inline-flex items-center gap-2 border-2 border-foreground/20 hover:border-[#f7931e] hover:bg-[#f7931e]/10 text-foreground px-8 py-4 rounded-full font-bold text-lg transition-all"
            >
              <Calendar className="w-5 h-5" />
              See Schedule
            </Link>
          </div>

          <div className="mt-12 pt-12 border-t border-foreground/10">
            <p className="text-sm text-foreground/60">
              Looking for something specific?
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-4 text-sm">
              <Link href="/about" className="text-[#f7931e] hover:underline">
                About Us
              </Link>
              <Link href="/shows" className="text-[#f7931e] hover:underline">
                Our Shows
              </Link>
              <Link href="/venues" className="text-[#f7931e] hover:underline">
                Event Venues
              </Link>
              <Link href="/contact" className="text-[#f7931e] hover:underline">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
