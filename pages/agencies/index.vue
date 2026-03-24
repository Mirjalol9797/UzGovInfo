<script setup>
import useAgencies from "../../data/agencies";
import CategorySeo from "../../components/Seo/CategorySeo.vue";
import CategoryInfoTabs from "../../components/CategoryInfoTabs.vue";
import FaqAccordion from "../../components/FaqAccordion.vue";

const { t, locale } = useI18n();
const localePath = useLocalePath();
const agencies = useAgencies();

function hostFromUrl(raw) {
  if (!raw || raw === "#") return "—";
  try {
    return new URL(raw).hostname.replace(/^www\./, "");
  } catch {
    const s = String(raw)
      .replace(/^https?:\/\//, "")
      .replace(/^www\./, "");
    return s.split("/")[0] || "—";
  }
}

const schemaOrgData = computed(() => {
  const ru = {
    name: "Агентства Республики Узбекистан",
    description:
      "Каталог государственных агентств Республики Узбекистан со ссылками на официальные сайты и кратким описанием функций.",
    url: "https://govinfo.uz/agencies",
    inLanguage: "ru",
  };
  const en = {
    name: "Agencies of the Republic of Uzbekistan",
    description:
      "Catalogue of state agencies of the Republic of Uzbekistan with links to official websites and summary of functions.",
    url: "https://govinfo.uz/en/agencies",
    inLanguage: "en",
  };
  const uz = {
    name: "Oʻzbekiston Respublikasi agentliklari",
    description:
      "Oʻzbekiston Respublikasi davlat agentliklari katalogi, rasmiy saytlar havolalari va funksiyalarining qisqacha tavsifi.",
    url: "https://govinfo.uz/uz/agencies",
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
    "Государственные агентства Республики Узбекистан выполняют специализированные функции в экономике, социальной сфере, цифровизации, инвестициях, экологии, здравоохранении, культуре и других направлениях государственной политики.",
    "Агентства участвуют в реализации законов, указов и программ Президента и Кабинета Министров, развивают отраслевые сервисы, взаимодействуют с гражданами и бизнесом и нередко подчиняются профильным министерствам либо непосредственно Кабинету Министров.",
    "В отличие от министерств, которые задают политику по целым отраслям, агентства чаще сосредоточены на конкретных задачах: регулирование, надзор, цифровые реестры, поддержка экспорта, архивы, стандарты, миграция, космос, энергоэффективность и др.",
    "На этой странице приведён список агентств с переходом на карточку организации на Govinfo и на официальный интернет-ресурс ведомства. Так вы получаете проверенную ссылку и краткое описание компетенции без длительного поиска.",
  ];
  const en = [
    "State agencies of the Republic of Uzbekistan perform specialized functions in the economy, social policy, digital transformation, investment, ecology, health, culture and other areas of public policy.",
    "Agencies help implement laws, presidential acts and cabinet programmes, develop sector services, engage citizens and businesses, and are often subordinate to line ministries or directly to the Cabinet of Ministers.",
    "Unlike ministries, which set policy for whole sectors, agencies usually focus on specific tasks: regulation, supervision, digital registers, export support, archives, standards, migration, space, energy efficiency and more.",
    "This page lists agencies with links to each organization’s Govinfo page and to its official website, so you get a verified link and a short description of its remit without a long search.",
  ];
  const uz = [
    "Oʻzbekiston Respublikasining davlat agentliklari iqtisodiyot, ijtimoiy soha, raqamlashtirish, investitsiyalar, ekologiya, salomatlik, madaniyat va davlat siyosatining boshqa yoʻnalishlarida ixtisoslashgan vazifalarni bajaradi.",
    "Agentliklar Prezident va Vazirlar Mahkamasi qonunlari, farmonlari va dasturlarini amalga oshirishda ishtirok etadi, soha xizmatlarini rivojlantiradi, fuqarolar va biznes bilan hamkorlik qiladi va koʻpincha tegishli vazirliklarga yoki toʻgʻridan-toʻgʻri Vazirlar Mahkamasi huzuriga boʻysunadi.",
    "Butun sohalar boʻyicha siyosat belgilaydigan vazirliklardan farqli ravishda agentliklar odatda aniq vazifalarga ega: tartibga solish, nazorat, raqamli reestrlar, eksportni qoʻllab-quvvatlash, arxivlar, standartlar, migratsiya, kosmos, energiya samaradorligi va boshqalar.",
    "Ushbu sahifada agentliklar roʻyxati, Govinfo dagi tashkilot kartasiga va rasmiy saytga oʻtish imkoniyatlari keltirilgan. Tekshirilgan havola va vakolatning qisqacha tavsifi uzoq qidiruvisiz qoʻl ostida boʻladi.",
  ];
  const map = { ru, en, uz };
  return map[locale.value] || map.ru;
});

const structureAgencyText = computed(() => {
  const ru = {
    h2: "Роль агентств в системе государственного управления",
    paragraphs: [
      "Агентства входят в систему органов исполнительной власти и реализуют отдельные направления государственной политики: от регистрации и лицензирования до цифровых платформ и международного сотрудничества в профильной сфере.",
      "Правовой статус, задачи и подчинённость каждого агентства определяются законодательством и нормативными актами; на официальных сайтах публикуются структура, документы, государственные услуги и открытые данные в пределах компетенции.",
      "Многие агентства развивают электронные сервисы и единые информационные системы, снижая административную нагрузку на граждан и предпринимателей и повышая прозрачность деятельности государства.",
      "Координация с министерствами и Кабинетом Министров позволяет согласовывать отраслевую политику с практической реализацией программ, проектов и надзорных функций.",
      "Для пользователей Govinfo важно различать карточку агентства на нашем каталоге (обзор и ссылка на официальный ресурс) и сам сайт ведомства, где размещаются актуальные формы, реестры и новости.",
    ],
  };
  const en = {
    h2: "The role of agencies in public administration",
    paragraphs: [
      "Agencies are part of the executive branch and implement specific areas of state policy — from registration and licensing to digital platforms and international cooperation in their field.",
      "Each agency’s legal status, tasks and reporting lines are set by law and regulations; official websites publish structure, documents, public services and open data within their mandate.",
      "Many agencies develop e-services and unified information systems, reducing administrative burden on citizens and businesses and increasing transparency.",
      "Coordination with ministries and the Cabinet of Ministers aligns sector policy with practical delivery of programmes, projects and supervisory functions.",
      "On Govinfo, the agency card gives an overview and a verified link to the official site, where up-to-date forms, registers and news are published.",
    ],
  };
  const uz = {
    h2: "Davlat boshqaruvi tizimida agentliklarning roli",
    paragraphs: [
      "Agentliklar ijrochi hokimiyat organlari tizimiga kiradi va davlat siyosatining alohida yoʻnalishlarini amalga oshiradi: roʻyxatdan oʻtish va litsenziyalashdan tortib raqamli platformalar va soha boʻyicha xalqaro hamkorlikgacha.",
      "Har bir agentlikning huquqiy maqomi, vazifalari va boʻysunuvi qonun hujjatlari bilan belgilanadi; rasmiy saytlarda tuzilma, hujjatlar, davlat xizmatlari va vakolat doirasidagi ochiq maʼlumotlar joylashtiriladi.",
      "Koʻplab agentliklar elektron xizmatlar va yagona axborot tizimlarini rivojlantiradi, fuqarolar va tadbirkorlarning maʼmuriy yukini kamaytiradi va davlat faoliyatining shaffofligini oshiradi.",
      "Vazirliklar va Vazirlar Mahkamasi bilan muvofiqlashtirish soha siyosatini dasturlar, loyihalar va nazorat funksiyalarining amaliy bajarilishi bilan uygʻunlashtirish imkonini beradi.",
      "Govinfo dagi agentlik kartasi sharh va rasmiy resursga tekshirilgan havolani beradi; dolzarb shakllar, reestrlar va yangiliklar esa oʻsha saytda joylashadi.",
    ],
  };
  const map = { ru, en, uz };
  return map[locale.value] || map.ru;
});

const usefulAgencyInfoText = computed(() => {
  const ru = {
    h2: "Официальные сайты государственных агентств",
    paragraphs: [
      "Официальные сайты агентств — основной источник достоверных сведений о компетенции ведомства: нормативные акты, перечни услуг, новости, открытые данные и контакты.",
      "Через официальные порталы граждане и организации получают доступ к электронным заявлениям, реестрам, статистике и разъяснениям без посредников.",
      "На Govinfo собран каталог агентств со ссылками на официальные сайты: вы быстро находите нужное ведомство и переходите на проверенный адрес.",
      "При работе с госорганами рекомендуется сверяться именно с официальным доменом ведомства и с материалами на портале gov.uz или специализированных доменах, указанных в карточке.",
      "Централизованный каталог на Govinfo дополняет поиск по сайту и помогает ориентироваться в большом числе специализированных агентств.",
    ],
  };
  const en = {
    h2: "Official websites of state agencies",
    paragraphs: [
      "Agency official websites are the main source of reliable information on an institution’s remit: regulations, service lists, news, open data and contacts.",
      "Through official portals, citizens and organizations access e-applications, registers, statistics and guidance without intermediaries.",
      "Govinfo hosts a catalogue of agencies with links to official sites so you can quickly find the right body and open a verified address.",
      "When dealing with government, use the agency’s official domain and materials on gov.uz or other domains listed in the card.",
      "Govinfo’s centralized catalogue complements site search and helps navigate many specialized agencies.",
    ],
  };
  const uz = {
    h2: "Davlat agentliklarining rasmiy saytlari",
    paragraphs: [
      "Agentliklarning rasmiy saytlari vazirlik vakolati haqidagi ishonchli axborotning asosiy manbai hisoblanadi: normativ hujjatlar, xizmatlar roʻyxati, yangiliklar, ochiq maʼlumotlar va kontaktlar.",
      "Rasmiy portallar orqali fuqarolar va tashkilotlar vositachilarsiz elektron arizalar, reestrlar, statistika va tushuntirishlarga kirishadi.",
      "Govinfo da rasmiy saytlarga havolalar bilan agentliklar katalogi jamlangan: kerakli organni tez topasiz va tekshirilgan manzilga oʻtasiz.",
      "Davlat bilan ishlashda aynan vazirlikning rasmiy domeni va kartada koʻrsatilgan gov.uz yoki ixtisoslashgan domenlardagi materiallardan foydalanish tavsiya etiladi.",
      "Govinfo dagi markazlashtirilgan katalog sayt qidiruvini toʻldiradi va koʻplab ixtisoslashgan agentliklar orasida orientatsiya beradi.",
    ],
  };
  const map = { ru, en, uz };
  return map[locale.value] || map.ru;
});

const otherCatalogSectionsText = computed(() => {
  const ru = {
    h2: "Другие разделы каталога государственных органов",
    intro:
      "Помимо агентств, на портале Govinfo представлены высшие органы власти, министерства, государственные комитеты и инспекции Республики Узбекистан.",
    listIntro: "Перейти к разделам:",
    links: [
      { href: "/headquarters", text: "Высшие государственные органы" },
      { href: "/ministries", text: "Министерства Республики Узбекистан" },
      { href: "/state", text: "Государственные комитеты и ведомства" },
      { href: "/inspections", text: "Государственные инспекции" },
    ],
  };
  const en = {
    h2: "Other sections of the government bodies catalogue",
    intro:
      "Besides agencies, the Govinfo portal lists supreme bodies of power, ministries, state committees and inspections of the Republic of Uzbekistan.",
    listIntro: "Go to sections:",
    links: [
      { href: "/headquarters", text: "Supreme government bodies" },
      { href: "/ministries", text: "Ministries of the Republic of Uzbekistan" },
      { href: "/state", text: "State committees and bodies" },
      { href: "/inspections", text: "State inspections" },
    ],
  };
  const uz = {
    h2: "Davlat organlari katalogining boshqa boʻlimlari",
    intro:
      "Agentliklardan tashqari Govinfo portali Oʻzbekiston Respublikasining oliy davlat organlari, vazirliklar, davlat qoʻmitalari va inspeksiyalarini ham oʻz ichiga oladi.",
    listIntro: "Boʻlimlarga oʻtish:",
    links: [
      { href: "/headquarters", text: "Oliy davlat organlari" },
      { href: "/ministries", text: "Oʻzbekiston Respublikasi vazirliklari" },
      { href: "/state", text: "Davlat qoʻmitalari va idoralari" },
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
        q: "Чем агентства отличаются от министерств?",
        a: "Министерства формируют отраслевую политику и общее регулирование; агентства чаще реализуют узкоспециализированные функции, сервисы и программы в конкретной сфере.",
      },
      {
        q: "Кому подчиняются государственные агентства?",
        a: "Подчинённость задаётся законом: агентство может находиться при министерстве, при Кабинете Министров или иметь иной статус — уточнять лучше по карточке организации и официальному сайту.",
      },
      {
        q: "Где найти официальный сайт агентства?",
        a: "В каталоге Govinfo у каждой карточки указана ссылка на официальный ресурс; также на странице агентства есть блок с переходом на официальный сайт.",
      },
      {
        q: "Есть ли у агентств страницы с подробным описанием на Govinfo?",
        a: "Для многих агентств доступна отдельная страница с вводным текстом, разделом «что найти на официальном сайте», ответами на частые вопросы и структурированными данными.",
      },
      {
        q: "Как быстро найти нужное агентство?",
        a: "Используйте поиск на главной странице Govinfo или просмотрите сетку карточек в разделе «Агентства»; у каждой карточки есть краткое описание и тег сферы деятельности.",
      },
      {
        q: "Зачем каталог агентств на Govinfo, если есть gov.uz?",
        a: "Govinfo помогает сориентироваться между органами, даёт единый стиль карточек и прямую ссылку на официальный раздел или сайт ведомства без фишинга и случайных копий.",
      },
    ],
  };
  const en = {
    h2: "Frequently asked questions",
    items: [
      {
        q: "How do agencies differ from ministries?",
        a: "Ministries shape sector policy and broad regulation; agencies usually deliver specialized functions, services and programmes in a specific field.",
      },
      {
        q: "Who do state agencies report to?",
        a: "Reporting lines are set by law: an agency may sit under a ministry, under the Cabinet of Ministers or have another status — check the organization card and official website.",
      },
      {
        q: "Where can I find an agency’s official website?",
        a: "Each Govinfo catalogue card links to the official resource; the agency page also has a block linking to the official site.",
      },
      {
        q: "Do agencies have detailed pages on Govinfo?",
        a: "Many agencies have a dedicated page with an introduction, “what you can find on the official site”, FAQs and structured data.",
      },
      {
        q: "How can I find an agency quickly?",
        a: "Use search on the Govinfo home page or browse the grid in the Agencies section; each card has a short description and an activity tag.",
      },
      {
        q: "Why an agency catalogue on Govinfo if gov.uz exists?",
        a: "Govinfo helps navigate between bodies, offers a consistent card layout and a direct link to the official section or site, reducing confusion and unofficial copies.",
      },
    ],
  };
  const uz = {
    h2: "Tez-tez beriladigan savollar",
    items: [
      {
        q: "Agentliklar vazirliklardan qanday farq qiladi?",
        a: "Vazirliklar soha siyosatini shakllantiradi va keng tartibga solishni amalga oshiradi; agentliklar odatda maʼlum sohadagi tor ixtisoslashgan vazifalar, xizmatlar va dasturlarni bajaradi.",
      },
      {
        q: "Davlat agentliklari kimga boʻysunadi?",
        a: "Boʻysunuv qonun bilan belgilanadi: agentlik vazirlik, Vazirlar Mahkamasi yoki boshqa status ostida boʻlishi mumkin — tashkilot kartasi va rasmiy saytdan aniqlash yaxshi.",
      },
      {
        q: "Agentlikning rasmiy saytini qayerdan topish mumkin?",
        a: "Govinfo katalogidagi har bir kartada rasmiy resursga havola bor; agentlik sahifasida ham rasmiy saytga oʻtish bloki mavjud.",
      },
      {
        q: "Govinfo da agentliklar uchun batafsil sahifalar bormi?",
        a: "Koʻplab agentliklar uchun alohida sahifa mavjud: kirish matni, rasmiy saytda nimani topish mumkinligi, tez-tez beriladigan savollar va strukturalangan maʼlumotlar bilan.",
      },
      {
        q: "Kerakli agentlikni qanday tez topish mumkin?",
        a: "Govinfo bosh sahifasidagi qidiruvdan yoki «Agentliklar» boʻlimidagi kartochkalar panjarasidan foydalaning; har bir kartada qisqacha tavsif va faoliyat tegi bor.",
      },
      {
        q: "gov.uz boʻlsa, Govinfo dagi agentliklar katalogi nima uchun kerak?",
        a: "Govinfo organlar orasida orientatsiya beradi, kartochkalarning yagona uslubini taʼminlaydi va rasmiy boʻlim yoki saytga toʻgʻridan-toʻgʻri havola beradi — fishing va tasodifiy nusxalar xavfini kamaytiradi.",
      },
    ],
  };
  const map = { ru, en, uz };
  return map[locale.value] || map.ru;
});

const agencyTableText = computed(() => {
  const ru = {
    h2: "Список государственных агентств Республики Узбекистан",
    colOrganization: "Агентство",
    colType: "Сфера / тег",
    colFunction: "Краткое описание",
    colSite: "Официальный сайт",
  };
  const en = {
    h2: "List of state agencies of the Republic of Uzbekistan",
    colOrganization: "Agency",
    colType: "Field / tag",
    colFunction: "Short description",
    colSite: "Official website",
  };
  const uz = {
    h2: "Oʻzbekiston Respublikasi davlat agentliklari roʻyxati",
    colOrganization: "Agentlik",
    colType: "Soha / teg",
    colFunction: "Qisqacha tavsif",
    colSite: "Rasmiy sayt",
  };
  const map = { ru, en, uz };
  return map[locale.value] || map.ru;
});

const agencyTableRows = computed(() =>
  agencies.data.map((item) => {
    const link = t(item.link);
    return {
      org: t(item.title),
      type: t(item.tag),
      func: t(item.shortDesc),
      link,
      linkText: hostFromUrl(link),
    };
  })
);
</script>

<template>
  <div>
    <CategorySeo
      title-key="Agencies.seo.title"
      description-key="Agencies.seo.description"
    />
    <div class="site-container">
      <section>
        <div class="border-b border-[#eee] pb-2 mb-4 md:mb-6">
          <h1 class="font-medium text-xl md:text-2xl">
            {{ t("Agencies.headtitle") }}
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
            v-for="(item, index) in agencies.data"
            :key="index"
            :to="localePath(`/agencies/${item.slug}`)"
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
            structureAgencyText.h2,
            usefulAgencyInfoText.h2,
            otherCatalogSectionsText.h2,
          ]"
        >
          <template #panel0>
            <p
              v-for="(para, i) in structureAgencyText.paragraphs"
              :key="'structure-' + i"
            >
              {{ para }}
            </p>
          </template>
          <template #panel1>
            <p
              v-for="(para, i) in usefulAgencyInfoText.paragraphs"
              :key="'useful-' + i"
            >
              {{ para }}
            </p>
          </template>
          <template #panel2>
            <p>{{ otherCatalogSectionsText.intro }}</p>
            <p>{{ otherCatalogSectionsText.listIntro }}</p>
            <ul class="list-disc list-inside mt-2 space-y-1">
              <li
                v-for="(link, i) in otherCatalogSectionsText.links"
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

        <div class="overflow-x-auto my-6">
          <h2 class="font-semibold text-lg md:text-xl mb-4">
            {{ agencyTableText.h2 }}
          </h2>
          <table class="w-full text-sm border-collapse border border-[#e5e7eb]">
            <thead>
              <tr class="bg-[#f8fafc]">
                <th
                  class="border border-[#e5e7eb] px-4 py-3 text-left font-bold text-[#1e293b]"
                >
                  {{ agencyTableText.colOrganization }}
                </th>
                <th
                  class="border border-[#e5e7eb] px-4 py-3 text-left font-bold text-[#1e293b]"
                >
                  {{ agencyTableText.colType }}
                </th>
                <th
                  class="border border-[#e5e7eb] px-4 py-3 text-left font-bold text-[#1e293b]"
                >
                  {{ agencyTableText.colFunction }}
                </th>
                <th
                  class="border border-[#e5e7eb] px-4 py-3 text-center font-bold text-[#1e293b]"
                >
                  {{ agencyTableText.colSite }}
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-[#e5e7eb] text-[#4b5563]">
              <tr
                v-for="(row, i) in agencyTableRows"
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

        <FaqAccordion :title="faqText.h2" :items="faqText.items" />
      </section>
    </div>
  </div>
</template>
