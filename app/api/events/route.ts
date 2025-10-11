import { NextResponse } from "next/server";
import ICAL from "ical.js";

const CALENDAR_ID = "r2im3qnkc6i4oq0c6ofsuqubnc@group.calendar.google.com";

// Disable Next.js route caching
export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET() {
  try {
    // Fetch the public iCal feed - use 'public/full.ics' to get expanded recurring events
    const icalUrl = `https://calendar.google.com/calendar/ical/${encodeURIComponent(
      CALENDAR_ID
    )}/public/full.ics`;

    const response = await fetch(icalUrl, {
      cache: "no-store", // Don't cache - calendar data changes frequently
    });

    if (!response.ok) {
      throw new Error("Failed to fetch calendar");
    }

    const icalData = await response.text();

    // Parse the iCal data using ical.js
    const jcalData = ICAL.parse(icalData);
    const comp = new ICAL.Component(jcalData);
    const vevents = comp.getAllSubcomponents("vevent");

    const now = new Date();

    // For comparison with all-day events, get today at midnight local time
    const todayMidnight = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate()
    );

    // Only show events within the next month
    const oneMonthFromNow = new Date(now);
    oneMonthFromNow.setMonth(oneMonthFromNow.getMonth() + 1);

    // Convert all events to our format, expanding recurring events
    const allEvents: any[] = [];

    vevents.forEach((vevent) => {
      const event = new ICAL.Event(vevent);

      // Check if this is a recurring event
      if (event.isRecurring()) {
        // Expand recurring events between now and one month from now
        const iterator = event.iterator();
        let next;
        let count = 0;
        const maxOccurrences = 100; // Safety limit

        while ((next = iterator.next()) && count < maxOccurrences) {
          const occurrenceStart = next.toJSDate();

          // Stop if we're past our date range
          if (occurrenceStart > oneMonthFromNow) break;

          // Get the duration of the original event
          const duration = event.duration.toSeconds() * 1000; // Convert to milliseconds
          const occurrenceEnd = new Date(occurrenceStart.getTime() + duration);

          // Only include if it hasn't ended yet
          const compareDate = false ? todayMidnight : now; // Recurring events are never all-day in this context
          if (occurrenceEnd >= compareDate) {
            allEvents.push({
              id: `${event.uid}_${occurrenceStart.getTime()}`,
              summary: event.summary || "Untitled Event",
              description: event.description || undefined,
              location: event.location || undefined,
              startDate: occurrenceStart,
              endDate: occurrenceEnd,
              isAllDay: event.startDate.isDate,
              start: {
                dateTime: event.startDate.isDate
                  ? undefined
                  : occurrenceStart.toISOString(),
                date: event.startDate.isDate
                  ? occurrenceStart.toISOString().split("T")[0]
                  : undefined,
              },
              end: {
                dateTime: event.endDate.isDate
                  ? undefined
                  : occurrenceEnd.toISOString(),
                date: event.endDate.isDate
                  ? occurrenceEnd.toISOString().split("T")[0]
                  : undefined,
              },
            });
          }

          count++;
        }
      } else {
        // Non-recurring event - handle normally
        const startDate = event.startDate.toJSDate();
        const endDate = event.endDate.toJSDate();

        allEvents.push({
          id: event.uid,
          summary: event.summary || "Untitled Event",
          description: event.description || undefined,
          location: event.location || undefined,
          startDate,
          endDate,
          isAllDay: event.endDate.isDate,
          start: {
            dateTime: event.startDate.isDate
              ? undefined
              : startDate.toISOString(),
            date: event.startDate.isDate
              ? startDate.toISOString().split("T")[0]
              : undefined,
          },
          end: {
            dateTime: event.endDate.isDate ? undefined : endDate.toISOString(),
            date: event.endDate.isDate
              ? endDate.toISOString().split("T")[0]
              : undefined,
          },
        });
      }
    });

    // Sort by start date FIRST
    allEvents.sort((a, b) => a.startDate.getTime() - b.startDate.getTime());

    // THEN filter for upcoming events
    const events = allEvents.filter((event) => {
      const compareDate = event.isAllDay ? todayMidnight : now;

      // Only include events that haven't ended yet AND start within the next month
      const hasntEnded = event.endDate >= compareDate;
      const startsInRange = event.startDate <= oneMonthFromNow;

      return hasntEnded && startsInRange;
    });

    // Remove the temporary date fields before returning
    const cleanEvents = events.map(
      ({ startDate, endDate, isAllDay, ...rest }) => rest
    );

    // Limit to next 50 events
    const limitedEvents = cleanEvents.slice(0, 50);

    return NextResponse.json({ items: limitedEvents });
  } catch (error) {
    console.error("Error fetching calendar events:", error);
    return NextResponse.json(
      { error: "Failed to fetch events", items: [] },
      { status: 500 }
    );
  }
}
