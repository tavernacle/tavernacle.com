import Header from "../components/Header";
import Calendar from "../components/Calendar";
import { Clock, Music, Mic } from "lucide-react";

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
          <div className="text-center mb-16">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black mb-6">
              <span className="text-[#f7931e]">Events &</span>
              <br />
              <span className="text-foreground">Schedule</span>
            </h1>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Your nightlife calendar for live entertainment
            </p>
          </div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content - Events */}
            <div className="lg:col-span-2">
              <Calendar />
            </div>

            {/* Sidebar - Sticky */}
            <div className="space-y-6 lg:sticky lg:top-24 lg:self-start">
              {/* Bar Hours */}
              <div className="glass-effect rounded-xl p-6 border border-white/10">
                <div className="flex items-center gap-3 mb-5 pb-3 border-b border-white/10">
                  <Clock className="w-5 h-5 text-[#f7931e]" />
                  <h3 className="text-lg font-bold">Bar Hours</h3>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-foreground/60 text-sm">Every Day</span>
                  <span className="font-bold text-[#f7931e]">6pm - 1am</span>
                </div>
              </div>

              {/* Weekly Schedule */}
              <div className="glass-effect rounded-xl p-6 border border-white/10">
                <div className="flex items-center gap-3 mb-5 pb-3 border-b border-white/10">
                  <Music className="w-5 h-5 text-[#f7931e]" />
                  <h3 className="text-lg font-bold">Weekly Schedule</h3>
                </div>
                <div className="space-y-2">
                  {[
                    {
                      day: "Sun",
                      event: "Karaoke",
                      time: "9pm",
                      isPiano: false,
                    },
                    {
                      day: "Mon",
                      event: "Karaoke",
                      time: "9pm",
                      isPiano: false,
                    },
                    {
                      day: "Tue",
                      event: "Karaoke",
                      time: "9pm",
                      isPiano: false,
                    },
                    {
                      day: "Wed",
                      event: "Dueling Pianos",
                      time: "8pm",
                      isPiano: true,
                    },
                    {
                      day: "Thu",
                      event: "Dueling Pianos",
                      time: "8pm",
                      isPiano: true,
                    },
                    {
                      day: "Fri",
                      event: "Dueling Pianos",
                      time: "9pm",
                      isPiano: true,
                    },
                    {
                      day: "Sat",
                      event: "Dueling Pianos",
                      time: "9pm",
                      isPiano: true,
                    },
                  ].map((item) => (
                    <div
                      key={item.day}
                      className="flex items-center gap-3 p-2 rounded-lg"
                    >
                      <div className="w-11 h-14 rounded-lg bg-gradient-to-br from-[#f7931e] to-[#ff6b35] flex flex-col items-center justify-center flex-shrink-0 gap-0.5 py-1.5">
                        {item.isPiano ? (
                          <Music className="w-4 h-4 text-black" />
                        ) : (
                          <Mic className="w-4 h-4 text-black" />
                        )}
                        <span className="text-[11px] font-bold text-black leading-none">
                          {item.day}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-sm leading-tight truncate">
                          {item.event}
                        </p>
                        <p className="text-xs text-foreground/50">
                          {item.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
