# Technical Architecture

## Current Phase

This repository is the **architecture foundation** for Rally Board Interactive Desktop.

The current foundation branch intentionally contains no application entrypoint, no production stylesheet, and no application JavaScript. Those are implementation-phase concerns.

## Target Technology Stack

```text
Static Web
├── HTML
├── CSS
├── Vanilla JavaScript
├── Static JS data modules
├── SVG / PNG / WebP assets
├── GitHub
└── Cloudflare Pages
```

## Runtime Model

The future website is intended to run entirely in the browser.

```text
GitHub
  ↓
Static files
  ↓
Browser
  ├── HTML structure
  ├── CSS presentation
  ├── JavaScript behavior/state
  └── Data + assets
```

There is no planned:

- backend
- database
- authentication system
- CMS
- API layer
- server-side rendering
- framework runtime

## Separation of Concerns

| Layer | Responsibility | Location |
|---|---|---|
| Structure | Semantic page/application shell | Future `index.html` |
| Presentation | Layout, typography, design tokens, responsive behavior | `css/` |
| Behavior | Rendering, interaction, transient UI state | `js/` |
| Data | Rally content and stable content references | `data/` |
| Assets | Images, icons, backgrounds, textures | `assets/` |
| Documentation | Architecture, governance, maintenance rules | Root Markdown + `docs/` |

## Data-Driven Principle

The future implementation should render reusable components from data.

```text
Data
  ↓
Component Template
  ↓
Rally ID
  ↓
Rendered Instance
```

Committee differences should be represented by data, not duplicated component implementations.

## Window Model

Use one simplified window manager for the future application.

Required model:

- one primary committee/board window active at a time
- open a different folder → replace the active primary window
- centered responsive window
- approximately square on desktop
- not resizable
- not maximizable
- not draggable in the current specification
- reusable window chrome/template

Member information windows use a separate single-active model.

## Localization Model

The target application supports:

```text
EN → LTR
AR → RTL
```

Language content is stored together in data records. The future implementation maintains one global language state and may persist the selected language in localStorage.

## Performance Model

Keep the final implementation lightweight:

- native browser APIs where sufficient
- no unnecessary libraries
- optimized media
- restrained animation
- no video background
- no heavy framework/runtime

## Accessibility Model

The future implementation must include:

- semantic controls
- keyboard-accessible interactive elements
- visible focus states
- meaningful alt text for informative images
- empty alt for decorative imagery
- sufficient contrast
- `prefers-reduced-motion` handling

## Maintenance Model

The project is designed to be editable by Rally ID:

```text
Request: Modify RLY-J004
        ↓
Locate registry entry
        ↓
Locate authoritative data/component
        ↓
Make surgical change
        ↓
Preserve unrelated IDs and behavior
        ↓
Update documentation when structure changes
```

## Out of Scope for This Phase

No implementation should be added to this architecture phase for:

- desktop UI
- application screens
- CSS visual treatment
- JavaScript behavior
- animations
- window manager
- notification rotation
- language switching
- real Rally content
- deployment
