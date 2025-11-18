# Google Calendar API Setup Guide

## Current Status

✅ Code updated with Google Calendar API support + iCal fallback  
✅ `googleapis` package installed  
✅ Environment variables configured in `.env.local`

## What You Need to Do

### 1. Get Your Google Calendar API Key

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. **Enable Google Calendar API:**

   - Navigate to "APIs & Services" → "Library"
   - Search for "Google Calendar API"
   - Click "Enable"

4. **Create API Key:**

   - Go to "APIs & Services" → "Credentials"
   - Click "Create Credentials" → "API Key"
   - Copy the generated API key

5. **Configure API Key Restrictions:**
   - Click on the newly created key to edit it
   - Under "API restrictions":
     - Select "Restrict key"
     - Check only "Google Calendar API"
   - Under "Application restrictions":
     - **IMPORTANT:** Select "None" (don't use HTTP referrers for server-side API calls)
     - HTTP referrer restrictions only work for browser-based requests
     - Since Next.js API routes run server-side, there's no referrer header
     - Alternatively, use IP restrictions if you know your server IPs

### 2. Update Environment Variables

Edit your `.env.local` file and replace `your_api_key_here` with your actual API key:

```bash
GOOGLE_CALENDAR_API_KEY=AIza...your_actual_key_here
```

### 3. Set Up Vercel Environment Variables

For production deployment, add these environment variables to Vercel:

1. Go to your Vercel project dashboard
2. Navigate to "Settings" → "Environment Variables"
3. Add:
   - `GOOGLE_CALENDAR_API_KEY` = your API key
   - `GOOGLE_CALENDAR_ID` = `r2im3qnkc6i4oq0c6ofsuqubnc@group.calendar.google.com`

### 4. Verify Calendar is Public

1. Go to [Google Calendar](https://calendar.google.com)
2. Find your calendar in the left sidebar
3. Click ⋮ (three dots) → "Settings and sharing"
4. Under "Access permissions":
   - ✅ Check "Make available to public"

## How It Works

The updated `/api/events` route now:

1. **Tries Google Calendar API first** (if `GOOGLE_CALENDAR_API_KEY` is set)

   - Faster, more reliable
   - Lower bandwidth usage
   - Already expands recurring events
   - Returns structured JSON

2. **Falls back to iCal feed** if:
   - API key is not configured
   - API request fails for any reason
   - Maintains backward compatibility

## Testing

### Test Locally (iCal fallback)

Without the API key set, it will use iCal:

```bash
npm run dev
curl http://localhost:3333/api/events
```

### Test Locally (with API)

1. Add your API key to `.env.local`
2. Restart the dev server
3. Check the console logs - you should see "Fetching from Google Calendar API"

```bash
npm run dev
```

### Test in Production

After deploying to Vercel with the environment variables set:

```bash
curl https://tavernacle.com/api/events
```

Check the server logs in Vercel dashboard to confirm which method is being used.

## Benefits of Google Calendar API

- **Much faster** - Direct API calls vs parsing 2MB+ iCal file
- **Lower bandwidth** - Fetches only needed events
- **More reliable** - Better error handling and rate limits
- **Structured data** - Clean JSON responses
- **Better caching** - Can cache API responses more efficiently

## Troubleshooting

### "Requests from referer <empty> are blocked" error

This happens when you have HTTP referrer restrictions on your API key. Since Next.js API routes run server-side, there's no referrer header.

**Solution:**

1. Go to [Google Cloud Console Credentials](https://console.cloud.google.com/apis/credentials)
2. Click on your API key
3. Under "Application restrictions", select "None"
4. Click "Save"

If you need restrictions, use IP address restrictions instead of HTTP referrers.

### "API key not configured" error

- Make sure `GOOGLE_CALENDAR_API_KEY` is set in your environment
- Restart your dev server after adding the variable

### "Failed to fetch calendar" error

- Check that your calendar is set to public
- Verify the calendar ID is correct
- Check API key restrictions in Google Cloud Console

### API quota limits

Google Calendar API has these free tier limits:

- 1,000,000 queries per day
- 10 queries per second per user

With your 6-hour caching, you'll make ~4 requests per day per user, well within limits.

## Console Logs

The updated code logs which method is being used:

- `Fetching from Google Calendar API` - Using the API
- `Fetching from iCal feed` - Using the fallback
- `Google Calendar API failed, falling back to iCal` - API error occurred

Check these logs to verify your setup is working correctly.
