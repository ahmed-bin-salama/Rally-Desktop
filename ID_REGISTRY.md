# ID Registry

This document serves as the master registry for all element IDs across the **Rally Board Interactive Desktop** project.

## Naming Convention
Format: `RLY-[TYPE][NUMBER]`
- **RLY**: Project prefix (Rally Desktop).
- **TYPE**: Code representing element type (1–2 letters).
- **NUMBER**: Zero-padded identifier (e.g., `001`, `101`).

### Code Definitions
- `D`: Desktop & Background
- `T`: Top Bar Container
- `L`: Logo
- `MN`: Menu Container
- `MS`: Center Message / Announcement
- `S`: Season / Status
- `LG`: Language Control
- `N`: Notification Control / Item
- `NP`: Notification Panel
- `F`: Folder Icon
- `W`: Window Container
- `WC`: Window Chrome / Controls
- `WX`: Window Close Control
- `M`: Member / Manager Entity
- `I`: Member Info Window
- `J`: Join / Application Button
- `A`: Application / App Link
- `AW`: Application Window
- `B`: Social / External Button
- `C`: Contact Channel
- `K`: Dock / Dock Item
- `LC`: License / Attribution

---

## Master ID Registry Table

| ID | Element Name | Type | Parent | Purpose | Functional | Editable | Asset/Data Source | Notes |
|---|---|---|---|---|---|---|---|---|
| **RLY-D001** | Main Desktop | Desktop | Root | Primary desktop container | Yes | No | CSS / Layout | Desktop wrapper |
| **RLY-D002** | Desktop Background | Desktop | RLY-D001 | Wallpaper background image | No | Yes | `assets/backgrounds/` | Background wallpaper |
| **RLY-T001** | Top Bar | Top Bar | RLY-D001 | Top navigation bar | Yes | No | CSS / Layout | Mac-inspired bar |
| **RLY-L001** | Rally Logo | Logo | RLY-T001 | Top left brand logo | Yes | Yes | `assets/logos/` | Logo mark |
| **RLY-MN001**| Rally Menu | Menu | RLY-L001 | Dropdown options menu | Yes | Yes | `data/links.js` | Menu overlay |
| **RLY-MS001**| Center Announcement| Message | RLY-T001 | Center marquee announcement| Yes | Yes | `data/site.js` | Top bar banner |
| **RLY-S001** | Season Display | Season | RLY-T001 | Active season text | No | Yes | `data/site.js` | Season string |
| **RLY-LG001**| Language Switch | Language| RLY-T001 | Toggle EN / AR switch | Yes | No | State / `data/site.js` | Language switcher |
| **RLY-N001** | Notification Bell | Control | RLY-T001 | Toggle notification panel | Yes | No | CSS / JS | Bell icon trigger |
| **RLY-NP001**| Notification Panel | Panel | RLY-N001 | Drawer showing active news | Yes | Yes | `data/notifications.js`| Notification drawer |
| **RLY-N101** | Notification Item 1 | Item | RLY-NP001| News feed item slot 1 | Yes | Yes | `data/notifications.js`| Feed item 1 |
| **RLY-N102** | Notification Item 2 | Item | RLY-NP001| News feed item slot 2 | Yes | Yes | `data/notifications.js`| Feed item 2 |
| **RLY-N103** | Notification Item 3 | Item | RLY-NP001| News feed item slot 3 | Yes | Yes | `data/notifications.js`| Feed item 3 |
| **RLY-N104** | Notification Item 4 | Item | RLY-NP001| News feed item slot 4 | Yes | Yes | `data/notifications.js`| Feed item 4 |
| **RLY-N105** | Notification Item 5 | Item | RLY-NP001| News feed item slot 5 | Yes | Yes | `data/notifications.js`| Feed item 5 |
| **RLY-F001** | Folder Committee 1 | Folder | RLY-D001 | Desktop icon Committee 1 | Yes | Yes | `data/committees.js` | Opens RLY-W001 |
| **RLY-F002** | Folder Committee 2 | Folder | RLY-D001 | Desktop icon Committee 2 | Yes | Yes | `data/committees.js` | Opens RLY-W002 |
| **RLY-F003** | Folder Committee 3 | Folder | RLY-D001 | Desktop icon Committee 3 | Yes | Yes | `data/committees.js` | Opens RLY-W003 |
| **RLY-F004** | Folder Committee 4 | Folder | RLY-D001 | Desktop icon Committee 4 | Yes | Yes | `data/committees.js` | Opens RLY-W004 |
| **RLY-F005** | Folder Committee 5 | Folder | RLY-D001 | Desktop icon Committee 5 | Yes | Yes | `data/committees.js` | Opens RLY-W005 |
| **RLY-F006** | Folder Board | Folder | RLY-D001 | Desktop icon Board / Mgrs| Yes | Yes | `data/committees.js` | Opens RLY-W006 |
| **RLY-W001** | Window Committee 1 | Window | RLY-F001 | Window overlay Committee 1| Yes | Yes | `data/committees.js` | Committee 1 window |
| **RLY-W002** | Window Committee 2 | Window | RLY-F002 | Window overlay Committee 2| Yes | Yes | `data/committees.js` | Committee 2 window |
| **RLY-W003** | Window Committee 3 | Window | RLY-F003 | Window overlay Committee 3| Yes | Yes | `data/committees.js` | Committee 3 window |
| **RLY-W004** | Window Committee 4 | Window | RLY-F004 | Window overlay Committee 4| Yes | Yes | `data/committees.js` | Committee 4 window |
| **RLY-W005** | Window Committee 5 | Window | RLY-F005 | Window overlay Committee 5| Yes | Yes | `data/committees.js` | Committee 5 window |
| **RLY-W006** | Window Board | Window | RLY-F006 | Window overlay Board | Yes | Yes | `data/committees.js` | Board window |
| **RLY-M001** | Member RLY-M001 | Member | RLY-W001 | Member 1 in Committee 1 | Yes | Yes | `data/members.js` | Demo sticker slot |
| **RLY-M002** | Member RLY-M002 | Member | RLY-W001 | Member 2 in Committee 1 | Yes | Yes | `data/members.js` | Demo sticker slot |
| **RLY-M003** | Member RLY-M003 | Member | RLY-W001 | Member 3 in Committee 1 | Yes | Yes | `data/members.js` | Demo sticker slot |
| **RLY-M004** | Member RLY-M004 | Member | RLY-W002 | Member 1 in Committee 2 | Yes | Yes | `data/members.js` | Demo sticker slot |
| **RLY-M005** | Member RLY-M005 | Member | RLY-W002 | Member 2 in Committee 2 | Yes | Yes | `data/members.js` | Demo sticker slot |
| **RLY-M006** | Member RLY-M006 | Member | RLY-W002 | Member 3 in Committee 2 | Yes | Yes | `data/members.js` | Demo sticker slot |
| **RLY-M101** | Manager RLY-M101 | Member | RLY-W006 | Board Member 1 | Yes | Yes | `data/members.js` | Board manager slot |
| **RLY-M102** | Manager RLY-M102 | Member | RLY-W006 | Board Member 2 | Yes | Yes | `data/members.js` | Board manager slot |
| **RLY-M103** | Manager RLY-M103 | Member | RLY-W006 | Board Member 3 | Yes | Yes | `data/members.js` | Board manager slot |
| **RLY-M104** | Manager RLY-M104 | Member | RLY-W006 | Board Member 4 | Yes | Yes | `data/members.js` | Board manager slot |
| **RLY-I001** | Info Window RLY-I001| Info Win| RLY-M001 | Profile modal RLY-M001 | Yes | Yes | `data/members.js` | Info card |
| **RLY-I002** | Info Window RLY-I002| Info Win| RLY-M002 | Profile modal RLY-M002 | Yes | Yes | `data/members.js` | Info card |
| **RLY-I003** | Info Window RLY-I003| Info Win| RLY-M003 | Profile modal RLY-M003 | Yes | Yes | `data/members.js` | Info card |
| **RLY-I004** | Info Window RLY-I004| Info Win| RLY-M004 | Profile modal RLY-M004 | Yes | Yes | `data/members.js` | Info card |
| **RLY-I005** | Info Window RLY-I005| Info Win| RLY-M005 | Profile modal RLY-M005 | Yes | Yes | `data/members.js` | Info card |
| **RLY-I006** | Info Window RLY-I006| Info Win| RLY-M006 | Profile modal RLY-M006 | Yes | Yes | `data/members.js` | Info card |
| **RLY-I101** | Info Window RLY-I101| Info Win| RLY-M101 | Profile modal RLY-M101 | Yes | Yes | `data/members.js` | Board Info card |
| **RLY-I102** | Info Window RLY-I102| Info Win| RLY-M102 | Profile modal RLY-M102 | Yes | Yes | `data/members.js` | Board Info card |
| **RLY-I103** | Info Window RLY-I103| Info Win| RLY-M103 | Profile modal RLY-M103 | Yes | Yes | `data/members.js` | Board Info card |
| **RLY-I104** | Info Window RLY-I104| Info Win| RLY-M104 | Profile modal RLY-M104 | Yes | Yes | `data/members.js` | Board Info card |
| **RLY-J001** | Join Button Comm 1 | Join Btn| RLY-W001 | Apply button Committee 1 | Yes | Yes | `data/committees.js` | Form link |
| **RLY-J002** | Join Button Comm 2 | Join Btn| RLY-W002 | Apply button Committee 2 | Yes | Yes | `data/committees.js` | Form link |
| **RLY-J003** | Join Button Comm 3 | Join Btn| RLY-W003 | Apply button Committee 3 | Yes | Yes | `data/committees.js` | Form link |
| **RLY-J004** | Join Button Comm 4 | Join Btn| RLY-W004 | Apply button Committee 4 | Yes | Yes | `data/committees.js` | Form link |
| **RLY-J005** | Join Button Comm 5 | Join Btn| RLY-W005 | Apply button Committee 5 | Yes | Yes | `data/committees.js` | Form link |
| **RLY-A001** | App Comm 1 | MembersApp| RLY-W001| Members app icon Comm 1 | Yes | Yes | `data/committees.js` | Opens RLY-AW001 |
| **RLY-A002** | App Comm 2 | MembersApp| RLY-W002| Members app icon Comm 2 | Yes | Yes | `data/committees.js` | Opens RLY-AW002 |
| **RLY-A003** | App Comm 3 | MembersApp| RLY-W003| Members app icon Comm 3 | Yes | Yes | `data/committees.js` | Opens RLY-AW003 |
| **RLY-A004** | App Comm 4 | MembersApp| RLY-W004| Members app icon Comm 4 | Yes | Yes | `data/committees.js` | Opens RLY-AW004 |
| **RLY-A005** | App Comm 5 | MembersApp| RLY-W005| Members app icon Comm 5 | Yes | Yes | `data/committees.js` | Opens RLY-AW005 |
| **RLY-A006** | App Board | MembersApp| RLY-W006| Board directory app icon | Yes | Yes | `data/committees.js` | Opens RLY-AW006 |
| **RLY-AW001**| App Win Comm 1 | App Window| RLY-A001| Directory window Comm 1 | Yes | Yes | `data/committees.js` | Full directory |
| **RLY-AW002**| App Win Comm 2 | App Window| RLY-A002| Directory window Comm 2 | Yes | Yes | `data/committees.js` | Full directory |
| **RLY-AW003**| App Win Comm 3 | App Window| RLY-A003| Directory window Comm 3 | Yes | Yes | `data/committees.js` | Full directory |
| **RLY-AW004**| App Win Comm 4 | App Window| RLY-A004| Directory window Comm 4 | Yes | Yes | `data/committees.js` | Full directory |
| **RLY-AW005**| App Win Comm 5 | App Window| RLY-A005| Directory window Comm 5 | Yes | Yes | `data/committees.js` | Full directory |
| **RLY-AW006**| App Win Board | App Window| RLY-A006| Directory window Board | Yes | Yes | `data/committees.js` | Full directory |
| **RLY-B001** | Facebook Link | Button | RLY-MN001| Social link Facebook | Yes | Yes | `data/links.js` | External link |
| **RLY-B002** | TikTok Link | Button | RLY-MN001| Social link TikTok | Yes | Yes | `data/links.js` | External link |
| **RLY-B003** | Instagram Link | Button | RLY-MN001| Social link Instagram | Yes | Yes | `data/links.js` | External link |
| **RLY-B004** | WhatsApp Group | Button | RLY-MN001| Social link WhatsApp grp | Yes | Yes | `data/links.js` | External link |
| **RLY-C001** | Email Link | Contact | RLY-MN001| Email contact option | Yes | Yes | `data/links.js` | Mailto link |
| **RLY-C002** | WhatsApp Contact | Contact | RLY-MN001| Direct WhatsApp contact | Yes | Yes | `data/links.js` | Direct chat link |
| **RLY-LC001**| License / Credit | Label | RLY-MN001| Attribution modal/label | No | Yes | `data/links.js` | Copyright notice |
| **RLY-K001** | Dock | Dock | RLY-D001 | Bottom dock container | Yes | No | CSS / Layout | macOS-style dock |
| **RLY-K002** | Dock Instagram | Dock Item| RLY-K001 | Dock shortcut Instagram | Yes | Yes | `data/links.js` | Quick shortcut |
