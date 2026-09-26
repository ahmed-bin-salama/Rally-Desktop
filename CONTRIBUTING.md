# Contributing Guidelines

Thank you for contributing to the **Rally Board Interactive Desktop** project!

---

## Core Rules for Contributors

1. **Maintain Static Architecture**: Do not add backend code, server dependencies, databases, or build frameworks (e.g. React, Vue, Webpack, Tailwind).
2. **Preserve Element IDs**: Respect immutable `RLY-[TYPE][NUMBER]` identifiers registered in `ID_REGISTRY.md`.
3. **Strict Data Separation**: UI components must render content dynamically from `/data/*.js` objects.
4. **Follow Media Naming Rules**: Asset filenames must be `lowercase-kebab-case`.
5. **Maintain Documentation**: Any changes to UI structure or ID registries must be reflected in `PROJECT_MAP.md` and `ID_REGISTRY.md`.
6. **Log Version Changes**: Document notable updates in `CHANGELOG.md`.
