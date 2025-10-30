# DNS Configuration Guide

This document provides guidance for setting up DNS records to improve email deliverability and SEO performance for tavernacle.com.

## SPF (Sender Policy Framework) Records

### What is SPF?

SPF (Sender Policy Framework) is an email authentication method that helps prevent email spoofing. It allows domain owners to specify which mail servers are authorized to send emails on behalf of their domain.

### Why You Need It

- **Prevent Email Spoofing**: Stops spammers from sending emails pretending to be from your domain
- **Improve Email Deliverability**: Emails from your domain are more likely to reach recipients' inboxes
- **Build Trust**: Shows recipients that your emails are legitimate
- **SEO Benefit**: Some SEO tools check for SPF records as a security/trust indicator

### How to Set Up SPF Records

SPF records are added as TXT records in your DNS configuration. Here's how to do it:

#### 1. Access Your DNS Provider

Log in to your DNS management console. This is typically where you registered your domain (e.g., GoDaddy, Namecheap, Cloudflare, etc.).

#### 2. Create a TXT Record

Add a new TXT record with these settings:

**Basic SPF Record (Recommended Starting Point):**

```
Name/Host: @
Type: TXT
Value: v=spf1 include:_spf.google.com ~all
TTL: 3600 (or default)
```

**Common SPF Record Variations:**

If you send emails through Gmail/Google Workspace:

```
v=spf1 include:_spf.google.com ~all
```

If you send emails through Microsoft 365/Outlook:

```
v=spf1 include:spf.protection.outlook.com ~all
```

If you use multiple email providers:

```
v=spf1 include:_spf.google.com include:spf.protection.outlook.com ~all
```

If you send from your own mail server (replace with your server IP):

```
v=spf1 ip4:XXX.XXX.XXX.XXX include:_spf.google.com ~all
```

#### 3. SPF Record Syntax Explanation

- `v=spf1` - SPF version (always v=spf1)
- `include:domain.com` - Authorizes another domain's SPF record
- `ip4:X.X.X.X` - Authorizes a specific IPv4 address
- `ip6:X:X:X:X:X:X:X:X` - Authorizes a specific IPv6 address
- `a` - Authorizes the domain's A record
- `mx` - Authorizes the domain's MX records
- `~all` - Soft fail (recommended) - marks unauthorized emails as suspicious
- `-all` - Hard fail - rejects unauthorized emails outright
- `?all` - Neutral - no policy
- `+all` - Pass all (NOT recommended - allows anyone to send)

#### 4. Verify Your SPF Record

After adding the record, wait 24-48 hours for DNS propagation, then verify:

**Online Tools:**

- [MXToolbox SPF Checker](https://mxtoolbox.com/spf.aspx)
- [Google Admin Toolbox](https://toolbox.googleapps.com/apps/checkmx/)
- [Kitterman SPF Validator](https://www.kitterman.com/spf/validate.html)

**Command Line:**

```bash
nslookup -type=txt tavernacle.com
# or
dig tavernacle.com TXT
```

### Example for Tavernacle.com

Based on your current email setup with info@tavernacle.com, you likely want:

```
Name: @
Type: TXT
Value: v=spf1 include:_spf.google.com ~all
```

This assumes you're using Google Workspace/Gmail. If you're using a different email provider, adjust the `include:` value accordingly.

### Important Notes

1. **Only One SPF Record**: You can only have ONE SPF record per domain. If you need multiple providers, combine them in a single record.

2. **DNS Lookup Limit**: SPF has a 10 DNS lookup limit. Using too many `include:` statements can exceed this limit.

3. **Update When Changing Email Providers**: Always update your SPF record when you change email hosting providers.

4. **Test Before Full Rollout**: Start with `~all` (soft fail) instead of `-all` (hard fail) to avoid blocking legitimate emails during testing.

### Additional DNS Records for Email

#### DKIM (DomainKeys Identified Mail)

DKIM adds a digital signature to your emails. Setup varies by email provider:

- **Google Workspace**: [Follow Google's DKIM setup guide](https://support.google.com/a/answer/174124)
- **Microsoft 365**: [Follow Microsoft's DKIM setup guide](https://learn.microsoft.com/en-us/microsoft-365/security/office-365-security/email-authentication-dkim-configure)

#### DMARC (Domain-based Message Authentication)

DMARC builds on SPF and DKIM to provide additional email authentication:

```
Name: _dmarc
Type: TXT
Value: v=DMARC1; p=none; rua=mailto:dmarc-reports@tavernacle.com
```

Start with `p=none` to monitor, then move to `p=quarantine` or `p=reject` after reviewing reports.

### Getting Help

If you need assistance setting up DNS records:

1. Contact your DNS provider's support team
2. Contact your email hosting provider's support team
3. Consult with a system administrator or IT professional

### Resources

- [SPF Record Syntax](https://www.open-spf.org/SPF_Record_Syntax/)
- [Google Workspace SPF Setup](https://support.google.com/a/answer/33786)
- [Microsoft 365 SPF Setup](https://learn.microsoft.com/en-us/microsoft-365/security/office-365-security/email-authentication-spf-configure)
