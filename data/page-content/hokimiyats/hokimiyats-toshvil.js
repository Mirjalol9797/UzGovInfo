/**
 * Хокимият Ташкентской области
 * Официальный раздел: https://gov.uz/ru/toshvil
 */
const toshvilTerritoryLinks = [
  { url: "https://gov.uz/oz/chinoz/guides", ru: "Чиназский район", en: "Chinoz district", uz: "Chinoz tumani" },
  { url: "https://gov.uz/ohangaronshahar", ru: "Город Ахангаран", en: "Ahangaran city", uz: "Ohangaron shahri" },
  { url: "https://gov.uz/oz/toshkenttumani", ru: "Ташкентский район", en: "Tashkent district", uz: "Toshkent tumani" },
  { url: "https://gov.uz/qibray", ru: "Кибрайский район", en: "Qibray district", uz: "Qibray tumani" },
  { url: "https://gov.uz/yangiyol", ru: "Янгиюльский район", en: "Yangiyul district", uz: "Yangiyo'l tumani" },
  { url: "https://gov.uz/angren", ru: "Город Ангрен", en: "Angren city", uz: "Angren shahri" },
  { url: "https://gov.uz/bekobod", ru: "Бекабадский район", en: "Bekabad district", uz: "Bekobod tumani" },
  { url: "https://gov.uz/parkent", ru: "Паркентский район", en: "Parkent district", uz: "Parkent tumani" },
  { url: "https://gov.uz/nurafshon", ru: "Город Нурафшон", en: "Nurafshon city", uz: "Nurafshon shahri" },
  { url: "https://gov.uz/yuqorichirchiq", ru: "Юкоричирчикский район", en: "Yukorichirchiq district", uz: "Yuqorichirchiq tumani" },
  { url: "https://gov.uz/bekobodshahar", ru: "Город Бекабад", en: "Bekabad city", uz: "Bekobod shahri" },
  { url: "https://gov.uz/quyichirchiq", ru: "Куйичирчикский район", en: "Quyichirchiq district", uz: "Quyichirchiq tumani" },
  { url: "https://gov.uz/bostonliq", ru: "Бостанлыкский район", en: "Bostanliq district", uz: "Bostanliq tumani" },
  { url: "https://gov.uz/ortachirchiq", ru: "Уртачирчикский район", en: "Ortachirchiq district", uz: "Oʻrtachirchiq tumani" },
  { url: "https://gov.uz/olmaliq", ru: "Город Алмалык", en: "Olmaliq city", uz: "Olmaliq shahri" },
  { url: "https://gov.uz/oz/yangiyolshahar", ru: "Город Янгиюль", en: "Yangiyul city", uz: "Yangiyo'l shahri" },
  { url: "https://gov.uz/oqqorgon", ru: "Аккурганский район", en: "Oqqorgon district", uz: "Oqqoʻrgʻon tumani" },
  { url: "https://gov.uz/ohangaron/", ru: "Ахангаранский район", en: "Ahangaran district", uz: "Ohangaron tumani" },
  { url: "https://gov.uz/chirchiq/", ru: "Город Чирчик", en: "Chirchiq city", uz: "Chirchiq shahri" },
  { url: "https://gov.uz/zangiota", ru: "Зангиатинский район", en: "Zangiota district", uz: "Zangiota tumani" },
  { url: "https://gov.uz/boka", ru: "Букинский район", en: "Bo‘ka district", uz: "Boʻka tumani" },
  { url: "https://gov.uz/piskent", ru: "Пскентский район", en: "Piskent district", uz: "Piskent tumani" },
];

export default {
  ru: {
    pageTitle: "Хокимият Ташкентской области",
    intro: [
      "Хокимият Ташкентской области — орган исполнительной власти на территории области (не путать с хокимиятом города Ташкента); обеспечивает реализацию законодательства, решений Президента и Кабинета Министров и социально-экономическое развитие региона.",
      "На портале gov.uz раздел toshvil (https://gov.uz/ru/toshvil) содержит сведения о хокимияте: руководство, центральный аппарат, структура организации, устав хокимията области, управления и организации, территориальные управления, вакансии. В «Деятельности» — противодействие коррупции, перепись, конкурсы и тендеры, электронное правительство, международное сотрудничество, молодёжная политика, гендерное равенство. Предусмотрены разделы государственных услуг и документов (в т.ч. документы, утратившие силу). В «Цифровом правительстве» — исполнительская дисциплина, «умный город», интерактивные услуги Ташкентской области, портал открытых данных, открытые данные (ПФ-6247), открытые бюджетные данные. Пресс-центр с отраслевыми темами (транспорт, соцзащита, правосудие, экология, погода, спорт, здравоохранение и др.), новости, заявления руководства, календарь, заседания, пресс-конференции, пресс-релизы. Контакты: опросы, контакты. По сведениям UzGovInfo (govinfo.uz): телефон +99871 232-80-58, телефон доверия +99871 200 88 11, электронная почта devonxona@toshvil.uz, адрес 110500, Ташкентская область, город Нурафшон, улица Тошкент йўли, 90; города и районы области, соцсети и режим приёма — в блоке контактов; полный список номеров — в «Все номера» на gov.uz.",
      "Полезен жителям и бизнесу Ташкентской области, инвесторам и СМИ при работе с региональными программами и официальными обращениями.",
    ],
    officialSite: {
      h2: "Официальный раздел на gov.uz",
      ctaText:
        "Перейти в раздел хокимията Ташкентской области на gov.uz →",
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
      phones: [{ display: "+99871 232-80-58", href: "tel:+998712328058" }],
      trustPhone: {
        display: "+99871 200 88 11",
        href: "tel:+998712008811",
      },
      email: { display: "devonxona@toshvil.uz", href: "mailto:devonxona@toshvil.uz" },
      territorialOffices: toshvilTerritoryLinks.map(({ url, ru: label }) => ({ url, label })),
      social: [
        {
          id: "youtube",
          label: "YouTube",
          url: "https://www.youtube.com/@toshkentviloyatihokimligi",
        },
        { id: "telegram", label: "Telegram", url: "https://t.me/toshvilpressa" },
        {
          id: "facebook",
          label: "Facebook",
          url: "https://www.facebook.com/toshvilhokimiyat",
        },
        {
          id: "instagram",
          label: "Instagram",
          url: "https://www.instagram.com/toshvilhokimlik",
        },
      ],
      address:
        "110500, Ташкентская область, город Нурафшон, улица Тошкент йўли, 90",
      hours: "Понедельник–пятница",
      sourceAttribution: {
        dataSource:
          "Контактные данные приведены по сведениям портала UzGovInfo (govinfo.uz), страница хокимията Ташкентской области.",
        reuseNoticeBefore: "При использовании материалов с данного сайта ссылка на ",
        reuseLinkText: "сайт",
        reuseNoticeAfter: " обязательна.",
        reuseUrl: "https://gov.uz/ru/toshvil",
      },
    },
    whatFind: {
      h2: "Что можно найти на официальном ресурсе",
      intro:
        "Раздел gov.uz/toshvil объединяет полномочия областного хокимията, госуслуги и открытую информацию.",
      listLabel: "На разделе обычно доступны:",
      items: [
        {
          icon: "building",
          title: "О хокимияте",
          desc: "Руководство, центральный аппарат, структура, устав, управления, территориальные управления, вакансии",
        },
        {
          icon: "program",
          title: "Деятельность",
          desc: "Антикоррупция, перепись, тендеры, электронное правительство, международное сотрудничество, молодёжь и гендер",
        },
        {
          icon: "globe",
          title: "Государственные услуги",
          desc: "Раздел госуслуг областного хокимията на портале",
        },
        {
          icon: "decree",
          title: "Документы",
          desc: "В том числе документы, утратившие силу",
        },
        {
          icon: "chart",
          title: "Цифровое правительство",
          desc: "Исполнительская дисциплина, умный город, интерактивные услуги области, открытые данные, ПФ-6247, открытый бюджет",
        },
        {
          icon: "news",
          title: "Пресс-центр и контакты",
          desc: "Отраслевые темы, новости, календарь, заседания; опросы и контакты",
        },
      ],
      closing:
        "Меню обновляется; актуальные сведения смотрите на gov.uz/toshvil.",
    },
    whyUse: {
      h2: "Зачем использовать официальный раздел",
      intro:
        "gov.uz/toshvil — канал официальной информации хокимията Ташкентской области на едином портале.",
      listLabel: "Раздел особенно полезен:",
      items: [
        "жителям области при поиске новостей, госуслуг и контактов",
        "предпринимателям при участии в тендерах и работе с открытыми бюджетными данными",
        "журналистам при поиске пресс-материалов по отраслям и календаря событий",
        "организациям при подготовке обращений и работе с цифровыми сервисами региона",
      ],
    },
    otherSites: {
      h2: "Другие официальные сайты государственных органов",
    },
    schema: {
      description:
        "Официальный раздел хокимията Ташкентской области на портале gov.uz (toshvil): телефон +99871 232-80-58, телефон доверия +99871 200 88 11, электронная почта devonxona[at]toshvil.uz, адрес 110500, город Нурафшон, ул. Тошкент йўли, 90, приём по будням, ссылки на города и районы на gov.uz, соцсети (YouTube, Telegram, Facebook, Instagram).",
      orgName: "Хокимият Ташкентской области",
      sameAs: [
        "https://gov.uz/ru/toshvil",
        "https://gov.uz/en/toshvil",
        "https://gov.uz/oz/toshvil",
      ],
    },
    faq: {
      h2: "Часто задаваемые вопросы",
      items: [
        {
          q: "Где официальный раздел хокимията Ташкентской области?",
          a: "На портале государства: https://gov.uz/ru/toshvil (также https://gov.uz/en/toshvil и https://gov.uz/oz/toshvil). Это областной хокимият; город Ташкент имеет отдельный раздел на портале.",
        },
        {
          q: "Какие телефоны, почта и адрес указаны для связи?",
          a: "Телефон +99871 232-80-58, телефон доверия +99871 200 88 11, электронная почта devonxona@toshvil.uz, адрес 110500, Ташкентская область, город Нурафшон, улица Тошкент йўли, 90; города, районы и соцсети — в блоке контактов (по govinfo.uz); полный перечень номеров — в «Все номера» на gov.uz.",
        },
        {
          q: "Где интерактивные услуги Ташкентской области?",
          a: "В разделе «Цифровое правительство» — «Интерактивные услуги Ташкентской области» и портал открытых данных.",
        },
        {
          q: "Где открытые бюджетные данные и ПФ-6247?",
          a: "В «Цифровом правительстве» — открытые данные (ПФ-6247) и открытые бюджетные данные.",
        },
      ],
    },
  },
  en: {
    pageTitle: "Tashkent regional administration",
    intro: [
      "The Tashkent regional administration is the executive body of Tashkent region (not to be confused with the city administration of Tashkent); it implements legislation and decisions of the President and Cabinet of Ministers and guides the region’s socio-economic development.",
      "The gov.uz toshvil section (https://gov.uz/en/toshvil) publishes information about the khokimiyat: leadership, central staff, structure of the organisation, charter of the regional khokimiyat, departments and organisations, territorial departments, vacancies. Activities include anti-corruption, census, competitions and tenders, e-government, international cooperation, youth policy, gender equality. The portal includes public services and documents (including repealed documents). Digital government includes executive discipline, smart city, interactive services of Tashkent region, open data portal, open data (PF-6247), open budget data. Press centre covers sector themes (transport, social protection, justice, environment, weather, sport, health care, etc.), news, leadership statements, calendar, meetings, press conferences, press releases. Contacts: surveys, contacts. Per UzGovInfo (govinfo.uz): phone +99871 232-80-58, trust line +99871 200 88 11, email devonxona@toshvil.uz, address 110500, Tashkent region, Nurafshon city, Toshkent yo‘li street 90; cities and districts of the region, social media and office hours are in the contacts block; for the full number list see “All numbers” on gov.uz.",
      "Useful for residents and businesses in Tashkent region, investors and media seeking regional programmes and official contacts.",
    ],
    officialSite: {
      h2: "Official section on gov.uz",
      ctaText:
        "Open the Tashkent regional administration section on gov.uz →",
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
      phones: [{ display: "+99871 232-80-58", href: "tel:+998712328058" }],
      trustPhone: {
        display: "+99871 200 88 11",
        href: "tel:+998712008811",
      },
      email: { display: "devonxona@toshvil.uz", href: "mailto:devonxona@toshvil.uz" },
      territorialOffices: toshvilTerritoryLinks.map(({ url, en: label }) => ({ url, label })),
      social: [
        {
          id: "youtube",
          label: "YouTube",
          url: "https://www.youtube.com/@toshkentviloyatihokimligi",
        },
        { id: "telegram", label: "Telegram", url: "https://t.me/toshvilpressa" },
        {
          id: "facebook",
          label: "Facebook",
          url: "https://www.facebook.com/toshvilhokimiyat",
        },
        {
          id: "instagram",
          label: "Instagram",
          url: "https://www.instagram.com/toshvilhokimlik",
        },
      ],
      address:
        "110500, Tashkent region, Nurafshon city, Toshkent yo‘li street, 90",
      hours: "Monday–Friday",
      sourceAttribution: {
        dataSource:
          "Contact details are taken from the UzGovInfo portal (govinfo.uz), page of the Tashkent regional administration.",
        reuseNoticeBefore: "When using materials from this site, a link to the ",
        reuseLinkText: "site",
        reuseNoticeAfter: " is required.",
        reuseUrl: "https://gov.uz/en/toshvil",
      },
    },
    whatFind: {
      h2: "What you can find there",
      intro:
        "gov.uz/toshvil brings together the regional administration’s mandate, public services and transparency.",
      listLabel: "You can typically find:",
      items: [
        {
          icon: "building",
          title: "About the administration",
          desc: "Leadership, central staff, structure, charter, departments, territorial departments, vacancies",
        },
        {
          icon: "program",
          title: "Activities",
          desc: "Anti-corruption, census, tenders, e-government, international cooperation, youth and gender",
        },
        {
          icon: "globe",
          title: "Public services",
          desc: "Public services section of the regional khokimiyat on the portal",
        },
        {
          icon: "decree",
          title: "Documents",
          desc: "Including repealed documents",
        },
        {
          icon: "chart",
          title: "Digital government",
          desc: "Executive discipline, smart city, interactive regional services, open data, PF-6247, open budget",
        },
        {
          icon: "news",
          title: "Press centre and contacts",
          desc: "Sector themes, news, calendar, meetings; surveys and contacts",
        },
      ],
      closing: "Menus are updated; see gov.uz/toshvil for current information.",
    },
    whyUse: {
      h2: "Why use this official resource",
      intro:
        "gov.uz/toshvil is the official channel of the Tashkent regional administration on Uzbekistan’s portal.",
      listLabel: "It is especially useful for:",
      items: [
        "residents seeking news, public services and contacts",
        "businesses participating in tenders and reviewing open budget data",
        "journalists looking for sector news and event calendars",
        "organisations using regional digital services and filing appeals",
      ],
    },
    otherSites: {
      h2: "Other official websites of government bodies",
    },
    schema: {
      description:
        "Official section of the Tashkent regional administration on gov.uz (toshvil): phone +99871 232-80-58, trust line +99871 200 88 11, email devonxona[at]toshvil.uz, address 110500, Nurafshon, Toshkent yo‘li street 90, weekday reception, links to cities and districts on gov.uz, social media (YouTube, Telegram, Facebook, Instagram).",
      orgName: "Tashkent regional administration",
      sameAs: [
        "https://gov.uz/en/toshvil",
        "https://gov.uz/ru/toshvil",
        "https://gov.uz/oz/toshvil",
      ],
    },
    faq: {
      h2: "Frequently asked questions",
      items: [
        {
          q: "Where is the official section of the Tashkent regional administration?",
          a: "On the government portal: https://gov.uz/en/toshvil (also https://gov.uz/ru/toshvil and https://gov.uz/oz/toshvil). This is the regional khokimiyat; Tashkent city has a separate section on the portal.",
        },
        {
          q: "What phones, email and address are listed for contact?",
          a: "Phone +99871 232-80-58, trust line +99871 200 88 11, email devonxona@toshvil.uz, address 110500, Tashkent region, Nurafshon city, Toshkent yo‘li street 90; cities, districts and social media — in the contacts block on this page (per govinfo.uz); see “All numbers” on gov.uz for the full list.",
        },
        {
          q: "Where are interactive services of Tashkent region?",
          a: "Under Digital government — interactive services of Tashkent region and the open data portal.",
        },
        {
          q: "Where are open budget data and PF-6247?",
          a: "Under Digital government — open data (PF-6247) and open budget data.",
        },
      ],
    },
  },
  uz: {
    pageTitle: "Toshkent viloyati hokimligi",
    intro: [
      "Toshkent viloyati hokimligi — viloyat hududidagi ijroiya hokimiyati organi (Toshkent shahri hokimiyatidan farq qiladi); qonunchilik, Prezident va Vazirlar Kengashi qarorlarini amalga oshiradi va viloyat ijtimoiy-iqtisodiy rivojlanishini taʼminlaydi.",
      "gov.uz «toshvil» boʻlimi (https://gov.uz/oz/toshvil) da rahbariyat, markaziy apparat, tuzilma, viloyat hokimiyati ustavi, boshqarmalar va tashkilotlar, hududiy boshqarmalar, vakansiyalar. «Faoliyat»da korrupsiyaga qarshi kurash, roʻyxatdan oʻtish, tenderlar, elektron hukumat, xalqaro hamkorlik, yoshlar va gender. «Davlat xizmatlari» va «Hujjatlar» (shu jumladan kuchini yoʻqotgan hujjatlar). «Raqamli davlat»da ijro intizomi, «Aqlli shahar», Toshkent viloyatining interaktiv xizmatlari, ochiq maʼlumotlar portali, PF-6247, ochiq byudjet maʼlumotlari. Matbuot: soha boʻyicha mavzular, yangiliklar, taqvim, majlislar. Aloqa: soʻrovnoma, kontaktlar. UzGovInfo (govinfo.uz) boʻyicha: telefon +99871 232-80-58, ishonch telefoni +99871 200 88 11, elektron pochta devonxona@toshvil.uz, manzil 110500, Toshkent viloyati, Nurafshon shahri, Toshkent yoʻli koʻchasi, 90; viloyat shaharlari va tumanlari, ijtimoiy tarmoqlar va ish vaqti — kontaktlar blokida; toʻliq raqamlar — gov.uz dagi «Barcha raqamlar».",
      "Toshkent viloyati fuqarolari va tadbirkorlari uchun rasmiy manba.",
    ],
    officialSite: {
      h2: "gov.uz dagi rasmiy boʻlim",
      ctaText: "Toshkent viloyati hokimligi boʻlimiga oʻtish →",
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
      phones: [{ display: "+99871 232-80-58", href: "tel:+998712328058" }],
      trustPhone: {
        display: "+99871 200 88 11",
        href: "tel:+998712008811",
      },
      email: { display: "devonxona@toshvil.uz", href: "mailto:devonxona@toshvil.uz" },
      territorialOffices: toshvilTerritoryLinks.map(({ url, uz: label }) => ({ url, label })),
      social: [
        {
          id: "youtube",
          label: "YouTube",
          url: "https://www.youtube.com/@toshkentviloyatihokimligi",
        },
        { id: "telegram", label: "Telegram", url: "https://t.me/toshvilpressa" },
        {
          id: "facebook",
          label: "Facebook",
          url: "https://www.facebook.com/toshvilhokimiyat",
        },
        {
          id: "instagram",
          label: "Instagram",
          url: "https://www.instagram.com/toshvilhokimlik",
        },
      ],
      address:
        "110500, Toshkent viloyati, Nurafshon shahri, Toshkent yoʻli koʻchasi, 90",
      hours: "Dushanba–juma",
      sourceAttribution: {
        dataSource:
          "Kontakt maʼlumotlari UzGovInfo portali (govinfo.uz), Toshkent viloyati hokimligi sahifasidan olingan.",
        reuseNoticeBefore: "Ushbu sayt materiallaridan foydalanganda ",
        reuseLinkText: "saytga",
        reuseNoticeAfter: " havola qoʻyish majburiy.",
        reuseUrl: "https://gov.uz/oz/toshvil",
      },
    },
    whatFind: {
      h2: "Rasmiy resursda nimalar bor",
      intro:
        "gov.uz/toshvil viloyat hokimiyati vakolati va ochiq axborotni birlashtiradi.",
      listLabel: "Odatda mavjud:",
      items: [
        {
          icon: "building",
          title: "Hokimiyat haqida",
          desc: "Rahbariyat, tuzilma, ustav, boshqarmalar, hududiy boshqarmalar",
        },
        {
          icon: "program",
          title: "Faoliyat",
          desc: "Tenderlar, elektron hukumat, yoshlar va gender, xalqaro hamkorlik",
        },
        {
          icon: "globe",
          title: "Davlat xizmatlari",
          desc: "Viloyat hokimligi boʻlimi boʻyicha davlat xizmatlari",
        },
        {
          icon: "decree",
          title: "Hujjatlar",
          desc: "Kuchini yoʻqotgan hujjatlar bilan birga",
        },
        {
          icon: "chart",
          title: "Raqamli davlat",
          desc: "Aqlli shahar, interaktiv xizmatlar, ochiq maʼlumotlar, PF-6247, byudjet",
        },
        {
          icon: "news",
          title: "Matbuot va aloqa",
          desc: "Yangiliklar, taqvim; soʻrovnoma va kontaktlar",
        },
      ],
      closing: "Menyu yangilanadi; gov.uz/toshvil dan tekshiring.",
    },
    whyUse: {
      h2: "Nima uchun rasmiy boʻlimdan foydalanish kerak",
      intro:
        "gov.uz/toshvil — Toshkent viloyati hokimiyatining yagona davlat portali boʻyicha rasmiy kanali.",
      listLabel: "Quyidagilar uchun muhim:",
      items: [
        "viloyat yangiliklari va davlat xizmatlari bilan ishlovchilar uchun",
        "tender va ochiq byudjet maʼlumotlari bilan ishlovchilar uchun",
        "matbuot va soha boʻyicha axborot uchun",
      ],
    },
    otherSites: {
      h2: "Boshqa davlat organlarining rasmiy saytlari",
    },
    schema: {
      description:
        "Toshkent viloyati hokimligining gov.uz portali boʻlimi (toshvil): telefon +99871 232-80-58, ishonch telefoni +99871 200 88 11, elektron pochta devonxona[at]toshvil.uz, manzil 110500, Nurafshon shahri, Toshkent yoʻli koʻchasi, 90, ish kunlari, gov.uz dagi shahar va tumanlar havolalari, ijtimoiy tarmoqlar (YouTube, Telegram, Facebook, Instagram).",
      orgName: "Toshkent viloyati hokimligi",
      sameAs: [
        "https://gov.uz/oz/toshvil",
        "https://gov.uz/ru/toshvil",
        "https://gov.uz/en/toshvil",
      ],
    },
    faq: {
      h2: "Tez-tez beriladigan savollar",
      items: [
        {
          q: "Rasmiy boʻlim qayerda?",
          a: "https://gov.uz/oz/toshvil — viloyat hokimligi; Toshkent shahri alohida boʻlimda.",
        },
        {
          q: "Aloqa uchun qanday telefon, pochta va manzil koʻrsatilgan?",
          a: "Telefon +99871 232-80-58, ishonch telefoni +99871 200 88 11, elektron pochta devonxona@toshvil.uz, manzil 110500, Toshkent viloyati, Nurafshon shahri, Toshkent yoʻli koʻchasi, 90; shahar va tumanlar hamda ijtimoiy tarmoqlar — sahifadagi kontaktlar blokida (govinfo.uz); toʻliq raqamlar — gov.uz dagi «Barcha raqamlar».",
        },
        {
          q: "Viloyatning interaktiv xizmatlari qayerda?",
          a: "«Raqamli davlat» — Toshkent viloyatining interaktiv xizmatlari va ochiq maʼlumotlar portali.",
        },
        {
          q: "Ochiq byudjet va PF-6247 qayerda?",
          a: "«Raqamli davlat» — PF-6247 va ochiq byudjet maʼlumotlari.",
        },
      ],
    },
  },
};
