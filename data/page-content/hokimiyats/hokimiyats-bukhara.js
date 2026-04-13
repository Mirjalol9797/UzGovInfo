/**
 * Хокимият Бухарской области
 * Официальный раздел: https://gov.uz/ru/buxoro
 */
const bukharaTerritoryLinks = [
  { url: "https://gov.uz/jondor/", ru: "Жондорский район", en: "Jondor district", uz: "Jondor tumani" },
  { url: "https://gov.uz/kogonshahar/", ru: "город Каган", en: "Kagan city", uz: "Qoʻgʻon shahri" },
  { url: "https://gov.uz/buxoroshahar/", ru: "город Бухара", en: "Bukhara city", uz: "Buxoro shahri" },
  {
    url: "https://gov.uz/qorovulbozor/",
    ru: "Караулбазарский район",
    en: "Karakulbazar district",
    uz: "Qorovulbozor tumani",
  },
  { url: "https://gov.uz/vobkent/", ru: "Вабкентский район", en: "Vabkent district", uz: "Vobkent tumani" },
  { url: "https://gov.uz/qorakul/", ru: "Каракульский район", en: "Karakul district", uz: "Qorakoʻl tumani" },
  { url: "https://gov.uz/shofirkon/", ru: "Шафирканский район", en: "Shafirkan district", uz: "Shofirkon tumani" },
  { url: "https://gov.uz/romitan/", ru: "Ромитанский район", en: "Romitan district", uz: "Romitan tumani" },
  { url: "https://gov.uz/olot/", ru: "Алатский район", en: "Alat district", uz: "Olot tumani" },
  { url: "https://gov.uz/peshku/", ru: "Пешкунский район", en: "Peshku district", uz: "Peshku tumani" },
  { url: "https://gov.uz/gijduvon/", ru: "Гиждуванский район", en: "Gijduvan district", uz: "Gʻijduvon tumani" },
  { url: "https://gov.uz/kogontuman/", ru: "Каганский район", en: "Kagan district", uz: "Qoʻgʻon tumani" },
  { url: "https://gov.uz/buxorotuman/", ru: "Бухарский район", en: "Bukhara district", uz: "Buxoro tumani" },
];

export default {
  ru: {
    pageTitle: "Хокимият Бухарской области",
    intro: [
      "Хокимият Бухарской области — орган исполнительной власти на территории области; обеспечивает реализацию законодательства, решений Президента и Кабинета Министров, социально-экономическое и культурное развитие региона, в том числе в сферах туризма, сельского хозяйства и благоустройства территорий.",
      "На портале gov.uz раздел buxoro (https://gov.uz/ru/buxoro) содержит сведения о хокимияте: о хокимияте, структуре организации, руководстве, центральном аппарате, подведомственных предприятиях, территориальных управлениях, списке вакансий в провинции. В «Деятельности» — перепись, жизнь территорий, туризм, строительство и ЖКХ, экология и ландшафт, экономика, государственная политика, культурно-просветительская работа, сельское хозяйство, военное направление, международное сотрудничество, противодействие коррупции, молодёжная и гендерная политика. В «Государственных услугах» — статистика обращений, единый портал интерактивных услуг. В «Документах» — Конституция, обсуждение проектов НПА, законы и постановления по деятельности, государственные программы. В «Цифровом правительстве» — FAQ, информация о противодействии коррупции, тендеры, вакансии, открытый бюджет, отчёты (ПУ-6247). Пресс-центр: пресс-служба, новости, заявления руководства, календарь, заседания, пресс-конференции. Контакты: контакты, опросы, форум, вопросы-ответы, статистика обращений. По сведениям UzGovInfo (govinfo.uz) и раздела на gov.uz: телефон +99865 224-41-10, телефон доверия +99865 222-22-22, электронная почта info@buxoro.uz, адрес 205018, Бухара, ул. И. Каримова, 1; ссылки на города и районы — в блоке контактов; полный список номеров — в «Все номера» на gov.uz.",
      "Полезен жителям и гостям Бухарской области, инвесторам в туризм и сельское хозяйство, СМИ и организациям при работе с региональными программами.",
    ],
    officialSite: {
      h2: "Официальный раздел на gov.uz",
      ctaText:
        "Перейти в раздел хокимията Бухарской области на gov.uz →",
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
      phones: [{ display: "+99865 224-41-10", href: "tel:+998652244110" }],
      trustPhone: { display: "+99865 222-22-22", href: "tel:+998652222222" },
      email: { display: "info@buxoro.uz", href: "mailto:info@buxoro.uz" },
      territorialOffices: bukharaTerritoryLinks.map(({ url, ru: label }) => ({ url, label })),
      social: [
        { id: "telegram", label: "Telegram", url: "https://t.me/buxorouz_official" },
        {
          id: "facebook",
          label: "Facebook",
          url: "https://www.facebook.com/buxorouzofficial",
        },
        {
          id: "instagram",
          label: "Instagram",
          url: "https://www.instagram.com/buxorouz_official/",
        },
        {
          id: "youtube",
          label: "YouTube",
          url: "https://www.youtube.com/@bvhrasmiy",
        },
      ],
      address: "205018, Бухара, ул. И. Каримова, 1",
      hours: "Понедельник–пятница",
      sourceAttribution: {
        dataSource:
          "Контактные данные приведены по сведениям портала UzGovInfo (govinfo.uz), страница хокимията Бухарской области.",
        reuseNoticeBefore: "При использовании материалов с данного сайта ссылка на ",
        reuseLinkText: "сайт",
        reuseNoticeAfter: " обязательна.",
        reuseUrl: "https://gov.uz/ru/buxoro",
      },
    },
    whatFind: {
      h2: "Что можно найти на официальном ресурсе",
      intro:
        "Раздел gov.uz/buxoro объединяет полномочия областного хокимията, госуслуги и открытую информацию.",
      listLabel: "На разделе обычно доступны:",
      items: [
        {
          icon: "building",
          title: "О хокимияте",
          desc: "Сведения о хокимияте, структура, руководство, центральный аппарат, подведомственные предприятия, территориальные управления, вакансии",
        },
        {
          icon: "program",
          title: "Деятельность",
          desc: "Перепись, туризм, экономика, сельское хозяйство, строительство и экология, молодёжная и гендерная политика, антикоррупция",
        },
        {
          icon: "globe",
          title: "Государственные услуги",
          desc: "Статистика обращений, единый портал интерактивных госуслуг",
        },
        {
          icon: "decree",
          title: "Документы",
          desc: "Конституция, обсуждение НПА, законы и постановления, госпрограммы",
        },
        {
          icon: "chart",
          title: "Цифровое правительство",
          desc: "FAQ, антикоррупция, тендеры, вакансии, открытый бюджет, отчёты ПУ-6247",
        },
        {
          icon: "news",
          title: "Пресс-центр и контакты",
          desc: "Новости, пресс-служба, календарь; опросы, форум, статистика обращений",
        },
      ],
      closing:
        "Меню обновляется; актуальные сведения смотрите на gov.uz/buxoro.",
    },
    whyUse: {
      h2: "Зачем использовать официальный раздел",
      intro:
        "gov.uz/buxoro — канал официальной информации хокимията Бухарской области на едином портале.",
      listLabel: "Раздел особенно полезен:",
      items: [
        "жителям и туристам при поиске новостей региона и контактов власти",
        "бизнесу при участии в тендерах и работе с открытым бюджетом",
        "журналистам при поиске пресс-материалов и статистики обращений",
        "организациям при подготовке обращений и участии в опросах",
      ],
    },
    otherSites: {
      h2: "Другие официальные сайты государственных органов",
    },
    schema: {
      description:
        "Официальный раздел хокимията Бухарской области на портале gov.uz (buxoro): телефон +99865 224-41-10, телефон доверия +99865 222-22-22, электронная почта info[at]buxoro.uz, адрес 205018, Бухара, ул. И. Каримова, 1, ссылки на разделы городов и районов на gov.uz, социальные сети (Telegram, Facebook, Instagram, YouTube), приём по будням.",
      orgName: "Хокимият Бухарской области",
      sameAs: [
        "https://gov.uz/ru/buxoro",
        "https://gov.uz/en/buxoro",
        "https://gov.uz/oz/buxoro",
      ],
    },
    faq: {
      h2: "Часто задаваемые вопросы",
      items: [
        {
          q: "Где официальный раздел хокимията Бухарской области?",
          a: "На портале государства: https://gov.uz/ru/buxoro (также https://gov.uz/en/buxoro и https://gov.uz/oz/buxoro). В каталоге ссылка подставляется под язык интерфейса.",
        },
        {
          q: "Какие телефоны, почта и адрес указаны для связи?",
          a: "Телефон +99865 224-41-10, телефон доверия +99865 222-22-22, электронная почта info@buxoro.uz, адрес 205018, Бухара, ул. И. Каримова, 1; города и районы и соцсети — в блоке контактов на странице (по govinfo.uz); полный перечень номеров — в «Все номера» на gov.uz.",
        },
        {
          q: "Где материалы о туризме и экономике области?",
          a: "В разделе «Деятельность» на gov.uz/buxoro — отдельные тематические блоки (туризм, экономика, сельское хозяйство и др.).",
        },
        {
          q: "Где открытый бюджет и отчёты?",
          a: "В разделе «Цифровое правительство» — открытый бюджет и отчёты (ПУ-6247).",
        },
      ],
    },
  },
  en: {
    pageTitle: "Bukhara regional administration",
    intro: [
      "The Bukhara regional administration is the executive body of the Bukhara region; it implements legislation and decisions of the President and Cabinet of Ministers and guides socio-economic and cultural development, including tourism, agriculture and territorial improvement.",
      "The gov.uz buxoro section (https://gov.uz/en/buxoro) publishes information about the khokimiyat: about the administration, structure, leadership, central office, subordinate enterprises, territorial departments, provincial vacancies. Activities include census, life of territories, tourism, construction and utilities, ecology and landscaping, economy, state policy, culture and education, agriculture, military-related matters, international cooperation, anti-corruption, youth and gender policy. Public services include appeal statistics and the unified interactive public services portal. Documents include the Constitution, discussion of draft NPA, laws and resolutions on activities, state programmes. Digital government includes FAQ, anti-corruption information, tenders, vacancies, open budget, reports (PU-6247). Press centre: press service, news, leadership statements, calendar, sessions, press conferences. Contacts: contacts, surveys, forum, Q&A, appeal statistics. Per UzGovInfo (govinfo.uz) and the gov.uz section: phone +99865 224-41-10, trust line +99865 222-22-22, email info@buxoro.uz, address 205018, Bukhara, Islam Karimov street 1; links to cities and districts are in the contacts block; for the full number list see “All numbers” on gov.uz.",
      "Useful for residents and visitors, investors in tourism and agriculture, media and organisations working with regional programmes.",
    ],
    officialSite: {
      h2: "Official section on gov.uz",
      ctaText: "Open the Bukhara regional administration section on gov.uz →",
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
      phones: [{ display: "+99865 224-41-10", href: "tel:+998652244110" }],
      trustPhone: { display: "+99865 222-22-22", href: "tel:+998652222222" },
      email: { display: "info@buxoro.uz", href: "mailto:info@buxoro.uz" },
      territorialOffices: bukharaTerritoryLinks.map(({ url, en: label }) => ({ url, label })),
      social: [
        { id: "telegram", label: "Telegram", url: "https://t.me/buxorouz_official" },
        {
          id: "facebook",
          label: "Facebook",
          url: "https://www.facebook.com/buxorouzofficial",
        },
        {
          id: "instagram",
          label: "Instagram",
          url: "https://www.instagram.com/buxorouz_official/",
        },
        {
          id: "youtube",
          label: "YouTube",
          url: "https://www.youtube.com/@bvhrasmiy",
        },
      ],
      address: "205018, Bukhara, Islam Karimov street, 1",
      hours: "Monday–Friday",
      sourceAttribution: {
        dataSource:
          "Contact details are taken from the UzGovInfo portal (govinfo.uz), page of the Bukhara regional administration.",
        reuseNoticeBefore: "When using materials from this site, a link to the ",
        reuseLinkText: "site",
        reuseNoticeAfter: " is required.",
        reuseUrl: "https://gov.uz/en/buxoro",
      },
    },
    whatFind: {
      h2: "What you can find there",
      intro:
        "gov.uz/buxoro brings together the regional administration’s mandate, public services and transparency.",
      listLabel: "You can typically find:",
      items: [
        {
          icon: "building",
          title: "About the administration",
          desc: "About the khokimiyat, structure, leadership, central office, enterprises, territorial departments, vacancies",
        },
        {
          icon: "program",
          title: "Activities",
          desc: "Census, tourism, economy, agriculture, construction and ecology, youth and gender policy, anti-corruption",
        },
        {
          icon: "globe",
          title: "Public services",
          desc: "Appeal statistics, unified interactive services portal",
        },
        {
          icon: "decree",
          title: "Documents",
          desc: "Constitution, draft NPA discussion, laws and resolutions, state programmes",
        },
        {
          icon: "chart",
          title: "Digital government",
          desc: "FAQ, anti-corruption, tenders, vacancies, open budget, PU-6247 reports",
        },
        {
          icon: "news",
          title: "Press centre and contacts",
          desc: "News, press service, calendar; surveys, forum, appeal statistics",
        },
      ],
      closing: "Menus are updated; see gov.uz/buxoro for current information.",
    },
    whyUse: {
      h2: "Why use this official resource",
      intro:
        "gov.uz/buxoro is the official channel of the Bukhara regional administration on Uzbekistan’s portal.",
      listLabel: "It is especially useful for:",
      items: [
        "residents and tourists seeking regional news and government contacts",
        "businesses participating in tenders and reviewing open budget data",
        "journalists looking for press materials and appeal statistics",
        "organisations preparing appeals and surveys",
      ],
    },
    otherSites: {
      h2: "Other official websites of government bodies",
    },
    schema: {
      description:
        "Official section of the Bukhara regional administration on gov.uz (buxoro): phone +99865 224-41-10, trust line +99865 222-22-22, email info[at]buxoro.uz, address 205018, Bukhara, Islam Karimov street 1, links to city and district sections on gov.uz, social media (Telegram, Facebook, Instagram, YouTube), weekday reception.",
      orgName: "Bukhara regional administration",
      sameAs: [
        "https://gov.uz/en/buxoro",
        "https://gov.uz/ru/buxoro",
        "https://gov.uz/oz/buxoro",
      ],
    },
    faq: {
      h2: "Frequently asked questions",
      items: [
        {
          q: "Where is the official section of the Bukhara regional administration?",
          a: "On the government portal: https://gov.uz/en/buxoro (also https://gov.uz/ru/buxoro and https://gov.uz/oz/buxoro). The catalog link matches your interface language.",
        },
        {
          q: "What phones, email, and address are listed for contact?",
          a: "Phone +99865 224-41-10, trust line +99865 222-22-22, email info@buxoro.uz, address 205018, Bukhara, Islam Karimov street 1; cities, districts and social media — in the contacts block on this page (per govinfo.uz); see “All numbers” on gov.uz for the full list.",
        },
        {
          q: "Where are tourism and economy materials?",
          a: "Under Activities on gov.uz/buxoro — dedicated blocks for tourism, economy, agriculture and more.",
        },
        {
          q: "Where is the open budget?",
          a: "Under Digital government — open budget and PU-6247 reports.",
        },
      ],
    },
  },
  uz: {
    pageTitle: "Buxoro viloyati hokimligi",
    intro: [
      "Buxoro viloyati hokimligi — viloyat hududidagi ijroiya hokimiyati organi; qonunchilik, Prezident va Vazirlar Kengashi qarorlarini amalga oshiradi, jumladan turizm, qishloq xoʻjaligi va hududni obodonlashtirish boʻyicha rivojlanishni taʼminlaydi.",
      "gov.uz «buxoro» boʻlimi (https://gov.uz/oz/buxoro) da hokimiyat haqida: tuzilma, rahbariyat, markaziy apparat, tizimdagi korxonalar, hududiy boshqarmalar, viloyatdagi vakansiyalar. «Faoliyat»da roʻyxatdan oʻtish, hududlar hayoti, turizm, qurilish va kommunal xoʻjalik, ekologiya, iqtisodiyot, davlat siyosati, madaniy-maʼrifiy ish, qishloq xoʻjaligi, xalqaro hamkorlik, korrupsiyaga qarshi kurash, yoshlar va gender siyosati. «Davlat xizmatlari»da murojaatlar statistikasi, yagona interaktiv davlat xizmatlari portali. «Hujjatlar»da Konstitutsiya, loyiha muhokamasi, qonun va qarorlar, davlat dasturlari. «Raqamli davlat»da savollar-javoblar, korrupsiyaga qarshi maʼlumot, tenderlar, vakansiyalar, ochiq byudjet, hisobotlar (PU-6247). Matbuot markazi va aloqa. UzGovInfo (govinfo.uz) va gov.uz boʻlimi boʻyicha: telefon +99865 224-41-10, ishonch liniyasi +99865 222-22-22, elektron pochta info@buxoro.uz, manzil 205018, Buxoro, I. Karimov koʻchasi, 1; shahar va tumanlar havolalari — kontaktlar blokida; toʻliq raqamlar — gov.uz dagi «Barcha raqamlar».",
      "Buxoro viloyati aholisi, sayyohlar va investorlar uchun rasmiy manba.",
    ],
    officialSite: {
      h2: "gov.uz dagi rasmiy boʻlim",
      ctaText: "Buxoro viloyati hokimligi boʻlimiga oʻtish →",
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
      phones: [{ display: "+99865 224-41-10", href: "tel:+998652244110" }],
      trustPhone: { display: "+99865 222-22-22", href: "tel:+998652222222" },
      email: { display: "info@buxoro.uz", href: "mailto:info@buxoro.uz" },
      territorialOffices: bukharaTerritoryLinks.map(({ url, uz: label }) => ({ url, label })),
      social: [
        { id: "telegram", label: "Telegram", url: "https://t.me/buxorouz_official" },
        {
          id: "facebook",
          label: "Facebook",
          url: "https://www.facebook.com/buxorouzofficial",
        },
        {
          id: "instagram",
          label: "Instagram",
          url: "https://www.instagram.com/buxorouz_official/",
        },
        {
          id: "youtube",
          label: "YouTube",
          url: "https://www.youtube.com/@bvhrasmiy",
        },
      ],
      address: "205018, Buxoro, I. Karimov koʻchasi, 1",
      hours: "Dushanba–juma",
      sourceAttribution: {
        dataSource:
          "Kontakt maʼlumotlari UzGovInfo portali (govinfo.uz) boʻyicha Buxoro viloyati hokimligi sahifasidan olingan.",
        reuseNoticeBefore: "Ushbu sayt materiallaridan foydalanganda ",
        reuseLinkText: "saytga",
        reuseNoticeAfter: " havola qoʻyish majburiy.",
        reuseUrl: "https://gov.uz/oz/buxoro",
      },
    },
    whatFind: {
      h2: "Rasmiy resursda nimalar bor",
      intro: "gov.uz/buxoro viloyat hokimiyati vakolati va ochiq axborotni birlashtiradi.",
      listLabel: "Odatda mavjud:",
      items: [
        {
          icon: "building",
          title: "Hokimiyat haqida",
          desc: "Tuzilma, rahbariyat, apparat, korxonalar, hududiy boshqarmalar",
        },
        {
          icon: "program",
          title: "Faoliyat",
          desc: "Turizm, iqtisodiyot, qishloq xoʻjaligi, yoshlar va gender",
        },
        {
          icon: "globe",
          title: "Davlat xizmatlari",
          desc: "Murojaatlar statistikasi, interaktiv portal",
        },
        {
          icon: "decree",
          title: "Hujjatlar",
          desc: "Konstitutsiya, qonunlar, davlat dasturlari",
        },
        {
          icon: "chart",
          title: "Raqamli davlat",
          desc: "Ochiq byudjet, tenderlar, PU-6247 hisobotlari",
        },
        {
          icon: "news",
          title: "Matbuot va aloqa",
          desc: "Yangiliklar, soʻrovnomalar, murojaatlar statistikasi",
        },
      ],
      closing: "Menyu yangilanadi; gov.uz/buxoro dan tekshiring.",
    },
    whyUse: {
      h2: "Nima uchun rasmiy boʻlimdan foydalanish kerak",
      intro:
        "gov.uz/buxoro — Buxoro viloyati hokimiyatining yagona davlat portali boʻyicha rasmiy kanali.",
      listLabel: "Quyidagilar uchun muhim:",
      items: [
        "viloyat yangiliklari va aloqa qidiraydiganlar uchun",
        "tender va ochiq byudjet bilan ishlovchilar uchun",
        "matbuot va statistika uchun",
      ],
    },
    otherSites: {
      h2: "Boshqa davlat organlarining rasmiy saytlari",
    },
    schema: {
      description:
        "Buxoro viloyati hokimligining gov.uz portali boʻlimi (buxoro): telefon +99865 224-41-10, ishonch liniyasi +99865 222-22-22, elektron pochta info[at]buxoro.uz, manzil 205018, Buxoro, I. Karimov koʻchasi, 1, gov.uz dagi shahar va tumanlar havolalari, ijtimoiy tarmoqlar (Telegram, Facebook, Instagram, YouTube), dushanba–juma.",
      orgName: "Buxoro viloyati hokimligi",
      sameAs: [
        "https://gov.uz/oz/buxoro",
        "https://gov.uz/ru/buxoro",
        "https://gov.uz/en/buxoro",
      ],
    },
    faq: {
      h2: "Tez-tez beriladigan savollar",
      items: [
        {
          q: "Rasmiy boʻlim qayerda?",
          a: "https://gov.uz/oz/buxoro (ru va en ham mavjud).",
        },
        {
          q: "Aloqa uchun qanday telefonlar, pochta va manzil koʻrsatilgan?",
          a: "Telefon +99865 224-41-10, ishonch liniyasi +99865 222-22-22, elektron pochta info@buxoro.uz, manzil 205018, Buxoro, I. Karimov koʻchasi, 1; shahar va tumanlar va ijtimoiy tarmoqlar — sahifadagi kontaktlar blokida (govinfo.uz boʻyicha); toʻliq raqamlar — gov.uz dagi «Barcha raqamlar».",
        },
        {
          q: "Turizm va iqtisodiyot boʻlimi qayerda?",
          a: "«Faoliyat» boʻlimida — alohida mavzular.",
        },
        {
          q: "Ochiq byudjet qayerda?",
          a: "«Raqamli davlat» — ochiq byudjet va PU-6247 hisobotlari.",
        },
      ],
    },
  },
};
