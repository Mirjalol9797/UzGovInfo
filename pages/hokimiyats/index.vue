<script setup>
import useHokimiyats from "../../data/hokimiyats";
import CategorySeo from "../../components/Seo/CategorySeo.vue";
import CategoryInfoTabs from "../../components/CategoryInfoTabs.vue";
import FaqAccordion from "../../components/FaqAccordion.vue";
import CategoryPopularOutside from "../../components/CategoryPopularOutside.vue";

const { t, locale } = useI18n();
const localePath = useLocalePath();
const hokimiyats = useHokimiyats();

const schemaOrgData = computed(() => {
  const ru = {
    name: "Хокимияты Республики Узбекистан — официальные сайты",
    description:
      "Каталог хокимиятов областей, города Ташкента и Совета Министров Республики Каракалпакстан: ссылки на официальные интернет-ресурсы.",
    url: "https://govinfo.uz/hokimiyats",
    inLanguage: "ru",
  };
  const en = {
    name: "Khokimiyats of the Republic of Uzbekistan — official websites",
    description:
      "Catalogue of regional administrations, Tashkent city administration and the Council of Ministers of the Republic of Karakalpakstan: links to official websites.",
    url: "https://govinfo.uz/en/hokimiyats",
    inLanguage: "en",
  };
  const uz = {
    name: "Oʻzbekiston Respublikasi hokimiyatlari — rasmiy saytlar",
    description:
      "Viloyatlar, Toshkent shahri va Qoraqalpogʻiston Respublikasi Vazirlar Kengashi hokimiyatlari: rasmiy internet resurslariga havolalar.",
    url: "https://govinfo.uz/uz/hokimiyats",
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
    "Хокимият — орган исполнительной власти на территории области, района, города либо Республики Каракалпакстан. Хокимияты обеспечивают реализацию законодательства, решений Президента и Кабинета Министров, ведут социально-экономическое развитие региона, координируют работу местных органов и взаимодействуют с гражданами и бизнесом.",
    "В каталоге Govinfo.uz собираются официальные интернет-ресурсы хокимиятов: Совета Министров Республики Каракалпакстан, областей, города Ташкента. На сайтах публикуются новости региона, структура аппарата, приём граждан, государственные и муниципальные услуги в компетенции органа, нормативные документы и контакты.",
    "Список будет пополняться: карточки хокимиятов добавляются по мере подготовки описаний и проверки ссылок.",
  ];
  const en = [
    "A khokimiyat is the executive authority at the level of a region, district, city or the Republic of Karakalpakstan. Khokimiyats implement legislation and decisions of the President and Cabinet of Ministers, guide the region’s socio-economic development, coordinate local bodies and engage with citizens and businesses.",
    "The Govinfo.uz catalogue brings together official websites of khokimiyats: the Council of Ministers of the Republic of Karakalpakstan, regional administrations and Tashkent city. Sites publish regional news, organisational structure, reception of citizens, public and municipal services within the body’s competence, regulations and contacts.",
    "The list will grow: khokimiyat cards are added as descriptions are prepared and links verified.",
  ];
  const uz = [
    "Hokimiyat — viloyat, tuman, shahar yoki Qoraqalpogʻiston Respublikasi boʻyicha ijroiya hokimiyati organi. Hokimiyatlar qonunchilik, Prezident va Vazirlar Kengashi qarorlarini amalga oshiradi, hududning ijtimoiy-iqtisodiy rivojlanishini taʼminlaydi, mahalliy organlar ishini muvofiqlashtiradi, fuqarolar va biznes bilan hamkorlik qiladi.",
    "Govinfo.uz katalogida hokimiyatlarning rasmiy saytlari jamlanadi: Qoraqalpogʻiston Respublikasi Vazirlar Kengashi, viloyatlar, Toshkent shahri. Saytlarda hudud yangiliklari, tuzilma, fuqarolar qabuli, organ vakolatidagi davlat va kommunal xizmatlar, normativ hujjatlar va aloqa maʼlumotlari joylashtiriladi.",
    "Roʻyxat toʻldiriladi: hokimiyat kartalari tavsiflar tayyorlangan va havolalar tekshirilgan sayin qoʻshiladi.",
  ];
  const map = { ru, en, uz };
  return map[locale.value] || map.ru;
});

const hokimAboutText = computed(() => {
  const ru = {
    h2: "Хокимияты в системе государственного управления",
    paragraphs: [
      "Региональные и местные органы исполнительной власти играют ключевую роль в реализации государственной политики на местах: развитие инфраструктуры, поддержка предпринимательства, социальная сфера, благоустройство и работа с обращениями граждан.",
      "Официальные сайты хокимиятов — основной канал публикации решений, программ развития территории, открытых данных и контактов для жителей и организаций.",
    ],
  };
  const en = {
    h2: "Khokimiyats in public administration",
    paragraphs: [
      "Regional and local executive bodies play a key role in implementing state policy on the ground: infrastructure, business support, social services, urban improvement and citizen appeals.",
      "Official khokimiyat websites are the main channel for publishing decisions, territorial development programmes, open data and contacts for residents and organisations.",
    ],
  };
  const uz = {
    h2: "Davlat boshqaruvi tizimida hokimiyatlar",
    paragraphs: [
      "Hududiy va mahalliy ijroiya organlari davlat siyosatini amalda joriy etishda muhim rol oʻynaydi: infratuzilma, tadbirkorlikni qoʻllab-quvvatlash, ijtimoiy soha, obodonlashtirish va fuqarolar murojaatlari bilan ishlash.",
      "Hokimiyatlarning rasmiy saytlari qarorlar, hududni rivojlantirish dasturlari, ochiq maʼlumotlar va aholi hamda tashkilotlar uchun aloqa kanali hisoblanadi.",
    ],
  };
  const map = { ru, en, uz };
  return map[locale.value] || map.ru;
});

const officialSitesText = computed(() => {
  const ru = {
    h2: "Официальные сайты хокимиятов",
    paragraphs: [
      "На официальных сайтах хокимиятов размещаются структура органа, руководство, новости региона, график приёма, электронные обращения и перечень услуг.",
      "Использование официальных ресурсов позволяет получать достоверную информацию о программах развития, тендерах, инвестиционном климате и мерах поддержки на территории.",
    ],
  };
  const en = {
    h2: "Official khokimiyat websites",
    paragraphs: [
      "Official khokimiyat websites publish the body’s structure, leadership, regional news, reception schedules, e-appeals and lists of services.",
      "Using official resources helps obtain reliable information on development programmes, tenders, the investment climate and support measures in the territory.",
    ],
  };
  const uz = {
    h2: "Hokimiyatlarning rasmiy saytlari",
    paragraphs: [
      "Rasmiy saytlarda organ tuzilmasi, rahbariyat, hudud yangiliklari, qabul jadvali, elektron murojaatlar va xizmatlar roʻyxati joylashtiriladi.",
      "Rasmiy resurslardan foydalanish rivojlantirish dasturlari, tenderlar, investitsiya muhiti va qoʻllab-quvvatlash choralari haqida ishonchli maʼlumot olish imkonini beradi.",
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
        q: "Что такое хокимият?",
        a: "Хокимият — орган исполнительной власти на уровне области, района, города или Республики Каракалпакстан, возглавляемый хокимом.",
      },
      {
        q: "Чем отличается хокимият области от хокимията города Ташкента?",
        a: "Город Ташкент имеет статус города республиканского подчинения; его органы власти оформлены отдельно от областных. В каталоге для них предусмотрены отдельные карточки.",
      },
      {
        q: "Где будут ссылки на официальные сайты?",
        a: "В каждой карточке хокимията указывается проверенная ссылка на официальный сайт или раздел на государственном портале — по мере добавления записей в каталог.",
      },
      {
        q: "Почему список пока пустой?",
        a: "Категория создана для поэтапного наполнения: карточки Совета Министров Каракалпакстана, областей и хокимията Ташкента добавляются по одной после подготовки текстов и проверки URL.",
      },
    ],
  };
  const en = {
    h2: "Frequently asked questions",
    items: [
      {
        q: "What is a khokimiyat?",
        a: "A khokimiyat is an executive body at the level of a region, district, city or the Republic of Karakalpakstan, headed by a khokim.",
      },
      {
        q: "How is the Tashkent city administration different from a regional khokimiyat?",
        a: "Tashkent has the status of a city of republican subordination; its authorities are organised separately from regional ones. The catalogue provides separate cards for them.",
      },
      {
        q: "Where will official website links appear?",
        a: "Each khokimiyat card will include a verified link to the official website or a section on the government portal as entries are added to the catalogue.",
      },
      {
        q: "Why is the list empty for now?",
        a: "The category is set up for gradual filling: cards for the Council of Ministers of Karakalpakstan, regions and Tashkent are added one by one after texts and URLs are verified.",
      },
    ],
  };
  const uz = {
    h2: "Tez-tez beriladigan savollar",
    items: [
      {
        q: "Hokimiyat nima?",
        a: "Hokimiyat — viloyat, tuman, shahar yoki Qoraqalpogʻiston Respublikasi boʻyicha hokim boshqaruvidagi ijroiya organi.",
      },
      {
        q: "Toshkent shahri hokimiyati viloyat hokimiyatidan qanday farq qiladi?",
        a: "Toshkent respublika boʻysunuvidagi shahar; uning hokimiyati viloyatlar tuzilmasidan alohida. Katalogda ular uchun alohida kartochkalar koʻzda tutilgan.",
      },
      {
        q: "Rasmiy sayt havolalari qayerda boʻladi?",
        a: "Har bir hokimiyat kartochkasida rasmiy sayt yoki davlat portali boʻlimiga tekshirilgan havola keltiriladi — katalog toʻldirilgan sayin.",
      },
      {
        q: "Nima uchun roʻyxat hozircha boʻsh?",
        a: "Kategoriya bosqichma-bosqich toʻldirish uchun yaratilgan: Qoraqalpogʻiston Vazirlar Kengashi, viloyatlar va Toshkent kartochkalari matnlar va URL tekshirilgach birma-bir qoʻshiladi.",
      },
    ],
  };
  const map = { ru, en, uz };
  return map[locale.value] || map.ru;
});

const otherGovBodiesText = computed(() => {
  const ru = {
    h2: "Другие разделы каталога",
    intro:
      "Помимо хокимиятов, на Govinfo представлены высшие органы власти, министерства, государственные органы, агентства и инспекции Республики Узбекистан.",
    listIntro: "Перейти к разделам:",
    links: [
      { href: "/headquarters", text: "Высшие государственные органы" },
      { href: "/ministries", text: "Министерства Республики Узбекистан" },
      { href: "/state", text: "Государственные комитеты" },
      { href: "/agencies", text: "Агентства" },
      { href: "/inspections", text: "Государственные инспекции" },
    ],
  };
  const en = {
    h2: "Other catalogue sections",
    intro:
      "Besides khokimiyats, Govinfo lists supreme bodies, ministries, state bodies, agencies and inspections of the Republic of Uzbekistan.",
    listIntro: "Go to sections:",
    links: [
      { href: "/headquarters", text: "Supreme government bodies" },
      { href: "/ministries", text: "Ministries of Uzbekistan" },
      { href: "/state", text: "State committees" },
      { href: "/agencies", text: "Agencies" },
      { href: "/inspections", text: "State inspections" },
    ],
  };
  const uz = {
    h2: "Katalogning boshqa boʻlimlari",
    intro:
      "Hokimiyatlardan tashqari Govinfo Oʻzbekistonning oliy organlari, vazirliklar, davlat organlari, agentliklar va inspektsiyalarini ham oʻz ichiga oladi.",
    listIntro: "Boʻlimlarga oʻtish:",
    links: [
      { href: "/headquarters", text: "Oliy davlat organlari" },
      { href: "/ministries", text: "Oʻzbekiston vazirliklari" },
      { href: "/state", text: "Davlat qoʻmitalari" },
      { href: "/agencies", text: "Agentliklar" },
      { href: "/inspections", text: "Davlat inspeksiyalari" },
    ],
  };
  const map = { ru, en, uz };
  return map[locale.value] || map.ru;
});

const hokimTableText = computed(() => {
  const ru = {
    h2: "Список хокимиятов",
    colOrganization: "Орган",
    colType: "Тег",
    colFunction: "Кратко",
    colSite: "Официальный сайт",
  };
  const en = {
    h2: "List of khokimiyats",
    colOrganization: "Body",
    colType: "Tag",
    colFunction: "Summary",
    colSite: "Official website",
  };
  const uz = {
    h2: "Hokimiyatlar roʻyxati",
    colOrganization: "Organ",
    colType: "Teg",
    colFunction: "Qisqacha",
    colSite: "Rasmiy sayt",
  };
  const map = { ru, en, uz };
  return map[locale.value] || map.ru;
});

const hokimTableRows = computed(() => {
  return hokimiyats.data
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

const emptyHint = computed(() => {
  const ru =
    "Карточки хокимиятов появятся здесь по мере добавления в каталог.";
  const en =
    "Khokimiyat cards will appear here as they are added to the catalogue.";
  const uz =
    "Hokimiyat kartochkalari katalogga qoʻshilgan sayin bu yerda koʻrinadi.";
  const map = { ru, en, uz };
  return map[locale.value] || map.ru;
});
</script>

<template>
  <div>
    <CategorySeo
      title-key="Khokimiyats.seo.title"
      description-key="Khokimiyats.seo.description"
    />
    <div class="site-container">
      <section>
        <div class="border-b border-[#eee] pb-2 mb-4 md:mb-6">
          <h1 class="font-medium text-xl md:text-2xl">
            {{ t("Khokimiyats.headtitle") }}
          </h1>
        </div>

        <div
          class="text-[#4B5563] base-bg leading-6 text-sm 768:text-xs mb-6 space-y-1.5"
        >
          <p v-for="(para, i) in introText" :key="'intro-' + i">
            {{ para }}
          </p>
        </div>

        <p
          v-if="!hokimiyats.data.length"
          class="text-[#6B7280] text-sm mb-6 p-4 rounded-xl bg-[#f8fafc] border border-[#e5e7eb]"
        >
          {{ emptyHint }}
        </p>

        <div
          v-else
          class="grid grid-cols-5 gap-3 768:grid-cols-2 768:gap-2 576:!grid-cols-1"
        >
          <nuxt-link
            v-for="(item, index) in hokimiyats.data"
            :key="index"
            :to="localePath(`/hokimiyats/${item.slug}`)"
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
            hokimAboutText.h2,
            officialSitesText.h2,
            otherGovBodiesText.h2,
          ]"
        >
          <template #panel0>
            <p
              v-for="(para, i) in hokimAboutText.paragraphs"
              :key="'hk-' + i"
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

        <div v-if="hokimTableRows.length" class="overflow-x-auto my-6">
          <h2 class="font-semibold text-lg md:text-xl mb-4">
            {{ hokimTableText.h2 }}
          </h2>
          <table class="w-full text-sm border-collapse border border-[#e5e7eb]">
            <thead>
              <tr class="bg-[#f8fafc]">
                <th
                  class="border border-[#e5e7eb] px-4 py-3 text-left font-bold text-[#1e293b]"
                >
                  {{ hokimTableText.colOrganization }}
                </th>
                <th
                  class="border border-[#e5e7eb] px-4 py-3 text-left font-bold text-[#1e293b]"
                >
                  {{ hokimTableText.colType }}
                </th>
                <th
                  class="border border-[#e5e7eb] px-4 py-3 text-left font-bold text-[#1e293b]"
                >
                  {{ hokimTableText.colFunction }}
                </th>
                <th
                  class="border border-[#e5e7eb] px-4 py-3 text-center font-bold text-[#1e293b]"
                >
                  {{ hokimTableText.colSite }}
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-[#e5e7eb] text-[#4b5563]">
              <tr
                v-for="(row, i) in hokimTableRows"
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

        <CategoryPopularOutside exclude-category="hokimiyats" />
        <FaqAccordion :title="faqText.h2" :items="faqText.items" />
      </section>
    </div>
  </div>
</template>
