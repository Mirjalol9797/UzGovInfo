/**
 * Контент страницы: Агентство «Узархив» при Министерстве юстиции
 * Единые ключи: pageTitle, intro, officialSite, whatFind, whyUse, faq
 */
export default {
  ru: {
    pageTitle: "Агентство «Узархив» при Министерстве юстиции Республики Узбекистан",
    intro: [
      "Агентство «Узархив» при Министерстве юстиции Республики Узбекистан обеспечивает хранение, учёт и использование архивных документов государственных органов и организаций. Официальный сайт uzarxiv.uz предоставляет доступ к архивной информации и услугам агентства.",
      "Агентство проводит работу по обеспечению сохранности архивных фондов, реализации права граждан на доступ к архивной информации, организации научно-справочного аппарата и внедрению цифровых технологий в архивное дело.",
      "Через официальный сайт граждане и организации могут получить информацию об архивных услугах, порядке доступа к документам и деятельности агентства.",
    ],
    officialSite: {
      h2: "Официальный сайт",
      ctaText: "Перейти на официальный сайт Узархив →",
    },
    contacts: {
      h2: "Контакты",
      labels: {
        phone: "Телефон",
        trustPhone: "Телефон доверия",
        email: "Эл. адрес",
        social: "Социальные сети",
        address: "Адрес",
        transport: "Транспорт",
        hours: "Рабочее время",
      },
      phones: [{ display: "+99855 503-01-50", href: "tel:+998555030150" }],
      trustPhone: {
        display: "+99855 503-01-50 (118)",
        href: "tel:+998555030150",
      },
      email: { display: "uzarchive@archive.uz", href: "mailto:uzarchive@archive.uz" },
      social: [
        { id: "facebook", label: "Facebook", url: "https://www.facebook.com/uzarxiv/" },
        { id: "instagram", label: "Instagram", url: "https://www.instagram.com/uzarxiv/" },
        { id: "telegram", label: "Telegram", url: "https://t.me/uzarxivs" },
        {
          id: "telegram",
          label: "Telegram (бот-советник)",
          url: "https://t.me/arxiv_maslaxatchisibot",
        },
        {
          id: "telegram",
          label: "Telegram (обращение директору)",
          url: "https://t.me/direktorga_murojaat",
        },
      ],
      address: "г. Ташкент, ул. Чиланзарская, дом 2",
      transport:
        "Автобусы: № 84, 103\nМаршрутное такси: 81m\nАвтобусная остановка: киностудия «Узбекфильм»\nБлижайшая станция метро: «Новза»",
      hours:
        "Рабочие дни: с понедельника по пятницу\nРабочее время: 9:00–13:00, 14:00–18:00",
      sourceAttribution: {
        dataSource:
          "Контактные данные приведены по сведениям официального портала Республики Узбекистан (gov.uz), раздел «Узархив».",
        reuseNoticeBefore: "При использовании материалов с данного сайта ссылка на ",
        reuseLinkText: "сайт",
        reuseNoticeAfter: " обязательна.",
        reuseUrl: "https://gov.uz/uz/archive",
      },
    },
    whatFind: {
      h2: "Что можно найти на официальном сайте",
      intro: "На официальном сайте агентства «Узархив» представлена информация об архивных фондах, услугах и порядке доступа к документам.",
      listLabel: "На сайте можно найти:",
      items: [
        { icon: "decree", title: "Архивные документы", desc: "Информация о фондах и документах" },
        { icon: "building", title: "Услуги агентства", desc: "Оказание архивных услуг" },
        { icon: "globe", title: "Доступ к архивам", desc: "Порядок обращения за документами" },
        { icon: "law", title: "Нормативные документы", desc: "Законодательство в сфере архивов" },
        { icon: "news", title: "Новости и объявления", desc: "Актуальная информация о деятельности" },
        { icon: "people", title: "Контакты и обратная связь", desc: "Связь с агентством и приём обращений" },
      ],
      closing: "Сайт предназначен для граждан, исследователей и организаций, которым необходим доступ к архивной информации.",
    },
    whyUse: {
      h2: "Зачем использовать официальный сайт",
      intro: "Официальный сайт Узархив является надёжным источником информации об архивных услугах и порядке доступа к документам государственных архивов Узбекистана.",
      listLabel: "Использование сайта особенно важно для:",
      items: [
        "получения архивных справок и выписок",
        "ознакомления с архивными фондами",
        "исследователей и историков",
        "организаций при запросе документов",
      ],
    },
    otherSites: {
      h2: "Другие официальные сайты государственных органов",
    },
    schema: {
      description:
        "Официальный сайт агентства «Узархив» при Министерстве юстиции Узбекистана: телефон +99855 503-01-50, телефон доверия +99855 503-01-50 (доб. 118), электронная почта uzarchive[at]archive.uz, адрес г. Ташкент, ул. Чиланзарская, дом 2, проезд, рабочее время и ссылки на социальные сети.",
      orgName: "Агентство «Узархив»",
      sameAs: "https://uzarxiv.uz",
    },
    faq: {
      h2: "Часто задаваемые вопросы",
      items: [
        {
          q: "Где находится официальный сайт Узархив?",
          a: "Официальный сайт доступен по адресу uzarxiv.uz. Ссылка представлена на данной странице.",
        },
        {
          q: "Какие услуги оказывает агентство Узархив?",
          a: "Агентство обеспечивает хранение, учёт архивных документов и предоставляет доступ к архивной информации.",
        },
        {
          q: "Как получить доступ к архивным документам?",
          a: "Порядок получения доступа к архивным документам описан на официальном сайте агентства.",
        },
        {
          q: "Доступны ли электронные услуги Узархив?",
          a: "Перечень онлайн-сервисов и форм обращений размещён на официальном сайте uzarxiv.uz.",
        },
        {
          q: "К какому ведомству относится агентство?",
          a: "Агентство «Узархив» действует при Министерстве юстиции Республики Узбекистан; структура и контакты указаны на официальном сайте.",
        },
      ],
    },
  },
  en: {
    pageTitle: "«Uzarxiv» Agency under the Ministry of Justice of the Republic of Uzbekistan",
    intro: [
      "The «Uzarxiv» Agency under the Ministry of Justice of the Republic of Uzbekistan ensures the storage, accounting and use of archival documents of state bodies and organizations. The official website uzarxiv.uz provides access to archival information and agency services.",
      "The Agency carries out work to ensure the safety of archival funds, implement citizens' right of access to archival information, organize reference systems and introduce digital technologies in archival affairs.",
      "Through the official website, citizens and organizations can obtain information on archival services, the procedure for access to documents and the agency's activities.",
    ],
    officialSite: {
      h2: "Official website",
      ctaText: "Go to the official Uzarxiv website →",
    },
    contacts: {
      h2: "Contacts",
      labels: {
        phone: "Phone",
        trustPhone: "Trust line",
        email: "Email",
        social: "Social media",
        address: "Address",
        transport: "Transport",
        hours: "Working hours",
      },
      phones: [{ display: "+99855 503-01-50", href: "tel:+998555030150" }],
      trustPhone: {
        display: "+99855 503-01-50 (118)",
        href: "tel:+998555030150",
      },
      email: { display: "uzarchive@archive.uz", href: "mailto:uzarchive@archive.uz" },
      social: [
        { id: "facebook", label: "Facebook", url: "https://www.facebook.com/uzarxiv/" },
        { id: "instagram", label: "Instagram", url: "https://www.instagram.com/uzarxiv/" },
        { id: "telegram", label: "Telegram", url: "https://t.me/uzarxivs" },
        {
          id: "telegram",
          label: "Telegram (advisory bot)",
          url: "https://t.me/arxiv_maslaxatchisibot",
        },
        {
          id: "telegram",
          label: "Telegram (message to the director)",
          url: "https://t.me/direktorga_murojaat",
        },
      ],
      address: "Tashkent, Chilanzar Street, building 2",
      transport:
        "Buses: 84, 103\nRoute taxi: 81m\nBus stop: Uzbekfilm film studio\nNearest metro: Novza",
      hours: "Working days: Monday to Friday\nHours: 9:00–13:00, 14:00–18:00",
      sourceAttribution: {
        dataSource:
          "Contact details are based on the official portal of the Republic of Uzbekistan (gov.uz), Uzarxiv section.",
        reuseNoticeBefore: "When reusing materials from this site, a link to the ",
        reuseLinkText: "website",
        reuseNoticeAfter: " is required.",
        reuseUrl: "https://gov.uz/uz/archive",
      },
    },
    whatFind: {
      h2: "What you can find on the official website",
      intro: "The official website of the «Uzarxiv» Agency presents information on archival funds, services and the procedure for access to documents.",
      listLabel: "On the site you can find:",
      items: [
        { icon: "decree", title: "Archival documents", desc: "Information on funds and documents" },
        { icon: "building", title: "Agency services", desc: "Provision of archival services" },
        { icon: "globe", title: "Access to archives", desc: "Procedure for requesting documents" },
        { icon: "law", title: "Regulatory documents", desc: "Legislation in the field of archives" },
        { icon: "news", title: "News and announcements", desc: "Up-to-date information on activities" },
        { icon: "people", title: "Contacts and feedback", desc: "Contact the agency and submit requests" },
      ],
      closing: "The website is intended for citizens, researchers and organizations that need access to archival information.",
    },
    whyUse: {
      h2: "Why use the official website",
      intro: "The official Uzarxiv website is a reliable source of information on archival services and the procedure for access to Uzbekistan state archive documents.",
      listLabel: "Using the website is especially important for:",
      items: [
        "obtaining archival certificates and extracts",
        "familiarization with archival funds",
        "researchers and historians",
        "organizations when requesting documents",
      ],
    },
    otherSites: {
      h2: "Other official websites of government bodies",
    },
    schema: {
      description:
        "Official website of the Uzarxiv Agency under the Ministry of Justice of Uzbekistan: phone +99855 503-01-50, trust line +99855 503-01-50 (ext. 118), email uzarchive[at]archive.uz, address Tashkent, Chilanzar Street, building 2, transport, working hours and social media links.",
      orgName: "«Uzarxiv» Agency",
      sameAs: "https://uzarxiv.uz",
    },
    faq: {
      h2: "Frequently asked questions",
      items: [
        {
          q: "Where is the official Uzarxiv website?",
          a: "The official website is available at uzarxiv.uz. The link is provided on this page.",
        },
        {
          q: "What services does the Uzarxiv Agency provide?",
          a: "The Agency ensures the storage and accounting of archival documents and provides access to archival information.",
        },
        {
          q: "How to get access to archival documents?",
          a: "The procedure for obtaining access to archival documents is described on the official website of the Agency.",
        },
        {
          q: "Does Uzarxiv offer online services?",
          a: "The list of e-services and application forms is published on the official website uzarxiv.uz.",
        },
        {
          q: "Which ministry oversees the Agency?",
          a: "The Uzarxiv Agency operates under the Ministry of Justice of the Republic of Uzbekistan; structure and contacts are on the official website.",
        },
      ],
    },
  },
  uz: {
    pageTitle: "Oʻzbekiston Respublikasi Adliya vazirligi huzuridagi «Oʻzarxiv» agentligi",
    intro: [
      "Oʻzbekiston Respublikasi Adliya vazirligi huzuridagi «Oʻzarxiv» agentligi davlat organlari va tashkilotlar arxiv hujjatlarini saqlash, hisobga olish va ulardan foydalanishni taʼminlaydi. uzarxiv.uz rasmiy sayti arxiv maʼlumotlariga va agentlik xizmatlariga kirish imkonini beradi.",
      "Agentlik arxiv fondlarining saqlanishini taʼminlash, fuqarolarning arxiv maʼlumotlariga kirish huquqini amalga oshirish, ilmiy-nazorat apparatini tashkil etish va arxiv ishiga raqamli texnologiyalarni joriy etish boʻyicha ishlar olib boradi.",
      "Rasmiy sayt orqali fuqarolar va tashkilotlar arxiv xizmatlari, hujjatlarga kirish tartibi va agentlik faoliyati haqida maʼlumot olishlari mumkin.",
    ],
    officialSite: {
      h2: "Rasmiy sayt",
      ctaText: "Oʻzarxiv rasmiy saytiga oʻtish →",
    },
    contacts: {
      h2: "Kontaktlar",
      labels: {
        phone: "Telefon",
        trustPhone: "Ishonch telefoni",
        email: "Elektron pochta",
        social: "Ijtimoiy tarmoqlar",
        address: "Manzil",
        transport: "Transport",
        hours: "Ish vaqti",
      },
      phones: [{ display: "+99855 503-01-50", href: "tel:+998555030150" }],
      trustPhone: {
        display: "+99855 503-01-50 (118)",
        href: "tel:+998555030150",
      },
      email: { display: "uzarchive@archive.uz", href: "mailto:uzarchive@archive.uz" },
      social: [
        { id: "facebook", label: "Facebook", url: "https://www.facebook.com/uzarxiv/" },
        { id: "instagram", label: "Instagram", url: "https://www.instagram.com/uzarxiv/" },
        { id: "telegram", label: "Telegram", url: "https://t.me/uzarxivs" },
        {
          id: "telegram",
          label: "Telegram (maslahatchi-bot)",
          url: "https://t.me/arxiv_maslaxatchisibot",
        },
        {
          id: "telegram",
          label: "Telegram (direktorga murojaat)",
          url: "https://t.me/direktorga_murojaat",
        },
      ],
      address: "Toshkent sh., Chilonzor koʻchasi, 2-uy",
      transport:
        "Avtobuslar: № 84, 103\nMarshrut taksi: 81m\nAvtobus bekati: «Oʻzbekfilm» kinostudiyasi\nEng yaqin metro: «Novza»",
      hours:
        "Ish kunlari: dushanbadan jumagacha\nIsh vaqti: 9:00–13:00, 14:00–18:00",
      sourceAttribution: {
        dataSource:
          "Kontakt maʼlumotlari Oʻzbekiston Respublikasining rasmiy portali (gov.uz), «Oʻzarxiv» boʻlimi maʼlumotlariga asoslangan.",
        reuseNoticeBefore: "Ushbu sayt materiallaridan foydalanganda ",
        reuseLinkText: "saytga",
        reuseNoticeAfter: " havola berish majburiy.",
        reuseUrl: "https://gov.uz/uz/archive",
      },
    },
    whatFind: {
      h2: "Rasmiy saytda nimalarni topish mumkin",
      intro: "«Oʻzarxiv» agentligining rasmiy saytida arxiv fondlari, xizmatlar va hujjatlarga kirish tartibi haqida maʼlumotlar taqdim etilgan.",
      listLabel: "Saytda topish mumkin:",
      items: [
        { icon: "decree", title: "Arxiv hujjatlari", desc: "Fondlar va hujjatlar haqida maʼlumot" },
        { icon: "building", title: "Agentlik xizmatlari", desc: "Arxiv xizmatlarini koʻrsatish" },
        { icon: "globe", title: "Arxivlarga kirish", desc: "Hujjatlar soʻrash tartibi" },
        { icon: "law", title: "Normativ hujjatlar", desc: "Arxivlar sohasidagi qonunchilik" },
        { icon: "news", title: "Yangiliklar va eʼlonlar", desc: "Faoliyat haqida dolzarb maʼlumot" },
        { icon: "people", title: "Kontaktlar va aloqa", desc: "Agentlik bilan bogʻlanish va murojaatlar" },
      ],
      closing: "Sayt arxiv maʼlumotlariga kirish kerak boʻlgan fuqarolar, tadqiqotchilar va tashkilotlar uchun moʻljallangan.",
    },
    whyUse: {
      h2: "Nima uchun rasmiy saytdan foydalanish kerak",
      intro: "Oʻzarxiv rasmiy sayti Oʻzbekiston davlat arxivlari hujjatlariga arxiv xizmatlari va kirish tartibi haqida ishonchli axborot manbai hisoblanadi.",
      listLabel: "Saytdan foydalanish ayniqsa quyidagilar uchun muhim:",
      items: [
        "arxiv spravkalari va chiqindilarini olish",
        "arxiv fondlari bilan tanishish",
        "tadqiqotchilar va tarixchilar uchun",
        "hujjatlar soʻrashda tashkilotlar uchun",
      ],
    },
    otherSites: {
      h2: "Boshqa davlat organlarining rasmiy saytlari",
    },
    schema: {
      description:
        "Oʻzbekiston Adliya vazirligi huzuridagi «Oʻzarxiv» agentligining rasmiy sayti: telefon +99855 503-01-50, ishonch telefoni +99855 503-01-50 (118), elektron pochta uzarchive[at]archive.uz, manzil Toshkent sh., Chilonzor koʻchasi, 2-uy, transport, ish vaqti va ijtimoiy tarmoq havolalari.",
      orgName: "«Oʻzarxiv» agentligi",
      sameAs: "https://uzarxiv.uz",
    },
    faq: {
      h2: "Tez-tez beriladigan savollar",
      items: [
        {
          q: "Oʻzarxiv rasmiy sayti qayerda joylashgan?",
          a: "Rasmiy sayt uzarxiv.uz manzilida mavjud. Havola ushbu sahifada keltirilgan.",
        },
        {
          q: "Oʻzarxiv agentligi qanday xizmatlar koʻrsatadi?",
          a: "Agentlik arxiv hujjatlarini saqlash, hisobga olish va arxiv maʼlumotlariga kirish imkonini taʼminlaydi.",
        },
        {
          q: "Arxiv hujjatlariga qanday kirish mumkin?",
          a: "Arxiv hujjatlariga kirish tartibi agentlik rasmiy saytida tavsiflangan.",
        },
        {
          q: "Oʻzarxivda elektron xizmatlar bormi?",
          a: "Onlayn xizmatlar va murojaat shakllari roʻyxati uzarxiv.uz rasmiy saytida joylashtirilgan.",
        },
        {
          q: "Agentlik qaysi vazirlik tarkibida?",
          a: "«Oʻzarxiv» agentligi Oʻzbekiston Respublikasi Adliya vazirligi huzurida faoliyat yuritadi; tuzilma va kontaktlar rasmiy saytda keltirilgan.",
        },
      ],
    },
  },
};
