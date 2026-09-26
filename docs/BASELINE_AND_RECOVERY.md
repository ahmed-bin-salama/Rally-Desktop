# Baseline and Recovery Reference

## 1. Baseline Identity

* **Project Name:** Rally Board Interactive Desktop
* **Repository:** `https://github.com/ahmed-bin-salama/Rally-Desktop/`
* **Live URL:** `https://ahmed-bin-salama.github.io/Rally-Desktop/`
* **Baseline Date:** 2026-09-26
* **Baseline Branch:** `main`
* **Baseline Commit SHA:** `b4866e2e206a89f44ae39c16f90847ea2c3c242a`
* **Baseline Tag:** `baseline/pre-change-2026-09-26`
* **Baseline Purpose:** Protected reference point before subsequent Rally Desktop modifications.

---

## 2. Protected Scope

This baseline represents the verified, fully working, known-good state of the Rally Board Interactive Desktop application prior to subsequent content, real data, or UI modifications.

The protected baseline scope includes:
* **Entrypoint & Structure:** `index.html`
* **Design & Layout Styles Engine:** `css/main.css`
* **Interactive Controller:** `js/app.js`
* **Bilingual Data Layer:** `data/app-data.js`
* **Asset Media & Graphics:** `assets/` (`backgrounds/`, `committees/`, `logos/`, `people/`, `icons/`)
* **Core Documentation & Contracts:** `ID_REGISTRY.md`, `PROJECT_MAP.md`, `AI_EDITING_RULES.md`, `ASSET_GUIDELINES.md`, `CONTENT_GUIDELINES.md`, `DEVELOPMENT_PLAN.md`, `REQUIRED_REAL_DATA.md`, `README.md`

---

## 3. Recovery Instructions

If a future modification introduces a regression, bug, broken functionality, asset error, or unintended UI behavior, developers can safely inspect, compare, or restore the baseline state using standard Git operations.

### A. Inspect Baseline Commit/Tag
To inspect the baseline commit without altering your working branch:
```bash
git show baseline/pre-change-2026-09-26
```

### B. Compare Current State Against Baseline
To view exact code differences between current work and the protected baseline:
```bash
git diff baseline/pre-change-2026-09-26..HEAD
```

### C. Restore Specific File(s) from Baseline
To restore a specific file to its exact baseline state without losing other work:
```bash
git checkout baseline/pre-change-2026-09-26 -- path/to/file
```

### D. Create a Recovery Branch from Baseline
To start a new clean branch directly from the baseline:
```bash
git checkout -b recovery/clean-restore baseline/pre-change-2026-09-26
```

---

## 4. ID System & Addressability

All UI components and structural elements are governed by the contract-bound `RLY-[TYPE][NUMBER]` ID system defined in `ID_REGISTRY.md`.

Future modifications must preserve the operational mapping:
**ID → UI Element → File → Data Key → Handler Function → Dependencies**

Change discipline rules:
1. **Never delete or rename contract IDs** during content or data updates.
2. **Every future UI change request must reference the specific target ID** (e.g., `Change RLY-C001` or `Change RLY-F003`).
3. If an ID structural change is explicitly authorized, it must be documented with `Old ID`, `New ID`, `Reason`, `Affected Files`, and `Migration Performed`.

---

## 5. Baseline File & Structure Map

```text
/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions Pages deployment pipeline
├── assets/
│   ├── backgrounds/            # desktop-background.jpeg
│   ├── committees/             # committee-01..05.svg, board-art.svg
│   ├── logos/                  # rally-logo.webp
│   └── people/                 # member-01..15.svg, manager-01..04.svg
├── css/
│   └── main.css                # macOS desktop theme, sticker styles, LTR/RTL rules
├── data/
│   └── app-data.js             # Bilingual data schema & content
├── docs/
│   └── BASELINE_AND_RECOVERY.md# Official baseline & recovery reference
├── js/
│   └── app.js                  # Vanilla JS ES module application controller
├── .gitignore
├── AI_EDITING_RULES.md
├── ASSET_GUIDELINES.md
├── CONTENT_GUIDELINES.md
├── DEVELOPMENT_PLAN.md
├── ID_REGISTRY.md
├── PROJECT_MAP.md
├── README.md
├── REQUIRED_REAL_DATA.md
└── index.html                  # HTML entrypoint
```
