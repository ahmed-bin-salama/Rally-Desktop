/**
 * Site Configuration Data
 *
 * Defines global site metadata, top bar announcement, season string, and language settings.
 * ID Reference: RLY-T001, RLY-MS001, RLY-S001, RLY-LG001
 */

export const siteConfig = {
  // Season metadata
  season: {
    id: "RLY-S001",
    labelEN: "", // e.g., "Season 2024 - 2025"
    labelAR: ""  // e.g., "موسم ٢٠٢٤ - ٢٠٢٥"
  },

  // Central Top Bar Announcement
  centerMessage: {
    id: "RLY-MS001",
    textEN: "",  // e.g., "Welcome to Rally Board Interactive Desktop"
    textAR: "",  // e.g., "مرحباً بكم في مكتب رالي التفاعلي"
    url: "",     // Optional announcement link target
    active: true
  },

  // Language settings configuration
  language: {
    id: "RLY-LG001",
    defaultLanguage: "EN", // "EN" | "AR"
    supportedLanguages: ["EN", "AR"]
  }
};
