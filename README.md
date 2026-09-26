# Rally Board Interactive Desktop

## Project
**Rally Board Interactive Desktop** is a lightweight static website that presents Rally's board and committees through a playful, polished, Mac-inspired desktop experience.

## Purpose
The site serves as an engaging organizational overview for Rally members, prospective applicants, and visitors. Rather than presenting static list pages, users navigate committees and board profiles by opening interactive desktop folders, windows, and member info windows.

## Experience
The interface feels like exploring Rally's organization through a mini interactive operating system desktop:
- Desktop background with 6 interactive folders (5 Committee Folders + 1 Board / Managers Folder).
- Top Bar containing Rally branding, season display, central announcement, bilingual language switcher (English/Arabic), and interactive notification panel.
- Committee Windows with member sticker representations, info cards, application/join buttons, and a Committee Members app.
- Bottom Dock featuring quick shortcuts (e.g., Instagram).

## Technology
```text
HTML
CSS
Vanilla JavaScript
Static data files (ES Modules)
Static assets
GitHub
Cloudflare Pages
```

## Current Status
> Repository architecture initialized. Application implementation has not started.

## Repository Structure
```text
rally-board/
│
├── README.md               # Top-level project documentation (this file)
├── PROJECT_MAP.md          # Architectural hierarchy & component map
├── ID_REGISTRY.md          # Master registry of element IDs (RLY-XXXX)
├── DEVELOPMENT_PLAN.md     # 16-phase implementation roadmap
├── CHANGELOG.md            # Version release history
├── CONTRIBUTING.md         # Guidelines for repository maintainers
├── AI_EDITING_RULES.md     # Rules for future AI-assisted development
├── ASSET_GUIDELINES.md     # Specs & naming rules for media assets
├── CONTENT_GUIDELINES.md   # Guidelines for integrating real bilingual data
│
├── css/                    # Stylesheets & CSS custom properties (README only)
├── js/                     # Client-side JavaScript modules (README only)
│
├── data/                   # Data modules & bilingual schema templates
│   ├── README.md
│   ├── site.js             # Season, top bar message, language settings
│   ├── committees.js       # Committee & Board metadata
│   ├── members.js          # Member profiles & bio data
│   ├── notifications.js    # Top bar notifications feed
│   └── links.js            # External social & contact links
│
├── assets/                 # Organized asset directories (READMEs only)
│   ├── README.md
│   ├── people/             # Member photos & transparent stickers
│   ├── committees/         # Committee artwork & illustrations
│   ├── icons/              # UI interface icons
│   ├── logos/              # Rally brand marks & logos
│   ├── backgrounds/        # Desktop wallpapers
│   └── textures/           # Paper & grain texture overlays
│
└── docs/                   # Detailed architectural documentation
    ├── README.md
    ├── ARCHITECTURE.md     # System & technology stack architecture
    ├── UI_STRUCTURE.md     # Interface component hierarchy
    ├── DATA_MODEL.md       # Data schema & relationship definitions
    └── DEPLOYMENT.md       # Cloudflare Pages deployment guidelines
```

## Development Stages
```text
Repository Architecture (Phase 1 - Current)
→ Desktop Shell (Phase 2)
→ Top Bar (Phase 3)
→ Folder System (Phase 4)
→ Window System (Phase 5)
→ Committee System (Phase 6)
→ Member Sticker + Info System (Phase 7)
→ Join + External Link System (Phase 8)
→ Members App (Phase 9)
→ Notification System (Phase 10)
→ Language System (Phase 11)
→ Responsive Design (Phase 12)
→ Demo Content (Phase 13)
→ Real Content Integration (Phase 14)
→ QA (Phase 15)
→ Deployment (Phase 16)
```

## Important Documentation
- [PROJECT_MAP.md](PROJECT_MAP.md) — Visual hierarchy & component distribution.
- [ID_REGISTRY.md](ID_REGISTRY.md) — Master ID registry table (`RLY-XXXX`).
- [DEVELOPMENT_PLAN.md](DEVELOPMENT_PLAN.md) — Roadmap for execution.
- [AI_EDITING_RULES.md](AI_EDITING_RULES.md) — Rules for AI coding assistants.
- [ASSET_GUIDELINES.md](ASSET_GUIDELINES.md) — Media asset specs.
- [CONTENT_GUIDELINES.md](CONTENT_GUIDELINES.md) — Data entry standards.
- [docs/](docs/) — System architecture and model docs.
