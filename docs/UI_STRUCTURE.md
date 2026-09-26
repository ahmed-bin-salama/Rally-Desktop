# UI Structure

This document defines the future component hierarchy. It is a planning contract, not an implementation file.

## Component Matrix

| Component | Purpose | Parent | Expected IDs | Data-Driven | Interaction |
|---|---|---|---|---|---|
| Desktop Shell | Main experience container | Root | RLY-D001, RLY-D002 | Partial | Container |
| Top Bar | Persistent Rally navigation/status bar | Desktop | RLY-T001 | Partial | Yes |
| Rally Logo | Opens Rally Menu | Top Bar | RLY-L001 | Partial | Yes |
| Rally Menu | Social/contact menu | Top Bar / Logo | RLY-MN001, RLY-B001–B004, RLY-LC001, RLY-C001–C002 | Yes | Yes |
| Center Announcement | Short clickable message | Top Bar | RLY-MS001 | Yes | Yes |
| Season Display | Rally season text | Top Bar | RLY-S001 | Yes | No |
| Language Switch | EN / AR control | Top Bar | RLY-LG001 | Yes | Yes |
| Notification Control | Notification trigger | Top Bar | RLY-N001 | Partial | Yes |
| Notification Panel | 1–5 notification container | Top Bar / Control | RLY-NP001, RLY-N101–N105 | Yes | Yes |
| Folder | Desktop launcher | Desktop | RLY-F001–F006 | Yes | Yes |
| Primary Window | Committee/Board content window | Folder | RLY-W001–W006 | Yes | Yes |
| Window Chrome | Shared window header/chrome | Primary Window | RLY-WC001–WC006 | No | Yes |
| Window Close | Primary window close control | Window Chrome | RLY-WX001–WX006 | No | Yes |
| Member Sticker | Person cutout presentation | Committee/Board Window | RLY-M001–M015, RLY-M101–M104 | Yes | Yes |
| Member Info Window | Person profile details | Member Sticker | RLY-I001–I015, RLY-I101–I104 | Yes | Yes |
| Join Button | Committee application action | Committee Window | RLY-J001–J005 | Yes | Yes |
| Members App | Committee directory launcher | Committee Window | RLY-A001–A005 | Yes | Yes |
| Members App Window | Committee directory | Members App | RLY-AW001–AW005 | Yes | Yes |
| Dock | Minimal bottom shortcut area | Desktop | RLY-K001 | Partial | Yes |
| Instagram Shortcut | Opens Rally Instagram | Dock | RLY-K002 | Yes | Yes |

## Committee Window Template

The five committee windows share one component template.

```text
Committee Window
├── Window Header / Close
├── Committee Artwork
├── Member Sticker × 3
├── Join Committee Button
└── Members App
```

## Board / Managers Window Variant

The Board / Managers folder uses the same primary window architecture but a different content schema:

```text
Board / Managers Window
├── Window Header / Close
├── Optional Artwork
└── Manager Sticker × 4
```

No Board join button or Board Members App is defined by the current specification.

## Behavioral Ownership

- Folder opening is owned by the future desktop/window behavior layer.
- Window open/close state is owned by the future window manager.
- Member profile opening is owned by the member component behavior.
- Join and social controls navigate to data-defined external URLs.
- Notifications are data-driven and own their own action targets.
- Language is global state; visible strings come from bilingual data fields.

## Implementation Boundary

This document does not authorize implementation. Components should be implemented only in the ordered phases defined by [DEVELOPMENT_PLAN.md](../DEVELOPMENT_PLAN.md).
