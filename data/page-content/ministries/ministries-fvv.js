/**
 * Министерство по чрезвычайным ситуациям Республики Узбекистан
 * Официальный раздел на портале gov.uz: /{locale}/fvv
 */

const fvvTerritorialOffices = [
  {
    url: "https://gov.uz/fvv-toshkent",
    ru: "город Ташкент",
    en: "Tashkent city",
    uz: "Toshkent shahri",
  },
  {
    url: "https://gov.uz/fvv-sirdaryo",
    ru: "Сырдарьинская область",
    en: "Syrdarya region",
    uz: "Sirdaryo viloyati",
  },
  {
    url: "https://gov.uz/fvv-fargona",
    ru: "Ферганская область",
    en: "Fergana region",
    uz: "Fargʻona viloyati",
  },
  {
    url: "https://gov.uz/fvv-xorazm",
    ru: "Хорезмская область",
    en: "Khorezm region",
    uz: "Xorazm viloyati",
  },
  {
    url: "https://gov.uz/fvv-qr",
    ru: "Республика Каракалпакстан",
    en: "Republic of Karakalpakstan",
    uz: "Qoraqalpogʻiston Respublikasi",
  },
  {
    url: "https://gov.uz/fvv-andijon",
    ru: "Андижанская область",
    en: "Andijan region",
    uz: "Andijon viloyati",
  },
  {
    url: "https://gov.uz/fvv-buxoro",
    ru: "Бухарская область",
    en: "Bukhara region",
    uz: "Buxoro viloyati",
  },
  {
    url: "https://gov.uz/fvv-jizzax",
    ru: "Джиззакская область",
    en: "Jizzakh region",
    uz: "Jizzax viloyati",
  },
  {
    url: "https://gov.uz/fvv-qashqadaryo",
    ru: "Кашкадарьинская область",
    en: "Kashkadarya region",
    uz: "Qashqadaryo viloyati",
  },
  {
    url: "https://gov.uz/fvv-navoiy",
    ru: "Навоийская область",
    en: "Navoi region",
    uz: "Navoiy viloyati",
  },
  {
    url: "https://gov.uz/fvv-namangan",
    ru: "Наманганская область",
    en: "Namangan region",
    uz: "Namangan viloyati",
  },
  {
    url: "https://gov.uz/fvv-samarqand",
    ru: "Самаркандская область",
    en: "Samarkand region",
    uz: "Samarqand viloyati",
  },
  {
    url: "https://gov.uz/fvv-surxondaryo",
    ru: "Сурхандарьинская область",
    en: "Surkhandarya region",
    uz: "Surxondaryo viloyati",
  },
  {
    url: "https://gov.uz/fvv-fmi",
    ru: "Институт гражданской защиты при Академии МЧС",
    en: "Institute of Civil Protection at the MES Academy",
    uz: "FVV Akademiyasi qoshidagi fuqarolik muhofazasi instituti",
  },
  {
    url: "https://gov.uz/fvv-akademiya",
    ru: "Академия Министерства по чрезвычайным ситуациям",
    en: "Academy of the Ministry of Emergency Situations",
    uz: "Favqulodda vaziyatlar vazirligi Akademiyasi",
  },
  {
    url: "https://gov.uz/fvv-qamchiq",
    ru: "Специальное спасательное управление «Камчик»",
    en: 'Special rescue department "Kamchik"',
    uz: "«Kamchiq» maxsus qutqaruv boshqarmasi",
  },
  {
    url: "https://gov.uz/fvv-thl",
    ru: "Шахрисабзский военно-академический лицей «Темурбеклар мактаби»",
    en: 'Shakhrisabz military academic lyceum "Temurbeklar maktabi"',
    uz: "Shahrisabz harbiy akademik litseyi «Temurbeklar maktabi»",
  },
];

export default {
  ru: {
    pageTitle: "Министерство по чрезвычайным ситуациям Республики Узбекистан",
    intro: [
      "Министерство по чрезвычайным ситуациям обеспечивает гражданскую защиту, предупреждение и ликвидацию чрезвычайных ситуаций, пожарную безопасность и координацию гуманитарной помощи в пределах установленной компетенции.",
      "Официальный раздел на gov.uz (fvv) объединяет сведения о министерстве и подведомственных органах, направлениях деятельности (электронное правительство, международное сотрудничество, антикоррупционные меры, молодёжная и гендерная политика, тендеры, гуманитарная помощь), реестр высокорисковых производственных факторов для субъектов предпринимательства, нормативные документы и электронную базу материалов по пожарной безопасности, а также блок «Цифровое правительство» с открытыми данными, статистикой ЧС, отчётностью и обращениями граждан; пресс-службу и контакты. Указана горячая линия 1101.",
      "Полезен гражданам и бизнесу при мониторинге рисков и госуслуг, органам власти и СМИ — для официальных предупреждений и открытых данных.",
    ],
    officialSite: {
      h2: "Официальный сайт",
      ctaText:
        "Перейти в официальный раздел Министерства по ЧС на gov.uz →",
    },
    whatFind: {
      h2: "Что можно найти на официальном сайте",
      intro:
        "В разделе fvv на gov.uz — полномочия ведомства в сфере ГО и ЧС, реестры и цифровая открытость.",
      listLabel: "На сайте обычно доступны:",
      items: [
        {
          icon: "building",
          title: "О министерстве",
          desc: "История, руководство, структура, центральный аппарат, региональные и подведомственные органы, «E-nomzod», вакансии, программы, общественный совет, учебные заведения",
        },
        {
          icon: "program",
          title: "Сфера деятельности",
          desc: "Электронное правительство, международное сотрудничество, антикоррупция, молодёжь и гендер, вопросы и ответы, тендеры, дисциплина исполнения, экологически активные сотрудники, гуманитарная помощь",
        },
        {
          icon: "globe",
          title: "Государственные услуги",
          desc: "Реестр факторов высокого риска для жизни и здоровья на объектах предпринимательской деятельности",
        },
        {
          icon: "decree",
          title: "Документы",
          desc: "Законы, акты Президента и Кабинета Министров, Конституция, проекты НПА, внутренние акты, база документов по пожарной безопасности",
        },
        {
          icon: "chart",
          title: "Цифровое правительство",
          desc: "Открытые данные, обратная связь, перечень услуг, статистика ЧС, отчёты, закупки, обращения, бюджетная открытость",
        },
        {
          icon: "news",
          title: "Пресс-служба и контакты",
          desc: "Новости, пресс-релизы, мероприятия, издания, ссылка на подготовку населения к ЧС; контакты, опросы, каналы по коррупции и конфликту интересов",
        },
      ],
      closing:
        "Состав разделов обновляется; актуальные сведения смотрите на gov.uz в разделе fvv.",
    },
    whyUse: {
      h2: "Зачем использовать официальный сайт",
      intro:
        "Раздел на gov.uz — официальный канал МЧС для оповещений, норм и открытых данных в сфере безопасности и ЧС.",
      listLabel: "Сайт особенно полезен:",
      items: [
        "гражданам при изучении правил безопасности и обращениях через портал",
        "предпринимателям при работе с реестром высоких рисков и требованиями",
        "органам власти и партнёрам при координации готовности к ЧС",
        "журналистам при аккредитации и работе с пресс-службой",
      ],
    },
    otherSites: {
      h2: "Другие официальные сайты государственных органов",
    },
    contacts: {
      h2: "Контакты",
      labels: {
        phone: "Телефон",
        trustPhone: "Телефон доверия",
        email: "Эл. адрес",
        territorialOffices: "Территориальные управления",
        social: "Социальные сети",
        address: "Адрес",
        transport: "Транспорт",
        hours: "Рабочее время",
      },
      phones: [
        { display: "1050", href: "tel:1050" },
        { display: "101", href: "tel:101" },
      ],
      trustPhone: { display: "1101", href: "tel:1101" },
      email: {
        display: "info@fvv.uz",
        href: "mailto:info@fvv.uz",
      },
      territorialOffices: fvvTerritorialOffices.map(({ url, ru: label }) => ({
        label,
        url,
      })),
      social: [
        {
          id: "twitter",
          label: "Twitter / X",
          url: "https://twitter.com/fvv_uzb",
        },
        {
          id: "instagram",
          label: "Instagram",
          url: "https://www.instagram.com/fvvmchs/",
        },
        {
          id: "telegram",
          label: "Telegram",
          url: "https://t.me/MCHSUzbek",
        },
        {
          id: "facebook",
          label: "Facebook",
          url: "https://www.facebook.com/FVV.Uzbekiston",
        },
        {
          id: "youtube",
          label: "YouTube",
          url: "https://www.youtube.com/channel/UCqrWjSMaXQPkBiFV0b6N0-g",
        },
      ],
      address: "100084, Ташкент, ул. Кичик Халка йули, 4",
      transport:
        "Автобусы: 85, 88, 95, 93, 72, 115, 19, 67, 24, 51, 60, 142, 10\nМаршрутный транспорт: 100, 62, 12, 61, 20",
      hours:
        "Понедельник — суббота: 9:00 — 18:00\nОбеденный перерыв: 13:00 — 14:00\nВыходные дни: воскресенье\nДежурные службы и спасательные подразделения работают круглосуточно",
      sourceAttribution: {
        dataSource:
          "Контактные данные приведены по сведениям официального портала Республики Узбекистан (gov.uz), раздел Министерства по чрезвычайным ситуациям (fvv).",
        reuseNoticeBefore: "При использовании материалов с данного сайта ссылка на ",
        reuseLinkText: "сайт",
        reuseNoticeAfter: " обязательна.",
        reuseUrl: "https://gov.uz/ru/fvv/",
      },
    },
    schema: {
      description:
        "Официальный раздел Министерства по чрезвычайным ситуациям Республики Узбекистан на портале gov.uz (fvv): телефоны 1050 и 101, телефон доверия 1101, электронная почта info[at]fvv.uz, адрес 100084, Ташкент, ул. Кичик Халка йули, 4, территориальные управления на gov.uz, транспорт и рабочее время, ссылки на социальные сети.",
      orgName: "Министерство по чрезвычайным ситуациям Республики Узбекистан",
      sameAs: "https://gov.uz/ru/fvv",
    },
    faq: {
      h2: "Часто задаваемые вопросы",
      items: [
        {
          q: "Где официальный раздел МЧС на gov.uz?",
          a: "Для русской версии: https://gov.uz/ru/fvv; также /en/fvv и /oz/fvv. Ссылка есть на этой странице каталога.",
        },
        {
          q: "Какая горячая линия указана на странице?",
          a: "На разделе указан номер 1101; полный перечень — «Все номера». Уточняйте на актуальном портале.",
        },
        {
          q: "Где реестр высокорисковых факторов для бизнеса?",
          a: "В блоке «Государственные услуги» — реестр факторов, создающих повышенную опасность для жизни и здоровья; состав уточняйте на сайте.",
        },
        {
          q: "Где статистика чрезвычайных ситуаций и открытые данные?",
          a: "В разделе «Цифровое правительство»: наборы открытых данных, статистика ЧС, отчёты о деятельности ведомства и др.",
        },
        {
          q: "Как связаться с ведомством?",
          a: "Используйте раздел «Контакт» на gov.uz: контакты, опросы, сведения о каналах сообщений о коррупции и конфликте интересов.",
        },
      ],
    },
  },
  en: {
    pageTitle: "Ministry of Emergency Situations of the Republic of Uzbekistan",
    intro: [
      "The Ministry of Emergency Situations ensures civil protection, prevention and response to emergencies, fire safety and coordination of humanitarian assistance within its mandate.",
      "The official section on gov.uz (fvv) brings together information on the ministry and its bodies, key activities (e-government, international cooperation, anti-corruption, youth and gender policy, tenders, humanitarian aid), a register of high-risk factors for businesses, legal acts and a fire-safety document database, and a digital-government area covering open data, emergency statistics, reporting and citizen appeals, plus press contacts. Hotline 1101 is shown.",
      "Useful for citizens and businesses monitoring risks and services, government partners and the media seeking official alerts and open data.",
    ],
    officialSite: {
      h2: "Official website",
      ctaText: "Go to the Ministry of Emergency Situations on gov.uz →",
    },
    whatFind: {
      h2: "What you can find on the official website",
      intro:
        "The fvv section on gov.uz covers the ministry’s civil-protection and emergency mandate, registers and digital transparency.",
      listLabel: "You can typically find:",
      items: [
        {
          icon: "building",
          title: "About the ministry",
          desc: "History, leadership, structure, central office, regional and subordinate bodies, E-nomzod recruitment, vacancies, programmes, public council, training institutions",
        },
        {
          icon: "program",
          title: "Field of activity",
          desc: "E-government, international cooperation, anti-corruption, youth and gender, FAQ, tenders, performance discipline, eco-active staff, humanitarian aid",
        },
        {
          icon: "globe",
          title: "Public services",
          desc: "Register of high-risk factors to life and health at business facilities",
        },
        {
          icon: "decree",
          title: "Documents",
          desc: "Laws, presidential and cabinet acts, constitution page, draft regulations, internal acts, fire-safety document database",
        },
        {
          icon: "chart",
          title: "Digital government",
          desc: "Open data, feedback, service list, emergency statistics, ministry reports, procurement, appeals, budget transparency",
        },
        {
          icon: "news",
          title: "Press service and contacts",
          desc: "News, press releases, events, publications, link to public preparedness; contacts, surveys, anti-corruption and conflict-of-interest channels",
        },
      ],
      closing:
        "Sections may change; check gov.uz/fvv for the latest.",
    },
    whyUse: {
      h2: "Why use the official website",
      intro:
        "The gov.uz section is the ministry’s official channel for alerts, regulations and open data on safety and emergencies.",
      listLabel: "The site is especially useful for:",
      items: [
        "citizens learning safety rules and using portal appeals",
        "businesses working with the high-risk register and compliance",
        "government partners coordinating preparedness",
        "journalists engaging the press office",
      ],
    },
    otherSites: {
      h2: "Other official websites of government bodies",
    },
    contacts: {
      h2: "Contacts",
      labels: {
        phone: "Phone",
        trustPhone: "Trust line",
        email: "E-mail",
        territorialOffices: "Regional offices",
        social: "Social media",
        address: "Address",
        transport: "Transport",
        hours: "Office hours",
      },
      phones: [
        { display: "1050", href: "tel:1050" },
        { display: "101", href: "tel:101" },
      ],
      trustPhone: { display: "1101", href: "tel:1101" },
      email: {
        display: "info@fvv.uz",
        href: "mailto:info@fvv.uz",
      },
      territorialOffices: fvvTerritorialOffices.map(({ url, en: label }) => ({
        label,
        url,
      })),
      social: [
        {
          id: "twitter",
          label: "Twitter / X",
          url: "https://twitter.com/fvv_uzb",
        },
        {
          id: "instagram",
          label: "Instagram",
          url: "https://www.instagram.com/fvvmchs/",
        },
        {
          id: "telegram",
          label: "Telegram",
          url: "https://t.me/MCHSUzbek",
        },
        {
          id: "facebook",
          label: "Facebook",
          url: "https://www.facebook.com/FVV.Uzbekiston",
        },
        {
          id: "youtube",
          label: "YouTube",
          url: "https://www.youtube.com/channel/UCqrWjSMaXQPkBiFV0b6N0-g",
        },
      ],
      address: "100084, Tashkent, Kichik Khalka yuli street, 4",
      transport:
        "Buses: 85, 88, 95, 93, 72, 115, 19, 67, 24, 51, 60, 142, 10\nShuttle buses: 100, 62, 12, 61, 20",
      hours:
        "Monday–Saturday: 9:00–18:00\nLunch break: 13:00–14:00\nClosed: Sunday\nDuty and rescue units operate 24/7",
      sourceAttribution: {
        dataSource:
          "Contact details are based on the official portal of the Republic of Uzbekistan (gov.uz), Ministry of Emergency Situations section (fvv).",
        reuseNoticeBefore: "When reusing materials from this site, a link to the ",
        reuseLinkText: "website",
        reuseNoticeAfter: " is required.",
        reuseUrl: "https://gov.uz/en/fvv/",
      },
    },
    schema: {
      description:
        "Official section of the Ministry of Emergency Situations of the Republic of Uzbekistan on gov.uz (fvv): phones 1050 and 101, trust line 1101, email info[at]fvv.uz, address 100084, Tashkent, Kichik Khalka yuli street, 4, regional offices on gov.uz, transport and office hours, and social media links.",
      orgName: "Ministry of Emergency Situations of the Republic of Uzbekistan",
      sameAs: "https://gov.uz/en/fvv",
    },
    faq: {
      h2: "Frequently asked questions",
      items: [
        {
          q: "Where is the ministry section on gov.uz?",
          a: "English: https://gov.uz/en/fvv; Russian and Uzbek use /ru/fvv and /oz/fvv. This catalog page links to it too.",
        },
        {
          q: "What hotline is shown?",
          a: "The section lists 1101; use “All numbers” for the full list. Confirm on the live portal.",
        },
        {
          q: "Where is the business high-risk register?",
          a: "Under public services — register of factors posing high risk to life and health; check the site for the current catalogue.",
        },
        {
          q: "Where are emergency statistics and open data?",
          a: "Under digital government: open datasets, emergency statistics, ministry activity reports and more.",
        },
        {
          q: "How do I contact the ministry?",
          a: "Use Contact on gov.uz: contacts, surveys, and information on reporting corruption and conflicts of interest.",
        },
      ],
    },
  },
  uz: {
    pageTitle: "Oʻzbekiston Respublikasi Favqulodda vaziyatlar vazirligi",
    intro: [
      "Oʻzbekiston Respublikasi Favqulodda vaziyatlar vazirligi fuqarolik muhofazasini, FVK oldini olish va bartaraf etishni, yongʻin xavfsizligini va gumanitar yordamni muvofiqlashtirishni belgilangan vakolat doirasida taʼminlaydi.",
      "gov.uz dagi rasmiy boʻlim (fvv) vazirlik va tuzilmalar, asosiy faoliyat yoʻnalishlari (elektron hukumat, xalqaro hamkorlik, korrupsiyaga qarshi kurash, yoshlar va gender siyosati, tenderlar, gumanitar yordam), tadbirkorlikda yuqori xavfli omillar reestri, meʼyoriy hujjatlar va yongʻin xavfsizligi elektron bazasi, shuningdek «Raqamli hukumat» — ochiq maʼlumotlar, FVK statistikasi, hisobotlar va fuqarolar murojaatlari; matbuot va aloqa haqida birlashtiradi. Ishonch telefoni 1101.",
      "Fuqarolar, tadbirkorlar va davlat hamkorlari, shuningdek OAV uchun rasmiy ogohlantirishlar va ochiq maʼlumotlar manbasi sifatida foydali.",
    ],
    officialSite: {
      h2: "Rasmiy sayt",
      ctaText: "Favqulodda vaziyatlar vazirligining gov.uz dagi rasmiy boʻlimiga oʻtish →",
    },
    whatFind: {
      h2: "Rasmiy saytda nimalarni topish mumkin",
      intro:
        "gov.uz dagi fvv boʻlimida FVK va fuqarolik muhofazasi vakolati, reestrlar va raqamli ochiqlik aks etadi.",
      listLabel: "Saytda odatda quyidagilar mavjud:",
      items: [
        {
          icon: "building",
          title: "Vazirlik haqida",
          desc: "Tarix, rahbariyat, tuzilma, markaziy apparat, hududiy va tizim tashkilotlari, «E-nomzod», vakansiyalar, dasturlar, jamoat kengashi, oʻquv muassasalari",
        },
        {
          icon: "program",
          title: "Faoliyat",
          desc: "Elektron hukumat, xalqaro hamkorlik, korrupsiyaga qarshi kurash, yoshlar va gender, savol-javob, tenderlar, ijro intizomi, ekofaol xodim, gumanitar yordam",
        },
        {
          icon: "globe",
          title: "Davlat xizmatlari",
          desc: "Tadbirkorlikda inson hayoti va sogʻligʻiga yuqori xavf soluvchi omillar reestri",
        },
        {
          icon: "decree",
          title: "Hujjatlar",
          desc: "Qonunlar, Prezident va Vazirlar Mahkamasi hujjatlari, Konstitutsiya, loyiha hujjatlari, ichki hujjatlar, yongʻin xavfsizligi bazasi",
        },
        {
          icon: "chart",
          title: "Raqamli hukumat",
          desc: "Ochiq maʼlumotlar, qayta aloqa, xizmatlar roʻyxati, FVK statistikasi, hisobotlar, davlat xaridlari, murojaatlar, byudjet ochiqligi",
        },
        {
          icon: "news",
          title: "Axborot va aloqa",
          desc: "Yangiliklar, press-relizlar, tadbirlar, nashrlar, aholini FVKga tayyorlash havolasi; kontaktlar, soʻrovnomalar, korrupsiya va manfaatlar toʻqnashuvi kanallari",
        },
      ],
      closing:
        "Boʻlimlar yangilanadi; dolzarb maʼlumotlarni gov.uz/fvv dan oling.",
    },
    whyUse: {
      h2: "Nima uchun rasmiy saytdan foydalanish kerak",
      intro:
        "gov.uz dagi boʻlim — FVK va xavfsizlik boʻyicha ogohlantirishlar, meʼyorlar va ochiq maʼlumotlarning rasmiy kanali.",
      listLabel: "Sayt ayniqsa quyidagilar uchun muhim:",
      items: [
        "xavfsizlik qoidalarini va portaldagi murojaatlarni oʻrganuvchi fuqarolar uchun",
        "yuqori xavf reestri va talablar bilan ishlovchi tadbirkorlar uchun",
        "tayyorgarlikni muvofiqlashtiruvchi davlat hamkorlari uchun",
        "matbuot xizmati bilan ishlovchi OAV uchun",
      ],
    },
    otherSites: {
      h2: "Boshqa davlat organlarining rasmiy saytlari",
    },
    contacts: {
      h2: "Aloqa",
      labels: {
        phone: "Telefon",
        trustPhone: "Ishonch telefoni",
        email: "Elektron pochta",
        territorialOffices: "Hududiy boshqarmalar",
        social: "Ijtimoiy tarmoqlar",
        address: "Manzil",
        transport: "Transport",
        hours: "Ish vaqti",
      },
      phones: [
        { display: "1050", href: "tel:1050" },
        { display: "101", href: "tel:101" },
      ],
      trustPhone: { display: "1101", href: "tel:1101" },
      email: {
        display: "info@fvv.uz",
        href: "mailto:info@fvv.uz",
      },
      territorialOffices: fvvTerritorialOffices.map(({ url, uz: label }) => ({
        label,
        url,
      })),
      social: [
        {
          id: "twitter",
          label: "Twitter / X",
          url: "https://twitter.com/fvv_uzb",
        },
        {
          id: "instagram",
          label: "Instagram",
          url: "https://www.instagram.com/fvvmchs/",
        },
        {
          id: "telegram",
          label: "Telegram",
          url: "https://t.me/MCHSUzbek",
        },
        {
          id: "facebook",
          label: "Facebook",
          url: "https://www.facebook.com/FVV.Uzbekiston",
        },
        {
          id: "youtube",
          label: "YouTube",
          url: "https://www.youtube.com/channel/UCqrWjSMaXQPkBiFV0b6N0-g",
        },
      ],
      address: "100084, Toshkent, Kichik Xalqa yo'li ko'chasi, 4",
      transport:
        "Avtobuslar: 85, 88, 95, 93, 72, 115, 19, 67, 24, 51, 60, 142, 10\nMarshrut transporti: 100, 62, 12, 61, 20",
      hours:
        "Dushanba — shanba: 9:00 — 18:00\nTushlik tanaffusi: 13:00 — 14:00\nDam olish kunlari: yakshanba\nNavbatchilik va qutqaruv boʻlinmalari sutkasiga ishlaydi",
      sourceAttribution: {
        dataSource:
          "Aloqa maʼlumotlari Oʻzbekiston Respublikasining rasmiy portali (gov.uz), Favqulodda vaziyatlar vazirligi boʻlimi (fvv) asosida keltirilgan.",
        reuseNoticeBefore: "Ushbu sayt materiallaridan foydalanganda ",
        reuseLinkText: "saytga",
        reuseNoticeAfter: " havola qoʻyish majburiy.",
        reuseUrl: "https://gov.uz/oz/fvv/",
      },
    },
    schema: {
      description:
        "Oʻzbekiston Respublikasi Favqulodda vaziyatlar vazirligining gov.uz portali boʻlimi (fvv): 1050 va 101 telefonlari, ishonch telefoni 1101, elektron pochta info[at]fvv.uz, manzil 100084, Toshkent, Kichik Xalqa yo'li ko'chasi, 4, gov.uz dagi hududiy boshqarmalar, transport va ish vaqti, ijtimoiy tarmoqlar havolalari.",
      orgName: "Oʻzbekiston Respublikasi Favqulodda vaziyatlar vazirligi",
      sameAs: "https://gov.uz/oz/fvv",
    },
    faq: {
      h2: "Tez-tez beriladigan savollar",
      items: [
        {
          q: "FVVning gov.uz dagi rasmiy boʻlimi qayerda?",
          a: "Oʻzbekcha: https://gov.uz/oz/fvv; shuningdek /ru/fvv va /en/fvv. Havola katalog sahifasida ham mavjud.",
        },
        {
          q: "Ishonch telefoni qaysi?",
          a: "1101 koʻrsatiladi; toʻliq roʻyxat «Barcha raqamlar». Portaldan tasdiqlang.",
        },
        {
          q: "Tadbirkorlar uchun yuqori xavf reestri qayerda?",
          a: "«Davlat xizmatlari» boʻlimida — inson hayoti va sogʻligʻiga yuqori xavf soluvchi omillar reestri.",
        },
        {
          q: "FVK statistikasi va ochiq maʼlumotlar qayerda?",
          a: "«Raqamli hukumat»da: ochiq maʼlumotlar toʻplamlari, FVK statistikasi, vazirlik hisobotlari va boshqalar.",
        },
        {
          q: "Qanday bogʻlanish mumkin?",
          a: "gov.uz dagi «Bogʻlanish»: kontaktlar, soʻrovnomalar, korrupsiya va manfaatlar toʻqnashuvi haqida xabar berish kanallari.",
        },
      ],
    },
  },
};
