# ID Registry

This file is the master registry for all stable Rally IDs used by the project.

## 1. Naming Convention

```text
RLY-[TYPE][NUMBER]
```

Examples:

```text
RLY-D001
RLY-W001
RLY-M001
RLY-N101
```

Rules:

- IDs are globally unique.
- IDs are stable across content changes.
- IDs are not derived from translated display names.
- IDs are never reused.
- Existing IDs are not renamed without explicit approval.
- Deprecated IDs remain documented rather than being silently removed.
- A new independently editable/functionally relevant element receives a new ID.

## 2. Type Codes

| Code | Meaning |
|---|---|
| D | Desktop |
| T | Top Bar |
| L | Logo / Label |
| MN | Rally Menu |
| MS | Center Announcement / Message |
| S | Season / Status |
| LG | Language Control |
| N | Notification Control / Notification Item |
| NP | Notification Panel |
| F | Desktop Folder |
| W | Primary Window |
| WC | Window Chrome / Header |
| WX | Window Close Control |
| M | Member / Manager |
| I | Member / Manager Info Window |
| J | Join / Application Button |
| A | Members App |
| AW | Members App Window |
| B | Social / External Button |
| C | Contact Channel |
| K | Dock / Dock Item |
| LC | Attribution / License |

## 3. Master Registry

| ID | Element Name | Type | Parent | Purpose | Functional | Editable | Data / Asset Source | Notes |
|---|---|---|---|---|---|---|---|---|
| RLY-D001 | Main Desktop | Desktop | Root | Main experience container | Yes | No | Future HTML/CSS | Primary viewport |
| RLY-D002 | Desktop Background | Desktop | RLY-D001 | Wallpaper/background layer | No | Yes | `assets/backgrounds/` | Decorative |
| RLY-T001 | Top Bar | Top Bar | RLY-D001 | Persistent top interface | Yes | No | Future HTML/CSS | Fixed/persistent |
| RLY-L001 | Rally Logo | Logo | RLY-T001 | Opens Rally Menu | Yes | Yes | `assets/logos/`, `data/links.js` | Brand control |
| RLY-MN001 | Rally Menu | Menu | RLY-L001 | Rally platform/contact menu | Yes | Yes | `data/links.js` | Menu container |
| RLY-B001 | Facebook | External Button | RLY-MN001 | Open Facebook | Yes | Yes | `data/links.js` | External |
| RLY-B002 | TikTok | External Button | RLY-MN001 | Open TikTok | Yes | Yes | `data/links.js` | External |
| RLY-B003 | Instagram | External Button | RLY-MN001 | Open Instagram | Yes | Yes | `data/links.js` | External |
| RLY-B004 | WhatsApp Group | External Button | RLY-MN001 | Open WhatsApp group | Yes | Yes | `data/links.js` | External |
| RLY-LC001 | Attribution | Attribution | RLY-MN001 | Attribution / license text | No | Yes | `data/links.js` | Text only |
| RLY-C001 | Email | Contact | RLY-MN001 | Email contact target | Yes | Yes | `data/links.js` | External |
| RLY-C002 | WhatsApp Contact | Contact | RLY-MN001 | Direct WhatsApp target | Yes | Yes | `data/links.js` | External |
| RLY-MS001 | Center Announcement | Message | RLY-T001 | Clickable announcement | Yes | Yes | `data/site.js` | Text + URL |
| RLY-S001 | Season Display | Status | RLY-T001 | Current Rally season | No | Yes | `data/site.js` | Data-driven |
| RLY-LG001 | Language Switch | Language | RLY-T001 | EN / AR control | Yes | Yes | `data/site.js` + future state | Global language control |
| RLY-N001 | Notification Control | Notification Control | RLY-T001 | Opens notification panel | Yes | No | Future JS/CSS | Control |
| RLY-NP001 | Notification Panel | Notification Panel | RLY-T001 | Notification container | Yes | Yes | `data/notifications.js` | Supports 1–5 active items |
| RLY-N101 | Notification 1 | Notification Item | RLY-NP001 | Notification slot | Yes | Yes | `data/notifications.js` | Planned slot |
| RLY-N102 | Notification 2 | Notification Item | RLY-NP001 | Notification slot | Yes | Yes | `data/notifications.js` | Planned slot |
| RLY-N103 | Notification 3 | Notification Item | RLY-NP001 | Notification slot | Yes | Yes | `data/notifications.js` | Planned slot |
| RLY-N104 | Notification 4 | Notification Item | RLY-NP001 | Notification slot | Yes | Yes | `data/notifications.js` | Planned slot |
| RLY-N105 | Notification 5 | Notification Item | RLY-NP001 | Notification slot | Yes | Yes | `data/notifications.js` | Planned slot |
| RLY-F001 | Committee 1 Folder | Folder | RLY-D001 | Open committee 1 | Yes | Yes | `data/committees.js` | Maps to RLY-W001 |
| RLY-F002 | Committee 2 Folder | Folder | RLY-D001 | Open committee 2 | Yes | Yes | `data/committees.js` | Maps to RLY-W002 |
| RLY-F003 | Committee 3 Folder | Folder | RLY-D001 | Open committee 3 | Yes | Yes | `data/committees.js` | Maps to RLY-W003 |
| RLY-F004 | Committee 4 Folder | Folder | RLY-D001 | Open committee 4 | Yes | Yes | `data/committees.js` | Maps to RLY-W004 |
| RLY-F005 | Committee 5 Folder | Folder | RLY-D001 | Open committee 5 | Yes | Yes | `data/committees.js` | Maps to RLY-W005 |
| RLY-F006 | Board / Managers Folder | Folder | RLY-D001 | Open board/managers | Yes | Yes | `data/committees.js` | Maps to RLY-W006 |
| RLY-W001 | Committee 1 Window | Primary Window | RLY-F001 | Committee 1 content | Yes | Yes | `data/committees.js` | One reusable template |
| RLY-W002 | Committee 2 Window | Primary Window | RLY-F002 | Committee 2 content | Yes | Yes | `data/committees.js` | One reusable template |
| RLY-W003 | Committee 3 Window | Primary Window | RLY-F003 | Committee 3 content | Yes | Yes | `data/committees.js` | One reusable template |
| RLY-W004 | Committee 4 Window | Primary Window | RLY-F004 | Committee 4 content | Yes | Yes | `data/committees.js` | One reusable template |
| RLY-W005 | Committee 5 Window | Primary Window | RLY-F005 | Committee 5 content | Yes | Yes | `data/committees.js` | One reusable template |
| RLY-W006 | Board / Managers Window | Primary Window | RLY-F006 | Board/manager content | Yes | Yes | `data/committees.js` | Shared window variant |
| RLY-WC001–RLY-WC006 | Window Chrome | Window Chrome | RLY-W001–RLY-W006 | Window header/chrome | Yes | Yes | Future CSS/HTML | One per primary window instance |
| RLY-WX001–RLY-WX006 | Window Close | Window Close | RLY-W001–RLY-W006 | Close primary window | Yes | No | Future HTML/JS | One per primary window instance |
| RLY-M001–RLY-M015 | Committee Members | Member | RLY-W001–RLY-W005 | 3 member slots per committee | Yes | Yes | `data/members.js` + `assets/people/` | Planned demo/system IDs |
| RLY-M101–RLY-M104 | Board / Managers | Member | RLY-W006 | 4 manager slots | Yes | Yes | `data/members.js` + `assets/people/` | Planned demo/system IDs |
| RLY-I001–RLY-I015 | Committee Member Info | Info Window | RLY-M001–RLY-M015 | Member profile window | Yes | Yes | `data/members.js` | One per committee member ID |
| RLY-I101–RLY-I104 | Manager Info | Info Window | RLY-M101–RLY-M104 | Manager profile window | Yes | Yes | `data/members.js` | One per manager ID |
| RLY-J001–RLY-J005 | Committee Join Buttons | Join Button | RLY-W001–RLY-W005 | Open committee application | Yes | Yes | `data/committees.js` | One per committee |
| RLY-A001–RLY-A005 | Committee Members App | Members App | RLY-W001–RLY-W005 | Open committee directory | Yes | Yes | `data/committees.js` | One per committee |
| RLY-AW001–RLY-AW005 | Committee Members App Window | App Window | RLY-A001–RLY-A005 | Display committee members | Yes | Yes | `data/committees.js` | Shared reusable template |
| RLY-K001 | Dock | Dock | RLY-D001 | Bottom shortcut container | Yes | No | Future HTML/CSS | Minimal dock |
| RLY-K002 | Instagram Shortcut | Dock Item | RLY-K001 | Open Instagram | Yes | Yes | `data/links.js` | External |

## 4. Planned Member Allocation

### Committee 1
`RLY-M001`–`RLY-M003` → `RLY-I001`–`RLY-I003`

### Committee 2
`RLY-M004`–`RLY-M006` → `RLY-I004`–`RLY-I006`

### Committee 3
`RLY-M007`–`RLY-M009` → `RLY-I007`–`RLY-I009`

### Committee 4
`RLY-M010`–`RLY-M012` → `RLY-I010`–`RLY-I012`

### Committee 5
`RLY-M013`–`RLY-M015` → `RLY-I013`–`RLY-I015`

### Board / Managers
`RLY-M101`–`RLY-M104` → `RLY-I101`–`RLY-I104`

## 5. Registry Status

All IDs above are **planned system/demo IDs**, not real-person identities or production content assignments.

When an ID is deprecated, retain it in this file and mark its status rather than silently reusing it.
