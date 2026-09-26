# Cloudflare Pages Deployment Guide

This document explains how to deploy the **Rally Board Interactive Desktop** static site to Cloudflare Pages.

---

## 1. Prerequisites
- A GitHub repository containing the Rally Board source code.
- A Cloudflare account with access to Cloudflare Pages.

---

## 2. Cloudflare Pages Configuration

When creating a new Cloudflare Pages project linked to this GitHub repository:

- **Project Name**: `rally-board` (or desired subdomain)
- **Production Branch**: `main`
- **Framework Preset**: `None` (Static Site)
- **Build Command**: *(Leave empty)*
- **Build Output Directory**: `/` (Root directory)

---

## 3. Deployment Flow

```text
GitHub Push to 'main'
        │
        ▼
Cloudflare Pages Continuous Integration
        │
        ▼
Deploys Static Files (index.html, css/, js/, data/, assets/)
        │
        ▼
Live Production Site on Cloudflare CDN
```

---

## 4. Cache Management Notes
- Because Cloudflare Pages caches static assets aggressively, media files uploaded to `assets/` should maintain immutable filenames or use version query params when updated.
- Updates to `data/*.js` configuration files take effect immediately on new deployment builds.
