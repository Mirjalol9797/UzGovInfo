/**
 * Совет Министров Республики Каракалпакстан
 * Официальный раздел: https://gov.uz/ru/karakalpakstan
 */
const karakalpakTerritoryLinks = [
  { url: "https://gov.uz/kegeyli/", ru: "Кегейлийский район", en: "Kegeili district", uz: "Kegayli tumani" },
  { url: "https://gov.uz/taqiyatas/", ru: "Тахиаташский район", en: "Takhiatash district", uz: "Taxiatosh tumani" },
  { url: "https://gov.uz/nokis/", ru: "город Нукус", en: "Nukus city", uz: "Nukus shahri" },
  { url: "https://gov.uz/moynaq/", ru: "Муйнакский район", en: "Muynak district", uz: "Moʻynoq tumani" },
  { url: "https://gov.uz/nokisrk/", ru: "Нукусский район", en: "Nukus district", uz: "Nukus tumani" },
  { url: "https://gov.uz/qanlikol/", ru: "Канлыкульский район", en: "Kanlikul district", uz: "Qanlikoʻl tumani" },
  { url: "https://gov.uz/xojeli/", ru: "Ходжейлийский район", en: "Khodjeyli district", uz: "Xojayli tumani" },
  { url: "https://gov.uz/amiwdarya/", ru: "Амударьинский район", en: "Amudarya district", uz: "Amudaryo tumani" },
  { url: "https://gov.uz/ellikqala/", ru: "Элликкалинский район", en: "Ellikkala district", uz: "Ellikqalʻa tumani" },
  { url: "https://gov.uz/beruniy/", ru: "Берунийский район", en: "Beruniy district", uz: "Beruniy tumani" },
  { url: "https://gov.uz/tortkul/", ru: "Турткульский район", en: "Turtkul district", uz: "Toʻrtkoʻl tumani" },
  { url: "https://gov.uz/shomanay/", ru: "Шуманайский район", en: "Shumanay district", uz: "Shumanay tumani" },
  { url: "https://gov.uz/qonirat/", ru: "Кунградский район", en: "Kungrad district", uz: "Qonirat tumani" },
  { url: "https://gov.uz/taxtakopir/", ru: "Тахтакупырский район", en: "Takhtakupir district", uz: "Taxtakoʻpir tumani" },
  { url: "https://gov.uz/shimbay/", ru: "Чимбайский район", en: "Chimbay district", uz: "Chimboy tumani" },
  { url: "https://gov.uz/qaraozek/", ru: "Караузякский район", en: "Karauzyak district", uz: "Qoraoʻzak tumani" },
  { url: "https://gov.uz/bozataw/", ru: "Бозатауский район", en: "Bozatau district", uz: "Bozatov tumani" },
];

export default {
  ru: {
    pageTitle: "Совет Министров Республики Каракалпакстан",
    intro: [
      "Совет Министров Республики Каракалпакстан — высший исполнительный орган государственной власти республики в составе Республики Узбекистан; обеспечивает реализацию Конституции и законов, решений Президента и Кабинета Министров, социально-экономическое развитие территории.",
      "На портале gov.uz раздел karakalpakstan (https://gov.uz/ru/karakalpakstan) содержит сведения о Вазирлар Кенгаши: о совете министров, структуре организации, руководстве, центральном аппарате, организациях системы, городах и районах, координационных и совещательных органах, вакансиях, общественном совете. В «Деятельности» — регистрация и отборы, тендеры, открытые заседания, приём запросов на информацию, FAQ, занятость, ограниченная информация, исполнение государственных программ, выездные приёмы, противодействие коррупции. В «Государственных услугах» — вопросы при собеседованиях на гражданские должности, обращения, единый реестр, карта земель для предпринимателей, портал интерактивных услуг. В «Документах» — нормативные акты, обсуждение НПА, регламент, закон о Вазирлар Кенгаши, сотрудничество, решения, утратившие силу акты, нормы Президента. В «Цифровом правительстве» — геопространственные данные, открытые данные, «умный город», обратная связь, инфографика, отчёты по инициативному бюджету, PF-6247, PF-3299. Пресс-служба: видео, официальные комментарии, статистика, календарь, пресс-конференции. Контакты: обращения, статистика обращений, контакты. По сведениям UzGovInfo (govinfo.uz) и раздела на gov.uz: телефон и телефон доверия +99861 222-26-14, электронная почта ministrlerkenesi@umail.uz, адрес 230100, Нукус, ул. Гарезсизлик, 50; ссылки на разделы городов и районов — в блоке контактов; полный список номеров — в «Все номера» на gov.uz.",
      "Полезен жителям и организациям Каракалпакстана, инвесторам и СМИ при работе с региональными программами и официальными обращениями.",
    ],
    officialSite: {
      h2: "Официальный раздел на gov.uz",
      ctaText:
        "Перейти в раздел Совета Министров Республики Каракалпакстан на gov.uz →",
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
      phones: [{ display: "+99861 222-26-14", href: "tel:+998612222614" }],
      trustPhone: { display: "+99861 222-26-14", href: "tel:+998612222614" },
      email: {
        display: "ministrlerkenesi@umail.uz",
        href: "mailto:ministrlerkenesi@umail.uz",
      },
      territorialOffices: karakalpakTerritoryLinks.map(({ url, ru: label }) => ({ url, label })),
      social: [
        {
          id: "facebook",
          label: "Facebook",
          url: "https://www.facebook.com/profile.php?id=61572924556334",
        },
        { id: "telegram", label: "Telegram", url: "https://t.me/QResMinistrlerKenesi" },
        {
          id: "instagram",
          label: "Instagram",
          url: "https://www.instagram.com/qr.ministrlerkenesi/",
        },
      ],
      address: "230100, Нукус, ул. Гарезсизлик, 50",
      transport:
        "Маршрутное такси: №23, №4, №10, №11, №14, №15, №34, №48, №56, №67, №78, №83, №87, №88. Автобус: №5.",
      hours: "Понедельник–пятница, 09:00–18:00; обед 13:00–14:00",
      sourceAttribution: {
        dataSource:
          "Контактные данные приведены по сведениям портала UzGovInfo (govinfo.uz), страница Совета Министров Республики Каракалпакстан.",
        reuseNoticeBefore: "При использовании материалов с данного сайта ссылка на ",
        reuseLinkText: "сайт",
        reuseNoticeAfter: " обязательна.",
        reuseUrl: "https://gov.uz/ru/karakalpakstan",
      },
    },
    whatFind: {
      h2: "Что можно найти на официальном ресурсе",
      intro:
        "Раздел gov.uz/karakalpakstan объединяет полномочия Вазирлар Кенгаши, госуслуги и открытую информацию.",
      listLabel: "На разделе обычно доступны:",
      items: [
        {
          icon: "building",
          title: "О Вазирлар Кенгаши",
          desc: "Сведения о совете министров, структура, руководство, центральный аппарат, органы системы, города и районы, вакансии, общественный совет",
        },
        {
          icon: "program",
          title: "Деятельность",
          desc: "Отборы и тендеры, открытые заседания, FAQ, госпрограммы, выездные приёмы, антикоррупция",
        },
        {
          icon: "globe",
          title: "Государственные услуги",
          desc: "Обращения, единый реестр, карта земель для бизнеса, интерактивный портал",
        },
        {
          icon: "decree",
          title: "Документы",
          desc: "Нормативные акты, обсуждение проектов НПА, решения и распоряжения, акты Президента",
        },
        {
          icon: "chart",
          title: "Цифровое правительство",
          desc: "Геоданные, открытые данные, отчёты, инфографика, инициативный бюджет",
        },
        {
          icon: "news",
          title: "Пресс-служба и контакты",
          desc: "Новости, видео, пресс-конференции; обращения и контакты",
        },
      ],
      closing:
        "Меню обновляется; актуальные сведения смотрите на gov.uz/karakalpakstan.",
    },
    whyUse: {
      h2: "Зачем использовать официальный раздел",
      intro:
        "gov.uz/karakalpakstan — канал официальной информации правительства Каракалпакстана на едином портале.",
      listLabel: "Раздел особенно полезен:",
      items: [
        "жителям республики при поиске решений, программ и контактов органов власти",
        "предпринимателям при работе с тендерами, земельными участками и госуслугами",
        "журналистам и аналитикам при поиске пресс-материалов и открытых данных",
        "организациям при подготовке обращений и участии в открытых процедурах",
      ],
    },
    otherSites: {
      h2: "Другие официальные сайты государственных органов",
    },
    schema: {
      description:
        "Официальный раздел Совета Министров Республики Каракалпакстан на портале gov.uz (karakalpakstan): телефон и телефон доверия +99861 222-26-14, электронная почта ministrlerkenesi[at]umail.uz, адрес 230100, Нукус, ул. Гарезсизлик, 50, ссылки на разделы городов и районов на gov.uz, социальные сети, маршрутное такси и автобус, понедельник–пятница 09:00–18:00, обед 13:00–14:00.",
      orgName: "Совет Министров Республики Каракалпакстан",
      sameAs: [
        "https://gov.uz/ru/karakalpakstan",
        "https://gov.uz/en/karakalpakstan",
        "https://gov.uz/oz/karakalpakstan",
      ],
    },
    faq: {
      h2: "Часто задаваемые вопросы",
      items: [
        {
          q: "Где официальный раздел Совета Министров Каракалпакстана?",
          a: "На портале государства: https://gov.uz/ru/karakalpakstan (также https://gov.uz/en/karakalpakstan и https://gov.uz/oz/karakalpakstan). В каталоге ссылка подставляется под язык интерфейса.",
        },
        {
          q: "Какие телефон, почта, адрес и режим работы указаны для связи?",
          a: "Телефон и телефон доверия +99861 222-26-14, электронная почта ministrlerkenesi@umail.uz, адрес 230100, Нукус, ул. Гарезсизлик, 50; города и районы, транспорт и часы — в блоке контактов на странице (по govinfo.uz); полный перечень номеров — в «Все номера» на gov.uz.",
        },
        {
          q: "Где подать обращение?",
          a: "В блоке «Связь» / «Контакты» на разделе karakalpakstan — форма обращения и контактные данные.",
        },
        {
          q: "Где найти нормативные документы республики?",
          a: "В разделе «Документы» на gov.uz/karakalpakstan: нормативные акты, закон о Вазирлар Кенгаши, решения и др.",
        },
        {
          q: "Чем отличается Вазирлар Кенгаши от областного хокимията?",
          a: "Каракалпакстан — республика в составе Узбекистана; Совет Министров республики — региональное правительство с особым конституционным статусом по сравнению с областными хокимиятами.",
        },
      ],
    },
  },
  en: {
    pageTitle: "Council of Ministers of the Republic of Karakalpakstan",
    intro: [
      "The Council of Ministers of the Republic of Karakalpakstan is the supreme executive body of Karakalpakstan within the Republic of Uzbekistan; it implements the Constitution and laws, decisions of the President and Cabinet of Ministers, and guides the socio-economic development of the territory.",
      "The gov.uz karakalpakstan section (https://gov.uz/en/karakalpakstan) publishes information on the Council of Ministers: about the body, organisational structure, leadership, central office, subordinate organisations, cities and districts, coordination and advisory bodies, vacancies, public council. Activities include registration and selections, tenders, open sessions, requests for information, FAQ, employment, restricted information, implementation of state programmes, field receptions, anti-corruption. Public services include interview questions for civil positions, appeals, unified register, land map for entrepreneurs, interactive services portal. Documents cover regulations, discussion of draft laws, council regulations, law on the Council of Ministers, cooperation, decisions and repealed acts, presidential acts. Digital government includes geospatial data, open data, smart city, feedback, infographics, participatory budget reports, PF-6247, PF-3299. Press service: video, official comments, statistics, calendar, press conferences. Contacts: appeals, appeal statistics, contacts. Per UzGovInfo (govinfo.uz) and the gov.uz section: phone and trust line +99861 222-26-14, email ministrlerkenesi@umail.uz, address 230100, Nukus, Garezsizlik street 50; links to cities and districts are in the contacts block; for the full number list see “All numbers” on gov.uz.",
      "Useful for residents and businesses in Karakalpakstan, investors and media seeking regional programmes and official contacts.",
    ],
    officialSite: {
      h2: "Official section on gov.uz",
      ctaText:
        "Open the Council of Ministers of Karakalpakstan section on gov.uz →",
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
      phones: [{ display: "+99861 222-26-14", href: "tel:+998612222614" }],
      trustPhone: { display: "+99861 222-26-14", href: "tel:+998612222614" },
      email: {
        display: "ministrlerkenesi@umail.uz",
        href: "mailto:ministrlerkenesi@umail.uz",
      },
      territorialOffices: karakalpakTerritoryLinks.map(({ url, en: label }) => ({ url, label })),
      social: [
        {
          id: "facebook",
          label: "Facebook",
          url: "https://www.facebook.com/profile.php?id=61572924556334",
        },
        { id: "telegram", label: "Telegram", url: "https://t.me/QResMinistrlerKenesi" },
        {
          id: "instagram",
          label: "Instagram",
          url: "https://www.instagram.com/qr.ministrlerkenesi/",
        },
      ],
      address: "230100, Nukus, Garezsizlik street, 50",
      transport:
        "Route taxis: Nos. 23, 4, 10, 11, 14, 15, 34, 48, 56, 67, 78, 83, 87, 88. Bus: No. 5.",
      hours: "Monday–Friday, 09:00–18:00; lunch break 13:00–14:00",
      sourceAttribution: {
        dataSource:
          "Contact details are taken from the UzGovInfo portal (govinfo.uz), page of the Council of Ministers of the Republic of Karakalpakstan.",
        reuseNoticeBefore: "When using materials from this site, a link to the ",
        reuseLinkText: "site",
        reuseNoticeAfter: " is required.",
        reuseUrl: "https://gov.uz/en/karakalpakstan",
      },
    },
    whatFind: {
      h2: "What you can find there",
      intro:
        "gov.uz/karakalpakstan brings together the government’s mandate, public services and transparency.",
      listLabel: "You can typically find:",
      items: [
        {
          icon: "building",
          title: "About the Council",
          desc: "About the Council of Ministers, structure, leadership, central office, system bodies, cities and districts, vacancies, public council",
        },
        {
          icon: "program",
          title: "Activities",
          desc: "Selections and tenders, open sessions, FAQ, state programmes, field receptions, anti-corruption",
        },
        {
          icon: "globe",
          title: "Public services",
          desc: "Appeals, unified register, land map for business, interactive portal",
        },
        {
          icon: "decree",
          title: "Documents",
          desc: "Regulations, draft law discussion, council regulations, law on the Council, decisions, presidential acts",
        },
        {
          icon: "chart",
          title: "Digital government",
          desc: "Geodata, open data, reports, infographics, participatory budget",
        },
        {
          icon: "news",
          title: "Press service and contacts",
          desc: "News, video, press conferences; appeals and contacts",
        },
      ],
      closing: "Menus are updated; see gov.uz/karakalpakstan for current information.",
    },
    whyUse: {
      h2: "Why use this official resource",
      intro:
        "gov.uz/karakalpakstan is the official channel of Karakalpakstan’s government on Uzbekistan’s portal.",
      listLabel: "It is especially useful for:",
      items: [
        "residents looking for decisions, programmes and contacts of regional authorities",
        "entrepreneurs working with tenders, land plots and public services",
        "journalists and analysts seeking press materials and open data",
        "organisations preparing appeals and participating in open procedures",
      ],
    },
    otherSites: {
      h2: "Other official websites of government bodies",
    },
    schema: {
      description:
        "Official section of the Council of Ministers of the Republic of Karakalpakstan on gov.uz (karakalpakstan): phone and trust line +99861 222-26-14, email ministrlerkenesi[at]umail.uz, address 230100, Nukus, Garezsizlik street 50, links to city and district sections on gov.uz, social media, route taxis and bus, Monday–Friday 09:00–18:00, lunch 13:00–14:00.",
      orgName: "Council of Ministers of the Republic of Karakalpakstan",
      sameAs: [
        "https://gov.uz/en/karakalpakstan",
        "https://gov.uz/ru/karakalpakstan",
        "https://gov.uz/oz/karakalpakstan",
      ],
    },
    faq: {
      h2: "Frequently asked questions",
      items: [
        {
          q: "Where is the official section of the Council of Ministers?",
          a: "On the government portal: https://gov.uz/en/karakalpakstan (also https://gov.uz/ru/karakalpakstan and https://gov.uz/oz/karakalpakstan). The catalog link matches your interface language.",
        },
        {
          q: "What phone, email, address, and office hours are listed for contact?",
          a: "Phone and trust line +99861 222-26-14, email ministrlerkenesi@umail.uz, address 230100, Nukus, Garezsizlik street 50; cities and districts, transport and hours — in the contacts block on this page (per govinfo.uz); see “All numbers” on gov.uz for the full list.",
        },
        {
          q: "Where can I submit an appeal?",
          a: "Under Contacts / Connection on the karakalpakstan section — appeal forms and contact details.",
        },
        {
          q: "Where are legal acts of the republic?",
          a: "Under Documents on gov.uz/karakalpakstan: regulations, law on the Council of Ministers, decisions and more.",
        },
        {
          q: "How does this differ from a regional khokimiyat?",
          a: "Karakalpakstan is a republic within Uzbekistan; its Council of Ministers has a distinct constitutional status compared to regional khokimiyats of provinces.",
        },
      ],
    },
  },
  uz: {
    pageTitle: "Qoraqalpogʻiston Respublikasi Vazirlar Kengashi",
    intro: [
      "Qoraqalpogʻiston Respublikasi Vazirlar Kengashi — Oʻzbekiston Respublikasi tarkibidagi respublikaning oliy ijroiya davlat hokimiyati organi; Konstitutsiya va qonunlar, Prezident hamda Vazirlar Kengashi qarorlarini amalga oshiradi, hududning ijtimoiy-iqtisodiy rivojlanishini taʼminlaydi.",
      "gov.uz «karakalpakstan» boʻlimi (https://gov.uz/oz/karakalpakstan) da Vazirlar Kengashi haqida maʼlumotlar: tuzilma, rahbariyat, markaziy apparat, tizimdagi tashkilotlar, shahar va tumanlar, muvofiqlashtiruvchi organlar, boʻsh ish oʻrinlari, jamoatchilik kengashi. «Faoliyat»da roʻyxatga olish va tanlovlar, tenderlar, ochiq majlislar, axborot soʻrovlari, savollar-javoblar, bandlik, davlat dasturlari, sayyor qabul, korrupsiyaga qarshi kurash. «Davlat xizmatlari»da murojaatlar, yagona reyestr, tadbirkorlarga yer xaritasi, interaktiv portal. «Hujjatlar»da meʼyoriy hujjatlar, loyiha muhokamasi, reglament, Vazirlar Kengashi toʻgʻrisidagi qonun, hamkorlik, qarorlar. «Raqamli davlat»da geomaʼlumotlar, ochiq maʼlumotlar, «Aqlli shahar», qayta aloqa, infografika, tashabbus byudjeti hisobotlari. Matbuot va bogʻlanish. UzGovInfo (govinfo.uz) va gov.uz boʻlimi boʻyicha: telefon va ishonch liniyasi +99861 222-26-14, elektron pochta ministrlerkenesi@umail.uz, manzil 230100, Nukus, Garezsizlik koʻchasi, 50; shahar va tumanlar havolalari — kontaktlar blokida; toʻliq raqamlar — gov.uz dagi «Barcha raqamlar».",
      "Respublika aholisi, tadbirkorlar va OAV uchun rasmiy manba.",
    ],
    officialSite: {
      h2: "gov.uz dagi rasmiy boʻlim",
      ctaText:
        "Qoraqalpogʻiston Vazirlar Kengashi boʻlimiga oʻtish →",
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
      phones: [{ display: "+99861 222-26-14", href: "tel:+998612222614" }],
      trustPhone: { display: "+99861 222-26-14", href: "tel:+998612222614" },
      email: {
        display: "ministrlerkenesi@umail.uz",
        href: "mailto:ministrlerkenesi@umail.uz",
      },
      territorialOffices: karakalpakTerritoryLinks.map(({ url, uz: label }) => ({ url, label })),
      social: [
        {
          id: "facebook",
          label: "Facebook",
          url: "https://www.facebook.com/profile.php?id=61572924556334",
        },
        { id: "telegram", label: "Telegram", url: "https://t.me/QResMinistrlerKenesi" },
        {
          id: "instagram",
          label: "Instagram",
          url: "https://www.instagram.com/qr.ministrlerkenesi/",
        },
      ],
      address: "230100, Nukus, Garezsizlik koʻchasi, 50",
      transport:
        "Marshrut taksi: №23, №4, №10, №11, №14, №15, №34, №48, №56, №67, №78, №83, №87, №88. Avtobus: №5.",
      hours: "Dushanba–juma, 09:00–18:00; tushlik 13:00–14:00",
      sourceAttribution: {
        dataSource:
          "Kontakt maʼlumotlari UzGovInfo portali (govinfo.uz) boʻyicha Qoraqalpogʻiston Respublikasi Vazirlar Kengashi sahifasidan olingan.",
        reuseNoticeBefore: "Ushbu sayt materiallaridan foydalanganda ",
        reuseLinkText: "saytga",
        reuseNoticeAfter: " havola qoʻyish majburiy.",
        reuseUrl: "https://gov.uz/oz/karakalpakstan",
      },
    },
    whatFind: {
      h2: "Rasmiy resursda nimalar bor",
      intro: "gov.uz/karakalpakstan Vazirlar Kengashi vakolati va ochiq axborotni birlashtiradi.",
      listLabel: "Odatda mavjud:",
      items: [
        {
          icon: "building",
          title: "Vazirlar Kengashi haqida",
          desc: "Tuzilma, rahbariyat, apparat, tuman va shaharlar, boʻsh ish oʻrinlari",
        },
        {
          icon: "program",
          title: "Faoliyat",
          desc: "Tenderlar, ochiq majlislar, davlat dasturlari, sayyor qabul",
        },
        {
          icon: "globe",
          title: "Davlat xizmatlari",
          desc: "Murojaatlar, yagona reyestr, yer xaritasi",
        },
        {
          icon: "decree",
          title: "Hujjatlar",
          desc: "Meʼyoriy hujjatlar, qonun va qarorlar",
        },
        {
          icon: "chart",
          title: "Raqamli davlat",
          desc: "Ochiq maʼlumotlar, infografika, byudjet",
        },
        {
          icon: "news",
          title: "Matbuot va aloqa",
          desc: "Yangiliklar, video, murojaatlar",
        },
      ],
      closing: "Menyu yangilanadi; dolzarb maʼlumotlarni gov.uz/karakalpakstan dan oling.",
    },
    whyUse: {
      h2: "Nima uchun rasmiy boʻlimdan foydalanish kerak",
      intro:
        "gov.uz/karakalpakstan — yagona davlat portali boʻyicha respublika hukumatining rasmiy kanali.",
      listLabel: "Quyidagilar uchun muhim:",
      items: [
        "qarorlar va dasturlarni qidiraydigan fuqarolar uchun",
        "tender va yer masalalari bilan ishlovchi tadbirkorlar uchun",
        "ochiq maʼlumot va matbuotni qidiruvchilar uchun",
      ],
    },
    otherSites: {
      h2: "Boshqa davlat organlarining rasmiy saytlari",
    },
    schema: {
      description:
        "Qoraqalpogʻiston Respublikasi Vazirlar Kengashining gov.uz portali boʻlimi (karakalpakstan): telefon va ishonch liniyasi +99861 222-26-14, elektron pochta ministrlerkenesi[at]umail.uz, manzil 230100, Nukus, Garezsizlik koʻchasi, 50, gov.uz dagi shahar va tumanlar boʻlimlari havolalari, ijtimoiy tarmoqlar, marshrut taksi va avtobus, dushanba–juma 09:00–18:00, tushlik 13:00–14:00.",
      orgName: "Qoraqalpogʻiston Respublikasi Vazirlar Kengashi",
      sameAs: [
        "https://gov.uz/oz/karakalpakstan",
        "https://gov.uz/ru/karakalpakstan",
        "https://gov.uz/en/karakalpakstan",
      ],
    },
    faq: {
      h2: "Tez-tez beriladigan savollar",
      items: [
        {
          q: "Rasmiy boʻlim qayerda?",
          a: "Davlat portali: https://gov.uz/oz/karakalpakstan (shuningdek ru va en variantlari).",
        },
        {
          q: "Aloqa uchun qanday telefon, pochta, manzil va ish vaqti koʻrsatilgan?",
          a: "Telefon va ishonch liniyasi +99861 222-26-14, elektron pochta ministrlerkenesi@umail.uz, manzil 230100, Nukus, Garezsizlik koʻchasi, 50; shahar va tumanlar, transport va vaqt — sahifadagi kontaktlar blokida (govinfo.uz boʻyicha); toʻliq raqamlar — gov.uz dagi «Barcha raqamlar».",
        },
        {
          q: "Murojaat qanday yuboriladi?",
          a: "«Bogʻlanish» boʻlimida — murojaat shakllari va kontaktlar.",
        },
        {
          q: "Qonun-hujjatlar qayerda?",
          a: "«Hujjatlar» boʻlimida: meʼyoriy hujjatlar, Vazirlar Kengashi toʻgʻrisidagi qonun va boshqalar.",
        },
        {
          q: "Bu viloyat hokimiyatidan qanday farq qiladi?",
          a: "Qoraqalpogʻiston — respublika; Vazirlar Kengashi uning hukumati. Viloyat hokimiyatlari — boshqa maʼmuriy-hududiy birliklar uchun.",
        },
      ],
    },
  },
};
