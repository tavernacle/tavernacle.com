"use client";

import { useEffect, useState } from "react";
import {
  Calendar as CalendarIcon,
  Clock,
  Music,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface CalendarEvent {
  id: string;
  summary: string;
  description?: string;
  start: {
    dateTime?: string;
    date?: string;
  };
  end: {
    dateTime?: string;
    date?: string;
  };
  location?: string;
}

interface CalendarData {
  items: CalendarEvent[];
}

interface GroupedEvents {
  [date: string]: CalendarEvent[];
}

export default function Calendar() {
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentWeek, setCurrentWeek] = useState(0);

  useEffect(() => {
    async function fetchEvents() {
      try {
        const response = await fetch("/api/events");
        if (!response.ok) throw new Error("Failed to fetch events");
        const data: CalendarData = await response.json();
        setEvents(data.items || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load events");
      } finally {
        setLoading(false);
      }
    }

    fetchEvents();
  }, []);

  // Scroll to top when week changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentWeek]);

  // Group events by date
  const groupEventsByDate = (events: CalendarEvent[]): GroupedEvents => {
    const grouped: GroupedEvents = {};
    events.forEach((event) => {
      const startDateTime = event.start.dateTime || event.start.date;
      if (!startDateTime) return;

      const date = new Date(startDateTime);
      const dateKey = date.toISOString().split("T")[0]; // YYYY-MM-DD

      if (!grouped[dateKey]) {
        grouped[dateKey] = [];
      }
      grouped[dateKey].push(event);
    });
    return grouped;
  };

  // Get events for current week
  const getWeekEvents = (
    events: CalendarEvent[],
    weekOffset: number
  ): { events: GroupedEvents; startDate: Date; endDate: Date } | null => {
    const grouped = groupEventsByDate(events);
    const sortedDates = Object.keys(grouped).sort();

    if (sortedDates.length === 0) return null;

    // Split into weeks (7 days each)
    const weeksData: {
      events: GroupedEvents;
      startDate: Date;
      endDate: Date;
    }[] = [];
    let currentWeekData: GroupedEvents = {};
    let weekStartDate: Date | null = null;
    let weekEndDate: Date | null = null;
    let dayCount = 0;

    sortedDates.forEach((date) => {
      const dateObj = new Date(date);
      if (!weekStartDate) weekStartDate = dateObj;
      weekEndDate = dateObj;

      currentWeekData[date] = grouped[date];
      dayCount++;

      if (dayCount === 7) {
        weeksData.push({
          events: currentWeekData,
          startDate: weekStartDate,
          endDate: weekEndDate,
        });
        currentWeekData = {};
        weekStartDate = null;
        weekEndDate = null;
        dayCount = 0;
      }
    });

    // Add remaining days as the last week
    if (dayCount > 0 && weekStartDate && weekEndDate) {
      weeksData.push({
        events: currentWeekData,
        startDate: weekStartDate,
        endDate: weekEndDate,
      });
    }

    return weeksData[weekOffset] || null;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  const formatWeekRange = (startDate: Date, endDate: Date) => {
    const start = startDate.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
    const end = endDate.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
    return `${start} - ${end}`;
  };

  const formatTime = (dateString: string | undefined) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  const getDayOfWeek = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { weekday: "short" });
  };

  const getDay = (dateString: string) => {
    const date = new Date(dateString);
    return date.getDate().toString();
  };

  const getMonth = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { month: "short" }).toUpperCase();
  };

  if (loading) {
    return (
      <div className="space-y-8">
        {/* Week Title Skeleton */}
        <div className="border-b border-white/10 pb-4">
          <div className="h-7 bg-white/5 rounded w-48 mb-2 animate-pulse"></div>
          <div className="h-4 bg-white/5 rounded w-24 animate-pulse"></div>
        </div>

        {/* Event Skeletons - matching actual structure */}
        {[1, 2, 3].map((i) => (
          <div key={i} className="space-y-3">
            {/* Date Header Skeleton */}
            <div className="flex items-baseline gap-3 border-b border-white/5 pb-2">
              <div className="h-6 bg-white/5 rounded w-40 animate-pulse"></div>
              <div className="h-px flex-1 bg-gradient-to-r from-white/5 to-transparent"></div>
            </div>

            {/* Event Card Skeleton */}
            <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-xl border border-white/10">
              {/* Subtle accent line */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-white/10 to-white/5"></div>

              <div className="flex gap-4 p-4 pl-6">
                {/* Time Badge Skeleton */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-lg bg-white/5 animate-pulse"></div>
                </div>

                {/* Event Details Skeleton */}
                <div className="flex-1 min-w-0 flex flex-col justify-center space-y-2">
                  <div className="h-5 bg-white/5 rounded w-3/4 animate-pulse"></div>
                  <div className="h-4 bg-white/5 rounded w-full animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-20">
        <CalendarIcon className="w-12 h-12 text-foreground/30 mx-auto mb-4" />
        <p className="text-foreground/60">
          Unable to load events at this time.
        </p>
      </div>
    );
  }

  if (events.length === 0) {
    return (
      <div className="text-center py-20">
        <Music className="w-12 h-12 text-[#f7931e] mx-auto mb-4" />
        <p className="text-foreground/60">No upcoming events scheduled.</p>
      </div>
    );
  }

  const weekData = getWeekEvents(events, currentWeek);
  if (!weekData) {
    return (
      <div className="text-center py-20">
        <Music className="w-12 h-12 text-[#f7931e] mx-auto mb-4" />
        <p className="text-foreground/60">No events this week.</p>
      </div>
    );
  }

  const { events: weekEvents, startDate, endDate } = weekData;
  const sortedDates = Object.keys(weekEvents).sort();
  const totalWeeks = Math.ceil(
    Object.keys(groupEventsByDate(events)).length / 7
  );
  const hasNextWeek = currentWeek < totalWeeks - 1;
  const hasPrevWeek = currentWeek > 0;

  return (
    <div className="space-y-8">
      {/* Week Title */}
      <div className="border-b border-white/10 pb-4">
        <h2 className="text-xl font-bold text-[#f7931e] mb-1">
          Week of {formatWeekRange(startDate, endDate)}
        </h2>
        <p className="text-foreground/50 text-sm">
          {sortedDates.reduce((acc, date) => acc + weekEvents[date].length, 0)}{" "}
          events
        </p>
      </div>

      {/* Events Grouped by Date */}
      {sortedDates.length === 0 ? (
        <div className="text-center py-12 glass-effect rounded-xl">
          <Music className="w-12 h-12 text-[#f7931e] mx-auto mb-4" />
          <p className="text-foreground/60">No events this week.</p>
        </div>
      ) : (
        <div className="space-y-8">
          {sortedDates.map((dateKey) => (
            <div key={dateKey} className="space-y-3">
              {/* Date Header - Simple */}
              <div className="flex items-baseline gap-3 border-b border-white/5 pb-2">
                <h3 className="text-lg font-bold text-foreground">
                  {formatDate(dateKey)}
                </h3>
                <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent"></div>
              </div>

              {/* Events for this date */}
              <div className="space-y-3">
                {weekEvents[dateKey].map((event) => {
                  const startDateTime =
                    event.start.dateTime || event.start.date;
                  const isAllDay = !event.start.dateTime;

                  return (
                    <div
                      key={event.id}
                      className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-xl border border-white/10"
                    >
                      {/* Subtle accent line */}
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#f7931e] to-[#ff6b35] opacity-60"></div>

                      <div className="flex gap-4 p-4 pl-6">
                        {/* Time Badge */}
                        {!isAllDay && startDateTime && (
                          <div className="flex-shrink-0">
                            <div className="flex flex-col items-center justify-center w-16 h-16 rounded-lg bg-[#f7931e]/10 border border-[#f7931e]/20">
                              <span className="text-xl font-bold text-[#f7931e] leading-none">
                                {formatTime(startDateTime).split(":")[0]}
                              </span>
                              <span className="text-xs text-[#f7931e]/70 mt-0.5">
                                {formatTime(startDateTime).split(" ")[1]}
                              </span>
                            </div>
                          </div>
                        )}

                        {/* Event Details */}
                        <div className="flex-1 min-w-0 flex flex-col justify-center">
                          <h4 className="text-lg font-bold mb-1 text-white">
                            {event.summary}
                          </h4>

                          {event.description && (
                            <p className="text-white/50 text-sm line-clamp-1">
                              {event.description}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Week Navigation - Bottom - Simplified */}
      {totalWeeks > 1 && (
        <div className="flex items-center justify-between pt-6 border-t border-white/10">
          <button
            onClick={() => setCurrentWeek((prev) => Math.max(0, prev - 1))}
            disabled={!hasPrevWeek}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium transition-all ${
              hasPrevWeek
                ? "bg-white/10 text-foreground hover:bg-white/15 border border-white/10"
                : "bg-white/5 text-white/20 cursor-not-allowed border border-white/5"
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous</span>
          </button>

          <button
            onClick={() =>
              setCurrentWeek((prev) => Math.min(totalWeeks - 1, prev + 1))
            }
            disabled={!hasNextWeek}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium transition-all ${
              hasNextWeek
                ? "bg-white/10 text-foreground hover:bg-white/15 border border-white/10"
                : "bg-white/5 text-white/20 cursor-not-allowed border border-white/5"
            }`}
          >
            <span>Next</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
}
