# Rally Board ID Registry

This document serves as the single source of truth for all element identifiers across the Rally Board Interactive Desktop project.

## 1. ID Naming Standard

Format: **`RLY-[TYPE][NUMBER]`**

### Type Codes
- **`D`**: Desktop Shell & Canvas
- **`T`**: Top Bar
- **`L`**: Rally Logo
- **`MN`**: Rally Menu
- **`MS`**: Center Announcement Message
- **`S`**: Season Display
- **`LG`**: Language Switch Toggle
- **`N`**: Notification Control / Item
- **`NP`**: Notification Panel
- **`F`**: Desktop Folder
- **`W`**: Committee / Main Window Shell
- **`WC`**: Window Chrome & Title Bar
- **`WX`**: Window Close Button
- **`M`**: Member / Board Manager Sticker
- **`I`**: Member Information Card
- **`J`**: Join / Committee Application Button
- **`A`**: Members App Launcher Button
- **`AW`**: Members App Roster Window
- **`B`**: Social / External Link Button
- **`C`**: Direct Contact Trigger
- **`LC`**: Attribution / License Notice
- **`K`**: Bottom Dock & Dock Shortcuts

---

## 2. Master ID Registry

| ID | Element Name | Type | Parent | Purpose | Functional | Editable | Asset/Data Source | Notes |
|---|---|---|---|---|---|---|---|---|
| **RLY-D001** | Main Desktop Shell | Container | `body` | Outer app wrapper | Yes | No | Layout CSS | Root container |
| **RLY-D002** | Desktop Wallpaper Canvas | Canvas | `RLY-D001` | Desktop folder area | Yes | Yes | `assets/backgrounds/` | Interactive wallpaper backdrop |
| **RLY-T001** | Top Bar | Bar | `RLY-D001` | Header bar | Yes | No | Header CSS | Fixed top bar |
| **RLY-L001** | Rally Logo | Logo | `RLY-T001` | Brand mark & menu toggle | Yes | Yes | `assets/logos/` | Opens `RLY-MN001` |
| **RLY-MN001**| Rally Menu | Dropdown | `RLY-T001` | Quick navigation dropdown | Yes | Yes | `data/links.js` | Brand dropdown menu |
| **RLY-MS001**| Center Announcement | Banner | `RLY-T001` | Top bar center news trigger | Yes | Yes | `data/site.js` | Clickable headline |
| **RLY-S001** | Season Display | Label | `RLY-T001` | Active season tag | No | Yes | `data/site.js` | e.g., "Season 2025" |
| **RLY-LG001**| Language Switch | Control | `RLY-T001` | EN / AR locale switch | Yes | No | UI Manager | Toggles LTR/RTL |
| **RLY-N001** | Notification Control | Control | `RLY-T001` | Bell button & badge | Yes | No | UI Manager | Toggles `RLY-NP001` |
| **RLY-NP001**| Notification Panel | Panel | `RLY-T001` | Drawer feed for alerts | Yes | No | `data/notifications.js` | Popover drawer |
| **RLY-B001** | Facebook Link | Button | `RLY-MN001` | Navigates to Facebook | Yes | Yes | `data/links.js` | Social link |
| **RLY-B002** | TikTok Link | Button | `RLY-MN001` | Navigates to TikTok | Yes | Yes | `data/links.js` | Social link |
| **RLY-B003** | Instagram Link | Button | `RLY-MN001` | Navigates to Instagram | Yes | Yes | `data/links.js` | Social link |
| **RLY-B004** | WhatsApp Group Link | Button | `RLY-MN001` | Join community group | Yes | Yes | `data/links.js` | Social link |
| **RLY-LC001**| License Notice | Modal Trigger | `RLY-MN001` | License & attribution view | Yes | Yes | `data/links.js` | Info modal trigger |
| **RLY-C001** | Contact Email | Action | `RLY-MN001` | Mailto link trigger | Yes | Yes | `data/links.js` | Direct email trigger |
| **RLY-C002** | Contact WhatsApp Direct | Action | `RLY-MN001` | WhatsApp direct chat | Yes | Yes | `data/links.js` | Direct chat trigger |
| **RLY-F001** | Committee 1 Folder | Folder | `RLY-D002` | Desktop folder icon | Yes | Yes | `data/committees.js` | Opens `RLY-W001` |
| **RLY-F002** | Committee 2 Folder | Folder | `RLY-D002` | Desktop folder icon | Yes | Yes | `data/committees.js` | Opens `RLY-W002` |
| **RLY-F003** | Committee 3 Folder | Folder | `RLY-D002` | Desktop folder icon | Yes | Yes | `data/committees.js` | Opens `RLY-W003` |
| **RLY-F004** | Committee 4 Folder | Folder | `RLY-D002` | Desktop folder icon | Yes | Yes | `data/committees.js` | Opens `RLY-W004` |
| **RLY-F005** | Committee 5 Folder | Folder | `RLY-D002` | Desktop folder icon | Yes | Yes | `data/committees.js` | Opens `RLY-W005` |
| **RLY-F006** | Board / Managers Folder| Folder | `RLY-D002` | Desktop folder icon | Yes | Yes | `data/committees.js` | Opens `RLY-W006` |
| **RLY-W001** | Committee 1 Window | Window | `RLY-D002` | Window shell | Yes | Yes | `data/committees.js` | Interactive window |
| **RLY-W002** | Committee 2 Window | Window | `RLY-D002` | Window shell | Yes | Yes | `data/committees.js` | Interactive window |
| **RLY-W003** | Committee 3 Window | Window | `RLY-D002` | Window shell | Yes | Yes | `data/committees.js` | Interactive window |
| **RLY-W004** | Committee 4 Window | Window | `RLY-D002` | Window shell | Yes | Yes | `data/committees.js` | Interactive window |
| **RLY-W005** | Committee 5 Window | Window | `RLY-D002` | Window shell | Yes | Yes | `data/committees.js` | Interactive window |
| **RLY-W006** | Board / Managers Window| Window | `RLY-D002` | Window shell | Yes | Yes | `data/committees.js` | Interactive window |
| **RLY-WC001**| Window Chrome 1 | Header | `RLY-W001` | Window title bar | Yes | No | Window Manager | Drag handle for W001 |
| **RLY-WC002**| Window Chrome 2 | Header | `RLY-W002` | Window title bar | Yes | No | Window Manager | Drag handle for W002 |
| **RLY-WC003**| Window Chrome 3 | Header | `RLY-W003` | Window title bar | Yes | No | Window Manager | Drag handle for W003 |
| **RLY-WC004**| Window Chrome 4 | Header | `RLY-W004` | Window title bar | Yes | No | Window Manager | Drag handle for W004 |
| **RLY-WC005**| Window Chrome 5 | Header | `RLY-W005` | Window title bar | Yes | No | Window Manager | Drag handle for W005 |
| **RLY-WC006**| Window Chrome 6 | Header | `RLY-W006` | Window title bar | Yes | No | Window Manager | Drag handle for W006 |
| **RLY-WX001**| Window 1 Close | Control | `RLY-WC001` | Close button | Yes | No | Window Manager | Closes `RLY-W001` |
| **RLY-WX002**| Window 2 Close | Control | `RLY-WC002` | Close button | Yes | No | Window Manager | Closes `RLY-W002` |
| **RLY-WX003**| Window 3 Close | Control | `RLY-WC003` | Close button | Yes | No | Window Manager | Closes `RLY-W003` |
| **RLY-WX004**| Window 4 Close | Control | `RLY-WC004` | Close button | Yes | No | Window Manager | Closes `RLY-W004` |
| **RLY-WX005**| Window 5 Close | Control | `RLY-WC005` | Close button | Yes | No | Window Manager | Closes `RLY-W005` |
| **RLY-WX006**| Window 6 Close | Control | `RLY-WC006` | Close button | Yes | No | Window Manager | Closes `RLY-W006` |
| **RLY-J001** | Committee 1 Join Button| Button | `RLY-W001` | Application form link | Yes | Yes | `data/committees.js` | Action CTA |
| **RLY-J002** | Committee 2 Join Button| Button | `RLY-W002` | Application form link | Yes | Yes | `data/committees.js` | Action CTA |
| **RLY-J003** | Committee 3 Join Button| Button | `RLY-W003` | Application form link | Yes | Yes | `data/committees.js` | Action CTA |
| **RLY-J004** | Committee 4 Join Button| Button | `RLY-W004` | Application form link | Yes | Yes | `data/committees.js` | Action CTA |
| **RLY-J005** | Committee 5 Join Button| Button | `RLY-W005` | Application form link | Yes | Yes | `data/committees.js` | Action CTA |
| **RLY-A001** | Members App Launcher 1 | Button | `RLY-W001` | Roster app shortcut | Yes | No | UI Manager | Opens `RLY-AW001` |
| **RLY-A002** | Members App Launcher 2 | Button | `RLY-W002` | Roster app shortcut | Yes | No | UI Manager | Opens `RLY-AW002` |
| **RLY-A003** | Members App Launcher 3 | Button | `RLY-W003` | Roster app shortcut | Yes | No | UI Manager | Opens `RLY-AW003` |
| **RLY-A004** | Members App Launcher 4 | Button | `RLY-W004` | Roster app shortcut | Yes | No | UI Manager | Opens `RLY-AW004` |
| **RLY-A005** | Members App Launcher 5 | Button | `RLY-W005` | Roster app shortcut | Yes | No | UI Manager | Opens `RLY-AW005` |
| **RLY-A006** | Members App Launcher 6 | Button | `RLY-W006` | Roster app shortcut | Yes | No | UI Manager | Opens `RLY-AW006` |
| **RLY-AW001**| Members Roster Window 1| Window | `RLY-D002` | Roster app shell | Yes | Yes | `data/members.js` | List view |
| **RLY-AW002**| Members Roster Window 2| Window | `RLY-D002` | Roster app shell | Yes | Yes | `data/members.js` | List view |
| **RLY-AW003**| Members Roster Window 3| Window | `RLY-D002` | Roster app shell | Yes | Yes | `data/members.js` | List view |
| **RLY-AW004**| Members Roster Window 4| Window | `RLY-D002` | Roster app shell | Yes | Yes | `data/members.js` | List view |
| **RLY-AW005**| Members Roster Window 5| Window | `RLY-D002` | Roster app shell | Yes | Yes | `data/members.js` | List view |
| **RLY-AW006**| Board Roster Window 6 | Window | `RLY-D002` | Roster app shell | Yes | Yes | `data/members.js` | List view |
| **RLY-N101** | Notification Slot 1 | Feed Item| `RLY-NP001` | News item 1 | Yes | Yes | `data/notifications.js` | Notification item |
| **RLY-N102** | Notification Slot 2 | Feed Item| `RLY-NP001` | News item 2 | Yes | Yes | `data/notifications.js` | Notification item |
| **RLY-N103** | Notification Slot 3 | Feed Item| `RLY-NP001` | News item 3 | Yes | Yes | `data/notifications.js` | Notification item |
| **RLY-N104** | Notification Slot 4 | Feed Item| `RLY-NP001` | News item 4 | Yes | Yes | `data/notifications.js` | Notification item |
| **RLY-N105** | Notification Slot 5 | Feed Item| `RLY-NP001` | News item 5 | Yes | Yes | `data/notifications.js` | Notification item |
| **RLY-K001** | Dock Container | Dock | `RLY-D001` | macOS-style bottom dock | Yes | No | Layout CSS | Dock wrapper |
| **RLY-K002** | Dock Shortcut: Instagram| Button | `RLY-K001` | Direct Instagram link | Yes | Yes | `data/links.js` | Dock shortcut icon |

---

## 3. Dynamic Member & Info Card ID Ranges (Planned Demo Ranges)

The following ID allocations are reserved for member stickers (`RLY-M*`) and member information cards (`RLY-I*`):

- **Committee 1**: `RLY-M001` – `RLY-M003` | Info Cards: `RLY-I001` – `RLY-I003`
- **Committee 2**: `RLY-M004` – `RLY-M006` | Info Cards: `RLY-I004` – `RLY-I006`
- **Committee 3**: `RLY-M007` – `RLY-M009` | Info Cards: `RLY-I007` – `RLY-I009`
- **Committee 4**: `RLY-M010` – `RLY-M012` | Info Cards: `RLY-I010` – `RLY-I012`
- **Committee 5**: `RLY-M013` – `RLY-M015` | Info Cards: `RLY-I013` – `RLY-I015`
- **Board / Managers (Group 6)**: `RLY-M101` – `RLY-M104` | Info Cards: `RLY-I101` – `RLY-I104`

> **Note**: These member IDs are **planned system ranges** for demo/production data binding and do not represent real-world individuals until mapped in `data/members.js`.
