# REQUIRED_REAL_DATA.md

# Required Real Data Input Matrix & Asset Upload Map

This document lists all elements in the **Rally Board Interactive Desktop** project that currently use demo/placeholder content and require official real-world information and asset uploads from Rally.

## 1. Final Required Real Information Matrix

| Element ID | Required Input Type | Exact Requirement | Example / Notes |
|---|---|---|---|
| `RLY-F001` | Text (Committee Name) | Official name of Committee 01 | EN + AR translation |
| `RLY-F002` | Text (Committee Name) | Official name of Committee 02 | EN + AR translation |
| `RLY-F003` | Text (Committee Name) | Official name of Committee 03 | EN + AR translation |
| `RLY-F004` | Text (Committee Name) | Official name of Committee 04 | EN + AR translation |
| `RLY-F005` | Text (Committee Name) | Official name of Committee 05 | EN + AR translation |
| `RLY-F006` | Text (Section Name) | Official Board/Managers section title | EN + AR translation |
| `RLY-M001` | Image | Actual photo of Committee 01 - Member 01 | Transparent PNG/WebP cutout preferred |
| `RLY-M001` | Name | Full name of Member 01 | EN + AR translation |
| `RLY-M001` | Position | Role/title of Member 01 | EN + AR translation |
| `RLY-M001` | Bio & URL | Short bio & profile/contact link | EN + AR bio text |
| `RLY-M002` | Image | Actual photo of Committee 01 - Member 02 | Transparent PNG/WebP cutout preferred |
| `RLY-M002` | Name & Position | Full name & title of Member 02 | EN + AR translation |
| `RLY-M003` | Image | Actual photo of Committee 01 - Member 03 | Transparent PNG/WebP cutout preferred |
| `RLY-M003` | Name & Position | Full name & title of Member 03 | EN + AR translation |
| `RLY-M004`..`RLY-M006` | Image & Text | Photos & details for Committee 02 Members (3) | Transparent PNG/WebP + EN/AR |
| `RLY-M007`..`RLY-M009` | Image & Text | Photos & details for Committee 03 Members (3) | Transparent PNG/WebP + EN/AR |
| `RLY-M010`..`RLY-M012` | Image & Text | Photos & details for Committee 04 Members (3) | Transparent PNG/WebP + EN/AR |
| `RLY-M013`..`RLY-M015` | Image & Text | Photos & details for Committee 05 Members (3) | Transparent PNG/WebP + EN/AR |
| `RLY-M016` | Image & Text | Photo & details for General President | Transparent PNG/WebP + EN/AR |
| `RLY-M017` | Image & Text | Photo & details for Vice President | Transparent PNG/WebP + EN/AR |
| `RLY-M018` | Image & Text | Photo & details for Managing Director | Transparent PNG/WebP + EN/AR |
| `RLY-M019` | Image & Text | Photo & details for Secretary General | Transparent PNG/WebP + EN/AR |
| `RLY-J001` | Application Link | Official Join form URL for Committee 01 | Valid HTTPS URL |
| `RLY-J002` | Application Link | Official Join form URL for Committee 02 | Valid HTTPS URL |
| `RLY-J003` | Application Link | Official Join form URL for Committee 03 | Valid HTTPS URL |
| `RLY-J004` | Application Link | Official Join form URL for Committee 04 | Valid HTTPS URL |
| `RLY-J005` | Application Link | Official Join form URL for Committee 05 | Valid HTTPS URL |
| `RLY-MS001`| Banner Link & Text | Announcement text & destination URL | EN + AR text + HTTPS URL |
| `RLY-B001` | URL | Official Rally Facebook URL | HTTPS link |
| `RLY-B002` | URL | Official Rally TikTok URL | HTTPS link |
| `RLY-B003` | URL | Official Rally Instagram URL | HTTPS link |
| `RLY-B004` | URL | Official Rally WhatsApp Group URL | HTTPS link |
| `RLY-C001` | Email | Official contact email address | mailto: email |
| `RLY-C002` | Phone / URL | Official contact WhatsApp number | https://wa.me URL |
| `RLY-N101`..`RLY-N105` | Text & URL | Notification titles, bios, badges, event links | EN + AR text + HTTPS URLs |

---

## 2. Asset Upload Directory Mapping

Upload your real assets to the exact directory and filenames specified below:

| Target Element | Directory Path | Expected Filename |
|---|---|---|
| Rally Brand Logo | `assets/logos/` | `rally-logo.webp` |
| Committee 01 Cutout Photo (Member 01) | `assets/people/` | `member-01.svg` (or `.png`/`.webp`) |
| Committee 01 Cutout Photo (Member 02) | `assets/people/` | `member-02.svg` (or `.png`/`.webp`) |
| Committee 01 Cutout Photo (Member 03) | `assets/people/` | `member-03.svg` (or `.png`/`.webp`) |
| Committee 02 Cutout Photos (3) | `assets/people/` | `member-04.svg` .. `member-06.svg` |
| Committee 03 Cutout Photos (3) | `assets/people/` | `member-07.svg` .. `member-09.svg` |
| Committee 04 Cutout Photos (3) | `assets/people/` | `member-10.svg` .. `member-12.svg` |
| Committee 05 Cutout Photos (3) | `assets/people/` | `member-13.svg` .. `member-15.svg` |
| Board Manager Cutout Photos (4) | `assets/people/` | `manager-01.svg` .. `manager-04.svg` |
| Committee Branding Art (5) | `assets/committees/` | `committee-01.svg` .. `committee-05.svg` |
| Board Section Art | `assets/committees/` | `board-art.svg` |
| Custom Background Wallpaper | `assets/backgrounds/` | `desktop-background.jpeg` |

---

## 3. Placeholder URLs Audit

The following placeholder URLs inside `data/app-data.js` must be replaced prior to launch:

- `https://example.com/announcement-demo`
- `https://facebook.com/rally-demo`
- `https://tiktok.com/@rally-demo`
- `https://instagram.com/rally-demo`
- `https://chat.whatsapp.com/demo-group`
- `mailto:contact@rally-demo.org`
- `https://wa.me/1234567890`
- `https://example.com/welcome`
- `https://example.com/apply`
- `https://example.com/workshop`
- `https://example.com/board-news`
- `https://example.com/gathering`
- `https://example.com/join/committee-01` .. `05`
