import Header from "../components/Header";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SMS Reservation Updates — Opt-In Example",
  description:
    "Example of The Tavernacle Social Club's optional SMS opt-in, collected within our online reservation form. Consent is optional, never pre-selected, and not required to make a reservation.",
  alternates: {
    canonical: "/sms-opt-in",
  },
  robots: { index: false, follow: true },
};

export default function SmsOptInPage() {
  return (
    <div>
      <Header />

      {/* Hero Section */}
      <div className="relative pt-32 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-purple-950/20 via-black to-black pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 leading-tight">
              <span className="text-foreground">SMS Reservation Updates </span>
              <span className="text-[#f7931e]">— Opt-In Example</span>
            </h1>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              The Tavernacle Social Club
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-white/10">
        <div className="space-y-6 text-foreground/80 leading-relaxed">
          <p>
            Guests making a reservation through The Tavernacle Social Club may
            optionally consent to receive reservation-related text messages. SMS
            consent is collected within our online reservation form at{" "}
            <Link
              href="/contact"
              className="text-[#f7931e] hover:text-[#ff6b35] font-semibold transition-colors"
            >
              tavernacle.com/contact
            </Link>
            .
          </p>
          <p>
            The SMS consent checkbox is optional and is not pre-selected. Guests
            must actively check &ldquo;Yes, send me text updates about my
            reservation&rdquo; to opt in. Consent to receive text messages is
            not required to make a reservation.
          </p>
          <p>
            Reservation-related messages may include confirmations, reminders,
            arrival information, seating information, and reservation updates.
            Message frequency varies. Message and data rates may apply. Reply
            HELP for help or STOP to opt out.
          </p>
        </div>

        {/* Opt-In Screenshot */}
        <figure className="mt-10">
          <div className="glass-effect rounded-2xl p-3 border border-white/10 overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/sms-opt-in-form.png"
              alt="The Tavernacle Social Club reservation form SMS opt-in section: an optional, unchecked checkbox labeled 'Yes, send me text updates about my reservation' with reservation-related disclosure text."
              className="w-full h-auto rounded-lg"
            />
          </div>
          <figcaption className="mt-3 text-center text-sm text-foreground/60">
            The SMS opt-in section shown within our online reservation form. The
            checkbox is optional and not pre-selected.
          </figcaption>
        </figure>

        {/* Policy Links */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
          <Link
            href="/terms"
            className="text-[#f7931e] hover:text-[#ff6b35] font-semibold transition-colors"
          >
            Terms of Service
          </Link>
          <Link
            href="/privacy"
            className="text-[#f7931e] hover:text-[#ff6b35] font-semibold transition-colors"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  );
}
