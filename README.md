# Rally Board Interactive Desktop

**Rally Board Interactive Desktop** is a lightweight static website that presents Rally's board and committees through a playful, polished, Mac-inspired desktop experience.

> **Note**: This site is **not a real operating system simulation** and does not behave like a full desktop OS. It is a focused interactive showcase designed for exploring Rally's organization.

---

## 1. Purpose

The project exists to provide an engaging, memorable, and interactive medium for members, recruits, and visitors to explore Rally's board, various committees, active announcements, and application/join forms.

---

## 2. Intended User Experience

Visitors land on a clean, Mac-inspired desktop containing:
- **Rally Top Bar**: Branded header with Rally logo, dropdown menu, center announcement, season indicator, bilingual language switch (EN/AR), and notification drawer.
- **Desktop Grid**: Six interactive folders representing 5 Committees and 1 Board / Managers group.
- **Committee Windows**: Opening a folder reveals window chrome with committee artwork, interactive member photo stickers, and application buttons.
- **Member Info Cards**: Clicking a sticker brings up a card with member photo, role, and bilingual bio.
- **Bottom Dock**: macOS-style dock with shortcuts to Instagram and key channels.

---

## 3. Technology Stack

- **HTML5**: Semantic structural markup placeholder templates
- **CSS3**: Custom design tokens, glassmorphism, responsive desktop layout
- **Vanilla JavaScript (ES Modules)**: Modular state, window management, event routing
- **Static Data Files**: Modular JS configuration objects (`/data`)
- **Static Assets**: WebP/PNG transparent graphics and SVG icons
- **GitHub**: Version control and source code management
- **Cloudflare Pages**: High-performance static web hosting and deployment

---

## 4. Current Status

> **Repository architecture initialized. Application implementation has not started.**

All structural documentation, ID system registries, data schemas, and asset guidelines have been established. No application screens, CSS styling, or JavaScript logic have been built yet.

---

## 5. Repository Structure

```text
rally-board/
│
├── README.md                 # Project overview and entry point
├── PROJECT_MAP.md            # Structural hierarchy and interaction flow
├── ID_REGISTRY.md            # Master table of stable RLY-XXXX IDs
├── DEVELOPMENT_PLAN.md       # 16-phase implementation roadmap
├── CHANGELOG.md              # Version release history
├── CONTRIBUTING.md           # Maintenance and contribution guidelines
├── AI_EDITING_RULES.md       # Strict constraints for AI coding agents
├── ASSET_GUIDELINES.md       # Media specs and kebab-case naming rules
├── CONTENT_GUIDELINES.md     # Guidelines for real content integration
│
├── css/                      # CSS stylesheets (README guidelines)
├── js/                       # Vanilla JS ES modules (README guidelines)
├── data/                     # Data architecture (site, committees, members, etc.)
├── assets/                   # Static media subfolders (people, logos, icons, etc.)
└── docs/                     # Technical documentation (Architecture, UI, Data, Deployment)
```

---

## 6. Development Stages

```text
Repository Architecture (Current)
  ↓
Desktop Shell
  ↓
Top Bar
  ↓
Folder System
  ↓
Window System
  ↓
Committee System
  ↓
Member Sticker + Info System
  ↓
Join + External Link System
  ↓
Members App
  ↓
Notification System
  ↓
Language System (Bilingual EN/AR)
  ↓
Responsive Design
  ↓
Demo Content
  ↓
Real Content Integration
  ↓
QA & Testing
  ↓
Cloudflare Deployment
```

---

## 7. Important Documentation Links

- [PROJECT_MAP.md](PROJECT_MAP.md) — Visual and interaction hierarchy
- [ID_REGISTRY.md](ID_REGISTRY.md) — Master table of stable component IDs
- [DEVELOPMENT_PLAN.md](DEVELOPMENT_PLAN.md) — Roadmap and phase criteria
- [AI_EDITING_RULES.md](AI_EDITING_RULES.md) — Mandatory AI maintenance rules
- [ASSET_GUIDELINES.md](ASSET_GUIDELINES.md) — Asset formats, optimization, and naming
- [CONTENT_GUIDELINES.md](CONTENT_GUIDELINES.md) — Data entry and bilingual content rules
- [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) — Tech stack and runtime architecture
- [docs/UI_STRUCTURE.md](docs/UI_STRUCTURE.md) — Component breakdown
- [docs/DATA_MODEL.md](docs/DATA_MODEL.md) — Data schema and relationships
- [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) — Cloudflare Pages deployment guide
