# Architectural Overview

## 1. System Architecture
The Rally Board Interactive Desktop is built as a pure **static client-side web application**. It contains no backend application server, no database, no build tools, and no server-side execution.

```text
┌─────────────────────────────────────────────────────────────┐
│                      Client Browser                         │
│                                                             │
│   ┌──────────────────┐  ┌────────────────────────────────┐  │
│   │   index.html     │  │   css/main.css                 │  │
│   │   (HTML Shell)   │  │   (Design Tokens & Layout)     │  │
│   └────────┬─────────┘  └───────────────┬────────────────┘  │
│            │                            │                   │
│            ▼                            ▼                   │
│   ┌──────────────────────────────────────────────────────┐  │
│   │   js/app.js (ES Modules Manager)                     │  │
│   └────────┬────────────────────────────┬────────────────┘  │
│            │                            │                   │
│            ▼                            ▼                   │
│   ┌──────────────────┐        ┌──────────────────┐          │
│   │  data/*.js       │        │  assets/*        │          │
│   │  (Static Data)   │        │  (Media Files)   │          │
│   └──────────────────┘        └──────────────────┘          │
└──────────────────────────────┬──────────────────────────────┘
                               │
                               ▼
                ┌──────────────────────────────┐
                │ Cloudflare Pages CDN Hosting │
                └──────────────────────────────┘
```

## 2. Technical Stack
- **Structure**: Semantic HTML5 markup.
- **Styling**: Standard CSS3 with CSS Variables (design tokens), Flexbox/Grid, and backdrop filters for glassmorphism effects.
- **Logic**: Vanilla JavaScript utilizing Native ES Modules (`import`/`export`).
- **Data Layer**: Modular JavaScript objects exported from `data/*.js`.
- **Assets**: Optimized WebP/PNG raster graphics and inline/file SVG icons.
- **Hosting**: Cloudflare Pages continuous static deployment directly from GitHub repository commits.

## 3. Core Principles
1. **Zero Backend Overhead**: Application runs entirely in the user's browser.
2. **Data-Driven UI**: Content changes require modifying data files in `data/`, never application templates or UI logic.
3. **Stable Identifiers**: Elements are queried and manipulated using immutable `RLY-XXXX` IDs registered in `ID_REGISTRY.md`.
4. **Bilingual Support**: All text fields support dual English (`EN`) and Arabic (`AR`) values with RTL/LTR visual switching.
