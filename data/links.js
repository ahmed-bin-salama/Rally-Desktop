/**
 * External Links Data
 *
 * Centralizes all social media URLs, contact emails, and direct messaging links used
 * across the Rally Menu (RLY-MN001), Dock (RLY-K001), and footer buttons.
 */

export const externalLinks = {
  // Social Media Links
  facebook: {
    id: "RLY-B001",
    labelEN: "Facebook",
    labelAR: "فيسبوك",
    url: ""
  },
  tikTok: {
    id: "RLY-B002",
    labelEN: "TikTok",
    labelAR: "تيك توك",
    url: ""
  },
  instagram: {
    id: "RLY-B003",
    dockId: "RLY-K002",
    labelEN: "Instagram",
    labelAR: "إنستغرام",
    url: ""
  },
  whatsAppGroup: {
    id: "RLY-B004",
    labelEN: "WhatsApp Community Group",
    labelAR: "مجتمعي على واتساب",
    url: ""
  },

  // Contact Links
  email: {
    id: "RLY-C001",
    labelEN: "Email Us",
    labelAR: "البريد الإلكتروني",
    address: "" // e.g., "contact@rally.org"
  },
  whatsAppContact: {
    id: "RLY-C002",
    labelEN: "Direct WhatsApp",
    labelAR: "تواصل عبر واتساب",
    numberUrl: "" // e.g., "https://wa.me/..."
  },

  // Attribution & Licensing
  attribution: {
    id: "RLY-LC001",
    labelEN: "Attribution & Licenses",
    labelAR: "الإسناد والتراخيص",
    textEN: "Rally Board Interactive Desktop © 2025",
    textAR: "مكتب رالي التفاعلي © ٢٠٢٥"
  }
};
