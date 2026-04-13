/**
 * Хокимият Кашкадарьинской области
 * Официальный раздел: https://gov.uz/ru/qashqadaryo
 */
const qashqadaryoTerritoryLinks = [
  { url: "https://gov.uz/chiroqchi/", ru: "Чиракчинский район", en: "Chiroqchi district", uz: "Chiroqchi tumani" },
  { url: "https://gov.uz/muborak/", ru: "Мубарекский район", en: "Muborak district", uz: "Muborak tumani" },
  { url: "https://gov.uz/yakkabog/", ru: "Яккабагский район", en: "Yakkabog district", uz: "Yakkabogʻ tumani" },
  { url: "https://gov.uz/shahrisabz/", ru: "Шахрисабзский район", en: "Shahrisabz district", uz: "Shahrisabz tumani" },
  { url: "https://gov.uz/qarshi/", ru: "Каршинский район", en: "Qarshi district", uz: "Qarshi tumani" },
  { url: "https://gov.uz/koson/", ru: "Касанский район", en: "Koson district", uz: "Koson tumani" },
  { url: "https://gov.uz/nishontuman/", ru: "Нишанский район", en: "Nishon district", uz: "Nishon tumani" },
  { url: "https://gov.uz/dehqonobod/", ru: "Дехканабадский район", en: "Dekhanabad district", uz: "Dehqonobod tumani" },
  { url: "https://gov.uz/guzor/", ru: "Гузарский район", en: "Guzor district", uz: "Gʻuzor tumani" },
  { url: "https://gov.uz/qarshish/", ru: "город Карши", en: "Qarshi city", uz: "Qarshi shahri" },
  { url: "https://gov.uz/kasbit/", ru: "Касбинский район", en: "Kasbi district", uz: "Kasbi tumani" },
  { url: "https://gov.uz/kitobt/", ru: "Китабский район", en: "Kitob district", uz: "Kitob tumani" },
  { url: "https://gov.uz/kokdala/", ru: "Кукдалинский район", en: "Kokdala district", uz: "Koʻkdala tumani" },
  { url: "https://gov.uz/mirishkor/", ru: "Миришкорский район", en: "Mirishkor district", uz: "Mirishkor tumani" },
  { url: "https://gov.uz/shakhrisabzgov/", ru: "город Шахрисабз", en: "Shahrisabz city", uz: "Shahrisabz shahri" },
  { url: "https://gov.uz/qamashi24/", ru: "Камашинский район", en: "Kamashi district", uz: "Qamashi tumani" },
];

export default {
  ru: {
    pageTitle: "Хокимият Кашкадарьинской области",
    intro: [
      "Хокимият Кашкадарьинской области — орган исполнительной власти на территории области; обеспечивает реализацию законодательства, решений Президента и Кабинета Министров и социально-экономическое развитие региона.",
      "На портале gov.uz раздел qashqadaryo (https://gov.uz/ru/qashqadaryo) содержит сведения о хокимияте: о хокимияте, структуре организации, руководстве, центральном аппарате, подведомственных организациях, региональных управлениях. В «Деятельности» — перепись населения и иные направления развития территории. Предусмотрены разделы государственных услуг, документов и цифрового правительства. Пресс-служба: новости, пресс-релизы, пресс-конференции, календарь событий, заседания, заявления и выступления руководства. Контакты: все номера, опросы, статистика обращений. По сведениям UzGovInfo (govinfo.uz) и раздела на gov.uz: телефон +99875 221-13-40, телефон доверия +99875 221-07-60, электронная почта info@qashqadaryo.uz, адрес 180100, Карши, пл. Мустакиллик, 1; ссылки на города и районы — в блоке контактов; полный список номеров — в «Все номера» на gov.uz. Состав меню может расширяться по мере наполнения раздела.",
      "Полезен жителям и организациям Кашкадарьинской области при работе с региональными программами, госуслугами и официальными обращениями.",
    ],
    officialSite: {
      h2: "Официальный раздел на gov.uz",
      ctaText:
        "Перейти в раздел хокимията Кашкадарьинской области на gov.uz →",
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
      phones: [{ display: "+99875 221-13-40", href: "tel:+998752211340" }],
      trustPhone: { display: "+99875 221-07-60", href: "tel:+998752210760" },
      email: { display: "info@qashqadaryo.uz", href: "mailto:info@qashqadaryo.uz" },
      territorialOffices: qashqadaryoTerritoryLinks.map(({ url, ru: label }) => ({ url, label })),
      social: [
        {
          id: "youtube",
          label: "YouTube",
          url: "https://www.youtube.com/c/qashvilhokimligi",
        },
        {
          id: "facebook",
          label: "Facebook",
          url: "https://www.facebook.com/qashqadaryovil.uz",
        },
        {
          id: "instagram",
          label: "Instagram",
          url: "https://www.instagram.com/qashvilhokimligi/",
        },
        { id: "twitter", label: "X (Twitter)", url: "https://twitter.com/Qashvilhokimli1" },
        { id: "telegram", label: "Telegram", url: "https://t.me/qvh_axboroti" },
      ],
      address: "180100, Карши, пл. Мустакиллик, 1",
      transport: "Автобусы: маршруты 1, 2, 4, 7, 13, 16, 20, 22, 295",
      hours: "Понедельник–пятница",
      sourceAttribution: {
        dataSource:
          "Контактные данные приведены по сведениям портала UzGovInfo (govinfo.uz), страница хокимията Кашкадарьинской области.",
        reuseNoticeBefore: "При использовании материалов с данного сайта ссылка на ",
        reuseLinkText: "сайт",
        reuseNoticeAfter: " обязательна.",
        reuseUrl: "https://gov.uz/ru/qashqadaryo",
      },
    },
    whatFind: {
      h2: "Что можно найти на официальном ресурсе",
      intro:
        "Раздел gov.uz/qashqadaryo объединяет сведения об областном хокимияте, госуслугах и контактах.",
      listLabel: "На разделе обычно доступны:",
      items: [
        {
          icon: "building",
          title: "О хокимияте",
          desc: "Сведения о хокимияте, структура, руководство, центральный аппарат, подведомственные организации, региональные управления",
        },
        {
          icon: "program",
          title: "Деятельность",
          desc: "Перепись и другие направления деятельности по мере публикации",
        },
        {
          icon: "globe",
          title: "Государственные услуги",
          desc: "Государственные услуги и электронные сервисы в компетенции раздела",
        },
        {
          icon: "decree",
          title: "Документы",
          desc: "Нормативные и иные документы по компетенции областной администрации",
        },
        {
          icon: "chart",
          title: "Цифровое правительство",
          desc: "Материалы цифрового правительства и открытых данных при наличии",
        },
        {
          icon: "news",
          title: "Пресс-служба и контакты",
          desc: "Новости, пресс-релизы, календарь; опросы и статистика обращений",
        },
      ],
      closing:
        "Меню обновляется; актуальные сведения смотрите на gov.uz/qashqadaryo.",
    },
    whyUse: {
      h2: "Зачем использовать официальный раздел",
      intro:
        "gov.uz/qashqadaryo — канал официальной информации хокимията Кашкадарьинской области на едином портале.",
      listLabel: "Раздел особенно полезен:",
      items: [
        "жителям области при поиске новостей и контактов органов власти",
        "организациям и гражданам при работе с госуслугами и обращениями",
        "журналистам при поиске пресс-материалов и календаря событий",
      ],
    },
    otherSites: {
      h2: "Другие официальные сайты государственных органов",
    },
    schema: {
      description:
        "Официальный раздел хокимията Кашкадарьинской области на портале gov.uz (qashqadaryo): телефон +99875 221-13-40, телефон доверия +99875 221-07-60, электронная почта info[at]qashqadaryo.uz, адрес 180100, Карши, пл. Мустакиллик, 1, ссылки на разделы городов и районов на gov.uz, социальные сети, автобусы 1, 2, 4, 7, 13, 16, 20, 22, 295, приём по будням.",
      orgName: "Хокимият Кашкадарьинской области",
      sameAs: [
        "https://gov.uz/ru/qashqadaryo",
        "https://gov.uz/en/qashqadaryo",
        "https://gov.uz/oz/qashqadaryo",
      ],
    },
    faq: {
      h2: "Часто задаваемые вопросы",
      items: [
        {
          q: "Где официальный раздел хокимията Кашкадарьинской области?",
          a: "На портале государства: https://gov.uz/ru/qashqadaryo (также https://gov.uz/en/qashqadaryo и https://gov.uz/oz/qashqadaryo). В каталоге ссылка подставляется под язык интерфейса.",
        },
        {
          q: "Какие телефоны, почта, адрес и транспорт указаны для связи?",
          a: "Телефон +99875 221-13-40, телефон доверия +99875 221-07-60, электронная почта info@qashqadaryo.uz, адрес 180100, Карши, пл. Мустакиллик, 1; города и районы, соцсети и автобусы — в блоке контактов на странице (по govinfo.uz); полный перечень номеров — в «Все номера» на gov.uz.",
        },
        {
          q: "Где статистика обращений и опросы?",
          a: "В разделе «Контакты» на gov.uz/qashqadaryo — опросы и статистика обращений (при наличии на портале).",
        },
      ],
    },
  },
  en: {
    pageTitle: "Kashkadarya regional administration",
    intro: [
      "The Kashkadarya regional administration is the executive body of the Kashkadarya (Qashqadaryo) region; it implements legislation and decisions of the President and Cabinet of Ministers and guides the socio-economic development of the territory.",
      "The gov.uz qashqadaryo section (https://gov.uz/en/qashqadaryo) publishes information about the khokimiyat: about the administration, structure of the organisation, leadership, central staff, subordinate organisations, regional departments. Activities include the census and other regional development topics. Sections cover state services, documents and digital government. Press service: news, press releases, press conferences, calendar of events, meetings, statements and speeches of the administration. Contacts: all numbers, survey, statistics of appeals. Per UzGovInfo (govinfo.uz) and the gov.uz section: phone +99875 221-13-40, trust line +99875 221-07-60, email info@qashqadaryo.uz, address 180100, Qarshi, Mustaqillik square 1; links to cities and districts are in the contacts block; for the full number list see “All numbers” on gov.uz. Menu items may expand as the section is updated.",
      "Useful for residents and organisations in Kashkadarya region seeking public services, news and official contacts.",
    ],
    officialSite: {
      h2: "Official section on gov.uz",
      ctaText:
        "Open the Kashkadarya regional administration section on gov.uz →",
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
      phones: [{ display: "+99875 221-13-40", href: "tel:+998752211340" }],
      trustPhone: { display: "+99875 221-07-60", href: "tel:+998752210760" },
      email: { display: "info@qashqadaryo.uz", href: "mailto:info@qashqadaryo.uz" },
      territorialOffices: qashqadaryoTerritoryLinks.map(({ url, en: label }) => ({ url, label })),
      social: [
        {
          id: "youtube",
          label: "YouTube",
          url: "https://www.youtube.com/c/qashvilhokimligi",
        },
        {
          id: "facebook",
          label: "Facebook",
          url: "https://www.facebook.com/qashqadaryovil.uz",
        },
        {
          id: "instagram",
          label: "Instagram",
          url: "https://www.instagram.com/qashvilhokimligi/",
        },
        { id: "twitter", label: "X (Twitter)", url: "https://twitter.com/Qashvilhokimli1" },
        { id: "telegram", label: "Telegram", url: "https://t.me/qvh_axboroti" },
      ],
      address: "180100, Qarshi, Mustaqillik square, 1",
      transport: "Buses: routes 1, 2, 4, 7, 13, 16, 20, 22, 295",
      hours: "Monday–Friday",
      sourceAttribution: {
        dataSource:
          "Contact details are taken from the UzGovInfo portal (govinfo.uz), page of the Kashkadarya regional administration.",
        reuseNoticeBefore: "When using materials from this site, a link to the ",
        reuseLinkText: "site",
        reuseNoticeAfter: " is required.",
        reuseUrl: "https://gov.uz/en/qashqadaryo",
      },
    },
    whatFind: {
      h2: "What you can find there",
      intro:
        "gov.uz/qashqadaryo brings together information on the regional administration, public services and contacts.",
      listLabel: "You can typically find:",
      items: [
        {
          icon: "building",
          title: "About",
          desc: "About the khokimiyat, structure, administration, central staff, subordinate organisations, regional departments",
        },
        {
          icon: "program",
          title: "Activity",
          desc: "Census and other activity topics as published",
        },
        {
          icon: "globe",
          title: "State services",
          desc: "Public services and e-services within the section",
        },
        {
          icon: "decree",
          title: "Documents",
          desc: "Legal and other documents within the administration’s competence",
        },
        {
          icon: "chart",
          title: "Digital government",
          desc: "Digital government and open data materials where available",
        },
        {
          icon: "news",
          title: "Press service and contacts",
          desc: "News, press releases, calendar; surveys and appeal statistics",
        },
      ],
      closing: "Menus are updated; see gov.uz/qashqadaryo for current information.",
    },
    whyUse: {
      h2: "Why use this official resource",
      intro:
        "gov.uz/qashqadaryo is the official channel of the Kashkadarya regional administration on Uzbekistan’s portal.",
      listLabel: "It is especially useful for:",
      items: [
        "residents seeking regional news and government contacts",
        "citizens and organisations using public services and appeals",
        "journalists looking for press materials and event calendars",
      ],
    },
    otherSites: {
      h2: "Other official websites of government bodies",
    },
    schema: {
      description:
        "Official section of the Kashkadarya regional administration on gov.uz (qashqadaryo): phone +99875 221-13-40, trust line +99875 221-07-60, email info[at]qashqadaryo.uz, address 180100, Qarshi, Mustaqillik square 1, links to city and district sections on gov.uz, social media (YouTube, Facebook, Instagram, X, Telegram), buses 1, 2, 4, 7, 13, 16, 20, 22, 295, weekday reception.",
      orgName: "Kashkadarya regional administration",
      sameAs: [
        "https://gov.uz/en/qashqadaryo",
        "https://gov.uz/ru/qashqadaryo",
        "https://gov.uz/oz/qashqadaryo",
      ],
    },
    faq: {
      h2: "Frequently asked questions",
      items: [
        {
          q: "Where is the official section of the Kashkadarya regional administration?",
          a: "On the government portal: https://gov.uz/en/qashqadaryo (also https://gov.uz/ru/qashqadaryo and https://gov.uz/oz/qashqadaryo). The catalog link matches your interface language.",
        },
        {
          q: "What phones, email, address and transport are listed for contact?",
          a: "Phone +99875 221-13-40, trust line +99875 221-07-60, email info@qashqadaryo.uz, address 180100, Qarshi, Mustaqillik square 1; cities, districts, social media and bus routes — in the contacts block on this page (per govinfo.uz); see “All numbers” on gov.uz for the full list.",
        },
        {
          q: "Where are surveys and appeal statistics?",
          a: "Under Contact on gov.uz/qashqadaryo — survey and statistics of appeals when published on the portal.",
        },
      ],
    },
  },
  uz: {
    pageTitle: "Qashqadaryo viloyati hokimligi",
    intro: [
      "Qashqadaryo viloyati hokimligi — viloyat hududidagi ijroiya hokimiyati organi; qonunchilik, Prezident va Vazirlar Kengashi qarorlarini amalga oshiradi, hududning ijtimoiy-iqtisodiy rivojlanishini taʼminlaydi.",
      "gov.uz «qashqadaryo» boʻlimi (https://gov.uz/oz/qashqadaryo) da hokimiyat haqida: tuzilma, rahbariyat, markaziy apparat, tizimdagi tashkilotlar, hududiy boshqarmalar. «Faoliyat»da roʻyxatdan oʻtish va boshqa yoʻnalishlar. «Davlat xizmatlari», «Hujjatlar» va «Raqamli davlat» boʻlimlari. Matbuot: yangiliklar, press-relizlar, tadbirlar taqvimi, majlislar. Aloqa: barcha raqamlar, soʻrovnomalar, murojaatlar statistikasi. UzGovInfo (govinfo.uz) va gov.uz boʻlimi boʻyicha: telefon +99875 221-13-40, ishonch telefoni +99875 221-07-60, elektron pochta info@qashqadaryo.uz, manzil 180100, Qarshi, Mustaqillik maydoni, 1; shahar va tumanlar havolalari — kontaktlar blokida; toʻliq raqamlar — gov.uz dagi «Barcha raqamlar». Menyu kengayishi mumkin.",
      "Qashqadaryo viloyati fuqarolari va tashkilotlari uchun rasmiy manba.",
    ],
    officialSite: {
      h2: "gov.uz dagi rasmiy boʻlim",
      ctaText: "Qashqadaryo viloyati hokimligi boʻlimiga oʻtish →",
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
      phones: [{ display: "+99875 221-13-40", href: "tel:+998752211340" }],
      trustPhone: { display: "+99875 221-07-60", href: "tel:+998752210760" },
      email: { display: "info@qashqadaryo.uz", href: "mailto:info@qashqadaryo.uz" },
      territorialOffices: qashqadaryoTerritoryLinks.map(({ url, uz: label }) => ({ url, label })),
      social: [
        {
          id: "youtube",
          label: "YouTube",
          url: "https://www.youtube.com/c/qashvilhokimligi",
        },
        {
          id: "facebook",
          label: "Facebook",
          url: "https://www.facebook.com/qashqadaryovil.uz",
        },
        {
          id: "instagram",
          label: "Instagram",
          url: "https://www.instagram.com/qashvilhokimligi/",
        },
        { id: "twitter", label: "X (Twitter)", url: "https://twitter.com/Qashvilhokimli1" },
        { id: "telegram", label: "Telegram", url: "https://t.me/qvh_axboroti" },
      ],
      address: "180100, Qarshi, Mustaqillik maydoni, 1",
      transport: "Avtobuslar: 1, 2, 4, 7, 13, 16, 20, 22, 295-marshrutlar",
      hours: "Dushanba–juma",
      sourceAttribution: {
        dataSource:
          "Kontakt maʼlumotlari UzGovInfo portali (govinfo.uz), Qashqadaryo viloyati hokimligi sahifasidan olingan.",
        reuseNoticeBefore: "Ushbu sayt materiallaridan foydalanganda ",
        reuseLinkText: "saytga",
        reuseNoticeAfter: " havola qoʻyish majburiy.",
        reuseUrl: "https://gov.uz/oz/qashqadaryo",
      },
    },
    whatFind: {
      h2: "Rasmiy resursda nimalar bor",
      intro: "gov.uz/qashqadaryo viloyat hokimiyati va aloqa maʼlumotlarini birlashtiradi.",
      listLabel: "Odatda mavjud:",
      items: [
        {
          icon: "building",
          title: "Hokimiyat haqida",
          desc: "Tuzilma, rahbariyat, apparat, hududiy boshqarmalar",
        },
        {
          icon: "program",
          title: "Faoliyat",
          desc: "Roʻyxatdan oʻtish va boshqa yoʻnalishlar",
        },
        {
          icon: "globe",
          title: "Davlat xizmatlari",
          desc: "Davlat xizmatlari va elektron servislar",
        },
        {
          icon: "decree",
          title: "Hujjatlar",
          desc: "Meʼyoriy va boshqa hujjatlar",
        },
        {
          icon: "chart",
          title: "Raqamli davlat",
          desc: "Raqamli hukumat va ochiq maʼlumotlar",
        },
        {
          icon: "news",
          title: "Matbuot va aloqa",
          desc: "Yangiliklar, taqvim; soʻrovnomalar",
        },
      ],
      closing: "Menyu yangilanadi; gov.uz/qashqadaryo dan tekshiring.",
    },
    whyUse: {
      h2: "Nima uchun rasmiy boʻlimdan foydalanish kerak",
      intro:
        "gov.uz/qashqadaryo — Qashqadaryo viloyati hokimiyatining yagona davlat portali boʻyicha rasmiy kanali.",
      listLabel: "Quyidagilar uchun muhim:",
      items: [
        "viloyat yangiliklari va kontaktlarini qidiraydiganlar uchun",
        "davlat xizmatlari va murojaatlar bilan ishlovchilar uchun",
        "matbuot va tadbirlar taqvimi uchun",
      ],
    },
    otherSites: {
      h2: "Boshqa davlat organlarining rasmiy saytlari",
    },
    schema: {
      description:
        "Qashqadaryo viloyati hokimligining gov.uz portali boʻlimi (qashqadaryo): telefon +99875 221-13-40, ishonch telefoni +99875 221-07-60, elektron pochta info[at]qashqadaryo.uz, manzil 180100, Qarshi, Mustaqillik maydoni, 1, gov.uz dagi shahar va tumanlar havolalari, ijtimoiy tarmoqlar (YouTube, Facebook, Instagram, X, Telegram), avtobuslar 1, 2, 4, 7, 13, 16, 20, 22, 295, ish kunlari.",
      orgName: "Qashqadaryo viloyati hokimligi",
      sameAs: [
        "https://gov.uz/oz/qashqadaryo",
        "https://gov.uz/ru/qashqadaryo",
        "https://gov.uz/en/qashqadaryo",
      ],
    },
    faq: {
      h2: "Tez-tez beriladigan savollar",
      items: [
        {
          q: "Rasmiy boʻlim qayerda?",
          a: "https://gov.uz/oz/qashqadaryo (ru va en ham mavjud).",
        },
        {
          q: "Aloqa uchun qanday telefon, pochta, manzil va transport koʻrsatilgan?",
          a: "Telefon +99875 221-13-40, ishonch telefoni +99875 221-07-60, elektron pochta info@qashqadaryo.uz, manzil 180100, Qarshi, Mustaqillik maydoni, 1; shahar va tumanlar, ijtimoiy tarmoqlar va avtobuslar — sahifadagi kontaktlar blokida (govinfo.uz boʻyicha); toʻliq raqamlar — gov.uz dagi «Barcha raqamlar».",
        },
        {
          q: "Murojaatlar statistikasi qayerda?",
          a: "«Aloqa» boʻlimida — soʻrovnomalar va statistika.",
        },
      ],
    },
  },
};
