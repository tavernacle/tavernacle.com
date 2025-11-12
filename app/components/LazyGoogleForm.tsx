"use client";

import { useEffect, useRef, useState } from "react";
import Head from "next/head";

interface LazyGoogleFormProps {
  formId: string;
  title?: string;
  height?: string;
}

export default function LazyGoogleForm({
  formId,
  title = "Google Form",
  height = "1000px",
}: LazyGoogleFormProps) {
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Add preconnect for Google Forms
    const preconnect = document.createElement("link");
    preconnect.rel = "preconnect";
    preconnect.href = "https://docs.google.com";
    preconnect.crossOrigin = "anonymous";
    document.head.appendChild(preconnect);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: "300px", // Start loading 300px before visible
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
      document.head.removeChild(preconnect);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full" style={{ height }}>
      {isInView ? (
        <iframe
          src={`https://docs.google.com/forms/d/${formId}/viewform?embedded=true`}
          className="absolute top-0 left-0 w-full h-full rounded-lg"
          style={{ border: "none" }}
          title={title}
          loading="lazy"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-white/5 rounded-lg">
          <div className="text-center">
            <div className="animate-pulse text-[#f7931e] mb-2">
              <svg
                className="w-8 h-8 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <p className="text-foreground/50 text-sm">
              Loading booking form...
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
