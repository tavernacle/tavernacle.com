import Header from "../components/Header";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for The Tavernacle Social Club. Learn what information we collect through our website and reservation form, how we use it, and how we protect your mobile phone number and SMS opt-in data.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <div>
      <Header />

      {/* Hero Section */}
      <div className="relative pt-32 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-purple-950/20 via-black to-black pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 leading-tight">
              <span className="text-foreground">Privacy </span>
              <span className="text-[#f7931e]">Policy</span>
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
            <p>
              This Privacy Policy describes how The Tavernacle Social Club
              (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;)
              collects, uses, and protects information you provide through our
              website and reservation form.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground flex items-center gap-3">
              <span className="w-2 h-7 bg-[#f7931e] rounded-full"></span>
              Information We Collect
            </h2>
            <p>
              When you use our website or submit our reservation form, we may
              collect the following information:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Name</li>
              <li>Email address</li>
              <li>Mobile phone number</li>
              <li>Reservation date</li>
              <li>Party size</li>
              <li>Celebration information and comments</li>
              <li>Other information you voluntarily submit</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground flex items-center gap-3">
              <span className="w-2 h-7 bg-[#f7931e] rounded-full"></span>
              How We Use Your Information
            </h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Process and manage reservations</li>
              <li>Communicate with guests</li>
              <li>Provide customer service</li>
              <li>Operate and improve our services</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground flex items-center gap-3">
              <span className="w-2 h-7 bg-[#f7931e] rounded-full"></span>
              SMS / Text Messaging
            </h2>
            <p>
              If you separately opt in to SMS, your mobile number may be used
              for reservation-related text messages, including confirmations,
              reminders, arrival and show information, seating information,
              changes, and other reservation-related customer-care messages.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                SMS consent is optional and is not a condition of making a
                reservation or purchase.
              </li>
              <li>Message frequency varies.</li>
              <li>Message and data rates may apply.</li>
              <li>You can reply STOP to opt out of SMS messages.</li>
              <li>You can reply HELP for assistance.</li>
            </ul>
            <p className="rounded-lg bg-white/5 border border-[#f7931e]/20 p-4 text-foreground/90">
              We do not share, sell, rent, or provide mobile phone numbers or
              SMS opt-in data and consent to third parties or affiliates for
              marketing or promotional purposes.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground flex items-center gap-3">
              <span className="w-2 h-7 bg-[#f7931e] rounded-full"></span>
              Service Providers
            </h2>
            <p>
              We may use service providers as necessary to operate our
              reservation, email, website, and messaging systems. However, SMS
              opt-in information is not provided to third parties for their own
              marketing or promotional purposes.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground flex items-center gap-3">
              <span className="w-2 h-7 bg-[#f7931e] rounded-full"></span>
              Data Security
            </h2>
            <p>
              We use reasonable administrative, technical, and physical
              safeguards designed to protect the information we collect against
              unauthorized access, use, or disclosure. While no method of
              transmission or storage is completely secure, we take reasonable
              steps to protect your information.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground flex items-center gap-3">
              <span className="w-2 h-7 bg-[#f7931e] rounded-full"></span>
              Contact Us
            </h2>
            <p>
              If you have questions about this Privacy Policy, please contact
              us:
            </p>
            <div className="rounded-lg bg-white/5 border border-white/10 p-6 space-y-1">
              <p>
                <a
                  href="mailto:reservations@tavernacle.com"
                  className="text-[#f7931e] hover:text-[#ff6b35] font-semibold transition-colors"
                >
                  reservations@tavernacle.com
                </a>
              </p>
              <p className="font-semibold text-foreground">
                The Tavernacle Social Club
              </p>
              <p>50 W Broadway</p>
              <p>Salt Lake City, UT 84101</p>
            </div>
          </section>

          <section>
            <p>
              See also our{" "}
              <Link
                href="/terms"
                className="text-[#f7931e] hover:text-[#ff6b35] font-semibold transition-colors"
              >
                Terms &amp; Conditions
              </Link>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
