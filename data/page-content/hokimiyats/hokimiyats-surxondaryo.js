/**
 * Хокимият Сурхандарьинской области
 * Официальный раздел: https://gov.uz/ru/surxondaryo
 */
const surxondaryoTerritoryLinks = [
  { url: "https://gov.uz/muzrabot/", ru: "Музрабадский район", en: "Muzrabot district", uz: "Muzrabot tumani" },
  { url: "https://gov.uz/angor/", ru: "Ангорский район", en: "Angor district", uz: "Angor tumani" },
  { url: "https://gov.uz/baysun/", ru: "Байсунский район", en: "Boysun district", uz: "Boysun tumani" },
  { url: "https://gov.uz/tertu/", ru: "Термезский район", en: "Termez district", uz: "Termiz tumani" },
  { url: "https://gov.uz/sherobod/", ru: "Шерабадский район", en: "Sherabad district", uz: "Sherobod tumani" },
  { url: "https://gov.uz/uzun/", ru: "Узунский район", en: "Uzun district", uz: "Uzun tumani" },
  { url: "https://gov.uz/shurchi/", ru: "Шурчинский район", en: "Shurchi district", uz: "Shoʻrchi tumani" },
  { url: "https://gov.uz/oltinsoy/", ru: "Алтынсайский район", en: "Oltinsoy district", uz: "Oltinsoy tumani" },
  { url: "https://gov.uz/sariosiyo/", ru: "Сариасийский район", en: "Sariosiyo district", uz: "Sariosiyo tumani" },
  { url: "https://gov.uz/termizsh/", ru: "город Термез", en: "Termez city", uz: "Termiz shahri" },
  { url: "https://gov.uz/denov/", ru: "Денауский район", en: "Denov district", uz: "Denov tumani" },
  { url: "https://gov.uz/qiziriq/", ru: "Кизирикский район", en: "Qiziriq district", uz: "Qiziriq tumani" },
  { url: "https://gov.uz/qumqorgon/", ru: "Кумкурганский район", en: "Qumqorghon district", uz: "Qumqoʻrgʻon tumani" },
  { url: "https://gov.uz/bandikhan/", ru: "Бандихонский район", en: "Bandixon district", uz: "Bandixon tumani" },
  { url: "https://gov.uz/jarqorgon/", ru: "Джаркурганский район", en: "Jarqorghon district", uz: "Jarqoʻrgʻon tumani" },
];

export default {
  ru: {
    pageTitle: "Хокимият Сурхандарьинской области",
    intro: [
      "Хокимият Сурхандарьинской области — орган исполнительной власти на территории области; обеспечивает реализацию законодательства, решений Президента и Кабинета Министров и социально-экономическое развитие региона.",
      "На портале gov.uz раздел surxondaryo (https://gov.uz/ru/surxondaryo) содержит сведения о хокимияте: о хокимияте, руководстве, центральном аппарате, подведомственной организации. В «Деятельности» — перепись и противодействие коррупции. Предусмотрены разделы государственных услуг, документов и цифрового правительства. Пресс-служба: новости, заявления и выступления руководства, календарь событий, пресс-релизы, заседания, пресс-конференции. Контакты: опросы, контакты. По сведениям UzGovInfo (govinfo.uz) и раздела на gov.uz: телефон доверия 1088 и 76-228-02-33, электронная почта gov@surxondaryo.uz, адрес 190100, Термез, пл. Ат-Термизий, 1; ссылки на города и районы и соцсети — в блоке контактов; полный список номеров — в «Все номера» на gov.uz.",
      "Полезен жителям и бизнесу Сурхандарьинской области, инвесторам и СМИ при работе с региональными программами и официальными обращениями.",
    ],
    officialSite: {
      h2: "Официальный раздел на gov.uz",
      ctaText:
        "Перейти в раздел хокимията Сурхандарьинской области на gov.uz →",
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
      trustPhone: {
        display: "1088, 76-228-02-33",
        href: "tel:+998762280233",
      },
      email: { display: "gov@surxondaryo.uz", href: "mailto:gov@surxondaryo.uz" },
      territorialOffices: surxondaryoTerritoryLinks.map(({ url, ru: label }) => ({ url, label })),
      social: [
        {
          id: "youtube",
          label: "YouTube",
          url: "https://www.youtube.com/@surxondaryo_pressa",
        },
        {
          id: "facebook",
          label: "Facebook",
          url: "https://www.facebook.com/surxondaryomatbuot.uz",
        },
        {
          id: "instagram",
          label: "Instagram",
          url: "https://www.instagram.com/surxondaryo.hokimligi/",
        },
        { id: "telegram", label: "Telegram", url: "https://t.me/axborot_xizmati" },
        { id: "twitter", label: "X (Twitter)", url: "https://twitter.com/surxondaryo_ax" },
      ],
      address: "190100, Термез, пл. Ат-Термизий, 1",
      hours: "Понедельник–пятница",
      sourceAttribution: {
        dataSource:
          "Контактные данные приведены по сведениям портала UzGovInfo (govinfo.uz), страница хокимията Сурхандарьинской области.",
        reuseNoticeBefore: "При использовании материалов с данного сайта ссылка на ",
        reuseLinkText: "сайт",
        reuseNoticeAfter: " обязательна.",
        reuseUrl: "https://gov.uz/ru/surxondaryo",
      },
    },
    whatFind: {
      h2: "Что можно найти на официальном ресурсе",
      intro:
        "Раздел gov.uz/surxondaryo объединяет полномочия областного хокимията, госуслуги и открытую информацию.",
      listLabel: "На разделе обычно доступны:",
      items: [
        {
          icon: "building",
          title: "О хокимияте",
          desc: "О хокимияте, руководство, центральный аппарат, подведомственная организация",
        },
        {
          icon: "program",
          title: "Деятельность",
          desc: "Перепись, противодействие коррупции",
        },
        {
          icon: "globe",
          title: "Государственные услуги",
          desc: "Раздел госуслуг областного хокимията на портале",
        },
        {
          icon: "decree",
          title: "Документы",
          desc: "Нормативные и иные документы по компетенции хокимията",
        },
        {
          icon: "chart",
          title: "Цифровое правительство",
          desc: "Цифровые сервисы и открытая информация по разделу",
        },
        {
          icon: "news",
          title: "Пресс-служба и контакты",
          desc: "Новости, календарь, пресс-материалы, заседания; опросы и контакты",
        },
      ],
      closing:
        "Меню обновляется; актуальные сведения смотрите на gov.uz/surxondaryo.",
    },
    whyUse: {
      h2: "Зачем использовать официальный раздел",
      intro:
        "gov.uz/surxondaryo — канал официальной информации хокимията Сурхандарьинской области на едином портале.",
      listLabel: "Раздел особенно полезен:",
      items: [
        "жителям области при поиске новостей, госуслуг и контактов",
        "предпринимателям при работе с документами и обращениями в хокимият",
        "журналистам при поиске пресс-релизов, календаря и заявлений руководства",
        "всем, кому нужны сведения о переписи и антикоррупционных мерах в регионе",
      ],
    },
    otherSites: {
      h2: "Другие официальные сайты государственных органов",
    },
    schema: {
      description:
        "Официальный раздел хокимията Сурхандарьинской области на портале gov.uz (surxondaryo): телефон доверия 1088 и 76-228-02-33, электронная почта gov[at]surxondaryo.uz, адрес 190100, Термез, пл. Ат-Термизий, 1, ссылки на города и районы на gov.uz, соцсети (YouTube, Facebook, Instagram, Telegram, X), приём по будням.",
      orgName: "Хокимият Сурхандарьинской области",
      sameAs: [
        "https://gov.uz/ru/surxondaryo",
        "https://gov.uz/en/surxondaryo",
        "https://gov.uz/oz/surxondaryo",
      ],
    },
    faq: {
      h2: "Часто задаваемые вопросы",
      items: [
        {
          q: "Где официальный раздел хокимията Сурхандарьинской области?",
          a: "На портале государства: https://gov.uz/ru/surxondaryo (также https://gov.uz/en/surxondaryo и https://gov.uz/oz/surxondaryo). В каталоге ссылка подставляется под язык интерфейса.",
        },
        {
          q: "Какой телефон доверия, почта и адрес указаны для связи?",
          a: "Телефон доверия 1088 и 76-228-02-33, электронная почта gov@surxondaryo.uz, адрес 190100, Термез, пл. Ат-Термизий, 1; города, районы и соцсети — в блоке контактов (по govinfo.uz); полный перечень номеров — в «Все номера» на gov.uz.",
        },
        {
          q: "Где пресс-релизы и календарь событий?",
          a: "В разделе «Пресс-служба» — новости, заявления руководства, календарь, пресс-релизы, заседания, пресс-конференции.",
        },
        {
          q: "Где разделы госуслуг и документов?",
          a: "На главной карте раздела — отдельные блоки «Государственные услуги», «Документы» и «Цифровое правительство».",
        },
      ],
    },
  },
  en: {
    pageTitle: "Surkhandarya regional administration",
    intro: [
      "The Surkhandarya regional administration is the executive body of Surkhandarya region; it implements legislation and decisions of the President and Cabinet of Ministers and guides the region’s socio-economic development.",
      "The gov.uz surxondaryo section (https://gov.uz/en/surxondaryo) publishes information about the khokimiyat (About: administration, central staff, subordinate organisation). Activities include census and anti-corruption. The portal includes sections for public services, documents and digital government. Press service: news, statements and speeches of the administration, calendar of events, press releases, meetings, press conferences. Contacts: survey, contacts. Per UzGovInfo (govinfo.uz) and the gov.uz section: trust line 1088 and 76-228-02-33, email gov@surxondaryo.uz, address 190100, Termez, At-Termeziy square 1; links to cities and districts and social media are in the contacts block; for the full number list see “All numbers” on gov.uz.",
      "Useful for residents and businesses in Surkhandarya region, investors and media seeking regional programmes and official contacts.",
    ],
    officialSite: {
      h2: "Official section on gov.uz",
      ctaText:
        "Open the Surkhandarya regional administration section on gov.uz →",
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
      trustPhone: {
        display: "1088, 76-228-02-33",
        href: "tel:+998762280233",
      },
      email: { display: "gov@surxondaryo.uz", href: "mailto:gov@surxondaryo.uz" },
      territorialOffices: surxondaryoTerritoryLinks.map(({ url, en: label }) => ({ url, label })),
      social: [
        {
          id: "youtube",
          label: "YouTube",
          url: "https://www.youtube.com/@surxondaryo_pressa",
        },
        {
          id: "facebook",
          label: "Facebook",
          url: "https://www.facebook.com/surxondaryomatbuot.uz",
        },
        {
          id: "instagram",
          label: "Instagram",
          url: "https://www.instagram.com/surxondaryo.hokimligi/",
        },
        { id: "telegram", label: "Telegram", url: "https://t.me/axborot_xizmati" },
        { id: "twitter", label: "X (Twitter)", url: "https://twitter.com/surxondaryo_ax" },
      ],
      address: "190100, Termez, At-Termeziy square, 1",
      hours: "Monday–Friday",
      sourceAttribution: {
        dataSource:
          "Contact details are taken from the UzGovInfo portal (govinfo.uz), page of the Surkhandarya regional administration.",
        reuseNoticeBefore: "When using materials from this site, a link to the ",
        reuseLinkText: "site",
        reuseNoticeAfter: " is required.",
        reuseUrl: "https://gov.uz/en/surxondaryo",
      },
    },
    whatFind: {
      h2: "What you can find there",
      intro:
        "gov.uz/surxondaryo brings together the regional administration’s mandate, public services and transparency.",
      listLabel: "You can typically find:",
      items: [
        {
          icon: "building",
          title: "About the administration",
          desc: "About, administration, central staff, subordinate organisation",
        },
        {
          icon: "program",
          title: "Activities",
          desc: "Census, anti-corruption",
        },
        {
          icon: "globe",
          title: "Public services",
          desc: "Public services section of the regional khokimiyat on the portal",
        },
        {
          icon: "decree",
          title: "Documents",
          desc: "Legal and other documents within the khokimiyat’s competence",
        },
        {
          icon: "chart",
          title: "Digital government",
          desc: "Digital services and open information in this section",
        },
        {
          icon: "news",
          title: "Press service and contacts",
          desc: "News, calendar, press materials, meetings; survey and contacts",
        },
      ],
      closing:
        "Menus are updated; see gov.uz/surxondaryo for current information.",
    },
    whyUse: {
      h2: "Why use this official resource",
      intro:
        "gov.uz/surxondaryo is the official channel of the Surkhandarya regional administration on Uzbekistan’s portal.",
      listLabel: "It is especially useful for:",
      items: [
        "residents seeking news, public services and contacts",
        "businesses working with documents and appeals to the khokimiyat",
        "journalists looking for press releases, calendars and leadership statements",
        "anyone interested in census information and anti-corruption measures in the region",
      ],
    },
    otherSites: {
      h2: "Other official websites of government bodies",
    },
    schema: {
      description:
        "Official section of the Surkhandarya regional administration on gov.uz (surxondaryo): trust line 1088 and 76-228-02-33, email gov[at]surxondaryo.uz, address 190100, Termez, At-Termeziy square 1, links to cities and districts on gov.uz, social media (YouTube, Facebook, Instagram, Telegram, X), weekday reception.",
      orgName: "Surkhandarya regional administration",
      sameAs: [
        "https://gov.uz/en/surxondaryo",
        "https://gov.uz/ru/surxondaryo",
        "https://gov.uz/oz/surxondaryo",
      ],
    },
    faq: {
      h2: "Frequently asked questions",
      items: [
        {
          q: "Where is the official section of the Surkhandarya regional administration?",
          a: "On the government portal: https://gov.uz/en/surxondaryo (also https://gov.uz/ru/surxondaryo and https://gov.uz/oz/surxondaryo). The catalog link matches your interface language.",
        },
        {
          q: "What trust line, email and address are listed for contact?",
          a: "Trust line 1088 and 76-228-02-33, email gov@surxondaryo.uz, address 190100, Termez, At-Termeziy square 1; cities, districts and social media — in the contacts block on this page (per govinfo.uz); see “All numbers” on gov.uz for the full list.",
        },
        {
          q: "Where are press releases and the event calendar?",
          a: "Under Press service — news, statements of the administration, calendar, press releases, meetings, press conferences.",
        },
        {
          q: "Where are public services and documents?",
          a: "The section map includes Public services, Documents and Digital government.",
        },
      ],
    },
  },
  uz: {
    pageTitle: "Surxondaryo viloyati hokimligi",
    intro: [
      "Surxondaryo viloyati hokimligi — viloyat hududidagi ijroiya hokimiyati organi; qonunchilik, Prezident va Vazirlar Kengashi qarorlarini amalga oshiradi va viloyat ijtimoiy-iqtisodiy rivojlanishini taʼminlaydi.",
      "gov.uz «surxondaryo» boʻlimi (https://gov.uz/oz/surxondaryo) da hokimiyat haqida: boshqaruv, markaziy apparat, boʻysunuvchi tashkilot. «Faoliyat»da roʻyxatdan oʻtish va korrupsiyaga qarshi kurash. «Davlat xizmatlari», «Hujjatlar» va «Raqamli davlat» boʻlimlari mavjud. Matbuot: yangiliklar, rahbariyat bayonotlari, tadbirlar taqvimi, press-relizlar, majlislar, matbuot anjumanlari. Aloqa: soʻrovnoma, kontaktlar. UzGovInfo (govinfo.uz) va gov.uz boʻlimi boʻyicha: ishonch liniyasi 1088 va 76-228-02-33, elektron pochta gov@surxondaryo.uz, manzil 190100, Termiz, At-Termiziy maydoni, 1; shahar va tumanlar hamda ijtimoiy tarmoqlar — kontaktlar blokida; toʻliq raqamlar — gov.uz dagi «Barcha raqamlar».",
      "Surxondaryo viloyati fuqarolari va tadbirkorlari uchun rasmiy manba.",
    ],
    officialSite: {
      h2: "gov.uz dagi rasmiy boʻlim",
      ctaText: "Surxondaryo viloyati hokimligi boʻlimiga oʻtish →",
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
      trustPhone: {
        display: "1088, 76-228-02-33",
        href: "tel:+998762280233",
      },
      email: { display: "gov@surxondaryo.uz", href: "mailto:gov@surxondaryo.uz" },
      territorialOffices: surxondaryoTerritoryLinks.map(({ url, uz: label }) => ({ url, label })),
      social: [
        {
          id: "youtube",
          label: "YouTube",
          url: "https://www.youtube.com/@surxondaryo_pressa",
        },
        {
          id: "facebook",
          label: "Facebook",
          url: "https://www.facebook.com/surxondaryomatbuot.uz",
        },
        {
          id: "instagram",
          label: "Instagram",
          url: "https://www.instagram.com/surxondaryo.hokimligi/",
        },
        { id: "telegram", label: "Telegram", url: "https://t.me/axborot_xizmati" },
        { id: "twitter", label: "X (Twitter)", url: "https://twitter.com/surxondaryo_ax" },
      ],
      address: "190100, Termiz, At-Termiziy maydoni, 1",
      hours: "Dushanba–juma",
      sourceAttribution: {
        dataSource:
          "Kontakt maʼlumotlari UzGovInfo portali (govinfo.uz), Surxondaryo viloyati hokimligi sahifasidan olingan.",
        reuseNoticeBefore: "Ushbu sayt materiallaridan foydalanganda ",
        reuseLinkText: "saytga",
        reuseNoticeAfter: " havola qoʻyish majburiy.",
        reuseUrl: "https://gov.uz/oz/surxondaryo",
      },
    },
    whatFind: {
      h2: "Rasmiy resursda nimalar bor",
      intro:
        "gov.uz/surxondaryo viloyat hokimiyati vakolati va ochiq axborotni birlashtiradi.",
      listLabel: "Odatda mavjud:",
      items: [
        {
          icon: "building",
          title: "Hokimiyat haqida",
          desc: "Boshqaruv, markaziy apparat, boʻysunuvchi tashkilot",
        },
        {
          icon: "program",
          title: "Faoliyat",
          desc: "Roʻyxatdan oʻtish, korrupsiyaga qarshi kurash",
        },
        {
          icon: "globe",
          title: "Davlat xizmatlari",
          desc: "Viloyat hokimligi boʻlimi boʻyicha davlat xizmatlari",
        },
        {
          icon: "decree",
          title: "Hujjatlar",
          desc: "Hokimiyat vakolatidagi meʼyoriy va boshqa hujjatlar",
        },
        {
          icon: "chart",
          title: "Raqamli davlat",
          desc: "Raqamli xizmatlar va ochiq axborot",
        },
        {
          icon: "news",
          title: "Matbuot va aloqa",
          desc: "Yangiliklar, taqvim, press-materiallar; soʻrovnoma",
        },
      ],
      closing: "Menyu yangilanadi; gov.uz/surxondaryo dan tekshiring.",
    },
    whyUse: {
      h2: "Nima uchun rasmiy boʻlimdan foydalanish kerak",
      intro:
        "gov.uz/surxondaryo — Surxondaryo viloyati hokimiyatining yagona davlat portali boʻyicha rasmiy kanali.",
      listLabel: "Quyidagilar uchun muhim:",
      items: [
        "viloyat yangiliklari va davlat xizmatlari bilan ishlovchilar uchun",
        "hokimiyatga murojaat va hujjatlar bilan bogʻliq subyektlar uchun",
        "matbuot va ochiq maʼlumotlar uchun",
      ],
    },
    otherSites: {
      h2: "Boshqa davlat organlarining rasmiy saytlari",
    },
    schema: {
      description:
        "Surxondaryo viloyati hokimligining gov.uz portali boʻlimi (surxondaryo): ishonch liniyasi 1088 va 76-228-02-33, elektron pochta gov[at]surxondaryo.uz, manzil 190100, Termiz, At-Termiziy maydoni, 1, gov.uz dagi shahar va tumanlar havolalari, ijtimoiy tarmoqlar (YouTube, Facebook, Instagram, Telegram, X), ish kunlari.",
      orgName: "Surxondaryo viloyati hokimligi",
      sameAs: [
        "https://gov.uz/oz/surxondaryo",
        "https://gov.uz/ru/surxondaryo",
        "https://gov.uz/en/surxondaryo",
      ],
    },
    faq: {
      h2: "Tez-tez beriladigan savollar",
      items: [
        {
          q: "Rasmiy boʻlim qayerda?",
          a: "https://gov.uz/oz/surxondaryo (ru va en ham mavjud).",
        },
        {
          q: "Aloqa uchun qanday ishonch liniyasi, pochta va manzil koʻrsatilgan?",
          a: "Ishonch liniyasi 1088 va 76-228-02-33, elektron pochta gov@surxondaryo.uz, manzil 190100, Termiz, At-Termiziy maydoni, 1; shahar va tumanlar hamda ijtimoiy tarmoqlar — sahifadagi kontaktlar blokida (govinfo.uz boʻyicha); toʻliq raqamlar — gov.uz dagi «Barcha raqamlar».",
        },
        {
          q: "Matbuot va taqvim qayerda?",
          a: "«Matbuot xizmati» — yangiliklar, bayonotlar, taqvim, press-relizlar.",
        },
        {
          q: "Davlat xizmatlari va hujjatlar qayerda?",
          a: "Asosiy kartada «Davlat xizmatlari», «Hujjatlar», «Raqamli davlat».",
        },
      ],
    },
  },
};
