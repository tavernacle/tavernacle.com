import Header from "../components/Header";
import {
  ChevronDown,
  MapPin,
  Clock,
  DollarSign,
  Calendar,
  Users,
  Music,
  UtensilsCrossed,
  Car,
  Phone,
} from "lucide-react";
import { Metadata } from "next";
import { generateFAQSchema } from "../lib/seo";

export const metadata: Metadata = {
  title: "FAQ - Frequently Asked Questions About Our Piano Bar & Venue",
  description:
    "Got questions? Find answers about Tavernacle Social Club's hours, parking, reservations, events, dress code, and more. Located in downtown Salt Lake City at 50 W Broadway.",
  keywords: [
    "Tavernacle FAQ",
    "Salt Lake City bar questions",
    "piano bar hours SLC",
    "downtown SLC parking",
    "bar reservations Salt Lake City",
    "event venue FAQ",
  ],
  openGraph: {
    title: "FAQ - Tavernacle Social Club",
    description:
      "Everything you need to know about visiting Salt Lake City's premier dueling piano bar.",
  },
};

const faqs = [
  {
    category: "Hours & Location",
    questions: [
      {
        question: "What are your hours of operation?",
        answer:
          "We're open daily from 6:00 PM to 1:00 AM (Monday-Thursday) and 6:00 PM to 2:00 AM (Friday-Saturday). Join us for dinner, drinks, and live entertainment every night!",
      },
      {
        question: "Where are you located?",
        answer:
          "We're in the heart of downtown Salt Lake City's Gateway District at 50 W Broadway, inside the Broadway Media Building. We're just a short walk from Vivint Arena and the Gateway Mall.",
      },
      {
        question: "Is there parking available?",
        answer:
          "Yes! Parking is available below our building (Broadway Media Building). You can also park in the paid lot on the south side of Broadway across the street. We suggest ride sharing as this will be the safest way to enjoy the evening.",
      },
      {
        question: "Are you accessible by public transportation?",
        answer:
          "Absolutely! We're within walking distance of the TRAX Green and Blue Line stations. The closest stop is Arena station, just 3 blocks away.",
      },
    ],
  },
  {
    category: "Reservations & Events",
    questions: [
      {
        question: "Do you take reservations?",
        answer:
          "We operate on a first-come, first-served basis for regular dining and entertainment. However, we do accept bookings for private events, corporate parties, and special celebrations. Call us at (801) 519-8900 to discuss your event!",
      },
      {
        question: "Can I book the venue for a private event?",
        answer:
          "Yes! We have three unique venues perfect for private events, corporate parties, weddings, birthdays, and more. Contact us at (801) 519-8900 or info@tavernacle.com to learn about our event packages.",
      },
      {
        question: "What's the capacity for private events?",
        answer:
          "Our main venue holds up to 250 guests, The Steyk Center accommodates 150, and The Patio is perfect for 75-100 guests. We can accommodate groups of all sizes!",
      },
      {
        question: "Do you offer event packages?",
        answer:
          "Yes! We offer customizable packages including food, drinks, entertainment, and dedicated event staff. Visit our venues page or contact us for detailed pricing and options.",
      },
    ],
  },
  {
    category: "Entertainment & Music",
    questions: [
      {
        question: "What type of entertainment do you offer?",
        answer:
          "We're famous for our dueling piano shows! We also feature karaoke nights, live bands, and special performances. Check our schedule page to see what's happening tonight!",
      },
      {
        question: "What time does the music start?",
        answer:
          "Live entertainment typically starts at 8:00 PM. Arrive early to grab the best seats and enjoy dinner and drinks!",
      },
      {
        question: "Can I request songs?",
        answer:
          "Absolutely! Our dueling piano performers love taking requests. Song request slips are available at your table and all around the bar. Just write your song on a slip with a tip and send it up to the stage. The bigger the tip, the faster your song gets played!",
      },
      {
        question: "Is there a cover charge?",
        answer:
          "Most nights are free to enter! Some special events and performances may have a cover charge. Check our schedule or call ahead for specific event details.",
      },
    ],
  },
  {
    category: "Food & Drinks",
    questions: [
      {
        question: "Do you serve food?",
        answer:
          "Yes! We have a full menu featuring delicious appetizers, entrees, pizzas, salads, and late-night bites. Perfect for dinner before the show or snacks during the entertainment.",
      },
      {
        question: "What kind of drinks do you offer?",
        answer:
          "We have a full bar with local Utah craft beers on tap, handcrafted cocktails, wine, and premium spirits. Our bartenders are experts at creating both classic and creative drinks!",
      },
      {
        question: "Are you 21+ only?",
        answer:
          "Yes, we are a 21+ venue. Please bring a valid ID as we card at the door.",
      },
    ],
  },
  {
    category: "Policies & Guidelines",
    questions: [
      {
        question: "What's the dress code?",
        answer:
          "We have a casual dress code! Come as you are and enjoy the vibe. We want you to be comfortable while having a great time.",
      },
      {
        question: "Are you LGBTQ+ friendly?",
        answer:
          "Absolutely! Everyone is welcome at The Tavernacle. We pride ourselves on being an inclusive, welcoming space for all.",
      },
      {
        question: "Is the venue wheelchair accessible?",
        answer:
          "Yes, we are wheelchair accessible with accessible entrances, restrooms, and seating areas.",
      },
      {
        question: "Do you allow smoking?",
        answer:
          "Smoking is permitted on our outdoor patio only. You're welcome to enjoy your drink on the patio while you smoke. Our indoor venues are smoke-free.",
      },
    ],
  },
  {
    category: "Payment & Pricing",
    questions: [
      {
        question: "What forms of payment do you accept?",
        answer:
          "We accept cash, credit cards (Visa, Mastercard, American Express, Discover), and debit cards.",
      },
      {
        question: "Is there an ATM on-site?",
        answer: "Yes, we have an ATM available for your convenience.",
      },
      {
        question: "What's your price range?",
        answer:
          "We're moderately priced ($$). Most appetizers are $8-15, entrees $12-20, and drinks $6-12. Great value for the entertainment and atmosphere!",
      },
    ],
  },
  {
    category: "Contact & More Info",
    questions: [
      {
        question: "How can I contact you?",
        answer:
          "Call us at (801) 519-8900 or email info@tavernacle.com. You can also reach out through our social media channels on Facebook and Instagram.",
      },
      {
        question: "How long have you been in business?",
        answer:
          "We've been Salt Lake City's premier live music venue since 2002 - over 20 years of unforgettable entertainment!",
      },
    ],
  },
];

export default function FAQPage() {
  // Generate FAQ schema for SEO
  const faqSchemaData = generateFAQSchema(
    faqs.flatMap((category) => category.questions)
  );

  return (
    <div>
      {/* Add FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchemaData),
        }}
      />

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
            backgroundSize: "50px 50px",
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
          {/* Hero Title */}
          <div className="text-center mb-16">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black mb-6 leading-tight">
              <span className="text-foreground">Frequently Asked </span>
              <span className="text-[#f7931e]">Questions</span>
            </h1>
            <p className="text-2xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
              Everything you need to know about visiting Salt Lake City&apos;s
              premier dueling piano bar
            </p>
          </div>

          {/* Quick Contact Bar */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
            <a
              href="tel:+18015198900"
              className="group p-6 rounded-lg bg-white/5 border border-white/10 hover:border-[#f7931e] hover:bg-[#f7931e]/10 transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#f7931e]/20 flex items-center justify-center group-hover:bg-[#f7931e] transition-colors">
                  <Phone className="w-6 h-6 text-[#f7931e] group-hover:text-black" />
                </div>
                <div>
                  <div className="text-sm text-foreground/60 mb-1">Call Us</div>
                  <div className="text-lg font-bold text-foreground group-hover:text-[#f7931e]">
                    (801) 519-8900
                  </div>
                </div>
              </div>
            </a>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Tavernacle+Social+Club,+50+W+Broadway,+Salt+Lake+City,+UT+84101"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-lg bg-white/5 border border-white/10 hover:border-[#f7931e] hover:bg-[#f7931e]/10 transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#f7931e]/20 flex items-center justify-center group-hover:bg-[#f7931e] transition-colors">
                  <MapPin className="w-6 h-6 text-[#f7931e] group-hover:text-black" />
                </div>
                <div>
                  <div className="text-sm text-foreground/60 mb-1">
                    Visit Us
                  </div>
                  <div className="text-lg font-bold text-foreground group-hover:text-[#f7931e]">
                    50 W Broadway
                  </div>
                </div>
              </div>
            </a>

            <a
              href="/schedule"
              className="group p-6 rounded-lg bg-white/5 border border-white/10 hover:border-[#f7931e] hover:bg-[#f7931e]/10 transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#f7931e]/20 flex items-center justify-center group-hover:bg-[#f7931e] transition-colors">
                  <Clock className="w-6 h-6 text-[#f7931e] group-hover:text-black" />
                </div>
                <div>
                  <div className="text-sm text-foreground/60 mb-1">Hours</div>
                  <div className="text-lg font-bold text-foreground group-hover:text-[#f7931e]">
                    6pm - 1am Daily
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-12">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="w-2 h-8 bg-[#f7931e] rounded-full"></span>
                {category.category}
              </h2>
              <div className="space-y-4">
                {category.questions.map((faq, faqIndex) => (
                  <details
                    key={faqIndex}
                    className="group rounded-lg bg-white/5 border border-white/10 hover:border-[#f7931e]/50 transition-all overflow-hidden"
                  >
                    <summary className="cursor-pointer list-none flex items-center justify-between gap-4 p-6 w-full">
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-[#f7931e] transition-colors">
                        {faq.question}
                      </h3>
                      <ChevronDown className="w-5 h-5 text-[#f7931e] transition-transform group-open:rotate-180 flex-shrink-0" />
                    </summary>
                    <div className="px-6 pb-6 pt-0">
                      <div className="pt-4 border-t border-white/10">
                        <p className="text-foreground/70 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Still Have Questions? */}
        <div className="mt-20 p-10 rounded-2xl bg-gradient-to-br from-[#f7931e]/20 to-purple-500/20 border border-[#f7931e]/30 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Still Have Questions?
          </h2>
          <p className="text-foreground/70 mb-8 text-lg">
            We&apos;re here to help! Give us a call or send us an email.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+18015198900"
              className="px-8 py-4 bg-[#f7931e] text-black font-bold rounded-lg hover:bg-[#ff6b35] transition-colors inline-flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call (801) 519-8900
            </a>
            <a
              href="mailto:info@tavernacle.com"
              className="px-8 py-4 bg-white/10 text-foreground font-bold rounded-lg hover:bg-white/20 border border-white/20 transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
