# Events Cache Management

## Overview

The events endpoint now uses a multi-layer caching strategy to improve performance and reduce load on Google Calendar:

1. **Next.js Route Cache**: 6-hour revalidation period
2. **CDN/Browser Cache**: 6-hour cache with 3-hour stale-while-revalidate
3. **In-memory Cache**: 6-hour fallback cache
4. **Proactive Revalidation**: Automatic cache refresh via Vercel Cron

## Caching Strategy

### Automatic Revalidation (Vercel Cron)

The `/api/events/revalidate` endpoint is automatically called every 6 hours by Vercel Cron to proactively refresh the cache **before** it expires. This ensures:

- Users always get fresh data without waiting
- Google Calendar API is only called every 6 hours
- First visitors don't experience slow load times

### Cache Headers

```
Cache-Control: public, s-maxage=21600, stale-while-revalidate=10800
```

- `s-maxage=21600`: CDN caches for 6 hours
- `stale-while-revalidate=10800`: Serve stale content for up to 3 hours while revalidating in background

## Setup (Optional Security)

To add authentication to the revalidation endpoint:

1. **Set Environment Variable** in Vercel:

   ```bash
   CRON_SECRET=your-random-secret-here
   ```

2. **Generate a Secret**:

   ```bash
   node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
   ```

3. The cron job will automatically include the auth header (Vercel Cron has access to env vars)

## Vercel Cron Configuration

In `vercel.json`:

```json
{
  "crons": [
    {
      "path": "/api/events/revalidate",
      "schedule": "0 */6 * * *"
    }
  ]
}
```

**Schedule**: `0 */6 * * *` = Every 6 hours at the top of the hour (12am, 6am, 12pm, 6pm)

### Alternative Schedules

- Every hour: `0 * * * *`
- Every 2 hours: `0 */2 * * *`
- Every 4 hours: `0 */4 * * *`
- Every 30 minutes: `*/30 * * * *`

## Manual Cache Invalidation

If you need to manually refresh the cache immediately:

1. **Via API** (if `CRON_SECRET` is set):

   ```bash
   curl -X GET https://tavernacle.com/api/events/revalidate \
     -H "Authorization: Bearer YOUR_CRON_SECRET"
   ```

2. **Via Vercel Dashboard**:
   - Go to your deployment
   - Navigate to "Cron Jobs"
   - Click "Run Now" next to the events revalidation job

## Benefits

✅ **Fast Response Times**: Most requests served from cache  
✅ **Fresh Data**: Proactive updates every 6 hours  
✅ **Reduced API Calls**: Google Calendar API called max every 6 hours  
✅ **Better UX**: No user waits for slow calendar fetch  
✅ **Cost Efficient**: Fewer serverless function invocations

## Monitoring

Check cache performance in Vercel logs:

- "Serving from memory cache" = Fast response
- "Fetching fresh data from Google Calendar" = Cache refresh happening

## Troubleshooting

**Cron not running?**

- Ensure Vercel Cron is enabled for your project
- Check Vercel deployment logs for cron execution
- Verify the cron schedule is valid

**Still slow responses?**

- Check if cache duration is too short
- Verify CDN headers are being set correctly
- Consider increasing `revalidate` time to 3-4 hours
