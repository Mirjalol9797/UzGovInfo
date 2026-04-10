/**
 * Контент страницы: Агентство по делам молодежи
 * Единые ключи: pageTitle, intro, officialSite, whatFind, whyUse, faq
 */
export default {
  ru: {
    pageTitle: "Агентство по делам молодежи Республики Узбекистан",
    intro: [
      "Агентство по делам молодежи Республики Узбекистан реализует государственную политику в сфере молодёжи: поддержка инициатив, гранты и субсидии, развитие предпринимательства среди молодых людей, международное сотрудничество. Официальный раздел на gov.uz/yoshlar содержит новости, программы и контакты.",
      "Агентство содействует социальной и правовой защите молодёжи, противодействию коррупции, равным возможностям и развитию молодёжного медиахолдинга и исследовательских институтов.",
      "На сайте размещены нормативные документы, объявления о конкурсах, горячая линия и информация для региональных отделений.",
    ],
    officialSite: {
      h2: "Официальный сайт",
      ctaText: "Перейти на официальный раздел Агентства по делам молодежи →",
    },
    contacts: {
      h2: "Контакты",
      labels: {
        trustPhone: "Телефон доверия",
        email: "Эл. адрес",
        social: "Социальные сети",
        address: "Адрес",
        transport: "Транспорт",
        hours: "Рабочее время",
      },
      trustPhone: { display: "1093", href: "tel:1093" },
      email: { display: "info@yoshlar.gov.uz", href: "mailto:info@yoshlar.gov.uz" },
      social: [
        { id: "instagram", label: "Instagram", url: "https://www.instagram.com/yoshlaragentligi/" },
        { id: "facebook", label: "Facebook", url: "https://www.facebook.com/yoshlaragentligirasmiy/" },
        { id: "telegram", label: "Telegram", url: "https://t.me/yoshlaragentligi" },
        {
          id: "youtube",
          label: "YouTube",
          url: "https://www.youtube.com/channel/UCxE5i6ogttXt5-AKUpJn_jA/featured",
        },
        { id: "twitter", label: "Twitter / X", url: "https://x.com/yoshlaruz" },
      ],
      address: "100011, Ташкент, ул. Навои, 11",
      transport:
        "Автобусы: № 115, 98, 28, 89, 44, 141, 53, 144, 46, 91\nМаршрутные такси: № 76\nАвтобусная остановка: Дворец искусств\nБлизлежащая станция метро: «Алишера Навои»",
      hours:
        "Рабочий день: понедельник-пятница\nРабочие часы: 9:00-18:00 (13:00-14:00 обед)",
      sourceAttribution: {
        dataSource:
          "Контактные данные приведены по сведениям официального портала Республики Узбекистан (gov.uz), раздел Агентства по делам молодежи (yoshlar).",
        reuseNoticeBefore: "При использовании материалов с данного сайта ссылка на ",
        reuseLinkText: "сайт",
        reuseNoticeAfter: " обязательна.",
        reuseUrl: "https://gov.uz/ru/yoshlar",
      },
    },
    whatFind: {
      h2: "Что можно найти на официальном сайте",
      intro: "На официальном сайте Агентства представлена информация о молодёжной политике и поддержке молодых людей в Узбекистане.",
      listLabel: "На сайте можно найти:",
      items: [
        { icon: "people", title: "Программы и гранты", desc: "Государственная поддержка инициатив молодёжи" },
        { icon: "decree", title: "Нормативные документы", desc: "Правовая база молодёжной политики" },
        { icon: "globe", title: "Международное сотрудничество", desc: "Обмены и партнёрские программы" },
        { icon: "program", title: "Конкурсы и проекты", desc: "Отборы, субсидии и стартапы" },
        { icon: "news", title: "Новости и события", desc: "Анонсы мероприятий для молодёжи" },
        { icon: "building", title: "Структура и контакты", desc: "Руководство, региональные отделения, горячая линия" },
      ],
      closing: "Сайт предназначен для молодых людей, НКО, предпринимателей и всех, кто участвует в молодёжных программах.",
    },
    whyUse: {
      h2: "Зачем использовать официальный сайт",
      intro: "Официальный сайт Агентства — надёжный источник информации о грантах, конкурсах и мерах поддержки молодёжи в Узбекистане.",
      listLabel: "Использование сайта особенно важно для:",
      items: [
        "участников грантовых программ",
        "молодых предпринимателей",
        "волонтёров и лидеров молодёжных организаций",
        "получения актуальных новостей и документов",
      ],
    },
    otherSites: {
      h2: "Другие официальные сайты государственных органов",
    },
    schema: {
      description:
        "Официальная страница Агентства по делам молодежи Республики Узбекистан на портале gov.uz: телефон доверия 1093, электронная почта info[at]yoshlar.gov.uz, адрес 100011, Ташкент, ул. Навои, 11, транспорт, рабочее время и ссылки на социальные сети.",
      orgName: "Агентство по делам молодежи Республики Узбекистан",
      sameAs: "https://gov.uz/ru/yoshlar",
    },
    faq: {
      h2: "Часто задаваемые вопросы",
      items: [
        {
          q: "Где находится официальный сайт Агентства по делам молодежи?",
          a: "Официальный раздел размещён на портале gov.uz (yoshlar). Ссылка представлена на данной странице.",
        },
        {
          q: "Какие услуги оказывает Агентство?",
          a: "Агентство поддерживает молодёжные инициативы, распределяет гранты и субсидии, развивает предпринимательство и международное сотрудничество.",
        },
        {
          q: "Есть ли горячая линия?",
          a: "Контакты и телефон доверия указаны на официальной странице Агентства на gov.uz.",
        },
        {
          q: "Где узнать о грантах и конкурсах для молодёжи?",
          a: "Программы, гранты и объявления о конкурсах публикуются в официальном разделе Агентства на gov.uz (yoshlar).",
        },
        {
          q: "Есть ли региональные отделения Агентства?",
          a: "Информация о структуре и контактах региональных подразделений размещена на официальной странице на портале gov.uz.",
        },
      ],
    },
  },
  en: {
    pageTitle: "Youth Affairs Agency of the Republic of Uzbekistan",
    intro: [
      "The Youth Affairs Agency of the Republic of Uzbekistan implements state policy on youth: support for initiatives, grants and subsidies, entrepreneurship among young people, and international cooperation. The official section on gov.uz/yoshlar contains news, programmes and contacts.",
      "The Agency promotes social and legal protection of youth, anti-corruption efforts, equal opportunities, and the development of youth media and research institutions.",
      "The site publishes regulatory documents, competition announcements, a helpline and information for regional offices.",
    ],
    officialSite: {
      h2: "Official website",
      ctaText: "Go to the official Youth Affairs Agency section →",
    },
    contacts: {
      h2: "Contacts",
      labels: {
        trustPhone: "Trust line",
        email: "Email",
        social: "Social media",
        address: "Address",
        transport: "Transport",
        hours: "Working hours",
      },
      trustPhone: { display: "1093", href: "tel:1093" },
      email: { display: "info@yoshlar.gov.uz", href: "mailto:info@yoshlar.gov.uz" },
      social: [
        { id: "instagram", label: "Instagram", url: "https://www.instagram.com/yoshlaragentligi/" },
        { id: "facebook", label: "Facebook", url: "https://www.facebook.com/yoshlaragentligirasmiy/" },
        { id: "telegram", label: "Telegram", url: "https://t.me/yoshlaragentligi" },
        {
          id: "youtube",
          label: "YouTube",
          url: "https://www.youtube.com/channel/UCxE5i6ogttXt5-AKUpJn_jA/featured",
        },
        { id: "twitter", label: "Twitter / X", url: "https://x.com/yoshlaruz" },
      ],
      address: "100011, Tashkent, Navoi Street, 11",
      transport:
        "Buses: 115, 98, 28, 89, 44, 141, 53, 144, 46, 91\nRoute taxi: 76\nBus stop: Palace of Arts\nNearest metro station: Alisher Navoi",
      hours: "Working day: Monday-Friday\nWorking hours: 9:00-18:00 (13:00-14:00 lunch)",
      sourceAttribution: {
        dataSource:
          "Contact details are based on the official portal of the Republic of Uzbekistan (gov.uz), Youth Affairs Agency section (yoshlar).",
        reuseNoticeBefore: "When reusing materials from this site, a link to the ",
        reuseLinkText: "website",
        reuseNoticeAfter: " is required.",
        reuseUrl: "https://gov.uz/en/yoshlar",
      },
    },
    whatFind: {
      h2: "What you can find on the official website",
      intro: "The official website of the Agency presents information on youth policy and support for young people in Uzbekistan.",
      listLabel: "On the site you can find:",
      items: [
        { icon: "people", title: "Programmes and grants", desc: "State support for youth initiatives" },
        { icon: "decree", title: "Regulatory documents", desc: "Legal framework for youth policy" },
        { icon: "globe", title: "International cooperation", desc: "Exchanges and partnership programmes" },
        { icon: "program", title: "Competitions and projects", desc: "Selections, subsidies and startups" },
        { icon: "news", title: "News and events", desc: "Announcements for young people" },
        { icon: "building", title: "Structure and contacts", desc: "Leadership, regional offices, helpline" },
      ],
      closing: "The website is intended for young people, NGOs, entrepreneurs and everyone involved in youth programmes.",
    },
    whyUse: {
      h2: "Why use the official website",
      intro: "The official Agency website is a reliable source of information on grants, competitions and youth support measures in Uzbekistan.",
      listLabel: "Using the website is especially important for:",
      items: [
        "participants in grant programmes",
        "young entrepreneurs",
        "volunteers and youth organisation leaders",
        "obtaining up-to-date news and documents",
      ],
    },
    otherSites: {
      h2: "Other official websites of government bodies",
    },
    schema: {
      description:
        "Official page of the Youth Affairs Agency of the Republic of Uzbekistan on the gov.uz portal: trust line 1093, email info[at]yoshlar.gov.uz, address 100011, Tashkent, Navoi Street, 11, transport, working hours and social media links.",
      orgName: "Youth Affairs Agency of the Republic of Uzbekistan",
      sameAs: "https://gov.uz/en/yoshlar",
    },
    faq: {
      h2: "Frequently asked questions",
      items: [
        {
          q: "Where is the official Youth Affairs Agency website?",
          a: "The official section is on the gov.uz portal (yoshlar). The link is provided on this page.",
        },
        {
          q: "What services does the Agency provide?",
          a: "The Agency supports youth initiatives, distributes grants and subsidies, develops entrepreneurship and international cooperation.",
        },
        {
          q: "Is there a helpline?",
          a: "Contacts and trust line numbers are listed on the Agency's official page on gov.uz.",
        },
        {
          q: "Where can I find youth grants and competitions?",
          a: "Programmes, grants and competition announcements are published in the Agency’s official section on gov.uz (yoshlar).",
        },
        {
          q: "Does the Agency have regional offices?",
          a: "Information on structure and contacts of regional offices is available on the official page on the gov.uz portal.",
        },
      ],
    },
  },
  uz: {
    pageTitle: "Oʻzbekiston Respublikasi Yoshlar ishlari agentligi",
    intro: [
      "Oʻzbekiston Respublikasi Yoshlar ishlari agentligi yoshlar siyosatini amalga oshiradi: tashabbuslarni qoʻllab-quvvatlash, grantlar va subsidiyalar, yoshlarning tadbirkorligini rivojlantirish, xalqaro hamkorlik. gov.uz/yoshlar rasmiy boʻlimida yangiliklar, dasturlar va kontaktlar joylashtirilgan.",
      "Agentlik yoshlarning ijtimoiy va huquqiy himoyasini, korrupsiyaga qarshi kurashni, teng imkoniyatlarni ragʻbatlantirishni va yoshlar ommaviy axborot vositalari hamda tadqiqot muassasalarini rivojlantirishni qoʻllab-quvvatlaydi.",
      "Saytda normativ hujjatlar, tanlov eʼlonlari, ishonch telefoni va hududiy boʻlimlar uchun maʼlumotlar mavjud.",
    ],
    officialSite: {
      h2: "Rasmiy sayt",
      ctaText: "Yoshlar ishlari agentligi rasmiy boʻlimiga oʻtish →",
    },
    contacts: {
      h2: "Kontaktlar",
      labels: {
        trustPhone: "Ishonch telefoni",
        email: "Elektron pochta",
        social: "Ijtimoiy tarmoqlar",
        address: "Manzil",
        transport: "Transport",
        hours: "Ish vaqti",
      },
      trustPhone: { display: "1093", href: "tel:1093" },
      email: { display: "info@yoshlar.gov.uz", href: "mailto:info@yoshlar.gov.uz" },
      social: [
        { id: "instagram", label: "Instagram", url: "https://www.instagram.com/yoshlaragentligi/" },
        { id: "facebook", label: "Facebook", url: "https://www.facebook.com/yoshlaragentligirasmiy/" },
        { id: "telegram", label: "Telegram", url: "https://t.me/yoshlaragentligi" },
        {
          id: "youtube",
          label: "YouTube",
          url: "https://www.youtube.com/channel/UCxE5i6ogttXt5-AKUpJn_jA/featured",
        },
        { id: "twitter", label: "Twitter / X", url: "https://x.com/yoshlaruz" },
      ],
      address: "100011, Toshkent, Navoiy ko'chasi, 11",
      transport:
        "Avtobuslar: № 115, 98, 28, 89, 44, 141, 53, 144, 46, 91\nMarshrut taksilar: № 76\nAvtobus bekati: San'at saroyi bekati\nYaqin metro bekati: Alisher Navoiy metro bekati",
      hours: "Ish kuni: dushanba-juma\nIsh soatlari: 9:00-18:00 (13:00-14:00 tushlik)",
      sourceAttribution: {
        dataSource:
          "Kontakt ma'lumotlari O'zbekiston Respublikasining rasmiy portali (gov.uz), Yoshlar ishlari agentligi bo'limi (yoshlar) ma'lumotlariga asoslangan.",
        reuseNoticeBefore: "Ushbu sayt materiallaridan foydalanganda ",
        reuseLinkText: "saytga",
        reuseNoticeAfter: " havola berish majburiy.",
        reuseUrl: "https://gov.uz/oz/yoshlar",
      },
    },
    whatFind: {
      h2: "Rasmiy saytda nimalarni topish mumkin",
      intro: "Agentlikning rasmiy saytida Oʻzbekistonda yoshlar siyosati va yoshlarni qoʻllab-quvvatlash haqida maʼlumotlar taqdim etilgan.",
      listLabel: "Saytda topish mumkin:",
      items: [
        { icon: "people", title: "Dasturlar va grantlar", desc: "Yoshlar tashabbuslarining davlat qoʻllab-quvvatlashi" },
        { icon: "decree", title: "Normativ hujjatlar", desc: "Yoshlar siyosati huquqiy asosi" },
        { icon: "globe", title: "Xalqaro hamkorlik", desc: "Almashinuvlar va hamkorlik dasturlari" },
        { icon: "program", title: "Tanlovlar va loyihalar", desc: "Saralash, subsidiyalar va startaplar" },
        { icon: "news", title: "Yangiliklar va tadbirlar", desc: "Yoshlar uchun eʼlonlar" },
        { icon: "building", title: "Tuzilma va kontaktlar", desc: "Rahbariyat, hududiy boʻlimlar, ishonch telefoni" },
      ],
      closing: "Sayt yoshlar, NNTlar, tadbirkorlar va yoshlar dasturlarida ishtirok etuvchilar uchun moʻljallangan.",
    },
    whyUse: {
      h2: "Nima uchun rasmiy saytdan foydalanish kerak",
      intro: "Agentlikning rasmiy sayti Oʻzbekistonda grantlar, tanlovlar va yoshlarni qoʻllab-quvvatlash choralari haqida ishonchli axborot manbai hisoblanadi.",
      listLabel: "Saytdan foydalanish ayniqsa quyidagilar uchun muhim:",
      items: [
        "grant dasturlari ishtirokchilari uchun",
        "yosh tadbirkorlar uchun",
        "volontyorlar va yoshlar tashkilotlari yetakchilari uchun",
        "dolzarb yangiliklar va hujjatlarni olish",
      ],
    },
    otherSites: {
      h2: "Boshqa davlat organlarining rasmiy saytlari",
    },
    schema: {
      description:
        "gov.uz portalidagi Oʻzbekiston Respublikasi Yoshlar ishlari agentligining rasmiy sahifasi: ishonch telefoni 1093, elektron pochta info[at]yoshlar.gov.uz, manzil 100011, Toshkent, Navoiy ko'chasi, 11, transport, ish vaqti va ijtimoiy tarmoq havolalari.",
      orgName: "Oʻzbekiston Respublikasi Yoshlar ishlari agentligi",
      sameAs: "https://gov.uz/uz/yoshlar",
    },
    faq: {
      h2: "Tez-tez beriladigan savollar",
      items: [
        {
          q: "Yoshlar ishlari agentligining rasmiy sayti qayerda joylashgan?",
          a: "Rasmiy boʻlim gov.uz portali (yoshlar) da joylashgan. Havola ushbu sahifada keltirilgan.",
        },
        {
          q: "Agentlik qanday xizmatlar koʻrsatadi?",
          a: "Agentlik yoshlar tashabbuslarini qoʻllab-quvvatlaydi, grantlar va subsidiyalar ajratadi, tadbirkorlik va xalqaro hamkorlikni rivojlantiradi.",
        },
        {
          q: "Ishonch telefoni bormi?",
          a: "Kontaktlar va ishonch telefoni raqamlari gov.uz dagi agentlikning rasmiy sahifasida keltirilgan.",
        },
        {
          q: "Yoshlar uchun grantlar va tanlovlar haqida qayerdan bilish mumkin?",
          a: "Dasturlar, grantlar va tanlov eʼlonlari gov.uz dagi agentlikning rasmiy boʻlimida (yoshlar) nashr etiladi.",
        },
        {
          q: "Agentlikning hududiy boʻlinmalari bormi?",
          a: "Tuzilma va hududiy boʻlimlar kontaktlari haqidagi maʼlumotlar gov.uz portali boʻyicha rasmiy sahifada joylashtirilgan.",
        },
      ],
    },
  },
};
