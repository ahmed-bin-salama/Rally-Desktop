# Content Guidelines

Guidelines for integrating real organizational content into the **Rally Board Interactive Desktop** repository.

---

## Data Integration Rules

1. **Use Exact Supplied Information**: When real content (names, bios, photos, links) is provided, enter strings exactly as given.
2. **Do Not Guess Missing Links**: If a social media handle, email, or application form URL is not provided, leave the value as an empty string `""` or `null`. Never guess or insert placeholders like `https://instagram.com/example`.
3. **Do Not Invent Biographies or Positions**: Leave missing bios or position fields empty.
4. **Map Content to IDs**: Match each member, committee, or notification to its designated ID in `ID_REGISTRY.md`.
5. **Maintain Bilingual Symmetry**: Provide both English (`EN`) and Arabic (`AR`) values for all user-facing content strings.
   - Example:
     ```javascript
     nameEN: "Sarah Ahmed",
     nameAR: "سارة أحمد",
     positionEN: "Head of Marketing",
     positionAR: "رئيسة لجنة التسويق"
     ```
6. **Keep Presentation Separate**: Never edit HTML or JS UI template files to update content. All content updates MUST occur inside files in `data/`.
