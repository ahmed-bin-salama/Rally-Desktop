# AI Editing Rules

1. **Do Not Delete or Rename Existing IDs:**
   All IDs defined in `ID_REGISTRY.md` starting with `RLY-` are contract-bound. Never silently modify or remove an ID.

2. **Decouple Data from View:**
   Never hardcode member names, position titles, committee descriptions, or links directly into HTML or JS functions. Reference or load them from `data/app-data.js`.

3. **Sticker Design System Integrity:**
   Sticker properties (shadows, border outlines, rotation, scale on hover) must be maintained via CSS utility classes or variables, not baked into raster PNG images.

4. **No Framework Dependencies:**
   Do not introduce React, Vue, Svelte, Tailwind, or external script CDNs. Maintain pure Vanilla JS (ES Modules) and plain CSS.

5. **Bilingual Preservation:**
   Every text key in `data/app-data.js` must provide both `en` (English) and `ar` (Arabic) properties.
