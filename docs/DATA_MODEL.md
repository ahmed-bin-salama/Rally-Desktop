# Data Model & Schema Relationships

This document defines the relationships between entity objects across the Rally Board system.

## 1. Entity Relationship Diagram (Conceptual)

```text
Site Configuration (site.js)
  ├── Season Identifier (RLY-S001)
  ├── Center Announcement (RLY-MS001)
  └── Language Locale Settings (RLY-LG001)

Social & Contact Links (links.js)
  ├── Social Channels (RLY-B001 - RLY-B004)
  ├── Direct Contacts (RLY-C001, RLY-C002)
  └── Attribution (RLY-LC001)

Notifications (notifications.js)
  └── Notification Items [1..5] (RLY-N101 - RLY-N105)

Committee (committees.js)
  ├── Linked Folder ID (RLY-F001 - RLY-F006)
  ├── Linked Window ID (RLY-W001 - RLY-W006)
  ├── Join Button ID & URL (RLY-J001 - RLY-J005)
  ├── Members App Launcher ID (RLY-A001 - RLY-A006)
  ├── Members Directory Window ID (RLY-AW001 - RLY-AW006)
  └── Member References [1..N] ──────────────────┐
                                                 │
Member (members.js) ◄────────────────────────────┘
  ├── Member Sticker ID (RLY-M001 - RLY-M104)
  ├── Member Info Card ID (RLY-I001 - RLY-I104)
  ├── Photo Asset Path
  ├── Bilingual Name (EN / AR)
  ├── Bilingual Position (EN / AR)
  └── Bilingual Bio (EN / AR)
```

## 2. Field Symmetry Rules
- Every content entity containing human-readable text **must** supply both `EN` (English) and `AR` (Arabic) key-value pairs.
- Missing optional social channels (e.g. LinkedIn or WhatsApp) must remain empty strings (`""`) and never be populated with dummy data.
