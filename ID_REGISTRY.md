# ID Registry (RLY-*)

This registry documents all official structural and UI component IDs for the **Rally Board Interactive Desktop** project.
All contract IDs strictly adhere to the `RLY-[TYPE][NUMBER]` format.

---

## 1. Implemented Static HTML & Structural Component Registry

| ID | Type | Exact Element Name | Parent / Location | Function / Description |
|---|---|---|---|---|
| `RLY-D001` | Desktop | Desktop Main Container | `<body>` | Main interactive desktop container |
| `RLY-D002` | Desktop | Desktop Background | `RLY-D001` | Desktop wallpaper background layer |
| `RLY-T001` | TopBar | Top Navigation Bar | `RLY-D001` | Fixed top navigation bar |
| `RLY-L001` | Logo | Rally Logo Button | `RLY-T001` -> Left | Logo plate button triggering dropdown menu `RLY-MN001` |
| `RLY-MN001`| Menu | Rally Dropdown Menu | `RLY-T001` -> Left | Navigation dropdown menu container |
| `RLY-B001` | Button | Facebook Link | `RLY-MN001` | External link button to Rally Facebook page |
| `RLY-B002` | Button | TikTok Link | `RLY-MN001` | External link button to Rally TikTok channel |
| `RLY-B003` | Button | Instagram Link | `RLY-MN001` | External link button to Rally Instagram profile |
| `RLY-B004` | Button | WhatsApp Group Link | `RLY-MN001` | External link button to Rally WhatsApp group |
| `RLY-LC001`| Button | Attribution Link | `RLY-MN001` | Button triggering Attribution Modal |
| `RLY-C001` | Contact | Email Contact Link | `RLY-MN001` | Direct mailto contact link |
| `RLY-C002` | Contact | WhatsApp Contact Link | `RLY-MN001` | Direct WhatsApp wa.me contact link |
| `RLY-MS001`| Banner | Center Announcement Banner | `RLY-T001` -> Center | Announcement link banner driven by `appData.announcement` |
| `RLY-S001` | Season | Season Indicator Badge | `RLY-T001` -> Right | Season date display driven by `appData.season` |
| `RLY-N001` | Trigger | Notification Bell Trigger | `RLY-T001` -> Right | Trigger button opening Notifications Modal |
| `RLY-LG001`| Toggle | Language Switcher | `RLY-T001` -> Right | Toggle button switching EN/AR language & LTR/RTL |
| `RLY-NP001`| Panel | Toast Notification Panel | `RLY-D001` | Auto-rotating single toast popup panel |
| `RLY-F001` | Folder | PR Committee Dock Folder | `RLY-K001` -> Dock | Dock item opening PR Committee Window (`RLY-W001`) |
| `RLY-F002` | Folder | HR Committee Dock Folder | `RLY-K001` -> Dock | Dock item opening HR Committee Window (`RLY-W002`) |
| `RLY-F003` | Folder | Entrepreneurship Dock Folder | `RLY-K001` -> Dock | Dock item opening Entrepreneurship Window (`RLY-W003`) |
| `RLY-F004` | Folder | Operations Dock Folder | `RLY-K001` -> Dock | Dock item opening Operations Window (`RLY-W004`) |
| `RLY-F005` | Folder | Marketing Dock Folder | `RLY-K001` -> Dock | Dock item opening Marketing Window (`RLY-W005`) |
| `RLY-F006` | Folder | Administration Dock Folder | `RLY-K001` -> Dock | Dock item opening Board Window (`RLY-W006`) |
| `RLY-K001` | Dock | Bottom Dock Container | `RLY-D001` -> Footer | Responsive macOS-style bottom dock container |
| `RLY-K002` | Dock Button| Visit Me Dock Shortcut | `RLY-K001` -> Dock | Browser shortcut icon opening live URL |

---

## 2. Dynamic Runtime Component & Data Contract Registry

The following IDs are contract-bound in `data/app-data.js` and rendered dynamically by `js/app.js`:

| ID Range / ID | Type | Exact Element Name | Render Location | Function / Description |
|---|---|---|---|---|
| `RLY-W001`..`RLY-W005` | Window | Committee Primary Windows | Dynamic `#window-container` | Primary Committee Windows rendered on folder click |
| `RLY-W006` | Window | Board Primary Window | Dynamic `#window-container` | Primary Board Window rendered on Administration folder click |
| `RLY-J001`..`RLY-J005` | Button | Committee Join Buttons | Dynamic inside `RLY-W001`..`RLY-W005` | External join form button per committee |
| `RLY-A001`..`RLY-A005` | App Button | Members App Launcher Buttons | Dynamic inside `RLY-W001`..`RLY-W005` | Button triggering Members App Directory Modal |
| `RLY-AW001`..`RLY-AW005`| App Window | Members Directory App IDs | Dynamic Modal Identifier | App window ID mapping in data contract |
| `RLY-M001`..`RLY-M015` | Sticker | Committee Member Stickers | Dynamic inside `RLY-W001`..`RLY-W005` | Cutout sticker cards triggering member info modal |
| `RLY-M016`..`RLY-M018` | Sticker | Board Manager Stickers | Dynamic inside `RLY-W006` | Cutout sticker cards triggering member info modal |
| `RLY-I001`..`RLY-I018` | Info Modal | Member Info Popup IDs | Dynamic Modal Identifier | Data info mapping contract per member |
| `RLY-N101` | Notification| Welcome Notification Item | Driven by `appData.notifications[0]` | Welcome message item |
| `RLY-N102` | Notification| Festival Event Notification | Driven by `appData.notifications[1]` | Rally Festival event item |
| `RLY-N103` | Notification| Workshops Notification Item | Driven by `appData.notifications[2]` | Applications & workshops info item |

---

## 3. Dynamic Runtime Containers & Modals (Current Implementation DOM IDs)

The following container elements are currently implemented in static HTML (`index.html`) using semantic non-`RLY-` IDs:

| DOM Selector / ID | Type | Parent Container | Function / Description |
|---|---|---|---|
| `#window-container` | Main View Container | `RLY-D001` -> Main | Mount point for active primary windows (`RLY-W001`..`RLY-W006`) |
| `#member-info-modal` | Modal Overlay | `RLY-D001` | Modal container for member photo, bio, and contact link |
| `#members-app-modal` | Modal Overlay | `RLY-D001` | Modal container for committee members directory list |
| `#notifications-modal`| Modal Overlay | `RLY-D001` | Modal container listing all notifications |
| `#attribution-modal` | Modal Overlay | `RLY-D001` | Modal container displaying project attribution text |

---

## 4. Proposed Contract IDs for Future Scope (PROPOSED — NOT IMPLEMENTED)

*Do NOT add these IDs to HTML or JS in the baseline state without authorization.*

| Proposed ID | Type | Targeted Element | Reason / Proposed Purpose |
|---|---|---|---|
| `RLY-N104` | Notification | Future Notification Item 04 | Proposed for 4th notification item in `appData.notifications` |
| `RLY-N105` | Notification | Future Notification Item 05 | Proposed for 5th notification item in `appData.notifications` |
| `RLY-M019` | Sticker | Board Manager Sticker 04 | Proposed for 4th board manager cutout in `RLY-W006` |
| `RLY-I019` | Info Modal | Member Info Popup ID 04 | Proposed for 4th board manager info mapping |
| `RLY-WC001` | Container | Window Container Mount Point | Proposed contract ID for `#window-container` |
| `RLY-IM001` | Modal | Member Info Modal Container | Proposed contract ID for `#member-info-modal` |
| `RLY-AM001` | Modal | Members App Directory Modal | Proposed contract ID for `#members-app-modal` |
| `RLY-NM001` | Modal | Notifications List Modal Container | Proposed contract ID for `#notifications-modal` |
| `RLY-LM001` | Modal | Attribution Modal Container | Proposed contract ID for `#attribution-modal` |
