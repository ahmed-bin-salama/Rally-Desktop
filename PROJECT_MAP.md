# Project Map

## Directory Structure

```text
/
├── index.html                  # Main application HTML entrypoint
├── css/
│   └── main.css                # Central design system, desktop theme & sticker styles
├── js/
│   └── app.js                  # Main Vanilla JS interactive application logic
├── data/
│   └── app-data.js             # Central data layer (bilingual strings, members, URLs)
├── assets/
│   ├── backgrounds/            # Desktop wallpaper texture/image
│   ├── logos/                  # Rally brand graphics & icons
│   ├── people/                 # Member cutout transparent stickers/silhouettes
│   ├── committees/             # Committee artwork graphics
│   └── icons/                  # Local UI SVG icons
├── docs/                       # Project documentation
├── ID_REGISTRY.md              # Registry of element IDs (RLY-*)
├── PROJECT_MAP.md              # System map & structure overview
├── AI_EDITING_RULES.md         # Instructions and safety rules for AI editing
├── ASSET_GUIDELINES.md         # Guidelines for images and media formats
├── CONTENT_GUIDELINES.md       # Data schema & bilingual text rules
└── DEVELOPMENT_PLAN.md         # Project build plan and completion steps
```

## Architecture Principles

1. **Separation of Concerns:**
   - Structure (`index.html`)
   - Styling (`css/main.css`)
   - Behavior (`js/app.js`)
   - Content (`data/app-data.js`)
   - Elements (`ID_REGISTRY.md`)

2. **Single Active Window Model:**
   - Opening a folder opens its main window (`RLY-W001`–`RLY-W006`) and closes any currently active primary window.

3. **Data-Driven UI:**
   - Content fields (titles, member info, URLs, notifications, languages) are rendered dynamically from `data/app-data.js`.
