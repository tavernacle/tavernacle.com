# Deployment Setup Guide

This guide covers the final steps to deploy your SEO and performance improvements.

## ✅ Completed Code Changes

All code optimizations have been implemented:

- Google Analytics integration
- Email protection from spam bots
- Font optimization with display swap
- Responsive image sizing
- Next.js performance configuration
- ads.txt placeholder file

## 🚀 Deployment Steps

### 1. Google Analytics Setup (✅ DONE)

Your GA4 Measurement ID: `G-E502CV1L70`

**Already configured in `.env.local` for local development.**

**For Production (Vercel):**

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add a new variable:
   - **Name**: `NEXT_PUBLIC_GA_ID`
   - **Value**: `G-E502CV1L70`
   - **Environment**: Production (and Preview if desired)
4. Click **Save**
5. Redeploy your application

**Verification:**

- After deployment, visit your site
- Open Chrome DevTools → Network tab
- Filter by "gtag"
- You should see requests to `googletagmanager.com/gtag/js?id=G-E502CV1L70`
- Check Google Analytics Real-Time reports to see yourself visiting

### 2. SPF Records (DNS Configuration)

**Action Required:** Add DNS TXT record for email authentication

See detailed instructions in: [`DNS_CONFIGURATION.md`](./DNS_CONFIGURATION.md)

**Quick Summary:**

1. Log into your DNS provider (domain registrar)
2. Add a TXT record:
   - **Name/Host**: `@`
   - **Type**: `TXT`
   - **Value**: `v=spf1 include:_spf.google.com ~all`
   - **TTL**: `3600` (or default)

Adjust the `include:` value based on your email provider:

- Gmail/Google Workspace: `include:_spf.google.com`
- Microsoft 365: `include:spf.protection.outlook.com`
- Other: Check with your email provider

**Verification (after 24-48 hours):**

```bash
nslookup -type=txt tavernacle.com
```

Or use: https://mxtoolbox.com/spf.aspx

### 3. ads.txt Configuration (Optional)

**If you plan to run advertisements:**

1. Open `/public/ads.txt`
2. Sign up with ad networks (e.g., Google AdSense)
3. Replace placeholder content with your actual authorized sellers
4. Format: `domain.com, publisher-id, DIRECT, certification-id`

Example for Google AdSense:

```
google.com, pub-0000000000000000, DIRECT, f08c47fec0942fa0
```

**If you don't plan to run ads:**

- The file can stay as-is with placeholder content
- Or delete the file entirely

### 4. Verify URL Redirects

Your site currently redirects `tavernacle.com` → `www.tavernacle.com` (this is good!).

**Test the redirect chain:**

1. Open Chrome DevTools
2. Go to Network tab
3. Visit `http://tavernacle.com`
4. Check the redirect chain - should be:
   - `http://tavernacle.com` → `https://www.tavernacle.com` (301 Permanent)
   - Or: `http://tavernacle.com` → `http://www.tavernacle.com` → `https://www.tavernacle.com`

**Ideally you want only 1 redirect.** If you see 2+ redirects, check:

- Your hosting/CDN settings (Vercel usually handles HTTP→HTTPS automatically)
- DNS settings (should point to hosting provider)

### 5. Image Optimization Check

After deployment, verify images are optimized:

1. Open Chrome DevTools → Network tab
2. Filter by "Img"
3. Check that images are served as:
   - WebP or AVIF format (not just JPG/PNG)
   - Appropriate sizes for viewport
4. Look for `/_next/image?url=...` URLs (Next.js Image Optimization)

### 6. Performance Testing

Run these tests after deployment:

**Google PageSpeed Insights:**
https://pagespeed.web.dev/

Enter: `https://www.tavernacle.com`

Target scores:

- Performance: 90+
- Accessibility: 90+
- Best Practices: 90+
- SEO: 90+

**Other Testing Tools:**

- **GTmetrix**: https://gtmetrix.com/
- **WebPageTest**: https://www.webpagetest.org/
- **SEO Site Checkup**: https://seositecheckup.com/
  - Re-run your original test to see improvements!

### 7. Google Search Console Setup

**Set up Google Search Console for ongoing SEO monitoring:**

1. Go to: https://search.google.com/search-console
2. Add property: `www.tavernacle.com`
3. Verify ownership (multiple methods available):
   - DNS verification (recommended)
   - HTML file upload
   - HTML meta tag (can add to your layout.tsx)
4. Submit your sitemap: `https://www.tavernacle.com/sitemap.xml`

**Monitor:**

- Indexing status
- Search performance
- Mobile usability
- Core Web Vitals
- Manual actions/penalties

## 📊 Expected Improvements

Based on the SEO audit issues, you should see improvements in:

| Issue                  | Before                | Expected After                  |
| ---------------------- | --------------------- | ------------------------------- |
| Google Analytics       | ❌ Not detected       | ✅ Tracking active              |
| Plaintext Emails       | ❌ 1 exposed          | ✅ Protected with entities      |
| Render Blocking        | ⚠️ Issues detected    | ✅ Fonts optimized with swap    |
| Responsive Images      | ⚠️ Not sized properly | ✅ Sizes prop added             |
| First Contentful Paint | 2.452s                | Target: < 1.8s (should improve) |
| ads.txt                | ❌ Missing            | ✅ File present                 |
| SPF Records            | ❌ Missing            | ✅ Added (after DNS setup)      |

## 🔍 Verification Checklist

After deployment and DNS changes:

- [ ] Google Analytics is tracking visitors (check Real-Time reports)
- [ ] Email address in footer is obfuscated (view page source)
- [ ] Fonts load with fallback (check Network tab)
- [ ] Images are properly sized (check Network tab, different screen sizes)
- [ ] ads.txt is accessible at `/ads.txt`
- [ ] SPF record is active (use MXToolbox after 24-48 hours)
- [ ] Site redirects properly (non-www → www)
- [ ] PageSpeed score improved
- [ ] Re-run SEO Site Checkup shows improvements

## 🛠️ Troubleshooting

### Google Analytics Not Tracking

**Check:**

1. Environment variable is set in Vercel: `NEXT_PUBLIC_GA_ID=G-E502CV1L70`
2. Clear browser cache and hard reload (Ctrl+Shift+R)
3. Check browser console for errors
4. Disable ad blockers temporarily
5. Wait 24 hours for GA to start showing data

**Debug:**

- Install [Google Tag Assistant Chrome Extension](https://chrome.google.com/webstore/detail/tag-assistant-legacy-by-g/kejbdjndbnbjgmefkgdddjlbokphdefk)
- Visit your site
- Check if GA tag is firing

### Images Not Optimized

**Check:**

1. Using Next.js `<Image>` component (not `<img>`)
2. Images are in a supported format (JPG, PNG, WebP, AVIF)
3. Build was successful (`npm run build`)
4. Deployed the latest code

### Fonts Still Blocking

**Check:**

1. Using next/font/google import (not external stylesheet)
2. `display: "swap"` is set
3. Build was successful
4. Clear browser cache

### SPF Record Not Working

**Check:**

1. DNS changes can take 24-48 hours to propagate
2. Record is added to correct domain (root domain, not subdomain)
3. Only ONE SPF record exists (multiple records will fail)
4. Syntax is correct (`v=spf1 ... ~all`)

Use `dig tavernacle.com TXT` or https://mxtoolbox.com/spf.aspx to verify.

## 📈 Ongoing Monitoring

**Weekly:**

- Check Google Analytics for traffic trends
- Review Vercel Analytics for Core Web Vitals

**Monthly:**

- Run Google PageSpeed Insights
- Check Google Search Console for issues
- Review SEO rankings for target keywords

**Quarterly:**

- Full SEO audit with SEO Site Checkup
- Review and update content
- Check for broken links
- Update outdated information

## 🎯 Next Steps for Further Optimization

Once these are deployed and verified:

1. **Content Optimization**:

   - Add blog posts for SEO
   - Optimize meta descriptions for each page
   - Add FAQ schema markup

2. **Performance**:

   - Consider lazy loading below-fold images
   - Implement service worker for offline support
   - Add preconnect to Google Fonts/Analytics

3. **Advanced SEO**:

   - Local business listings (Google My Business)
   - Social media integration
   - Review/rating schema markup
   - Event schema for shows

4. **Analytics**:
   - Set up GA4 events for button clicks
   - Track form submissions
   - Monitor bounce rates by page

## 📞 Support

If you run into issues:

1. Check the troubleshooting section above
2. Review the relevant documentation files in `/docs`
3. Check Next.js documentation: https://nextjs.org/docs
4. Vercel support: https://vercel.com/help

---

**All code changes are complete and ready to deploy! 🚀**

The main action items are:

1. ✅ Add `NEXT_PUBLIC_GA_ID=G-E502CV1L70` to Vercel environment variables
2. ⏳ Add SPF TXT record to DNS (see DNS_CONFIGURATION.md)
3. ⏳ Test and verify after deployment
