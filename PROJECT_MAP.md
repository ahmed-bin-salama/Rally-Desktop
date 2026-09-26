# Project Map & Application Hierarchy

This document maps the architectural component hierarchy, layout tree, and interaction flow for the Rally Board Interactive Desktop application.

---

## 1. Visual Application Hierarchy

```text
Rally Desktop (RLY-D001)
│
├── Top Bar (RLY-T001)
│   ├── Rally Logo (RLY-L001)
│   ├── Rally Menu (RLY-MN001)
│   │   ├── Social Links (RLY-B001 - RLY-B004)
│   │   ├── Attribution / License (RLY-LC001)
│   │   └── Direct Contacts (RLY-C001, RLY-C002)
│   ├── Center Announcement (RLY-MS001)
│   ├── Season Display (RLY-S001)
│   ├── Language Switch (RLY-LG001) [EN / AR]
│   ├── Notification Control (RLY-N001)
│   └── Notification Panel (RLY-NP001)
│       └── Notifications Feed (RLY-N101 - RLY-N105)
│
├── Desktop Canvas & Grid (RLY-D002)
│   ├── Folder 1: Committee 1 (RLY-F001)
│   ├── Folder 2: Committee 2 (RLY-F002)
│   ├── Folder 3: Committee 3 (RLY-F003)
│   ├── Folder 4: Committee 4 (RLY-F004)
│   ├── Folder 5: Committee 5 (RLY-F005)
│   └── Folder 6: Board / Managers (RLY-F006)
│
└── Bottom Dock (RLY-K001)
    └── Dock Shortcut: Instagram (RLY-K002)
```

---

## 2. Interaction Hierarchy

```text
Desktop Folder (e.g. RLY-F001)
  │ (User Clicks / Double-Clicks)
  ▼
Committee Window (e.g. RLY-W001)
  ├── Window Chrome & Title (RLY-WC001)
  ├── Close Button (RLY-WX001)
  ├── Committee Artwork / Banner
  ├── Member Photo Stickers (e.g. RLY-M001 - RLY-M003)
  │    │ (User Clicks Sticker)
  │    ▼
  │   Member Information Card (e.g. RLY-I001 - RLY-I003)
  │
  ├── Join / Application Button (e.g. RLY-J001)
  │    │ (User Clicks Button)
  │    ▼
  │   External Application Form (URL from data/committees.js)
  │
  └── Members App Launcher (e.g. RLY-A001)
       │ (User Clicks Launcher)
       ▼
      Members App Window (e.g. RLY-AW001)
```

---

## 3. Element Categorization & ID Assignment Standard

| Category | Description | Data Source / Asset | ID Code Pattern |
|---|---|---|---|
| **Component** | Structural UI container or functional window shell | Static HTML / JS Template | `RLY-D*`, `RLY-T*`, `RLY-W*` |
| **Data Object** | Content entity rendered dynamically (member, notification) | `/data/*.js` files | `RLY-M*`, `RLY-N*`, `RLY-S*` |
| **Asset Reference** | Image, icon, logo, or artwork path | `/assets/*` directories | Linked via Data Files |
| **External Link** | Action trigger navigating to external URL (Google Form, Instagram) | `/data/links.js` or `data/committees.js` | `RLY-J*`, `RLY-B*`, `RLY-K*` |
| **Functional Control** | Interactive UI toggle, close button, language switch | Event Listener in `/js/*` | `RLY-WX*`, `RLY-LG*`, `RLY-N001` |

---

## 4. Architectural Separation Rules

1. **Presentation vs. Data**: HTML components are structural shells only. Text content, member names, roles, announcements, and URLs must reside exclusively in `/data/*.js`.
2. **Code vs. Assets**: Image files must never be hardcoded as base64 or inline SVGs inside code modules when they represent media assets. Store them in `/assets/` and reference their paths in `/data/`.
3. **Identifier Stability**: Every structural component, folder, window, notification slot, and external action button must maintain a permanent `RLY-[TYPE][NUMBER]` ID as registered in `ID_REGISTRY.md`.
