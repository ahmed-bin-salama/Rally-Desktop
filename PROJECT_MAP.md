# Project Map

This document outlines the visual and architectural hierarchy of the **Rally Board Interactive Desktop** application.

## Application Hierarchy

```text
Rally Desktop
│
├── Top Bar (RLY-T001)
│   ├── Rally Logo (RLY-L001)
│   ├── Rally Menu (RLY-MN001)
│   │   ├── Facebook Link (RLY-B001)
│   │   ├── TikTok Link (RLY-B002)
│   │   ├── Instagram Link (RLY-B003)
│   │   ├── WhatsApp Group Link (RLY-B004)
│   │   ├── License / Attribution (RLY-LC001)
│   │   ├── Email Contact (RLY-C001)
│   │   └── WhatsApp Contact (RLY-C002)
│   ├── Center Announcement (RLY-MS001)
│   ├── Season Display (RLY-S001)
│   ├── Language Switch (RLY-LG001)
│   └── Notification Control (RLY-N001)
│       └── Notification Panel (RLY-NP001)
│           ├── Notification Item 1 (RLY-N101)
│           ├── Notification Item 2 (RLY-N102)
│           ├── Notification Item 3 (RLY-N103)
│           ├── Notification Item 4 (RLY-N104)
│           └── Notification Item 5 (RLY-N105)
│
├── Desktop (RLY-D001)
│   ├── Desktop Background (RLY-D002)
│   ├── Committee Folder 1 (RLY-F001)
│   ├── Committee Folder 2 (RLY-F002)
│   ├── Committee Folder 3 (RLY-F003)
│   ├── Committee Folder 4 (RLY-F004)
│   ├── Committee Folder 5 (RLY-F005)
│   └── Board / Managers Folder (RLY-F006)
│
└── Dock (RLY-K001)
    └── Instagram Shortcut (RLY-K002)
```

## Interaction Hierarchy

```text
Folder (RLY-F00x)
  ↓ [Click / Double-click to open]
Committee Window (RLY-W00x)
  ├── Artwork Graphic
  ├── Member Sticker (RLY-M00x)
  │    ↓ [Click sticker]
  │   Member Info Window (RLY-I00x)
  ├── Join Button (RLY-J00x)
  │    ↓ [Click]
  │   External Application URL
  └── Members App (RLY-A00x)
       ↓ [Click]
      Members Window (RLY-AW00x)
```

## Element Categorization

Every element in the application falls into one of the following system categories:

1. **Component**: A visual and interactive UI element (e.g., Top Bar, Window, Folder, Dock).
2. **Data**: Content dynamically injected from `data/*.js` (e.g., Member Bios, Announcement Text, Notification List).
3. **Asset**: Visual media files loaded from `assets/` (e.g., Member Photos, Committee Illustrations, Icons).
4. **External Link**: Target URLs directed to third-party services (e.g., Application Forms, Instagram, WhatsApp).
5. **Functional Control**: Interactive UI triggers (e.g., Language Switcher, Window Close Button, Notification Bell).

Every component, data entity, asset placeholder, and control MUST be tagged with a unique ID from `ID_REGISTRY.md`.
