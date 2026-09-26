export const appData = {
  defaultUrl: "https://ahmed-bin-salama.github.io/Rally-Desktop/",
  defaultEmail: "mailto:ahmedbinsalam@outlook.com",

  logoText: {
    en: "Rally Society SCU",
    ar: "مجتمع رالي - جامعة قناة السويس"
  },

  season: "16 / 09 / 2026 → 16 / 09 / 2027",

  announcement: {
    id: "RLY-MS001",
    en: "Rally Festival is coming on September 30, 2026 — a new gathering of ideas, people, and experiences is getting ready.",
    ar: "مهرجان رالي قادم يوم ٣٠ سبتمبر ٢٠٢٦ — تجربة جديدة تجمع الأفكار والناس والتجارب في يوم واحد.",
    url: "https://www.instagram.com/p/DduHeU_oR05/?stkn=MXN2anRoOTl0MGg5OQ=="
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
    email: { id: "RLY-C001", label: { en: "Email Us", ar: "البريد الإلكتروني" }, url: "mailto:ahmedbinsalam@outlook.com" },
    whatsappContact: { id: "RLY-C002", label: { en: "Contact WhatsApp", ar: "واتساب التواصل" }, url: "https://wa.me/201098011523" }
  },

  dock: {
    visitMe: {
      id: "RLY-K002",
      label: { en: "Visit Me", ar: "زرني" },
      url: "https://www.linkedin.com/in/ahmed-bin-salama"
    }
  },

  notifications: [
    {
      id: "RLY-N101",
      title: { en: "Rally Festival 2026", ar: "مهرجان رالي ٢٠٢٦" },
      description: { en: "Only a few days left until Rally Festival.", ar: "باقي أيام قليلة على مهرجان رالي." },
      badge: { en: "EVENT", ar: "فعالية" },
      url: "https://www.instagram.com/p/DduHeU_oR05/?stkn=MXN2a"
    },
    {
      id: "RLY-N102",
      title: { en: "Welcome to Rally Society SCU", ar: "مرحباً بكم في مجتمع رالي - جامعة قناة السويس" },
      description: { en: "Explore our interactive committees and administration.", ar: "استكشف لجاننا وإدارتنا بطريقة تفاعلية." },
      badge: { en: "NEW", ar: "جديد" },
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
          hasRealName: false,
          name: { en: "Member 01", ar: "عضو ١" },
          title: { en: "Head of PR", ar: "رئيس لجنة العلاقات العامة" },
          committee: { en: "PR Committee", ar: "لجنة العلاقات العامة" },
          studies: { en: "", ar: "" },
          interests: { en: "", ar: "" },
          bio: { en: "Leads public relations and external communications.", ar: "يقود العلاقات العامة والتواصل الخارجي." },
          image: "assets/people/member-01.svg",
          contactUrl: "mailto:ahmedbinsalam@outlook.com"
        },
        {
          id: "RLY-M002",
          infoId: "RLY-I002",
          hasRealName: true,
          name: { en: "Afnan Rashed", ar: "أفنان راشد" },
          title: { en: "Vice Head of PR", ar: "نائب رئيس لجنة العلاقات العامة" },
          committee: { en: "PR Committee", ar: "لجنة العلاقات العامة" },
          studies: { en: "Communications Technology", ar: "تكنولوجيا الاتصالات" },
          interests: { en: "Technology, reading", ar: "التكنولوجيا والقراءة" },
          bio: { en: "Coordinates PR campaigns and media partnerships.", ar: "تنسق حملات العلاقات العامة والشراكات." },
          image: "assets/people/Afnan-Rashed-as-Vice-Head-of-PR.webp",
          placeholderImage: "assets/people/member-02.svg",
          contactUrl: "mailto:afnanelawody6@gmail.com"
        },
        {
          id: "RLY-M003",
          infoId: "RLY-I003",
          hasRealName: false,
          name: { en: "Member 03", ar: "عضو ٣" },
          title: { en: "Vice Head of PR", ar: "نائب رئيس لجنة العلاقات العامة" },
          committee: { en: "PR Committee", ar: "لجنة العلاقات العامة" },
          studies: { en: "", ar: "" },
          interests: { en: "", ar: "" },
          bio: { en: "Manages event protocol and outreach.", ar: "يدير بروتوكول والتواصل في الفعاليات." },
          image: "assets/people/member-03.svg",
          contactUrl: "mailto:ahmedbinsalam@outlook.com"
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
          hasRealName: true,
          name: { en: "Eyad Mohamed", ar: "إياد محمد" },
          title: { en: "Head of HR", ar: "رئيس لجنة الموارد البشرية" },
          committee: { en: "HR Committee", ar: "لجنة الموارد البشرية" },
          studies: { en: "AI & Cloud Engineering", ar: "هندسة الذكاء الاصطناعي والسحابة" },
          interests: { en: "Learning, padel, Barca, and Formula One", ar: "التعلم والباديل وبرشلونة والفورمولا ١" },
          bio: { en: "Oversees recruitment and member performance.", ar: "يشرف على التعيينات وأداء الأعضاء." },
          image: "assets/people/Eyad-Mohamed-as-Head-of-HR.webp",
          placeholderImage: "assets/people/member-04.svg",
          contactUrl: "mailto:eyadayad066@gmail.com"
        },
        {
          id: "RLY-M005",
          infoId: "RLY-I005",
          hasRealName: true,
          name: { en: "Eman Ayman", ar: "إيمان أيمن" },
          title: { en: "Vice Head of HR", ar: "نائب رئيس لجنة الموارد البشرية" },
          committee: { en: "HR Committee", ar: "لجنة الموارد البشرية" },
          studies: { en: "Communications Technology", ar: "تكنولوجيا الاتصالات" },
          interests: { en: "Kickboxing, drawing", ar: "الكيك بوكسينغ والرسم" },
          bio: { en: "Drives member training programs.", ar: "تدير برامج التدريب والتأهيل للأعضاء." },
          image: "assets/people/Eman-Ayman-as-Vice-Head-of-HR.webp",
          placeholderImage: "assets/people/member-05.svg",
          contactUrl: "mailto:emanayman3313@gmail.com"
        },
        {
          id: "RLY-M006",
          infoId: "RLY-I006",
          hasRealName: false,
          name: { en: "Member 06", ar: "عضو ٦" },
          title: { en: "Vice Head of HR", ar: "نائب رئيس لجنة الموارد البشرية" },
          committee: { en: "HR Committee", ar: "لجنة الموارد البشرية" },
          studies: { en: "", ar: "" },
          interests: { en: "", ar: "" },
          bio: { en: "Manages member evaluations and welfare.", ar: "يدير تقييمات الأعضاء ورعايتهم." },
          image: "assets/people/member-06.svg",
          contactUrl: "mailto:ahmedbinsalam@outlook.com"
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
          hasRealName: true,
          name: { en: "Roba Hesham", ar: "ربى هشام" },
          title: { en: "Head of Entrepreneurship", ar: "رئيس لجنة ريادة الأعمال" },
          committee: { en: "Entrepreneurship Committee", ar: "لجنة ريادة الأعمال" },
          studies: { en: "Mechatronics", ar: "ميكاترونكس" },
          interests: { en: "Mechatronics", ar: "ميكاترونكس" },
          bio: { en: "Fosters entrepreneurial mindsets and startup guidance.", ar: "تعزز فكر ريادة الأعمال وتوجيه المشاريع." },
          image: "assets/people/Roba-Hesham-as-Head-of-Entrepreneurship.webp",
          placeholderImage: "assets/people/member-07.svg",
          contactUrl: "mailto:robamossa15@gmail.com"
        },
        {
          id: "RLY-M008",
          infoId: "RLY-I008",
          hasRealName: true,
          name: { en: "Basmala Mohamed", ar: "بسملة محمد" },
          title: { en: "Vice Head of Entrepreneurship", ar: "نائب رئيس لجنة ريادة الأعمال" },
          committee: { en: "Entrepreneurship Committee", ar: "لجنة ريادة الأعمال" },
          studies: { en: "Mechatronics Engineering", ar: "هندسة الميكاترونكس" },
          interests: { en: "Walking and reading", ar: "المشي والقراءة" },
          bio: { en: "Organizes startup incubator sessions.", ar: "تنظم جلسات حاضنة الأعمال والورش." },
          image: "assets/people/Basmala-Mohamed-as-Vice-Head-of-Entrepreneurship.webp",
          placeholderImage: "assets/people/member-08.svg",
          contactUrl: "mailto:bassmalamohamed331@gmail.com"
        },
        {
          id: "RLY-M009",
          infoId: "RLY-I009",
          hasRealName: true,
          name: { en: "Fatma Osama", ar: "فاطمة أسامة" },
          title: { en: "Vice Head of Entrepreneurship", ar: "نائب رئيس لجنة ريادة الأعمال" },
          committee: { en: "Entrepreneurship Committee", ar: "لجنة ريادة الأعمال" },
          studies: { en: "Mechatronics", ar: "ميكاترونكس" },
          interests: { en: "Entrepreneurship, reading", ar: "ريادة الأعمال والقراءة" },
          bio: { en: "Guides business canvas competitions.", ar: "توجه المسابقات ونماذج الأعمال." },
          image: "assets/people/Fatma-Osama-as-Vice-Head-of-ntrepreneurship.webp",
          placeholderImage: "assets/people/member-09.svg",
          contactUrl: "mailto:allafatma437@gmail.com"
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
          hasRealName: true,
          name: { en: "Nour Farouk", ar: "نور فاروق" },
          title: { en: "Head of Operations", ar: "رئيس لجنة العمليات" },
          committee: { en: "Operations Committee", ar: "لجنة العمليات" },
          studies: { en: "Electronics", ar: "إلكترونيات" },
          interests: { en: "Conference & Event Presenting, Public Speaking, Leadership, Media, Design", ar: "التقديم والحديث العام والقيادة والإعلام والتصميم" },
          bio: { en: "Directs logistics and overall event execution.", ar: "تدير اللوجستيات والتنفيذ الميداني للفعاليات." },
          image: "assets/people/Nour-Farouk-as-Head-of-Operation.webp",
          placeholderImage: "assets/people/member-10.svg",
          contactUrl: "mailto:nourfarouk731@gmail.com"
        },
        {
          id: "RLY-M011",
          infoId: "RLY-I011",
          hasRealName: false,
          name: { en: "Member 11", ar: "عضو ١١" },
          title: { en: "Vice Head of Operations", ar: "نائب رئيس لجنة العمليات" },
          committee: { en: "Operations Committee", ar: "لجنة العمليات" },
          studies: { en: "", ar: "" },
          interests: { en: "", ar: "" },
          bio: { en: "Coordinates equipment and venue setup.", ar: "ينسق تجهيز القاعات والمعدات." },
          image: "assets/people/member-11.svg",
          contactUrl: "mailto:ahmedbinsalam@outlook.com"
        },
        {
          id: "RLY-M012",
          infoId: "RLY-I012",
          hasRealName: false,
          name: { en: "Member 12", ar: "عضو ١٢" },
          title: { en: "Vice Head of Operations", ar: "نائب رئيس لجنة العمليات" },
          committee: { en: "Operations Committee", ar: "لجنة العمليات" },
          studies: { en: "", ar: "" },
          interests: { en: "", ar: "" },
          bio: { en: "Manages on-field coordination.", ar: "يدير التنسيق والدعم الميداني." },
          image: "assets/people/member-12.svg",
          contactUrl: "mailto:ahmedbinsalam@outlook.com"
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
          hasRealName: true,
          name: { en: "Ahmed Bin Salama", ar: "أحمد بن سلامة" },
          title: { en: "Head of Marketing", ar: "رئيس لجنة التسويق" },
          committee: { en: "Marketing Committee", ar: "لجنة التسويق" },
          studies: { en: "Medicine", ar: "الطب البشري" },
          interests: { en: "Entrepreneurship and AI", ar: "ريادة الأعمال والذكاء الاصطناعي" },
          bio: { en: "Leads marketing campaigns and branding.", ar: "يقود الحملات التسويقية والهوية البصرية." },
          image: "assets/people/Ahmed-Bin-Salama-as-Head-of-Marketing.webp",
          placeholderImage: "assets/people/member-13.svg",
          contactUrl: "mailto:dr.a7med.email@gmail.com"
        },
        {
          id: "RLY-M014",
          infoId: "RLY-I014",
          hasRealName: true,
          name: { en: "Abdulrahman Sabri", ar: "عبدالرحمن صبري" },
          title: { en: "Vice Head of Marketing", ar: "نائب رئيس لجنة التسويق" },
          committee: { en: "Marketing Committee", ar: "لجنة التسويق" },
          studies: { en: "Communication Engineering", ar: "هندسة الاتصالات" },
          interests: { en: "3D/games and swimming", ar: "الثلاثي الأبعاد والألعاب والسباحة" },
          bio: { en: "Manages digital content distribution.", ar: "يدير توزيع المحتوى الرقمي." },
          image: "assets/people/Abdulrahman-Sabri-as-Vice-Head-of-Marketing.webp",
          placeholderImage: "assets/people/member-14.svg",
          contactUrl: "mailto:bodaaboy@gmail.com"
        },
        {
          id: "RLY-M015",
          infoId: "RLY-I015",
          hasRealName: true,
          name: { en: "Menna Shawky", ar: "منة شوقي" },
          title: { en: "Vice Head of Marketing", ar: "نائب رئيس لجنة التسويق" },
          committee: { en: "Marketing Committee", ar: "لجنة التسويق" },
          studies: { en: "Commerce", ar: "التجارة" },
          interests: { en: "Business, Entrepreneurship and Chess", ar: "الأعمال وريادة الأعمال والشطرنج" },
          bio: { en: "Oversees creative copy and engagement.", ar: "تشرف على المحتوى الإبداعي والتفاعل." },
          image: "assets/people/Menna-Shawky-as-Vice-Head-of-Marketing.webp",
          placeholderImage: "assets/people/member-15.svg",
          contactUrl: "mailto:mennashawky959@gmail.com"
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
          hasRealName: true,
          name: { en: "Ahmed Shuaib", ar: "أحمد شعيب" },
          title: { en: "President", ar: "الرئيس" },
          committee: { en: "Administration", ar: "الإدارة" },
          studies: { en: "", ar: "" },
          interests: { en: "", ar: "" },
          bio: { en: "Leads Rally Society SCU vision and strategic goals.", ar: "يقود رؤية وأهداف مجتمع رالي بجامعة قناة السويس." },
          image: "assets/people/Ahmed-Shuaib-as-president.webp",
          placeholderImage: "assets/people/manager-01.svg",
          contactUrl: "mailto:ahmedbinsalam@outlook.com"
        },
        {
          id: "RLY-M017",
          infoId: "RLY-I017",
          hasRealName: true,
          name: { en: "Mohamed Abdulfattah", ar: "محمد عبدالفتاح" },
          title: { en: "Vice President", ar: "نائب الرئيس" },
          committee: { en: "Administration", ar: "الإدارة" },
          studies: { en: "Mechatronics Engineering", ar: "هندسة الميكاترونكس" },
          interests: { en: "Writing, music, and arts", ar: "الكتابة والموسيقى والفنون" },
          bio: { en: "Drives internal operations and committee alignment.", ar: "يدير العمليات والتنسيق بين اللجان." },
          image: "assets/people/Mohamed-Abdulfattah-as-Vice-of-president.webp",
          placeholderImage: "assets/people/manager-02.svg",
          contactUrl: "mailto:ahmedbinsalam@outlook.com"
        },
        {
          id: "RLY-M018",
          infoId: "RLY-I018",
          hasRealName: false,
          name: { en: "Board Member 03", ar: "عضو الإدارة ٣" },
          title: { en: "Coordinator", ar: "المنسق" },
          committee: { en: "Administration", ar: "الإدارة" },
          studies: { en: "", ar: "" },
          interests: { en: "", ar: "" },
          bio: { en: "Coordinates overall administration affairs.", ar: "ينسق الشؤون الإدارية العامة." },
          image: "assets/people/manager-03.svg",
          contactUrl: "mailto:ahmedbinsalam@outlook.com"
        }
      ]
    }
  ]
};
