# Project Map

This is the main architectural map for the **Rally Board Interactive Desktop** project. It describes what the future application contains, how the pieces relate, and where implementation work belongs.

## 1. Application Hierarchy

```text
Rally Desktop (RLY-D001)
│
├── Top Bar (RLY-T001)
│   ├── Rally Logo (RLY-L001)
│   │   └── Rally Menu (RLY-MN001)
│   │       ├── Facebook (RLY-B001)
│   │       ├── TikTok (RLY-B002)
│   │       ├── Instagram (RLY-B003)
│   │       ├── WhatsApp Group (RLY-B004)
│   │       ├── Attribution (RLY-LC001)
│   │       ├── Email (RLY-C001)
│   │       └── WhatsApp Contact (RLY-C002)
│   ├── Center Announcement (RLY-MS001)
│   ├── Season Display (RLY-S001)
│   ├── Language Switch (RLY-LG001)
│   └── Notification Control (RLY-N001)
│       └── Notification Panel (RLY-NP001)
│           └── Notification Items (RLY-N101–RLY-N105)
│
├── Desktop Background (RLY-D002)
│
├── Five Committee Folders
│   ├── RLY-F001 → RLY-W001
│   ├── RLY-F002 → RLY-W002
│   ├── RLY-F003 → RLY-W003
│   ├── RLY-F004 → RLY-W004
│   └── RLY-F005 → RLY-W005
│
├── Board / Managers Folder
│   └── RLY-F006 → RLY-W006
│
└── Dock (RLY-K001)
    └── Instagram Shortcut (RLY-K002)
```

## 2. Folder → Window Model

Folder IDs and Window IDs are intentionally separate.

```text
Folder
  ↓
Window
```

Example:

```text
RLY-F001 = Committee 1 Folder
RLY-W001 = Committee 1 Window
```

The visible committee name may change without changing either technical ID.

## 3. Committee Window Model

Each of the five committee windows follows the same reusable template:

```text
Committee Window
├── Window Chrome / Header
├── Committee Artwork
├── Member Sticker × 3
│   └── Member Info Window
├── Join Committee Button
└── Members App
    └── Members App Window
```

The Board / Managers window is a shared variant of the same presentation system:

```text
Board / Managers Window
├── Window Chrome / Header
├── Optional Board Artwork
└── Manager Sticker × 4
    └── Manager Info Window
```

The Board / Managers group does not receive a join button or members app in the current specification.

## 4. Component / Data / Asset / Link Separation

| Layer | Responsibility | Primary Location |
|---|---|---|
| Structure | Future HTML document structure and semantic elements | Future `index.html` |
| Presentation | Layout, typography, design tokens, responsive rules, sticker treatment | `css/` |
| Behavior | Rendering, state, interactions, navigation | `js/` |
| Content | Committee/member/notification/site values | `data/` |
| Media | Photos, artwork, logos, icons, backgrounds, textures | `assets/` |
| Architecture | Rules and relationships | Root Markdown + `docs/` |
| External destinations | Social, contact, application, announcement targets | `data/links.js` and `data/committees.js` |

## 5. ID Ownership

A component receives a Rally ID when it is:

- independently addressable for maintenance
- user-visible as a functional/major UI element
- a stable content entity
- a control whose behavior may be changed independently

Raw sub-elements that are not independently addressable inherit the identity of their parent component and do not require an additional Rally ID.

Assets are referenced by path from data or implementation code; the asset file itself does not automatically require a Rally ID.

## 6. Data Relationships

```text
site.js
  ├── Season
  └── Center Announcement

committees.js
  ├── Folder ID
  ├── Window ID
  ├── Member IDs
  ├── Join Button ID + URL
  ├── Artwork path
  └── Members App IDs

members.js
  ├── Member ID
  ├── Info Window ID
  ├── Committee / Group ID
  └── Asset + profile data

notifications.js
  └── Notification IDs + content + URLs

links.js
  └── Social/contact destinations
```

## 7. Future Implementation Rule

Implementation should be data-driven:

```text
Data Record
  ↓
Reusable Component
  ↓
Stable Rally ID
  ↓
Rendered UI
```

Do not create one custom implementation per committee or per member when the difference can be represented by data.
