/**
 * Хокимият Наманганской области
 * Официальный раздел: https://gov.uz/ru/namangan
 */
const namanganTerritoryLinks = [
  { url: "https://gov.uz/davlatobod/", ru: "Давлатабадский район", en: "Davlatabad district", uz: "Davlatabod tumani" },
  { url: "https://gov.uz/namangancity/", ru: "город Наманган", en: "Namangan city", uz: "Namangan shahri" },
  { url: "https://gov.uz/kosonsoy/", ru: "Касансайский район", en: "Kosonsoy district", uz: "Kosonsoy tumani" },
  { url: "https://gov.uz/chust/", ru: "Чустский район", en: "Chust district", uz: "Chust tumani" },
  { url: "https://gov.uz/mingbuloq/", ru: "Мингбулакский район", en: "Mingbulok district", uz: "Mingbuloq tumani" },
  { url: "https://gov.uz/chortoq/", ru: "Чартакский район", en: "Chortoq district", uz: "Chortoq tumani" },
  { url: "https://gov.uz/toshbuloq/", ru: "Наманганский район", en: "Namangan district", uz: "Namangan tumani" },
  { url: "https://gov.uz/poptuman/", ru: "Папский район", en: "Pop district", uz: "Pop tumani" },
  { url: "https://gov.uz/uychi/", ru: "Уйчинский район", en: "Uychi district", uz: "Uychi tumani" },
  { url: "https://gov.uz/yangikurgan/", ru: "Янгикурганский район", en: "Yangiqurgan district", uz: "Yangiqoʻrgʻon tumani" },
  { url: "https://gov.uz/norintuman/", ru: "Нарынский район", en: "Norin district", uz: "Norin tumani" },
  { url: "https://gov.uz/uchkurgan/", ru: "Учкурганский район", en: "Uchqurgan district", uz: "Uchqoʻrgʻon tumani" },
  { url: "https://gov.uz/yanginamangan/", ru: "Янгинаманганский район", en: "Yanginamangan district", uz: "Yanginamangan tumani" },
  { url: "https://gov.uz/turakurgan/", ru: "Туракурганский район", en: "Turakurgan district", uz: "Turakurgan tumani" },
];

export default {
  ru: {
    pageTitle: "Хокимият Наманганской области",
    intro: [
      "Хокимият Наманганской области — орган исполнительной власти на территории области; обеспечивает реализацию законодательства, решений Президента и Кабинета Министров и социально-экономическое развитие региона.",
      "На портале gov.uz раздел namangan (https://gov.uz/ru/namangan) содержит сведения о хокимияте: о хокимияте, структуре организации, руководстве, центральном аппарате, подведомственной организации, городах и районах. В «Деятельности» — перепись, борьба с коррупцией, туризм Намангана. В «Государственных услугах» — единый портал интерактивных госуслуг, обращения физических и юридических лиц. В «Документах» — аналитические данные, нормативные документы, утратившие силу документы. В «Цифровом правительстве» — информация об открытых данных на портале и открытые данные (ДП-6247). Пресс-служба: планы общественных мероприятий, календарь событий, новости, заявления и выступления руководства, пресс-конференции и брифинги, пресс-релизы, сведения об информационной службе. Контакты: форум, опрос, контакты. По сведениям UzGovInfo (govinfo.uz) и раздела на gov.uz: телефон +99869 227-00-50, телефон доверия 1056 и +99871 200-07-22, электронная почта info@namangan.uz, адрес 160100, Наманган, ул. Истиклол, 57; ссылки на города и районы и соцсети — в блоке контактов; полный список номеров — в «Все номера» на gov.uz.",
      "Полезен жителям и бизнесу Наманганской области, инвесторам и СМИ при работе с региональными программами и официальными обращениями.",
    ],
    officialSite: {
      h2: "Официальный раздел на gov.uz",
      ctaText:
        "Перейти в раздел хокимията Наманганской области на gov.uz →",
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
      phones: [{ display: "+99869 227-00-50", href: "tel:+998692270050" }],
      trustPhone: {
        display: "1056, +99871 200-07-22",
        href: "tel:+998712000722",
      },
      email: { display: "info@namangan.uz", href: "mailto:info@namangan.uz" },
      territorialOffices: namanganTerritoryLinks.map(({ url, ru: label }) => ({ url, label })),
      social: [
        {
          id: "facebook",
          label: "Facebook",
          url: "https://www.facebook.com/namangan.uz/",
        },
        {
          id: "instagram",
          label: "Instagram",
          url: "https://www.instagram.com/namangan.gov.uz/",
        },
        { id: "telegram", label: "Telegram", url: "https://t.me/namvilhok" },
        { id: "twitter", label: "X (Twitter)", url: "https://twitter.com/twit_namanganuz" },
        {
          id: "youtube",
          label: "YouTube",
          url: "https://www.youtube.com/c/namanganuz",
        },
      ],
      address: "160100, Наманган, ул. Истиклол, 57",
      hours: "Понедельник–пятница",
      sourceAttribution: {
        dataSource:
          "Контактные данные приведены по сведениям портала UzGovInfo (govinfo.uz), страница хокимията Наманганской области.",
        reuseNoticeBefore: "При использовании материалов с данного сайта ссылка на ",
        reuseLinkText: "сайт",
        reuseNoticeAfter: " обязательна.",
        reuseUrl: "https://gov.uz/ru/namangan",
      },
    },
    whatFind: {
      h2: "Что можно найти на официальном ресурсе",
      intro:
        "Раздел gov.uz/namangan объединяет полномочия областного хокимията, госуслуги и открытую информацию.",
      listLabel: "На разделе обычно доступны:",
      items: [
        {
          icon: "building",
          title: "О хокимияте",
          desc: "О хокимияте, структура организации, руководство, центральный аппарат, подведомственная организация, города и районы",
        },
        {
          icon: "program",
          title: "Деятельность",
          desc: "Перепись, борьба с коррупцией, туризм Намангана",
        },
        {
          icon: "globe",
          title: "Государственные услуги",
          desc: "Единый портал интерактивных госуслуг, обращения физических и юридических лиц",
        },
        {
          icon: "decree",
          title: "Документы",
          desc: "Аналитические данные, нормативные документы, утратившие силу документы",
        },
        {
          icon: "chart",
          title: "Цифровое правительство",
          desc: "Информация на портале открытых данных, открытые данные (ДП-6247)",
        },
        {
          icon: "news",
          title: "Пресс-служба и контакты",
          desc: "Планы мероприятий, календарь, новости, пресс-материалы; форум, опрос, контакты",
        },
      ],
      closing:
        "Меню обновляется; актуальные сведения смотрите на gov.uz/namangan.",
    },
    whyUse: {
      h2: "Зачем использовать официальный раздел",
      intro:
        "gov.uz/namangan — канал официальной информации хокимията Наманганской области на едином портале.",
      listLabel: "Раздел особенно полезен:",
      items: [
        "жителям области при поиске новостей, госуслуг и контактов",
        "предпринимателям и организациям при подаче обращений и работе с документами",
        "журналистам при поиске пресс-релизов, календаря и заявлений руководства",
        "всем, кому нужны открытые данные и аналитика по разделу хокимията",
      ],
    },
    otherSites: {
      h2: "Другие официальные сайты государственных органов",
    },
    schema: {
      description:
        "Официальный раздел хокимията Наманганской области на портале gov.uz (namangan): телефон +99869 227-00-50, телефон доверия 1056 и +99871 200-07-22, электронная почта info[at]namangan.uz, адрес 160100, Наманган, ул. Истиклол, 57, ссылки на города и районы на gov.uz, соцсети (Facebook, Instagram, Telegram, X, YouTube), приём по будням.",
      orgName: "Хокимият Наманганской области",
      sameAs: [
        "https://gov.uz/ru/namangan",
        "https://gov.uz/en/namangan",
        "https://gov.uz/oz/namangan",
      ],
    },
    faq: {
      h2: "Часто задаваемые вопросы",
      items: [
        {
          q: "Где официальный раздел хокимията Наманганской области?",
          a: "На портале государства: https://gov.uz/ru/namangan (также https://gov.uz/en/namangan и https://gov.uz/oz/namangan). В каталоге ссылка подставляется под язык интерфейса.",
        },
        {
          q: "Какие телефоны, почта и адрес указаны для связи?",
          a: "Телефон +99869 227-00-50, телефон доверия 1056 и +99871 200-07-22, электронная почта info@namangan.uz, адрес 160100, Наманган, ул. Истиклол, 57; города, районы и соцсети — в блоке контактов (по govinfo.uz); полный перечень номеров — в «Все номера» на gov.uz.",
        },
        {
          q: "Где единый портал интерактивных госуслуг?",
          a: "В разделе «Государственные услуги» — «Единый портал интерактивных государственных услуг».",
        },
        {
          q: "Где открытые данные (ДП-6247)?",
          a: "В разделе «Цифровое правительство» — информация об открытых данных и ДП-6247.",
        },
      ],
    },
  },
  en: {
    pageTitle: "Namangan regional administration",
    intro: [
      "The Namangan regional administration is the executive body of Namangan region; it implements legislation and decisions of the President and Cabinet of Ministers and guides the region’s socio-economic development.",
      "The gov.uz namangan section (https://gov.uz/en/namangan) publishes information about the khokimiyat: about the administration, structure of the organisation, administration, central staff, subordinate organisation, cities and districts. Activities include census, fight against corruption, Namangan tourism. Public services include the unified portal of interactive public services and applications from individuals and legal entities. Documents include analytical data, regulatory documents, expired documents. Digital government includes information published on the open data portal and Open Data (DP-6247). Press service: public event plans, calendar of events, news, statements and speeches of the administration, press conferences and briefings, press releases, about the information service. Contacts: forum, survey, contacts. Per UzGovInfo (govinfo.uz) and the gov.uz section: phone +99869 227-00-50, trust line 1056 and +99871 200-07-22, email info@namangan.uz, address 160100, Namangan, Istiqlol street 57; links to cities and districts and social media are in the contacts block; for the full number list see “All numbers” on gov.uz.",
      "Useful for residents and businesses in Namangan region, investors and media seeking regional programmes and official contacts.",
    ],
    officialSite: {
      h2: "Official section on gov.uz",
      ctaText:
        "Open the Namangan regional administration section on gov.uz →",
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
      phones: [{ display: "+99869 227-00-50", href: "tel:+998692270050" }],
      trustPhone: {
        display: "1056, +99871 200-07-22",
        href: "tel:+998712000722",
      },
      email: { display: "info@namangan.uz", href: "mailto:info@namangan.uz" },
      territorialOffices: namanganTerritoryLinks.map(({ url, en: label }) => ({ url, label })),
      social: [
        {
          id: "facebook",
          label: "Facebook",
          url: "https://www.facebook.com/namangan.uz/",
        },
        {
          id: "instagram",
          label: "Instagram",
          url: "https://www.instagram.com/namangan.gov.uz/",
        },
        { id: "telegram", label: "Telegram", url: "https://t.me/namvilhok" },
        { id: "twitter", label: "X (Twitter)", url: "https://twitter.com/twit_namanganuz" },
        {
          id: "youtube",
          label: "YouTube",
          url: "https://www.youtube.com/c/namanganuz",
        },
      ],
      address: "160100, Namangan, Istiqlol street, 57",
      hours: "Monday–Friday",
      sourceAttribution: {
        dataSource:
          "Contact details are taken from the UzGovInfo portal (govinfo.uz), page of the Namangan regional administration.",
        reuseNoticeBefore: "When using materials from this site, a link to the ",
        reuseLinkText: "site",
        reuseNoticeAfter: " is required.",
        reuseUrl: "https://gov.uz/en/namangan",
      },
    },
    whatFind: {
      h2: "What you can find there",
      intro:
        "gov.uz/namangan brings together the regional administration’s mandate, public services and transparency.",
      listLabel: "You can typically find:",
      items: [
        {
          icon: "building",
          title: "About the administration",
          desc: "About, structure, leadership, central staff, subordinate organisation, cities and districts",
        },
        {
          icon: "program",
          title: "Activities",
          desc: "Census, anti-corruption, Namangan tourism",
        },
        {
          icon: "globe",
          title: "Public services",
          desc: "Unified interactive public services portal, applications from individuals and legal entities",
        },
        {
          icon: "decree",
          title: "Documents",
          desc: "Analytical data, regulatory documents, expired documents",
        },
        {
          icon: "chart",
          title: "Digital government",
          desc: "Open data portal information, Open Data (DP-6247)",
        },
        {
          icon: "news",
          title: "Press service and contacts",
          desc: "Event plans, calendar, news, press materials; forum, survey, contacts",
        },
      ],
      closing: "Menus are updated; see gov.uz/namangan for current information.",
    },
    whyUse: {
      h2: "Why use this official resource",
      intro:
        "gov.uz/namangan is the official channel of the Namangan regional administration on Uzbekistan’s portal.",
      listLabel: "It is especially useful for:",
      items: [
        "residents seeking news, public services and contacts",
        "businesses and organisations filing applications and working with documents",
        "journalists looking for press releases, calendars and leadership statements",
        "anyone needing open data and analytics from the regional administration section",
      ],
    },
    otherSites: {
      h2: "Other official websites of government bodies",
    },
    schema: {
      description:
        "Official section of the Namangan regional administration on gov.uz (namangan): phone +99869 227-00-50, trust line 1056 and +99871 200-07-22, email info[at]namangan.uz, address 160100, Namangan, Istiqlol street 57, links to cities and districts on gov.uz, social media (Facebook, Instagram, Telegram, X, YouTube), weekday reception.",
      orgName: "Namangan regional administration",
      sameAs: [
        "https://gov.uz/en/namangan",
        "https://gov.uz/ru/namangan",
        "https://gov.uz/oz/namangan",
      ],
    },
    faq: {
      h2: "Frequently asked questions",
      items: [
        {
          q: "Where is the official section of the Namangan regional administration?",
          a: "On the government portal: https://gov.uz/en/namangan (also https://gov.uz/ru/namangan and https://gov.uz/oz/namangan). The catalog link matches your interface language.",
        },
        {
          q: "What phones, email and address are listed for contact?",
          a: "Phone +99869 227-00-50, trust line 1056 and +99871 200-07-22, email info@namangan.uz, address 160100, Namangan, Istiqlol street 57; cities, districts and social media — in the contacts block on this page (per govinfo.uz); see “All numbers” on gov.uz for the full list.",
        },
        {
          q: "Where is the unified interactive public services portal?",
          a: "Under Public services — unified portal of interactive public services.",
        },
        {
          q: "Where is Open Data (DP-6247)?",
          a: "Under Digital government — open data portal information and DP-6247.",
        },
      ],
    },
  },
  uz: {
    pageTitle: "Namangan viloyati hokimligi",
    intro: [
      "Namangan viloyati hokimligi — viloyat hududidagi ijroiya hokimiyati organi; qonunchilik, Prezident va Vazirlar Kengashi qarorlarini amalga oshiradi va viloyat ijtimoiy-iqtisodiy rivojlanishini taʼminlaydi.",
      "gov.uz «namangan» boʻlimi (https://gov.uz/oz/namangan) da hokimiyat haqida: tuzilma, rahbariyat, markaziy apparat, tizimdagi tashkilot, shahar va tumanlar. «Faoliyat»da roʻyxatdan oʻtish, korrupsiyaga qarshi kurash, Namangan turizmi. «Davlat xizmatlari»da yagona interaktiv davlat xizmatlari portali, jismoniy va yuridik shaxslarning murojaatlari. «Hujjatlar»da tahliliy maʼlumotlar, meʼyoriy hujjatlar, kuchini yoʻqotgan hujjatlar. «Raqamli davlat»da ochiq maʼlumotlar portali va ochiq maʼlumotlar (DP-6247). Matbuot: ommaviy tadbirlar rejasi, tadbirlar taqvimi, yangiliklar, rahbariyat bayonotlari, matbuot anjumanlari, press-relizlar, axborot xizmati haqida. Aloqa: forum, soʻrovnoma, kontaktlar. UzGovInfo (govinfo.uz) va gov.uz boʻlimi boʻyicha: telefon +99869 227-00-50, ishonch liniyasi 1056 va +99871 200-07-22, elektron pochta info@namangan.uz, manzil 160100, Namangan, Istiqlol koʻchasi, 57; shahar va tumanlar hamda ijtimoiy tarmoqlar — kontaktlar blokida; toʻliq raqamlar — gov.uz dagi «Barcha raqamlar».",
      "Namangan viloyati fuqarolari va tadbirkorlari uchun rasmiy manba.",
    ],
    officialSite: {
      h2: "gov.uz dagi rasmiy boʻlim",
      ctaText: "Namangan viloyati hokimligi boʻlimiga oʻtish →",
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
      phones: [{ display: "+99869 227-00-50", href: "tel:+998692270050" }],
      trustPhone: {
        display: "1056, +99871 200-07-22",
        href: "tel:+998712000722",
      },
      email: { display: "info@namangan.uz", href: "mailto:info@namangan.uz" },
      territorialOffices: namanganTerritoryLinks.map(({ url, uz: label }) => ({ url, label })),
      social: [
        {
          id: "facebook",
          label: "Facebook",
          url: "https://www.facebook.com/namangan.uz/",
        },
        {
          id: "instagram",
          label: "Instagram",
          url: "https://www.instagram.com/namangan.gov.uz/",
        },
        { id: "telegram", label: "Telegram", url: "https://t.me/namvilhok" },
        { id: "twitter", label: "X (Twitter)", url: "https://twitter.com/twit_namanganuz" },
        {
          id: "youtube",
          label: "YouTube",
          url: "https://www.youtube.com/c/namanganuz",
        },
      ],
      address: "160100, Namangan, Istiqlol koʻchasi, 57",
      hours: "Dushanba–juma",
      sourceAttribution: {
        dataSource:
          "Kontakt maʼlumotlari UzGovInfo portali (govinfo.uz), Namangan viloyati hokimligi sahifasidan olingan.",
        reuseNoticeBefore: "Ushbu sayt materiallaridan foydalanganda ",
        reuseLinkText: "saytga",
        reuseNoticeAfter: " havola qoʻyish majburiy.",
        reuseUrl: "https://gov.uz/oz/namangan",
      },
    },
    whatFind: {
      h2: "Rasmiy resursda nimalar bor",
      intro:
        "gov.uz/namangan viloyat hokimiyati vakolati va ochiq axborotni birlashtiradi.",
      listLabel: "Odatda mavjud:",
      items: [
        {
          icon: "building",
          title: "Hokimiyat haqida",
          desc: "Tuzilma, rahbariyat, markaziy apparat, boʻysunuvchi tashkilot, shahar va tumanlar",
        },
        {
          icon: "program",
          title: "Faoliyat",
          desc: "Roʻyxatdan oʻtish, korrupsiyaga qarshi kurash, Namangan turizmi",
        },
        {
          icon: "globe",
          title: "Davlat xizmatlari",
          desc: "Yagona interaktiv portal, jismoniy va yuridik shaxslar murojaatlari",
        },
        {
          icon: "decree",
          title: "Hujjatlar",
          desc: "Tahliliy maʼlumotlar, meʼyoriy hujjatlar, kuchini yoʻqotganlar",
        },
        {
          icon: "chart",
          title: "Raqamli davlat",
          desc: "Ochiq maʼlumotlar portali, DP-6247",
        },
        {
          icon: "news",
          title: "Matbuot va aloqa",
          desc: "Tadbirlar rejasi, taqvim, yangiliklar; forum, soʻrovnoma",
        },
      ],
      closing: "Menyu yangilanadi; gov.uz/namangan dan tekshiring.",
    },
    whyUse: {
      h2: "Nima uchun rasmiy boʻlimdan foydalanish kerak",
      intro:
        "gov.uz/namangan — Namangan viloyati hokimiyatining yagona davlat portali boʻyicha rasmiy kanali.",
      listLabel: "Quyidagilar uchun muhim:",
      items: [
        "viloyat yangiliklari va davlat xizmatlari bilan ishlovchilar uchun",
        "murojaat va hujjatlar bilan bogʻliq subyektlar uchun",
        "matbuot va ochiq maʼlumotlar uchun",
      ],
    },
    otherSites: {
      h2: "Boshqa davlat organlarining rasmiy saytlari",
    },
    schema: {
      description:
        "Namangan viloyati hokimligining gov.uz portali boʻlimi (namangan): telefon +99869 227-00-50, ishonch liniyasi 1056 va +99871 200-07-22, elektron pochta info[at]namangan.uz, manzil 160100, Namangan, Istiqlol koʻchasi, 57, gov.uz dagi shahar va tumanlar havolalari, ijtimoiy tarmoqlar (Facebook, Instagram, Telegram, X, YouTube), ish kunlari.",
      orgName: "Namangan viloyati hokimligi",
      sameAs: [
        "https://gov.uz/oz/namangan",
        "https://gov.uz/ru/namangan",
        "https://gov.uz/en/namangan",
      ],
    },
    faq: {
      h2: "Tez-tez beriladigan savollar",
      items: [
        {
          q: "Rasmiy boʻlim qayerda?",
          a: "https://gov.uz/oz/namangan (ru va en ham mavjud).",
        },
        {
          q: "Aloqa uchun qanday telefon, pochta va manzil koʻrsatilgan?",
          a: "Telefon +99869 227-00-50, ishonch liniyasi 1056 va +99871 200-07-22, elektron pochta info@namangan.uz, manzil 160100, Namangan, Istiqlol koʻchasi, 57; shahar va tumanlar hamda ijtimoiy tarmoqlar — sahifadagi kontaktlar blokida (govinfo.uz boʻyicha); toʻliq raqamlar — gov.uz dagi «Barcha raqamlar».",
        },
        {
          q: "Yagona interaktiv portal qayerda?",
          a: "«Davlat xizmatlari» — yagona interaktiv davlat xizmatlari portali.",
        },
        {
          q: "Ochiq maʼlumotlar (DP-6247) qayerda?",
          a: "«Raqamli davlat» — ochiq maʼlumotlar va DP-6247.",
        },
      ],
    },
  },
};
