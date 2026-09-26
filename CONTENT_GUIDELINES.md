# Content Integration Guidelines

This document defines guidelines for adding real committee members, announcements, notifications, and links to the Rally Board Interactive Desktop data layer.

---

## 1. Data Integration Rules

1. **Use Provided Information Exactly**: Input names, titles, and bios as provided by authorized Rally representatives.
2. **Never Fabricate Missing Data**: If a member bio, photo, or LinkedIn link is not available, leave the string empty (`""`). Do not invent placeholder text like `"TBD"` or fake social handles.
3. **Bilingual Symmetry**: Always supply both English (`en`) and Arabic (`ar`) key values for human-readable content.
4. **Data Separation**: All text strings, profile images, and external URLs must be added into `/data/*.js` files. Never embed text content inside HTML UI templates.
5. **ID Mapping**: Each newly integrated member or notification must be assigned a valid, stable ID according to `ID_REGISTRY.md`.

---

## 2. Target Data Files

- **`data/site.js`**: Season label, top bar center headline, announcement link, locale settings.
- **`data/committees.js`**: 5 Committees + Board group metadata, application URLs, member ID lists.
- **`data/members.js`**: Member profiles (Bilingual EN/AR name, position, bio, photo asset path, social handles).
- **`data/notifications.js`**: Top bar notification items array (title, body, event date, active state).
- **`data/links.js`**: Centralized social URLs, direct contact links, attribution notes.
