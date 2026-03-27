<script setup>
import useInspections from "../../data/inspections";
import CategorySeo from "../../components/Seo/CategorySeo.vue";
import CategoryInfoTabs from "../../components/CategoryInfoTabs.vue";
import FaqAccordion from "../../components/FaqAccordion.vue";
import CategoryPopularOutside from "../../components/CategoryPopularOutside.vue";

const { t, locale } = useI18n();
const localePath = useLocalePath();
const inspections = useInspections();

const schemaOrgData = computed(() => {
  const ru = {
    name: "Инспекции Республики Узбекистан — официальные сайты",
    description:
      "Список государственных инспекций Узбекистана и ссылки на их официальные сайты.",
    url: "https://govinfo.uz/inspections",
    inLanguage: "ru",
  };
  const en = {
    name: "Inspections of the Republic of Uzbekistan — official websites",
    description:
      "List of state inspections of Uzbekistan and links to their official websites.",
    url: "https://govinfo.uz/en/inspections",
    inLanguage: "en",
  };
  const uz = {
    name: "Oʻzbekiston Respublikasi inspeksiyalari — rasmiy saytlar",
    description:
      "Oʻzbekiston davlat inspeksiyalari roʻyxati va ularning rasmiy saytlariga havolalar.",
    url: "https://govinfo.uz/uz/inspections",
    inLanguage: "uz",
  };
  const data = { ru, en, uz }[locale.value] || ru;
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
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
    "Инспекции Республики Узбекистан являются государственными органами контроля и надзора, обеспечивающими соблюдение законодательства, нормативных требований и государственных стандартов в различных сферах деятельности. Они осуществляют контроль за деятельностью организаций, предприятий и учреждений, включая финансовую, строительную, экологическую, промышленную и социальную области.",
    "Государственные инспекции Узбекистана выполняют важные функции по обеспечению законности, прозрачности и безопасности. Они проводят проверки, мониторинг и анализ деятельности субъектов, выявляют нарушения, принимают меры по их устранению и способствуют предотвращению правонарушений. Деятельность инспекций направлена на защиту прав граждан, поддержку стабильности экономики и развитие эффективной системы государственного контроля.",
    "На данной странице представлен актуальный список инспекций Республики Узбекистан. Здесь вы можете ознакомиться с государственными инспекциями, их основными функциями, полномочиями и перейти на официальные сайты для получения полной и достоверной информации о деятельности органов государственного надзора.",
  ];
  const en = [
    "Inspections of the Republic of Uzbekistan are state bodies of control and supervision that ensure compliance with legislation, regulatory requirements and state standards in various spheres of activity. They exercise control over the activities of organizations, enterprises and institutions, including financial, construction, environmental, industrial and social areas.",
    "State inspections of Uzbekistan perform important functions to ensure legality, transparency and safety. They conduct inspections, monitoring and analysis of the activities of entities, identify violations, take measures to eliminate them and help prevent offenses. The activities of inspections are aimed at protecting the rights of citizens, supporting economic stability and developing an effective system of state control.",
    "This page presents an up-to-date list of inspections of the Republic of Uzbekistan. Here you can learn about state inspections, their main functions, powers and go to official websites to obtain complete and reliable information about the activities of state supervision bodies.",
  ];
  const uz = [
    "Oʻzbekiston Respublikasi inspeksiyalari turli faoliyat sohalarida qonunchilikka, normativ talablarga va davlat standartlariga rioya qilishni taʼminlovchi davlat nazorati va kuzatuv organlari hisoblanadi. Ular tashkilotlar, korxonalar va muassasalar faoliyatini, jumladan moliyaviy, qurilish, ekologik, sanoat va ijtimoiy sohalarni nazorat qiladi.",
    "Oʻzbekiston davlat inspeksiyalari qonuniylik, shaffoflik va xavfsizlikni taʼminlash boʻyicha muhim funksiyalarni bajaradi. Ular subyektlar faoliyatini tekshirish, kuzatish va tahlil qilish, buzilishlarni aniqlash, ularni bartaraf etish choralarini qoʻllash va huquqbuzarliklarning oldini olishga yordam beradi. Inspeksiyalar faoliyati fuqarolar huquqlarini himoya qilish, iqtisodiy barqarorlikni qoʻllab-quvvatlash va samarali davlat nazorati tizimini rivojlantirishga qaratilgan.",
    "Ushbu sahifada Oʻzbekiston Respublikasi inspeksiyalari roʻyxati keltirilgan. Bu yerda davlat inspeksiyalari, ularning asosiy vazifalari, vakolatlari bilan tanishishingiz va davlat nazorati organlari faoliyati haqida toʻliq va ishonchli maʼlumot olish uchun rasmiy saytlarga oʻtishingiz mumkin.",
  ];
  const map = { ru, en, uz };
  return map[locale.value] || map.ru;
});

const inspectionsAboutText = computed(() => {
  const ru = {
    h2: "Государственные инспекции Республики Узбекистан",
    paragraphs: [
      "Государственные инспекции Узбекистана — это органы контроля и надзора, обеспечивающие соблюдение законодательства, нормативных требований и государственных стандартов. Они осуществляют проверки, мониторинг и контроль деятельности организаций в сферах экономики, строительства, экологии и социальной политики.",
      "Инспекции Республики Узбекистан выполняют ключевые функции по выявлению нарушений, предотвращению правонарушений и обеспечению прозрачности. Деятельность государственных инспекций направлена на защиту прав граждан, безопасность и стабильное развитие страны.",
    ],
  };
  const en = {
    h2: "State Inspections of the Republic of Uzbekistan",
    paragraphs: [
      "State inspections of Uzbekistan are control and supervision bodies that ensure compliance with legislation, regulatory requirements and state standards. They conduct inspections, monitoring and control of organizations in the spheres of economy, construction, ecology and social policy.",
      "Inspections of the Republic of Uzbekistan perform key functions in identifying violations, preventing offenses and ensuring transparency. The activities of state inspections are aimed at protecting the rights of citizens, safety and stable development of the country.",
    ],
  };
  const uz = {
    h2: "Oʻzbekiston Respublikasi davlat inspeksiyalari",
    paragraphs: [
      "Oʻzbekiston davlat inspeksiyalari qonunchilikka, normativ talablarga va davlat standartlariga rioya qilishni taʼminlovchi nazorat va kuzatuv organlari hisoblanadi. Ular iqtisodiyot, qurilish, ekologiya va ijtimoiy siyosat sohalarida tashkilotlar faoliyatini tekshirish, kuzatish va nazorat qilishni amalga oshiradi.",
      "Oʻzbekiston Respublikasi inspeksiyalari buzilishlarni aniqlash, huquqbuzarliklarning oldini olish va shaffoflikni taʼminlash boʻyicha asosiy funksiyalarni bajaradi. Davlat inspeksiyalari faoliyati fuqarolar huquqlarini himoya qilish, xavfsizlik va mamlakatning barqaror rivojlanishiga qaratilgan.",
    ],
  };
  const map = { ru, en, uz };
  return map[locale.value] || map.ru;
});

const officialSitesText = computed(() => {
  const ru = {
    h2: "Официальные сайты Инспекции",
    paragraphs: [
      "Официальные сайты инспекций Республики Узбекистан являются ключевым источником информации о деятельности органов государственного контроля и надзора. Здесь публикуются актуальные новости, результаты проверок, нормативные документы, отчёты и решения инспекций в различных сферах экономики и социальной политики.",
      "На официальных сайтах государственных инспекций Узбекистана представлена информация о функциях, полномочиях, структуре, руководстве и контактных данных. Также доступны сведения о проверках, требованиях, правилах и стандартах, обязательных для организаций и бизнеса.",
      "Использование официальных сайтов инспекций Узбекистана позволяет гражданам и предпринимателям получать достоверную информацию напрямую от государственных органов, проверять требования законодательства и снижать риски нарушений. Это повышает прозрачность, усиливает контроль и способствует развитию эффективной системы государственного надзора.",
      "Каталог Govinfo.uz предоставляет удобный доступ к официальным сайтам инспекций Узбекистана, помогая быстро найти нужный орган государственного контроля без длительного поиска.",
    ],
  };
  const en = {
    h2: "Official Websites of Inspections",
    paragraphs: [
      "Official websites of inspections of the Republic of Uzbekistan are a key source of information about the activities of state control and supervision bodies. They publish current news, inspection results, regulatory documents, reports and decisions of inspections in various spheres of economy and social policy.",
      "The official websites of state inspections of Uzbekistan provide information on functions, powers, structure, leadership and contact details. Information on inspections, requirements, rules and standards mandatory for organizations and businesses is also available.",
      "Using the official websites of inspections of Uzbekistan allows citizens and entrepreneurs to obtain reliable information directly from state bodies, verify legislative requirements and reduce the risk of violations. This increases transparency, strengthens control and contributes to the development of an effective state supervision system.",
      "The Govinfo.uz catalog provides convenient access to the official websites of inspections of Uzbekistan, helping to quickly find the right state control body without a lengthy search.",
    ],
  };
  const uz = {
    h2: "Inspeksiyalarning rasmiy saytlari",
    paragraphs: [
      "Oʻzbekiston Respublikasi inspeksiyalari rasmiy saytlari davlat nazorati va kuzatuv organlari faoliyati haqidagi maʼlumotning asosiy manbai hisoblanadi. Bu yerda iqtisodiyot va ijtimoiy siyosatning turli sohalarida dolzarb yangiliklar, tekshiruv natijalari, normativ hujjatlar, hisobotlar va inspeksiyalar qarorlari nashr etiladi.",
      "Oʻzbekiston davlat inspeksiyalari rasmiy saytlarida funksiyalar, vakolatlar, tuzilma, rahbariyat va aloqa maʼlumotlari haqida maʼlumotlar taqdim etilgan. Tashkilotlar va biznes uchun majburiy boʻlgan tekshiruvlar, talablar, qoidalar va standartlar haqidagi maʼlumotlar ham mavjud.",
      "Oʻzbekiston inspeksiyalari rasmiy saytlaridan foydalanish fuqarolar va tadbirkorlarga davlat organlaridan toʻgʻridan-toʻgʻri ishonchli maʼlumot olish, qonunchilik talablarini tekshirish va buzilish xavfini kamaytirish imkonini beradi. Bu shaffoflikni oshiradi, nazoratni kuchaytiradi va samarali davlat nazorati tizimini rivojlantirishga yordam beradi.",
      "Govinfo.uz katalogi Oʻzbekiston inspeksiyalari rasmiy saytlariga qulay kirish imkonini beradi va uzoq qidiruvsiz kerakli davlat nazorati organini tezda topishga yordam beradi.",
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
        q: "Что такое государственные инспекции Узбекистана?",
        a: "Государственные инспекции Узбекистана — это органы контроля и надзора, которые следят за соблюдением законодательства, норм и стандартов в различных сферах: строительстве, экологии, финансах, промышленности и других отраслях.",
      },
      {
        q: "Какие функции выполняют инспекции в Узбекистане?",
        a: "Инспекции осуществляют проверки организаций и бизнеса, контролируют соблюдение законодательства, выявляют нарушения, применяют меры воздействия и обеспечивают выполнение государственных требований и стандартов.",
      },
      {
        q: "Какие бывают инспекции в Узбекистане?",
        a: "В Узбекистане действуют различные государственные инспекции: строительные, экологические, трудовые, финансовые и другие органы надзора, регулирующие отдельные сферы экономики и общественной жизни.",
      },
      {
        q: "Где найти официальный сайт инспекций Узбекистана?",
        a: "Официальные сайты инспекций Узбекистана можно найти в каталоге Govinfo.uz. Здесь представлены актуальные ссылки, информация о функциях, полномочиях и контактных данных государственных инспекций.",
      },
      {
        q: "Как проходят проверки инспекций в Узбекистане?",
        a: "Проверки инспекций проводятся в соответствии с законодательством Республики Узбекистан. Они могут быть плановыми и внеплановыми, включают анализ деятельности организаций и направлены на выявление нарушений и обеспечение соблюдения норм.",
      },
      {
        q: "Как подготовиться к проверке инспекции?",
        a: "Для подготовки к проверке необходимо соблюдать требования законодательства, вести корректную документацию, выполнять установленные нормы и стандарты, а также своевременно устранять выявленные нарушения.",
      },
    ],
  };
  const en = {
    h2: "Frequently Asked Questions",
    items: [
      {
        q: "What are state inspections of Uzbekistan?",
        a: "State inspections of Uzbekistan are control and supervision bodies that monitor compliance with legislation, norms and standards in various spheres: construction, ecology, finance, industry and other sectors.",
      },
      {
        q: "What functions do inspections perform in Uzbekistan?",
        a: "Inspections conduct inspections of organizations and businesses, monitor compliance with legislation, identify violations, apply enforcement measures and ensure compliance with state requirements and standards.",
      },
      {
        q: "What types of inspections exist in Uzbekistan?",
        a: "Various state inspections operate in Uzbekistan: construction, environmental, labor, financial and other supervisory bodies regulating individual spheres of economy and public life.",
      },
      {
        q: "Where to find the official website of inspections of Uzbekistan?",
        a: "Official websites of inspections of Uzbekistan can be found in the Govinfo.uz catalog. It presents current links, information on functions, powers and contact details of state inspections.",
      },
      {
        q: "How do inspections conduct inspections in Uzbekistan?",
        a: "Inspections are conducted in accordance with the legislation of the Republic of Uzbekistan. They can be scheduled and unscheduled, include analysis of organizations' activities and are aimed at identifying violations and ensuring compliance with norms.",
      },
      {
        q: "How to prepare for an inspection?",
        a: "To prepare for an inspection, it is necessary to comply with legislative requirements, maintain proper documentation, comply with established norms and standards, and promptly eliminate identified violations.",
      },
    ],
  };
  const uz = {
    h2: "Tez-tez beriladigan savollar",
    items: [
      {
        q: "Oʻzbekiston davlat inspeksiyalari nima?",
        a: "Oʻzbekiston davlat inspeksiyalari qurilish, ekologiya, moliya, sanoat va boshqa sohalarda qonunchilikka, normativ talablarga va standartlarga rioya qilishni nazorat qiluvchi va kuzatuvchi organlar hisoblanadi.",
      },
      {
        q: "Oʻzbekistonda inspeksiyalar qanday funksiyalarni bajaradi?",
        a: "Inspeksiyalar tashkilotlar va biznesni tekshiradi, qonunchilikka rioya qilishni nazorat qiladi, buzilishlarni aniqlaydi, taʼsir choralarini qoʻllaydi va davlat talablari va standartlariga rioya qilishni taʼminlaydi.",
      },
      {
        q: "Oʻzbekistonda qanday inspeksiyalar mavjud?",
        a: "Oʻzbekistonda turli davlat inspeksiyalari faoliyat yuritadi: qurilish, ekologik, mehnat, moliyaviy va boshqa nazorat organlari iqtisodiyot va jamiyat hayotining alohida sohalarini tartibga soladi.",
      },
      {
        q: "Oʻzbekiston inspeksiyalari rasmiy saytini qayerda topish mumkin?",
        a: "Oʻzbekiston inspeksiyalari rasmiy saytlarini Govinfo.uz katalogida topish mumkin. Bu yerda dolzarb havolalar, davlat inspeksiyalari funksiyalari, vakolatlari va aloqa maʼlumotlari taqdim etilgan.",
      },
      {
        q: "Oʻzbekistonda inspeksiyalar tekshiruvlari qanday oʻtkaziladi?",
        a: "Inspeksiyalar tekshiruvlari Oʻzbekiston Respublikasi qonunchiligi asosida amalga oshiriladi. Ular rejalashtirilgan va rejalashtirilmagan boʻlishi mumkin, tashkilotlar faoliyatini tahlil qilishni oʻz ichiga oladi va buzilishlarni aniqlash va normlarga rioya qilishni taʼminlashga qaratilgan.",
      },
      {
        q: "Inspeksiya tekshiruviga qanday tayyorgarlik koʻrish kerak?",
        a: "Tekshiruvga tayyorgarlik koʻrish uchun qonunchilik talablariga rioya qilish, toʻgʻri hujjatlarni yuritish, belgilangan normlar va standartlarga amal qilish, shuningdek aniqlangan buzilishlarni bartaraf etish kerak.",
      },
    ],
  };
  const map = { ru, en, uz };
  return map[locale.value] || map.ru;
});

const otherGovBodiesText = computed(() => {
  const ru = {
    h2: "Другие государственные органы Узбекистана",
    intro:
      "На портале Govinfo представлены и другие государственные учреждения Республики Узбекистан. Помимо инспекций, в каталоге вы найдёте высшие органы власти, министерства, государственные комитеты и агентства.",
    listIntro:
      "Ознакомьтесь с другими разделами каталога государственных органов:",
    links: [
      { href: "/headquarters", text: "Высшие государственные органы" },
      { href: "/ministries", text: "Министерства Республики Узбекистан" },
      { href: "/state", text: "Государственные комитеты и агентства" },
    ],
  };
  const en = {
    h2: "Other Government Bodies of Uzbekistan",
    intro:
      "The Govinfo portal also presents other state institutions of the Republic of Uzbekistan. In addition to inspections, the catalog includes supreme government bodies, ministries, state committees and agencies.",
    listIntro:
      "Explore other sections of the catalog of government bodies:",
    links: [
      { href: "/headquarters", text: "Supreme Government Bodies" },
      { href: "/ministries", text: "Ministries of the Republic of Uzbekistan" },
      { href: "/state", text: "State Committees and Agencies" },
    ],
  };
  const uz = {
    h2: "Oʻzbekistonning boshqa davlat organlari",
    intro:
      "Govinfo portali Oʻzbekiston Respublikasining boshqa davlat muassasalarini ham taqdim etadi. Inspeksiyalardan tashqari, katalogda oliy davlat organlari, vazirliklar, davlat qoʻmitalari va agentliklar mavjud.",
    listIntro:
      "Davlat organlari katalogining boshqa boʻlimlari bilan tanishing:",
    links: [
      { href: "/headquarters", text: "Oliy davlat organlari" },
      { href: "/ministries", text: "Oʻzbekiston Respublikasi vazirliklari" },
      { href: "/state", text: "Davlat qoʻmitalari va agentliklari" },
    ],
  };
  const map = { ru, en, uz };
  return map[locale.value] || map.ru;
});

const inspTableText = computed(() => {
  const ru = {
    h2: "Список государственных инспекций Республики Узбекистан",
    colOrganization: "Инспекция",
    colType: "Сфера",
    colFunction: "Функции",
    colSite: "Официальный сайт",
  };
  const en = {
    h2: "List of State Inspections of the Republic of Uzbekistan",
    colOrganization: "Inspection",
    colType: "Sphere",
    colFunction: "Functions",
    colSite: "Official Website",
  };
  const uz = {
    h2: "Oʻzbekiston Respublikasi davlat inspeksiyalari roʻyxati",
    colOrganization: "Inspeksiya",
    colType: "Soha",
    colFunction: "Funksiyalar",
    colSite: "Rasmiy sayt",
  };
  const map = { ru, en, uz };
  return map[locale.value] || map.ru;
});

const inspTableRows = computed(() => {
  return inspections.data
    .filter((item) => t(item.title))
    .map((item) => {
      const link = t(item.link);
      let linkText = "-";
      if (link) {
        try {
          linkText = new URL(link).hostname.replace(/^www\./, "");
        } catch {
          linkText = link.length > 30 ? link.slice(0, 27) + "…" : link;
        }
      }
      return {
        org: t(item.title),
        type: t(item.tag),
        func: t(item.shortDesc),
        link,
        linkText,
      };
    });
});
</script>

<template>
  <div>
    <CategorySeo
      title-key="Inspections.seo.title"
      description-key="Inspections.seo.description"
    />
    <div class="site-container">
      <section>
        <div class="border-b border-[#eee] pb-2 mb-4 md:mb-6">
          <h1 class="font-medium text-xl md:text-2xl">
            {{ t("Inspections.headtitle") }}
          </h1>
        </div>

        <div
          class="text-[#4B5563] base-bg leading-6 text-sm 768:text-xs mb-6 space-y-1.5"
        >
          <p v-for="(para, i) in introText" :key="'intro-' + i">
            {{ para }}
          </p>
        </div>

        <div
          class="grid grid-cols-5 gap-3 768:grid-cols-2 768:gap-2 576:!grid-cols-1"
        >
          <nuxt-link
            v-for="(item, index) in inspections.data"
            :key="index"
            :to="localePath(`/inspections/${item.slug}`)"
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

        <CategoryInfoTabs
          :labels="[
            inspectionsAboutText.h2,
            officialSitesText.h2,
            otherGovBodiesText.h2,
          ]"
        >
          <template #panel0>
            <p
              v-for="(para, i) in inspectionsAboutText.paragraphs"
              :key="'insp-' + i"
            >
              {{ para }}
            </p>
          </template>
          <template #panel1>
            <p
              v-for="(para, i) in officialSitesText.paragraphs"
              :key="'sites-' + i"
            >
              {{ para }}
            </p>
          </template>
          <template #panel2>
            <p>{{ otherGovBodiesText.intro }}</p>
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
          </template>
        </CategoryInfoTabs>

        <div v-if="inspTableRows.length" class="overflow-x-auto my-6">
          <h2 class="font-semibold text-lg md:text-xl mb-4">
            {{ inspTableText.h2 }}
          </h2>
          <table class="w-full text-sm border-collapse border border-[#e5e7eb]">
            <thead>
              <tr class="bg-[#f8fafc]">
                <th
                  class="border border-[#e5e7eb] px-4 py-3 text-left font-bold text-[#1e293b]"
                >
                  {{ inspTableText.colOrganization }}
                </th>
                <th
                  class="border border-[#e5e7eb] px-4 py-3 text-left font-bold text-[#1e293b]"
                >
                  {{ inspTableText.colType }}
                </th>
                <th
                  class="border border-[#e5e7eb] px-4 py-3 text-left font-bold text-[#1e293b]"
                >
                  {{ inspTableText.colFunction }}
                </th>
                <th
                  class="border border-[#e5e7eb] px-4 py-3 text-center font-bold text-[#1e293b]"
                >
                  {{ inspTableText.colSite }}
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-[#e5e7eb] text-[#4b5563]">
              <tr
                v-for="(row, i) in inspTableRows"
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
                    v-if="row.link"
                    :href="row.link"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-blue-600 hover:underline"
                  >
                    {{ row.linkText }}
                  </a>
                  <span v-else>{{ row.linkText }}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <CategoryPopularOutside exclude-category="inspections" />
        <FaqAccordion :title="faqText.h2" :items="faqText.items" />
      </section>
    </div>
  </div>
</template>
