# AI Editing Rules

Strict operational rules for AI coding assistants working on the **Rally Board Interactive Desktop** repository.

---

## Core Directives

1. **Never Rename Existing IDs**: Do not alter, edit, or rename any ID in `ID_REGISTRY.md` without explicit human approval.
2. **Never Reuse IDs**: Each ID (`RLY-XXXX`) is unique. When creating a new component or entity, allocate a new ID following the established type code conventions.
3. **Never Silently Delete IDs**: If an element is removed from the UI, update `ID_REGISTRY.md` and mark it as deprecated rather than deleting references silently.
4. **Surgical Modifications Only**: Modify only the target element specified by its ID and its required direct dependencies. Do not refactor unrelated files.
5. **Reuse Existing Components & Design Tokens**: Reuse existing CSS variables and JS module utilities.
6. **Data Belongs in `data/`**: Keep content in `data/*.js`. Do not write raw text, names, or URLs inside JS UI components or HTML files.
7. **Assets Belong in `assets/`**: Keep images, icons, and textures in `assets/`.
8. **Keep URLs Centralized**: Social links, email targets, and join links belong in `data/links.js` or `data/committees.js`.
9. **Never Fabricate Data**: Never invent fake names, phone numbers, bios, or social handles. Use empty string placeholders `""` if data is missing.
10. **Preserve Responsive & Bilingual Behavior**: Every modification must preserve LTR (English) / RTL (Arabic) support and responsive rendering.
11. **Update Documentation**: Always update `ID_REGISTRY.md`, `PROJECT_MAP.md`, and `CHANGELOG.md` after making structural changes.
12. **No Unapproved Frameworks**: Do not introduce build frameworks, preprocessors, or backend dependencies without explicit approval.

---

## Examples of Valid Editing Requests

- **Modify Member Asset**:
  > "Modify `RLY-M002`. Change only its `imageAsset` path to `assets/people/sarah-ahmed.webp`."
- **Update Application Link**:
  > "Modify `RLY-J004`. Replace only its `applicationUrl` inside `data/committees.js`."
- **Delete Notification Item**:
  > "Delete notification `RLY-N104`. Reflow remaining notifications automatically."
- **Update Center Announcement**:
  > "Modify `RLY-MS001`. Update the bilingual announcement text inside `data/site.js`."
- **Adjust Window Styling**:
  > "Modify `RLY-W003`. Adjust its border radius and drop shadow in `css/window.css`."
