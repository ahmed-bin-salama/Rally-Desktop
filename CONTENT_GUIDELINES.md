# Content Guidelines

## Data Schema (`data/app-data.js`)

All strings exposed to users must be structured as bilingual objects:

```javascript
{
  en: "English text",
  ar: "النص بالعربية"
}
```

## Structure Requirements

1. **Season:** Format as string range, e.g. `"16 / 09 / 2026 → 16 / 09 / 2027"`.
2. **Announcement:** Title and destination URL.
3. **Committees (1..5):**
   - Title (`en`, `ar`)
   - Description (`en`, `ar`)
   - Join URL
   - Members array (3 members per committee)
4. **Board (Committee 6):**
   - Title (`en`, `ar`)
   - Description (`en`, `ar`)
   - Members array (4 managers)
5. **Notifications (1..5):**
   - Title (`en`, `ar`)
   - Description (`en`, `ar`)
   - URL
   - Date / Event badge
