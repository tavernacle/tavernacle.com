// SEO utility functions and structured data generators

export const siteConfig = {
  name: "Tavernacle Social Club",
  description:
    "An eclectic dueling piano bar in downtown SLC featuring live music, craft cocktails, and unforgettable nights.",
  url: "https://tavernacle.com",
  ogImage: "/og-image.jpg",
  phone: "(801) 532-1280",
  email: "info@tavernacle.com",
  address: {
    street: "201 E Broadway",
    city: "Salt Lake City",
    state: "UT",
    zip: "84111",
    country: "US",
  },
  geo: {
    latitude: 40.7614,
    longitude: -111.8861,
  },
  hours: {
    opens: "17:00",
    closes: "02:00",
  },
  priceRange: "$$",
  socialMedia: {
    instagram: "https://instagram.com/tavernacleslc",
    facebook: "https://facebook.com/tavernacleslc",
  },
};

// Generate Local Business Schema
export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["BarOrPub", "NightClub", "MusicVenue"],
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    alternateName: "The Tavernacle",
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    priceRange: siteConfig.priceRange,
    image: `${siteConfig.url}${siteConfig.ogImage}`,
    logo: `${siteConfig.url}/logo.png`,
    currenciesAccepted: "USD",
    paymentAccepted: "Cash, Credit Card, Debit Card",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.zip,
      addressCountry: siteConfig.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: siteConfig.hours.opens,
        closes: siteConfig.hours.closes,
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Friday", "Saturday"],
        opens: siteConfig.hours.opens,
        closes: "02:00",
      },
    ],
    servesCuisine: "American",
    acceptsReservations: "False",
    menu: `${siteConfig.url}/menu`,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.6",
      reviewCount: "1049",
      bestRating: "5",
      worstRating: "1",
    },
    amenityFeature: [
      {
        "@type": "LocationFeatureSpecification",
        name: "Live Music",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Dueling Pianos",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Full Bar",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Wheelchair Accessible",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "LGBTQ+ Friendly",
        value: true,
      },
    ],
    sameAs: [
      siteConfig.socialMedia.facebook,
      siteConfig.socialMedia.instagram,
      "https://www.google.com/maps/place/Tavernacle+Social+Club",
    ],
    hasMap:
      "https://www.google.com/maps/place/Tavernacle+Social+Club/@40.7631046,-111.8930998,17z",
  };
}

// Generate Organization Schema
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    description: siteConfig.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.zip,
      addressCountry: siteConfig.address.country,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.phone,
      contactType: "Customer Service",
      areaServed: "US",
      availableLanguage: "English",
    },
    sameAs: [siteConfig.socialMedia.facebook, siteConfig.socialMedia.instagram],
  };
}

// Generate Event Schema
export function generateEventSchema(event: {
  name: string;
  startDate: string;
  endDate?: string;
  description?: string;
  performer?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "MusicEvent",
    name: event.name,
    description: event.description || `Live performance at ${siteConfig.name}`,
    startDate: event.startDate,
    endDate: event.endDate || event.startDate,
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "MusicVenue",
      name: siteConfig.name,
      address: {
        "@type": "PostalAddress",
        streetAddress: siteConfig.address.street,
        addressLocality: siteConfig.address.city,
        addressRegion: siteConfig.address.state,
        postalCode: siteConfig.address.zip,
        addressCountry: siteConfig.address.country,
      },
    },
    organizer: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    performer: event.performer
      ? {
          "@type": "PerformingGroup",
          name: event.performer,
        }
      : undefined,
  };
}

// Generate Breadcrumb Schema
export function generateBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.url}`,
    })),
  };
}

// Generate FAQ Schema
export function generateFAQSchema(
  faqs: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

// SEO Keywords for Salt Lake City
export const localKeywords = [
  // Primary local search terms
  "bars in Salt Lake City",
  "bars near me Salt Lake City",
  "bar near me downtown SLC",
  "Salt Lake City bars downtown",
  "downtown SLC nightlife",
  "bars near Gateway SLC",
  "bars near Vivint Arena",
  "bars near Delta Center",

  // Specific venue type
  "Salt Lake City piano bar",
  "piano bar near me SLC",
  "dueling piano bar Salt Lake City",
  "live music Salt Lake City",
  "dueling pianos Utah",
  "best piano bar SLC",

  // Activity-based
  "karaoke Salt Lake City",
  "karaoke near me SLC",
  "live entertainment SLC",
  "live music tonight Salt Lake City",
  "what to do tonight SLC",
  "nightlife Salt Lake City",

  // Location-based
  "Broadway SLC bars",
  "Gateway District bars",
  "bars on Broadway Salt Lake City",
  "West Broadway nightlife",

  // Audience-specific
  "LGBTQ friendly bars Salt Lake City",
  "LGBTQ bars downtown SLC",
  "date night Salt Lake City",
  "bachelor party Salt Lake City",
  "bachelorette party SLC",

  // Food & drink
  "best bars SLC",
  "craft cocktails Salt Lake City",
  "local beer Salt Lake City",
  "Utah beer downtown",
  "entertainment downtown SLC",

  // Events
  "private events Salt Lake City",
  "event venue downtown SLC",
  "corporate events Salt Lake City",
];
