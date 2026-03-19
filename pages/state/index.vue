<script setup>
import useState from "../../data/state";
import CategorySeo from "../../components/Seo/CategorySeo.vue";

const { t, locale } = useI18n();
const localePath = useLocalePath();
const state = useState();

const schemaOrgData = computed(() => {
  const ru = {
    name: "Государственные органы Республики Узбекистан",
    description:
      "Каталог государственных органов Узбекистана с ссылками на официальные сайты.",
    url: "https://govinfo.uz/state",
    inLanguage: "ru",
  };
  const en = {
    name: "State Bodies of the Republic of Uzbekistan",
    description:
      "Catalog of state bodies of Uzbekistan with links to official websites.",
    url: "https://govinfo.uz/en/state",
    inLanguage: "en",
  };
  const uz = {
    name: "Oʻzbekiston Respublikasi davlat organlari",
    description:
      "Oʻzbekiston davlat organlari katalogi rasmiy saytlar havolalari bilan.",
    url: "https://govinfo.uz/uz/state",
    inLanguage: "uz",
  };
  const data = { ru, en, uz }[locale.value] || ru;
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: data.name,
    description: data.description,
    url: data.url,
    inLanguage: data.inLanguage,
    publisher: {
      "@type": "Organization",
      name: "Govinfo",
      url: "https://govinfo.uz",
    },
  };
});

useHead({
  script: [
    {
      type: "application/ld+json",
      innerHTML: computed(() => JSON.stringify(schemaOrgData.value)),
    },
  ],
});

const introText = computed(() => {
  const ru = [
    "Государственные органы Республики Узбекистан включают широкий спектр учреждений, обеспечивающих реализацию государственной политики в различных сферах общественной и экономической жизни. К ним относятся государственные комитеты, агентства, службы и другие специализированные органы, выполняющие регулирующие, контрольные и исполнительные функции.",
    "В отличие от министерств, которые формируют общую политику в ключевых отраслях, государственные органы сосредоточены на реализации конкретных задач и управлении отдельными направлениями. Они обеспечивают контроль за соблюдением законодательства, регулируют деятельность отраслей, предоставляют государственные услуги и участвуют в реализации государственных программ.",
    "На данной странице представлен список государственных органов Республики Узбекистан с возможностью перехода на их официальные сайты. Это позволяет быстро получить доступ к актуальной и достоверной информации о деятельности государственных учреждений.",
  ];
  const en = [
    "State bodies of the Republic of Uzbekistan include a wide range of institutions that ensure the implementation of state policy in various spheres of public and economic life. These include state committees, agencies, services and other specialized bodies that perform regulatory, supervisory and executive functions.",
    "Unlike ministries, which formulate general policy in key sectors, state bodies focus on implementing specific tasks and managing individual areas. They ensure compliance with legislation, regulate sector activities, provide public services and participate in the implementation of state programs.",
    "This page presents a list of state bodies of the Republic of Uzbekistan with the ability to navigate to their official websites. This allows quick access to up-to-date and reliable information about the activities of state institutions.",
  ];
  const uz = [
    "Oʻzbekiston Respublikasi davlat organlari jamiyat va iqtisodiy hayotning turli sohalarida davlat siyosatini amalga oshirishni taʼminlovchi keng doiradagi muassasalarni oʻz ichiga oladi. Ular davlat qoʻmitalari, agentliklar, xizmatlar va tartibga soluvchi, nazorat va ijrochi funksiyalarni bajaruvchi boshqa ixtisoslashtirilgan organlarni oʻz ichiga oladi.",
    "Asosiy sohalarda umumiy siyosatni shakllantiradigan vazirliklardan farqli oʻlaroq, davlat organlari aniq vazifalarni amalga oshirish va alohida yoʻnalishlarni boshqarishga eʼtibor qaratadi. Ular qonunchilikka rioya qilishni nazorat qiladi, soha faoliyatini tartibga soladi, davlat xizmatlarini taqdim etadi va davlat dasturlarini amalga oshirishda ishtirok etadi.",
    "Ushbu sahifada Oʻzbekiston Respublikasi davlat organlari roʻyxati va ularning rasmiy saytlariga oʻtish imkoniyati taqdim etilgan. Bu davlat muassasalari faoliyati haqida dolzarb va ishonchli maʼlumotga tez kirish imkonini beradi.",
  ];
  const map = { ru, en, uz };
  return map[locale.value] || map.ru;
});

const structurePowerText = computed(() => {
  const ru = {
    h2: "Роль государственных органов в системе управления",
    paragraphs: [
      "Государственные органы играют важную роль в системе государственного управления Республики Узбекистан. Они обеспечивают реализацию государственной политики, разработанной на уровне высших органов власти и министерств, а также выполняют специализированные функции в различных сферах.",
      "Государственные комитеты и агентства занимаются регулированием отдельных отраслей экономики, таких как налогообложение, статистика, таможенное дело, экология и другие направления. Они разрабатывают нормативные акты, контролируют выполнение законодательства и обеспечивают эффективное функционирование соответствующих отраслей.",
      "Службы и инспекции выполняют надзорные функции, направленные на обеспечение соблюдения норм и стандартов. Они проводят проверки, контролируют деятельность организаций и принимают меры по предотвращению нарушений законодательства.",
      "Многие государственные органы также предоставляют государственные услуги населению и бизнесу. Это может включать регистрацию, лицензирование, выдачу разрешений, сбор статистических данных и другие административные процедуры.",
      "Таким образом, государственные органы являются важным звеном в системе управления страной и обеспечивают эффективную реализацию государственной политики на практике.",
    ],
  };
  const en = {
    h2: "Role of State Bodies in the Governance System",
    paragraphs: [
      "State bodies play an important role in the system of public administration of the Republic of Uzbekistan. They ensure the implementation of state policy developed at the level of supreme bodies of power and ministries, as well as perform specialized functions in various spheres.",
      "State committees and agencies are engaged in regulating individual sectors of the economy, such as taxation, statistics, customs, ecology and other areas. They develop normative acts, monitor compliance with legislation and ensure the effective functioning of the relevant sectors.",
      "Services and inspections perform supervisory functions aimed at ensuring compliance with norms and standards. They conduct inspections, monitor the activities of organizations and take measures to prevent violations of legislation.",
      "Many state bodies also provide public services to the population and business. This may include registration, licensing, issuance of permits, collection of statistical data and other administrative procedures.",
      "Thus, state bodies are an important link in the country's governance system and ensure the effective implementation of state policy in practice.",
    ],
  };
  const uz = {
    h2: "Davlat organlarining boshqaruv tizimidagi roli",
    paragraphs: [
      "Davlat organlari Oʻzbekiston Respublikasi davlat boshqaruvi tizimida muhim rol oʻynaydi. Ular oliy davlat organlari va vazirliklar darajasida ishlab chiqilgan davlat siyosatini amalga oshirishni taʼminlaydi, shuningdek turli sohalarda ixtisoslashtirilgan funksiyalarni bajaradi.",
      "Davlat qoʻmitalari va agentliklar soliqqa tortish, statistika, bojxona ishi, ekologiya va boshqa yoʻnalishlar kabi iqtisodiyotning alohida sohalarini tartibga solish bilan shugʻullanadi. Ular normativ hujjatlarni ishlab chiqadi, qonunchilikka rioya qilishni nazorat qiladi va tegishli sohalarning samarali ishlashini taʼminlaydi.",
      "Xizmatlar va inspeksiyalar meʼyorlar va standartlarga rioya qilishni taʼminlashga qaratilgan nazorat funksiyalarini bajaradi. Ular tekshiruvlar oʻtkazadi, tashkilotlar faoliyatini nazorat qiladi va qonunchilik buzilishlarining oldini olish boʻyicha choralar qoʻllaydi.",
      "Koʻplab davlat organlari, shuningdek, aholiga va biznesga davlat xizmatlarini taqdim etadi. Bunga roʻyxatdan oʻtkazish, litsenziyalash, ruxsatnomalar berish, statistik maʼlumotlarni toʻplash va boshqa maʼmuriy protseduralar kiradi.",
      "Shunday qilib, davlat organlari mamlakat boshqaruvi tizimida muhim boʻgʻin hisoblanadi va davlat siyosatini amalda samarali amalga oshirishni taʼminlaydi.",
    ],
  };
  const map = { ru, en, uz };
  return map[locale.value] || map.ru;
});

const usefulInfoText = computed(() => {
  const ru = {
    h2: "Официальные сайты государственных органов",
    paragraphs: [
      "Официальные сайты государственных органов Республики Узбекистан являются основным источником достоверной информации о деятельности государственных учреждений. На этих ресурсах публикуются новости, нормативные документы, отчёты, государственные программы и информация о предоставляемых услугах.",
      "Государственные органы активно используют свои официальные сайты для взаимодействия с гражданами и бизнесом. Через интернет-ресурсы можно получить информацию о порядке получения государственных услуг, ознакомиться с законодательством и найти контактные данные учреждений.",
      "Каталог Govinfo объединяет ссылки на официальные сайты государственных органов, что позволяет значительно упростить поиск необходимой информации и повысить доступность государственных ресурсов.",
    ],
  };
  const en = {
    h2: "Official Websites of State Bodies",
    paragraphs: [
      "Official websites of state bodies of the Republic of Uzbekistan are the main source of reliable information about the activities of state institutions. These resources publish news, normative documents, reports, state programs and information about the services provided.",
      "State bodies actively use their official websites to interact with citizens and business. Through online resources, you can get information about the procedure for obtaining public services, familiarize yourself with legislation and find contact details of institutions.",
      "The Govinfo catalog brings together links to the official websites of state bodies, which significantly simplifies the search for necessary information and increases the accessibility of government resources.",
    ],
  };
  const uz = {
    h2: "Davlat organlarining rasmiy saytlari",
    paragraphs: [
      "Oʻzbekiston Respublikasi davlat organlarining rasmiy saytlari davlat muassasalari faoliyati haqida ishonchli maʼlumotning asosiy manbai hisoblanadi. Ushbu resurslarda yangiliklar, normativ hujjatlar, hisobotlar, davlat dasturlari va taqdim etiladigan xizmatlar haqida maʼlumotlar nashr etiladi.",
      "Davlat organlari fuqarolar va biznes bilan oʻzaro aloqada oʻz rasmiy saytlaridan faol foydalanadi. Internet resurslari orqali davlat xizmatlarini olish tartibi haqida maʼlumot olish, qonunchilik bilan tanishish va muassasalar aloqa maʼlumotlarini topish mumkin.",
      "Govinfo katalogi davlat organlarining rasmiy saytlariga havolalarni birlashtiradi, bu kerakli maʼlumotlarni qidirishni sezilarli darajada soddalashtiradi va davlat resurslariga kirish imkoniyatini oshiradi.",
    ],
  };
  const map = { ru, en, uz };
  return map[locale.value] || map.ru;
});

const faqText = computed(() => {
  const ru = {
    h2: "Часто задаваемые вопросы",
    items: [
      {
        q: "Что входит в государственные органы Узбекистана?",
        a: "К государственным органам относятся комитеты, агентства, службы и другие учреждения, выполняющие специализированные функции в системе государственного управления.",
      },
      {
        q: "Чем государственные органы отличаются от министерств?",
        a: "Министерства формируют государственную политику, а государственные органы обеспечивают её реализацию и выполняют специализированные задачи.",
      },
      {
        q: "Где найти официальные сайты государственных органов?",
        a: "На портале Govinfo собраны ссылки на официальные сайты государственных органов Республики Узбекистан.",
      },
      {
        q: "Какие функции выполняют государственные комитеты?",
        a: "Комитеты регулируют отдельные отрасли, контролируют соблюдение законодательства и разрабатывают нормативные акты.",
      },
      {
        q: "Какие услуги предоставляют государственные органы?",
        a: "Государственные органы предоставляют услуги по регистрации, лицензированию, контролю, выдаче разрешений и другим административным процедурам.",
      },
    ],
  };
  const en = {
    h2: "Frequently Asked Questions",
    items: [
      {
        q: "What is included in the state bodies of Uzbekistan?",
        a: "State bodies include committees, agencies, services and other institutions that perform specialized functions in the system of public administration.",
      },
      {
        q: "How do state bodies differ from ministries?",
        a: "Ministries formulate state policy, while state bodies ensure its implementation and perform specialized tasks.",
      },
      {
        q: "Where can I find the official websites of state bodies?",
        a: "The Govinfo portal collects links to the official websites of state bodies of the Republic of Uzbekistan.",
      },
      {
        q: "What functions do state committees perform?",
        a: "Committees regulate individual sectors, monitor compliance with legislation and develop normative acts.",
      },
      {
        q: "What services do state bodies provide?",
        a: "State bodies provide services for registration, licensing, control, issuance of permits and other administrative procedures.",
      },
    ],
  };
  const uz = {
    h2: "Tez-tez beriladigan savollar",
    items: [
      {
        q: "Oʻzbekiston davlat organlariga nimalar kiradi?",
        a: "Davlat organlariga davlat boshqaruvi tizimida ixtisoslashtirilgan funksiyalarni bajaruvchi qoʻmitalar, agentliklar, xizmatlar va boshqa muassasalar kiradi.",
      },
      {
        q: "Davlat organlari vazirliklardan qanday farq qiladi?",
        a: "Vazirliklar davlat siyosatini shakllantiradi, davlat organlari esa uning amalga oshirilishini taʼminlaydi va ixtisoslashtirilgan vazifalarni bajaradi.",
      },
      {
        q: "Davlat organlarining rasmiy saytlarini qayerda topish mumkin?",
        a: "Govinfo portali Oʻzbekiston Respublikasi davlat organlarining rasmiy saytlariga havolalarni toʻplagan.",
      },
      {
        q: "Davlat qoʻmitalari qanday funksiyalarni bajaradi?",
        a: "Qoʻmitalar alohida sohalarni tartibga soladi, qonunchilikka rioya qilishni nazorat qiladi va normativ hujjatlarni ishlab chiqadi.",
      },
      {
        q: "Davlat organlari qanday xizmatlarni taqdim etadi?",
        a: "Davlat organlari roʻyxatdan oʻtkazish, litsenziyalash, nazorat, ruxsatnomalar berish va boshqa maʼmuriy protseduralar boʻyicha xizmatlarni taqdim etadi.",
      },
    ],
  };
  const map = { ru, en, uz };
  return map[locale.value] || map.ru;
});

const stateTableText = computed(() => {
  const ru = {
    h2: "Список государственных органов Республики Узбекистан",
    colOrganization: "Государственный орган",
    colType: "Тип органа",
    colFunction: "Функции",
    colSite: "Официальный сайт",
  };
  const en = {
    h2: "List of State Bodies of the Republic of Uzbekistan",
    colOrganization: "State Body",
    colType: "Body Type",
    colFunction: "Functions",
    colSite: "Official Website",
  };
  const uz = {
    h2: "Oʻzbekiston Respublikasi davlat organlari roʻyxati",
    colOrganization: "Davlat organi",
    colType: "Organ turi",
    colFunction: "Funksiyalar",
    colSite: "Rasmiy sayt",
  };
  const map = { ru, en, uz };
  return map[locale.value] || map.ru;
});

const stateTableRows = computed(() => {
  const ru = [
    {
      orgKey: "State.one.title",
      type: "Агентство",
      func: "Статистика, демография, экономические и социальные отчёты",
      linkKey: "State.one.link",
      linkText: "stat.uz",
    },
    {
      orgKey: "State.two.title",
      type: "Комитет",
      func: "Налогообложение, налоговый контроль и услуги",
      linkKey: "State.two.link",
      linkText: "soliq.uz",
    },
    {
      orgKey: "State.three.title",
      type: "Комитет",
      func: "Таможенное регулирование и контроль",
      linkKey: "State.three.link",
      linkText: "customs.uz",
    },
    {
      orgKey: "State.four.title",
      type: "Министерство",
      func: "Экология, охрана окружающей среды и климат",
      linkKey: "State.four.link",
      linkText: "uznature.uz",
    },
    {
      orgKey: "State.five.title",
      type: "Агентство",
      func: "Лесное хозяйство и экологический туризм",
      linkKey: "State.five.link",
      linkText: "urmon.gov.uz",
    },
    {
      orgKey: "State.six.title",
      type: "Министерство",
      func: "Горнодобыча, геология и минеральные ресурсы",
      linkKey: "State.six.link",
      linkText: "gov.uz/mingeo",
    },
    {
      orgKey: "State.seven.title",
      type: "Комитет",
      func: "Земельные ресурсы, геодезия, кадастр",
      linkKey: "State.seven.link",
      linkText: "kadastr.uz",
    },
    {
      orgKey: "State.eight.title",
      type: "Комитет",
      func: "Ветеринария и животноводство",
      linkKey: "State.eight.link",
      linkText: "vetgov.uz",
    },
    {
      orgKey: "State.nine.title",
      type: "Комитет",
      func: "Автомобильные дороги и транспорт",
      linkKey: "State.nine.link",
      linkText: "uzavtoyul.uz",
    },
    {
      orgKey: "State.ten.title",
      type: "Комитет",
      func: "Развитие туризма",
      linkKey: "State.ten.link",
      linkText: "uzbektourism.uz",
    },
  ];
  const en = [
    {
      orgKey: "State.one.title",
      type: "Agency",
      func: "Statistics, demography, economic and social reports",
      linkKey: "State.one.link",
      linkText: "stat.uz",
    },
    {
      orgKey: "State.two.title",
      type: "Committee",
      func: "Taxation, tax control and services",
      linkKey: "State.two.link",
      linkText: "soliq.uz",
    },
    {
      orgKey: "State.three.title",
      type: "Committee",
      func: "Customs regulation and control",
      linkKey: "State.three.link",
      linkText: "customs.uz",
    },
    {
      orgKey: "State.four.title",
      type: "Ministry",
      func: "Ecology, environmental protection and climate",
      linkKey: "State.four.link",
      linkText: "uznature.uz",
    },
    {
      orgKey: "State.five.title",
      type: "Agency",
      func: "Forestry and ecotourism",
      linkKey: "State.five.link",
      linkText: "urmon.gov.uz",
    },
    {
      orgKey: "State.six.title",
      type: "Ministry",
      func: "Mining, geology and mineral resources",
      linkKey: "State.six.link",
      linkText: "gov.uz/mingeo",
    },
    {
      orgKey: "State.seven.title",
      type: "Committee",
      func: "Land resources, geodesy, cadastre",
      linkKey: "State.seven.link",
      linkText: "kadastr.uz",
    },
    {
      orgKey: "State.eight.title",
      type: "Committee",
      func: "Veterinary and livestock",
      linkKey: "State.eight.link",
      linkText: "vetgov.uz",
    },
    {
      orgKey: "State.nine.title",
      type: "Committee",
      func: "Roads and transport",
      linkKey: "State.nine.link",
      linkText: "uzavtoyul.uz",
    },
    {
      orgKey: "State.ten.title",
      type: "Committee",
      func: "Tourism development",
      linkKey: "State.ten.link",
      linkText: "uzbektourism.uz",
    },
  ];
  const uz = [
    {
      orgKey: "State.one.title",
      type: "Agentlik",
      func: "Statistika, demografiya, iqtisodiy va ijtimoiy hisobotlar",
      linkKey: "State.one.link",
      linkText: "stat.uz",
    },
    {
      orgKey: "State.two.title",
      type: "Qoʻmita",
      func: "Soliqqa tortish, soliq nazorati va xizmatlar",
      linkKey: "State.two.link",
      linkText: "soliq.uz",
    },
    {
      orgKey: "State.three.title",
      type: "Qoʻmita",
      func: "Bojxona tartibga solishi va nazorati",
      linkKey: "State.three.link",
      linkText: "customs.uz",
    },
    {
      orgKey: "State.four.title",
      type: "Vazirlik",
      func: "Ekologiya, atrof-muhitni muhofaza qilish va iqlim",
      linkKey: "State.four.link",
      linkText: "uznature.uz",
    },
    {
      orgKey: "State.five.title",
      type: "Agentlik",
      func: "Oʻrmon xoʻjaligi va ekologik turizm",
      linkKey: "State.five.link",
      linkText: "urmon.gov.uz",
    },
    {
      orgKey: "State.six.title",
      type: "Vazirlik",
      func: "Konchilik, geologiya va mineral resurslar",
      linkKey: "State.six.link",
      linkText: "gov.uz/mingeo",
    },
    {
      orgKey: "State.seven.title",
      type: "Qoʻmita",
      func: "Yer resurslari, geodeziya, kadastr",
      linkKey: "State.seven.link",
      linkText: "kadastr.uz",
    },
    {
      orgKey: "State.eight.title",
      type: "Qoʻmita",
      func: "Veterinariya va chorvachilik",
      linkKey: "State.eight.link",
      linkText: "vetgov.uz",
    },
    {
      orgKey: "State.nine.title",
      type: "Qoʻmita",
      func: "Avtomobil yoʻllari va transport",
      linkKey: "State.nine.link",
      linkText: "uzavtoyul.uz",
    },
    {
      orgKey: "State.ten.title",
      type: "Qoʻmita",
      func: "Turizmni rivojlantirish",
      linkKey: "State.ten.link",
      linkText: "uzbektourism.uz",
    },
  ];
  const rows = { ru, en, uz }[locale.value] || ru;
  return rows.map((row) => ({
    ...row,
    org: t(row.orgKey),
    link: t(row.linkKey),
  }));
});

const otherGovBodiesText = computed(() => {
  const ru = {
    h2: "Другие государственные органы Узбекистана",
    intro:
      "Для более полного понимания структуры государственного управления Республики Узбекистан вы можете ознакомиться с другими разделами каталога Govinfo:",
    links: [
      { href: "/headquarters", text: "Высшие государственные органы" },
      { href: "/ministries", text: "Министерства" },
      { href: "/inspections", text: "Государственные инспекции" },
    ],
    closing:
      "Эти разделы помогут получить комплексное представление о системе государственной власти страны.",
  };
  const en = {
    h2: "Other State Bodies of Uzbekistan",
    intro:
      "For a more complete understanding of the structure of public administration of the Republic of Uzbekistan, you can familiarize yourself with other sections of the Govinfo catalog:",
    links: [
      { href: "/headquarters", text: "Supreme State Bodies" },
      { href: "/ministries", text: "Ministries" },
      { href: "/inspections", text: "State Inspections" },
    ],
    closing:
      "These sections will help you get a comprehensive understanding of the country's system of state power.",
  };
  const uz = {
    h2: "Oʻzbekistonning boshqa davlat organlari",
    intro:
      "Oʻzbekiston Respublikasi davlat boshqaruvi tuzilishini yanada toʻliq tushunish uchun Govinfo katalogining boshqa boʻlimlari bilan tanishishingiz mumkin:",
    links: [
      { href: "/headquarters", text: "Oliy davlat organlari" },
      { href: "/ministries", text: "Vazirliklar" },
      { href: "/inspections", text: "Davlat inspeksiyalari" },
    ],
    closing:
      "Ushbu boʻlimlar mamlakat davlat hokimiyati tizimi haqida kompleks tushuncha olishga yordam beradi.",
  };
  const map = { ru, en, uz };
  return map[locale.value] || map.ru;
});
</script>

<template>
  <div>
    <CategorySeo
      title-key="State.seo.title"
      description-key="State.seo.description"
    />
    <div class="site-container py-6 md:py-10">
      <section>
        <div class="border-b border-[#eee] pb-2 mb-4 md:mb-6">
          <h1 class="font-medium text-xl md:text-2xl">
            {{ t("State.headtitle") }}
          </h1>
        </div>

        <div
          class="text-[#4B5563] base-bg leading-7 text-base 768:text-sm mb-6 space-y-2"
        >
          <p v-for="(para, i) in introText" :key="'intro-' + i">
            {{ para }}
          </p>
        </div>

        <div class="">
          <nuxt-link
            v-for="(item, index) in state.data"
            :key="index"
            :to="localePath(`/state/${item.slug}`)"
            class="link-block"
          >
            <div class="min-w-[64px] h-[64px]">
              <NuxtImg
                :src="item.img"
                :alt="t(item.title)"
                :title="t(item.title)"
                class="w-full h-full object-cover rounded-xl"
                loading="lazy"
                format="webp"
              />
            </div>
            <h3 class="title">
              {{ $t(item.title) }}
            </h3>
            <p class="short-desc">{{ $t(item.shortDesc) }}</p>
            <span class="tag-badge">{{ $t(item.tag) }}</span>
          </nuxt-link>
        </div>

        <div class="overflow-x-auto my-6">
          <h2 class="font-semibold text-lg md:text-xl mb-4">
            {{ stateTableText.h2 }}
          </h2>
          <table class="w-full text-sm border-collapse border border-[#e5e7eb]">
            <thead>
              <tr class="bg-[#f8fafc]">
                <th
                  class="border border-[#e5e7eb] px-4 py-3 text-left font-bold text-[#1e293b]"
                >
                  {{ stateTableText.colOrganization }}
                </th>
                <th
                  class="border border-[#e5e7eb] px-4 py-3 text-left font-bold text-[#1e293b]"
                >
                  {{ stateTableText.colType }}
                </th>
                <th
                  class="border border-[#e5e7eb] px-4 py-3 text-left font-bold text-[#1e293b]"
                >
                  {{ stateTableText.colFunction }}
                </th>
                <th
                  class="border border-[#e5e7eb] px-4 py-3 text-center font-bold text-[#1e293b]"
                >
                  {{ stateTableText.colSite }}
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-[#e5e7eb] text-[#4b5563]">
              <tr
                v-for="(row, i) in stateTableRows"
                :key="'table-' + i"
                class="hover:bg-slate-50 transition-colors"
              >
                <td
                  class="border border-[#e5e7eb] px-4 py-3 font-semibold text-[#111]"
                >
                  {{ row.org }}
                </td>
                <td class="border border-[#e5e7eb] px-4 py-3">
                  {{ row.type }}
                </td>
                <td class="border border-[#e5e7eb] px-4 py-3">
                  {{ row.func }}
                </td>
                <td class="border border-[#e5e7eb] px-4 py-3 text-center">
                  <a
                    :href="row.link"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-blue-600 hover:underline"
                  >
                    {{ row.linkText }}
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="mt-8 pt-6 border-t border-[#eee]">
          <h2 class="font-semibold text-lg md:text-xl mb-4">
            {{ structurePowerText.h2 }}
          </h2>
          <div
            class="text-[#4B5563] base-bg leading-7 text-base 768:text-sm space-y-2"
          >
            <p
              v-for="(para, i) in structurePowerText.paragraphs"
              :key="'structure-' + i"
            >
              {{ para }}
            </p>
          </div>
        </div>

        <div class="mt-8 pt-6 border-t border-[#eee]">
          <h2 class="font-semibold text-lg md:text-xl mb-4">
            {{ usefulInfoText.h2 }}
          </h2>
          <div
            class="text-[#4B5563] base-bg leading-7 text-base 768:text-sm space-y-2"
          >
            <p
              v-for="(para, i) in usefulInfoText.paragraphs"
              :key="'useful-' + i"
            >
              {{ para }}
            </p>
          </div>
        </div>

        <div class="mt-8 pt-6 border-t border-[#eee]">
          <h2 class="font-semibold text-lg md:text-xl mb-4">
            {{ otherGovBodiesText.h2 }}
          </h2>
          <div
            class="text-[#4B5563] base-bg leading-7 text-base 768:text-sm space-y-2"
          >
            <p>{{ otherGovBodiesText.intro }}</p>
            <ul class="list-disc list-inside mt-2 space-y-1">
              <li
                v-for="(link, i) in otherGovBodiesText.links"
                :key="'other-' + i"
              >
                <NuxtLink
                  :to="localePath(link.href)"
                  class="text-[#2563eb] hover:underline"
                >
                  {{ link.text }}
                </NuxtLink>
              </li>
            </ul>
            <p class="mt-2">{{ otherGovBodiesText.closing }}</p>
          </div>
        </div>

        <div class="mt-8 pt-6 border-t border-[#eee]">
          <h2 class="font-semibold text-lg md:text-xl mb-4">
            {{ faqText.h2 }}
          </h2>
          <div
            class="text-[#4B5563] base-bg leading-7 text-base 768:text-sm space-y-4"
          >
            <div
              v-for="(item, i) in faqText.items"
              :key="'faq-' + i"
              class="space-y-1"
            >
              <h3 class="font-medium text-[#111] text-base 768:text-sm">
                {{ item.q }}
              </h3>
              <p class="text-sm">{{ item.a }}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
