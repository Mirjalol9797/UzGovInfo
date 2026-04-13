/**
 * Хокимият Джизакской области
 * Официальный раздел: https://gov.uz/ru/jizzax
 */
const jizzakhTerritoryLinks = [
  { url: "https://gov.uz/baxmal/", ru: "Бахмальский район", en: "Baxmal district", uz: "Baxmal tumani" },
  { url: "https://gov.uz/zafarobod/", ru: "Зафарабадский район", en: "Zafarobod district", uz: "Zafarobod tumani" },
  { url: "https://gov.uz/mirzachul/", ru: "Мирзачульский район", en: "Mirzachul district", uz: "Mirzachoʻl tumani" },
  {
    url: "https://gov.uz/oz/gallaorol/",
    ru: "Галляаральский район",
    en: "Gallaaral district",
    uz: "Gʻallaorol tumani",
  },
  { url: "https://gov.uz/jizzaxcity/", ru: "город Джизак", en: "Jizzakh city", uz: "Jizzax shahri" },
  {
    url: "https://gov.uz/shrashidov/",
    ru: "Шараф Рашидовский район",
    en: "Sharaf Rashidov district",
    uz: "Sharof Rashidov tumani",
  },
  { url: "https://gov.uz/paxtakor/", ru: "Пахтакорский район", en: "Pakhtakor district", uz: "Paxtakor tumani" },
  { url: "https://gov.uz/dustlik/", ru: "Дустликский район", en: "Dustlik district", uz: "Doʻstlik tumani" },
  { url: "https://gov.uz/zarbdor/", ru: "Зарбдарский район", en: "Zarbdor district", uz: "Zarbdor tumani" },
  { url: "https://gov.uz/forish/", ru: "Фаришский район", en: "Farish district", uz: "Forish tumani" },
  { url: "https://gov.uz/arnasoy/", ru: "Арнасайский район", en: "Arnasay district", uz: "Arnasoy tumani" },
  { url: "https://gov.uz/yangiobod/", ru: "Янгиабадский район", en: "Yangiobod district", uz: "Yangiobod tumani" },
  { url: "https://gov.uz/zomin/", ru: "Зааминский район", en: "Zomin district", uz: "Zomin tumani" },
];

export default {
  ru: {
    pageTitle: "Хокимият Джизакской области",
    intro: [
      "Хокимият Джизакской области — орган исполнительной власти на территории области; обеспечивает реализацию законодательства, решений Президента и Кабинета Министров и социально-экономическое развитие региона.",
      "На портале gov.uz раздел jizzax (https://gov.uz/ru/jizzax) содержит сведения о хокимияте: о хокимияте, структуре организации, руководстве, центральном аппарате, подведомственных предприятиях, администрации города и района, координационных и совещательных органах, Джизакском областном Совете народных депутатов, общественном совете. В «Деятельности» — перепись, FAQ, аналитическая и статистическая информация, конкурсы и тендеры, электронное правительство, международное сотрудничество, противодействие коррупции, молодёжная и гендерная политика. В «Государственных услугах» — заявления физических и юридических лиц, единый интерактивный портал госуслуг, интерактивные услуги областной администрации, архив услуг единого реестра. В «Документах» — внутренние документы, недействительные документы, нормативные документы, обсуждение проектов НПА, законы и акты по компетенции, Конституция, аналитические данные. В «Цифровом правительстве» — открытые данные, открытый бюджет, PF-6247, показатели открытости, вакансии, результаты рассмотрения заявлений, инфографика. Пресс-центр: статистика и исследования, соцсфера, предупреждения о погоде, новости, заявления руководства, календарь, заседания. Контакты: обратная связь, противодействие коррупции, запрос статистики, опросы. По сведениям UzGovInfo (govinfo.uz) и раздела на gov.uz: телефон +99872 226-30-90, телефон доверия +99872 226-00-11, электронная почта info@jizzax.uz, адрес 708000, Джизак, ул. Ш. Рашидова, 64; ссылки на города и районы — в блоке контактов; полный список номеров — в «Все номера» на gov.uz.",
      "Полезен жителям и организациям Джизакской области при работе с региональными программами, госуслугами и открытыми данными.",
    ],
    officialSite: {
      h2: "Официальный раздел на gov.uz",
      ctaText:
        "Перейти в раздел хокимията Джизакской области на gov.uz →",
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
      phones: [{ display: "+99872 226-30-90", href: "tel:+998722263090" }],
      trustPhone: { display: "+99872 226-00-11", href: "tel:+998722260011" },
      email: { display: "info@jizzax.uz", href: "mailto:info@jizzax.uz" },
      territorialOffices: jizzakhTerritoryLinks.map(({ url, ru: label }) => ({ url, label })),
      social: [
        {
          id: "facebook",
          label: "Facebook",
          url: "https://www.facebook.com/jizzaxviloyathokimligi/",
        },
        {
          id: "instagram",
          label: "Instagram",
          url: "https://www.instagram.com/jizzaxviloyathokimligi/",
        },
        { id: "telegram", label: "Telegram", url: "https://t.me/jizzaxviloyatihokimligi" },
        { id: "twitter", label: "X (Twitter)", url: "https://twitter.com/Jizzaxviloyath1" },
        {
          id: "youtube",
          label: "YouTube",
          url: "https://www.youtube.com/c/Jizzaxviloyatihokimligi",
        },
      ],
      address: "708000, Джизак, ул. Ш. Рашидова, 64",
      hours: "Понедельник–пятница, 09:00–18:00; обед 13:00–14:00",
      sourceAttribution: {
        dataSource:
          "Контактные данные приведены по сведениям портала UzGovInfo (govinfo.uz), страница хокимията Джизакской области.",
        reuseNoticeBefore: "При использовании материалов с данного сайта ссылка на ",
        reuseLinkText: "сайт",
        reuseNoticeAfter: " обязательна.",
        reuseUrl: "https://gov.uz/ru/jizzax",
      },
    },
    whatFind: {
      h2: "Что можно найти на официальном ресурсе",
      intro:
        "Раздел gov.uz/jizzax объединяет полномочия областного хокимията, госуслуги и открытую информацию.",
      listLabel: "На разделе обычно доступны:",
      items: [
        {
          icon: "building",
          title: "О хокимияте",
          desc: "Сведения о хокимияте, структура, руководство, центральный аппарат, органы системы, город и район, областной Совет депутатов, общественный совет",
        },
        {
          icon: "program",
          title: "Деятельность",
          desc: "Перепись, FAQ, аналитика и статистика, тендеры, электронное правительство, международное сотрудничество, антикоррупция, молодёжная и гендерная политика",
        },
        {
          icon: "globe",
          title: "Государственные услуги",
          desc: "Заявления, единый интерактивный портал, интерактивные услуги администрации, архив реестра",
        },
        {
          icon: "decree",
          title: "Документы",
          desc: "Нормативные и внутренние документы, обсуждение НПА, Конституция, аналитика",
        },
        {
          icon: "chart",
          title: "Цифровое правительство",
          desc: "Открытые данные и бюджет, PF-6247, показатели открытости, вакансии, инфографика",
        },
        {
          icon: "news",
          title: "Пресс-центр и контакты",
          desc: "Новости, пресс-служба, календарь; обратная связь и контакты",
        },
      ],
      closing:
        "Меню обновляется; актуальные сведения смотрите на gov.uz/jizzax.",
    },
    whyUse: {
      h2: "Зачем использовать официальный раздел",
      intro:
        "gov.uz/jizzax — канал официальной информации хокимията Джизакской области на едином портале.",
      listLabel: "Раздел особенно полезен:",
      items: [
        "жителям области при поиске новостей, госуслуг и контактов",
        "предпринимателям при участии в тендерах и подаче заявлений",
        "аналитикам и журналистам при работе с открытыми данными и пресс-материалами",
        "организациям при запросе статистики и обратной связи",
      ],
    },
    otherSites: {
      h2: "Другие официальные сайты государственных органов",
    },
    schema: {
      description:
        "Официальный раздел хокимията Джизакской области на портале gov.uz (jizzax): телефон +99872 226-30-90, телефон доверия +99872 226-00-11, электронная почта info[at]jizzax.uz, адрес 708000, Джизак, ул. Ш. Рашидова, 64, ссылки на разделы городов и районов на gov.uz, социальные сети, понедельник–пятница 09:00–18:00, обед 13:00–14:00.",
      orgName: "Хокимият Джизакской области",
      sameAs: [
        "https://gov.uz/ru/jizzax",
        "https://gov.uz/en/jizzax",
        "https://gov.uz/oz/jizzax",
      ],
    },
    faq: {
      h2: "Часто задаваемые вопросы",
      items: [
        {
          q: "Где официальный раздел хокимията Джизакской области?",
          a: "На портале государства: https://gov.uz/ru/jizzax (также https://gov.uz/en/jizzax и https://gov.uz/oz/jizzax). В каталоге ссылка подставляется под язык интерфейса.",
        },
        {
          q: "Какие телефоны, почта, адрес и режим работы указаны для связи?",
          a: "Телефон +99872 226-30-90, телефон доверия +99872 226-00-11, электронная почта info@jizzax.uz, адрес 708000, Джизак, ул. Ш. Рашидова, 64; города и районы, соцсети и часы — в блоке контактов на странице (по govinfo.uz); полный перечень номеров — в «Все номера» на gov.uz.",
        },
        {
          q: "Где открытые данные и показатели открытости?",
          a: "В разделе «Цифровое правительство» на gov.uz/jizzax: открытые данные, открытый бюджет, PF-6247, показатели открытости администрации области.",
        },
        {
          q: "Где интерактивные услуги областной администрации?",
          a: "В разделе «Государственные услуги» — «Интерактивные услуги Джизакской областной администрации» и единый портал.",
        },
      ],
    },
  },
  en: {
    pageTitle: "Jizzakh regional administration",
    intro: [
      "The Jizzakh regional administration is the executive body of the Jizzakh region; it implements legislation and decisions of the President and Cabinet of Ministers and guides the socio-economic development of the territory.",
      "The gov.uz jizzax section (https://gov.uz/en/jizzax) publishes information about the khokimiyat: about the administration, structure, leadership, central office, subordinate enterprises, city and district administration, coordination and advisory bodies, Jizzakh regional Council of People’s Deputies, public council. Activities include census, FAQ, analytical and statistical information, competitions and tenders, e-government, international cooperation, anti-corruption, youth and gender policy. Public services include applications from individuals and legal entities, unified interactive public services portal, interactive services of the regional administration, archive of services in the unified register. Documents include internal documents, repealed documents, regulations, discussion of draft NPA, laws and acts on competence, Constitution, analytical data. Digital government includes open data portal information, open budget data, PF-6247, openness indicators, vacancies, application review results, infographics. Press centre: statistics and research, social sphere, weather warnings, news, leadership statements, calendar, sessions. Contacts: feedback, corruption prevention, statistics request, surveys. Per UzGovInfo (govinfo.uz) and the gov.uz section: phone +99872 226-30-90, trust line +99872 226-00-11, email info@jizzax.uz, address 708000, Jizzakh, Sharof Rashidov street 64; links to cities and districts are in the contacts block; for the full number list see “All numbers” on gov.uz.",
      "Useful for residents and organisations in Jizzakh region seeking public services, open data and contacts.",
    ],
    officialSite: {
      h2: "Official section on gov.uz",
      ctaText:
        "Open the Jizzakh regional administration section on gov.uz →",
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
      phones: [{ display: "+99872 226-30-90", href: "tel:+998722263090" }],
      trustPhone: { display: "+99872 226-00-11", href: "tel:+998722260011" },
      email: { display: "info@jizzax.uz", href: "mailto:info@jizzax.uz" },
      territorialOffices: jizzakhTerritoryLinks.map(({ url, en: label }) => ({ url, label })),
      social: [
        {
          id: "facebook",
          label: "Facebook",
          url: "https://www.facebook.com/jizzaxviloyathokimligi/",
        },
        {
          id: "instagram",
          label: "Instagram",
          url: "https://www.instagram.com/jizzaxviloyathokimligi/",
        },
        { id: "telegram", label: "Telegram", url: "https://t.me/jizzaxviloyatihokimligi" },
        { id: "twitter", label: "X (Twitter)", url: "https://twitter.com/Jizzaxviloyath1" },
        {
          id: "youtube",
          label: "YouTube",
          url: "https://www.youtube.com/c/Jizzaxviloyatihokimligi",
        },
      ],
      address: "708000, Jizzakh, Sharof Rashidov street, 64",
      hours: "Monday–Friday, 09:00–18:00; lunch break 13:00–14:00",
      sourceAttribution: {
        dataSource:
          "Contact details are taken from the UzGovInfo portal (govinfo.uz), page of the Jizzakh regional administration.",
        reuseNoticeBefore: "When using materials from this site, a link to the ",
        reuseLinkText: "site",
        reuseNoticeAfter: " is required.",
        reuseUrl: "https://gov.uz/en/jizzax",
      },
    },
    whatFind: {
      h2: "What you can find there",
      intro:
        "gov.uz/jizzax brings together the regional administration’s mandate, public services and transparency.",
      listLabel: "You can typically find:",
      items: [
        {
          icon: "building",
          title: "About the administration",
          desc: "About the khokimiyat, structure, leadership, central office, city and district bodies, regional council, public council",
        },
        {
          icon: "program",
          title: "Activities",
          desc: "Census, FAQ, analytics, tenders, e-government, international cooperation, anti-corruption, youth and gender policy",
        },
        {
          icon: "globe",
          title: "Public services",
          desc: "Applications, unified portal, interactive regional services, register archive",
        },
        {
          icon: "decree",
          title: "Documents",
          desc: "Internal and normative documents, draft NPA discussion, Constitution, analytics",
        },
        {
          icon: "chart",
          title: "Digital government",
          desc: "Open data and budget, PF-6247, openness indicators, vacancies, infographics",
        },
        {
          icon: "news",
          title: "Press centre and contacts",
          desc: "News, calendar, sessions; feedback and contacts",
        },
      ],
      closing: "Menus are updated; see gov.uz/jizzax for current information.",
    },
    whyUse: {
      h2: "Why use this official resource",
      intro:
        "gov.uz/jizzax is the official channel of the Jizzakh regional administration on Uzbekistan’s portal.",
      listLabel: "It is especially useful for:",
      items: [
        "residents seeking news, public services and contacts",
        "businesses participating in tenders and filing applications",
        "analysts and journalists working with open data and press materials",
        "organisations requesting statistics and feedback",
      ],
    },
    otherSites: {
      h2: "Other official websites of government bodies",
    },
    schema: {
      description:
        "Official section of the Jizzakh regional administration on gov.uz (jizzax): phone +99872 226-30-90, trust line +99872 226-00-11, email info[at]jizzax.uz, address 708000, Jizzakh, Sharof Rashidov street 64, links to city and district sections on gov.uz, social media, Monday–Friday 09:00–18:00, lunch 13:00–14:00.",
      orgName: "Jizzakh regional administration",
      sameAs: [
        "https://gov.uz/en/jizzax",
        "https://gov.uz/ru/jizzax",
        "https://gov.uz/oz/jizzax",
      ],
    },
    faq: {
      h2: "Frequently asked questions",
      items: [
        {
          q: "Where is the official section of the Jizzakh regional administration?",
          a: "On the government portal: https://gov.uz/en/jizzax (also https://gov.uz/ru/jizzax and https://gov.uz/oz/jizzax). The catalog link matches your interface language.",
        },
        {
          q: "What phones, email, address, and office hours are listed for contact?",
          a: "Phone +99872 226-30-90, trust line +99872 226-00-11, email info@jizzax.uz, address 708000, Jizzakh, Sharof Rashidov street 64; cities and districts, social media and hours — in the contacts block on this page (per govinfo.uz); see “All numbers” on gov.uz for the full list.",
        },
        {
          q: "Where are open data and openness indicators?",
          a: "Under Digital government on gov.uz/jizzax: open data, open budget, PF-6247, openness indicators of the regional administration.",
        },
        {
          q: "Where are interactive services of the regional administration?",
          a: "Under Public services — interactive services of the Jizzakh regional administration and the unified portal.",
        },
      ],
    },
  },
  uz: {
    pageTitle: "Jizzax viloyati hokimligi",
    intro: [
      "Jizzax viloyati hokimligi — viloyat hududidagi ijroiya hokimiyati organi; qonunchilik, Prezident va Vazirlar Kengashi qarorlarini amalga oshiradi, hududning ijtimoiy-iqtisodiy rivojlanishini taʼminlaydi.",
      "gov.uz «jizzax» boʻlimi (https://gov.uz/oz/jizzax) da hokimiyat haqida: tuzilma, rahbariyat, markaziy apparat, tizimdagi korxonalar, shahar va tuman maʼmuriyati, muvofiqlashtiruvchi organlar, Jizzax viloyati xalq deputatlari Kengashi, jamoatchilik kengashi. «Faoliyat»da roʻyxatdan oʻtish, savollar-javoblar, tahliliy va statistik maʼlumotlar, tanlovlar va tenderlar, elektron hukumat, xalqaro hamkorlik, korrupsiyaga qarshi kurash, yoshlar va gender siyosati. «Davlat xizmatlari»da arizalar, yagona interaktiv portal, viloyat maʼmuriyatining interaktiv xizmatlari, reyestr arxivi. «Hujjatlar»da ichki va meʼyoriy hujjatlar, loyiha muhokamasi, Konstitutsiya, tahlil. «Raqamli davlat»da ochiq maʼlumotlar, ochiq byudjet, PF-6247, ochiq boʻlish koʻrsatkichlari, vakansiyalar, infografika. Matbuot va aloqa. UzGovInfo (govinfo.uz) va gov.uz boʻlimi boʻyicha: telefon +99872 226-30-90, ishonch liniyasi +99872 226-00-11, elektron pochta info@jizzax.uz, manzil 708000, Jizzax, Sh. Rashidov koʻchasi, 64; shahar va tumanlar havolalari — kontaktlar blokida; toʻliq raqamlar — gov.uz dagi «Barcha raqamlar».",
      "Jizzax viloyati fuqarolari va tashkilotlari uchun rasmiy manba.",
    ],
    officialSite: {
      h2: "gov.uz dagi rasmiy boʻlim",
      ctaText: "Jizzax viloyati hokimligi boʻlimiga oʻtish →",
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
      phones: [{ display: "+99872 226-30-90", href: "tel:+998722263090" }],
      trustPhone: { display: "+99872 226-00-11", href: "tel:+998722260011" },
      email: { display: "info@jizzax.uz", href: "mailto:info@jizzax.uz" },
      territorialOffices: jizzakhTerritoryLinks.map(({ url, uz: label }) => ({ url, label })),
      social: [
        {
          id: "facebook",
          label: "Facebook",
          url: "https://www.facebook.com/jizzaxviloyathokimligi/",
        },
        {
          id: "instagram",
          label: "Instagram",
          url: "https://www.instagram.com/jizzaxviloyathokimligi/",
        },
        { id: "telegram", label: "Telegram", url: "https://t.me/jizzaxviloyatihokimligi" },
        { id: "twitter", label: "X (Twitter)", url: "https://twitter.com/Jizzaxviloyath1" },
        {
          id: "youtube",
          label: "YouTube",
          url: "https://www.youtube.com/c/Jizzaxviloyatihokimligi",
        },
      ],
      address: "708000, Jizzax, Sh. Rashidov koʻchasi, 64",
      hours: "Dushanba–juma, 09:00–18:00; tushlik 13:00–14:00",
      sourceAttribution: {
        dataSource:
          "Kontakt maʼlumotlari UzGovInfo portali (govinfo.uz) boʻyicha Jizzax viloyati hokimligi sahifasidan olingan.",
        reuseNoticeBefore: "Ushbu sayt materiallaridan foydalanganda ",
        reuseLinkText: "saytga",
        reuseNoticeAfter: " havola qoʻyish majburiy.",
        reuseUrl: "https://gov.uz/oz/jizzax",
      },
    },
    whatFind: {
      h2: "Rasmiy resursda nimalar bor",
      intro: "gov.uz/jizzax viloyat hokimiyati vakolati va ochiq axborotni birlashtiradi.",
      listLabel: "Odatda mavjud:",
      items: [
        {
          icon: "building",
          title: "Hokimiyat haqida",
          desc: "Tuzilma, rahbariyat, shahar va tuman, viloyat Kengashi",
        },
        {
          icon: "program",
          title: "Faoliyat",
          desc: "Tenderlar, elektron hukumat, tahlil va statistika",
        },
        {
          icon: "globe",
          title: "Davlat xizmatlari",
          desc: "Arizalar, interaktiv portal, viloyat xizmatlari",
        },
        {
          icon: "decree",
          title: "Hujjatlar",
          desc: "Meʼyoriy hujjatlar, Konstitutsiya, loyiha muhokamasi",
        },
        {
          icon: "chart",
          title: "Raqamli davlat",
          desc: "Ochiq maʼlumotlar, PF-6247, vakansiyalar",
        },
        {
          icon: "news",
          title: "Matbuot va aloqa",
          desc: "Yangiliklar, qayta aloqa, kontaktlar",
        },
      ],
      closing: "Menyu yangilanadi; gov.uz/jizzax dan tekshiring.",
    },
    whyUse: {
      h2: "Nima uchun rasmiy boʻlimdan foydalanish kerak",
      intro:
        "gov.uz/jizzax — Jizzax viloyati hokimiyatining yagona davlat portali boʻyicha rasmiy kanali.",
      listLabel: "Quyidagilar uchun muhim:",
      items: [
        "viloyat yangiliklari va xizmatlarini qidiraydiganlar uchun",
        "tender va arizalar bilan ishlovchilar uchun",
        "ochiq maʼlumot va matbuot uchun",
      ],
    },
    otherSites: {
      h2: "Boshqa davlat organlarining rasmiy saytlari",
    },
    schema: {
      description:
        "Jizzax viloyati hokimligining gov.uz portali boʻlimi (jizzax): telefon +99872 226-30-90, ishonch liniyasi +99872 226-00-11, elektron pochta info[at]jizzax.uz, manzil 708000, Jizzax, Sh. Rashidov koʻchasi, 64, gov.uz dagi shahar va tumanlar havolalari, ijtimoiy tarmoqlar, dushanba–juma 09:00–18:00, tushlik 13:00–14:00.",
      orgName: "Jizzax viloyati hokimligi",
      sameAs: [
        "https://gov.uz/oz/jizzax",
        "https://gov.uz/ru/jizzax",
        "https://gov.uz/en/jizzax",
      ],
    },
    faq: {
      h2: "Tez-tez beriladigan savollar",
      items: [
        {
          q: "Rasmiy boʻlim qayerda?",
          a: "https://gov.uz/oz/jizzax (ru va en ham mavjud).",
        },
        {
          q: "Aloqa uchun qanday telefonlar, pochta, manzil va ish vaqti koʻrsatilgan?",
          a: "Telefon +99872 226-30-90, ishonch liniyasi +99872 226-00-11, elektron pochta info@jizzax.uz, manzil 708000, Jizzax, Sh. Rashidov koʻchasi, 64; shahar va tumanlar, ijtimoiy tarmoqlar va vaqt — sahifadagi kontaktlar blokida (govinfo.uz boʻyicha); toʻliq raqamlar — gov.uz dagi «Barcha raqamlar».",
        },
        {
          q: "Ochiq maʼlumotlar qayerda?",
          a: "«Raqamli davlat» — ochiq maʼlumotlar portalidagi eʼlonlar, PF-6247, ochiq boʻlish koʻrsatkichlari.",
        },
        {
          q: "Interaktiv xizmatlar qayerda?",
          a: "«Davlat xizmatlari» — Jizzax viloyati maʼmuriyatining interaktiv xizmatlari va yagona portal.",
        },
      ],
    },
  },
};
