/**
 * Хокимият Андижанской области
 * Официальный раздел: https://gov.uz/ru/andijan
 */
const andijanTerritoryLinks = [
  { url: "https://gov.uz/kurgontepa/", ru: "Кургантепинский район", en: "Kurgan tepa district", uz: "Kurgʻtepa tumani" },
  { url: "https://gov.uz/ulugnor/", ru: "Улугнорский район", en: "Ulugnor district", uz: "Ulugʻnor tumani" },
  { url: "https://gov.uz/buloqboshi/", ru: "Булакбашинский район", en: "Bulokbashi district", uz: "Buloqboshi tumani" },
  { url: "https://gov.uz/buston/", ru: "Бостанский район", en: "Boston district", uz: "Buston tumani" },
  { url: "https://gov.uz/shahrixon/", ru: "Шахриханский район", en: "Shahrixon district", uz: "Shahrixon tumani" },
  { url: "https://gov.uz/oltinkul/", ru: "Алтынкульский район", en: "Oltinkul district", uz: "Oltinkoʻl tumani" },
  { url: "https://gov.uz/xonobod/", ru: "город Ханабад", en: "Khanabad city", uz: "Xonobod shahri" },
  { url: "https://gov.uz/baliqchi/", ru: "Балыкчинский район", en: "Baliqchi district", uz: "Baliqchi tumani" },
  { url: "https://gov.uz/marhamat/", ru: "Мархаматский район", en: "Marhamat district", uz: "Marhamat tumani" },
  { url: "https://gov.uz/jalaquduq/", ru: "Джалакудукский район", en: "Jalaquduq district", uz: "Jalaquduq tumani" },
  { url: "https://gov.uz/paxtaobod/", ru: "Пахтаабадский район", en: "Pakhtaabad district", uz: "Paxtaobod tumani" },
  { url: "https://gov.uz/andijonshahar/", ru: "город Андижан", en: "Andijan city", uz: "Andijon shahri" },
  { url: "https://gov.uz/asaka/", ru: "Асакинский район", en: "Asaka district", uz: "Asaka tumani" },
  { url: "https://gov.uz/andijontuman/", ru: "Андижанский район", en: "Andijan district", uz: "Andijon tumani" },
  { url: "https://gov.uz/izboskan/", ru: "Избасканский район", en: "Izboskan district", uz: "Izboskan tumani" },
  { url: "https://gov.uz/xojaobod/", ru: "Ходжаабадский район", en: "Khojaabad district", uz: "Xoʻjaobod tumani" },
];

export default {
  ru: {
    pageTitle: "Хокимият Андижанской области",
    intro: [
      "Хокимият Андижанской области — орган исполнительной власти на территории области; обеспечивает реализацию законодательства, решений Президента и Кабинета Министров, социально-экономическое развитие региона, координацию деятельности подведомственных органов и взаимодействие с населением и бизнесом.",
      "На портале gov.uz раздел andijan (https://gov.uz/ru/andijan) содержит сведения о хокимияте: о хокимияте, структуре организации, руководстве, центральном аппарате, организациях системы, региональных управлениях, Кенгше народных депутатов Андижанской области, вакансиях. В «Деятельности» — регистрация и отборы, государственные программы, противодействие коррупции, электронное правительство, международное сотрудничество, молодёжная и гендерная политика, тендеры. В «Государственных услугах» — услуги из единого реестра, интерактивные услуги хокимията, архив реестра, заявки на приватизацию объектов жилищного фонда, обращения граждан и организаций. В «Документах» — законы и решения по компетенции, обсуждение проектов НПА. В «Цифровом правительстве» — обратная связь, часто задаваемые вопросы, открытые данные, PF-6247, раздел «Открытость». Пресс-служба: новости, заявления руководства, календарь событий, Конституция, соцсети. Контакты: опросы, контакты. По сведениям UzGovInfo (govinfo.uz) и раздела на gov.uz: телефон +99874 223-30-31, телефон доверия +99874 225-80-00, электронная почта qabulhona@andijan.uz, адрес 170131, Андижан, ул. Абдурауф Фитрата, 239; ссылки на города и районы — в блоке контактов; полный список номеров — в «Все номера» на gov.uz.",
      "Полезен жителям и организациям Андижанской области при работе с региональными программами, госуслугами и официальными обращениями.",
    ],
    officialSite: {
      h2: "Официальный раздел на gov.uz",
      ctaText:
        "Перейти в раздел хокимията Андижанской области на gov.uz →",
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
      phones: [{ display: "+99874 223-30-31", href: "tel:+998742233031" }],
      trustPhone: { display: "+99874 225-80-00", href: "tel:+998742258000" },
      email: { display: "qabulhona@andijan.uz", href: "mailto:qabulhona@andijan.uz" },
      territorialOffices: andijanTerritoryLinks.map(({ url, ru: label }) => ({ url, label })),
      social: [
        {
          id: "facebook",
          label: "Facebook",
          url: "https://www.facebook.com/share/17wz2NmfjY/?mibextid=wwXIfr",
        },
        { id: "telegram", label: "Telegram", url: "https://t.me/andpress" },
        {
          id: "instagram",
          label: "Instagram",
          url: "https://www.instagram.com/andijonpress/",
        },
        {
          id: "youtube",
          label: "YouTube",
          url: "https://www.youtube.com/channel/UCU1FXhhr-kNZuqF5NldJnMw",
        },
        { id: "twitter", label: "X (Twitter)", url: "https://x.com/andpressa1" },
      ],
      address: "170131, Андижан, ул. Абдурауф Фитрата, 239",
      transport: "Автобусы: 1, 7, 8, 24",
      hours: "Понедельник–пятница, 09:00–18:00; обед 13:00–14:00",
      sourceAttribution: {
        dataSource:
          "Контактные данные приведены по сведениям портала UzGovInfo (govinfo.uz), страница хокимията Андижанской области.",
        reuseNoticeBefore: "При использовании материалов с данного сайта ссылка на ",
        reuseLinkText: "сайт",
        reuseNoticeAfter: " обязательна.",
        reuseUrl: "https://gov.uz/ru/andijan",
      },
    },
    whatFind: {
      h2: "Что можно найти на официальном ресурсе",
      intro:
        "Раздел gov.uz/andijan объединяет полномочия областного хокимията, госуслуги и открытую информацию.",
      listLabel: "На разделе обычно доступны:",
      items: [
        {
          icon: "building",
          title: "О хокимияте",
          desc: "Сведения о хокимияте, структура, руководство, центральный аппарат, органы системы, региональные управления, Кенгаш депутатов, вакансии",
        },
        {
          icon: "program",
          title: "Деятельность",
          desc: "Госпрограммы, антикоррупция, электронное правительство, международное сотрудничество, молодёжная и гендерная политика, тендеры",
        },
        {
          icon: "globe",
          title: "Государственные услуги",
          desc: "Единый реестр, интерактивные услуги хокимията, приватизация жилищного фонда, обращения",
        },
        {
          icon: "decree",
          title: "Документы",
          desc: "Законы и решения по компетенции, обсуждение проектов НПА",
        },
        {
          icon: "chart",
          title: "Цифровое правительство",
          desc: "Обратная связь, FAQ, открытые данные, PF-6247, открытость",
        },
        {
          icon: "news",
          title: "Пресс-служба и контакты",
          desc: "Новости, заявления, календарь; опросы и контакты",
        },
      ],
      closing:
        "Меню обновляется; актуальные сведения смотрите на gov.uz/andijan.",
    },
    whyUse: {
      h2: "Зачем использовать официальный раздел",
      intro:
        "gov.uz/andijan — канал официальной информации хокимията Андижанской области на едином портале.",
      listLabel: "Раздел особенно полезен:",
      items: [
        "жителям области при поиске решений и контактов органов власти",
        "предпринимателям при работе с тендерами и госуслугами",
        "журналистам при поиске пресс-материалов и открытых данных",
        "организациям при подготовке обращений",
      ],
    },
    otherSites: {
      h2: "Другие официальные сайты государственных органов",
    },
    schema: {
      description:
        "Официальный раздел хокимията Андижанской области на портале gov.uz (andijan): телефон +99874 223-30-31, телефон доверия +99874 225-80-00, электронная почта qabulhona[at]andijan.uz, адрес 170131, Андижан, ул. Абдурауф Фитрата, 239, ссылки на разделы городов и районов на gov.uz, социальные сети, автобусы 1, 7, 8, 24, понедельник–пятница 09:00–18:00, обед 13:00–14:00.",
      orgName: "Хокимият Андижанской области",
      sameAs: [
        "https://gov.uz/ru/andijan",
        "https://gov.uz/en/andijan",
        "https://gov.uz/oz/andijan",
      ],
    },
    faq: {
      h2: "Часто задаваемые вопросы",
      items: [
        {
          q: "Где официальный раздел хокимията Андижанской области?",
          a: "На портале государства: https://gov.uz/ru/andijan (также https://gov.uz/en/andijan и https://gov.uz/oz/andijan). В каталоге ссылка подставляется под язык интерфейса.",
        },
        {
          q: "Какие телефоны, почта, адрес и режим работы указаны для связи?",
          a: "Телефон +99874 223-30-31, телефон доверия +99874 225-80-00, электронная почта qabulhona@andijan.uz, адрес 170131, Андижан, ул. Абдурауф Фитрата, 239; города и районы, транспорт и часы — в блоке контактов на странице (по govinfo.uz); полный перечень номеров — в «Все номера» на gov.uz.",
        },
        {
          q: "Где подать обращение?",
          a: "В блоке «Связь» / «Контакты» на разделе andijan — в т.ч. обращения физических и юридических лиц.",
        },
        {
          q: "Где интерактивные услуги хокимията?",
          a: "В разделе «Государственные услуги» — «Интерактивные услуги хокимията Андижанской области» и единый реестр.",
        },
      ],
    },
  },
  en: {
    pageTitle: "Andijan regional administration",
    intro: [
      "The Andijan regional administration is the executive organ of the Andijan region; it implements legislation and decisions of the President and Cabinet of Ministers, guides the region’s socio-economic development and coordinates subordinate bodies and engagement with citizens and businesses.",
      "The gov.uz andijan section (https://gov.uz/en/andijan) publishes information about the khokimiyat: about the administration, structure, leadership, central office, subordinate organisations, regional departments, Andijan regional Council of People’s Deputies, vacancies. Activities include registration and selections, state programmes, anti-corruption, e-government, international cooperation, youth and gender policy, tenders. Public services include the unified register, the khokimiyat’s interactive services, register archive, applications for privatisation of housing fund assets, appeals from individuals and legal entities. Documents cover laws and decisions within competence, discussion of draft NPA. Digital government includes feedback, FAQ, open data, PF-6247, openness. Press service: news, leadership statements, calendar, Constitution, social media. Contacts: surveys, contacts. Per UzGovInfo (govinfo.uz) and the gov.uz section: phone +99874 223-30-31, trust line +99874 225-80-00, email qabulhona@andijan.uz, address 170131, Andijan, Abdurauf Fitrat street 239; links to cities and districts are in the contacts block; for the full number list see “All numbers” on gov.uz.",
      "Useful for residents and organisations in Andijan region seeking regional programmes, public services and official contacts.",
    ],
    officialSite: {
      h2: "Official section on gov.uz",
      ctaText: "Open the Andijan regional administration section on gov.uz →",
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
      phones: [{ display: "+99874 223-30-31", href: "tel:+998742233031" }],
      trustPhone: { display: "+99874 225-80-00", href: "tel:+998742258000" },
      email: { display: "qabulhona@andijan.uz", href: "mailto:qabulhona@andijan.uz" },
      territorialOffices: andijanTerritoryLinks.map(({ url, en: label }) => ({ url, label })),
      social: [
        {
          id: "facebook",
          label: "Facebook",
          url: "https://www.facebook.com/share/17wz2NmfjY/?mibextid=wwXIfr",
        },
        { id: "telegram", label: "Telegram", url: "https://t.me/andpress" },
        {
          id: "instagram",
          label: "Instagram",
          url: "https://www.instagram.com/andijonpress/",
        },
        {
          id: "youtube",
          label: "YouTube",
          url: "https://www.youtube.com/channel/UCU1FXhhr-kNZuqF5NldJnMw",
        },
        { id: "twitter", label: "X (Twitter)", url: "https://x.com/andpressa1" },
      ],
      address: "170131, Andijan, Abdurauf Fitrat street, 239",
      transport: "Buses: 1, 7, 8, 24",
      hours: "Monday–Friday, 09:00–18:00; lunch break 13:00–14:00",
      sourceAttribution: {
        dataSource:
          "Contact details are taken from the UzGovInfo portal (govinfo.uz), page of the Andijan regional administration.",
        reuseNoticeBefore: "When using materials from this site, a link to the ",
        reuseLinkText: "site",
        reuseNoticeAfter: " is required.",
        reuseUrl: "https://gov.uz/en/andijan",
      },
    },
    whatFind: {
      h2: "What you can find there",
      intro:
        "gov.uz/andijan brings together the regional administration’s mandate, public services and transparency.",
      listLabel: "You can typically find:",
      items: [
        {
          icon: "building",
          title: "About the administration",
          desc: "About the khokimiyat, structure, leadership, central office, regional departments, regional council, vacancies",
        },
        {
          icon: "program",
          title: "Activities",
          desc: "State programmes, anti-corruption, e-government, international cooperation, youth and gender policy, tenders",
        },
        {
          icon: "globe",
          title: "Public services",
          desc: "Unified register, interactive services, housing privatisation applications, appeals",
        },
        {
          icon: "decree",
          title: "Documents",
          desc: "Laws and decisions, discussion of draft regulations",
        },
        {
          icon: "chart",
          title: "Digital government",
          desc: "Feedback, FAQ, open data, PF-6247, openness",
        },
        {
          icon: "news",
          title: "Press service and contacts",
          desc: "News, statements, calendar; surveys and contacts",
        },
      ],
      closing: "Menus are updated; see gov.uz/andijan for current information.",
    },
    whyUse: {
      h2: "Why use this official resource",
      intro:
        "gov.uz/andijan is the official channel of the Andijan regional administration on Uzbekistan’s portal.",
      listLabel: "It is especially useful for:",
      items: [
        "residents looking for decisions and contacts of regional authorities",
        "entrepreneurs working with tenders and public services",
        "journalists seeking press materials and open data",
        "organisations preparing appeals",
      ],
    },
    otherSites: {
      h2: "Other official websites of government bodies",
    },
    schema: {
      description:
        "Official section of the Andijan regional administration on gov.uz (andijan): phone +99874 223-30-31, trust line +99874 225-80-00, email qabulhona[at]andijan.uz, address 170131, Andijan, Abdurauf Fitrat street 239, links to city and district sections on gov.uz, social media, buses 1, 7, 8, 24, Monday–Friday 09:00–18:00, lunch 13:00–14:00.",
      orgName: "Andijan regional administration",
      sameAs: [
        "https://gov.uz/en/andijan",
        "https://gov.uz/ru/andijan",
        "https://gov.uz/oz/andijan",
      ],
    },
    faq: {
      h2: "Frequently asked questions",
      items: [
        {
          q: "Where is the official section of the Andijan regional administration?",
          a: "On the government portal: https://gov.uz/en/andijan (also https://gov.uz/ru/andijan and https://gov.uz/oz/andijan). The catalog link matches your interface language.",
        },
        {
          q: "What phones, email, address, and office hours are listed for contact?",
          a: "Phone +99874 223-30-31, trust line +99874 225-80-00, email qabulhona@andijan.uz, address 170131, Andijan, Abdurauf Fitrat street 239; cities and districts, transport and hours — in the contacts block on this page (per govinfo.uz); see “All numbers” on gov.uz for the full list.",
        },
        {
          q: "Where can I submit an appeal?",
          a: "Under Contacts / Connection on the andijan section — appeals from individuals and legal entities.",
        },
        {
          q: "Where are interactive khokimiyat services?",
          a: "Under Public services — interactive services of the Andijan regional administration and the unified register.",
        },
      ],
    },
  },
  uz: {
    pageTitle: "Andijon viloyati hokimligi",
    intro: [
      "Andijon viloyati hokimligi — viloyat hududidagi ijroiya hokimiyati organi; qonunchilik, Prezident va Vazirlar Kengashi qarorlarini amalga oshiradi, hududning ijtimoiy-iqtisodiy rivojlanishini taʼminlaydi, boʻysunuvchi organlar va boshqa subyektlar bilan hamkorlik qiladi.",
      "gov.uz «andijan» boʻlimi (https://gov.uz/oz/andijan) da hokimiyat haqida: tuzilma, rahbariyat, markaziy apparat, hududiy boshqarmalar, Andijon viloyati xalq deputatlari Kengashi, boʻsh ish oʻrinlari. «Faoliyat»da davlat dasturlari, korrupsiyaga qarshi kurash, elektron hukumat, xalqaro hamkorlik, yoshlar va gender siyosati, tenderlar. «Davlat xizmatlari»da yagona reyestr, hokimiyatning interaktiv xizmatlari, arxiv, uy-joy fondini xususiylashtirish arizalari, murojaatlar. «Hujjatlar»da vakolatdagi qonun va qarorlar, loyiha muhokamasi. «Raqamli davlat»da qayta aloqa, savollar-javoblar, ochiq maʼlumotlar, PF-6247, OCHIQLIK. Matbuot va bogʻlanish. UzGovInfo (govinfo.uz) va gov.uz boʻlimi boʻyicha: telefon +99874 223-30-31, ishonch liniyasi +99874 225-80-00, elektron pochta qabulhona@andijan.uz, manzil 170131, Andijon, Abdurauf Fitrat koʻchasi, 239; shahar va tumanlar havolalari — kontaktlar blokida; toʻliq raqamlar — gov.uz dagi «Barcha raqamlar».",
      "Viloyat aholisi va tashkilotlari uchun rasmiy manba.",
    ],
    officialSite: {
      h2: "gov.uz dagi rasmiy boʻlim",
      ctaText: "Andijon viloyati hokimligi boʻlimiga oʻtish →",
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
      phones: [{ display: "+99874 223-30-31", href: "tel:+998742233031" }],
      trustPhone: { display: "+99874 225-80-00", href: "tel:+998742258000" },
      email: { display: "qabulhona@andijan.uz", href: "mailto:qabulhona@andijan.uz" },
      territorialOffices: andijanTerritoryLinks.map(({ url, uz: label }) => ({ url, label })),
      social: [
        {
          id: "facebook",
          label: "Facebook",
          url: "https://www.facebook.com/share/17wz2NmfjY/?mibextid=wwXIfr",
        },
        { id: "telegram", label: "Telegram", url: "https://t.me/andpress" },
        {
          id: "instagram",
          label: "Instagram",
          url: "https://www.instagram.com/andijonpress/",
        },
        {
          id: "youtube",
          label: "YouTube",
          url: "https://www.youtube.com/channel/UCU1FXhhr-kNZuqF5NldJnMw",
        },
        { id: "twitter", label: "X (Twitter)", url: "https://x.com/andpressa1" },
      ],
      address: "170131, Andijon, Abdurauf Fitrat koʻchasi, 239",
      transport: "Avtobuslar: 1, 7, 8, 24",
      hours: "Dushanba–juma, 09:00–18:00; tushlik 13:00–14:00",
      sourceAttribution: {
        dataSource:
          "Kontakt maʼlumotlari UzGovInfo portali (govinfo.uz) boʻyicha Andijon viloyati hokimligi sahifasidan olingan.",
        reuseNoticeBefore: "Ushbu sayt materiallaridan foydalanganda ",
        reuseLinkText: "saytga",
        reuseNoticeAfter: " havola qoʻyish majburiy.",
        reuseUrl: "https://gov.uz/oz/andijan",
      },
    },
    whatFind: {
      h2: "Rasmiy resursda nimalar bor",
      intro: "gov.uz/andijan viloyat hokimiyati vakolati va ochiq axborotni birlashtiradi.",
      listLabel: "Odatda mavjud:",
      items: [
        {
          icon: "building",
          title: "Hokimiyat haqida",
          desc: "Tuzilma, rahbariyat, apparat, hududiy boshqarmalar, xalq deputatlari Kengashi",
        },
        {
          icon: "program",
          title: "Faoliyat",
          desc: "Davlat dasturlari, tenderlar, yoshlar va gender siyosati",
        },
        {
          icon: "globe",
          title: "Davlat xizmatlari",
          desc: "Yagona reyestr, interaktiv xizmatlar, murojaatlar",
        },
        {
          icon: "decree",
          title: "Hujjatlar",
          desc: "Qonun va qarorlar, loyiha muhokamasi",
        },
        {
          icon: "chart",
          title: "Raqamli davlat",
          desc: "Qayta aloqa, ochiq maʼlumotlar, PF-6247",
        },
        {
          icon: "news",
          title: "Matbuot va aloqa",
          desc: "Yangiliklar, soʻrovnomalar, kontaktlar",
        },
      ],
      closing: "Menyu yangilanadi; gov.uz/andijan dan tekshiring.",
    },
    whyUse: {
      h2: "Nima uchun rasmiy boʻlimdan foydalanish kerak",
      intro:
        "gov.uz/andijan — Andijon viloyati hokimiyatining yagona davlat portali boʻyicha rasmiy kanali.",
      listLabel: "Quyidagilar uchun muhim:",
      items: [
        "viloyat organlari va xizmatlari haqida maʼlumot qidiraydiganlar uchun",
        "tender va davlat xizmatlari bilan ishlovchilar uchun",
        "matbuot va ochiq maʼlumotlar uchun",
      ],
    },
    otherSites: {
      h2: "Boshqa davlat organlarining rasmiy saytlari",
    },
    schema: {
      description:
        "Andijon viloyati hokimligining gov.uz portali boʻlimi (andijan): telefon +99874 223-30-31, ishonch liniyasi +99874 225-80-00, elektron pochta qabulhona[at]andijan.uz, manzil 170131, Andijon, Abdurauf Fitrat koʻchasi, 239, gov.uz dagi shahar va tumanlar havolalari, ijtimoiy tarmoqlar, avtobuslar 1, 7, 8, 24, dushanba–juma 09:00–18:00, tushlik 13:00–14:00.",
      orgName: "Andijon viloyati hokimligi",
      sameAs: [
        "https://gov.uz/oz/andijan",
        "https://gov.uz/ru/andijan",
        "https://gov.uz/en/andijan",
      ],
    },
    faq: {
      h2: "Tez-tez beriladigan savollar",
      items: [
        {
          q: "Rasmiy boʻlim qayerda?",
          a: "https://gov.uz/oz/andijan (ru va en variantlari ham mavjud).",
        },
        {
          q: "Aloqa uchun qanday telefonlar, pochta, manzil va ish vaqti koʻrsatilgan?",
          a: "Telefon +99874 223-30-31, ishonch liniyasi +99874 225-80-00, elektron pochta qabulhona@andijan.uz, manzil 170131, Andijon, Abdurauf Fitrat koʻchasi, 239; shahar va tumanlar, transport va vaqt — sahifadagi kontaktlar blokida (govinfo.uz boʻyicha); toʻliq raqamlar — gov.uz dagi «Barcha raqamlar».",
        },
        {
          q: "Murojaat qayerda?",
          a: "«Bogʻlanish» boʻlimida — jismoniy va yuridik shaxslar murojaatlari.",
        },
        {
          q: "Interaktiv xizmatlar qayerda?",
          a: "«Davlat xizmatlari» — Andijon viloyati hokimligining interaktiv xizmatlari va yagona reyestr.",
        },
      ],
    },
  },
};
