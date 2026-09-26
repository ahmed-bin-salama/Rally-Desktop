export const appData = {
  season: "16 / 09 / 2026 → 16 / 09 / 2027",

  announcement: {
    id: "RLY-MS001",
    en: "⚡ Something interesting is coming...",
    ar: "⚡ شيء مثير للاهتمام قادم قريباً...",
    url: "https://example.com/announcement-demo"
  },

  menuLinks: {
    facebook: { id: "RLY-B001", label: { en: "Facebook", ar: "فيسبوك" }, url: "https://facebook.com/rally-demo" },
    tiktok: { id: "RLY-B002", label: { en: "TikTok", ar: "تيك توك" }, url: "https://tiktok.com/@rally-demo" },
    instagram: { id: "RLY-B003", label: { en: "Instagram", ar: "إنستغرام" }, url: "https://instagram.com/rally-demo" },
    whatsappGroup: { id: "RLY-B004", label: { en: "WhatsApp Group", ar: "مجموعة الواتساب" }, url: "https://chat.whatsapp.com/demo-group" },
    attribution: { id: "RLY-LC001", label: { en: "Attribution", ar: "الحقوق والمساهمون" }, text: { en: "Designed & Built for Rally Organization Demo", ar: "تصميم وتنفيذ لنشاط رالي - نسخة توضيحية" } },
    email: { id: "RLY-C001", label: { en: "Email Us", ar: "البريد الإلكتروني" }, url: "mailto:contact@rally-demo.org" },
    whatsappContact: { id: "RLY-C002", label: { en: "Contact WhatsApp", ar: "واتساب التواصل" }, url: "https://wa.me/1234567890" }
  },

  dock: {
    instagram: { id: "RLY-K002", label: { en: "Rally Instagram", ar: "انستغرام رالي" }, url: "https://instagram.com/rally-demo" }
  },

  notifications: [
    {
      id: "RLY-N101",
      title: { en: "Welcome to Rally Desktop", ar: "مرحباً بكم في سطح مكتب رالي" },
      description: { en: "Explore our interactive committees and board members.", ar: "استكشف لجاننا وأعضاء مجلس الإدارة بشكل تفاعلي." },
      badge: { en: "NEW", ar: "جديد" },
      url: "https://example.com/welcome"
    },
    {
      id: "RLY-N102",
      title: { en: "Applications Open!", ar: "باب الانضمام مفتوح!" },
      description: { en: "Join one of our 5 active committees for season 2026-2027.", ar: "انضم إلى إحدى لجاننا الـ 5 للموسم 2026-2027." },
      badge: { en: "JOIN", ar: "انضمام" },
      url: "https://example.com/apply"
    },
    {
      id: "RLY-N103",
      title: { en: "Upcoming Workshop", ar: "ورشة عمل قادمة" },
      description: { en: "Interactive strategy session coming next Thursday.", ar: "جلسة استراتيجية تفاعلية الخميس القادم." },
      badge: { en: "EVENT", ar: "فعالية" },
      url: "https://example.com/workshop"
    },
    {
      id: "RLY-N104",
      title: { en: "Board Meeting Highlights", ar: "أبرز نقاط اجتماع المجلس" },
      description: { en: "Review key announcements and decisions.", ar: "اطّلع على أهم الإعلانات والقرارات الصادرة." },
      badge: { en: "INFO", ar: "معلومات" },
      url: "https://example.com/board-news"
    },
    {
      id: "RLY-N105",
      title: { en: "Community Gathering", ar: "ملتقى مجتمع رالي" },
      description: { en: "Connect with committee leads and members this weekend.", ar: "تواصل مع قادة وأعضاء اللجان نهاية هذا الأسبوع." },
      badge: { en: "MEET", ar: "لقاء" },
      url: "https://example.com/gathering"
    }
  ],

  folders: [
    {
      folderId: "RLY-F001",
      windowId: "RLY-W001",
      name: { en: "Committee 01", ar: "اللجنة 01" },
      type: "committee",
      artwork: "assets/committees/committee-01.svg",
      joinButton: { id: "RLY-J001", label: { en: "Join Committee 01", ar: "انضم للجنة 01" }, url: "https://example.com/join/committee-01" },
      app: { id: "RLY-A001", windowId: "RLY-AW001", name: { en: "Members Directory", ar: "دليل الأعضاء" } },
      members: [
        {
          id: "RLY-M001",
          infoId: "RLY-I001",
          name: { en: "Demo Member 01", ar: "عضو تجريبي 01" },
          title: { en: "Marketing Lead", ar: "مسؤول التسويق" },
          committee: { en: "Committee 01", ar: "اللجنة 01" },
          bio: { en: "Leads digital outreach and brand campaigns.", ar: "يقود الحملات التسويقية والوصول الرقمي." },
          image: "assets/people/member-01.svg",
          contactUrl: "https://example.com/member-01"
        },
        {
          id: "RLY-M002",
          infoId: "RLY-I002",
          name: { en: "Demo Member 02", ar: "عضو تجريبي 02" },
          title: { en: "Social Specialist", ar: "أخصائي وسائل التواصل" },
          committee: { en: "Committee 01", ar: "اللجنة 01" },
          bio: { en: "Manages social interaction and copy.", ar: "يدير التفاعل والتواصل على المنصات." },
          image: "assets/people/member-02.svg",
          contactUrl: "https://example.com/member-02"
        },
        {
          id: "RLY-M003",
          infoId: "RLY-I003",
          name: { en: "Demo Member 03", ar: "عضو تجريبي 03" },
          title: { en: "Content Creator", ar: "صانع محتوى" },
          committee: { en: "Committee 01", ar: "اللجنة 01" },
          bio: { en: "Creates visual media and stories.", ar: "ينتج المحتوى المرئي والقصص التفاعلية." },
          image: "assets/people/member-03.svg",
          contactUrl: "https://example.com/member-03"
        }
      ]
    },
    {
      folderId: "RLY-F002",
      windowId: "RLY-W002",
      name: { en: "Committee 02", ar: "اللجنة 02" },
      type: "committee",
      artwork: "assets/committees/committee-02.svg",
      joinButton: { id: "RLY-J002", label: { en: "Join Committee 02", ar: "انضم للجنة 02" }, url: "https://example.com/join/committee-02" },
      app: { id: "RLY-A002", windowId: "RLY-AW002", name: { en: "Members Directory", ar: "دليل الأعضاء" } },
      members: [
        {
          id: "RLY-M004",
          infoId: "RLY-I004",
          name: { en: "Demo Member 04", ar: "عضو تجريبي 04" },
          title: { en: "Creative Lead", ar: "المسؤول الإبداعي" },
          committee: { en: "Committee 02", ar: "اللجنة 02" },
          bio: { en: "Oversees graphic and visual design.", ar: "يشرف على التصميم الجرافيكي والمرئي." },
          image: "assets/people/member-04.svg",
          contactUrl: "https://example.com/member-04"
        },
        {
          id: "RLY-M005",
          infoId: "RLY-I005",
          name: { en: "Demo Member 05", ar: "عضو تجريبي 05" },
          title: { en: "UI Designer", ar: "مصمم واجهات" },
          committee: { en: "Committee 02", ar: "اللجنة 02" },
          bio: { en: "Crafts intuitive UI components.", ar: "يصمم المكونات التفاعلية والواجهات." },
          image: "assets/people/member-05.svg",
          contactUrl: "https://example.com/member-05"
        },
        {
          id: "RLY-M006",
          infoId: "RLY-I006",
          name: { en: "Demo Member 06", ar: "عضو تجريبي 06" },
          title: { en: "Illustrator", ar: "رسام توضيحي" },
          committee: { en: "Committee 02", ar: "اللجنة 02" },
          bio: { en: "Develops custom vector art and stickers.", ar: "يطور الرسوم التوضيحية والملصقات." },
          image: "assets/people/member-06.svg",
          contactUrl: "https://example.com/member-06"
        }
      ]
    },
    {
      folderId: "RLY-F003",
      windowId: "RLY-W003",
      name: { en: "Committee 03", ar: "اللجنة 03" },
      type: "committee",
      artwork: "assets/committees/committee-03.svg",
      joinButton: { id: "RLY-J003", label: { en: "Join Committee 03", ar: "انضم للجنة 03" }, url: "https://example.com/join/committee-03" },
      app: { id: "RLY-A003", windowId: "RLY-AW003", name: { en: "Members Directory", ar: "دليل الأعضاء" } },
      members: [
        {
          id: "RLY-M007",
          infoId: "RLY-I007",
          name: { en: "Demo Member 07", ar: "عضو تجريبي 07" },
          title: { en: "Community Lead", ar: "مسؤول المجتمع" },
          committee: { en: "Committee 03", ar: "اللجنة 03" },
          bio: { en: "Fosters member engagement.", ar: "يعزز مشاركة وتفاعل المجتمع." },
          image: "assets/people/member-07.svg",
          contactUrl: "https://example.com/member-07"
        },
        {
          id: "RLY-M008",
          infoId: "RLY-I008",
          name: { en: "Demo Member 08", ar: "عضو تجريبي 08" },
          title: { en: "Event Coordinator", ar: "منسق الفعاليات" },
          committee: { en: "Committee 03", ar: "اللجنة 03" },
          bio: { en: "Organizes community workshops.", ar: "ينظم اللقاءات والورش التفاعلية." },
          image: "assets/people/member-08.svg",
          contactUrl: "https://example.com/member-08"
        },
        {
          id: "RLY-M009",
          infoId: "RLY-I009",
          name: { en: "Demo Member 09", ar: "عضو تجريبي 09" },
          title: { en: "Relations Officer", ar: "مسؤول العلاقات" },
          committee: { en: "Committee 03", ar: "اللجنة 03" },
          bio: { en: "Handles community partnerships.", ar: "يدير الشراكات الخارجية للمجتمع." },
          image: "assets/people/member-09.svg",
          contactUrl: "https://example.com/member-09"
        }
      ]
    },
    {
      folderId: "RLY-F004",
      windowId: "RLY-W004",
      name: { en: "Committee 04", ar: "اللجنة 04" },
      type: "committee",
      artwork: "assets/committees/committee-04.svg",
      joinButton: { id: "RLY-J004", label: { en: "Join Committee 04", ar: "انضم للجنة 04" }, url: "https://example.com/join/committee-04" },
      app: { id: "RLY-A004", windowId: "RLY-AW004", name: { en: "Members Directory", ar: "دليل الأعضاء" } },
      members: [
        {
          id: "RLY-M010",
          infoId: "RLY-I010",
          name: { en: "Demo Member 10", ar: "عضو تجريبي 10" },
          title: { en: "Technical Lead", ar: "المسؤول التقني" },
          committee: { en: "Committee 04", ar: "اللجنة 04" },
          bio: { en: "Architects web infrastructure.", ar: "يبني ويدير البنية التحتية البرمجية." },
          image: "assets/people/member-10.svg",
          contactUrl: "https://example.com/member-10"
        },
        {
          id: "RLY-M011",
          infoId: "RLY-I011",
          name: { en: "Demo Member 11", ar: "عضو تجريبي 11" },
          title: { en: "Frontend Developer", ar: "مطور واجهات" },
          committee: { en: "Committee 04", ar: "اللجنة 04" },
          bio: { en: "Builds client-side interactions.", ar: "يطور التفاعلات والتطبيقات التفاعلية." },
          image: "assets/people/member-11.svg",
          contactUrl: "https://example.com/member-11"
        },
        {
          id: "RLY-M012",
          infoId: "RLY-I012",
          name: { en: "Demo Member 12", ar: "عضو تجريبي 12" },
          title: { en: "Systems Admin", ar: "مدير الأنظمة" },
          committee: { en: "Committee 04", ar: "اللجنة 04" },
          bio: { en: "Ensures site availability and speed.", ar: "يضمن استقرار وسرعة الخدمات." },
          image: "assets/people/member-12.svg",
          contactUrl: "https://example.com/member-12"
        }
      ]
    },
    {
      folderId: "RLY-F005",
      windowId: "RLY-W005",
      name: { en: "Committee 05", ar: "اللجنة 05" },
      type: "committee",
      artwork: "assets/committees/committee-05.svg",
      joinButton: { id: "RLY-J005", label: { en: "Join Committee 05", ar: "انضم للجنة 05" }, url: "https://example.com/join/committee-05" },
      app: { id: "RLY-A005", windowId: "RLY-AW005", name: { en: "Members Directory", ar: "دليل الأعضاء" } },
      members: [
        {
          id: "RLY-M013",
          infoId: "RLY-I013",
          name: { en: "Demo Member 13", ar: "عضو تجريبي 13" },
          title: { en: "Logistics Lead", ar: "مسؤول اللوجستيات" },
          committee: { en: "Committee 05", ar: "اللجنة 05" },
          bio: { en: "Coordinates operations and venues.", ar: "ينسق العمليات والترتيبات الميدانية." },
          image: "assets/people/member-13.svg",
          contactUrl: "https://example.com/member-13"
        },
        {
          id: "RLY-M014",
          infoId: "RLY-I014",
          name: { en: "Demo Member 14", ar: "عضو تجريبي 14" },
          title: { en: "Operations Officer", ar: "مسؤول العمليات" },
          committee: { en: "Committee 05", ar: "اللجنة 05" },
          bio: { en: "Manages event equipment.", ar: "يدير التجهيزات والمعدات للفعاليات." },
          image: "assets/people/member-14.svg",
          contactUrl: "https://example.com/member-14"
        },
        {
          id: "RLY-M015",
          infoId: "RLY-I015",
          name: { en: "Demo Member 15", ar: "عضو تجريبي 15" },
          title: { en: "Field Specialist", ar: "أخصائي ميداني" },
          committee: { en: "Committee 05", ar: "اللجنة 05" },
          bio: { en: "Executes on-ground logistics.", ar: "ينفذ المهام الميدانية والدعم اللوجستي." },
          image: "assets/people/member-15.svg",
          contactUrl: "https://example.com/member-15"
        }
      ]
    },
    {
      folderId: "RLY-F006",
      windowId: "RLY-W006",
      name: { en: "Board / Managers", ar: "مجلس الإدارة / المدراء" },
      type: "board",
      artwork: "assets/committees/board-art.svg",
      members: [
        {
          id: "RLY-M016",
          infoId: "RLY-I016",
          name: { en: "Demo Manager 01", ar: "مدير تجريبي 01" },
          title: { en: "General President", ar: "الرئيس العام" },
          committee: { en: "Board of Directors", ar: "مجلس الإدارة" },
          bio: { en: "Oversees vision and strategic growth.", ar: "يشرف على رؤية واستراتيجية النادي." },
          image: "assets/people/manager-01.svg",
          contactUrl: "https://example.com/manager-01"
        },
        {
          id: "RLY-M017",
          infoId: "RLY-I017",
          name: { en: "Demo Manager 02", ar: "مدير تجريبي 02" },
          title: { en: "Vice President", ar: "نائب الرئيس" },
          committee: { en: "Board of Directors", ar: "مجلس الإدارة" },
          bio: { en: "Drives internal execution.", ar: "يدعم التنفيذ والمتابعة الداخلية." },
          image: "assets/people/manager-02.svg",
          contactUrl: "https://example.com/manager-02"
        },
        {
          id: "RLY-M018",
          infoId: "RLY-I018",
          name: { en: "Demo Manager 03", ar: "مدير تجريبي 03" },
          title: { en: "Managing Director", ar: "المدير التنفيذي" },
          committee: { en: "Board of Directors", ar: "مجلس الإدارة" },
          bio: { en: "Directs committee heads and goals.", ar: "يوجه رؤساء اللجان والأهداف التشغيلية." },
          image: "assets/people/manager-03.svg",
          contactUrl: "https://example.com/manager-03"
        },
        {
          id: "RLY-M019",
          infoId: "RLY-I019",
          name: { en: "Demo Manager 04", ar: "مدير تجريبي 04" },
          title: { en: "Secretary General", ar: "الأمين العام" },
          committee: { en: "Board of Directors", ar: "مجلس الإدارة" },
          bio: { en: "Manages administrative affairs.", ar: "يدير الشؤون الإدارية والتنظيمية." },
          image: "assets/people/manager-04.svg",
          contactUrl: "https://example.com/manager-04"
        }
      ]
    }
  ]
};
