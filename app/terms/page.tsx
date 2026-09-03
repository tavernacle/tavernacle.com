import Header from "../components/Header";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms & Conditions for The Tavernacle Social Club, including details about our optional reservation-related SMS/text messaging program.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  return (
    <div>
      <Header />

      {/* Hero Section */}
      <div className="relative pt-32 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-purple-950/20 via-black to-black pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 leading-tight">
              <span className="text-foreground">Terms &amp; </span>
              <span className="text-[#f7931e]">Conditions</span>
            </h1>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              The Tavernacle Social Club
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-white/10">
        <div className="space-y-10 text-foreground/80 leading-relaxed">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground flex items-center gap-3">
              <span className="w-2 h-7 bg-[#f7931e] rounded-full"></span>
              SMS / Text Messaging
            </h2>
            <p>
              The Tavernacle Social Club offers optional reservation-related SMS
              messaging to guests who affirmatively opt in.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Messages may include reservation confirmations, day-of
                reminders, show times, recommended arrival times, seating
                information, reservation changes, and responses to
                reservation-related questions.
              </li>
              <li>
                Message frequency varies depending on your reservation and
                interaction with us.
              </li>
              <li>Message and data rates may apply.</li>
              <li>Reply STOP at any time to unsubscribe.</li>
              <li>Reply HELP for assistance.</li>
              <li>
                Consent to receive SMS messages is not a condition of purchase
                or making a reservation.
              </li>
              <li>
                Wireless carriers are not liable for delayed or undelivered
                messages.
              </li>
              <li>
                Guests are responsible for providing a mobile number they are
                authorized to use.
              </li>
            </ul>
            <p>
              For information about how we handle your data, please review our{" "}
              <Link
                href="/privacy"
                className="text-[#f7931e] hover:text-[#ff6b35] font-semibold transition-colors"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground flex items-center gap-3">
              <span className="w-2 h-7 bg-[#f7931e] rounded-full"></span>
              Contact Us
            </h2>
            <p>
              If you have questions about these Terms &amp; Conditions, please
              contact us:
            </p>
            <div className="rounded-lg bg-white/5 border border-white/10 p-6">
              <p>
                <a
                  href="mailto:reservations@tavernacle.com"
                  className="text-[#f7931e] hover:text-[#ff6b35] font-semibold transition-colors"
                >
                  reservations@tavernacle.com
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
