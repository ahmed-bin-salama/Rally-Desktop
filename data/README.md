# Data Layer Architecture

This directory contains static JavaScript ES Module data configurations for the Rally Board Interactive Desktop application.

## Data Files Overview
- `site.js`: Top bar headline, active season, and language configurations.
- `committees.js`: Committee metadata, application form links, folder/window ID mapping, and member list references.
- `members.js`: Member profile data with bilingual English/Arabic fields.
- `notifications.js`: Top bar notification drawer feed.
- `links.js`: Centralized social media handles, direct contacts, and attribution links.

## Rules
- All data exports must use ES Module syntax (`export const ...`).
- Human-readable text fields must supply both English (`en`) and Arabic (`ar`) key values.
- Do not invent or fabricate fake real-world data. Empty fields must remain empty strings (`""`).
- All data entities must reference valid IDs from `ID_REGISTRY.md`.
