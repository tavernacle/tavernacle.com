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

  // Scroll to top of calendar section, including the date header
  const scrollToTop = () => {
    // Find the week title header (the date range display)
    const weekHeader = document.querySelector("[data-week-header]");
    const calendarSection = document.querySelector("[data-calendar-section]");
    const scheduleHeader = document.querySelector("h1");

    // Priority: week header > calendar section > page header
    const targetElement = weekHeader || calendarSection || scheduleHeader;

    if (targetElement) {
      // Get the element's position
      const elementRect = targetElement.getBoundingClientRect();
      const currentScrollY = window.scrollY;
      const targetY = currentScrollY + elementRect.top;

      // Offset for fixed header (adjust this value based on your header height)
      const headerOffset = 120; // Adjust this value as needed
      const finalScrollY = Math.max(0, targetY - headerOffset);

      window.scrollTo({
        top: finalScrollY,
        behavior: "smooth",
      });
    } else {
      // Fallback: scroll to top of page
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Helper function to change week and scroll
  const changeWeek = (newWeek: number) => {
    setCurrentWeek(newWeek);
    // Small delay to ensure state update, then scroll
    setTimeout(() => {
      scrollToTop();
    }, 100);
  };

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

  // Group events by date
  const groupEventsByDate = (events: CalendarEvent[]): GroupedEvents => {
    const grouped: GroupedEvents = {};
    events.forEach((event) => {
      const startDateTime = event.start.dateTime || event.start.date;
      if (!startDateTime) return;

      const date = new Date(startDateTime);
      // Use local date for grouping, not UTC date
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      const dateKey = `${year}-${month}-${day}`; // YYYY-MM-DD in local timezone

      if (!grouped[dateKey]) {
        grouped[dateKey] = [];
      }
      grouped[dateKey].push(event);
    });

    // Sort events within each day by start time
    Object.keys(grouped).forEach((dateKey) => {
      grouped[dateKey].sort((a, b) => {
        const aTime = a.start.dateTime || a.start.date || "";
        const bTime = b.start.dateTime || b.start.date || "";
        const aIsAllDay = !a.start.dateTime;
        const bIsAllDay = !b.start.dateTime;

        // If one is all-day and the other isn't, put all-day events last
        if (aIsAllDay && !bIsAllDay) return 1;
        if (!aIsAllDay && bIsAllDay) return -1;

        // Otherwise sort by time
        return new Date(aTime).getTime() - new Date(bTime).getTime();
      });
    });

    return grouped;
  };

  // Filter out past events (before today), but keep all events for today
  const filterUpcomingEvents = (events: CalendarEvent[]): CalendarEvent[] => {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Start of today

    return events.filter((event) => {
      const startDateTime = event.start.dateTime || event.start.date;
      if (!startDateTime) return false;

      const eventDate = new Date(startDateTime);
      eventDate.setHours(0, 0, 0, 0); // Start of event day

      // Include all events for today and future dates
      return eventDate >= today;
    });
  };

  // Check if an event is currently happening
  const isEventHappeningNow = (event: CalendarEvent): boolean => {
    const now = new Date();
    const startDateTime = event.start.dateTime;
    const endDateTime = event.end.dateTime;

    if (!startDateTime || !endDateTime) return false;

    const start = new Date(startDateTime);
    const end = new Date(endDateTime);

    return now >= start && now <= end;
  };

  // Check if an event has passed (ended before now)
  const isEventPast = (event: CalendarEvent): boolean => {
    const now = new Date();
    const endDateTime = event.end.dateTime || event.end.date;

    if (!endDateTime) return false;

    const end = new Date(endDateTime);
    return now > end;
  };

  // Get events for current week, filtered for upcoming only
  const getWeekEvents = (
    events: CalendarEvent[],
    weekOffset: number
  ): {
    events: GroupedEvents;
    startDate: Date;
    endDate: Date;
    isCurrentWeek: boolean;
  } | null => {
    // First filter out past events
    const upcomingEvents =
      weekOffset === 0 ? filterUpcomingEvents(events) : events;
    const grouped = groupEventsByDate(upcomingEvents);
    const sortedDates = Object.keys(grouped).sort();

    if (sortedDates.length === 0) return null;

    // For week 0, start from today and show upcoming events
    if (weekOffset === 0) {
      const today = new Date();
      const nextWeek = new Date(today);
      nextWeek.setDate(today.getDate() + 7);

      const currentWeekEvents: GroupedEvents = {};
      let hasEvents = false;

      sortedDates.forEach((date) => {
        const eventDate = new Date(date);
        if (eventDate >= today && eventDate < nextWeek) {
          currentWeekEvents[date] = grouped[date];
          hasEvents = true;
        }
      });

      if (!hasEvents) return null;

      return {
        events: currentWeekEvents,
        startDate: today,
        endDate: nextWeek,
        isCurrentWeek: true,
      };
    }

    // For other weeks, use the original logic but offset by 1 since week 0 is "current"
    const adjustedOffset = weekOffset - 1;
    const weeksData: {
      events: GroupedEvents;
      startDate: Date;
      endDate: Date;
    }[] = [];
    let currentWeekData: GroupedEvents = {};
    let weekStartDate: Date | null = null;
    let weekEndDate: Date | null = null;
    let dayCount = 0;

    // Skip events that are in the current week (already shown in week 0)
    const today = new Date();
    const nextWeek = new Date(today);
    nextWeek.setDate(today.getDate() + 7);

    const futureEvents = sortedDates.filter(
      (date) => new Date(date) >= nextWeek
    );

    futureEvents.forEach((date) => {
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

    const result = weeksData[adjustedOffset] || null;
    return result ? { ...result, isCurrentWeek: false } : null;
  };

  const formatDate = (dateString: string) => {
    // dateString is in YYYY-MM-DD format (local date)
    // Parse it as local date, not UTC
    const [year, month, day] = dateString.split('-').map(Number);
    const date = new Date(year, month - 1, day);
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
        <div className="border-b border-white/20 pb-4">
          <div className="h-7 bg-linear-to-r from-white/10 to-white/5 rounded-lg w-48 mb-2 animate-pulse"></div>
          <div className="h-4 bg-linear-to-r from-white/10 to-white/5 rounded-lg w-24 animate-pulse"></div>
        </div>

        {/* Event Skeletons - matching actual structure with more visible styling */}
        {[1, 2, 3].map((i) => (
          <div key={i} className="space-y-3">
            {/* Date Header Skeleton */}
            <div className="flex items-baseline gap-3 border-b border-white/10 pb-2">
              <div className="h-6 bg-linear-to-r from-white/15 to-white/5 rounded-lg w-40 sm:w-48 animate-pulse"></div>
              <div className="h-px flex-1 bg-linear-to-r from-white/10 to-transparent"></div>
            </div>

            {/* Event Card Skeleton - More visible on mobile */}
            <div className="relative bg-linear-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg">
              {/* More prominent accent line */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-linear-to-b from-[#f7931e]/50 to-[#ff6b35]/30 animate-pulse"></div>

              <div className="flex gap-4 p-5 pl-6">
                {/* Time Badge Skeleton - More visible */}
                <div className="shrink-0">
                  <div className="w-16 h-16 rounded-lg bg-linear-to-br from-white/15 to-white/5 border border-white/20 animate-pulse"></div>
                </div>

                {/* Event Details Skeleton - More visible */}
                <div className="flex-1 min-w-0 flex flex-col justify-center space-y-3">
                  <div className="h-5 bg-linear-to-r from-white/20 to-white/5 rounded-lg w-3/4 animate-pulse"></div>
                  <div className="h-4 bg-linear-to-r from-white/15 to-white/5 rounded-lg w-full animate-pulse"></div>
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
        <p className="text-foreground/60">
          {currentWeek === 0
            ? "No upcoming events this week."
            : "No events this week."}
        </p>
      </div>
    );
  }

  const { events: weekEvents, startDate, endDate, isCurrentWeek } = weekData;
  const sortedDates = Object.keys(weekEvents).sort();

  // Calculate total weeks more accurately - count actual weeks with events
  const upcomingEvents = filterUpcomingEvents(events);
  const grouped = groupEventsByDate(upcomingEvents);

  // Week 0 is current week, then we need to count future weeks
  const today = new Date();
  const nextWeek = new Date(today);
  nextWeek.setDate(today.getDate() + 7);

  const futureEventDates = Object.keys(grouped).filter(
    (date) => new Date(date) >= nextWeek
  );

  // Total weeks = 1 (current) + future weeks (rounded up)
  const totalUpcomingWeeks = 1 + Math.ceil(futureEventDates.length / 7);
  const hasNextWeek = currentWeek < totalUpcomingWeeks - 1;
  const hasPrevWeek = currentWeek > 0;

  return (
    <div className="space-y-8" data-calendar-section>
      {/* Week Title with This Week button */}
      <div
        className="flex items-start justify-between border-b border-white/10 pb-4"
        data-week-header
      >
        <div>
          <h2 className="text-xl font-bold text-[#f7931e] mb-1">
            {isCurrentWeek
              ? "Today & Upcoming"
              : formatWeekRange(startDate, endDate)}
          </h2>
          <p className="text-foreground/50 text-sm">
            {sortedDates.reduce(
              (acc, date) => acc + weekEvents[date].length,
              0
            )}{" "}
            events
          </p>
        </div>
        {currentWeek !== 0 && (
          <button
            onClick={() => changeWeek(0)}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#f7931e]/10 text-[#f7931e] hover:bg-[#f7931e]/20 border border-[#f7931e]/20 transition-colors font-medium text-sm"
          >
            <CalendarIcon className="w-4 h-4" />
            <span>Return to Today</span>
          </button>
        )}
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
                <div className="h-px flex-1 bg-linear-to-r from-white/10 to-transparent"></div>
              </div>

              {/* Events for this date */}
              <div className="space-y-3">
                {weekEvents[dateKey].map((event) => {
                  const startDateTime =
                    event.start.dateTime || event.start.date;
                  const isAllDay = !event.start.dateTime;
                  const isHappeningNow = isEventHappeningNow(event);
                  const isPast = isEventPast(event);

                  return (
                    <div
                      key={event.id}
                      className={`group relative bg-linear-to-br from-white/5 to-white/2 backdrop-blur-sm rounded-xl border border-white/10 transition-opacity ${
                        isPast ? "opacity-40" : ""
                      }`}
                    >
                      {/* Subtle accent line */}
                      <div
                        className={`absolute left-0 top-0 bottom-0 w-1 bg-linear-to-b ${
                          isHappeningNow
                            ? "from-green-500 to-green-600 animate-pulse"
                            : "from-[#f7931e] to-[#ff6b35]"
                        } opacity-60`}
                      ></div>

                      <div className="flex gap-4 p-4 pl-6">
                        {/* Time Badge */}
                        {!isAllDay && startDateTime && (
                          <div className="shrink-0">
                            <div
                              className={`flex flex-col items-center justify-center w-16 h-16 rounded-lg border ${
                                isHappeningNow
                                  ? "bg-green-500/10 border-green-500/20"
                                  : "bg-[#f7931e]/10 border-[#f7931e]/20"
                              }`}
                            >
                              <span
                                className={`text-xl font-bold leading-none ${
                                  isHappeningNow
                                    ? "text-green-500"
                                    : "text-[#f7931e]"
                                }`}
                              >
                                {formatTime(startDateTime).split(":")[0]}
                              </span>
                              <span
                                className={`text-xs mt-0.5 ${
                                  isHappeningNow
                                    ? "text-green-500/70"
                                    : "text-[#f7931e]/70"
                                }`}
                              >
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

                        {/* "Happening Now!" Badge */}
                        {isHappeningNow && (
                          <div className="shrink-0 flex items-center">
                            <div className="relative">
                              <div className="px-3 py-1.5 rounded-full bg-green-500/20 border border-green-500/30 backdrop-blur-sm">
                                <span className="text-green-400 text-xs font-bold uppercase tracking-wide">
                                  Happening Now!
                                </span>
                              </div>
                              {/* Pulse animation */}
                              <div className="absolute inset-0 rounded-full bg-green-500/20 animate-ping"></div>
                            </div>
                          </div>
                        )}
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
      {totalUpcomingWeeks > 1 && (
        <div className="flex items-center justify-between pt-6 border-t border-white/10">
          <button
            onClick={() => changeWeek(Math.max(0, currentWeek - 1))}
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
              changeWeek(Math.min(totalUpcomingWeeks - 1, currentWeek + 1))
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
