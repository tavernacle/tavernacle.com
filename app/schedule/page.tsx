import Header from "../components/Header";
import Calendar from "../components/Calendar";
import { Clock, Music, Mic } from "lucide-react";
import { Metadata } from "next";

// Revalidate every 6 hours to match the events API cache
export const revalidate = 21600;

export const metadata: Metadata = {
  title: "Events & Schedule - Live Music Calendar",
  description:
    "Check out tonight's live entertainment at Tavernacle Social Club! Dueling pianos, karaoke nights, and special events. Your guide to the best nightlife in downtown Salt Lake City. Open 6pm-1am daily.",
  keywords: [
    "Salt Lake City events",
    "SLC nightlife calendar",
    "live music tonight",
    "piano bar events",
    "karaoke Salt Lake City",
    "what to do tonight SLC",
    "downtown SLC events",
  ],
  openGraph: {
    title: "Events & Schedule - Tavernacle Social Club",
    description:
      "See what's happening tonight! Live dueling pianos, karaoke, and special events in downtown Salt Lake City.",
  },
};

export default function SchedulePage() {
  return (
    <div>
      <Header />

      {/* Hero Section with gradient background and grid */}
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
        <div className="absolute inset-0 bg-linear-to-b from-purple-950/20 via-black to-black pointer-events-none" />

        {/* Animated Orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute top-20 right-1/4 w-72 h-72 bg-amber-500/15 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black mb-6">
              <span className="text-[#f7931e]">Events &</span>
              <br />
              <span className="text-foreground">Schedule</span>
            </h1>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto mb-6">
              Your nightlife calendar for live entertainment
            </p>

            {/* Bar Hours - Integrated into hero */}
            <div className="flex items-center justify-center gap-3 text-foreground/60">
              <Clock className="w-5 h-5 text-[#f7931e]" />
              <span className="text-lg">Open Every Day</span>
              <span className="text-lg text-foreground/40">•</span>
              <span className="text-lg font-bold text-[#f7931e]">
                6pm - 1am
              </span>
            </div>
          </div>

          {/* Two Column Layout - Sidebar always on the left */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Sidebar - Always on the left, sticky on desktop */}
            <div className="space-y-6 lg:sticky lg:top-24 lg:self-start">
              {/* Weekly Schedule */}
              <div className="glass-effect rounded-xl p-6 border border-white/10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-[#f7931e]/10 border border-[#f7931e]/20">
                    <Music className="w-5 h-5 text-[#f7931e]" />
                  </div>
                  <h3 className="text-lg font-bold">Weekly Schedule</h3>
                </div>
                <div className="space-y-0 divide-y divide-white/5">
                  {[
                    {
                      day: "Sunday",
                      shortDay: "SUN",
                      event: "Karaoke",
                      time: "9pm",
                      isPiano: false,
                    },
                    {
                      day: "Monday",
                      shortDay: "MON",
                      event: "Karaoke",
                      time: "9pm",
                      isPiano: false,
                    },
                    {
                      day: "Tuesday",
                      shortDay: "TUE",
                      event: "Karaoke",
                      time: "9pm",
                      isPiano: false,
                    },
                    {
                      day: "Wednesday",
                      shortDay: "WED",
                      event: "Dueling Pianos",
                      time: "8pm",
                      isPiano: true,
                    },
                    {
                      day: "Thursday",
                      shortDay: "THU",
                      event: "Dueling Pianos",
                      time: "8pm",
                      isPiano: true,
                    },
                    {
                      day: "Friday",
                      shortDay: "FRI",
                      event: "Dueling Pianos",
                      time: "9pm",
                      isPiano: true,
                    },
                    {
                      day: "Saturday",
                      shortDay: "SAT",
                      event: "Dueling Pianos",
                      time: "9pm",
                      isPiano: true,
                    },
                  ].map((item) => (
                    <div
                      key={item.day}
                      className="py-3 first:pt-0 flex items-center justify-between"
                    >
                      <div className="flex items-center gap-3">
                        {item.isPiano ? (
                          <Music className="w-4 h-4 text-[#f7931e] shrink-0" />
                        ) : (
                          <Mic className="w-4 h-4 text-[#f7931e] shrink-0" />
                        )}
                        <div>
                          <p className="font-semibold text-foreground text-sm">
                            {item.day}
                          </p>
                          <p className="text-foreground/60 text-xs">
                            {item.event}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-[#f7931e]">
                        <Clock className="w-3 h-3" />
                        <span className="text-sm font-bold">{item.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Content - Events - Always on the right, spans 2 columns on desktop */}
            <div className="lg:col-span-2">
              <Calendar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
