# Contributing Guidelines

Thank you for contributing to the **Rally Board Interactive Desktop** repository!

## Code & Change Discipline
1. **Preserve ID System**: Never alter, delete, or rename element IDs listed in `ID_REGISTRY.md` without explicit maintainer approval.
2. **Data-Driven Logic**: Keep presentation separate from content. Never hardcode member names, descriptions, or URLs into HTML/JS UI files; add them to `data/*.js`.
3. **Asset Organization**: Upload visual assets only to the designated directory under `assets/` and follow the `lowercase-kebab-case` naming rule.
4. **Bilingual Requirement**: Ensure all new user-facing content fields include both English (`EN`) and Arabic (`AR`) strings.
5. **No Frameworks or Backends**: This project is strictly a static website (HTML, CSS, Vanilla JS). Do not introduce frameworks (React, Vue, Tailwind) or backend servers unless explicitly instructed.
6. **Documentation Updates**: Whenever structural or data changes are made, update `ID_REGISTRY.md`, `PROJECT_MAP.md`, and `CHANGELOG.md` accordingly.
7. **Test Before Pull Request**: Verify layout rendering and state interactions locally before submitting changes.
