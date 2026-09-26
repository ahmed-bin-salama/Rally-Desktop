# UI Component Hierarchy

This document details the functional components, their parent elements, assigned IDs, and data binding responsibilities.

| Component Name | Parent Element | Expected ID Range | Data Driven? | Interactive Behavior | Purpose |
|---|---|---|---|---|---|
| **Desktop** | Root (`body`) | `RLY-D001`, `RLY-D002` | Partial | Click backdrop to deselect/close active overlays | Main canvas container |
| **TopBar** | `RLY-D001` | `RLY-T001` | No | Fixed header navigation container | Holds logo, center message, language, notifications |
| **RallyLogo** | `RLY-T001` | `RLY-L001` | No | Click triggers Rally dropdown menu | Brand mark |
| **RallyMenu** | `RLY-T001` | `RLY-MN001` | Yes (`links.js`) | Dropdown menu toggle | Quick access to social links and contacts |
| **Announcement** | `RLY-T001` | `RLY-MS001` | Yes (`site.js`) | Click opens linked external announcement URL | Banner message in top bar center |
| **SeasonDisplay** | `RLY-T001` | `RLY-S001` | Yes (`site.js`) | Static display | Displays active Rally season label |
| **LanguageSwitch**| `RLY-T001` | `RLY-LG001` | Yes (`site.js`) | Toggle EN / AR | Toggles application locale and text direction |
| **NotificationControl** | `RLY-T001` | `RLY-N001` | Yes (`notifications.js`) | Toggle panel visibility | Bell icon with unread count badge |
| **NotificationPanel** | `RLY-T001` | `RLY-NP001` | Yes (`notifications.js`) | Scrollable list | Renders active notification feed items |
| **Folder** | `RLY-D002` | `RLY-F001` - `RLY-F006` | Yes (`committees.js`) | Click / Double-click opens window | Represents a committee or board group on desktop |
| **Window** | `RLY-D002` | `RLY-W001` - `RLY-W006` | Yes (`committees.js`) | Drag, focus, z-index stack, close | Committee application window shell |
| **MemberSticker** | `RLY-W001`..`RLY-W006` | `RLY-M001` - `RLY-M104` | Yes (`members.js`) | Click opens Member Info Card | Interactive photo cutout sticker of a member |
| **MemberInfoWindow**| `RLY-D002` | `RLY-I001` - `RLY-I104` | Yes (`members.js`) | Close, focus | Card showing member detail, bio, and social handles |
| **JoinButton** | `RLY-W001`..`RLY-W005` | `RLY-J001` - `RLY-J005` | Yes (`committees.js`) | Click navigates to Google Form / Application link | Primary action CTA inside committee window |
| **MembersApp** | `RLY-W001`..`RLY-W006` | `RLY-A001` - `RLY-A006` | Yes (`committees.js`) | Click opens full members directory app | Shortcut to committee member roster view |
| **MembersWindow** | `RLY-D002` | `RLY-AW001` - `RLY-AW006` | Yes (`members.js`) | Scrollable list view | Full committee member roster listing |
| **Dock** | `RLY-D001` | `RLY-K001` | No | Fixed bottom bar | Dock container holding persistent shortcuts |
| **DockShortcut** | `RLY-K001` | `RLY-K002` | Yes (`links.js`) | Click navigates to external channel | Direct link shortcut (e.g. Instagram) |
