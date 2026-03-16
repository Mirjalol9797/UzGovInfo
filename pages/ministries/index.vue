<script setup>
import useMinistries from "../../data/ministries";

const { t, locale } = useI18n();
const localePath = useLocalePath();
const ministries = useMinistries();

const seoData = computed(() => {
  const ru = {
    title:
      "Министерства Республики Узбекистан — список и официальные сайты | Govinfo",
    description:
      "Полный список министерств Республики Узбекистан с ссылками на официальные сайты. Информация о структуре исполнительной власти и государственных министерствах.",
  };
  const en = {
    title:
      "Ministries of the Republic of Uzbekistan — List and Official Websites | Govinfo",
    description:
      "Complete list of ministries of the Republic of Uzbekistan with links to official websites. Information on the structure of the executive branch and government ministries.",
  };
  const uz = {
    title:
      "Oʻzbekiston Respublikasi vazirliklari — roʻyxat va rasmiy saytlar | Govinfo",
    description:
      "Oʻzbekiston Respublikasi vazirliklari toʻliq roʻyxati va rasmiy saytlariga havolalar. Ijrochi hokimiyat tuzilishi va davlat vazirliklari haqida maʼlumot.",
  };
  return { ru, en, uz }[locale.value] || ru;
});

const schemaOrgData = computed(() => {
  const ru = {
    name: "Министерства Республики Узбекистан",
    description:
      "Каталог министерств Республики Узбекистан с ссылками на официальные сайты государственных органов.",
    url: "https://govinfo.uz/ministries",
    inLanguage: "ru",
  };
  const en = {
    name: "Ministries of the Republic of Uzbekistan",
    description:
      "Catalog of ministries of the Republic of Uzbekistan with links to official government websites.",
    url: "https://govinfo.uz/en/ministries",
    inLanguage: "en",
  };
  const uz = {
    name: "Oʻzbekiston Respublikasi vazirliklari",
    description:
      "Oʻzbekiston Respublikasi vazirliklari katalogi va davlat organlarining rasmiy saytlariga havolalar.",
    url: "https://govinfo.uz/uz/ministries",
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
  title: () => seoData.value.title,
  meta: [
    { name: "description", content: () => seoData.value.description },
    { property: "og:title", content: () => seoData.value.title },
    { property: "og:description", content: () => seoData.value.description },
    { property: "og:image", content: "https://govinfo.uz/images/gerb.png" },
    {
      property: "og:url",
      content: () =>
        `https://govinfo.uz${
          locale.value === "ru" ? "" : "/" + locale.value
        }/ministries`,
    },
    { name: "twitter:title", content: () => seoData.value.title },
    { name: "twitter:description", content: () => seoData.value.description },
    {
      name: "twitter:url",
      content: () =>
        `https://govinfo.uz${
          locale.value === "ru" ? "" : "/" + locale.value
        }/ministries`,
    },
    { name: "twitter:image", content: "https://govinfo.uz/images/gerb.png" },
  ],
  script: [
    {
      type: "application/ld+json",
      innerHTML: computed(() => JSON.stringify(schemaOrgData.value)),
    },
  ],
});

const headTitle = computed(() => {
  const map = {
    ru: "Министерства Республики Узбекистан",
    en: "Ministries of the Republic of Uzbekistan",
    uz: "Oʻzbekiston Respublikasi vazirliklari",
  };
  return map[locale.value] || map.ru;
});

const introText = computed(() => {
  const ru = [
    "Министерства Республики Узбекистан являются ключевыми органами исполнительной власти, которые обеспечивают реализацию государственной политики в различных сферах жизни общества. Каждое министерство отвечает за развитие определённого направления государственной деятельности, включая экономику, здравоохранение, образование, энергетику, культуру, транспорт и другие важные отрасли.",
    "Министерства играют важную роль в управлении государством. Они разрабатывают государственные программы, регулируют деятельность подведомственных организаций, контролируют выполнение законов и обеспечивают развитие отраслей экономики и социальной сферы. Работа министерств направлена на повышение эффективности государственного управления и улучшение качества жизни граждан.",
    "На данной странице представлен список министерств Республики Узбекистан. Здесь вы можете найти ссылки на официальные сайты министерств, ознакомиться с их функциями и получить доступ к официальной информации о деятельности государственных органов исполнительной власти.",
  ];
  const en = [
    "The ministries of the Republic of Uzbekistan are key bodies of the executive branch that ensure the implementation of state policy in various spheres of society. Each ministry is responsible for the development of a specific area of state activity, including economy, healthcare, education, energy, culture, transport and other important sectors.",
    "Ministries play an important role in governing the state. They develop state programs, regulate the activities of subordinate organizations, monitor compliance with laws and ensure the development of economic sectors and the social sphere. The work of ministries is aimed at improving the efficiency of public administration and the quality of life of citizens.",
    "This page presents a list of ministries of the Republic of Uzbekistan. Here you can find links to the official websites of ministries, learn about their functions and gain access to official information on the activities of government bodies of the executive branch.",
  ];
  const uz = [
    "Oʻzbekiston Respublikasi vazirliklari jamiyat hayotining turli sohalarida davlat siyosatini amalga oshirishni taʼminlaydigan ijrochi hokimiyatning asosiy organlaridir. Har bir vazirlik davlat faoliyatining maʼlum yoʻnalishini rivojlantirish uchun javobgardir, jumladan iqtisodiyot, sogʻliqni saqlash, taʼlim, energetika, madaniyat, transport va boshqa muhim tarmoqlar.",
    "Vazirliklar davlatni boshqarishda muhim rol oʻynaydi. Ular davlat dasturlarini ishlab chiqadi, qaramor tashkilotlar faoliyatini tartibga soladi, qonunlar bajarilishini nazorat qiladi va iqtisodiyot va ijtimoiy soha tarmoqlarining rivojlanishini taʼminlaydi. Vazirliklar faoliyati davlat boshqaruvining samaradorligini oshirish va fuqarolar hayotining turmush darajasini yaxshilashga qaratilgan.",
    "Ushbu sahifada Oʻzbekiston Respublikasi vazirliklari roʻyxati keltirilgan. Bu yerda vazirliklar rasmiy saytlariga havolalar topishingiz, ularning vazifalari bilan tanishishingiz va ijrochi hokimiyat davlat organlari faoliyati haqidagi rasmiy maʼlumotlarga kirish imkoniyatiga ega boʻlishingiz mumkin.",
  ];
  const map = { ru, en, uz };
  return map[locale.value] || map.ru;
});

const roleBlockText = computed(() => {
  const ru = {
    h2: "Роль министерств в системе государственного управления",
    paragraphs: [
      "Министерства являются важной частью системы исполнительной власти Республики Узбекистан. Их основная задача заключается в реализации государственной политики и обеспечении эффективного управления различными секторами экономики и социальной сферы.",
      "Каждое министерство отвечает за конкретную область государственного управления. Например, Министерство здравоохранения занимается развитием системы медицинского обслуживания, Министерство финансов регулирует бюджетную и финансовую политику государства, а Министерство юстиции обеспечивает правовое регулирование и развитие законодательства.",
      "Министерства также координируют деятельность государственных комитетов, агентств и подведомственных организаций. Они разрабатывают нормативные документы, государственные программы и стратегии развития отраслей.",
      "Кроме того, министерства активно взаимодействуют с международными организациями, иностранными государствами и международными финансовыми институтами. Это способствует развитию международного сотрудничества и внедрению современных управленческих практик в систему государственного управления.",
      "Система министерств постоянно совершенствуется в рамках административных реформ, направленных на повышение эффективности государственного управления и прозрачности деятельности государственных органов.",
    ],
  };
  const en = {
    h2: "Role of Ministries in the System of Public Administration",
    paragraphs: [
      "Ministries are an important part of the system of executive power of the Republic of Uzbekistan. Their main task is to implement state policy and ensure effective management of various sectors of the economy and social sphere.",
      "Each ministry is responsible for a specific area of public administration. For example, the Ministry of Health oversees the development of the healthcare system, the Ministry of Finance regulates the budgetary and financial policy of the state, and the Ministry of Justice ensures legal regulation and development of legislation.",
      "Ministries also coordinate the activities of state committees, agencies and subordinate organizations. They develop regulatory documents, state programs and sector development strategies.",
      "In addition, ministries actively interact with international organizations, foreign states and international financial institutions. This contributes to the development of international cooperation and the introduction of modern management practices into the public administration system.",
      "The system of ministries is constantly being improved within the framework of administrative reforms aimed at increasing the efficiency of public administration and the transparency of government bodies.",
    ],
  };
  const uz = {
    h2: "Vazirliklar davlat boshqaruvi tizimida roli",
    paragraphs: [
      "Vazirliklar Oʻzbekiston Respublikasi ijrochi hokimiyati tizimining muhim qismidir. Ularning asosiy vazifasi davlat siyosatini amalga oshirish va iqtisodiyot va ijtimoiy soha tarmoqlarini samarali boshqarishni taʼminlashdan iborat.",
      "Har bir vazirlik davlat boshqaruvining maʼlum sohasiga javobgardir. Masalan, Sogʻliqni saqlash vazirligi tibbiy xizmat tizimini rivojlantirish bilan shugʻullanadi, Moliya vazirligi davlat byudjet va moliyaviy siyosatini tartibga soladi, Adliya vazirligi esa huquqiy tartibga solish va qonunchilikni rivojlantirishni taʼminlaydi.",
      "Vazirliklar shuningdek davlat qoʻmitalari, agentliklar va qaramor tashkilotlar faoliyatini muvofiqlashtiradi. Ular normativ hujjatlar, davlat dasturlari va tarmoqlarni rivojlantirish strategiyalarini ishlab chiqadi.",
      "Bundan tashqari, vazirliklar xalqaro tashkilotlar, chet el davlatlari va xalqaro moliyaviy institutlar bilan faol hamkorlik qiladi. Bu xalqaro hamkorlikni rivojlantirish va davlat boshqaruvi tizimiga zamonaviy boshqaruv amaliyotlarini joriy etishga yordam beradi.",
      "Vazirliklar tizimi davlat boshqaruvining samaradorligini va davlat organlari faoliyatining shaffofligini oshirishga qaratilgan maʼmuriy islohotlar doirasida doimiy takomillashtirilmoqda.",
    ],
  };
  const map = { ru, en, uz };
  return map[locale.value] || map.ru;
});

const usefulInfoText = computed(() => {
  const ru = {
    h2: "Официальные сайты министерств",
    paragraphs: [
      "Официальные сайты министерств Республики Узбекистан являются важным источником информации о деятельности государственных органов исполнительной власти. На этих интернет-ресурсах публикуются новости, государственные программы, нормативные документы и отчёты о деятельности министерств.",
      "На официальных сайтах министерств можно найти информацию о структуре ведомства, руководстве, контактных данных, государственных услугах и текущих проектах. Многие министерства также публикуют аналитические материалы, статистические данные и планы развития отраслей.",
      "Использование официальных сайтов позволяет гражданам, предпринимателям и исследователям получать достоверную информацию непосредственно от государственных органов. Это повышает прозрачность деятельности государственных учреждений и способствует развитию открытого государственного управления.",
      "Каталог Govinfo помогает быстро найти официальный сайт нужного министерства без необходимости длительного поиска в интернете.",
    ],
  };
  const en = {
    h2: "Official Websites of Ministries",
    paragraphs: [
      "The official websites of the ministries of the Republic of Uzbekistan are an important source of information about the activities of government bodies of the executive branch. These online resources publish news, state programs, regulatory documents and reports on the activities of ministries.",
      "On the official websites of ministries you can find information about the structure of the department, leadership, contact details, public services and current projects. Many ministries also publish analytical materials, statistical data and sector development plans.",
      "The use of official websites allows citizens, entrepreneurs and researchers to obtain reliable information directly from government bodies. This increases the transparency of government institutions and contributes to the development of open government.",
      "The Govinfo catalog helps you quickly find the official website of the ministry you need without the need for a lengthy search on the Internet.",
    ],
  };
  const uz = {
    h2: "Vazirliklar rasmiy saytlari",
    paragraphs: [
      "Oʻzbekiston Respublikasi vazirliklari rasmiy saytlari ijrochi hokimiyat davlat organlari faoliyati haqida maʼlumotning muhim manbai hisoblanadi. Ushbu internet resurslarda yangiliklar, davlat dasturlari, normativ hujjatlar va vazirliklar faoliyati boʻyicha hisobotlar nashr etiladi.",
      "Vazirliklar rasmiy saytlarida idora tuzilishi, rahbariyat, aloqa maʼlumotlari, davlat xizmatlari va joriy loyihalar haqida maʼlumot topish mumkin. Koʻplab vazirliklar, shuningdek, tahliliy materiallar, statistik maʼlumotlar va tarmoqlarni rivojlantirish rejalarini nashr etadi.",
      "Rasmiy saytlardan foydalanish fuqarolar, tadbirkorlar va tadqiqotchilarga davlat organlaridan toʻgʻridan-toʻgʻri ishonchli maʼlumot olish imkonini beradi. Bu davlat muassasalari faoliyatining shaffofligini oshiradi va ochiq davlat boshqaruvini rivojlantirishga yordam beradi.",
      "Govinfo katalogi internetda uzoq qidiruvsiz kerakli vazirlikning rasmiy saytini tezda topishga yordam beradi.",
    ],
  };
  const map = { ru, en, uz };
  return map[locale.value] || map.ru;
});

const otherGovBodiesText = computed(() => {
  const ru = {
    h2: "Другие государственные органы Узбекистана",
    intro:
      "Помимо министерств, в системе государственного управления Республики Узбекистан функционируют и другие государственные органы, выполняющие важные административные и регулирующие функции.",
    intro2:
      "К таким учреждениям относятся государственные агентства, комитеты, инспекции и другие специализированные органы власти. Они обеспечивают реализацию государственной политики в отдельных сферах, регулируют деятельность отраслей экономики и контролируют соблюдение законодательства.",
    listIntro:
      "На портале Govinfo вы также можете ознакомиться со следующими разделами каталога государственных органов:",
    outro:
      "Это позволяет получить более полное представление о структуре государственного управления Республики Узбекистан.",
    links: [
      { href: "/headquarters", text: "Высшие государственные органы" },
      { href: "/state", text: "Государственные комитеты и агентства" },
      { href: "/inspections", text: "Государственные инспекции" },
    ],
  };
  const en = {
    h2: "Other Government Bodies of Uzbekistan",
    intro:
      "In addition to ministries, other government bodies that perform important administrative and regulatory functions operate in the system of public administration of the Republic of Uzbekistan.",
    intro2:
      "Such institutions include state agencies, committees, inspections and other specialized government bodies. They ensure the implementation of state policy in certain areas, regulate the activities of economic sectors and monitor compliance with legislation.",
    listIntro:
      "On the Govinfo portal you can also familiarize yourself with the following sections of the catalog of state bodies:",
    outro:
      "This allows you to get a more complete picture of the structure of public administration of the Republic of Uzbekistan.",
    links: [
      { href: "/headquarters", text: "Supreme Government Bodies" },
      { href: "/state", text: "State Committees and Agencies" },
      { href: "/inspections", text: "State Inspections" },
    ],
  };
  const uz = {
    h2: "Oʻzbekistonning boshqa davlat organlari",
    intro:
      "Vazirliklar bilan bir qatorda, Oʻzbekiston Respublikasi davlat boshqaruvi tizimida muhim maʼmuriy va tartibga soluvchi funksiyalarni bajaradi.",
    intro2:
      "Bunday muassasalar davlat agentliklari, qoʻmitalari, inspeksiyalari va boshqa ixtisoslashtirilgan davlat organlarini oʻz ichiga oladi. Ular davlat siyosatini alohida sohalarda amalga oshirishni taʼminlaydi, iqtisodiyot tarmoqlari faoliyatini tartibga soladi va qonunchilikka rioya qilishni nazorat qiladi.",
    listIntro:
      "Govinfo portali orqali siz davlat organlari katalogining quyidagi boʻlimlari bilan ham tanishishingiz mumkin:",
    outro:
      "Bu Oʻzbekiston Respublikasi davlat boshqaruvi tuzilishining toʻliqroq tasavvuriga ega boʻlish imkonini beradi.",
    links: [
      { href: "/headquarters", text: "Oliy davlat organlari" },
      { href: "/state", text: "Davlat qoʻmitalari va agentliklari" },
      { href: "/inspections", text: "Davlat inspeksiyalari" },
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
        q: "Сколько министерств существует в Узбекистане?",
        a: "Количество министерств может изменяться в зависимости от административных реформ и изменений в структуре правительства. В настоящее время в Республике Узбекистан действует несколько ключевых министерств, отвечающих за различные направления государственной политики.",
      },
      {
        q: "Какую роль выполняют министерства?",
        a: "Министерства реализуют государственную политику, разрабатывают программы развития отраслей, контролируют деятельность подведомственных организаций и обеспечивают выполнение законов и государственных решений.",
      },
      {
        q: "Где можно найти официальные сайты министерств Узбекистана?",
        a: "Официальные сайты министерств представлены на портале Govinfo. На странице каталога можно перейти на официальный сайт каждого министерства и получить актуальную информацию о его деятельности.",
      },
      {
        q: "Какие министерства существуют в Узбекистане?",
        a: "В Узбекистане действуют министерства, отвечающие за различные сферы государственной политики, включая финансы, здравоохранение, образование, энергетику, экономику, юстицию, культуру, транспорт и другие направления.",
      },
      {
        q: "Зачем нужен каталог государственных сайтов?",
        a: "Каталог позволяет быстро найти официальный сайт государственного органа и получить достоверную информацию о его деятельности, программах и государственных услугах.",
      },
    ],
  };
  const en = {
    h2: "Frequently Asked Questions",
    items: [
      {
        q: "How many ministries exist in Uzbekistan?",
        a: "The number of ministries may change depending on administrative reforms and changes in the structure of the government. Currently, several key ministries operate in the Republic of Uzbekistan, responsible for various areas of state policy.",
      },
      {
        q: "What role do ministries perform?",
        a: "Ministries implement state policy, develop sector development programs, monitor the activities of subordinate organizations and ensure compliance with laws and state decisions.",
      },
      {
        q: "Where can I find the official websites of ministries in Uzbekistan?",
        a: "The official websites of ministries are presented on the Govinfo portal. On the catalog page you can go to the official website of each ministry and get up-to-date information about its activities.",
      },
      {
        q: "What ministries exist in Uzbekistan?",
        a: "Uzbekistan has ministries responsible for various areas of state policy, including finance, healthcare, education, energy, economy, justice, culture, transport and other areas.",
      },
      {
        q: "Why is a catalog of government websites needed?",
        a: "The catalog allows you to quickly find the official website of a government body and get reliable information about its activities, programs and public services.",
      },
    ],
  };
  const uz = {
    h2: "Tez-tez beriladigan savollar",
    items: [
      {
        q: "Oʻzbekistonda nechta vazirlik mavjud?",
        a: "Vazirliklar soni maʼmuriy islohotlar va hukumat tuzilishidagi oʻzgarishlarga qarab oʻzgarishi mumkin. Hozirda Oʻzbekiston Respublikasida davlat siyosatining turli yoʻnalishlariga javobgar bir nechta asosiy vazirliklar faoliyat yuritadi.",
      },
      {
        q: "Vazirliklar qanday rol bajaradi?",
        a: "Vazirliklar davlat siyosatini amalga oshiradi, tarmoqlarni rivojlantirish dasturlarini ishlab chiqadi, qaramor tashkilotlar faoliyatini nazorat qiladi va qonunlar va davlat qarorlarining bajarilishini taʼminlaydi.",
      },
      {
        q: "Oʻzbekiston vazirliklarining rasmiy saytlarini qayerda topish mumkin?",
        a: "Vazirliklar rasmiy saytlari Govinfo portali orqali taqdim etilgan. Katalog sahifasida har bir vazirlikning rasmiy saytiga oʻtishingiz va uning faoliyati haqida dolzarb maʼlumot olishingiz mumkin.",
      },
      {
        q: "Oʻzbekistonda qaysi vazirliklar mavjud?",
        a: "Oʻzbekistonda moliya, sogʻliqni saqlash, taʼlim, energetika, iqtisodiyot, adliya, madaniyat, transport va boshqa yoʻnalishlar boʻyicha davlat siyosatiga javobgar vazirliklar faoliyat yuritadi.",
      },
      {
        q: "Davlat saytlari katalogi nima uchun kerak?",
        a: "Katalog davlat organining rasmiy saytini tezda topish va uning faoliyati, dasturlari va davlat xizmatlari haqida ishonchli maʼlumot olish imkonini beradi.",
      },
    ],
  };
  const map = { ru, en, uz };
  return map[locale.value] || map.ru;
});
</script>

<template>
  <div>
    <div class="site-container">
      <section>
        <div class="border-b border-[#eee] pb-2 mb-4 md:mb-6">
          <h1 class="font-medium text-xl md:text-2xl">
            {{ headTitle }}
          </h1>
        </div>

        <div
          class="text-[#4B5563] base-bg leading-7 text-base 768:text-sm mb-6 space-y-2"
        >
          <p v-for="(para, i) in introText" :key="'intro-' + i">
            {{ para }}
          </p>
        </div>

        <div
          class="grid grid-cols-4 gap-4 768:grid-cols-2 768:gap-2 576:!grid-cols-1"
        >
          <nuxt-link
            v-for="(item, index) in ministries.data"
            :key="index"
            :to="`/ministries/${item.slug}`"
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
          </nuxt-link>
        </div>

        <div class="mt-8 pt-6 border-t border-[#eee]">
          <h2 class="font-semibold text-lg md:text-xl mb-4">
            {{ roleBlockText.h2 }}
          </h2>
          <div
            class="text-[#4B5563] base-bg leading-7 text-base 768:text-sm space-y-2"
          >
            <p v-for="(para, i) in roleBlockText.paragraphs" :key="'role-' + i">
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
            <p>{{ otherGovBodiesText.intro2 }}</p>
            <p>{{ otherGovBodiesText.listIntro }}</p>
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
            <p>
              {{ otherGovBodiesText.outro }}
            </p>
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
