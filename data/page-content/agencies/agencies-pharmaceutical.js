/**
 * Контент страницы: Агентство по развитию фармацевтической отрасли при Минздраве
 * Единые ключи: pageTitle, intro, officialSite, whatFind, whyUse, faq
 */
export default {
  ru: {
    pageTitle: "Агентство по развитию фармацевтической отрасли при Министерстве здравоохранения Республики Узбекистан",
    intro: [
      "Агентство по развитию фармацевтической отрасли при Министерстве здравоохранения Республики Узбекистан создано для улучшения условий развития фармацевтической промышленности, повышения доступности качественных лекарств и медицинских изделий для населения и медучреждений. Официальный сайт на gov.uz предоставляет информацию о деятельности агентства.",
      "Агентство внедряет единую систему координации производства, импорта и реализации фармпродукции, регулирует деятельность фармацевтической отрасли и содействует развитию отечественного производства лекарств.",
      "На официальном сайте размещены новости, услуги, нормативные документы, информация о тендерах и контактные данные.",
    ],
    officialSite: {
      h2: "Официальный сайт",
      ctaText: "Перейти на официальный сайт Агентства по развитию фармацевтики →",
    },
    contacts: {
      h2: "Контакты",
      labels: {
        phone: "Телефон",
        email: "Эл. адрес",
        social: "Социальные сети",
        address: "Адрес",
      },
      phones: [{ display: "+99855 902-22-22", href: "tel:+998559022222" }],
      email: { display: "info@uzpharmagency.uz", href: "mailto:info@uzpharmagency.uz" },
      social: [
        { id: "telegram", label: "Telegram", url: "https://t.me/uzpharm_agency" },
        { id: "facebook", label: "Facebook", url: "https://www.facebook.com/uzpharmagency" },
        { id: "instagram", label: "Instagram", url: "https://www.instagram.com/uzpharm_agency/" },
        {
          id: "youtube",
          label: "YouTube",
          url: "https://www.youtube.com/channel/UC1rJ69k0aD_EEs9PbWLyNYQ",
        },
      ],
      address: "111809, Ташкентская область, Богзор, дом",
      sourceAttribution: {
        dataSource:
          "Контактные данные приведены по сведениям официального портала Республики Узбекистан (gov.uz), раздел Агентства по развитию фармацевтической отрасли (uzpharmagency).",
        reuseNoticeBefore: "При использовании материалов с данного сайта ссылка на ",
        reuseLinkText: "сайт",
        reuseNoticeAfter: " обязательна.",
        reuseUrl: "https://gov.uz/uz/uzpharmagency",
      },
    },
    whatFind: {
      h2: "Что можно найти на официальном сайте",
      intro: "На официальном сайте Агентства представлена информация о развитии фармацевтической отрасли и деятельности агентства.",
      listLabel: "На сайте можно найти:",
      items: [
        { icon: "building", title: "Деятельность агентства", desc: "Функции и направления работы" },
        { icon: "decree", title: "Нормативные документы", desc: "Правовая база в сфере фармацевтики" },
        { icon: "globe", title: "Услуги и тендеры", desc: "Информация о закупках и процедурах" },
        { icon: "program", title: "Открытый бюджет", desc: "Данные о финансировании" },
        { icon: "news", title: "Новости отрасли", desc: "События, регистрация и рынок лекарств" },
        { icon: "shield", title: "Качество и контроль", desc: "Надзор за фармпродукцией и безопасностью" },
      ],
      closing: "Сайт предназначен для производителей лекарств, импортёров, медучреждений и всех, кто интересуется фармацевтической отраслью.",
    },
    whyUse: {
      h2: "Зачем использовать официальный сайт",
      intro: "Официальный сайт Агентства является надёжным источником информации о регулировании фармацевтической отрасли, регистрации лекарств и господдержке в Узбекистане.",
      listLabel: "Использование сайта особенно важно для:",
      items: [
        "фармацевтических производителей и импортёров",
        "получения информации о регистрации лекарств",
        "ознакомления с тендерами и закупками",
        "медицинских учреждений",
      ],
    },
    otherSites: {
      h2: "Другие официальные сайты государственных органов",
    },
    schema: {
      description:
        "Официальный сайт Агентства по развитию фармацевтической отрасли при Минздраве Узбекистана: телефон +99855 902-22-22, электронная почта info[at]uzpharmagency.uz, адрес 111809, Ташкентская область, Богзор, дом, ссылки на социальные сети.",
      orgName: "Агентство по развитию фармацевтической отрасли",
      sameAs: "https://gov.uz/uz/uzpharmagency",
    },
    faq: {
      h2: "Часто задаваемые вопросы",
      items: [
        {
          q: "Где находится официальный сайт Агентства по развитию фармацевтики?",
          a: "Официальный сайт доступен на портале gov.uz в разделе uzpharmagency. Ссылка представлена на данной странице.",
        },
        {
          q: "Какие функции выполняет Агентство по развитию фармацевтики?",
          a: "Агентство развивает фармацевтическую отрасль, координирует производство и импорт лекарств, повышает доступность качественных медикаментов.",
        },
        {
          q: "Когда было создано Агентство?",
          a: "Агентство создано Указом Президента № ДП-5229 от 7 ноября 2017 года.",
        },
        {
          q: "Где узнать о тендерах и закупках в сфере фармацевтики?",
          a: "Объявления о закупках и связанные материалы публикуются в официальном разделе Агентства на gov.uz (uzpharmagency).",
        },
        {
          q: "При каком министерстве действует Агентство?",
          a: "Агентство по развитию фармацевтической отрасли работает при Министерстве здравоохранения Республики Узбекистан.",
        },
      ],
    },
  },
  en: {
    pageTitle: "The Agency for the Development of the Pharmaceutical Industry under the Ministry of Health of the Republic of Uzbekistan",
    intro: [
      "The Agency for the Development of the Pharmaceutical Industry under the Ministry of Health of the Republic of Uzbekistan was established to improve conditions for the development of the pharmaceutical industry and increase access to quality medicines and medical devices for the population and healthcare institutions. The official website on gov.uz provides information on the agency's activities.",
      "The Agency implements a unified system for coordinating the production, import and sale of pharmaceutical products, regulates the pharmaceutical industry and promotes the development of domestic drug production.",
      "The official website contains news, services, regulatory documents, tender information and contact details.",
    ],
    officialSite: {
      h2: "Official website",
      ctaText: "Go to the official Pharmaceutical Industry Development Agency website →",
    },
    contacts: {
      h2: "Contacts",
      labels: {
        phone: "Phone",
        email: "Email",
        social: "Social media",
        address: "Address",
      },
      phones: [{ display: "+99855 902-22-22", href: "tel:+998559022222" }],
      email: { display: "info@uzpharmagency.uz", href: "mailto:info@uzpharmagency.uz" },
      social: [
        { id: "telegram", label: "Telegram", url: "https://t.me/uzpharm_agency" },
        { id: "facebook", label: "Facebook", url: "https://www.facebook.com/uzpharmagency" },
        { id: "instagram", label: "Instagram", url: "https://www.instagram.com/uzpharm_agency/" },
        {
          id: "youtube",
          label: "YouTube",
          url: "https://www.youtube.com/channel/UC1rJ69k0aD_EEs9PbWLyNYQ",
        },
      ],
      address: "111809, Tashkent Region, Bogzor",
      sourceAttribution: {
        dataSource:
          "Contact details are based on the official portal of the Republic of Uzbekistan (gov.uz), Pharmaceutical Industry Development Agency section (uzpharmagency).",
        reuseNoticeBefore: "When reusing materials from this site, a link to the ",
        reuseLinkText: "website",
        reuseNoticeAfter: " is required.",
        reuseUrl: "https://gov.uz/en/uzpharmagency",
      },
    },
    whatFind: {
      h2: "What you can find on the official website",
      intro: "The official website of the Agency presents information on the development of the pharmaceutical industry and the agency's activities.",
      listLabel: "On the site you can find:",
      items: [
        { icon: "building", title: "Agency activities", desc: "Functions and areas of work" },
        { icon: "decree", title: "Regulatory documents", desc: "Legal framework in the pharmaceutical field" },
        { icon: "globe", title: "Services and tenders", desc: "Information on procurement and procedures" },
        { icon: "program", title: "Open budget", desc: "Funding data" },
        { icon: "news", title: "Industry news", desc: "Events, registration and the medicines market" },
        { icon: "shield", title: "Quality and oversight", desc: "Supervision of pharmaceutical products and safety" },
      ],
      closing: "The website is intended for drug manufacturers, importers, healthcare institutions and anyone interested in the pharmaceutical industry.",
    },
    whyUse: {
      h2: "Why use the official website",
      intro: "The official Agency website is a reliable source of information on pharmaceutical industry regulation, drug registration and state support in Uzbekistan.",
      listLabel: "Using the website is especially important for:",
      items: [
        "pharmaceutical manufacturers and importers",
        "obtaining information on drug registration",
        "familiarization with tenders and procurement",
        "healthcare institutions",
      ],
    },
    otherSites: {
      h2: "Other official websites of government bodies",
    },
    schema: {
      description:
        "Official website of the Agency for the Development of the Pharmaceutical Industry under the Ministry of Health of Uzbekistan: phone +99855 902-22-22, email info[at]uzpharmagency.uz, address 111809, Tashkent Region, Bogzor, social media links.",
      orgName: "Agency for the Development of the Pharmaceutical Industry",
      sameAs: "https://gov.uz/en/uzpharmagency",
    },
    faq: {
      h2: "Frequently asked questions",
      items: [
        {
          q: "Where is the official Pharmaceutical Industry Development Agency website?",
          a: "The official website is available on the gov.uz portal in the uzpharmagency section. The link is provided on this page.",
        },
        {
          q: "What functions does the Pharmaceutical Industry Development Agency perform?",
          a: "The Agency develops the pharmaceutical industry, coordinates drug production and import, and increases access to quality medicines.",
        },
        {
          q: "When was the Agency established?",
          a: "The Agency was established by Presidential Decree No. DP-5229 of November 7, 2017.",
        },
        {
          q: "Where can I find pharmaceutical tenders and procurement information?",
          a: "Procurement announcements and related materials are published in the Agency’s official section on gov.uz (uzpharmagency).",
        },
        {
          q: "Under which ministry does the Agency operate?",
          a: "The Agency for the Development of the Pharmaceutical Industry operates under the Ministry of Health of the Republic of Uzbekistan.",
        },
      ],
    },
  },
  uz: {
    pageTitle: "Oʻzbekiston Respublikasi Sogʻliqni saqlash vazirligi huzuridagi Farmatsevtika tarmogʻini rivojlantirish agentligi",
    intro: [
      "Oʻzbekiston Respublikasi Sogʻliqni saqlash vazirligi huzuridagi Farmatsevtika tarmogʻini rivojlantirish agentligi farmatsevtika sanoatini rivojlantirish sharoitlarini yaxshilash, aholi va sogʻliqni saqlash muassasalariga sifatli dori-darmonlar va tibbiy buyumlarning qulayligini oshirish uchun tashkil etilgan. gov.uz rasmiy saytida agentlik faoliyati haqida maʼlumot beriladi.",
      "Agentlik farmatsevtika mahsulotlarini ishlab chiqarish, import qilish va sotishni muvofiqlashtirishning yagona tizimini joriy etadi, farmatsevtika tarmogʻi faoliyatini tartibga soladi va mahalliy dori-darmonlar ishlab chiqarishni rivojlantirishga yordam beradi.",
      "Rasmiy saytda yangiliklar, xizmatlar, normativ hujjatlar, tenderlar haqida maʼlumotlar va bogʻlanish maʼlumotlari joylashtirilgan.",
    ],
    officialSite: {
      h2: "Rasmiy sayt",
      ctaText: "Farmatsevtika tarmogʻini rivojlantirish agentligi rasmiy saytiga oʻtish →",
    },
    contacts: {
      h2: "Kontaktlar",
      labels: {
        phone: "Telefon",
        email: "Elektron pochta",
        social: "Ijtimoiy tarmoqlar",
        address: "Manzil",
      },
      phones: [{ display: "+99855 902-22-22", href: "tel:+998559022222" }],
      email: { display: "info@uzpharmagency.uz", href: "mailto:info@uzpharmagency.uz" },
      social: [
        { id: "telegram", label: "Telegram", url: "https://t.me/uzpharm_agency" },
        { id: "facebook", label: "Facebook", url: "https://www.facebook.com/uzpharmagency" },
        { id: "instagram", label: "Instagram", url: "https://www.instagram.com/uzpharm_agency/" },
        {
          id: "youtube",
          label: "YouTube",
          url: "https://www.youtube.com/channel/UC1rJ69k0aD_EEs9PbWLyNYQ",
        },
      ],
      address: "111809, Toshkent viloyati, Bogʻzor, uy",
      sourceAttribution: {
        dataSource:
          "Kontakt maʼlumotlari Oʻzbekiston Respublikasining rasmiy portali (gov.uz), Farmatsevtika tarmogʻini rivojlantirish agentligi boʻlimi (uzpharmagency) maʼlumotlariga asoslangan.",
        reuseNoticeBefore: "Ushbu sayt materiallaridan foydalanganda ",
        reuseLinkText: "saytga",
        reuseNoticeAfter: " havola berish majburiy.",
        reuseUrl: "https://gov.uz/uz/uzpharmagency",
      },
    },
    whatFind: {
      h2: "Rasmiy saytda nimalarni topish mumkin",
      intro: "Agentlikning rasmiy saytida farmatsevtika tarmogʻini rivojlantirish va agentlik faoliyati haqida maʼlumotlar taqdim etilgan.",
      listLabel: "Saytda topish mumkin:",
      items: [
        { icon: "building", title: "Agentlik faoliyati", desc: "Funksiyalar va ish yoʻnalishlari" },
        { icon: "decree", title: "Normativ hujjatlar", desc: "Farmatsevtika sohasidagi huquqiy asos" },
        { icon: "globe", title: "Xizmatlar va tenderlar", desc: "Xaridlar va protseduralar haqida maʼlumot" },
        { icon: "program", title: "Ochiq byudjet", desc: "Moliyalashtirish maʼlumotlari" },
        { icon: "news", title: "Tarmoq yangiliklari", desc: "Voqealar, roʻyxatga olish va dori bozori" },
        { icon: "shield", title: "Sifat va nazorat", desc: "Farmatsevtika mahsulotlari va xavfsizlik nazorati" },
      ],
      closing: "Sayt dori-darmonlar ishlab chiqaruvchilari, importchilari, sogʻliqni saqlash muassasalari va farmatsevtika tarmogʻiga qiziqqanlar uchun moʻljallangan.",
    },
    whyUse: {
      h2: "Nima uchun rasmiy saytdan foydalanish kerak",
      intro: "Agentlikning rasmiy sayti Oʻzbekistonda farmatsevtika tarmogʻini tartibga solish, dori-darmonlarni roʻyxatga olish va davlat qoʻllab-quvvatlash haqida ishonchli axborot manbai hisoblanadi.",
      listLabel: "Saytdan foydalanish ayniqsa quyidagilar uchun muhim:",
      items: [
        "farmatsevtika ishlab chiqaruvchilari va importchilari uchun",
        "dori-darmonlarni roʻyxatga olish haqida maʼlumot olish",
        "tenderlar va xaridlar bilan tanishish",
        "sogʻliqni saqlash muassasalari uchun",
      ],
    },
    otherSites: {
      h2: "Boshqa davlat organlarining rasmiy saytlari",
    },
    schema: {
      description:
        "Oʻzbekiston Sogʻliqni saqlash vazirligi huzuridagi Farmatsevtika tarmogʻini rivojlantirish agentligining rasmiy sayti: telefon +99855 902-22-22, elektron pochta info[at]uzpharmagency.uz, manzil 111809, Toshkent viloyati, Bogʻzor, uy, ijtimoiy tarmoq havolalari.",
      orgName: "Farmatsevtika tarmogʻini rivojlantirish agentligi",
      sameAs: "https://gov.uz/uz/uzpharmagency",
    },
    faq: {
      h2: "Tez-tez beriladigan savollar",
      items: [
        {
          q: "Farmatsevtika tarmogʻini rivojlantirish agentligi rasmiy sayti qayerda joylashgan?",
          a: "Rasmiy sayt gov.uz portalidagi uzpharmagency boʻlimida mavjud. Havola ushbu sahifada keltirilgan.",
        },
        {
          q: "Farmatsevtika agentligi qanday funksiyalarni bajaradi?",
          a: "Agentlik farmatsevtika tarmogʻini rivojlantiradi, dori-darmonlar ishlab chiqarish va importni muvofiqlashtiradi, sifatli dori-darmonlarga kirish imkonini oshiradi.",
        },
        {
          q: "Agentlik qachon tashkil etilgan?",
          a: "Agentlik 2017-yil 7-noyabrdagi PF-5229-sonli Prezident qarori asosida tashkil etilgan.",
        },
        {
          q: "Farmatsevtika sohasidagi tenderlar va xaridlar haqida qayerdan bilish mumkin?",
          a: "Xaridlar eʼlonlari va tegishli materiallar gov.uz dagi agentlikning rasmiy boʻlimida (uzpharmagency) nashr etiladi.",
        },
        {
          q: "Agentlik qaysi vazirlik huzurida faoliyat yuritadi?",
          a: "Farmatsevtika tarmogʻini rivojlantirish agentligi Oʻzbekiston Respublikasi Sogʻliqni saqlash vazirligi huzurida ishlaydi.",
        },
      ],
    },
  },
};
