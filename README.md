# Rally Board Interactive Desktop

## Project

**Rally Board Interactive Desktop** is a lightweight static web experience that presents Rally's board and committees through a playful, polished desktop metaphor inspired by macOS.

It is **not** a real operating system simulation. The desktop language is used as a presentation and navigation model for Rally's organizational structure.

## Purpose

The project is intended to make Rally's organizational structure easier to explore than a conventional committee or board page while remaining technically simple, fast, and maintainable.

The future experience will let a visitor understand the organization through:

- a Rally-branded desktop
- six folders representing five committees and the Board / Managers group
- reusable committee/board windows
- member sticker photography and lightweight profile windows
- committee application links
- a simple members directory app
- announcements and notifications
- EN / AR language switching
- a minimal Instagram dock shortcut

## Technology

```text
HTML
CSS
Vanilla JavaScript
Static data modules
Static media assets
GitHub
Cloudflare Pages
```

No backend, database, authentication, CMS, API, or application framework is required by the current project definition.

## Current Status

> **Phase 1 — Repository Architecture initialized. Application implementation is intentionally absent from this architecture branch.**

This branch contains the planning foundation only: project documentation, ID governance, data schemas, asset organization, and implementation guidance.

## Repository Structure

```text
rally-board/
│
├── README.md
├── PROJECT_MAP.md
├── ID_REGISTRY.md
├── DEVELOPMENT_PLAN.md
├── CHANGELOG.md
├── CONTRIBUTING.md
├── AI_EDITING_RULES.md
├── ASSET_GUIDELINES.md
├── CONTENT_GUIDELINES.md
│
├── css/
│   └── README.md
│
├── js/
│   └── README.md
│
├── data/
│   ├── README.md
│   ├── site.js
│   ├── committees.js
│   ├── members.js
│   ├── notifications.js
│   └── links.js
│
├── assets/
│   ├── README.md
│   ├── people/
│   ├── committees/
│   ├── icons/
│   ├── logos/
│   ├── backgrounds/
│   └── textures/
│
└── docs/
    ├── README.md
    ├── ARCHITECTURE.md
    ├── UI_STRUCTURE.md
    ├── DATA_MODEL.md
    └── DEPLOYMENT.md
```

## Documentation Map

- [PROJECT_MAP.md](PROJECT_MAP.md) — the main future application hierarchy, ownership map, and ID relationships.
- [ID_REGISTRY.md](ID_REGISTRY.md) — the master registry of stable Rally IDs.
- [DEVELOPMENT_PLAN.md](DEVELOPMENT_PLAN.md) — the ordered implementation roadmap.
- [AI_EDITING_RULES.md](AI_EDITING_RULES.md) — rules for safe AI-assisted changes.
- [ASSET_GUIDELINES.md](ASSET_GUIDELINES.md) — asset formats, naming, preparation, and placement.
- [CONTENT_GUIDELINES.md](CONTENT_GUIDELINES.md) — rules for integrating supplied real content.
- [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) — technical architecture.
- [docs/UI_STRUCTURE.md](docs/UI_STRUCTURE.md) — future component hierarchy.
- [docs/DATA_MODEL.md](docs/DATA_MODEL.md) — future data relationships and schemas.
- [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) — intended Cloudflare Pages deployment model.

## Development Stages

```text
Repository Architecture
→ Desktop Shell
→ Top Bar
→ Folder System
→ Window System
→ Committee / Board System
→ Member Sticker + Info System
→ Join + External Links
→ Members App
→ Notifications
→ Language System
→ Responsive Design
→ Demo Content
→ Real Content Integration
→ QA
→ Deployment
```

## Scope Boundary for Phase 1

This phase intentionally does **not** contain:

- application HTML screens
- production CSS
- application JavaScript
- window manager logic
- notification logic
- language switching logic
- real Rally member/committee content
- real Rally external links
- production deployment

Those belong to later implementation phases.
