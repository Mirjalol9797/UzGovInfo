/**
 * Хокимият Навоийской области
 * Официальный раздел: https://gov.uz/ru/navoi
 */
const navoiTerritoryLinks = [
  { url: "https://gov.uz/karmana/", ru: "Карманинский район", en: "Karmana district", uz: "Karmana tumani" },
  { url: "https://gov.uz/navoiy/", ru: "город Навои", en: "Navoi city", uz: "Navoiy shahri" },
  { url: "https://gov.uz/uchquduq/", ru: "Учкудукский район", en: "Uchquduq district", uz: "Uchquduq tumani" },
  { url: "https://gov.uz/tomdi/", ru: "Тамдынский район", en: "Tomdi district", uz: "Tomdi tumani" },
  { url: "https://gov.uz/gazgan/", ru: "Город Газган", en: "Gazgan city", uz: "Gazgan shahri" },
  { url: "https://gov.uz/qiziltepa/", ru: "Кызылтепинский район", en: "Qiziltepa district", uz: "Qiziltepa tumani" },
  { url: "https://gov.uz/konimex/", ru: "Канимехский район", en: "Konimex district", uz: "Konimex tumani" },
  { url: "https://gov.uz/navbahor/", ru: "Навбахорский район", en: "Navbahor district", uz: "Navbahor tumani" },
  { url: "https://gov.uz/xatirchi/", ru: "Хатырчинский район", en: "Khatirchi district", uz: "Xatirchi tumani" },
  { url: "https://gov.uz/zarafshon/", ru: "город Зарафшан", en: "Zarafshan city", uz: "Zarafshon shahri" },
  { url: "https://gov.uz/nurota/", ru: "Нуратинский район", en: "Nurata district", uz: "Nurota tumani" },
];

export default {
  ru: {
    pageTitle: "Хокимият Навоийской области",
    intro: [
      "Хокимият Навоийской области — орган исполнительной власти на территории области; обеспечивает реализацию законодательства, решений Президента и Кабинета Министров и социально-экономическое развитие региона, включая промышленность, сельское хозяйство, туризм и социальную сферу.",
      "На портале gov.uz раздел navoi (https://gov.uz/ru/navoi) содержит сведения о хокимияте: о хокимияте, структуре организации, руководстве, центральном аппарате, городах и районах, заседаниях, областных предприятиях, вакансиях. В «Деятельности» — перепись, новые технологии, конкурсы и тендеры, борьба с коррупцией, электронное правительство, экономика, статистика, публичные мероприятия, туризм, международное сотрудничество, сельское хозяйство, спорт, молодёжная политика, поддержка женщин и девушек. В «Государственных услугах» — план участия в землепользовании, единый интерактивный портал госуслуг, интерактивные услуги администрации области. В «Документах» — исполнительская дисциплина, НПА, решения хокима, утратившие силу акты, координационные органы, обращения, госпрограммы, открытый бюджет, проекты НПА, правовой статус хокимията. В «Цифровом правительстве» — «умный город», противодействие коррупции, страница Конституции, общественный совет, ПФ-6247. Пресс-центр: широкий тематический охват (соцсфера, транспорт, экология, здравоохранение, образование и др.), новости, заявления руководства, календарь, пресс-конференции. Контакты: вопросы и ответы, обратная связь, анкеты. По сведениям UzGovInfo (govinfo.uz) и раздела на gov.uz: телефон +99879 229-62-06, телефон доверия 79-220-10-20 (добавочный 1066), электронная почта info@navoi.uz, адрес 210100, Навои, ул. Ислам Каримов, 77А; ссылки на города и районы и соцсети — в блоке контактов; полный список номеров — в «Все номера» на gov.uz.",
      "Полезен жителям и бизнесу Навоийской области, инвесторам и СМИ при работе с региональными программами и официальными обращениями.",
    ],
    officialSite: {
      h2: "Официальный раздел на gov.uz",
      ctaText:
        "Перейти в раздел хокимията Навоийской области на gov.uz →",
    },
    contacts: {
      h2: "Контакты",
      labels: {
        phone: "Телефон",
        trustPhone: "Телефон доверия",
        email: "Эл. адрес",
        territorialOffices: "Города и районы",
        social: "Социальные сети",
        address: "Адрес",
        transport: "Транспорт",
        hours: "Рабочее время",
      },
      phones: [{ display: "+99879 229-62-06", href: "tel:+998792296206" }],
      trustPhone: {
        display: "79-220-10-20 (доб. 1066)",
        href: "tel:+998792201020",
      },
      email: { display: "info@navoi.uz", href: "mailto:info@navoi.uz" },
      territorialOffices: navoiTerritoryLinks.map(({ url, ru: label }) => ({ url, label })),
      social: [
        {
          id: "facebook",
          label: "Facebook",
          url: "https://www.facebook.com/people/Navoiy-viloyat-I-hokimligi-axborot-xizmati/61555246528050/?mibextid=LQQJ4d",
        },
        {
          id: "youtube",
          label: "YouTube",
          url: "https://www.youtube.com/channel/navoiyaxborot",
        },
        { id: "telegram", label: "Telegram", url: "https://t.me/navoiy_hokimligi" },
        {
          id: "instagram",
          label: "Instagram",
          url: "https://www.instagram.com/navoi_uz_official/",
        },
      ],
      address: "210100, Навои, ул. Ислам Каримов, 77А",
      hours: "Понедельник–пятница",
      sourceAttribution: {
        dataSource:
          "Контактные данные приведены по сведениям портала UzGovInfo (govinfo.uz), страница хокимията Навоийской области.",
        reuseNoticeBefore: "При использовании материалов с данного сайта ссылка на ",
        reuseLinkText: "сайт",
        reuseNoticeAfter: " обязательна.",
        reuseUrl: "https://gov.uz/ru/navoi",
      },
    },
    whatFind: {
      h2: "Что можно найти на официальном ресурсе",
      intro:
        "Раздел gov.uz/navoi объединяет полномочия областного хокимията, госуслуги и открытую информацию.",
      listLabel: "На разделе обычно доступны:",
      items: [
        {
          icon: "building",
          title: "О хокимияте",
          desc: "Сведения о хокимияте, структура, руководство, центральный аппарат, города и районы, заседания, областные предприятия, вакансии",
        },
        {
          icon: "program",
          title: "Деятельность",
          desc: "Перепись, технологии, тендеры, антикоррупция, электронное правительство, экономика, туризм, сельское хозяйство, спорт, молодёжь и гендерная политика",
        },
        {
          icon: "globe",
          title: "Государственные услуги",
          desc: "Землепользование, единый интерактивный портал, услуги администрации области",
        },
        {
          icon: "decree",
          title: "Документы",
          desc: "НПА, решения хокима, госпрограммы, открытый бюджет, обращения, правовой статус",
        },
        {
          icon: "chart",
          title: "Цифровое правительство",
          desc: "Умный город, Конституция, общественный совет, ПФ-6247",
        },
        {
          icon: "news",
          title: "Пресс-центр и контакты",
          desc: "Новости по отраслям, пресс-релизы, календарь; FAQ и обратная связь",
        },
      ],
      closing:
        "Меню обновляется; актуальные сведения смотрите на gov.uz/navoi.",
    },
    whyUse: {
      h2: "Зачем использовать официальный раздел",
      intro:
        "gov.uz/navoi — канал официальной информации хокимията Навоийской области на едином портале.",
      listLabel: "Раздел особенно полезен:",
      items: [
        "жителям области при поиске новостей, земельных процедур и контактов",
        "предпринимателям при участии в тендерах и работе с решениями хокима",
        "журналистам при поиске пресс-материалов и статистики по соцсфере",
        "организациям при подготовке обращений и участии в общественном совете",
      ],
    },
    otherSites: {
      h2: "Другие официальные сайты государственных органов",
    },
    schema: {
      description:
        "Официальный раздел хокимията Навоийской области на портале gov.uz (navoi): телефон +99879 229-62-06, телефон доверия 79-220-10-20 (доб. 1066), электронная почта info[at]navoi.uz, адрес 210100, Навои, ул. Ислам Каримов, 77А, ссылки на города и районы на gov.uz, соцсети (Facebook, YouTube, Telegram, Instagram), приём по будням.",
      orgName: "Хокимият Навоийской области",
      sameAs: [
        "https://gov.uz/ru/navoi",
        "https://gov.uz/en/navoi",
        "https://gov.uz/oz/navoi",
      ],
    },
    faq: {
      h2: "Часто задаваемые вопросы",
      items: [
        {
          q: "Где официальный раздел хокимията Навоийской области?",
          a: "На портале государства: https://gov.uz/ru/navoi (также https://gov.uz/en/navoi и https://gov.uz/oz/navoi). В каталоге ссылка подставляется под язык интерфейса.",
        },
        {
          q: "Какие телефоны, почта и адрес указаны для связи?",
          a: "Телефон +99879 229-62-06, телефон доверия 79-220-10-20 (добавочный 1066), электронная почта info@navoi.uz, адрес 210100, Навои, ул. Ислам Каримов, 77А; города, районы и соцсети — в блоке контактов (по govinfo.uz); полный перечень номеров — в «Все номера» на gov.uz.",
        },
        {
          q: "Где интерактивные услуги областной администрации?",
          a: "В разделе «Государственные услуги» — «Интерактивные услуги администрации Навоийской области» и единый портал.",
        },
        {
          q: "Где открытый бюджет и ПФ-6247?",
          a: "В «Документах» — открытый бюджет; в «Цифровом правительстве» — ПФ-6247.",
        },
      ],
    },
  },
  en: {
    pageTitle: "Navoiy regional administration",
    intro: [
      "The Navoiy regional administration is the executive body of the Navoiy region; it implements legislation and decisions of the President and Cabinet of Ministers and guides socio-economic development, including industry, agriculture, tourism and social sectors.",
      "The gov.uz navoi section (https://gov.uz/en/navoi) publishes information about the khokimiyat: about the administration, structure, leadership, central staff, cities and districts, sessions, regional enterprises, vacancies. Activities include census, new technologies, competitions and tenders, anti-corruption, e-government, economy, statistics, public events, tourism, international cooperation, agriculture, sport, youth policy, women and girls. Public services include land use participation plan, unified interactive public services portal, interactive services of the regional administration. Documents include executive discipline, legal acts, governor’s decisions affecting citizens and businesses, repealed laws, coordination bodies, appeals, state programmes, open budget, draft NPA documentation, legal status of the khokimiyat. Digital government includes smart city, anti-corruption, Constitution page, public council, PF-6247. Press centre covers broad themes (social sector, transport, ecology, health, education, etc.), news, leadership statements, calendar, press conferences. Contacts: Q&A, feedback, surveys. Per UzGovInfo (govinfo.uz) and the gov.uz section: phone +99879 229-62-06, trust line 79-220-10-20 (ext. 1066), email info@navoi.uz, address 210100, Navoi, Islam Karimov street 77A; links to cities and districts and social media are in the contacts block; for the full number list see “All numbers” on gov.uz.",
      "Useful for residents and businesses in Navoiy region, investors and media seeking regional programmes and official contacts.",
    ],
    officialSite: {
      h2: "Official section on gov.uz",
      ctaText: "Open the Navoiy regional administration section on gov.uz →",
    },
    contacts: {
      h2: "Contacts",
      labels: {
        phone: "Phone",
        trustPhone: "Trust line",
        email: "Email",
        territorialOffices: "Cities and districts",
        social: "Social media",
        address: "Address",
        transport: "Transport",
        hours: "Office hours",
      },
      phones: [{ display: "+99879 229-62-06", href: "tel:+998792296206" }],
      trustPhone: {
        display: "79-220-10-20 (ext. 1066)",
        href: "tel:+998792201020",
      },
      email: { display: "info@navoi.uz", href: "mailto:info@navoi.uz" },
      territorialOffices: navoiTerritoryLinks.map(({ url, en: label }) => ({ url, label })),
      social: [
        {
          id: "facebook",
          label: "Facebook",
          url: "https://www.facebook.com/people/Navoiy-viloyat-I-hokimligi-axborot-xizmati/61555246528050/?mibextid=LQQJ4d",
        },
        {
          id: "youtube",
          label: "YouTube",
          url: "https://www.youtube.com/channel/navoiyaxborot",
        },
        { id: "telegram", label: "Telegram", url: "https://t.me/navoiy_hokimligi" },
        {
          id: "instagram",
          label: "Instagram",
          url: "https://www.instagram.com/navoi_uz_official/",
        },
      ],
      address: "210100, Navoi, Islam Karimov street, 77A",
      hours: "Monday–Friday",
      sourceAttribution: {
        dataSource:
          "Contact details are taken from the UzGovInfo portal (govinfo.uz), page of the Navoiy regional administration.",
        reuseNoticeBefore: "When using materials from this site, a link to the ",
        reuseLinkText: "site",
        reuseNoticeAfter: " is required.",
        reuseUrl: "https://gov.uz/en/navoi",
      },
    },
    whatFind: {
      h2: "What you can find there",
      intro:
        "gov.uz/navoi brings together the regional administration’s mandate, public services and transparency.",
      listLabel: "You can typically find:",
      items: [
        {
          icon: "building",
          title: "About the administration",
          desc: "About the khokimiyat, structure, leadership, central staff, cities and districts, sessions, enterprises, vacancies",
        },
        {
          icon: "program",
          title: "Activities",
          desc: "Census, technology, tenders, anti-corruption, e-government, economy, tourism, agriculture, sport, youth and gender",
        },
        {
          icon: "globe",
          title: "Public services",
          desc: "Land use plan, unified portal, interactive regional services",
        },
        {
          icon: "decree",
          title: "Documents",
          desc: "Legal acts, governor’s decisions, programmes, open budget, appeals, legal status",
        },
        {
          icon: "chart",
          title: "Digital government",
          desc: "Smart city, Constitution, public council, PF-6247",
        },
        {
          icon: "news",
          title: "Press centre and contacts",
          desc: "Sector news, press releases, calendar; Q&A and feedback",
        },
      ],
      closing: "Menus are updated; see gov.uz/navoi for current information.",
    },
    whyUse: {
      h2: "Why use this official resource",
      intro:
        "gov.uz/navoi is the official channel of the Navoiy regional administration on Uzbekistan’s portal.",
      listLabel: "It is especially useful for:",
      items: [
        "residents seeking news, land procedures and contacts",
        "businesses participating in tenders and reviewing governor’s decisions",
        "journalists looking for press materials and social-sector statistics",
        "organisations engaging with the public council and appeals",
      ],
    },
    otherSites: {
      h2: "Other official websites of government bodies",
    },
    schema: {
      description:
        "Official section of the Navoiy regional administration on gov.uz (navoi): phone +99879 229-62-06, trust line 79-220-10-20 (ext. 1066), email info[at]navoi.uz, address 210100, Navoi, Islam Karimov street 77A, links to cities and districts on gov.uz, social media (Facebook, YouTube, Telegram, Instagram), weekday reception.",
      orgName: "Navoiy regional administration",
      sameAs: [
        "https://gov.uz/en/navoi",
        "https://gov.uz/ru/navoi",
        "https://gov.uz/oz/navoi",
      ],
    },
    faq: {
      h2: "Frequently asked questions",
      items: [
        {
          q: "Where is the official section of the Navoiy regional administration?",
          a: "On the government portal: https://gov.uz/en/navoi (also https://gov.uz/ru/navoi and https://gov.uz/oz/navoi). The catalog link matches your interface language.",
        },
        {
          q: "What phones, email and address are listed for contact?",
          a: "Phone +99879 229-62-06, trust line 79-220-10-20 (ext. 1066), email info@navoi.uz, address 210100, Navoi, Islam Karimov street 77A; cities, districts and social media — in the contacts block on this page (per govinfo.uz); see “All numbers” on gov.uz for the full list.",
        },
        {
          q: "Where are interactive services of the regional administration?",
          a: "Under Public services — interactive services of the Navoiy regional administration and the unified portal.",
        },
        {
          q: "Where are open budget and PF-6247?",
          a: "Open budget under Documents; PF-6247 under Digital government.",
        },
      ],
    },
  },
  uz: {
    pageTitle: "Navoiy viloyati hokimligi",
    intro: [
      "Navoiy viloyati hokimligi — viloyat hududidagi ijroiya hokimiyati organi; qonunchilik, Prezident va Vazirlar Kengashi qarorlarini amalga oshiradi, sanoat, qishloq xoʻjaligi, turizm va ijtimoiy sohani rivojlantirishni taʼminlaydi.",
      "gov.uz «navoi» boʻlimi (https://gov.uz/oz/navoi) da hokimiyat haqida: tuzilma, rahbariyat, markaziy apparat, shahar va tumanlar, majlislar, viloyat korxonalari, vakansiyalar. «Faoliyat»da roʻyxatdan oʻtish, yangi texnologiyalar, tenderlar, korrupsiyaga qarshi kurash, elektron hukumat, iqtisodiyot, statistika, ommaviy tadbirlar, turizm, xalqaro hamkorlik, qishloq xoʻjaligi, sport, yoshlar va ayollar-qizlar qoʻllab-quvvatlash. «Davlat xizmatlari»da yer dan foydalanish ishtiroki rejasi, yagona interaktiv portal, viloyat maʼmuriyatining interaktiv xizmatlari. «Hujjatlar»da ijro intizomi, meʼyoriy-huquqiy hujjatlar, hokim qarorlari, davlat dasturlari, ochiq byudjet, murojaatlar. «Raqamli davlat»da «Aqlli shahar», Konstitutsiya sahifasi, jamoatchilik kengashi, PF-6247. Matbuot markazi va aloqa. UzGovInfo (govinfo.uz) va gov.uz boʻlimi boʻyicha: telefon +99879 229-62-06, ishonch telefoni 79-220-10-20 (1066 qoʻshimcha raqami), elektron pochta info@navoi.uz, manzil 210100, Navoiy, Islom Karimov koʻchasi, 77A; shahar va tumanlar hamda ijtimoiy tarmoqlar — kontaktlar blokida; toʻliq raqamlar — gov.uz dagi «Barcha raqamlar».",
      "Navoiy viloyati fuqarolari va tadbirkorlari uchun rasmiy manba.",
    ],
    officialSite: {
      h2: "gov.uz dagi rasmiy boʻlim",
      ctaText: "Navoiy viloyati hokimligi boʻlimiga oʻtish →",
    },
    contacts: {
      h2: "Kontaktlar",
      labels: {
        phone: "Telefon",
        trustPhone: "Ishonch telefoni",
        email: "Elektron pochta",
        territorialOffices: "Shahar va tumanlar",
        social: "Ijtimoiy tarmoqlar",
        address: "Manzil",
        transport: "Transport",
        hours: "Ish vaqti",
      },
      phones: [{ display: "+99879 229-62-06", href: "tel:+998792296206" }],
      trustPhone: {
        display: "79-220-10-20 (1066)",
        href: "tel:+998792201020",
      },
      email: { display: "info@navoi.uz", href: "mailto:info@navoi.uz" },
      territorialOffices: navoiTerritoryLinks.map(({ url, uz: label }) => ({ url, label })),
      social: [
        {
          id: "facebook",
          label: "Facebook",
          url: "https://www.facebook.com/people/Navoiy-viloyat-I-hokimligi-axborot-xizmati/61555246528050/?mibextid=LQQJ4d",
        },
        {
          id: "youtube",
          label: "YouTube",
          url: "https://www.youtube.com/channel/navoiyaxborot",
        },
        { id: "telegram", label: "Telegram", url: "https://t.me/navoiy_hokimligi" },
        {
          id: "instagram",
          label: "Instagram",
          url: "https://www.instagram.com/navoi_uz_official/",
        },
      ],
      address: "210100, Navoiy, Islom Karimov koʻchasi, 77A",
      hours: "Dushanba–juma",
      sourceAttribution: {
        dataSource:
          "Kontakt maʼlumotlari UzGovInfo portali (govinfo.uz), Navoiy viloyati hokimligi sahifasidan olingan.",
        reuseNoticeBefore: "Ushbu sayt materiallaridan foydalanganda ",
        reuseLinkText: "saytga",
        reuseNoticeAfter: " havola qoʻyish majburiy.",
        reuseUrl: "https://gov.uz/oz/navoi",
      },
    },
    whatFind: {
      h2: "Rasmiy resursda nimalar bor",
      intro: "gov.uz/navoi viloyat hokimiyati vakolati va ochiq axborotni birlashtiradi.",
      listLabel: "Odatda mavjud:",
      items: [
        {
          icon: "building",
          title: "Hokimiyat haqida",
          desc: "Tuzilma, rahbariyat, shahar va tumanlar, korxonalar",
        },
        {
          icon: "program",
          title: "Faoliyat",
          desc: "Tenderlar, turizm, qishloq xoʻjaligi, sport, yoshlar",
        },
        {
          icon: "globe",
          title: "Davlat xizmatlari",
          desc: "Yagona portal, viloyatning interaktiv xizmatlari",
        },
        {
          icon: "decree",
          title: "Hujjatlar",
          desc: "Normativ hujjatlar, ochiq byudjet, davlat dasturlari",
        },
        {
          icon: "chart",
          title: "Raqamli davlat",
          desc: "Aqlli shahar, PF-6247, jamoatchilik kengashi",
        },
        {
          icon: "news",
          title: "Matbuot va aloqa",
          desc: "Yangiliklar, savollar-javoblar, qayta aloqa",
        },
      ],
      closing: "Menyu yangilanadi; gov.uz/navoi dan tekshiring.",
    },
    whyUse: {
      h2: "Nima uchun rasmiy boʻlimdan foydalanish kerak",
      intro:
        "gov.uz/navoi — Navoiy viloyati hokimiyatining yagona davlat portali boʻyicha rasmiy kanali.",
      listLabel: "Quyidagilar uchun muhim:",
      items: [
        "viloyat yangiliklari va yer masalalari bilan ishlovchilar uchun",
        "tender va hokim qarorlari bilan bogʻliq subyektlar uchun",
        "ijtimoiy soha va matbuot uchun",
      ],
    },
    otherSites: {
      h2: "Boshqa davlat organlarining rasmiy saytlari",
    },
    schema: {
      description:
        "Navoiy viloyati hokimligining gov.uz portali boʻlimi (navoi): telefon +99879 229-62-06, ishonch telefoni 79-220-10-20 (1066), elektron pochta info[at]navoi.uz, manzil 210100, Navoiy, Islom Karimov koʻchasi, 77A, gov.uz dagi shahar va tumanlar havolalari, ijtimoiy tarmoqlar (Facebook, YouTube, Telegram, Instagram), ish kunlari.",
      orgName: "Navoiy viloyati hokimligi",
      sameAs: [
        "https://gov.uz/oz/navoi",
        "https://gov.uz/ru/navoi",
        "https://gov.uz/en/navoi",
      ],
    },
    faq: {
      h2: "Tez-tez beriladigan savollar",
      items: [
        {
          q: "Rasmiy boʻlim qayerda?",
          a: "https://gov.uz/oz/navoi (ru va en ham mavjud).",
        },
        {
          q: "Aloqa uchun qanday telefon, pochta va manzil koʻrsatilgan?",
          a: "Telefon +99879 229-62-06, ishonch telefoni 79-220-10-20 (1066), elektron pochta info@navoi.uz, manzil 210100, Navoiy, Islom Karimov koʻchasi, 77A; shahar va tumanlar hamda ijtimoiy tarmoqlar — sahifadagi kontaktlar blokida (govinfo.uz boʻyicha); toʻliq raqamlar — gov.uz dagi «Barcha raqamlar».",
        },
        {
          q: "Interaktiv xizmatlar qayerda?",
          a: "«Davlat xizmatlari» — Navoiy viloyati maʼmuriyatining interaktiv xizmatlari.",
        },
        {
          q: "Ochiq byudjet qayerda?",
          a: "«Hujjatlar» boʻlimida — ochiq byudjet.",
        },
      ],
    },
  },
};
