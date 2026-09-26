/**
 * Committee & Board Data Schema Placeholder
 * Target ID Mapping: RLY-F001–RLY-F006, RLY-W001–RLY-W006, RLY-J001–RLY-J005, RLY-A001–RLY-A006
 * Supports exactly 5 Committees + 1 Board/Managers Group
 */

export const committeesData = [
  {
    id: "committee-1",
    folderId: "RLY-F001",
    windowId: "RLY-W001",
    windowChromeId: "RLY-WC001",
    windowCloseId: "RLY-WX001",
    joinButtonId: "RLY-J001",
    membersAppId: "RLY-A001",
    membersWindowId: "RLY-AW001",
    title: {
      en: "Committee 1",
      ar: "اللجنة الأولى"
    },
    description: {
      en: "",
      ar: ""
    },
    artworkAsset: "",
    applicationUrl: "",
    memberIds: ["RLY-M001", "RLY-M002", "RLY-M003"]
  },
  {
    id: "committee-2",
    folderId: "RLY-F002",
    windowId: "RLY-W002",
    windowChromeId: "RLY-WC002",
    windowCloseId: "RLY-WX002",
    joinButtonId: "RLY-J002",
    membersAppId: "RLY-A002",
    membersWindowId: "RLY-AW002",
    title: {
      en: "Committee 2",
      ar: "اللجنة الثانية"
    },
    description: {
      en: "",
      ar: ""
    },
    artworkAsset: "",
    applicationUrl: "",
    memberIds: ["RLY-M004", "RLY-M005", "RLY-M006"]
  },
  {
    id: "committee-3",
    folderId: "RLY-F003",
    windowId: "RLY-W003",
    windowChromeId: "RLY-WC003",
    windowCloseId: "RLY-WX003",
    joinButtonId: "RLY-J003",
    membersAppId: "RLY-A003",
    membersWindowId: "RLY-AW003",
    title: {
      en: "Committee 3",
      ar: "اللجنة الثالثة"
    },
    description: {
      en: "",
      ar: ""
    },
    artworkAsset: "",
    applicationUrl: "",
    memberIds: ["RLY-M007", "RLY-M008", "RLY-M009"]
  },
  {
    id: "committee-4",
    folderId: "RLY-F004",
    windowId: "RLY-W004",
    windowChromeId: "RLY-WC004",
    windowCloseId: "RLY-WX004",
    joinButtonId: "RLY-J004",
    membersAppId: "RLY-A004",
    membersWindowId: "RLY-AW004",
    title: {
      en: "Committee 4",
      ar: "اللجنة الرابعة"
    },
    description: {
      en: "",
      ar: ""
    },
    artworkAsset: "",
    applicationUrl: "",
    memberIds: ["RLY-M010", "RLY-M011", "RLY-M012"]
  },
  {
    id: "committee-5",
    folderId: "RLY-F005",
    windowId: "RLY-W005",
    windowChromeId: "RLY-WC005",
    windowCloseId: "RLY-WX005",
    joinButtonId: "RLY-J005",
    membersAppId: "RLY-A005",
    membersWindowId: "RLY-AW005",
    title: {
      en: "Committee 5",
      ar: "اللجنة الخامسة"
    },
    description: {
      en: "",
      ar: ""
    },
    artworkAsset: "",
    applicationUrl: "",
    memberIds: ["RLY-M013", "RLY-M014", "RLY-M015"]
  },
  {
    id: "board-managers",
    folderId: "RLY-F006",
    windowId: "RLY-W006",
    windowChromeId: "RLY-WC006",
    windowCloseId: "RLY-WX006",
    joinButtonId: "",
    membersAppId: "RLY-A006",
    membersWindowId: "RLY-AW006",
    title: {
      en: "Board / Managers",
      ar: "مجلس الإدارة والمدراء"
    },
    description: {
      en: "",
      ar: ""
    },
    artworkAsset: "",
    applicationUrl: "",
    memberIds: ["RLY-M101", "RLY-M102", "RLY-M103", "RLY-M104"]
  }
];
