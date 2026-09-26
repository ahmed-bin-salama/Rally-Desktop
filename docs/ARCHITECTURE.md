# Technical Architecture

High-level architecture specification for the **Rally Board Interactive Desktop** project.

---

## Technical Stack Overview

```text
Static Web Technology
├── HTML (Structural Shell & Viewport Containers)
├── CSS (Custom Properties / Design Tokens & Modular Layouts)
├── Vanilla JavaScript (ES Module State Management & Window Interactions)
├── Data Modules (Client-side JS objects with EN/AR content)
├── Static Assets (Optimized WebP/SVG images, logos, icons)
├── GitHub (Source Control Repository)
└── Cloudflare Pages (Automated Global Static CDN Deployment)
```

---

## Architectural Principles

1. **Static Client-Side Execution**:
   - The application runs entirely within the user's web browser.
   - No backend servers, databases, or API calls are required.
   - Zero dynamic runtime server processing.

2. **Decoupled Architecture**:
   - **Content Layer** (`data/*.js`): Pure JS objects exporting bilingual strings and IDs.
   - **Presentation Layer** (`css/*.css`): Layout, window styling, desktop grid, and responsive design.
   - **Behavior Layer** (`js/*.js`): Event listeners, window manager, z-index depth management, language toggle logic.
   - **Asset Layer** (`assets/`): Visual media assets separated by type.

3. **Performance & Lightweight Footprint**:
   - No heavy frameworks (React, Vue, Tailwind) or bundle dependencies.
   - Native ES module imports (`import { committees } from '../data/committees.js'`).
   - Fast load times under 1.5 seconds on mobile 4G networks.

4. **Accessibility & Localization**:
   - Full support for `dir="ltr"` (English) and `dir="rtl"` (Arabic).
   - High contrast UI controls and keyboard navigation support for window controls.
