/**
 * Notifications Data
 *
 * Defines items displayed inside the top bar Notification Panel (RLY-NP001).
 * System supports between 1 and 5 notifications (default demo slot set: 5).
 * Deleting a notification item by ID automatically reflows remaining notifications.
 *
 * Schema Template:
 * {
 *   id: "RLY-N10x",
 *   titleEN: "",
 *   titleAR: "",
 *   descriptionEN: "",
 *   descriptionAR: "",
 *   url: "",
 *   iconAsset: "assets/icons/notification-default.svg",
 *   dateEvent: "",
 *   active: true
 * }
 */

export const notifications = [
  {
    id: "RLY-N101",
    titleEN: "Notification Slot 1",
    titleAR: "الإشعار الأول",
    descriptionEN: "Placeholder description for notification item 1.",
    descriptionAR: "وصف توضيحي للإشعار الأول.",
    url: "",
    iconAsset: "",
    dateEvent: "",
    active: true
  },
  {
    id: "RLY-N102",
    titleEN: "Notification Slot 2",
    titleAR: "الإشعار الثاني",
    descriptionEN: "Placeholder description for notification item 2.",
    descriptionAR: "وصف توضيحي للإشعار الثاني.",
    url: "",
    iconAsset: "",
    dateEvent: "",
    active: true
  },
  {
    id: "RLY-N103",
    titleEN: "Notification Slot 3",
    titleAR: "الإشعار الثالث",
    descriptionEN: "Placeholder description for notification item 3.",
    descriptionAR: "وصف توضيحي للإشعار الثالث.",
    url: "",
    iconAsset: "",
    dateEvent: "",
    active: true
  },
  {
    id: "RLY-N104",
    titleEN: "Notification Slot 4",
    titleAR: "الإشعار الرابع",
    descriptionEN: "Placeholder description for notification item 4.",
    descriptionAR: "وصف توضيحي للإشعار الرابع.",
    url: "",
    iconAsset: "",
    dateEvent: "",
    active: true
  },
  {
    id: "RLY-N105",
    titleEN: "Notification Slot 5",
    titleAR: "الإشعار الخامس",
    descriptionEN: "Placeholder description for notification item 5.",
    descriptionAR: "وصف توضيحي للإشعار الخامس.",
    url: "",
    iconAsset: "",
    dateEvent: "",
    active: true
  }
];
