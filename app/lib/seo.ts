// SEO utility functions and structured data generators

export const siteConfig = {
  name: "Tavernacle Social Club",
  description:
    "Salt Lake City's best bar - an eclectic dueling piano bar in downtown SLC featuring live music, great drinks, and unforgettable nights. Top-rated bar and music venue since 2002.",
  url: "https://www.tavernacle.com",
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
    instagram: "https://www.instagram.com/tavernaclesocialclub/",
    facebook: "https://www.facebook.com/TavernacleSLC",
    twitter: "https://x.com/Tavernacle",
    youtube: "https://www.youtube.com/user/tavernaclesocialclub",
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
    logo: `${siteConfig.url}/logo.webp`,
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
      siteConfig.socialMedia.instagram,
      siteConfig.socialMedia.facebook,
      siteConfig.socialMedia.twitter,
      siteConfig.socialMedia.youtube,
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
    logo: `${siteConfig.url}/logo.webp`,
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
  // Primary "bar" search terms - CRITICAL FOR "BARS NEAR ME" RANKING
  "bar near me",
  "bars near me",
  "bar near me Salt Lake City",
  "bars near me Salt Lake City",
  "best bar near me SLC",
  "bar downtown SLC",
  "bars downtown SLC",
  "Salt Lake City bar",
  "Salt Lake City bars",
  "downtown Salt Lake City bar",
  "best bar in Salt Lake City",
  "best bars in Salt Lake City",
  "top bar SLC",
  "top bars SLC",
  "bar on Broadway SLC",
  "bars on Broadway Salt Lake City",
  
  // Piano bar specific
  "piano bar near me",
  "piano bar Salt Lake City",
  "best piano bar SLC",
  "dueling piano bar Salt Lake City",
  "dueling piano bar near me",
  "piano bar downtown SLC",
  
  // Live music bar
  "live music bar Salt Lake City",
  "bar with live music SLC",
  "music bar near me",
  "entertainment bar SLC",
  
  // Location-based bar searches
  "bars in Salt Lake City",
  "bar near me downtown SLC",
  "Salt Lake City bars downtown",
  "bars near Gateway SLC",
  "bars near Vivint Arena",
  "bars near Delta Center",
  "Broadway SLC bars",
  "Gateway District bars",
  "West Broadway bar",

  // Specific venue type
  "dueling pianos Utah",
  "live music Salt Lake City",
  "dueling pianos bar Utah",

  // Activity-based
  "karaoke bar Salt Lake City",
  "karaoke bar near me SLC",
  "live entertainment bar SLC",
  "bar with entertainment SLC",
  "live music tonight Salt Lake City",
  "what bar to go to tonight SLC",
  "nightlife bar Salt Lake City",
  "downtown nightlife bar SLC",

  // Audience-specific bar searches
  "LGBTQ friendly bar Salt Lake City",
  "LGBTQ bar downtown SLC",
  "inclusive bar SLC",
  "date night bar Salt Lake City",
  "bachelor party bar Salt Lake City",
  "bachelorette party bar SLC",
  "fun bar downtown SLC",

  // Food & drink bar
  "bar with food SLC",
  "bar and grill Salt Lake City",
  "drinks bar Salt Lake City",
  "local beer bar Salt Lake City",
  "craft beer bar downtown SLC",
  "Utah beer bar downtown",
  "bar and restaurant SLC",

  // Events
  "private events bar Salt Lake City",
  "event bar downtown SLC",
  "corporate events bar Salt Lake City",
  "party bar SLC",
];
