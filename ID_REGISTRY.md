# Rally Board Interactive Desktop — ID Registry

This document serves as the authoritative, comprehensive ID registry for the Rally Board Interactive Desktop application.
Every unique DOM ID across the application is individually documented below.

## Element Registry

| ID | Element Type | Exact Instance | Parent ID | Child IDs | Source | Purpose | JS Interaction | CSS Selector | Data Source |
|---|---|---|---|---|---|---|---|---|---|
| `RLY-D001` | Container | Main Desktop Container | `body` | `RLY-D002`, `RLY-T001`, `RLY-NP001`, `RLY-NM001`, `RLY-MAIN`, `member-info-modal`, `members-app-modal`, `attribution-modal`, `RLY-K001` | `index.html` | Root layout shell | Main container reference | `#RLY-D001` | N/A |
| `RLY-D002` | Background | Wallpaper Container | `RLY-D001` | `RLY-D002-OVERLAY` | `index.html` | Background image layer | Static wallpaper styling | `#RLY-D002` | `assets/backgrounds/desktop-background.jpeg` |
| `RLY-D002-OVERLAY` | Overlay | Wallpaper Gradient Overlay | `RLY-D002` | None | `index.html` | Ambient backdrop overlay | Visual shading layer | `#RLY-D002-OVERLAY` | N/A |
| `RLY-T001` | TopBar | Top Navigation Bar | `RLY-D001` | `RLY-T001-LEFT`, `RLY-T001-CENTER`, `RLY-T001-RIGHT` | `index.html` | Navigation bar container | Top bar layout | `#RLY-T001` | N/A |
| `RLY-T001-LEFT` | Container | Top Bar Left Section | `RLY-T001` | `RLY-L001`, `RLY-MN001` | `index.html` | Top left navigation group | Layout grouping | `#RLY-T001-LEFT` | N/A |
| `RLY-T001-CENTER` | Container | Top Bar Center Section | `RLY-T001` | `RLY-MS001` | `index.html` | Top center banner group | Layout grouping | `#RLY-T001-CENTER` | N/A |
| `RLY-T001-RIGHT` | Container | Top Bar Right Section | `RLY-T001` | `RLY-S001`, `RLY-N001`, `RLY-LG001` | `index.html` | Top right controls group | Layout grouping | `#RLY-T001-RIGHT` | N/A |
| `RLY-L001` | Button | Rally Logo Button | `RLY-T001-LEFT` | `RLY-L001-IMG`, `RLY-L001-TXT` | `index.html` | Menu toggle trigger | Click toggles `RLY-MN001` | `#RLY-L001` | N/A |
| `RLY-L001-IMG` | Image | Rally Logo Image | `RLY-L001` | None | `index.html` | Visual branding icon | Brand asset | `#RLY-L001-IMG` | `assets/RallySCU.png` |
| `RLY-L001-TXT` | Label | Rally Logo Text | `RLY-L001` | None | `index.html` | Branding title label | Dynamic language text | `#RLY-L001-TXT` | `appData.logoText` |
| `RLY-MN001` | Menu | Dropdown Menu | `RLY-T001-LEFT` | `RLY-B001`, `RLY-B002`, `RLY-B003`, `RLY-B004`, `RLY-LC001`, `RLY-C001`, `RLY-C002` | `index.html` | Navigation links menu | Hidden/visible toggle | `#RLY-MN001` | N/A |
| `RLY-B001` | Link | Facebook Link | `RLY-MN001` | `RLY-B001-TXT` | `index.html` | External social link | Click opens Facebook | `#RLY-B001` | `appData.menuLinks.facebook` |
| `RLY-B001-TXT` | Text | Facebook Label Text | `RLY-B001` | None | `index.html` | Menu item label | Dynamic language text | `#RLY-B001-TXT` | `appData.menuLinks.facebook.label` |
| `RLY-B002` | Link | TikTok Link | `RLY-MN001` | `RLY-B002-TXT` | `index.html` | External social link | Click opens TikTok | `#RLY-B002` | `appData.menuLinks.tiktok` |
| `RLY-B002-TXT` | Text | TikTok Label Text | `RLY-B002` | None | `index.html` | Menu item label | Dynamic language text | `#RLY-B002-TXT` | `appData.menuLinks.tiktok.label` |
| `RLY-B003` | Link | Instagram Link | `RLY-MN001` | `RLY-B003-TXT` | `index.html` | External social link | Click opens Instagram | `#RLY-B003` | `appData.menuLinks.instagram` |
| `RLY-B003-TXT` | Text | Instagram Label Text | `RLY-B003` | None | `index.html` | Menu item label | Dynamic language text | `#RLY-B003-TXT` | `appData.menuLinks.instagram.label` |
| `RLY-B004` | Link | WhatsApp Group Link | `RLY-MN001` | `RLY-B004-TXT` | `index.html` | External group link | Click opens WhatsApp Group | `#RLY-B004` | `appData.menuLinks.whatsappGroup` |
| `RLY-B004-TXT` | Text | WhatsApp Group Label Text | `RLY-B004` | None | `index.html` | Menu item label | Dynamic language text | `#RLY-B004-TXT` | `appData.menuLinks.whatsappGroup.label` |
| `RLY-LC001` | Button | Attribution Menu Button | `RLY-MN001` | `RLY-LC001-TXT` | `index.html` | Attribution modal trigger | Click opens attribution modal | `#RLY-LC001` | N/A |
| `RLY-LC001-TXT` | Text | Attribution Label Text | `RLY-LC001` | None | `index.html` | Menu item label | Dynamic language text | `#RLY-LC001-TXT` | `appData.menuLinks.attribution.label` |
| `RLY-C001` | Link | Email Contact Link | `RLY-MN001` | `RLY-C001-TXT` | `index.html` | External email contact | Click triggers mailto | `#RLY-C001` | `appData.menuLinks.email` |
| `RLY-C001-TXT` | Text | Email Label Text | `RLY-C001` | None | `index.html` | Menu item label | Dynamic language text | `#RLY-C001-TXT` | `appData.menuLinks.email.label` |
| `RLY-C002` | Link | WhatsApp Contact Link | `RLY-MN001` | `RLY-C002-TXT` | `index.html` | External direct contact | Click opens wa.me | `#RLY-C002` | `appData.menuLinks.whatsappContact` |
| `RLY-C002-TXT` | Text | WhatsApp Label Text | `RLY-C002` | None | `index.html` | Menu item label | Dynamic language text | `#RLY-C002-TXT` | `appData.menuLinks.whatsappContact.label` |
| `RLY-MS001` | Banner | Announcement Link Banner | `RLY-T001-CENTER` | `RLY-MS001-TXT` | `index.html` | Center event banner | Click opens announcement URL | `#RLY-MS001` | `appData.announcement` |
| `RLY-MS001-TXT` | Text | Announcement Banner Text | `RLY-MS001` | None | `index.html` | Announcement body text | Dynamic language text | `#RLY-MS001-TXT` | `appData.announcement` |
| `RLY-S001` | Badge | Season Badge Display | `RLY-T001-RIGHT` | `RLY-S001-TXT` | `index.html` | Operating season indicator | Static display | `#RLY-S001` | `appData.season` |
| `RLY-S001-TXT` | Text | Season Badge Text | `RLY-S001` | None | `index.html` | Season date range | Text content update | `#RLY-S001-TXT` | `appData.season` |
| `RLY-N001` | Button | Notifications Trigger Button | `RLY-T001-RIGHT` | `RLY-N001-DOT` | `index.html` | Notifications modal trigger | Click opens `RLY-NM001` | `#RLY-N001` | N/A |
| `RLY-N001-DOT` | Icon | Notification Indicator Dot | `RLY-N001` | None | `index.html` | Visual unread dot | Visual indicator | `#RLY-N001-DOT` | N/A |
| `RLY-LG001` | Button | Language Switcher Button | `RLY-T001-RIGHT` | `RLY-LG001-TXT` | `index.html` | Language toggle trigger | Click calls `toggleLanguage()` | `#RLY-LG001` | N/A |
| `RLY-LG001-TXT` | Text | Language Switcher Label | `RLY-LG001` | None | `index.html` | Indicator text (AR/EN) | Dynamic language label | `#RLY-LG001-TXT` | N/A |
| `RLY-NP001` | Panel | Toast Notification Panel | `RLY-D001` | `RLY-NP001-HDR`, `RLY-NP001-LINK`, `RLY-NP001-BAR` | `index.html` | Auto-rotating toast popup | Timed toast popup | `#RLY-NP001` | `appData.notifications` |
| `RLY-NP001-HDR` | Header | Toast Panel Header | `RLY-NP001` | `RLY-NP001-BADGE`, `RLY-NP001-CLOSE` | `index.html` | Toast header layout | Layout container | `#RLY-NP001-HDR` | N/A |
| `RLY-NP001-BADGE` | Tag | Toast Badge Tag | `RLY-NP001-HDR` | None | `index.html` | Event badge tag | Dynamic language badge | `#RLY-NP001-BADGE` | `appData.notifications[].badge` |
| `RLY-NP001-CLOSE` | Button | Toast Close Button | `RLY-NP001-HDR` | None | `index.html` | Toast dismiss button | Click hides toast | `#RLY-NP001-CLOSE` | N/A |
| `RLY-NP001-LINK` | Link | Toast Body Link | `RLY-NP001` | `RLY-NP001-TITLE`, `RLY-NP001-DESC` | `index.html` | Toast clickable area | Click navigates to URL | `#RLY-NP001-LINK` | `appData.notifications[].url` |
| `RLY-NP001-TITLE` | Heading | Toast Title Heading | `RLY-NP001-LINK` | None | `index.html` | Notification title | Dynamic language title | `#RLY-NP001-TITLE` | `appData.notifications[].title` |
| `RLY-NP001-DESC` | Text | Toast Description Text | `RLY-NP001-LINK` | None | `index.html` | Notification details | Dynamic language description | `#RLY-NP001-DESC` | `appData.notifications[].description` |
| `RLY-NP001-BAR` | Container | Toast Progress Track | `RLY-NP001` | `RLY-NP001-PROG` | `index.html` | Toast progress bar track | Animation track | `#RLY-NP001-BAR` | N/A |
| `RLY-NP001-PROG` | Bar | Toast Progress Fill Bar | `RLY-NP001-BAR` | None | `index.html` | Timed fill bar | CSS transition progress fill | `#RLY-NP001-PROG` | N/A |
| `RLY-NM001` | Modal | Notifications List Modal | `RLY-D001` | `RLY-NM001-WIN` | `index.html` | Full notifications modal | Modal overlay container | `#RLY-NM001` | N/A |
| `RLY-NM001-WIN` | Window | Notifications Window | `RLY-NM001` | `RLY-NM001-CLOSE`, `RLY-NM001-TITLE`, `RLY-NM001-LIST` | `index.html` | Window frame container | Layout container | `#RLY-NM001-WIN` | N/A |
| `RLY-NM001-CLOSE` | Button | Notifications Close Button | `RLY-NM001-WIN` | None | `index.html` | Close modal button | Click hides `RLY-NM001` | `#RLY-NM001-CLOSE` | N/A |
| `RLY-NM001-TITLE` | Title | Notifications Window Title | `RLY-NM001-WIN` | None | `index.html` | Window header text | Dynamic language title | `#RLY-NM001-TITLE` | N/A |
| `RLY-NM001-LIST` | Container | Notifications Items List | `RLY-NM001-WIN` | `RLY-N101`, `RLY-N102`, `RLY-N103` | `index.html` | Dynamic list container | Rendered list target | `#RLY-NM001-LIST` | `appData.notifications` |
| `RLY-MAIN` | Main | Desktop Main Canvas | `RLY-D001` | `RLY-WC001` | `index.html` | Main interactive area | Primary workspace | `#RLY-MAIN` | N/A |
| `RLY-WC001` | Container | Primary Windows Container | `RLY-MAIN` | Active `RLY-W00x` | `index.html` | Render target for windows | Reusable window host | `#RLY-WC001` | N/A |
| `member-info-modal` | Modal | Member Info Modal | `RLY-D001` | `info-modal-window` | `index.html` | Reusable member info popup | Modal overlay container | `#member-info-modal` | N/A |
| `members-app-modal` | Modal | Members Directory App Modal | `RLY-D001` | `app-modal-window` | `index.html` | Reusable directory modal | Modal overlay container | `#members-app-modal` | N/A |
| `attribution-modal` | Modal | Attribution Modal | `RLY-D001` | `attribution-modal-window` | `index.html` | Reusable attribution modal | Modal overlay container | `#attribution-modal` | N/A |
| `RLY-K001` | Footer | Desktop Dock Footer | `RLY-D001` | `RLY-K001-SHELF` | `index.html` | Dock container shelf | Dock positioning shell | `#RLY-K001` | N/A |
| `RLY-K001-SHELF` | Shelf | Dock Shelf Container | `RLY-K001` | `RLY-F001`..`RLY-F006`, `RLY-K001-DIV`, `RLY-K002` | `index.html` | Glassmorphic dock shelf | 10-slot layout capacity | `#RLY-K001-SHELF` | N/A |
| `RLY-F001` | Button | PR Committee Folder | `RLY-K001-SHELF` | `RLY-ICO-F001`, `RLY-TP-F001` | `index.html` | Committee folder 01 shortcut | Click opens `RLY-W001` | `#RLY-F001` | `appData.folders[0]` |
| `RLY-ICO-F001` | Icon | PR Folder Icon | `RLY-F001` | None | `index.html` | Visual folder icon | Hover effect | `#RLY-ICO-F001` | N/A |
| `RLY-TP-F001` | Tooltip | PR Folder Tooltip | `RLY-F001` | None | `index.html` | Folder name tooltip | Hover tooltip display | `#RLY-TP-F001` | `appData.folders[0].name` |
| `RLY-F002` | Button | HR Committee Folder | `RLY-K001-SHELF` | `RLY-ICO-F002`, `RLY-TP-F002` | `index.html` | Committee folder 02 shortcut | Click opens `RLY-W002` | `#RLY-F002` | `appData.folders[1]` |
| `RLY-ICO-F002` | Icon | HR Folder Icon | `RLY-F002` | None | `index.html` | Visual folder icon | Hover effect | `#RLY-ICO-F002` | N/A |
| `RLY-TP-F002` | Tooltip | HR Folder Tooltip | `RLY-F002` | None | `index.html` | Folder name tooltip | Hover tooltip display | `#RLY-TP-F002` | `appData.folders[1].name` |
| `RLY-F003` | Button | Entrepreneurship Folder | `RLY-K001-SHELF` | `RLY-ICO-F003`, `RLY-TP-F003` | `index.html` | Committee folder 03 shortcut | Click opens `RLY-W003` | `#RLY-F003` | `appData.folders[2]` |
| `RLY-ICO-F003` | Icon | Entrepreneurship Folder Icon | `RLY-F003` | None | `index.html` | Visual folder icon | Hover effect | `#RLY-ICO-F003` | N/A |
| `RLY-TP-F003` | Tooltip | Entrepreneurship Tooltip | `RLY-F003` | None | `index.html` | Folder name tooltip | Hover tooltip display | `#RLY-TP-F003` | `appData.folders[2].name` |
| `RLY-F004` | Button | Operations Committee Folder | `RLY-K001-SHELF` | `RLY-ICO-F004`, `RLY-TP-F004` | `index.html` | Committee folder 04 shortcut | Click opens `RLY-W004` | `#RLY-F004` | `appData.folders[3]` |
| `RLY-ICO-F004` | Icon | Operations Folder Icon | `RLY-F004` | None | `index.html` | Visual folder icon | Hover effect | `#RLY-ICO-F004` | N/A |
| `RLY-TP-F004` | Tooltip | Operations Folder Tooltip | `RLY-F004` | None | `index.html` | Folder name tooltip | Hover tooltip display | `#RLY-TP-F004` | `appData.folders[3].name` |
| `RLY-F005` | Button | Marketing Committee Folder | `RLY-K001-SHELF` | `RLY-ICO-F005`, `RLY-TP-F005` | `index.html` | Committee folder 05 shortcut | Click opens `RLY-W005` | `#RLY-F005` | `appData.folders[4]` |
| `RLY-ICO-F005` | Icon | Marketing Folder Icon | `RLY-F005` | None | `index.html` | Visual folder icon | Hover effect | `#RLY-ICO-F005` | N/A |
| `RLY-TP-F005` | Tooltip | Marketing Folder Tooltip | `RLY-F005` | None | `index.html` | Folder name tooltip | Hover tooltip display | `#RLY-TP-F005` | `appData.folders[4].name` |
| `RLY-F006` | Button | Administration Folder | `RLY-K001-SHELF` | `RLY-ICO-F006`, `RLY-TP-F006` | `index.html` | Board folder 06 shortcut | Click opens `RLY-W006` | `#RLY-F006` | `appData.folders[5]` |
| `RLY-ICO-F006` | Icon | Administration Folder Icon | `RLY-F006` | None | `index.html` | Visual folder icon | Hover effect | `#RLY-ICO-F006` | N/A |
| `RLY-TP-F006` | Tooltip | Administration Tooltip | `RLY-F006` | None | `index.html` | Folder name tooltip | Hover tooltip display | `#RLY-TP-F006` | `appData.folders[5].name` |
| `RLY-K001-DIV` | Divider | Dock Vertical Divider | `RLY-K001-SHELF` | None | `index.html` | Visual separator line | Dock visual divider | `#RLY-K001-DIV` | N/A |
| `RLY-K002` | Link | Visit Me Browser Shortcut | `RLY-K001-SHELF` | `RLY-ICO-K002`, `RLY-TP-K002` | `index.html` | External portfolio shortcut | Click opens LinkedIn URL | `#RLY-K002` | `appData.dock.visitMe` |
| `RLY-ICO-K002` | Icon | Visit Me Icon | `RLY-K002` | None | `index.html` | Visual compass icon | Hover effect | `#RLY-ICO-K002` | N/A |
| `RLY-TP-K002` | Tooltip | Visit Me Tooltip | `RLY-K002` | None | `index.html` | Shortcut tooltip | Hover tooltip display | `#RLY-TP-K002` | `appData.dock.visitMe.label` |
| `RLY-W001` | Window | PR Committee Window | `RLY-WC001` | `RLY-TB-RLY-W001`, `RLY-BODY-RLY-W001` | Dynamic `js/app.js` | Committee window 01 frame | Primary window | `#RLY-W001` | `appData.folders[0]` |
| `RLY-W002` | Window | HR Committee Window | `RLY-WC001` | `RLY-TB-RLY-W002`, `RLY-BODY-RLY-W002` | Dynamic `js/app.js` | Committee window 02 frame | Primary window | `#RLY-W002` | `appData.folders[1]` |
| `RLY-W003` | Window | Entrepreneurship Window | `RLY-WC001` | `RLY-TB-RLY-W003`, `RLY-BODY-RLY-W003` | Dynamic `js/app.js` | Committee window 03 frame | Primary window | `#RLY-W003` | `appData.folders[2]` |
| `RLY-W004` | Window | Operations Window | `RLY-WC001` | `RLY-TB-RLY-W004`, `RLY-BODY-RLY-W004` | Dynamic `js/app.js` | Committee window 04 frame | Primary window | `#RLY-W004` | `appData.folders[3]` |
| `RLY-W005` | Window | Marketing Committee Window | `RLY-WC001` | `RLY-TB-RLY-W005`, `RLY-BODY-RLY-W005` | Dynamic `js/app.js` | Committee window 05 frame | Primary window | `#RLY-W005` | `appData.folders[4]` |
| `RLY-W006` | Window | Administration Board Window | `RLY-WC001` | `RLY-TB-RLY-W006`, `RLY-BODY-RLY-W006` | Dynamic `js/app.js` | Board window 06 frame | Primary window | `#RLY-W006` | `appData.folders[5]` |
| `RLY-J001` | Button | Join PR Committee | `RLY-HDR-RLY-W001` | None | Dynamic `js/app.js` | Committee application button | Click opens Join URL | `#RLY-J001` | `appData.folders[0].joinButton` |
| `RLY-A001` | Button | Members App PR | `RLY-HDR-RLY-W001` | None | Dynamic `js/app.js` | Directory app launcher | Click opens `RLY-AW001` modal | `#RLY-A001` | `appData.folders[0].app` |
| `RLY-MD001` | List | PR Directory List | `app-members-list` | `RLY-MDI-RLY-MD001-1`..`3` | Dynamic `js/app.js` | Members directory container | Separate directory list | `#RLY-MD001` | `appData.folders[0].membersDirectory` |
| `RLY-J002` | Button | Join HR Committee | `RLY-HDR-RLY-W002` | None | Dynamic `js/app.js` | Committee application button | Click opens Join URL | `#RLY-J002` | `appData.folders[1].joinButton` |
| `RLY-A002` | Button | Members App HR | `RLY-HDR-RLY-W002` | None | Dynamic `js/app.js` | Directory app launcher | Click opens `RLY-AW002` modal | `#RLY-A002` | `appData.folders[1].app` |
| `RLY-MD002` | List | HR Directory List | `app-members-list` | `RLY-MDI-RLY-MD002-1`..`3` | Dynamic `js/app.js` | Members directory container | Separate directory list | `#RLY-MD002` | `appData.folders[1].membersDirectory` |
| `RLY-J003` | Button | Join Entrepreneurship | `RLY-HDR-RLY-W003` | None | Dynamic `js/app.js` | Committee application button | Click opens Join URL | `#RLY-J003` | `appData.folders[2].joinButton` |
| `RLY-A003` | Button | Members App Entrepreneurship | `RLY-HDR-RLY-W003` | None | Dynamic `js/app.js` | Directory app launcher | Click opens `RLY-AW003` modal | `#RLY-A003` | `appData.folders[2].app` |
| `RLY-MD003` | List | Entrepreneurship Directory | `app-members-list` | `RLY-MDI-RLY-MD003-1`..`3` | Dynamic `js/app.js` | Members directory container | Separate directory list | `#RLY-MD003` | `appData.folders[2].membersDirectory` |
| `RLY-J004` | Button | Join Operations | `RLY-HDR-RLY-W004` | None | Dynamic `js/app.js` | Committee application button | Click opens Join URL | `#RLY-J004` | `appData.folders[3].joinButton` |
| `RLY-A004` | Button | Members App Operations | `RLY-HDR-RLY-W004` | None | Dynamic `js/app.js` | Directory app launcher | Click opens `RLY-AW004` modal | `#RLY-A004` | `appData.folders[3].app` |
| `RLY-MD004` | List | Operations Directory | `app-members-list` | `RLY-MDI-RLY-MD004-1`..`3` | Dynamic `js/app.js` | Members directory container | Separate directory list | `#RLY-MD004` | `appData.folders[3].membersDirectory` |
| `RLY-J005` | Button | Join Marketing | `RLY-HDR-RLY-W005` | None | Dynamic `js/app.js` | Committee application button | Click opens Join URL | `#RLY-J005` | `appData.folders[4].joinButton` |
| `RLY-A005` | Button | Members App Marketing | `RLY-HDR-RLY-W005` | None | Dynamic `js/app.js` | Directory app launcher | Click opens `RLY-AW005` modal | `#RLY-A005` | `appData.folders[4].app` |
| `RLY-MD005` | List | Marketing Directory | `app-members-list` | `RLY-MDI-RLY-MD005-1`..`3` | Dynamic `js/app.js` | Members directory container | Separate directory list | `#RLY-MD005` | `appData.folders[4].membersDirectory` |
| `RLY-STK-M001` | Card | Member Sticker 01 | `RLY-STK-CTR-RLY-W001` | `RLY-TP-M001`, `RLY-IMG-M001`, `RLY-TXT-NAME-M001` | Dynamic `js/app.js` | Head of PR Sticker | Click opens `RLY-I001` modal | `#RLY-STK-M001` | `appData.folders[0].members[0]` |
| `RLY-STK-M002` | Card | Member Sticker 02 (Afnan Rashed) | `RLY-STK-CTR-RLY-W001` | `RLY-TP-M002`, `RLY-IMG-M002`, `RLY-TXT-NAME-M002` | Dynamic `js/app.js` | Vice Head of PR Sticker | Click opens `RLY-I002` modal | `#RLY-STK-M002` | `appData.folders[0].members[1]` |
| `RLY-STK-M003` | Card | Member Sticker 03 | `RLY-STK-CTR-RLY-W001` | `RLY-TP-M003`, `RLY-IMG-M003`, `RLY-TXT-NAME-M003` | Dynamic `js/app.js` | Vice Head of PR Sticker | Click opens `RLY-I003` modal | `#RLY-STK-M003` | `appData.folders[0].members[2]` |
| `RLY-STK-M004` | Card | Member Sticker 04 (Eyad Mohamed) | `RLY-STK-CTR-RLY-W002` | `RLY-TP-M004`, `RLY-IMG-M004`, `RLY-TXT-NAME-M004` | Dynamic `js/app.js` | Head of HR Sticker | Click opens `RLY-I004` modal | `#RLY-STK-M004` | `appData.folders[1].members[0]` |
| `RLY-STK-M005` | Card | Member Sticker 05 (Eman Ayman) | `RLY-STK-CTR-RLY-W002` | `RLY-TP-M005`, `RLY-IMG-M005`, `RLY-TXT-NAME-M005` | Dynamic `js/app.js` | Vice Head of HR Sticker | Click opens `RLY-I005` modal | `#RLY-STK-M005` | `appData.folders[1].members[1]` |
| `RLY-STK-M006` | Card | Member Sticker 06 | `RLY-STK-CTR-RLY-W002` | `RLY-TP-M006`, `RLY-IMG-M006`, `RLY-TXT-NAME-M006` | Dynamic `js/app.js` | Vice Head of HR Sticker | Click opens `RLY-I006` modal | `#RLY-STK-M006` | `appData.folders[1].members[2]` |
| `RLY-STK-M007` | Card | Member Sticker 07 (Roba Hesham) | `RLY-STK-CTR-RLY-W003` | `RLY-TP-M007`, `RLY-IMG-M007`, `RLY-TXT-NAME-M007` | Dynamic `js/app.js` | Head of Entrepreneurship | Click opens `RLY-I007` modal | `#RLY-STK-M007` | `appData.folders[2].members[0]` |
| `RLY-STK-M008` | Card | Member Sticker 08 (Basmala Mohamed) | `RLY-STK-CTR-RLY-W003` | `RLY-TP-M008`, `RLY-IMG-M008`, `RLY-TXT-NAME-M008` | Dynamic `js/app.js` | Vice Head of Entrepreneurship | Click opens `RLY-I008` modal | `#RLY-STK-M008` | `appData.folders[2].members[1]` |
| `RLY-STK-M009` | Card | Member Sticker 09 (Fatma Osama) | `RLY-STK-CTR-RLY-W003` | `RLY-TP-M009`, `RLY-IMG-M009`, `RLY-TXT-NAME-M009` | Dynamic `js/app.js` | Vice Head of Entrepreneurship | Click opens `RLY-I009` modal | `#RLY-STK-M009` | `appData.folders[2].members[2]` |
| `RLY-STK-M010` | Card | Member Sticker 10 (Nour Farouk) | `RLY-STK-CTR-RLY-W004` | `RLY-TP-M010`, `RLY-IMG-M010`, `RLY-TXT-NAME-M010` | Dynamic `js/app.js` | Head of Operations | Click opens `RLY-I010` modal | `#RLY-STK-M010` | `appData.folders[3].members[0]` |
| `RLY-STK-M011` | Card | Member Sticker 11 | `RLY-STK-CTR-RLY-W004` | `RLY-TP-M011`, `RLY-IMG-M011`, `RLY-TXT-NAME-M011` | Dynamic `js/app.js` | Vice Head of Operations | Click opens `RLY-I011` modal | `#RLY-STK-M011` | `appData.folders[3].members[1]` |
| `RLY-STK-M012` | Card | Member Sticker 12 | `RLY-STK-CTR-RLY-W004` | `RLY-TP-M012`, `RLY-IMG-M012`, `RLY-TXT-NAME-M012` | Dynamic `js/app.js` | Vice Head of Operations | Click opens `RLY-I012` modal | `#RLY-STK-M012` | `appData.folders[3].members[2]` |
| `RLY-STK-M013` | Card | Member Sticker 13 (Ahmed Bin Salama) | `RLY-STK-CTR-RLY-W005` | `RLY-TP-M013`, `RLY-IMG-M013`, `RLY-TXT-NAME-M013` | Dynamic `js/app.js` | Head of Marketing | Click opens `RLY-I013` modal | `#RLY-STK-M013` | `appData.folders[4].members[0]` |
| `RLY-STK-M014` | Card | Member Sticker 14 (Abdulrahman Sabri) | `RLY-STK-CTR-RLY-W005` | `RLY-TP-M014`, `RLY-IMG-M014`, `RLY-TXT-NAME-M014` | Dynamic `js/app.js` | Vice Head of Marketing | Click opens `RLY-I014` modal | `#RLY-STK-M014` | `appData.folders[4].members[1]` |
| `RLY-STK-M015` | Card | Member Sticker 15 (Menna Shawky) | `RLY-STK-CTR-RLY-W005` | `RLY-TP-M015`, `RLY-IMG-M015`, `RLY-TXT-NAME-M015` | Dynamic `js/app.js` | Vice Head of Marketing | Click opens `RLY-I015` modal | `#RLY-STK-M015` | `appData.folders[4].members[2]` |
| `RLY-STK-M016` | Card | Board Sticker 16 (Ahmed Shuaib) | `RLY-STK-CTR-RLY-W006` | `RLY-TP-M016`, `RLY-IMG-M016`, `RLY-TXT-NAME-M016`, `RLY-TXT-TITLE-M016` | Dynamic `js/app.js` | President Sticker | Click opens `RLY-I016` modal | `#RLY-STK-M016` | `appData.folders[5].members[0]` |
| `RLY-STK-M017` | Card | Board Sticker 17 (Mohamed Abdulfattah) | `RLY-STK-CTR-RLY-W006` | `RLY-TP-M017`, `RLY-IMG-M017`, `RLY-TXT-NAME-M017`, `RLY-TXT-TITLE-M017` | Dynamic `js/app.js` | Vice President Sticker | Click opens `RLY-I017` modal | `#RLY-STK-M017` | `appData.folders[5].members[1]` |
| `RLY-STK-M018` | Card | Board Sticker 18 (Afnan Barakat) | `RLY-STK-CTR-RLY-W006` | `RLY-TP-M018`, `RLY-IMG-M018`, `RLY-TXT-NAME-M018`, `RLY-TXT-TITLE-M018` | Dynamic `js/app.js` | Coordinator Sticker | Click opens `RLY-I018` modal | `#RLY-STK-M018` | `appData.folders[5].members[2]` |
| `RLY-STK-M019` | Card | Board Sticker 19 (Simone Gamal) | `RLY-STK-CTR-RLY-W006` | `RLY-TP-M019`, `RLY-IMG-M019`, `RLY-TXT-NAME-M019`, `RLY-TXT-TITLE-M019` | Dynamic `js/app.js` | Coordinator Sticker | Click opens `RLY-I019` modal | `#RLY-STK-M019` | `appData.folders[5].members[3]` |
| `RLY-I001-WINDOW`..`RLY-I019-WINDOW` | Window | Active Member Info Card | `member-info-modal` | `RLY-Ixxx-NAME`..`CONTACT` | Dynamic `js/app.js` | Person-specific info window state | Dynamic info container | `[id$="-WINDOW"]` | `appData.folders[].members[]` |
