/**
 * Хокимият Сырдарьинской области
 * Официальный раздел: https://gov.uz/ru/sirdaryo
 */
const sirdaryoTerritoryLinks = [
  { url: "https://gov.uz/shirin/", ru: "город Ширин", en: "Shirin city", uz: "Shirin shahri" },
  { url: "https://gov.uz/sirdarya/", ru: "Сырдарьинский район", en: "Syrdarya district", uz: "Sirdaryo tumani" },
  { url: "https://gov.uz/xovostuman/", ru: "Хавастский район", en: "Havast district", uz: "Xovos tumani" },
  { url: "https://gov.uz/boyovut/", ru: "Баяутский район", en: "Boyovut district", uz: "Boyovut tumani" },
  { url: "https://gov.uz/sardoba/", ru: "Сардобинский район", en: "Sardoba district", uz: "Sardoba tumani" },
  { url: "https://gov.uz/sayxunobod/", ru: "Сайхунабадский район", en: "Sayxunabad district", uz: "Sayxunobod tumani" },
  { url: "https://gov.uz/mirzaobod/", ru: "Мирзаабадский район", en: "Mirzaobod district", uz: "Mirzaobod tumani" },
  { url: "https://gov.uz/yangiyer/", ru: "город Янгиер", en: "Yangiyer city", uz: "Yangiyer shahri" },
  { url: "https://gov.uz/guliston/", ru: "город Гулистан", en: "Gulistan city", uz: "Guliston shahri" },
  { url: "https://gov.uz/oqoltin/", ru: "Акалтынский район", en: "Oqoltin district", uz: "Oqoltin tumani" },
  { url: "https://gov.uz/gulistontumani/", ru: "Гулистанский район", en: "Gulistan district", uz: "Guliston tumani" },
];

export default {
  ru: {
    pageTitle: "Хокимият Сырдарьинской области",
    intro: [
      "Хокимият Сырдарьинской области — орган исполнительной власти на территории области; обеспечивает реализацию законодательства, решений Президента и Кабинета Министров и социально-экономическое развитие региона.",
      "На портале gov.uz раздел sirdaryo (https://gov.uz/ru/sirdaryo) содержит сведения о хокимияте: о хокимияте, структуре организации, руководстве, центральном аппарате, подведомственных предприятиях, районах (туманах) и городах, контактах. В «Деятельности» — перепись, Конституция, открытое общение, мобильная приёмная, инвестиции и внешняя торговля, социальная сфера, экономика, молодёжная политика, сельское хозяйство, объявления и тендеры, вакансии, международное сотрудничество, противодействие коррупции. В «Государственных услугах» — электронные госуслуги, предоставляемые хокимиятом области. В «Документах» — законы и решения, связанные с деятельностью. В «Цифровом правительстве» — FAQ, портал открытых данных, прозрачность бюджетного процесса (положение 3299), открытые данные о деятельности (УП-6247), индекс открытости (УП-154), информация социального значения. Пресс-центр: о пресс-службе, новости, заявления руководства, календарь, заседания, пресс-конференции, пресс-релизы. Контакты: обращение через Telegram, онлайн-обращение, транспорт, опросы, контакты. По сведениям UzGovInfo (govinfo.uz) и раздела на gov.uz: телефон +99867 225-29-82, телефон доверия +99867 236-80-00 (доб. 1428), электронная почта info@sirdaryo.uz, адрес 120100, Гулистан, ул. Ислама Каримова, 60; транспорт, города и районы, соцсети — в блоке контактов; полный список номеров — в «Все номера» на gov.uz.",
      "Полезен жителям и бизнесу Сырдарьинской области, инвесторам и СМИ при работе с региональными программами и официальными обращениями.",
    ],
    officialSite: {
      h2: "Официальный раздел на gov.uz",
      ctaText:
        "Перейти в раздел хокимията Сырдарьинской области на gov.uz →",
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
      phones: [{ display: "+99867 225-29-82", href: "tel:+998672252982" }],
      trustPhone: {
        display: "+99867 236-80-00 (доб. 1428)",
        href: "tel:+998672368000",
      },
      email: { display: "info@sirdaryo.uz", href: "mailto:info@sirdaryo.uz" },
      territorialOffices: sirdaryoTerritoryLinks.map(({ url, ru: label }) => ({ url, label })),
      social: [
        {
          id: "instagram",
          label: "Instagram (хокимият)",
          url: "https://www.instagram.com/sirdaryohokimligi/",
        },
        {
          id: "facebook",
          label: "Facebook (хокимият)",
          url: "https://www.facebook.com/Sirdaryohokimligi/",
        },
        { id: "telegram", label: "Telegram", url: "https://t.me/eo_turdimov" },
        {
          id: "facebook",
          label: "Facebook",
          url: "https://www.facebook.com/turdimov",
        },
        {
          id: "youtube",
          label: "YouTube",
          url: "https://www.youtube.com/@PRESSSERVICEMZ",
        },
        {
          id: "instagram",
          label: "Instagram",
          url: "https://www.instagram.com/e_turdimov/",
        },
        { id: "twitter", label: "X (Twitter)", url: "https://x.com/e_turdimov" },
        { id: "telegram", label: "Telegram (регион)", url: "https://t.me/SirdaryoUz" },
      ],
      address: "120100, Гулистан, ул. Ислама Каримова, 60",
      transport:
        "Автобусы 2, 2, 12, маршрутки по направлению «Железнодорожный вокзал – Университет» — остановка «Площадь Юрта Байроги»",
      hours: "Понедельник–пятница",
      sourceAttribution: {
        dataSource:
          "Контактные данные приведены по сведениям портала UzGovInfo (govinfo.uz), страница хокимията Сырдарьинской области.",
        reuseNoticeBefore: "При использовании материалов с данного сайта ссылка на ",
        reuseLinkText: "сайт",
        reuseNoticeAfter: " обязательна.",
        reuseUrl: "https://gov.uz/ru/sirdaryo",
      },
    },
    whatFind: {
      h2: "Что можно найти на официальном ресурсе",
      intro:
        "Раздел gov.uz/sirdaryo объединяет полномочия областного хокимията, госуслуги и открытую информацию.",
      listLabel: "На разделе обычно доступны:",
      items: [
        {
          icon: "building",
          title: "О хокимияте",
          desc: "Структура, руководство, центральный аппарат, подведомственные предприятия, районы и города, контакты",
        },
        {
          icon: "program",
          title: "Деятельность",
          desc: "Перепись, экономика, соцсфера, инвестиции, тендеры, вакансии, международное сотрудничество, антикоррупция",
        },
        {
          icon: "globe",
          title: "Государственные услуги",
          desc: "Электронные государственные услуги хокимията Сырдарьинской области",
        },
        {
          icon: "decree",
          title: "Документы",
          desc: "Законы и решения, связанные с деятельностью хокимията",
        },
        {
          icon: "chart",
          title: "Цифровое правительство",
          desc: "Открытые данные, УП-6247, УП-154, положение 3299, социально значимая информация",
        },
        {
          icon: "news",
          title: "Пресс-центр и контакты",
          desc: "Новости, календарь, пресс-материалы; Telegram и онлайн-обращения",
        },
      ],
      closing:
        "Меню обновляется; актуальные сведения смотрите на gov.uz/sirdaryo.",
    },
    whyUse: {
      h2: "Зачем использовать официальный раздел",
      intro:
        "gov.uz/sirdaryo — канал официальной информации хокимията Сырдарьинской области на едином портале.",
      listLabel: "Раздел особенно полезен:",
      items: [
        "жителям области при поиске новостей, госуслуг и контактов",
        "предпринимателям при участии в тендерах и работе с инвестиционной информацией",
        "журналистам при поиске пресс-релизов, календаря и заявлений руководства",
        "всем, кому нужны открытые данные и сведения о бюджетной открытости региона",
      ],
    },
    otherSites: {
      h2: "Другие официальные сайты государственных органов",
    },
    schema: {
      description:
        "Официальный раздел хокимията Сырдарьинской области на портале gov.uz (sirdaryo): телефон +99867 225-29-82, телефон доверия +99867 236-80-00 (доб. 1428), электронная почта info[at]sirdaryo.uz, адрес 120100, Гулистан, ул. Ислама Каримова, 60, автобусы и маршрутки до остановки «Площадь Юрта Байроги», ссылки на города и районы на gov.uz, соцсети (Instagram, Facebook, Telegram, YouTube, X), приём по будням.",
      orgName: "Хокимият Сырдарьинской области",
      sameAs: [
        "https://gov.uz/ru/sirdaryo",
        "https://gov.uz/en/sirdaryo",
        "https://gov.uz/oz/sirdaryo",
      ],
    },
    faq: {
      h2: "Часто задаваемые вопросы",
      items: [
        {
          q: "Где официальный раздел хокимията Сырдарьинской области?",
          a: "На портале государства: https://gov.uz/ru/sirdaryo (также https://gov.uz/en/sirdaryo и https://gov.uz/oz/sirdaryo). В каталоге ссылка подставляется под язык интерфейса.",
        },
        {
          q: "Какие телефоны, почта, адрес и транспорт указаны для связи?",
          a: "Телефон +99867 225-29-82, телефон доверия +99867 236-80-00 (доб. 1428), электронная почта info@sirdaryo.uz, адрес 120100, Гулистан, ул. Ислама Каримова, 60; города, районы, соцсети и маршруты — в блоке контактов (по govinfo.uz); полный перечень номеров — в «Все номера» на gov.uz.",
        },
        {
          q: "Где электронные госуслуги хокимията?",
          a: "В разделе «Государственные услуги» — электронные государственные услуги, предоставляемые хокимиятом Сырдарьинской области.",
        },
        {
          q: "Где УП-6247 и УП-154?",
          a: "В разделе «Цифровое правительство» — открытые данные о деятельности (УП-6247) и индекс открытости (УП-154).",
        },
      ],
    },
  },
  en: {
    pageTitle: "Syrdarya regional administration",
    intro: [
      "The Syrdarya regional administration is the executive body of Syrdarya region; it implements legislation and decisions of the President and Cabinet of Ministers and guides the region’s socio-economic development.",
      "The gov.uz sirdaryo section (https://gov.uz/en/sirdaryo) publishes information about the khokimiyat: about the administration, structure, leadership, central staff, subordinate enterprises, districts and cities, contacts. Activities include census, Constitution, open communication, mobile reception, investments and foreign trade, social sector, economy, youth policy, agriculture, announcements and tenders, vacancies, international cooperation, anti-corruption. Public services include e-government services provided by the regional khokimiyat. Documents include laws and decisions related to the body’s activities. Digital government includes FAQ, open data portal, budget transparency (Statement 3299), open data on activities (UP-6247), openness index (UP-154), socially significant information. Press centre: about the press service, news, leadership statements, calendar, meetings, press conferences, press releases. Contacts: Telegram appeals, online appeals, transport, surveys, contacts. Per UzGovInfo (govinfo.uz) and the gov.uz section: phone +99867 225-29-82, trust line +99867 236-80-00 (ext. 1428), email info@sirdaryo.uz, address 120100, Gulistan, Islam Karimov street 60; transport, cities, districts and social media are in the contacts block; for the full number list see “All numbers” on gov.uz.",
      "Useful for residents and businesses in Syrdarya region, investors and media seeking regional programmes and official contacts.",
    ],
    officialSite: {
      h2: "Official section on gov.uz",
      ctaText:
        "Open the Syrdarya regional administration section on gov.uz →",
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
      phones: [{ display: "+99867 225-29-82", href: "tel:+998672252982" }],
      trustPhone: {
        display: "+99867 236-80-00 (ext. 1428)",
        href: "tel:+998672368000",
      },
      email: { display: "info@sirdaryo.uz", href: "mailto:info@sirdaryo.uz" },
      territorialOffices: sirdaryoTerritoryLinks.map(({ url, en: label }) => ({ url, label })),
      social: [
        {
          id: "instagram",
          label: "Instagram (khokimiyat)",
          url: "https://www.instagram.com/sirdaryohokimligi/",
        },
        {
          id: "facebook",
          label: "Facebook (khokimiyat)",
          url: "https://www.facebook.com/Sirdaryohokimligi/",
        },
        { id: "telegram", label: "Telegram", url: "https://t.me/eo_turdimov" },
        {
          id: "facebook",
          label: "Facebook",
          url: "https://www.facebook.com/turdimov",
        },
        {
          id: "youtube",
          label: "YouTube",
          url: "https://www.youtube.com/@PRESSSERVICEMZ",
        },
        {
          id: "instagram",
          label: "Instagram",
          url: "https://www.instagram.com/e_turdimov/",
        },
        { id: "twitter", label: "X (Twitter)", url: "https://x.com/e_turdimov" },
        { id: "telegram", label: "Telegram (region)", url: "https://t.me/SirdaryoUz" },
      ],
      address: "120100, Gulistan, Islam Karimov street, 60",
      transport:
        "Buses 2, 2, 12 and route taxis on the “Railway station – University” route — “Yurt Bayrogi square” stop",
      hours: "Monday–Friday",
      sourceAttribution: {
        dataSource:
          "Contact details are taken from the UzGovInfo portal (govinfo.uz), page of the Syrdarya regional administration.",
        reuseNoticeBefore: "When using materials from this site, a link to the ",
        reuseLinkText: "site",
        reuseNoticeAfter: " is required.",
        reuseUrl: "https://gov.uz/en/sirdaryo",
      },
    },
    whatFind: {
      h2: "What you can find there",
      intro:
        "gov.uz/sirdaryo brings together the regional administration’s mandate, public services and transparency.",
      listLabel: "You can typically find:",
      items: [
        {
          icon: "building",
          title: "About the administration",
          desc: "Structure, leadership, central staff, enterprises, districts and cities, contacts",
        },
        {
          icon: "program",
          title: "Activities",
          desc: "Census, economy, social sector, investments, tenders, vacancies, international cooperation, anti-corruption",
        },
        {
          icon: "globe",
          title: "Public services",
          desc: "E-government services provided by the Syrdarya regional khokimiyat",
        },
        {
          icon: "decree",
          title: "Documents",
          desc: "Laws and decisions related to the khokimiyat’s activities",
        },
        {
          icon: "chart",
          title: "Digital government",
          desc: "Open data, UP-6247, UP-154, Statement 3299, socially significant information",
        },
        {
          icon: "news",
          title: "Press centre and contacts",
          desc: "News, calendar, press materials; Telegram and online appeals",
        },
      ],
      closing: "Menus are updated; see gov.uz/sirdaryo for current information.",
    },
    whyUse: {
      h2: "Why use this official resource",
      intro:
        "gov.uz/sirdaryo is the official channel of the Syrdarya regional administration on Uzbekistan’s portal.",
      listLabel: "It is especially useful for:",
      items: [
        "residents seeking news, public services and contacts",
        "businesses participating in tenders and reviewing investment information",
        "journalists looking for press releases, calendars and leadership statements",
        "anyone needing open data and budget transparency information for the region",
      ],
    },
    otherSites: {
      h2: "Other official websites of government bodies",
    },
    schema: {
      description:
        "Official section of the Syrdarya regional administration on gov.uz (sirdaryo): phone +99867 225-29-82, trust line +99867 236-80-00 (ext. 1428), email info[at]sirdaryo.uz, address 120100, Gulistan, Islam Karimov street 60, buses and route taxis to Yurt Bayrogi square stop, links to cities and districts on gov.uz, social media (Instagram, Facebook, Telegram, YouTube, X), weekday reception.",
      orgName: "Syrdarya regional administration",
      sameAs: [
        "https://gov.uz/en/sirdaryo",
        "https://gov.uz/ru/sirdaryo",
        "https://gov.uz/oz/sirdaryo",
      ],
    },
    faq: {
      h2: "Frequently asked questions",
      items: [
        {
          q: "Where is the official section of the Syrdarya regional administration?",
          a: "On the government portal: https://gov.uz/en/sirdaryo (also https://gov.uz/ru/sirdaryo and https://gov.uz/oz/sirdaryo). The catalog link matches your interface language.",
        },
        {
          q: "What phones, email, address and transport are listed for contact?",
          a: "Phone +99867 225-29-82, trust line +99867 236-80-00 (ext. 1428), email info@sirdaryo.uz, address 120100, Gulistan, Islam Karimov street 60; cities, districts, social media and routes — in the contacts block on this page (per govinfo.uz); see “All numbers” on gov.uz for the full list.",
        },
        {
          q: "Where are e-government services of the khokimiyat?",
          a: "Under Public services — e-government services provided by the Syrdarya regional khokimiyat.",
        },
        {
          q: "Where are UP-6247 and UP-154?",
          a: "Under Digital government — open data on activities (UP-6247) and openness index (UP-154).",
        },
      ],
    },
  },
  uz: {
    pageTitle: "Sirdaryo viloyati hokimligi",
    intro: [
      "Sirdaryo viloyati hokimligi — viloyat hududidagi ijroiya hokimiyati organi; qonunchilik, Prezident va Vazirlar Kengashi qarorlarini amalga oshiradi va viloyat ijtimoiy-iqtisodiy rivojlanishini taʼminlaydi.",
      "gov.uz «sirdaryo» boʻlimi (https://gov.uz/oz/sirdaryo) da hokimiyat haqida: tuzilma, rahbariyat, markaziy apparat, boʻysunuvchi korxonalar, tumanlar va shaharlar, aloqa. «Faoliyat»da roʻyxatdan oʻtish, Konstitutsiya, ochiq muloqot, mobil qabulxona, investitsiyalar va tashqi savdo, ijtimoiy soha, iqtisodiyot, yoshlar siyosati, qishloq xoʻjaligi, eʼlonlar va tenderlar, vakansiyalar, xalqaro hamkorlik, korrupsiyaga qarshi kurash. «Davlat xizmatlari»da viloyat hokimligi tomonidan koʻrsatiladigan elektron davlat xizmatlari. «Hujjatlar»da faoliyat bilan bogʻliq qonunlar va qarorlar. «Raqamli davlat»da savollar-javoblar, ochiq maʼlumotlar portali, byudjet jarayonining shaffofligi (3299-sonli qoidalar), faoliyat boʻyicha ochiq maʼlumotlar (UP-6247), ochiqlik indeksi (UP-154), ijtimoiy ahamiyat maʼlumotlari. Matbuot va aloqa. UzGovInfo (govinfo.uz) va gov.uz boʻlimi boʻyicha: telefon +99867 225-29-82, ishonch telefoni +99867 236-80-00 (1428), elektron pochta info@sirdaryo.uz, manzil 120100, Guliston, Islom Karimov koʻchasi, 60; transport, shahar va tumanlar hamda ijtimoiy tarmoqlar — kontaktlar blokida; toʻliq raqamlar — gov.uz dagi «Barcha raqamlar».",
      "Sirdaryo viloyati fuqarolari va tadbirkorlari uchun rasmiy manba.",
    ],
    officialSite: {
      h2: "gov.uz dagi rasmiy boʻlim",
      ctaText: "Sirdaryo viloyati hokimligi boʻlimiga oʻtish →",
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
      phones: [{ display: "+99867 225-29-82", href: "tel:+998672252982" }],
      trustPhone: {
        display: "+99867 236-80-00 (1428)",
        href: "tel:+998672368000",
      },
      email: { display: "info@sirdaryo.uz", href: "mailto:info@sirdaryo.uz" },
      territorialOffices: sirdaryoTerritoryLinks.map(({ url, uz: label }) => ({ url, label })),
      social: [
        {
          id: "instagram",
          label: "Instagram (hokimiyat)",
          url: "https://www.instagram.com/sirdaryohokimligi/",
        },
        {
          id: "facebook",
          label: "Facebook (hokimiyat)",
          url: "https://www.facebook.com/Sirdaryohokimligi/",
        },
        { id: "telegram", label: "Telegram", url: "https://t.me/eo_turdimov" },
        {
          id: "facebook",
          label: "Facebook",
          url: "https://www.facebook.com/turdimov",
        },
        {
          id: "youtube",
          label: "YouTube",
          url: "https://www.youtube.com/@PRESSSERVICEMZ",
        },
        {
          id: "instagram",
          label: "Instagram",
          url: "https://www.instagram.com/e_turdimov/",
        },
        { id: "twitter", label: "X (Twitter)", url: "https://x.com/e_turdimov" },
        { id: "telegram", label: "Telegram (viloyat)", url: "https://t.me/SirdaryoUz" },
      ],
      address: "120100, Guliston, Islom Karimov koʻchasi, 60",
      transport:
        "Avtobuslar 2, 2, 12, «Temir yoʻl vokzali – Universitet» yoʻnalishidagi marshrutkalar — «Yurt bayrogʻi maydoni» bekati",
      hours: "Dushanba–juma",
      sourceAttribution: {
        dataSource:
          "Kontakt maʼlumotlari UzGovInfo portali (govinfo.uz), Sirdaryo viloyati hokimligi sahifasidan olingan.",
        reuseNoticeBefore: "Ushbu sayt materiallaridan foydalanganda ",
        reuseLinkText: "saytga",
        reuseNoticeAfter: " havola qoʻyish majburiy.",
        reuseUrl: "https://gov.uz/oz/sirdaryo",
      },
    },
    whatFind: {
      h2: "Rasmiy resursda nimalar bor",
      intro:
        "gov.uz/sirdaryo viloyat hokimiyati vakolati va ochiq axborotni birlashtiradi.",
      listLabel: "Odatda mavjud:",
      items: [
        {
          icon: "building",
          title: "Hokimiyat haqida",
          desc: "Tuzilma, rahbariyat, korxonalar, tumanlar va shaharlar, aloqa",
        },
        {
          icon: "program",
          title: "Faoliyat",
          desc: "Iqtisodiyot, ijtimoiy soha, tenderlar, investitsiyalar, xalqaro hamkorlik",
        },
        {
          icon: "globe",
          title: "Davlat xizmatlari",
          desc: "Sirdaryo viloyati hokimligining elektron davlat xizmatlari",
        },
        {
          icon: "decree",
          title: "Hujjatlar",
          desc: "Faoliyat bilan bogʻliq qonun va qarorlar",
        },
        {
          icon: "chart",
          title: "Raqamli davlat",
          desc: "Ochiq maʼlumotlar, UP-6247, UP-154, 3299-sonli qoidalar",
        },
        {
          icon: "news",
          title: "Matbuot va aloqa",
          desc: "Yangiliklar, taqvim; Telegram va onlayn murojaatlar",
        },
      ],
      closing: "Menyu yangilanadi; gov.uz/sirdaryo dan tekshiring.",
    },
    whyUse: {
      h2: "Nima uchun rasmiy boʻlimdan foydalanish kerak",
      intro:
        "gov.uz/sirdaryo — Sirdaryo viloyati hokimiyatining yagona davlat portali boʻyicha rasmiy kanali.",
      listLabel: "Quyidagilar uchun muhim:",
      items: [
        "viloyat yangiliklari va davlat xizmatlari bilan ishlovchilar uchun",
        "tender va investitsiya maʼlumotlari bilan ishlovchilar uchun",
        "matbuot va ochiq maʼlumotlar uchun",
      ],
    },
    otherSites: {
      h2: "Boshqa davlat organlarining rasmiy saytlari",
    },
    schema: {
      description:
        "Sirdaryo viloyati hokimligining gov.uz portali boʻlimi (sirdaryo): telefon +99867 225-29-82, ishonch telefoni +99867 236-80-00 (1428), elektron pochta info[at]sirdaryo.uz, manzil 120100, Guliston, Islom Karimov koʻchasi, 60, «Yurt bayrogʻi maydoni» bekati, gov.uz dagi shahar va tumanlar havolalari, ijtimoiy tarmoqlar (Instagram, Facebook, Telegram, YouTube, X), ish kunlari.",
      orgName: "Sirdaryo viloyati hokimligi",
      sameAs: [
        "https://gov.uz/oz/sirdaryo",
        "https://gov.uz/ru/sirdaryo",
        "https://gov.uz/en/sirdaryo",
      ],
    },
    faq: {
      h2: "Tez-tez beriladigan savollar",
      items: [
        {
          q: "Rasmiy boʻlim qayerda?",
          a: "https://gov.uz/oz/sirdaryo (ru va en ham mavjud).",
        },
        {
          q: "Aloqa uchun qanday telefon, pochta, manzil va transport koʻrsatilgan?",
          a: "Telefon +99867 225-29-82, ishonch telefoni +99867 236-80-00 (1428), elektron pochta info@sirdaryo.uz, manzil 120100, Guliston, Islom Karimov koʻchasi, 60; shahar va tumanlar, ijtimoiy tarmoqlar va marshrutlar — sahifadagi kontaktlar blokida (govinfo.uz boʻyicha); toʻliq raqamlar — gov.uz dagi «Barcha raqamlar».",
        },
        {
          q: "Elektron davlat xizmatlari qayerda?",
          a: "«Davlat xizmatlari» — Sirdaryo viloyati hokimligining elektron xizmatlari.",
        },
        {
          q: "UP-6247 va UP-154 qayerda?",
          a: "«Raqamli davlat» — UP-6247 va UP-154.",
        },
      ],
    },
  },
};
