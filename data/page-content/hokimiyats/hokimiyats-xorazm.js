/**
 * Хокимият Хорезмской области
 * Официальный раздел: https://gov.uz/ru/xorazm
 */
const xorazmTerritoryLinks = [
  { url: "https://gov.uz/bogot", ru: "Багатский район", en: "Bogot district", uz: "Bogʻot tumani" },
  { url: "https://gov.uz/tuproqqala", ru: "Тупроккалинский район", en: "Tuproqqala district", uz: "Tuproqqala tumani" },
  { url: "https://gov.uz/hazorasphokimiyat/", ru: "Хазараспский район", en: "Hazorasp district", uz: "Hazorasp tumani" },
  { url: "https://gov.uz/gurlan/", ru: "Гурленский район", en: "Gurlan district", uz: "Gurlan tumani" },
  { url: "https://gov.uz/xonqa/", ru: "Ханкинский район", en: "Xonqa district", uz: "Xonqa tumani" },
  { url: "https://gov.uz/urganch", ru: "Ургенчский район", en: "Urgench district", uz: "Urganch tumani" },
  { url: "https://gov.uz/xivashahar", ru: "Город Хива", en: "Khiva city", uz: "Xiva shahri" },
  { url: "https://gov.uz/oz/shovot", ru: "Шаватский район", en: "Shovot district", uz: "Shovot tumani" },
  { url: "https://gov.uz/oz/urganchshahar", ru: "Город Ургенч", en: "Urgench city", uz: "Urganch shahri" },
  { url: "https://gov.uz/oz/xiva", ru: "Хивинский район", en: "Khiva district", uz: "Xiva tumani" },
  { url: "https://gov.uz/yangibazar/", ru: "Янгибазарский район", en: "Yangibazar district", uz: "Yangibozor tumani" },
  { url: "https://gov.uz/yangiarik/", ru: "Янгиарыкский район", en: "Yangiariq district", uz: "Yangiariq tumani" },
  { url: "https://gov.uz/qushkupir", ru: "Кошкупырский район", en: "Kushkupir district", uz: "Qoʻshkoʻpir tumani" },
];

export default {
  ru: {
    pageTitle: "Хокимият Хорезмской области",
    intro: [
      "Хокимият Хорезмской области — орган исполнительной власти на территории области; обеспечивает реализацию законодательства, решений Президента и Кабинета Министров и социально-экономическое развитие региона.",
      "На портале gov.uz раздел xorazm (https://gov.uz/ru/xorazm) содержит сведения о хокимияте: о хокимияте, структуре организации, руководстве, центральном аппарате, территориальных управлениях. В «Деятельности» — перепись населения. Предусмотрены разделы государственных услуг и документов. В «Цифровом правительстве» — обратная связь. Пресс-центр: новости, заявления и выступления руководства, календарь событий, заседания, пресс-конференции, пресс-релизы. Контакты: опросы, контакты. По сведениям UzGovInfo (govinfo.uz): телефон +99862 223-00-87, телефон доверия +99862 223-00-54, электронная почта hokim@xorazm.uz, адрес 220100, Ургенч, ул. Ал-Хорезмий, 29; города и районы области, соцсети и режим приёма — в блоке контактов; полный список номеров — в «Все номера» на gov.uz.",
      "Полезен жителям и бизнесу Хорезмской области, инвесторам и СМИ при работе с региональными программами и официальными обращениями.",
    ],
    officialSite: {
      h2: "Официальный раздел на gov.uz",
      ctaText:
        "Перейти в раздел хокимията Хорезмской области на gov.uz →",
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
      phones: [{ display: "+99862 223-00-87", href: "tel:+998622230087" }],
      trustPhone: {
        display: "+99862 223-00-54",
        href: "tel:+998622230054",
      },
      email: { display: "hokim@xorazm.uz", href: "mailto:hokim@xorazm.uz" },
      territorialOffices: xorazmTerritoryLinks.map(({ url, ru: label }) => ({ url, label })),
      social: [
        { id: "telegram", label: "Telegram", url: "https://t.me/xorazm_uz_rasmiy" },
        {
          id: "instagram",
          label: "Instagram",
          url: "https://www.instagram.com/xorazmviloyatihokimligi",
        },
        {
          id: "facebook",
          label: "Facebook",
          url: "https://www.facebook.com/xorazmviloyatihokimligi",
        },
      ],
      address: "220100, Ургенч, ул. Ал-Хорезмий, 29",
      hours: "Понедельник–пятница",
      sourceAttribution: {
        dataSource:
          "Контактные данные приведены по сведениям портала UzGovInfo (govinfo.uz), страница хокимията Хорезмской области.",
        reuseNoticeBefore: "При использовании материалов с данного сайта ссылка на ",
        reuseLinkText: "сайт",
        reuseNoticeAfter: " обязательна.",
        reuseUrl: "https://gov.uz/ru/xorazm",
      },
    },
    whatFind: {
      h2: "Что можно найти на официальном ресурсе",
      intro:
        "Раздел gov.uz/xorazm объединяет полномочия областного хокимията, госуслуги и открытую информацию.",
      listLabel: "На разделе обычно доступны:",
      items: [
        {
          icon: "building",
          title: "О хокимияте",
          desc: "О хокимияте, структура организации, руководство, центральный аппарат, территориальные управления",
        },
        {
          icon: "program",
          title: "Деятельность",
          desc: "Перепись населения и иные направления по мере наполнения раздела",
        },
        {
          icon: "globe",
          title: "Государственные услуги",
          desc: "Раздел государственных услуг областного хокимията на портале",
        },
        {
          icon: "decree",
          title: "Документы",
          desc: "Нормативные и иные документы по компетенции хокимията",
        },
        {
          icon: "chart",
          title: "Цифровое правительство",
          desc: "Обратная связь и цифровые сервисы по разделу",
        },
        {
          icon: "news",
          title: "Пресс-центр и контакты",
          desc: "Новости, календарь, пресс-материалы; опросы и контакты",
        },
      ],
      closing:
        "Меню обновляется; актуальные сведения смотрите на gov.uz/xorazm.",
    },
    whyUse: {
      h2: "Зачем использовать официальный раздел",
      intro:
        "gov.uz/xorazm — канал официальной информации хокимията Хорезмской области на едином портале.",
      listLabel: "Раздел особенно полезен:",
      items: [
        "жителям области при поиске новостей, госуслуг и контактов",
        "предпринимателям при работе с документами и обращениями в хокимият",
        "журналистам при поиске пресс-релизов, календаря и заявлений руководства",
        "всем, кому нужны сведения о переписи населения в регионе",
      ],
    },
    otherSites: {
      h2: "Другие официальные сайты государственных органов",
    },
    schema: {
      description:
        "Официальный раздел хокимията Хорезмской области на портале gov.uz (xorazm): телефон +99862 223-00-87, телефон доверия +99862 223-00-54, электронная почта hokim[at]xorazm.uz, адрес 220100, Ургенч, ул. Ал-Хорезмий, 29, приём по будням, ссылки на города и районы на gov.uz, соцсети (Telegram, Instagram, Facebook).",
      orgName: "Хокимият Хорезмской области",
      sameAs: [
        "https://gov.uz/ru/xorazm",
        "https://gov.uz/en/xorazm",
        "https://gov.uz/oz/xorazm",
      ],
    },
    faq: {
      h2: "Часто задаваемые вопросы",
      items: [
        {
          q: "Где официальный раздел хокимията Хорезмской области?",
          a: "На портале государства: https://gov.uz/ru/xorazm (также https://gov.uz/en/xorazm и https://gov.uz/oz/xorazm). В каталоге ссылка подставляется под язык интерфейса.",
        },
        {
          q: "Какие телефоны, почта и адрес указаны для связи?",
          a: "Телефон +99862 223-00-87, телефон доверия +99862 223-00-54, электронная почта hokim@xorazm.uz, адрес 220100, Ургенч, ул. Ал-Хорезмий, 29; города, районы и соцсети — в блоке контактов (по govinfo.uz); полный перечень номеров — в «Все номера» на gov.uz.",
        },
        {
          q: "Где обратная связь?",
          a: "В разделе «Цифровое правительство» — «Обратная связь».",
        },
        {
          q: "Где пресс-релизы и календарь?",
          a: "В разделе «Пресс-центр» — новости, заявления руководства, календарь событий, заседания, пресс-конференции, пресс-релизы.",
        },
      ],
    },
  },
  en: {
    pageTitle: "Khorezm regional administration",
    intro: [
      "The Khorezm regional administration is the executive body of Khorezm region; it implements legislation and decisions of the President and Cabinet of Ministers and guides the region’s socio-economic development.",
      "The gov.uz xorazm section (https://gov.uz/en/xorazm) publishes information about the khokimiyat: about the administration, structure of the organisation, leadership, central staff, territorial departments. Activities include the population census. The portal includes sections for public services and documents. Digital government includes feedback. Press centre: news, statements and speeches of the administration, calendar of events, meetings, press conferences, press releases. Contacts: surveys, contacts. Per UzGovInfo (govinfo.uz): phone +99862 223-00-87, trust line +99862 223-00-54, email hokim@xorazm.uz, address 220100, Urgench, Al-Khorezmiy street 29; cities and districts of the region, social media and office hours are in the contacts block; for the full number list see “All numbers” on gov.uz.",
      "Useful for residents and businesses in Khorezm region, investors and media seeking regional programmes and official contacts.",
    ],
    officialSite: {
      h2: "Official section on gov.uz",
      ctaText:
        "Open the Khorezm regional administration section on gov.uz →",
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
      phones: [{ display: "+99862 223-00-87", href: "tel:+998622230087" }],
      trustPhone: {
        display: "+99862 223-00-54",
        href: "tel:+998622230054",
      },
      email: { display: "hokim@xorazm.uz", href: "mailto:hokim@xorazm.uz" },
      territorialOffices: xorazmTerritoryLinks.map(({ url, en: label }) => ({ url, label })),
      social: [
        { id: "telegram", label: "Telegram", url: "https://t.me/xorazm_uz_rasmiy" },
        {
          id: "instagram",
          label: "Instagram",
          url: "https://www.instagram.com/xorazmviloyatihokimligi",
        },
        {
          id: "facebook",
          label: "Facebook",
          url: "https://www.facebook.com/xorazmviloyatihokimligi",
        },
      ],
      address: "220100, Urgench, Al-Khorezmiy street, 29",
      hours: "Monday–Friday",
      sourceAttribution: {
        dataSource:
          "Contact details are taken from the UzGovInfo portal (govinfo.uz), page of the Khorezm regional administration.",
        reuseNoticeBefore: "When using materials from this site, a link to the ",
        reuseLinkText: "site",
        reuseNoticeAfter: " is required.",
        reuseUrl: "https://gov.uz/en/xorazm",
      },
    },
    whatFind: {
      h2: "What you can find there",
      intro:
        "gov.uz/xorazm brings together the regional administration’s mandate, public services and transparency.",
      listLabel: "You can typically find:",
      items: [
        {
          icon: "building",
          title: "About the administration",
          desc: "About, structure, leadership, central staff, territorial departments",
        },
        {
          icon: "program",
          title: "Activities",
          desc: "Population census and other topics as the section is updated",
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
          desc: "Feedback and digital services in this section",
        },
        {
          icon: "news",
          title: "Press centre and contacts",
          desc: "News, calendar, press materials; surveys and contacts",
        },
      ],
      closing: "Menus are updated; see gov.uz/xorazm for current information.",
    },
    whyUse: {
      h2: "Why use this official resource",
      intro:
        "gov.uz/xorazm is the official channel of the Khorezm regional administration on Uzbekistan’s portal.",
      listLabel: "It is especially useful for:",
      items: [
        "residents seeking news, public services and contacts",
        "businesses working with documents and appeals to the khokimiyat",
        "journalists looking for press releases, calendars and leadership statements",
        "anyone interested in census information in the region",
      ],
    },
    otherSites: {
      h2: "Other official websites of government bodies",
    },
    schema: {
      description:
        "Official section of the Khorezm regional administration on gov.uz (xorazm): phone +99862 223-00-87, trust line +99862 223-00-54, email hokim[at]xorazm.uz, address 220100, Urgench, Al-Khorezmiy street 29, weekday reception, links to cities and districts on gov.uz, social media (Telegram, Instagram, Facebook).",
      orgName: "Khorezm regional administration",
      sameAs: [
        "https://gov.uz/en/xorazm",
        "https://gov.uz/ru/xorazm",
        "https://gov.uz/oz/xorazm",
      ],
    },
    faq: {
      h2: "Frequently asked questions",
      items: [
        {
          q: "Where is the official section of the Khorezm regional administration?",
          a: "On the government portal: https://gov.uz/en/xorazm (also https://gov.uz/ru/xorazm and https://gov.uz/oz/xorazm). The catalog link matches your interface language.",
        },
        {
          q: "What phones, email and address are listed for contact?",
          a: "Phone +99862 223-00-87, trust line +99862 223-00-54, email hokim@xorazm.uz, address 220100, Urgench, Al-Khorezmiy street 29; cities, districts and social media — in the contacts block on this page (per govinfo.uz); see “All numbers” on gov.uz for the full list.",
        },
        {
          q: "Where is feedback?",
          a: "Under Digital government — Feedback.",
        },
        {
          q: "Where are press releases and the calendar?",
          a: "Under Press centre — news, leadership statements, calendar of events, meetings, press conferences, press releases.",
        },
      ],
    },
  },
  uz: {
    pageTitle: "Xorazm viloyati hokimligi",
    intro: [
      "Xorazm viloyati hokimligi — viloyat hududidagi ijroiya hokimiyati organi; qonunchilik, Prezident va Vazirlar Kengashi qarorlarini amalga oshiradi va viloyat ijtimoiy-iqtisodiy rivojlanishini taʼminlaydi.",
      "gov.uz «xorazm» boʻlimi (https://gov.uz/oz/xorazm) da hokimiyat haqida: tuzilma, rahbariyat, markaziy apparat, hududiy boshqarmalar. «Faoliyat»da roʻyxatdan oʻtish. «Davlat xizmatlari» va «Hujjatlar» boʻlimlari mavjud. «Raqamli davlat»da qayta aloqa. Matbuot: yangiliklar, rahbariyat bayonotlari, tadbirlar taqvimi, majlislar, matbuot anjumanlari, press-relizlar. Aloqa: soʻrovnoma, kontaktlar. UzGovInfo (govinfo.uz) boʻyicha: telefon +99862 223-00-87, ishonch telefoni +99862 223-00-54, elektron pochta hokim@xorazm.uz, manzil 220100, Urganch, Al-Xorazmiy koʻchasi, 29; viloyat shaharlari va tumanlari, ijtimoiy tarmoqlar va ish vaqti — kontaktlar blokida; toʻliq raqamlar — gov.uz dagi «Barcha raqamlar».",
      "Xorazm viloyati fuqarolari va tadbirkorlari uchun rasmiy manba.",
    ],
    officialSite: {
      h2: "gov.uz dagi rasmiy boʻlim",
      ctaText: "Xorazm viloyati hokimligi boʻlimiga oʻtish →",
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
      phones: [{ display: "+99862 223-00-87", href: "tel:+998622230087" }],
      trustPhone: {
        display: "+99862 223-00-54",
        href: "tel:+998622230054",
      },
      email: { display: "hokim@xorazm.uz", href: "mailto:hokim@xorazm.uz" },
      territorialOffices: xorazmTerritoryLinks.map(({ url, uz: label }) => ({ url, label })),
      social: [
        { id: "telegram", label: "Telegram", url: "https://t.me/xorazm_uz_rasmiy" },
        {
          id: "instagram",
          label: "Instagram",
          url: "https://www.instagram.com/xorazmviloyatihokimligi",
        },
        {
          id: "facebook",
          label: "Facebook",
          url: "https://www.facebook.com/xorazmviloyatihokimligi",
        },
      ],
      address: "220100, Urganch, Al-Xorazmiy koʻchasi, 29",
      hours: "Dushanba–juma",
      sourceAttribution: {
        dataSource:
          "Kontakt maʼlumotlari UzGovInfo portali (govinfo.uz), Xorazm viloyati hokimligi sahifasidan olingan.",
        reuseNoticeBefore: "Ushbu sayt materiallaridan foydalanganda ",
        reuseLinkText: "saytga",
        reuseNoticeAfter: " havola qoʻyish majburiy.",
        reuseUrl: "https://gov.uz/oz/xorazm",
      },
    },
    whatFind: {
      h2: "Rasmiy resursda nimalar bor",
      intro:
        "gov.uz/xorazm viloyat hokimiyati vakolati va ochiq axborotni birlashtiradi.",
      listLabel: "Odatda mavjud:",
      items: [
        {
          icon: "building",
          title: "Hokimiyat haqida",
          desc: "Tuzilma, rahbariyat, markaziy apparat, hududiy boshqarmalar",
        },
        {
          icon: "program",
          title: "Faoliyat",
          desc: "Roʻyxatdan oʻtish va boshqa yoʻnalishlar",
        },
        {
          icon: "globe",
          title: "Davlat xizmatlari",
          desc: "Viloyat hokimligi boʻlimi boʻyicha davlat xizmatlari",
        },
        {
          icon: "decree",
          title: "Hujjatlar",
          desc: "Hokimiyat vakolatidagi hujjatlar",
        },
        {
          icon: "chart",
          title: "Raqamli davlat",
          desc: "Qayta aloqa",
        },
        {
          icon: "news",
          title: "Matbuot va aloqa",
          desc: "Yangiliklar, taqvim; soʻrovnoma va kontaktlar",
        },
      ],
      closing: "Menyu yangilanadi; gov.uz/xorazm dan tekshiring.",
    },
    whyUse: {
      h2: "Nima uchun rasmiy boʻlimdan foydalanish kerak",
      intro:
        "gov.uz/xorazm — Xorazm viloyati hokimiyatining yagona davlat portali boʻyicha rasmiy kanali.",
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
        "Xorazm viloyati hokimligining gov.uz portali boʻlimi (xorazm): telefon +99862 223-00-87, ishonch telefoni +99862 223-00-54, elektron pochta hokim[at]xorazm.uz, manzil 220100, Urganch, Al-Xorazmiy koʻchasi, 29, ish kunlari, gov.uz dagi shahar va tumanlar havolalari, ijtimoiy tarmoqlar (Telegram, Instagram, Facebook).",
      orgName: "Xorazm viloyati hokimligi",
      sameAs: [
        "https://gov.uz/oz/xorazm",
        "https://gov.uz/ru/xorazm",
        "https://gov.uz/en/xorazm",
      ],
    },
    faq: {
      h2: "Tez-tez beriladigan savollar",
      items: [
        {
          q: "Rasmiy boʻlim qayerda?",
          a: "https://gov.uz/oz/xorazm (ru va en ham mavjud).",
        },
        {
          q: "Aloqa uchun qanday telefon, pochta va manzil koʻrsatilgan?",
          a: "Telefon +99862 223-00-87, ishonch telefoni +99862 223-00-54, elektron pochta hokim@xorazm.uz, manzil 220100, Urganch, Al-Xorazmiy koʻchasi, 29; shahar va tumanlar hamda ijtimoiy tarmoqlar — sahifadagi kontaktlar blokida (govinfo.uz); toʻliq raqamlar — gov.uz dagi «Barcha raqamlar».",
        },
        {
          q: "Qayta aloqa qayerda?",
          a: "«Raqamli davlat» — qayta aloqa.",
        },
        {
          q: "Matbuot va taqvim qayerda?",
          a: "«Matbuot markazi» — yangiliklar, bayonotlar, taqvim, press-relizlar.",
        },
      ],
    },
  },
};
