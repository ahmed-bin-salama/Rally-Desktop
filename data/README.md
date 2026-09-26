# Data Directory

This directory contains client-side JavaScript data modules that store all site content, committee metadata, member profiles, notifications, and external links.

## Architecture Principles
- **Data-Driven UI**: Presentation and layout templates must read from these files rather than hardcoding content.
- **Bilingual Content**: Support both English (`EN`) and Arabic (`AR`) fields across all user-facing content strings.
- **Stable IDs**: Every entity (committee, member, notification, link) must reference a unique stable ID matching `ID_REGISTRY.md`.
- **No Fabricated Information**: Do not insert fake names, phone numbers, or URLs. Keep structures clean with empty strings or null placeholders until real content is integrated.

## File Map
- `site.js`: Site-wide metadata (season, central announcement, language configuration).
- `committees.js`: Committee identity, folder/window IDs, member assignments, application links.
- `members.js`: Individual profiles, positions, bios, photos, social links.
- `notifications.js`: Top bar notification feed items.
- `links.js`: Centralized external links (social media, contact emails, WhatsApp groups).
