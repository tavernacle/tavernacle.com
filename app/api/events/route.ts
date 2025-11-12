import { NextResponse } from "next/server";
import ICAL from "ical.js";

const CALENDAR_ID = "r2im3qnkc6i4oq0c6ofsuqubnc@group.calendar.google.com";

// Cache data for 6 hours - Next.js will automatically revalidate after this time
export const revalidate = 21600; // 6 hours in seconds
export const dynamic = 'force-static';

// In-memory cache as fallback - also prevents re-processing during the same deployment
let cachedEvents: any = null;
let cacheTimestamp = 0;
const CACHE_DURATION = 6 * 60 * 60 * 1000; // 6 hours in milliseconds (matching revalidate)

export async function GET() {
  try {
    const cacheNow = Date.now();

    // Check if we have valid cached data
    if (cachedEvents && (cacheNow - cacheTimestamp) < CACHE_DURATION) {
      console.log('Serving from memory cache');
      return NextResponse.json({ items: cachedEvents });
    }

    console.log('Fetching fresh data from Google Calendar');

    // Fetch the public iCal feed - use 'public/full.ics' to get expanded recurring events
    const icalUrl = `https://calendar.google.com/calendar/ical/${encodeURIComponent(
      CALENDAR_ID
    )}/public/full.ics`;

    const response = await fetch(icalUrl, {
      // Disable Next.js caching due to 2MB+ calendar data size
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch calendar");
    }

    const icalData = await response.text();

    // Log the size to understand the data volume
    console.log(`Calendar data size: ${Math.round(icalData.length / 1024)} KB`);

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

    // Reduce to next 2 weeks instead of 1 month to minimize data
    const twoWeeksFromNow = new Date(now);
    twoWeeksFromNow.setDate(twoWeeksFromNow.getDate() + 14);

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
          if (occurrenceStart > twoWeeksFromNow) break;

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

        // Skip events that are too far in the future or completely in the past
        if (startDate > twoWeeksFromNow || endDate < now) {
          return; // Skip this event entirely
        }

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

      // Only include events that haven't ended yet AND start within the next 2 weeks
      const hasntEnded = event.endDate >= compareDate;
      const startsInRange = event.startDate <= twoWeeksFromNow;

      return hasntEnded && startsInRange;
    });

    // Remove the temporary date fields and minimize data before returning
    const cleanEvents = events.map(
      ({ startDate, endDate, isAllDay, ...rest }) => ({
        id: rest.id,
        summary: rest.summary,
        // Only include description if it's short to save space
        description:
          rest.description && rest.description.length < 200
            ? rest.description
            : undefined,
        location: rest.location,
        start: rest.start,
        end: rest.end,
      })
    );

    // Limit to next 30 events to keep response size manageable
    const limitedEvents = cleanEvents.slice(0, 30);

    // Cache the processed events
    cachedEvents = limitedEvents;
    cacheTimestamp = Date.now();

    console.log(`Returning ${limitedEvents.length} events (cached for 6 hours)`);
    
    // Return with cache headers for CDN/browser caching
    return NextResponse.json(
      { items: limitedEvents },
      {
        headers: {
          'Cache-Control': 'public, s-maxage=21600, stale-while-revalidate=10800',
        },
      }
    );
  } catch (error) {
    console.error("Error fetching calendar events:", error);
    return NextResponse.json(
      { error: "Failed to fetch events", items: [] },
      { status: 500 }
    );
  }
}
