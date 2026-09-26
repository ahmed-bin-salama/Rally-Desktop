/**
 * Site Configuration Data Schema Placeholder
 * Target ID Mapping: RLY-S001, RLY-MS001, RLY-LG001
 */

export const siteConfig = {
  // Season Label (RLY-S001)
  season: {
    en: "Season 2025",
    ar: "موسم ٢٠٢٥"
  },

  // Center Announcement Banner (RLY-MS001)
  announcement: {
    id: "RLY-MS001",
    text: {
      en: "Applications Open for Rally Committees!",
      ar: "باب الانضمام للجان رالي مفتوح الآن!"
    },
    url: "",
    active: true
  },

  // Language Settings (RLY-LG001)
  language: {
    defaultLanguage: "en",
    supportedLanguages: ["en", "ar"]
  }
};
