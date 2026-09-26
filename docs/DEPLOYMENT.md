# Deployment Guide

Guidelines for deploying the **Rally Board Interactive Desktop** to **Cloudflare Pages**.

---

## Cloudflare Pages Setup

1. **Connect GitHub Repository**:
   - Log into the Cloudflare Dashboard.
   - Navigate to **Workers & Pages** > **Create application** > **Pages** > **Connect to Git**.
   - Select the `Rally-Desktop` repository and target branch (`main`).

2. **Build Settings**:
   - **Framework preset**: `None` (Static HTML/CSS/JS).
   - **Build command**: Leave blank (no compilation step required).
   - **Build output directory**: `/` (Root repository directory).

3. **Environment Variables**:
   - None required.

4. **Custom Domain**:
   - Assign custom CNAME / domain record in Cloudflare DNS settings after deployment verification.

---

## Automatic Deployment Pipeline

```text
Git Push to main Branch
         ↓
Cloudflare Pages Webhook Trigger
         ↓
Fetch Repository Code
         ↓
Publish Static Files to Global CDN (<10 seconds)
         ↓
Live HTTPS Web Production URL
```
