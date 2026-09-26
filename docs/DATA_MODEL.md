# Data Model Specification

Data schema, entity relationships, and bilingual field specifications for the **Rally Board Interactive Desktop**.

---

## Entity Relationship Diagram

```text
Site Config (site.js)
 ├── Season (RLY-S001)
 ├── Announcement (RLY-MS001)
 └── Language Settings (RLY-LG001)

Committee (committees.js)
 ├── Folder (RLY-F001–RLY-F006)
 ├── Window (RLY-W001–RLY-W006)
 ├── Member IDs (references members.js)
 ├── Join Button (RLY-J001–RLY-J005)
 └── Members App (RLY-A001–RLY-A006)
      └── Directory Window (RLY-AW001–RLY-AW006)

Member Profile (members.js)
 ├── Member Entity (RLY-M001+)
 ├── Info Window Modal (RLY-I001+)
 ├── Associated Committee ID (references committees.js)
 ├── Bilingual Identity (Name EN/AR, Position EN/AR, Bio EN/AR)
 └── Social Links (Instagram, LinkedIn, WhatsApp, Email)

Notifications (notifications.js)
 └── Items (RLY-N101–RLY-N105)
      ├── Bilingual Strings (Title EN/AR, Description EN/AR)
      └── Action Target & Date

External Links (links.js)
 ├── Social Media (RLY-B001–RLY-B004)
 ├── Contacts (RLY-C001, RLY-C002)
 ├── Attribution (RLY-LC001)
 └── Dock Shortcut (RLY-K002)
```

---

## Field Specifications & Bilingual Requirement

Every user-facing data structure strictly enforces bilingual properties:
- **English**: Suffix `EN` (e.g., `nameEN`, `titleEN`, `descriptionEN`).
- **Arabic**: Suffix `AR` (e.g., `nameAR`, `titleAR`, `descriptionAR`).

When missing content occurs, fields MUST remain empty strings (`""`) rather than fabricated values.
