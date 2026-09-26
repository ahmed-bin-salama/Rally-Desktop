# Rules for AI-Assisted Development

To maintain architectural integrity, identifier stability, and codebase cleanliness, all AI coding agents working on this repository must strictly adhere to the following 16 rules.

---

## Mandatory Constraints

1. **Never rename an existing Rally ID** without explicit architectural authorization.
2. **Never reuse an existing Rally ID** for a different visual or functional element.
3. **Never silently delete an existing ID** from code or documentation.
4. **Never modify unrelated components or files** outside the scope of the user request.
5. **Modify only the specifically requested ID** and its direct mandatory dependencies.
6. **Reuse existing components** rather than re-creating duplicate UI structures.
7. **Reuse defined CSS design tokens** (variables) for colors, spacing, typography, and z-indices.
8. **Keep content strictly in `/data/*.js` files**, never hardcoded in HTML/JS UI templates.
9. **Keep visual media in `/assets/` subfolders**, never embedded as inline base64 strings in code.
10. **Keep external URLs centralized** in `data/links.js` or `data/committees.js`.
11. **Never invent or fabricate missing real-world data** (names, photos, bios, URLs, emails); missing values must remain empty strings.
12. **Preserve responsive behavior** across desktop, tablet, and mobile breakpoints.
13. **Update `ID_REGISTRY.md` immediately** whenever structural element IDs are added or modified.
14. **Update `PROJECT_MAP.md` immediately** whenever component hierarchy or interaction flows change.
15. **Update `CHANGELOG.md` immediately** after completing meaningful architectural or feature modifications.
16. **Do not introduce build tools, bundlers, or backend frameworks** without explicit approval.

---

## Examples of Valid Targeted AI Prompts

- `Modify RLY-M002. Change only the member image path.`
- `Modify RLY-J004. Replace only the external application URL.`
- `Delete RLY-N104. Reflow the remaining notifications automatically.`
- `Modify RLY-MS001. Change the center announcement text and URL only.`
- `Modify RLY-W003. Change only its visual styling.`
