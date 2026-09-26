# Data Model

## 1. Site Configuration

`data/site.js` is the authority for global site-level content.

Conceptual structure:

```text
siteConfig
├── season
│   ├── id = RLY-S001
│   ├── labelEN
│   └── labelAR
├── centerMessage
│   ├── id = RLY-MS001
│   ├── textEN
│   ├── textAR
│   ├── url
│   └── active
└── language
    ├── id = RLY-LG001
    ├── defaultLanguage
    └── supportedLanguages
```

## 2. Organization / Committee Model

`data/committees.js` describes exactly six top-level desktop groups:

```text
5 Committees
+
1 Board / Managers group
```

Each committee record conceptually contains:

```text
group
├── id              → folder ID
├── windowId        → primary window ID
├── type            → committee | board
├── nameEN
├── nameAR
├── descriptionEN
├── descriptionAR
├── artworkAsset
├── memberIds[]
└── committee-only fields
    ├── joinButton
    │   ├── id
    │   ├── labelEN
    │   ├── labelAR
    │   └── applicationUrl
    └── membersApp
        ├── id
        ├── windowId
        ├── titleEN
        └── titleAR
```

The Board / Managers record uses the same high-level group model but does not require `joinButton` or `membersApp` in the current specification.

## 3. Member / Manager Model

`data/members.js` contains one authoritative record per person.

Conceptual structure:

```text
person
├── id
├── infoWindowId
├── groupId
├── nameEN
├── nameAR
├── positionEN
├── positionAR
├── imageAsset
├── bioEN
├── bioAR
└── socialLinks
    ├── instagram
    ├── linkedIn
    ├── whatsApp
    └── email
```

Committee member IDs: `RLY-M001`–`RLY-M015`

Board / Manager IDs: `RLY-M101`–`RLY-M104`

Corresponding information windows:

- Committee: `RLY-I001`–`RLY-I015`
- Board / Managers: `RLY-I101`–`RLY-I104`

## 4. Notification Model

`data/notifications.js` supports:

```text
Minimum active notifications = 1
Maximum active notifications = 5
Planned slots = RLY-N101–RLY-N105
```

Conceptual record:

```text
notification
├── id
├── titleEN
├── titleAR
├── descriptionEN
├── descriptionAR
├── url
├── iconAsset
├── dateEvent
└── active
```

The implementation must derive behavior from the current active array length. It must not assume that five records always exist.

## 5. External Links Model

`data/links.js` is the central authority for global social/contact links.

Global links:

- Facebook → RLY-B001
- TikTok → RLY-B002
- Instagram → RLY-B003
- WhatsApp Group → RLY-B004
- Email → RLY-C001
- WhatsApp Contact → RLY-C002
- Attribution → RLY-LC001
- Dock Instagram shortcut → RLY-K002

Committee application URLs live with their owning committee records so the Join Button remains coupled to the correct application destination.

## 6. Relationship Model

```text
Desktop
├── Folder
│   └── Primary Window
│       ├── Members
│       │   └── Info Window
│       ├── Join Button       [committee only]
│       └── Members App       [committee only]
│           └── Members Window
└── Dock
    └── Instagram
```

## 7. Bilingual Rule

Every user-facing content field that is displayed in the interface must provide both language variants where applicable:

```javascript
{
  textEN: "",
  textAR: ""
}
```

The absence of real content is represented by empty values, not guessed content.

## 8. Source of Truth

```text
Site global content      → data/site.js
Groups / committees      → data/committees.js
People                   → data/members.js
Notifications            → data/notifications.js
Global social/contact    → data/links.js
```

Do not duplicate authoritative values across data files, templates, or documentation.
