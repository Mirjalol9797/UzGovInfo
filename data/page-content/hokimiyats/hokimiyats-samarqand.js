/**
 * Хокимият Самаркандской области
 * Официальный раздел: https://gov.uz/ru/samarqand
 */
const samarqandTerritoryLinks = [
  { url: "https://gov.uz/urgut/", ru: "Ургутский район", en: "Urgut district", uz: "Urgut tumani" },
  { url: "https://gov.uz/ishtixon/", ru: "Иштыханский район", en: "Ishtikhon district", uz: "Ishtixon tumani" },
  { url: "https://gov.uz/jomboy/", ru: "Джамбайский район", en: "Jomboy district", uz: "Jomboy tumani" },
  { url: "https://gov.uz/bulungur/", ru: "Булунгурский район", en: "Bulungur district", uz: "Bulungʻur tumani" },
  { url: "https://gov.uz/oqdaryo/", ru: "Акдарьинский район", en: "Akdarya district", uz: "Oqdaryo tumani" },
  { url: "https://gov.uz/nurobod/", ru: "Нурабадский район", en: "Nurobod district", uz: "Nurobod tumani" },
  { url: "https://gov.uz/narpay/", ru: "Нарпайский район", en: "Narpay district", uz: "Narpay tumani" },
  { url: "https://gov.uz/payshanba/", ru: "Каттакурганский район", en: "Kattakurgan district", uz: "Kattaqoʻrgʻon tumani" },
  { url: "https://gov.uz/payariq/", ru: "Пайарыкский район", en: "Payariq district", uz: "Payariq tumani" },
  { url: "https://gov.uz/paxtachi/", ru: "Пахтачийский район", en: "Pakhtachi district", uz: "Paxtachi tumani" },
  { url: "https://gov.uz/pastdargom/", ru: "Пастдаргомский район", en: "Pastdargom district", uz: "Pastdargʻom tumani" },
  { url: "https://gov.uz/gulobod/", ru: "Самаркандский район", en: "Samarkand district", uz: "Samarqand tumani" },
  { url: "https://gov.uz/tayloq/", ru: "Тайлакский район", en: "Tayloq district", uz: "Tayloq tumani" },
  { url: "https://gov.uz/qoshrabot/", ru: "Кошрабадский район", en: "Koshrabot district", uz: "Qoʻshrabot tumani" },
  { url: "https://gov.uz/samshahar/", ru: "город Самарканд", en: "Samarkand city", uz: "Samarqand shahri" },
  { url: "https://gov.uz/kattakurgon/", ru: "город Каттакурган", en: "Kattakurgan city", uz: "Kattaqoʻrgʻon shahri" },
];

export default {
  ru: {
    pageTitle: "Хокимият Самаркандской области",
    intro: [
      "Хокимият Самаркандской области — орган исполнительной власти на территории области; обеспечивает реализацию законодательства, решений Президента и Кабинета Министров и социально-экономическое развитие региона.",
      "На портале gov.uz раздел samarqand (https://gov.uz/ru/samarqand) содержит сведения о хокимияте: о хокимияте, структуре организации, руководстве, центральном аппарате, подведомственных предприятиях, городах и районах, местном Кенгаше. В «Деятельности» — перепись, FAQ, ключевые показатели развития региона, электронное правительство, международное сотрудничество, противодействие коррупции, молодёжная политика, гендерное равенство, тендеры и аукционы. В «Государственных услугах» — электронные госуслуги, предоставляемые хокимиятом области. В «Документах» — НПА областного хокимията, утратившие силу акты, решения областного хокима, затрагивающие права граждан и бизнеса, задачи и функции хокимията, государственная программа. В «Цифровом правительстве» — цифровой регион, обратная связь, информация на портале открытых данных, УП-6247, УП-154. Пресс-центр: правительственная информационная служба, публичные мероприятия, статистика и исследования, социальная сфера, календарь, новости, заявления руководства, заседания, пресс-конференции. Контакты: статистика обращений, предотвращение коррупции, опросы, контакты. По сведениям UzGovInfo (govinfo.uz) и раздела на gov.uz: телефон +99866 230-47-77, телефон доверия 1177 и 0 (366) 230-47-77, электронная почта qabulxona@samarkand.uz, адрес 140157, Самаркандская область, город Самарканд, пл. Куксарой, 1; транспорт и остановка — в блоке контактов; ссылки на города и районы и соцсети — там же; полный список номеров — в «Все номера» на gov.uz.",
      "Полезен жителям и бизнесу Самаркандской области, инвесторам и СМИ при работе с региональными программами и официальными обращениями.",
    ],
    officialSite: {
      h2: "Официальный раздел на gov.uz",
      ctaText:
        "Перейти в раздел хокимията Самаркандской области на gov.uz →",
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
      phones: [{ display: "+99866 230-47-77", href: "tel:+998662304777" }],
      trustPhone: {
        display: "1177; 0 (366) 230-47-77",
        href: "tel:+998662304777",
      },
      email: {
        display: "qabulxona@samarkand.uz",
        href: "mailto:qabulxona@samarkand.uz",
      },
      territorialOffices: samarqandTerritoryLinks.map(({ url, ru: label }) => ({ url, label })),
      social: [
        { id: "telegram", label: "Telegram", url: "https://t.me/samviloyatihokimligi" },
        {
          id: "facebook",
          label: "Facebook (пресс-служба)",
          url: "https://www.facebook.com/sampressservice",
        },
        {
          id: "facebook",
          label: "Facebook",
          url: "https://www.facebook.com/adizboboyev",
        },
        {
          id: "instagram",
          label: "Instagram",
          url: "https://www.instagram.com/adizboboyev72/",
        },
        {
          id: "youtube",
          label: "YouTube",
          url: "https://www.youtube.com/@SPRESSSERVICE",
        },
      ],
      address:
        "140157, Самаркандская область, город Самарканд, пл. Куксарой, 1",
      transport:
        "Автобусы № 3, 6, 10, 21, 22, 33, 41, 44, 51, 52, 58, 64, 66, 72, 122 — остановка «Областной хокимият»\n(ориентир: пересечение улиц Бустонсарой и Мирзо Улугбека)",
      hours: "Понедельник–пятница",
      sourceAttribution: {
        dataSource:
          "Контактные данные приведены по сведениям портала UzGovInfo (govinfo.uz), страница хокимията Самаркандской области.",
        reuseNoticeBefore: "При использовании материалов с данного сайта ссылка на ",
        reuseLinkText: "сайт",
        reuseNoticeAfter: " обязательна.",
        reuseUrl: "https://gov.uz/ru/samarqand",
      },
    },
    whatFind: {
      h2: "Что можно найти на официальном ресурсе",
      intro:
        "Раздел gov.uz/samarqand объединяет полномочия областного хокимията, госуслуги и открытую информацию.",
      listLabel: "На разделе обычно доступны:",
      items: [
        {
          icon: "building",
          title: "О хокимияте",
          desc: "О хокимияте, структура, руководство, центральный аппарат, подведомственные предприятия, города и районы, местный Кенгаш",
        },
        {
          icon: "program",
          title: "Деятельность",
          desc: "Перепись, FAQ, показатели развития региона, электронное правительство, международное сотрудничество, антикоррупция, молодёжь и гендер, тендеры",
        },
        {
          icon: "globe",
          title: "Государственные услуги",
          desc: "Электронные государственные услуги хокимията Самаркандской области",
        },
        {
          icon: "decree",
          title: "Документы",
          desc: "НПА хокимията, решения хокима, задачи и функции, государственная программа",
        },
        {
          icon: "chart",
          title: "Цифровое правительство",
          desc: "Цифровой регион, обратная связь, открытые данные, УП-6247, УП-154",
        },
        {
          icon: "news",
          title: "Пресс-центр и контакты",
          desc: "Новости, календарь, заседания, пресс-конференции; статистика обращений и контакты",
        },
      ],
      closing:
        "Меню обновляется; актуальные сведения смотрите на gov.uz/samarqand.",
    },
    whyUse: {
      h2: "Зачем использовать официальный раздел",
      intro:
        "gov.uz/samarqand — канал официальной информации хокимията Самаркандской области на едином портале.",
      listLabel: "Раздел особенно полезен:",
      items: [
        "жителям области при поиске новостей, госуслуг и контактов",
        "предпринимателям при участии в тендерах и работе с решениями хокима",
        "журналистам при поиске пресс-материалов и статистики по соцсфере",
        "организациям при подаче обращений и работе с цифровыми сервисами региона",
      ],
    },
    otherSites: {
      h2: "Другие официальные сайты государственных органов",
    },
    schema: {
      description:
        "Официальный раздел хокимията Самаркандской области на портале gov.uz (samarqand): телефон +99866 230-47-77, телефон доверия 1177 и 0 (366) 230-47-77, электронная почта qabulxona[at]samarkand.uz, адрес 140157, Самаркандская область, город Самарканд, пл. Куксарой, 1, автобусы до остановки «Областной хокимият», ссылки на города и районы на gov.uz, соцсети (Telegram, Facebook, Instagram, YouTube), приём по будням.",
      orgName: "Хокимият Самаркандской области",
      sameAs: [
        "https://gov.uz/ru/samarqand",
        "https://gov.uz/en/samarqand",
        "https://gov.uz/oz/samarqand",
      ],
    },
    faq: {
      h2: "Часто задаваемые вопросы",
      items: [
        {
          q: "Где официальный раздел хокимията Самаркандской области?",
          a: "На портале государства: https://gov.uz/ru/samarqand (также https://gov.uz/en/samarqand и https://gov.uz/oz/samarqand). В каталоге ссылка подставляется под язык интерфейса.",
        },
        {
          q: "Какие телефоны, почта, адрес и транспорт указаны для связи?",
          a: "Телефон +99866 230-47-77, телефон доверия 1177 и 0 (366) 230-47-77, электронная почта qabulxona@samarkand.uz, адрес 140157, Самаркандская область, город Самарканд, пл. Куксарой, 1; города, районы, соцсети и маршруты автобусов — в блоке контактов (по govinfo.uz); полный перечень номеров — в «Все номера» на gov.uz.",
        },
        {
          q: "Где электронные госуслуги хокимията?",
          a: "В разделе «Государственные услуги» — электронные государственные услуги, предоставляемые хокимиятом Самаркандской области.",
        },
        {
          q: "Где УП-6247 и УП-154?",
          a: "В разделе «Цифровое правительство» — УП-6247 и УП-154.",
        },
      ],
    },
  },
  en: {
    pageTitle: "Samarkand regional administration",
    intro: [
      "The Samarkand regional administration is the executive body of Samarkand region; it implements legislation and decisions of the President and Cabinet of Ministers and guides the region’s socio-economic development.",
      "The gov.uz samarqand section (https://gov.uz/en/samarqand) publishes information about the khokimiyat: about the administration, structure, leadership, central staff, subordinate enterprises, cities and districts, local Kengash. Activities include census, FAQ, key development indicators, e-government, international cooperation, anti-corruption, youth policy, gender equality, tenders and auctions. Public services include e-government services provided by the regional khokimiyat. Documents include legal acts of the regional khokimiyat, repealed acts, governor’s decisions affecting citizens and businesses, tasks and functions of the khokimiyat, state programme. Digital government includes digital region, feedback, information on the open data portal, UP-6247, UP-154. Press centre: government information service, public events, statistics and research, social sector, calendar, news, leadership statements, sessions, press conferences. Contacts: appeal statistics, anti-corruption prevention, surveys, contacts. Per UzGovInfo (govinfo.uz) and the gov.uz section: phone +99866 230-47-77, trust line 1177 and 0 (366) 230-47-77, email qabulxona@samarkand.uz, address 140157, Samarkand region, Samarkand city, Kuksaroy square 1; transport and bus routes — in the contacts block; links to cities and districts and social media — there too; for the full number list see “All numbers” on gov.uz.",
      "Useful for residents and businesses in Samarkand region, investors and media seeking regional programmes and official contacts.",
    ],
    officialSite: {
      h2: "Official section on gov.uz",
      ctaText:
        "Open the Samarkand regional administration section on gov.uz →",
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
      phones: [{ display: "+99866 230-47-77", href: "tel:+998662304777" }],
      trustPhone: {
        display: "1177; 0 (366) 230-47-77",
        href: "tel:+998662304777",
      },
      email: {
        display: "qabulxona@samarkand.uz",
        href: "mailto:qabulxona@samarkand.uz",
      },
      territorialOffices: samarqandTerritoryLinks.map(({ url, en: label }) => ({ url, label })),
      social: [
        { id: "telegram", label: "Telegram", url: "https://t.me/samviloyatihokimligi" },
        {
          id: "facebook",
          label: "Facebook (press service)",
          url: "https://www.facebook.com/sampressservice",
        },
        {
          id: "facebook",
          label: "Facebook",
          url: "https://www.facebook.com/adizboboyev",
        },
        {
          id: "instagram",
          label: "Instagram",
          url: "https://www.instagram.com/adizboboyev72/",
        },
        {
          id: "youtube",
          label: "YouTube",
          url: "https://www.youtube.com/@SPRESSSERVICE",
        },
      ],
      address: "140157, Samarkand region, Samarkand city, Kuksaroy square, 1",
      transport:
        "Buses 3, 6, 10, 21, 22, 33, 41, 44, 51, 52, 58, 64, 66, 72, 122 — “Regional khokimiyat” stop\n(landmark: junction of Bustonsaroy and Mirzo Ulugbek streets)",
      hours: "Monday–Friday",
      sourceAttribution: {
        dataSource:
          "Contact details are taken from the UzGovInfo portal (govinfo.uz), page of the Samarkand regional administration.",
        reuseNoticeBefore: "When using materials from this site, a link to the ",
        reuseLinkText: "site",
        reuseNoticeAfter: " is required.",
        reuseUrl: "https://gov.uz/en/samarqand",
      },
    },
    whatFind: {
      h2: "What you can find there",
      intro:
        "gov.uz/samarqand brings together the regional administration’s mandate, public services and transparency.",
      listLabel: "You can typically find:",
      items: [
        {
          icon: "building",
          title: "About the administration",
          desc: "About, structure, leadership, central staff, enterprises, cities and districts, local Kengash",
        },
        {
          icon: "program",
          title: "Activities",
          desc: "Census, FAQ, regional development indicators, e-government, international cooperation, anti-corruption, youth and gender, tenders",
        },
        {
          icon: "globe",
          title: "Public services",
          desc: "E-government services provided by the Samarkand regional khokimiyat",
        },
        {
          icon: "decree",
          title: "Documents",
          desc: "Legal acts, governor’s decisions, tasks and functions, state programme",
        },
        {
          icon: "chart",
          title: "Digital government",
          desc: "Digital region, feedback, open data portal, UP-6247, UP-154",
        },
        {
          icon: "news",
          title: "Press centre and contacts",
          desc: "News, calendar, sessions, press conferences; appeal statistics and contacts",
        },
      ],
      closing: "Menus are updated; see gov.uz/samarqand for current information.",
    },
    whyUse: {
      h2: "Why use this official resource",
      intro:
        "gov.uz/samarqand is the official channel of the Samarkand regional administration on Uzbekistan’s portal.",
      listLabel: "It is especially useful for:",
      items: [
        "residents seeking news, public services and contacts",
        "businesses participating in tenders and reviewing governor’s decisions",
        "journalists looking for press materials and social-sector statistics",
        "organisations using regional digital services and filing appeals",
      ],
    },
    otherSites: {
      h2: "Other official websites of government bodies",
    },
    schema: {
      description:
        "Official section of the Samarkand regional administration on gov.uz (samarqand): phone +99866 230-47-77, trust line 1177 and 0 (366) 230-47-77, email qabulxona[at]samarkand.uz, address 140157, Samarkand region, Samarkand city, Kuksaroy square 1, buses to the “Regional khokimiyat” stop, links to cities and districts on gov.uz, social media (Telegram, Facebook, Instagram, YouTube), weekday reception.",
      orgName: "Samarkand regional administration",
      sameAs: [
        "https://gov.uz/en/samarqand",
        "https://gov.uz/ru/samarqand",
        "https://gov.uz/oz/samarqand",
      ],
    },
    faq: {
      h2: "Frequently asked questions",
      items: [
        {
          q: "Where is the official section of the Samarkand regional administration?",
          a: "On the government portal: https://gov.uz/en/samarqand (also https://gov.uz/ru/samarqand and https://gov.uz/oz/samarqand). The catalog link matches your interface language.",
        },
        {
          q: "What phones, email, address and transport are listed for contact?",
          a: "Phone +99866 230-47-77, trust line 1177 and 0 (366) 230-47-77, email qabulxona@samarkand.uz, address 140157, Samarkand region, Samarkand city, Kuksaroy square 1; cities, districts, social media and bus routes — in the contacts block on this page (per govinfo.uz); see “All numbers” on gov.uz for the full list.",
        },
        {
          q: "Where are e-government services of the khokimiyat?",
          a: "Under Public services — e-government services provided by the Samarkand regional khokimiyat.",
        },
        {
          q: "Where are UP-6247 and UP-154?",
          a: "Under Digital government — UP-6247 and UP-154.",
        },
      ],
    },
  },
  uz: {
    pageTitle: "Samarqand viloyati hokimligi",
    intro: [
      "Samarqand viloyati hokimligi — viloyat hududidagi ijroiya hokimiyati organi; qonunchilik, Prezident va Vazirlar Kengashi qarorlarini amalga oshiradi va viloyat ijtimoiy-iqtisodiy rivojlanishini taʼminlaydi.",
      "gov.uz «samarqand» boʻlimi (https://gov.uz/oz/samarqand) da hokimiyat haqida: tuzilma, rahbariyat, markaziy apparat, boʻysunuvchi korxonalar, shahar va tumanlar, mahalliy Kengash. «Faoliyat»da roʻyxatdan oʻtish, savollar-javoblar, rivojlanish koʻrsatkichlari, elektron hukumat, xalqaro hamkorlik, korrupsiyaga qarshi kurash, yoshlar va gender siyosati, tender va auksionlar. «Davlat xizmatlari»da viloyat hokimligi tomonidan koʻrsatiladigan elektron davlat xizmatlari. «Hujjatlar»da viloyat hokimiyatining meʼyoriy-huquqiy hujjatlari, kuchini yoʻqotganlar, fuqarolar va tadbirkorlar huquqlariga tegishli hokim qarorlari, vazifa va funksiyalar, davlat dasturi. «Raqamli davlat»da raqamli viloyat, qayta aloqa, ochiq maʼlumotlar portali, UP-6247, UP-154. Matbuot: davlat axborot xizmati, ommaviy tadbirlar, statistika va tadqiqotlar, ijtimoiy soha, taqvim, yangiliklar, rahbariyat bayonotlari, majlislar, matbuot anjumanlari. Aloqa: murojaatlar statistikasi, korrupsiyani oldini olish, soʻrovnomalar, kontaktlar. UzGovInfo (govinfo.uz) va gov.uz boʻlimi boʻyicha: telefon +99866 230-47-77, ishonch liniyasi 1177 va 0 (366) 230-47-77, elektron pochta qabulxona@samarkand.uz, manzil 140157, Samarqand viloyati, Samarqand shahri, Kuksaroy maydoni, 1; transport va avtobuslar — kontaktlar blokida; shahar va tumanlar hamda ijtimoiy tarmoqlar — shu yerda; toʻliq raqamlar — gov.uz dagi «Barcha raqamlar».",
      "Samarqand viloyati fuqarolari va tadbirkorlari uchun rasmiy manba.",
    ],
    officialSite: {
      h2: "gov.uz dagi rasmiy boʻlim",
      ctaText: "Samarqand viloyati hokimligi boʻlimiga oʻtish →",
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
      phones: [{ display: "+99866 230-47-77", href: "tel:+998662304777" }],
      trustPhone: {
        display: "1177; 0 (366) 230-47-77",
        href: "tel:+998662304777",
      },
      email: {
        display: "qabulxona@samarkand.uz",
        href: "mailto:qabulxona@samarkand.uz",
      },
      territorialOffices: samarqandTerritoryLinks.map(({ url, uz: label }) => ({ url, label })),
      social: [
        { id: "telegram", label: "Telegram", url: "https://t.me/samviloyatihokimligi" },
        {
          id: "facebook",
          label: "Facebook (matbuot xizmati)",
          url: "https://www.facebook.com/sampressservice",
        },
        {
          id: "facebook",
          label: "Facebook",
          url: "https://www.facebook.com/adizboboyev",
        },
        {
          id: "instagram",
          label: "Instagram",
          url: "https://www.instagram.com/adizboboyev72/",
        },
        {
          id: "youtube",
          label: "YouTube",
          url: "https://www.youtube.com/@SPRESSSERVICE",
        },
      ],
      address: "140157, Samarqand viloyati, Samarqand shahri, Kuksaroy maydoni, 1",
      transport:
        "Avtobuslar № 3, 6, 10, 21, 22, 33, 41, 44, 51, 52, 58, 64, 66, 72, 122 — «Viloyat hokimiyati» bekati\n(orientir: Bustonsaroy va Mirzo Ulugʻbek koʻchalari kesishmasi)",
      hours: "Dushanba–juma",
      sourceAttribution: {
        dataSource:
          "Kontakt maʼlumotlari UzGovInfo portali (govinfo.uz), Samarqand viloyati hokimligi sahifasidan olingan.",
        reuseNoticeBefore: "Ushbu sayt materiallaridan foydalanganda ",
        reuseLinkText: "saytga",
        reuseNoticeAfter: " havola qoʻyish majburiy.",
        reuseUrl: "https://gov.uz/oz/samarqand",
      },
    },
    whatFind: {
      h2: "Rasmiy resursda nimalar bor",
      intro:
        "gov.uz/samarqand viloyat hokimiyati vakolati va ochiq axborotni birlashtiradi.",
      listLabel: "Odatda mavjud:",
      items: [
        {
          icon: "building",
          title: "Hokimiyat haqida",
          desc: "Tuzilma, rahbariyat, korxonalar, shahar va tumanlar, mahalliy Kengash",
        },
        {
          icon: "program",
          title: "Faoliyat",
          desc: "Roʻyxatdan oʻtish, rivojlanish koʻrsatkichlari, elektron hukumat, tenderlar",
        },
        {
          icon: "globe",
          title: "Davlat xizmatlari",
          desc: "Samarqand viloyati hokimligining elektron davlat xizmatlari",
        },
        {
          icon: "decree",
          title: "Hujjatlar",
          desc: "Meʼyoriy hujjatlar, hokim qarorlari, davlat dasturi",
        },
        {
          icon: "chart",
          title: "Raqamli davlat",
          desc: "Raqamli viloyat, ochiq maʼlumotlar, UP-6247, UP-154",
        },
        {
          icon: "news",
          title: "Matbuot va aloqa",
          desc: "Yangiliklar, majlislar, matbuot; murojaatlar statistikasi",
        },
      ],
      closing: "Menyu yangilanadi; gov.uz/samarqand dan tekshiring.",
    },
    whyUse: {
      h2: "Nima uchun rasmiy boʻlimdan foydalanish kerak",
      intro:
        "gov.uz/samarqand — Samarqand viloyati hokimiyatining yagona davlat portali boʻyicha rasmiy kanali.",
      listLabel: "Quyidagilar uchun muhim:",
      items: [
        "viloyat yangiliklari va davlat xizmatlari bilan ishlovchilar uchun",
        "tender va hokim qarorlari bilan bogʻliq subyektlar uchun",
        "matbuot va ijtimoiy soha statistikasi uchun",
      ],
    },
    otherSites: {
      h2: "Boshqa davlat organlarining rasmiy saytlari",
    },
    schema: {
      description:
        "Samarqand viloyati hokimligining gov.uz portali boʻlimi (samarqand): telefon +99866 230-47-77, ishonch liniyasi 1177 va 0 (366) 230-47-77, elektron pochta qabulxona[at]samarkand.uz, manzil 140157, Samarqand viloyati, Samarqand shahri, Kuksaroy maydoni, 1, «Viloyat hokimiyati» bekatigacha avtobuslar, gov.uz dagi shahar va tumanlar havolalari, ijtimoiy tarmoqlar (Telegram, Facebook, Instagram, YouTube), ish kunlari.",
      orgName: "Samarqand viloyati hokimligi",
      sameAs: [
        "https://gov.uz/oz/samarqand",
        "https://gov.uz/ru/samarqand",
        "https://gov.uz/en/samarqand",
      ],
    },
    faq: {
      h2: "Tez-tez beriladigan savollar",
      items: [
        {
          q: "Rasmiy boʻlim qayerda?",
          a: "https://gov.uz/oz/samarqand (ru va en ham mavjud).",
        },
        {
          q: "Aloqa uchun qanday telefon, pochta, manzil va transport koʻrsatilgan?",
          a: "Telefon +99866 230-47-77, ishonch liniyasi 1177 va 0 (366) 230-47-77, elektron pochta qabulxona@samarkand.uz, manzil 140157, Samarqand viloyati, Samarqand shahri, Kuksaroy maydoni, 1; shahar va tumanlar, ijtimoiy tarmoqlar va avtobuslar — sahifadagi kontaktlar blokida (govinfo.uz boʻyicha); toʻliq raqamlar — gov.uz dagi «Barcha raqamlar».",
        },
        {
          q: "Elektron davlat xizmatlari qayerda?",
          a: "«Davlat xizmatlari» — Samarqand viloyati hokimligining elektron xizmatlari.",
        },
        {
          q: "UP-6247 va UP-154 qayerda?",
          a: "«Raqamli davlat» — UP-6247 va UP-154.",
        },
      ],
    },
  },
};
