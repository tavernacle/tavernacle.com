"use client";

import { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";

declare global {
  interface Window {
    EBWidgets?: {
      createWidget: (config: {
        widgetType: string;
        eventId: string;
        modal: boolean;
        modalTriggerElementId: string;
        onOrderComplete?: () => void;
      }) => void;
    };
  }
}

interface EventbriteButtonProps {
  eventId: string;
  buttonText?: string;
  className?: string;
  onOrderComplete?: () => void;
}

export default function EventbriteButton({
  eventId,
  buttonText = "Buy Tickets",
  className = "bg-[#f7931e] hover:bg-[#ff6b35] text-black px-10 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 inline-flex items-center gap-2 shadow-lg",
  onOrderComplete,
}: EventbriteButtonProps) {
  const buttonId = `eventbrite-widget-modal-trigger-${eventId}`;
  const eventUrl = `https://www.eventbrite.com/e/nye-2026-midnight-in-hollywood-tickets-${eventId}`;

  // Determine HTTPS status during render (client-side only)
  // Using lazy initializer to avoid useEffect + setState pattern
  const [isHttps] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return window.location.protocol === "https:";
  });

  useEffect(() => {
    // Only load widget if on HTTPS
    if (!isHttps) {
      return;
    }

    // Load Eventbrite widget script
    const script = document.createElement("script");
    script.src = "https://www.eventbrite.com/static/widgets/eb_widgets.js";
    script.async = true;

    script.onload = () => {
      if (window.EBWidgets) {
        try {
          window.EBWidgets.createWidget({
            widgetType: "checkout",
            eventId: eventId,
            modal: true,
            modalTriggerElementId: buttonId,
            onOrderComplete: () => {
              console.log("Order complete!");
              onOrderComplete?.();
            },
          });
        } catch (error) {
          console.error("Error creating Eventbrite widget:", error);
        }
      }
    };

    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, [isHttps, eventId, buttonId, onOrderComplete]);

  // Show loading state during SSR and initial client render
  if (isHttps === null) {
    return (
      <button type="button" className={className} disabled>
        <Sparkles className="w-5 h-5" />
        {buttonText}
      </button>
    );
  }

  // If not HTTPS (dev environment), just use a direct link
  if (!isHttps) {
    return (
      <a
        href={eventUrl}
        rel="noopener noreferrer"
        target="_blank"
        className={className}
      >
        <Sparkles className="w-5 h-5" />
        {buttonText}
      </a>
    );
  }

  return (
    <>
      <noscript>
        <a
          href={eventUrl}
          rel="noopener noreferrer"
          target="_blank"
          className={className}
        >
          {buttonText}
        </a>
      </noscript>
      <button id={buttonId} type="button" className={className}>
        <Sparkles className="w-5 h-5" />
        {buttonText}
      </button>
    </>
  );
}
