export const appData = {
  defaultUrl: "https://ahmed-bin-salama.github.io/Rally-Desktop/",
  defaultEmail: "mailto:ahmedbinsalama@example.com",

  logoText: {
    en: "Rally Society SCU",
    ar: "مجتمع رالي - جامعة قناة السويس"
  },

  season: "16 / 09 / 2026 → 16 / 09 / 2027",

  announcement: {
    id: "RLY-MS001",
    en: "Rally Festival is coming on September 30, 2026 — a new gathering of ideas, people, and experiences is getting ready.",
    ar: "مهرجان رالي قادم يوم ٣٠ سبتمبر ٢٠٢٦ — تجربة جديدة تجمع الأفكار والناس والتجارب في يوم واحد.",
    url: "https://ahmed-bin-salama.github.io/Rally-Desktop/"
  },

  menuLinks: {
    facebook: { id: "RLY-B001", label: { en: "Facebook", ar: "فيسبوك" }, url: "https://ahmed-bin-salama.github.io/Rally-Desktop/" },
    tiktok: { id: "RLY-B002", label: { en: "TikTok", ar: "تيك توك" }, url: "https://ahmed-bin-salama.github.io/Rally-Desktop/" },
    instagram: { id: "RLY-B003", label: { en: "Instagram", ar: "إنستغرام" }, url: "https://ahmed-bin-salama.github.io/Rally-Desktop/" },
    whatsappGroup: { id: "RLY-B004", label: { en: "WhatsApp Group", ar: "مجموعة الواتساب" }, url: "https://ahmed-bin-salama.github.io/Rally-Desktop/" },
    attribution: {
      id: "RLY-LC001",
      label: { en: "Attribution", ar: "الحقوق والمساهمون" },
      text: {
        en: "Rally Society SCU Interactive Desktop is a digital experience created for Rally Society at Suez Canal University, designed and built by Ahmed Bin Salama to turn Rally’s organizational structure into a playful interactive desktop.",
        ar: "سطح مكتب مجتمع رالي بجامعة قناة السويس هو تجربة رقمية صُممت لمجتمع رالي بجامعة قناة السويس، وتم تصميمها وتطويرها بواسطة Ahmed Bin Salama لتحويل الهيكل التنظيمي لرالي إلى تجربة تفاعلية مرحة على شكل سطح مكتب."
      }
    },
    email: { id: "RLY-C001", label: { en: "Email Us", ar: "البريد الإلكتروني" }, url: "mailto:ahmedbinsalama@example.com" },
    whatsappContact: { id: "RLY-C002", label: { en: "Contact WhatsApp", ar: "واتساب التواصل" }, url: "https://ahmed-bin-salama.github.io/Rally-Desktop/" }
  },

  dock: {
    visitMe: {
      id: "RLY-K002",
      label: { en: "Visit Me", ar: "زرني" },
      url: "https://ahmed-bin-salama.github.io/Rally-Desktop/"
    }
  },

  notifications: [
    {
      id: "RLY-N101",
      title: { en: "Welcome to Rally Society SCU", ar: "مرحباً بكم في مجتمع رالي - جامعة قناة السويس" },
      description: { en: "Explore our interactive committees and administration.", ar: "استكشف لجاننا وإدارتنا بطريقة تفاعلية." },
      badge: { en: "NEW", ar: "جديد" },
      url: "https://ahmed-bin-salama.github.io/Rally-Desktop/"
    },
    {
      id: "RLY-N102",
      title: { en: "Rally Festival 2026", ar: "مهرجان رالي ٢٠٢٦" },
      description: { en: "Join us on September 30, 2026 for an exciting event.", ar: "انضم إلينا يوم ٣٠ سبتمبر ٢٠٢٦ لفعالية مميزة." },
      badge: { en: "EVENT", ar: "فعالية" },
      url: "https://ahmed-bin-salama.github.io/Rally-Desktop/"
    },
    {
      id: "RLY-N103",
      title: { en: "Applications & Workshops", ar: "التقديمات وورش العمل" },
      description: { en: "Stay tuned for committee announcements.", ar: "ترقبوا إعلانات اللجان وورش العمل القادمة." },
      badge: { en: "INFO", ar: "معلومات" },
      url: "https://ahmed-bin-salama.github.io/Rally-Desktop/"
    }
  ],

  folders: [
    {
      folderId: "RLY-F001",
      windowId: "RLY-W001",
      name: { en: "PR Committee", ar: "لجنة العلاقات العامة" },
      type: "committee",
      artwork: "assets/committees/committee-01.svg",
      joinButton: { id: "RLY-J001", label: { en: "Join PR Committee", ar: "انضم للجنة العلاقات العامة" }, url: "https://ahmed-bin-salama.github.io/Rally-Desktop/" },
      app: { id: "RLY-A001", windowId: "RLY-AW001", name: { en: "Members Directory", ar: "دليل الأعضاء" } },
      members: [
        {
          id: "RLY-M001",
          infoId: "RLY-I001",
          name: { en: "Member 01", ar: "عضو ١" },
          title: { en: "Head of PR", ar: "رئيس لجنة العلاقات العامة" },
          committee: { en: "PR Committee", ar: "لجنة العلاقات العامة" },
          studies: { en: "Suez Canal University", ar: "جامعة قناة السويس" },
          interests: { en: "Public Relations & Communication", ar: "العلاقات العامة والتواصل" },
          bio: { en: "Leads public relations and external communications.", ar: "يقود العلاقات العامة والتواصل الخارجي." },
          image: "assets/people/member-01.svg",
          contactUrl: "mailto:ahmedbinsalama@example.com"
        },
        {
          id: "RLY-M002",
          infoId: "RLY-I002",
          name: { en: "Member 02", ar: "عضو ٢" },
          title: { en: "Vice Head of PR", ar: "نائب رئيس لجنة العلاقات العامة" },
          committee: { en: "PR Committee", ar: "لجنة العلاقات العامة" },
          studies: { en: "Suez Canal University", ar: "جامعة قناة السويس" },
          interests: { en: "Media & Event Relations", ar: "العلاقات الإعلامية والفعاليات" },
          bio: { en: "Coordinates PR campaigns and media partnerships.", ar: "ينسق حملات العلاقات العامة والشراكات." },
          image: "assets/people/member-02.svg",
          contactUrl: "mailto:ahmedbinsalama@example.com"
        },
        {
          id: "RLY-M003",
          infoId: "RLY-I003",
          name: { en: "Member 03", ar: "عضو ٣" },
          title: { en: "Vice Head of PR", ar: "نائب رئيس لجنة العلاقات العامة" },
          committee: { en: "PR Committee", ar: "لجنة العلاقات العامة" },
          studies: { en: "Suez Canal University", ar: "جامعة قناة السويس" },
          interests: { en: "Outreach & Protocol", ar: "التواصل البروتوكولي" },
          bio: { en: "Manages event protocol and outreach.", ar: "يدير بروتوكول والتواصل في الفعاليات." },
          image: "assets/people/member-03.svg",
          contactUrl: "mailto:ahmedbinsalama@example.com"
        }
      ]
    },
    {
      folderId: "RLY-F002",
      windowId: "RLY-W002",
      name: { en: "HR Committee", ar: "لجنة الموارد البشرية" },
      type: "committee",
      artwork: "assets/committees/committee-02.svg",
      joinButton: { id: "RLY-J002", label: { en: "Join HR Committee", ar: "انضم للجنة الموارد البشرية" }, url: "https://ahmed-bin-salama.github.io/Rally-Desktop/" },
      app: { id: "RLY-A002", windowId: "RLY-AW002", name: { en: "Members Directory", ar: "دليل الأعضاء" } },
      members: [
        {
          id: "RLY-M004",
          infoId: "RLY-I004",
          name: { en: "Member 04", ar: "عضو ٤" },
          title: { en: "Head of HR", ar: "رئيس لجنة الموارد البشرية" },
          committee: { en: "HR Committee", ar: "لجنة الموارد البشرية" },
          studies: { en: "Suez Canal University", ar: "جامعة قناة السويس" },
          interests: { en: "Human Resources & Talent Development", ar: "الموارد البشرية وتطوير المواهب" },
          bio: { en: "Oversees recruitment and member performance.", ar: "يشرف على التعيينات وأداء الأعضاء." },
          image: "assets/people/member-04.svg",
          contactUrl: "mailto:ahmedbinsalama@example.com"
        },
        {
          id: "RLY-M005",
          infoId: "RLY-I005",
          name: { en: "Member 05", ar: "عضو ٥" },
          title: { en: "Vice Head of HR", ar: "نائب رئيس لجنة الموارد البشرية" },
          committee: { en: "HR Committee", ar: "لجنة الموارد البشرية" },
          studies: { en: "Suez Canal University", ar: "جامعة قناة السويس" },
          interests: { en: "Training & Onboarding", ar: "التدريب والتأهيل" },
          bio: { en: "Drives member training programs.", ar: "يدير برامج التدريب والتأهيل للأعضاء." },
          image: "assets/people/member-05.svg",
          contactUrl: "mailto:ahmedbinsalama@example.com"
        },
        {
          id: "RLY-M006",
          infoId: "RLY-I006",
          name: { en: "Member 06", ar: "عضو ٦" },
          title: { en: "Vice Head of HR", ar: "نائب رئيس لجنة الموارد البشرية" },
          committee: { en: "HR Committee", ar: "لجنة الموارد البشرية" },
          studies: { en: "Suez Canal University", ar: "جامعة قناة السويس" },
          interests: { en: "Evaluations & Community Welfare", ar: "التقييم ورعاية بيئة العمل" },
          bio: { en: "Manages member evaluations and welfare.", ar: "يدير تقييمات الأعضاء ورعايتهم." },
          image: "assets/people/member-06.svg",
          contactUrl: "mailto:ahmedbinsalama@example.com"
        }
      ]
    },
    {
      folderId: "RLY-F003",
      windowId: "RLY-W003",
      name: { en: "Entrepreneurship Committee", ar: "لجنة ريادة الأعمال" },
      type: "committee",
      artwork: "assets/committees/committee-03.svg",
      joinButton: { id: "RLY-J003", label: { en: "Join Entrepreneurship", ar: "انضم للجنة ريادة الأعمال" }, url: "https://ahmed-bin-salama.github.io/Rally-Desktop/" },
      app: { id: "RLY-A003", windowId: "RLY-AW003", name: { en: "Members Directory", ar: "دليل الأعضاء" } },
      members: [
        {
          id: "RLY-M007",
          infoId: "RLY-I007",
          name: { en: "Member 07", ar: "عضو ٧" },
          title: { en: "Head of Entrepreneurship", ar: "رئيس لجنة ريادة الأعمال" },
          committee: { en: "Entrepreneurship Committee", ar: "لجنة ريادة الأعمال" },
          studies: { en: "Suez Canal University", ar: "جامعة قناة السويس" },
          interests: { en: "Startups & Innovation", ar: "الشركات الناشئة والابتكار" },
          bio: { en: "Fosters entrepreneurial mindsets and startup guidance.", ar: "يعزز فكر ريادة الأعمال وتوجيه المشاريع." },
          image: "assets/people/member-07.svg",
          contactUrl: "mailto:ahmedbinsalama@example.com"
        },
        {
          id: "RLY-M008",
          infoId: "RLY-I008",
          name: { en: "Member 08", ar: "عضو ٨" },
          title: { en: "Vice Head of Entrepreneurship", ar: "نائب رئيس لجنة ريادة الأعمال" },
          committee: { en: "Entrepreneurship Committee", ar: "لجنة ريادة الأعمال" },
          studies: { en: "Suez Canal University", ar: "جامعة قناة السويس" },
          interests: { en: "Incubation & Workshops", ar: "حاضنات الأعمال والورش" },
          bio: { en: "Organizes startup incubator sessions.", ar: "ينظم جلسات حاضنة الأعمال والورش." },
          image: "assets/people/member-08.svg",
          contactUrl: "mailto:ahmedbinsalama@example.com"
        },
        {
          id: "RLY-M009",
          infoId: "RLY-I009",
          name: { en: "Member 09", ar: "عضو ٩" },
          title: { en: "Vice Head of Entrepreneurship", ar: "نائب رئيس لجنة ريادة الأعمال" },
          committee: { en: "Entrepreneurship Committee", ar: "لجنة ريادة الأعمال" },
          studies: { en: "Suez Canal University", ar: "جامعة قناة السويس" },
          interests: { en: "Business Models & Competitions", ar: "نماذج الأعمال والمسابقات" },
          bio: { en: "Guides business canvas competitions.", ar: "يوجه المسابقات ونماذج الأعمال." },
          image: "assets/people/member-09.svg",
          contactUrl: "mailto:ahmedbinsalama@example.com"
        }
      ]
    },
    {
      folderId: "RLY-F004",
      windowId: "RLY-W004",
      name: { en: "Operations Committee", ar: "لجنة العمليات" },
      type: "committee",
      artwork: "assets/committees/committee-04.svg",
      joinButton: { id: "RLY-J004", label: { en: "Join Operations Committee", ar: "انضم للجنة العمليات" }, url: "https://ahmed-bin-salama.github.io/Rally-Desktop/" },
      app: { id: "RLY-A004", windowId: "RLY-AW004", name: { en: "Members Directory", ar: "دليل الأعضاء" } },
      members: [
        {
          id: "RLY-M010",
          infoId: "RLY-I010",
          name: { en: "Member 10", ar: "عضو ١٠" },
          title: { en: "Head of Operations", ar: "رئيس لجنة العمليات" },
          committee: { en: "Operations Committee", ar: "لجنة العمليات" },
          studies: { en: "Suez Canal University", ar: "جامعة قناة السويس" },
          interests: { en: "Logistics & On-Ground Execution", ar: "اللوجستيات والتنفيذ الميداني" },
          bio: { en: "Directs logistics and overall event execution.", ar: "يدير اللوجستيات والتنفيذ الميداني للفعاليات." },
          image: "assets/people/member-10.svg",
          contactUrl: "mailto:ahmedbinsalama@example.com"
        },
        {
          id: "RLY-M011",
          infoId: "RLY-I011",
          name: { en: "Member 11", ar: "عضو ١١" },
          title: { en: "Vice Head of Operations", ar: "نائب رئيس لجنة العمليات" },
          committee: { en: "Operations Committee", ar: "لجنة العمليات" },
          studies: { en: "Suez Canal University", ar: "جامعة قناة السويس" },
          interests: { en: "Venue Management & Gear", ar: "إدارة القاعات والمعدات" },
          bio: { en: "Coordinates equipment and venue setup.", ar: "ينسق تجهيز القاعات والمعدات." },
          image: "assets/people/member-11.svg",
          contactUrl: "mailto:ahmedbinsalama@example.com"
        },
        {
          id: "RLY-M012",
          infoId: "RLY-I012",
          name: { en: "Member 12", ar: "عضو ١٢" },
          title: { en: "Vice Head of Operations", ar: "نائب رئيس لجنة العمليات" },
          committee: { en: "Operations Committee", ar: "لجنة العمليات" },
          studies: { en: "Suez Canal University", ar: "جامعة قناة السويس" },
          interests: { en: "Field Logistics & Support", ar: "الدعم والدعم الميداني" },
          bio: { en: "Manages on-field coordination.", ar: "يدير التنسيق والدعم الميداني." },
          image: "assets/people/member-12.svg",
          contactUrl: "mailto:ahmedbinsalama@example.com"
        }
      ]
    },
    {
      folderId: "RLY-F005",
      windowId: "RLY-W005",
      name: { en: "Marketing Committee", ar: "لجنة التسويق" },
      type: "committee",
      artwork: "assets/committees/committee-05.svg",
      joinButton: { id: "RLY-J005", label: { en: "Join Marketing Committee", ar: "انضم للجنة التسويق" }, url: "https://ahmed-bin-salama.github.io/Rally-Desktop/" },
      app: { id: "RLY-A005", windowId: "RLY-AW005", name: { en: "Members Directory", ar: "دليل الأعضاء" } },
      members: [
        {
          id: "RLY-M013",
          infoId: "RLY-I013",
          name: { en: "Member 13", ar: "عضو ١٣" },
          title: { en: "Head of Marketing", ar: "رئيس لجنة التسويق" },
          committee: { en: "Marketing Committee", ar: "لجنة التسويق" },
          studies: { en: "Suez Canal University", ar: "جامعة قناة السويس" },
          interests: { en: "Brand Strategy & Campaigns", ar: "استراتيجيات الهوية والحملات" },
          bio: { en: "Leads marketing campaigns and branding.", ar: "يقود الحملات التسويقية والهوية البصرية." },
          image: "assets/people/member-13.svg",
          contactUrl: "mailto:ahmedbinsalama@example.com"
        },
        {
          id: "RLY-M014",
          infoId: "RLY-I014",
          name: { en: "Member 14", ar: "عضو ١٤" },
          title: { en: "Vice Head of Marketing", ar: "نائب رئيس لجنة التسويق" },
          committee: { en: "Marketing Committee", ar: "لجنة التسويق" },
          studies: { en: "Suez Canal University", ar: "جامعة قناة السويس" },
          interests: { en: "Social Media Strategy", ar: "استراتيجية التواصل الاجتماعي" },
          bio: { en: "Manages digital content distribution.", ar: "يدير توزيع المحتوى الرقمي." },
          image: "assets/people/member-14.svg",
          contactUrl: "mailto:ahmedbinsalama@example.com"
        },
        {
          id: "RLY-M015",
          infoId: "RLY-I015",
          name: { en: "Member 15", ar: "عضو ١٥" },
          title: { en: "Vice Head of Marketing", ar: "نائب رئيس لجنة التسويق" },
          committee: { en: "Marketing Committee", ar: "لجنة التسويق" },
          studies: { en: "Suez Canal University", ar: "جامعة قناة السويس" },
          interests: { en: "Creative Media & Copywriting", ar: "الإعلام الإبداعي وصناعة المحتوى" },
          bio: { en: "Oversees creative copy and engagement.", ar: "يشرف على المحتوى الإبداعي والتفاعل." },
          image: "assets/people/member-15.svg",
          contactUrl: "mailto:ahmedbinsalama@example.com"
        }
      ]
    },
    {
      folderId: "RLY-F006",
      windowId: "RLY-W006",
      name: { en: "Administration", ar: "الإدارة" },
      type: "board",
      artwork: "assets/committees/board-art.svg",
      members: [
        {
          id: "RLY-M016",
          infoId: "RLY-I016",
          name: { en: "Board Member 01", ar: "عضو الإدارة ١" },
          title: { en: "President", ar: "الرئيس" },
          committee: { en: "Administration", ar: "الإدارة" },
          studies: { en: "Suez Canal University", ar: "جامعة قناة السويس" },
          interests: { en: "Organizational Leadership & Strategy", ar: "القيادة التنظيمية والاستراتيجية" },
          bio: { en: "Leads Rally Society SCU vision and strategic goals.", ar: "يقود رؤية وأهداف مجتمع رالي بجامعة قناة السويس." },
          image: "assets/people/manager-01.svg",
          contactUrl: "mailto:ahmedbinsalama@example.com"
        },
        {
          id: "RLY-M017",
          infoId: "RLY-I017",
          name: { en: "Board Member 02", ar: "عضو الإدارة ٢" },
          title: { en: "Vice President", ar: "نائب الرئيس" },
          committee: { en: "Administration", ar: "الإدارة" },
          studies: { en: "Suez Canal University", ar: "جامعة قناة السويس" },
          interests: { en: "Operations & Governance", ar: "العمليات والإدارة التنفيذية" },
          bio: { en: "Drives internal operations and committee alignment.", ar: "يدير العمليات والتنسيق بين اللجان." },
          image: "assets/people/manager-02.svg",
          contactUrl: "mailto:ahmedbinsalama@example.com"
        },
        {
          id: "RLY-M018",
          infoId: "RLY-I018",
          name: { en: "Board Member 03", ar: "عضو الإدارة ٣" },
          title: { en: "Coordinator", ar: "المنسق" },
          committee: { en: "Administration", ar: "الإدارة" },
          studies: { en: "Suez Canal University", ar: "جامعة قناة السويس" },
          interests: { en: "General Coordination & Oversight", ar: "التنسيق العام والمتابعة" },
          bio: { en: "Coordinates overall administration affairs.", ar: "ينسق الشؤون الإدارية العامة." },
          image: "assets/people/manager-03.svg",
          contactUrl: "mailto:ahmedbinsalama@example.com"
        }
      ]
    }
  ]
};
