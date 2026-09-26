# UI Component Structure

Component breakdown and responsibility matrix for the **Rally Board Interactive Desktop**.

---

## Component Matrix

| Component | Purpose | Parent Component | Expected IDs | Data-Driven | Interactive |
|---|---|---|---|---|---|
| **Desktop Shell** | Fullscreen viewport wrapper | Root | `RLY-D001`, `RLY-D002` | Partial | Yes |
| **Top Bar** | Mac-style header navigation | `RLY-D001` | `RLY-T001` | Partial | Yes |
| **Rally Logo** | Header brand mark | `RLY-T001` | `RLY-L001` | No | Yes |
| **Rally Menu** | Dropdown links overlay | `RLY-L001` | `RLY-MN001`, `RLY-B001`–`RLY-B004`, `RLY-C001`, `RLY-C002`, `RLY-LC001` | Yes | Yes |
| **Center Announcement** | Header banner marquee | `RLY-T001` | `RLY-MS001` | Yes | Yes |
| **Season Display** | Active season tag | `RLY-T001` | `RLY-S001` | Yes | No |
| **Language Switch** | Toggle EN / AR state | `RLY-T001` | `RLY-LG001` | Yes | Yes |
| **Notification Control** | Bell icon trigger | `RLY-T001` | `RLY-N001` | Yes | Yes |
| **Notification Panel** | Drawer for notifications | `RLY-N001` | `RLY-NP001`, `RLY-N101`–`RLY-N105` | Yes | Yes |
| **Folder Icon** | Interactive folder launcher | `RLY-D001` | `RLY-F001`–`RLY-F006` | Yes | Yes |
| **Committee Window** | Main committee modal | `RLY-F00x` | `RLY-W001`–`RLY-W006` | Yes | Yes |
| **Member Sticker** | Interactive member photo | `RLY-W00x` | `RLY-M001`–`RLY-M104` | Yes | Yes |
| **Member Info Window** | Profile modal detail | `RLY-M00x` | `RLY-I001`–`RLY-I104` | Yes | Yes |
| **Join Button** | External application link | `RLY-W00x` | `RLY-J001`–`RLY-J005` | Yes | Yes |
| **Members App Link** | Full directory app launcher| `RLY-W00x` | `RLY-A001`–`RLY-A006` | Yes | Yes |
| **Members App Window** | Full directory view modal | `RLY-A00x` | `RLY-AW001`–`RLY-AW006` | Yes | Yes |
| **Dock** | Bottom shortcut bar | `RLY-D001` | `RLY-K001` | Partial | Yes |
| **Dock Item** | Shortcut icon (Instagram) | `RLY-K001` | `RLY-K002` | Yes | Yes |
