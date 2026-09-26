# ID Registry (RLY-*)

This registry documents all official structural and UI component IDs for the **Rally Board Interactive Desktop** project.
All IDs strictly adhere to the `RLY-[TYPE][NUMBER]` format.

## Core Component Registry

| ID | Type | Description | Parent Container | Requirements / State |
|---|---|---|---|---|
| `RLY-D001` | Desktop | Main interactive desktop container | `<body>` | Self-contained, responsive |
| `RLY-D002` | Desktop | Desktop background layer / wallpaper | `RLY-D001` | Configurable asset path |
| `RLY-T001` | TopBar | macOS-style top navigation bar | `RLY-D001` | Fixed top, bilingual |
| `RLY-L001` | Logo | Rally logo button in top bar | `RLY-T001` | Triggers `RLY-MN001` menu |
| `RLY-MN001`| Menu | Rally menu dropdown | `RLY-T001` | Dropdown panel |
| `RLY-B001` | Button | Facebook link | `RLY-MN001` | Demo URL |
| `RLY-B002` | Button | TikTok link | `RLY-MN001` | Demo URL |
| `RLY-B003` | Button | Instagram link | `RLY-MN001` | Demo URL |
| `RLY-B004` | Button | WhatsApp Group link | `RLY-MN001` | Demo URL |
| `RLY-LC001`| Button | Attribution link | `RLY-MN001` | Triggers attribution modal |
| `RLY-C001` | Contact | Email contact link | `RLY-MN001` | mailto: URL |
| `RLY-C002` | Contact | WhatsApp contact link | `RLY-MN001` | https://wa.me URL |
| `RLY-MS001`| Banner | Center announcement banner | `RLY-T001` | Data-driven text & URL |
| `RLY-S001` | Season | Season indicator display | `RLY-T001` | Data-driven dates |
| `RLY-LG001`| Toggle | Bilingual language switcher (EN/AR) | `RLY-T001` | Triggers RTL/LTR toggle |
| `RLY-N001` | Trigger | Notification indicator trigger | `RLY-T001` | Triggers `RLY-NP001` |
| `RLY-NP001`| Panel | Notification popup panel | `RLY-D001` | Displays active notification |
| `RLY-N101` | Notification | Notification Item 01 | `RLY-NP001` | Data-driven |
| `RLY-N102` | Notification | Notification Item 02 | `RLY-NP001` | Data-driven |
| `RLY-N103` | Notification | Notification Item 03 | `RLY-NP001` | Data-driven |
| `RLY-N104` | Notification | Notification Item 04 | `RLY-NP001` | Data-driven |
| `RLY-N105` | Notification | Notification Item 05 | `RLY-NP001` | Data-driven |
| `RLY-F001` | Folder | Committee 01 Folder | `RLY-D001` | Opens `RLY-W001` |
| `RLY-F002` | Folder | Committee 02 Folder | `RLY-D001` | Opens `RLY-W002` |
| `RLY-F003` | Folder | Committee 03 Folder | `RLY-D001` | Opens `RLY-W003` |
| `RLY-F004` | Folder | Committee 04 Folder | `RLY-D001` | Opens `RLY-W004` |
| `RLY-F005` | Folder | Committee 05 Folder | `RLY-D001` | Opens `RLY-W005` |
| `RLY-F006` | Folder | Board / Managers Folder | `RLY-D001` | Opens `RLY-W006` |
| `RLY-W001` | Window | Committee 01 Window | `RLY-D001` | Primary Window |
| `RLY-W002` | Window | Committee 02 Window | `RLY-D001` | Primary Window |
| `RLY-W003` | Window | Committee 03 Window | `RLY-D001` | Primary Window |
| `RLY-W004` | Window | Committee 04 Window | `RLY-D001` | Primary Window |
| `RLY-W005` | Window | Committee 05 Window | `RLY-D001` | Primary Window |
| `RLY-W006` | Window | Board Window | `RLY-D001` | Primary Window |
| `RLY-M001`..`RLY-M015` | Sticker | Committee Member Stickers | `RLY-W001`..`RLY-W005` | Triggers `RLY-I*` |
| `RLY-M016`..`RLY-M019` | Sticker | Board Manager Stickers | `RLY-W006` | Triggers `RLY-I*` |
| `RLY-I001`..`RLY-I019` | Modal | Member Info Popup | `RLY-D001` | Info Window |
| `RLY-J001`..`RLY-J005` | Button | Committee Join Buttons | `RLY-W001`..`RLY-W005` | External URL |
| `RLY-A001`..`RLY-A005` | App Icon | Members App Icon | `RLY-W001`..`RLY-W005` | Opens `RLY-AW*` |
| `RLY-AW001`..`RLY-AW005`| App Window | Members List App Window | `RLY-D001` | App Modal |
| `RLY-K001` | Dock | Bottom Dock | `RLY-D001` | Responsive Dock |
| `RLY-K002` | Dock Button | Instagram Dock Shortcut | `RLY-K001` | Opens Instagram |
