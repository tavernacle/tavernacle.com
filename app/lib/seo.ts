// SEO utility functions and structured data generators

export const siteConfig = {
  name: "Tavernacle Social Club",
  description:
    "Salt Lake City's premier dueling piano bar and live music venue since 2002. Located in downtown SLC, featuring craft cocktails, delicious food, and unforgettable entertainment.",
  url: "https://tavernacle.com",
  stagingUrl: "https://tavernacle.net",
  ogImage: "/tavernacle-stage.jpg",
  address: {
    street: "50 W Broadway",
    city: "Salt Lake City",
    state: "UT",
    zip: "84101",
    country: "US",
  },
  phone: "(801) 519-8900",
  email: "info@tavernacle.com",
  hours: {
    opens: "18:00",
    closes: "01:00",
  },
  priceRange: "$$",
  geo: {
    latitude: 40.7634,
    longitude: -111.891,
  },
  socialMedia: {
    facebook: "https://www.facebook.com/tavernaclesocialclub",
    instagram: "https://www.instagram.com/tavernaclesocialclub",
  },
};

// Generate Local Business Schema
export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["BarOrPub", "Restaurant", "MusicVenue"],
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    priceRange: siteConfig.priceRange,
    image: `${siteConfig.url}${siteConfig.ogImage}`,
    logo: `${siteConfig.url}/logo.png`,
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
    acceptsReservations: "True",
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
      "https://www.google.com/maps/place/Tavernacle+Social+Club/@40.7634,-111.8910,17z",
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
  "bars in Salt Lake City",
  "downtown SLC nightlife",
  "Salt Lake City piano bar",
  "live music Salt Lake City",
  "dueling pianos Utah",
  "best bars SLC",
  "karaoke Salt Lake City",
  "Broadway SLC",
  "LGBTQ friendly bars Salt Lake City",
  "date night Salt Lake City",
  "entertainment downtown SLC",
  "craft cocktails Salt Lake City",
];
