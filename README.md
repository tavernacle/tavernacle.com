# Tavernacle Social Club Website 🎹

The official website for Salt Lake City's premier dueling piano bar and live music venue.

## Overview

Built with Next.js 15, this website showcases Tavernacle Social Club's three unique venues, live entertainment schedule, and provides a platform for event bookings. Optimized for local SEO to dominate Salt Lake City nightlife searches.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 🎯 SEO Features

This site is heavily optimized for local Salt Lake City SEO:

### Technical SEO

- ✅ Comprehensive meta tags with local keywords
- ✅ JSON-LD structured data (LocalBusiness, Restaurant, MusicVenue, Event schemas)
- ✅ Open Graph and Twitter Card metadata
- ✅ Automatic sitemap generation (`/sitemap.xml`)
- ✅ Robots.txt configuration
- ✅ Geographic meta tags (coordinates, region)
- ✅ Mobile-first responsive design
- ✅ Optimized images with Next.js Image component
- ✅ Fast loading times with Next.js 15

### Local SEO Keywords Targeted

- Salt Lake City bars / SLC bars
- Downtown SLC nightlife
- Bars near me Salt Lake City
- Piano bar Salt Lake City / Dueling pianos SLC
- Live music Salt Lake City
- LGBTQ bars Salt Lake City
- Broadway SLC bars
- And many more...

### Structured Data Included

- Local Business Schema
- Organization Schema
- Event Schema (for shows)
- Breadcrumb Schema
- Aggregate Rating (4.6 stars, 1049 reviews from Google Maps)

## 📁 Project Structure

```
app/
├── lib/
│   └── seo.ts              # SEO utilities and schema generators
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Calendar.tsx
│   ├── VenueImage.tsx
│   └── ImageModal.tsx
├── about/page.tsx          # About page with metadata
├── schedule/page.tsx       # Events calendar with metadata
├── shows/page.tsx          # Performers page with metadata
├── venues/page.tsx         # Private event venues with metadata
├── contact/page.tsx        # Contact & reservations with metadata
├── layout.tsx              # Root layout with global SEO
├── page.tsx                # Homepage with hero
├── sitemap.ts              # Dynamic sitemap generator
└── not-found.tsx           # Custom 404 page

public/
├── robots.txt              # Search engine instructions
├── logo.png
├── tavernacle-stage.jpg
└── ...
```

## 🌐 Deployment

### Staging Environment

- **URL**: https://tavernacle.net
- **Purpose**: Testing and review before production

### Production Environment

- **URL**: https://tavernacle.com
- **Purpose**: Live public site

### Environment Variables

Copy `.env.example` to `.env.local` and configure:

```bash
NEXT_PUBLIC_SITE_URL=https://tavernacle.com
NEXT_PUBLIC_GOOGLE_VERIFICATION=your-verification-code
```

## 📊 Post-Deployment SEO Checklist

#### Setup Instructions

1. Add the `tavernacle.com` property
2. Verify ownership using DNS verification
3. Configure property settings in Search Console

### Google Business Profile

1. Ensure NAP (Name, Address, Phone) consistency
2. Current address: 50 W Broadway, Salt Lake City, UT 84101
3. Current phone: (801) 519-8900
4. Link to website from Google Business Profile

### Google Analytics (Optional)

Add tracking ID to environment variables when ready

### Social Media

- Update website links on all social profiles
- Ensure consistent branding across platforms

### Local Citations

- Verify listing accuracy on Yelp, TripAdvisor, etc.
- Ensure NAP consistency everywhere

## 🔧 Key Files for SEO

- `app/lib/seo.ts` - All SEO utilities, schemas, and configuration
- `app/layout.tsx` - Global metadata and structured data
- `app/sitemap.ts` - Dynamic sitemap generation
- `public/robots.txt` - Search engine crawling instructions
- `next.config.ts` - Performance and header configurations

## 📱 Features

- **Responsive Design**: Mobile-first approach
- **Performance**: Optimized images, code splitting, fast load times
- **Accessibility**: Semantic HTML, ARIA labels where needed
- **Interactive Calendar**: iCal integration for events
- **Image Modals**: Click to enlarge venue photos
- **Contact Forms**: Event booking inquiries

## 🛠️ Built With

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Styling
- **Lucide React** - Icons
- **iCal.js** - Calendar parsing

## 📈 Monitoring SEO Performance

1. **Google Search Console**: Track impressions, clicks, CTR, and rankings
2. **Google Business Profile Insights**: Monitor "Near me" searches
3. **Analytics**: Track organic traffic growth
4. **Rank Tracking**: Monitor positions for key terms:
   - "bars near me" (while at location)
   - "salt lake city bars"
   - "downtown slc nightlife"
   - "piano bar salt lake city"
   - etc.

## 🎨 Brand Colors

- Primary Orange: `#f7931e`
- Secondary Orange: `#ff6b35`
- Dark backgrounds with purple/amber accents

## 📞 Business Information

**Tavernacle Social Club**

- Address: 50 W Broadway, Salt Lake City, UT 84101
- Phone: (801) 519-8900
- Hours: 6pm-1am (Sun-Thu), 6pm-2am (Fri-Sat)
- Established: 2002
- Rating: 4.6★ (1,049 reviews)

## 🤝 Contributing

This is a private commercial project. For changes, contact the development team.

## 📝 License

Copyright © 2025 Tavernacle Social Club. All rights reserved.
