/**
 * Committees Data
 *
 * Defines the 5 Committees + 1 Board / Managers group.
 * Connects folders, windows, member IDs, join buttons, and members app.
 *
 * Schema Template:
 * {
 *   id: "RLY-F00x",
 *   windowId: "RLY-W00x",
 *   nameEN: "Committee Name",
 *   nameAR: "اسم اللجنة",
 *   descriptionEN: "Committee description in English",
 *   descriptionAR: "وصف اللجنة بالعربية",
 *   artworkAsset: "assets/committees/filename.webp",
 *   memberIds: ["RLY-M001", "RLY-M002"],
 *   joinButton: {
 *     id: "RLY-J00x",
 *     labelEN: "Apply / Join",
 *     labelAR: "التقديم / الانضمام",
 *     applicationUrl: ""
 *   },
 *   membersApp: {
 *     id: "RLY-A00x",
 *     windowId: "RLY-AW00x",
 *     titleEN: "Committee Members",
 *     titleAR: "أعضاء اللجنة"
 *   }
 * }
 */

export const committees = [
  {
    id: "RLY-F001",
    windowId: "RLY-W001",
    nameEN: "Committee 1",
    nameAR: "اللجنة الأولى",
    descriptionEN: "",
    descriptionAR: "",
    artworkAsset: "",
    memberIds: ["RLY-M001", "RLY-M002", "RLY-M003"],
    joinButton: {
      id: "RLY-J001",
      labelEN: "Join Committee 1",
      labelAR: "الانضمام للجنة الأولى",
      applicationUrl: ""
    },
    membersApp: {
      id: "RLY-A001",
      windowId: "RLY-AW001",
      titleEN: "Committee 1 Members",
      titleAR: "أعضاء اللجنة الأولى"
    }
  },
  {
    id: "RLY-F002",
    windowId: "RLY-W002",
    nameEN: "Committee 2",
    nameAR: "اللجنة الثانية",
    descriptionEN: "",
    descriptionAR: "",
    artworkAsset: "",
    memberIds: ["RLY-M004", "RLY-M005", "RLY-M006"],
    joinButton: {
      id: "RLY-J002",
      labelEN: "Join Committee 2",
      labelAR: "الانضمام للجنة الثانية",
      applicationUrl: ""
    },
    membersApp: {
      id: "RLY-A002",
      windowId: "RLY-AW002",
      titleEN: "Committee 2 Members",
      titleAR: "أعضاء اللجنة الثانية"
    }
  },
  {
    id: "RLY-F003",
    windowId: "RLY-W003",
    nameEN: "Committee 3",
    nameAR: "اللجنة الثالثة",
    descriptionEN: "",
    descriptionAR: "",
    artworkAsset: "",
    memberIds: ["RLY-M007", "RLY-M008", "RLY-M009"],
    joinButton: {
      id: "RLY-J003",
      labelEN: "Join Committee 3",
      labelAR: "الانضمام للجنة الثالثة",
      applicationUrl: ""
    },
    membersApp: {
      id: "RLY-A003",
      windowId: "RLY-AW003",
      titleEN: "Committee 3 Members",
      titleAR: "أعضاء اللجنة الثالثة"
    }
  },
  {
    id: "RLY-F004",
    windowId: "RLY-W004",
    nameEN: "Committee 4",
    nameAR: "اللجنة الرابعة",
    descriptionEN: "",
    descriptionAR: "",
    artworkAsset: "",
    memberIds: ["RLY-M010", "RLY-M011", "RLY-M012"],
    joinButton: {
      id: "RLY-J004",
      labelEN: "Join Committee 4",
      labelAR: "الانضمام للجنة الرابعة",
      applicationUrl: ""
    },
    membersApp: {
      id: "RLY-A004",
      windowId: "RLY-AW004",
      titleEN: "Committee 4 Members",
      titleAR: "أعضاء اللجنة الرابعة"
    }
  },
  {
    id: "RLY-F005",
    windowId: "RLY-W005",
    nameEN: "Committee 5",
    nameAR: "اللجنة الخامسة",
    descriptionEN: "",
    descriptionAR: "",
    artworkAsset: "",
    memberIds: ["RLY-M013", "RLY-M014", "RLY-M015"],
    joinButton: {
      id: "RLY-J005",
      labelEN: "Join Committee 5",
      labelAR: "الانضمام للجنة الخامسة",
      applicationUrl: ""
    },
    membersApp: {
      id: "RLY-A005",
      windowId: "RLY-AW005",
      titleEN: "Committee 5 Members",
      titleAR: "أعضاء اللجنة الخامسة"
    }
  },
  {
    id: "RLY-F006",
    windowId: "RLY-W006",
    nameEN: "Board / Managers",
    nameAR: "مجلس الإدارة / المدراء",
    descriptionEN: "",
    descriptionAR: "",
    artworkAsset: "",
    memberIds: ["RLY-M101", "RLY-M102", "RLY-M103", "RLY-M104"],
    joinButton: null, // Board does not have a join application button
    membersApp: {
      id: "RLY-A006",
      windowId: "RLY-AW006",
      titleEN: "Board Directory",
      titleAR: "دليل مجلس الإدارة"
    }
  }
];
