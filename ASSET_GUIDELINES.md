# Asset Guidelines

Guidelines and specifications for media assets in the **Rally Board Interactive Desktop** repository.

---

## Naming Conventions
- Always use **`lowercase-kebab-case`** (e.g., `rally-logo-white.svg`, `committee-marketing.webp`, `ahmed-bin-salama.webp`).
- Never use spaces, uppercase letters, special characters, or generic camera names (`IMG_8492.png`, `final-version2.png`).

---

## Format & Resolution Specifications

### 1. People (`assets/people/`)
- **Format**: WebP or PNG with transparent backgrounds.
- **Resolution**: Min 400x400px, Max 800x800px.
- **Treatment**: Upload clean subject cutouts without baked-in drop shadows or borders. CSS dynamically renders the sticker border, tilt, and drop-shadow effects.

### 2. Committees (`assets/committees/`)
- **Format**: WebP, PNG, or SVG.
- **Resolution**: Optimized vector or high-DPI raster graphic representing committee artwork.

### 3. Icons (`assets/icons/`)
- **Format**: SVG preferred (or 2x PNG/WebP).
- **Scope**: Window controls, notification bell, language switch, external link arrows, social media icons.

### 4. Logos (`assets/logos/`)
- **Format**: SVG or high-resolution transparent PNG/WebP.
- **Variants**: Standard logo, white emblem, dark emblem, icon-only mark.

### 5. Backgrounds (`assets/backgrounds/`)
- **Format**: WebP or JPEG.
- **Resolution**: 1920x1080px or higher, compressed to <500KB.

### 6. Textures (`assets/textures/`)
- **Format**: WebP, PNG, or SVG tileable patterns.
- **Purpose**: Subtle paper grain or glassmorphism noise overlays.
