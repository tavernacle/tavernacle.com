// Static venue image configuration
export const VENUE_IMAGES = {
  tavernacle: {
    count: 4,
    name: "The Tavernacle",
  },
  "steyk-center": {
    count: 3,
    name: "The Steyk Center",
  },
  patio: {
    count: 3,
    name: "The Patio",
  },
} as const;

export type VenueSlug = keyof typeof VENUE_IMAGES;

export function getVenueImages(slug: VenueSlug): string[] {
  const venue = VENUE_IMAGES[slug];
  if (!venue) return [];
  
  return Array.from(
    { length: venue.count },
    (_, i) => `/venues/${slug}/${i + 1}.webp`
  );
}

export function getVenueImageCount(slug: VenueSlug): number {
  return VENUE_IMAGES[slug]?.count || 0;
}
