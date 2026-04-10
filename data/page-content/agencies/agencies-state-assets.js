/**
 * Контент страницы: Агентство по управлению государственными активами
 * Единые ключи: pageTitle, intro, officialSite, whatFind, whyUse, faq
 */
export default {
  ru: {
    pageTitle: "Агентство по управлению государственными активами Республики Узбекистан",
    intro: [
      "Агентство по управлению государственными активами Республики Узбекистан обеспечивает учёт, оценку, приватизацию и эффективное использование государственного имущества. Официальный сайт davaktiv.uz предоставляет информацию о продаже и аренде объектов госактивов, реестрах и процедурах.",
      "Агентство организует работу по управлению имуществом, находящимся в государственной собственности, координирует деятельность по приватизации и размещению информации для инвесторов и граждан.",
      "На сайте размещены нормативные документы, объявления о торгах, контакты и разделы электронных сервисов.",
    ],
    officialSite: {
      h2: "Официальный сайт",
      ctaText: "Перейти на официальный сайт Агентства по госактивам →",
    },
    contacts: {
      h2: "Контакты",
      labels: {
        phone: "Телефон",
        trustPhone: "Колл-центр",
        email: "Эл. адрес",
        social: "Социальные сети",
        address: "Адрес",
        transport: "Транспорт",
        hours: "Рабочее время",
      },
      phones: [{ display: "+99871 259-21-37", href: "tel:+998712592137" }],
      trustPhone: { display: "1082", href: "tel:1082" },
      email: { display: "info@davaktiv.uz", href: "mailto:info@davaktiv.uz" },
      social: [
        { id: "facebook", label: "Facebook", url: "https://www.facebook.com/davaktiv.uz/" },
        { id: "instagram", label: "Instagram", url: "https://www.instagram.com/davaktiv.uz/" },
        { id: "youtube", label: "YouTube", url: "https://www.youtube.com/c/davaktivuz" },
        { id: "telegram", label: "Telegram", url: "https://t.me/DAVAKTIVUZ" },
      ],
      address: "100000, г. Ташкент, проспект Амира Темура, 6",
      transport:
        "Автобусы: 1, 21, 51\nОриентиры: станция метро «Амир Темур», главный офис «Билайн».",
      hours:
        "Понедельник–пятница: 9:00–18:00\nОбеденный перерыв: 13:00–14:00\nСуббота, воскресенье: выходной",
      sourceAttribution: {
        dataSource:
          "Контактные данные приведены по сведениям официального портала Республики Узбекистан (gov.uz), раздел Агентства по управлению государственными активами (davaktiv).",
        reuseNoticeBefore: "При использовании материалов с данного сайта ссылка на ",
        reuseLinkText: "сайт",
        reuseNoticeAfter: " обязательна.",
        reuseUrl: "https://gov.uz/ru/davaktiv",
      },
    },
    whatFind: {
      h2: "Что можно найти на официальном сайте",
      intro: "На официальном сайте Агентства представлена информация об управлении государственным имуществом и приватизации в Узбекистане.",
      listLabel: "На сайте можно найти:",
      items: [
        { icon: "building", title: "Деятельность агентства", desc: "Функции и направления работы с госимуществом" },
        { icon: "decree", title: "Нормативные документы", desc: "Правовая база по госактивам и приватизации" },
        { icon: "globe", title: "Продажа и аренда", desc: "Объекты государственной собственности" },
        { icon: "chart", title: "Реестры и отчётность", desc: "Учёт и прозрачность госимущества" },
        { icon: "news", title: "Новости и торги", desc: "Анонсы аукционов и конкурсов" },
        { icon: "people", title: "Контакты и обращения", desc: "Связь с агентством и приём заявок" },
      ],
      closing: "Сайт предназначен для инвесторов, предпринимателей и граждан, интересующихся приобретением или арендой объектов госактивов.",
    },
    whyUse: {
      h2: "Зачем использовать официальный сайт",
      intro: "Официальный сайт Агентства — надёжный источник информации о процедурах приватизации, продаже и управлении государственным имуществом в Узбекистане.",
      listLabel: "Использование сайта особенно важно для:",
      items: [
        "инвесторов и покупателей на торгах",
        "получения сведений о лотах и условиях",
        "ознакомления с законодательством",
        "организаций при работе с госимуществом",
      ],
    },
    otherSites: {
      h2: "Другие официальные сайты государственных органов",
    },
    schema: {
      description:
        "Официальный сайт Агентства по управлению государственными активами Республики Узбекистан: телефон +99871 259-21-37, колл-центр 1082, электронная почта info[at]davaktiv.uz, адрес 100000, г. Ташкент, проспект Амира Темура, 6, транспорт, рабочее время и ссылки на социальные сети.",
      orgName: "Агентство по управлению государственными активами",
      sameAs: "https://davaktiv.uz",
    },
    faq: {
      h2: "Часто задаваемые вопросы",
      items: [
        {
          q: "Где находится официальный сайт Агентства по госактивам?",
          a: "Официальный сайт доступен по адресу davaktiv.uz. Ссылка представлена на данной странице.",
        },
        {
          q: "Чем занимается Агентство по управлению государственными активами?",
          a: "Агентство ведёт учёт госимущества, организует приватизацию, продажу и аренду объектов государственной собственности.",
        },
        {
          q: "Где узнать об актуальных торгах?",
          a: "Информация о торгах и объектах размещается на официальном сайте davaktiv.uz.",
        },
        {
          q: "Можно ли подать обращение или заявку онлайн?",
          a: "Перечень электронных услуг и форм обращения указан на официальном сайте davaktiv.uz.",
        },
        {
          q: "Где найти реестры государственного имущества?",
          a: "Сведения о реестрах и отчётности по госимуществу публикуются в соответствующих разделах на davaktiv.uz.",
        },
      ],
    },
  },
  en: {
    pageTitle: "The State Assets Management Agency of the Republic of Uzbekistan",
    intro: [
      "The State Assets Management Agency of the Republic of Uzbekistan ensures accounting, valuation, privatization and efficient use of state property. The official website davaktiv.uz provides information on the sale and lease of state assets, registers and procedures.",
      "The Agency organizes the management of assets in state ownership, coordinates privatization activities and publishes information for investors and citizens.",
      "The site contains regulatory documents, auction announcements, contacts and e-service sections.",
    ],
    officialSite: {
      h2: "Official website",
      ctaText: "Go to the official State Assets Management Agency website →",
    },
    contacts: {
      h2: "Contacts",
      labels: {
        phone: "Phone",
        trustPhone: "Call center",
        email: "Email",
        social: "Social media",
        address: "Address",
        transport: "Transport",
        hours: "Working hours",
      },
      phones: [{ display: "+99871 259-21-37", href: "tel:+998712592137" }],
      trustPhone: { display: "1082", href: "tel:1082" },
      email: { display: "info@davaktiv.uz", href: "mailto:info@davaktiv.uz" },
      social: [
        { id: "facebook", label: "Facebook", url: "https://www.facebook.com/davaktiv.uz/" },
        { id: "instagram", label: "Instagram", url: "https://www.instagram.com/davaktiv.uz/" },
        { id: "youtube", label: "YouTube", url: "https://www.youtube.com/c/davaktivuz" },
        { id: "telegram", label: "Telegram", url: "https://t.me/DAVAKTIVUZ" },
      ],
      address: "100000, Tashkent, Amir Temur Avenue, 6",
      transport:
        "Buses: 1, 21, 51\nLandmarks: Amir Temur metro station, Beeline main office.",
      hours:
        "Monday–Friday: 9:00–18:00\nLunch break: 13:00–14:00\nSaturday and Sunday: closed",
      sourceAttribution: {
        dataSource:
          "Contact details are based on the official portal of the Republic of Uzbekistan (gov.uz), State Assets Management Agency section (davaktiv).",
        reuseNoticeBefore: "When reusing materials from this site, a link to the ",
        reuseLinkText: "website",
        reuseNoticeAfter: " is required.",
        reuseUrl: "https://gov.uz/en/davaktiv",
      },
    },
    whatFind: {
      h2: "What you can find on the official website",
      intro: "The official website of the Agency presents information on state property management and privatization in Uzbekistan.",
      listLabel: "On the site you can find:",
      items: [
        { icon: "building", title: "Agency activities", desc: "Functions and areas of work with state property" },
        { icon: "decree", title: "Regulatory documents", desc: "Legal framework for state assets and privatization" },
        { icon: "globe", title: "Sale and lease", desc: "Objects of state ownership" },
        { icon: "chart", title: "Registers and reporting", desc: "Accounting and transparency of state property" },
        { icon: "news", title: "News and tenders", desc: "Auction and competition announcements" },
        { icon: "people", title: "Contacts and applications", desc: "Contact the agency and submit requests" },
      ],
      closing: "The website is intended for investors, entrepreneurs and citizens interested in acquiring or leasing state assets.",
    },
    whyUse: {
      h2: "Why use the official website",
      intro: "The official Agency website is a reliable source of information on privatization procedures, sale and management of state property in Uzbekistan.",
      listLabel: "Using the website is especially important for:",
      items: [
        "investors and auction participants",
        "obtaining information on lots and conditions",
        "familiarization with legislation",
        "organizations working with state property",
      ],
    },
    otherSites: {
      h2: "Other official websites of government bodies",
    },
    schema: {
      description:
        "Official website of the State Assets Management Agency of the Republic of Uzbekistan: phone +99871 259-21-37, call center 1082, email info[at]davaktiv.uz, address 100000, Tashkent, Amir Temur Avenue, 6, transport, working hours and social media links.",
      orgName: "State Assets Management Agency of Uzbekistan",
      sameAs: "https://davaktiv.uz",
    },
    faq: {
      h2: "Frequently asked questions",
      items: [
        {
          q: "Where is the official State Assets Management Agency website?",
          a: "The official website is available at davaktiv.uz. The link is provided on this page.",
        },
        {
          q: "What does the State Assets Management Agency do?",
          a: "The Agency maintains records of state property, organizes privatization, sale and lease of state-owned assets.",
        },
        {
          q: "Where can I find information on current tenders?",
          a: "Information on tenders and objects is published on the official website davaktiv.uz.",
        },
        {
          q: "Can I submit an application or request online?",
          a: "The list of e-services and application forms is available on the official website davaktiv.uz.",
        },
        {
          q: "Where can I find state property registers?",
          a: "Register information and reporting on state property are published in the relevant sections on davaktiv.uz.",
        },
      ],
    },
  },
  uz: {
    pageTitle: "Oʻzbekiston Respublikasi Davlat aktivlarini boshqarish agentligi",
    intro: [
      "Oʻzbekiston Respublikasi Davlat aktivlarini boshqarish agentligi davlat mulkining hisobini yuritish, baholash, xususiyalashtirish va samarali foydalanishini taʼminlaydi. davaktiv.uz rasmiy sayti davlat aktivlari obyektlarini sotish va ijaraga berish, reestrlar va tartib-qoidalar haqida maʼlumot beradi.",
      "Agentlik davlat mulkida boʻlgan aktivlarni boshqarish ishlarini tashkil etadi, xususiyalashtirish faoliyatini muvofiqlashtiradi va investorlar va fuqarolar uchun maʼlumotlarni joylashtiradi.",
      "Saytda normativ hujjatlar, savdolash eʼlonlari, kontaktlar va elektron xizmatlar boʻlimlari mavjud.",
    ],
    officialSite: {
      h2: "Rasmiy sayt",
      ctaText: "Davlat aktivlarini boshqarish agentligi rasmiy saytiga oʻtish →",
    },
    contacts: {
      h2: "Kontaktlar",
      labels: {
        phone: "Telefon",
        trustPhone: "Call-markaz",
        email: "Elektron pochta",
        social: "Ijtimoiy tarmoqlar",
        address: "Manzil",
        transport: "Transport",
        hours: "Ish vaqti",
      },
      phones: [{ display: "+99871 259-21-37", href: "tel:+998712592137" }],
      trustPhone: { display: "1082", href: "tel:1082" },
      email: { display: "info@davaktiv.uz", href: "mailto:info@davaktiv.uz" },
      social: [
        { id: "facebook", label: "Facebook", url: "https://www.facebook.com/davaktiv.uz/" },
        { id: "instagram", label: "Instagram", url: "https://www.instagram.com/davaktiv.uz/" },
        { id: "youtube", label: "YouTube", url: "https://www.youtube.com/c/davaktivuz" },
        { id: "telegram", label: "Telegram", url: "https://t.me/DAVAKTIVUZ" },
      ],
      address: "100000, Toshkent sh., Amir Temur shoh koʻchasi, 6",
      transport:
        "Avtobuslar: 1, 21, 51\nOrientirlar: «Amir Temur» metro bekati, Beeline bosh ofisi.",
      hours:
        "Dushanba–juma: 9:00–18:00\nTushlik tanaffusi: 13:00–14:00\nShanba, yakshanba: dam olish kuni",
      sourceAttribution: {
        dataSource:
          "Kontakt maʼlumotlari Oʻzbekiston Respublikasining rasmiy portali (gov.uz), Davlat aktivlarini boshqarish agentligi boʻlimi (davaktiv) maʼlumotlariga asoslangan.",
        reuseNoticeBefore: "Ushbu sayt materiallaridan foydalanganda ",
        reuseLinkText: "saytga",
        reuseNoticeAfter: " havola berish majburiy.",
        reuseUrl: "https://gov.uz/oz/davaktiv",
      },
    },
    whatFind: {
      h2: "Rasmiy saytda nimalarni topish mumkin",
      intro: "Agentlikning rasmiy saytida Oʻzbekistonda davlat mulkini boshqarish va xususiyalashtirish haqida maʼlumotlar taqdim etilgan.",
      listLabel: "Saytda topish mumkin:",
      items: [
        { icon: "building", title: "Agentlik faoliyati", desc: "Davlat mulki bilan ishlash funksiyalari va yoʻnalishlari" },
        { icon: "decree", title: "Normativ hujjatlar", desc: "Davlat aktivlari va xususiyalashtirish huquqiy asosi" },
        { icon: "globe", title: "Sotish va ijaraga berish", desc: "Davlat mulkida boʻlgan obyektlar" },
        { icon: "chart", title: "Reestrlar va hisobotlar", desc: "Davlat mulkining hisobi va shaffofligi" },
        { icon: "news", title: "Yangiliklar va savdolash", desc: "Auksion va tanlov eʼlonlari" },
        { icon: "people", title: "Kontaktlar va murojaatlar", desc: "Agentlik bilan aloqa va arizalar" },
      ],
      closing: "Sayt investorlar, tadbirkorlar va davlat aktivlari obyektlarini sotib olish yoki ijaraga olishga qiziqqan fuqarolar uchun moʻljallangan.",
    },
    whyUse: {
      h2: "Nima uchun rasmiy saytdan foydalanish kerak",
      intro: "Agentlikning rasmiy sayti Oʻzbekistonda xususiyalashtirish, sotish va davlat mulkini boshqarish tartiblari haqida ishonchli axborot manbai hisoblanadi.",
      listLabel: "Saytdan foydalanish ayniqsa quyidagilar uchun muhim:",
      items: [
        "investorlar va savdolash ishtirokchilari uchun",
        "lotlar va shartlar haqida maʼlumot olish",
        "qonunchilik bilan tanishish",
        "davlat mulki bilan ishlaydigan tashkilotlar uchun",
      ],
    },
    otherSites: {
      h2: "Boshqa davlat organlarining rasmiy saytlari",
    },
    schema: {
      description:
        "Oʻzbekiston Respublikasi Davlat aktivlarini boshqarish agentligining rasmiy sayti: telefon +99871 259-21-37, call-markaz 1082, elektron pochta info[at]davaktiv.uz, manzil 100000, Toshkent sh., Amir Temur shoh koʻchasi, 6, transport, ish vaqti va ijtimoiy tarmoq havolalari.",
      orgName: "Davlat aktivlarini boshqarish agentligi",
      sameAs: "https://davaktiv.uz",
    },
    faq: {
      h2: "Tez-tez beriladigan savollar",
      items: [
        {
          q: "Davlat aktivlarini boshqarish agentligi rasmiy sayti qayerda joylashgan?",
          a: "Rasmiy sayt davaktiv.uz manzilida mavjud. Havola ushbu sahifada keltirilgan.",
        },
        {
          q: "Davlat aktivlarini boshqarish agentligi nima bilan shugʻullanadi?",
          a: "Agentlik davlat mulkining hisobini yuritadi, xususiyalashtirish, sotish va ijaraga berishni tashkil etadi.",
        },
        {
          q: "Dolzarb savdolash haqida qayerdan bilish mumkin?",
          a: "Savdolash va obyektlar haqidagi maʼlumotlar davaktiv.uz rasmiy saytida joylashtiriladi.",
        },
        {
          q: "Onlayn murojaat yoki ariza topshirish mumkinmi?",
          a: "Elektron xizmatlar va ariza shakllari roʻyxati davaktiv.uz rasmiy saytida keltirilgan.",
        },
        {
          q: "Davlat mulki reestrlarini qayerdan topish mumkin?",
          a: "Reestrlar va davlat mulki boʻyicha hisobotlar davaktiv.uz dagi tegishli boʻlimlarda eʼlon qilinadi.",
        },
      ],
    },
  },
};
