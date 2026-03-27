<script setup>
import useFunds from "../../data/funds";
import CategorySeo from "../../components/Seo/CategorySeo.vue";
import CategoryInfoTabs from "../../components/CategoryInfoTabs.vue";
import FaqAccordion from "../../components/FaqAccordion.vue";

const { t, locale } = useI18n();
const localePath = useLocalePath();
const funds = useFunds();

const schemaOrgData = computed(() => {
  const ru = {
    name: "Фонды Республики Узбекистан — официальные сайты",
    description:
      "Каталог государственных и отраслевых фондов Узбекистана со ссылками на официальные интернет-ресурсы.",
    url: "https://govinfo.uz/funds",
    inLanguage: "ru",
  };
  const en = {
    name: "Funds of the Republic of Uzbekistan — official websites",
    description:
      "Catalogue of public and sectoral funds of Uzbekistan with links to official websites.",
    url: "https://govinfo.uz/en/funds",
    inLanguage: "en",
  };
  const uz = {
    name: "Oʻzbekiston Respublikasi jamgʻarmalari — rasmiy saytlar",
    description:
      "Oʻzbekiston davlat va tarmoq jamgʻarmalari roʻyxati va ularning rasmiy saytlariga havolalar.",
    url: "https://govinfo.uz/uz/funds",
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
    "Фонды Республики Узбекистан — это некоммерческие или специализированные организации, направляющие средства на социальную поддержку, развитие отраслей, инфраструктуру, здравоохранение, образование, культуру и другие цели государственной политики.",
    "В каталоге Govinfo.uz собираются официальные интернет-ресурсы фондов: карточки с кратким описанием направлений деятельности и прямой ссылкой на проверенный сайт.",
    "Список будет пополняться по мере появления описаний и проверки ссылок.",
  ];
  const en = [
    "Funds of the Republic of Uzbekistan are non-profit or specialized bodies that allocate resources to social support, sector development, infrastructure, health, education, culture and other goals of public policy.",
    "The Govinfo.uz catalogue brings together official websites of funds: cards with a short description of activities and a direct link to a verified site.",
    "The list will grow as descriptions are prepared and links verified.",
  ];
  const uz = [
    "Oʻzbekiston Respublikasi jamgʻarmalari ijtimoiy qoʻllab-quvvatlash, tarmoqlarni rivojlantirish, infratuzilma, sogʻliqni saqlash, taʼlim, madaniyat va davlat siyosatining boshqa yoʻnalishlariga mablagʻ yoʻnaltiruvchi notijorat yoki ixtisoslashgan tashkilotlar hisoblanadi.",
    "Govinfo.uz katalogida jamgʻarmalarning rasmiy saytlari jamlanadi: faoliyat yoʻnalishlarining qisqacha tavsifi va tekshirilgan saytga toʻgʻridan-toʻgʻri havola beradi.",
    "Roʻyxat tavsiflar tayyorlangan va havolalar tekshirilgan sayin toʻldiriladi.",
  ];
  const map = { ru, en, uz };
  return map[locale.value] || map.ru;
});

const fundsAboutText = computed(() => {
  const ru = {
    h2: "Официальные фонды в системе государственного управления",
    paragraphs: [
      "Фонды создаются для целевого финансирования программ, поддержки граждан и юридических лиц, развития отраслей и социальной сферы. Их статус, задачи и отчётность определяются законодательством и учредительными документами.",
      "На официальных сайтах публикуются структура, документы, отчёты и контакты; это основной источник достоверной информации о деятельности фонда.",
    ],
  };
  const en = {
    h2: "Official funds in public administration",
    paragraphs: [
      "Funds are established to finance programmes, support citizens and legal entities, and develop sectors and social policy. Their status, tasks and reporting are defined by law and founding documents.",
      "Official websites publish structure, documents, reports and contacts; they are the main source of reliable information on a fund’s activities.",
    ],
  };
  const uz = {
    h2: "Davlat boshqaruvi tizimidagi rasmiy jamgʻarmalar",
    paragraphs: [
      "Jamgʻarmalar dasturlarni moliyalashtirish, fuqarolar va yuridik shaxslarni qoʻllab-quvvatlash, tarmoqlar va ijtimoiy sohani rivojlantirish uchun tashkil etiladi. Ularning holati, vazifalari va hisobotchiligi qonunchilik va taʼsis hujjatlari bilan belgilanadi.",
      "Rasmiy saytlarda tuzilma, hujjatlar, hisobotlar va aloqa maʼlumotlari joylashtiriladi; bu jamgʻarma faoliyati haqidagi ishonchli maʼlumotning asosiy manbai hisoblanadi.",
    ],
  };
  const map = { ru, en, uz };
  return map[locale.value] || map.ru;
});

const officialSitesText = computed(() => {
  const ru = {
    h2: "Официальные сайты фондов",
    paragraphs: [
      "Используйте только официальные ресурсы: там размещаются актуальные программы, критерии поддержки, заявки и отчётность.",
      "Каталог Govinfo.uz помогает быстро перейти к проверенной ссылке без длительного поиска в поисковых системах.",
    ],
  };
  const en = {
    h2: "Official fund websites",
    paragraphs: [
      "Use only official resources: they publish current programmes, support criteria, applications and reporting.",
      "The Govinfo.uz catalogue helps you reach a verified link quickly without a long search.",
    ],
  };
  const uz = {
    h2: "Jamgʻarmalarning rasmiy saytlari",
    paragraphs: [
      "Faqat rasmiy resurslardan foydalaning: u yerda dolzarb dasturlar, qoʻllab-quvvatlash mezonlari, arizalar va hisobotlar joylashtiriladi.",
      "Govinfo.uz katalogi uzoq qidiruvsiz tekshirilgan havolaga tez oʻtishga yordam beradi.",
    ],
  };
  const map = { ru, en, uz };
  return map[locale.value] || map.ru;
});

const otherCatalogText = computed(() => {
  const ru = {
    h2: "Другие разделы каталога",
    intro:
      "Помимо фондов, на Govinfo представлены высшие органы власти, министерства, государственные комитеты, агентства, инспекции и хокимияты.",
    listIntro: "Перейти к разделам:",
    links: [
      { href: "/headquarters", text: "Высшие государственные органы" },
      { href: "/ministries", text: "Министерства" },
      { href: "/state", text: "Государственные органы" },
      { href: "/agencies", text: "Агентства" },
      { href: "/inspections", text: "Государственные инспекции" },
      { href: "/hokimiyats", text: "Хокимияты" },
    ],
  };
  const en = {
    h2: "Other catalogue sections",
    intro:
      "Besides funds, Govinfo lists supreme government bodies, ministries, state committees, agencies, inspections and khokimiyats.",
    listIntro: "Go to sections:",
    links: [
      { href: "/headquarters", text: "Supreme government bodies" },
      { href: "/ministries", text: "Ministries" },
      { href: "/state", text: "State bodies" },
      { href: "/agencies", text: "Agencies" },
      { href: "/inspections", text: "State inspections" },
      { href: "/hokimiyats", text: "Khokimiyats" },
    ],
  };
  const uz = {
    h2: "Katalogning boshqa boʻlimlari",
    intro:
      "Jamgʻarmalardan tashqari Govinfo da oliy davlat organlari, vazirliklar, davlat qoʻmitalari, agentliklar, inspeksiyalar va hokimiyatlar keltirilgan.",
    listIntro: "Boʻlimlarga oʻtish:",
    links: [
      { href: "/headquarters", text: "Oliy davlat organlari" },
      { href: "/ministries", text: "Vazirliklar" },
      { href: "/state", text: "Davlat organlari" },
      { href: "/agencies", text: "Agentliklar" },
      { href: "/inspections", text: "Davlat inspeksiyalari" },
      { href: "/hokimiyats", text: "Hokimiyatlar" },
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
        q: "Что такое фонды в каталоге Govinfo?",
        a: "Это государственные или отраслевые фонды с официальными сайтами и описанием направлений деятельности на карточке Govinfo.",
      },
      {
        q: "Где найти официальный сайт фонда?",
        a: "В карточке организации в каталоге есть ссылка на официальный ресурс; при необходимости уточняйте домен на gov.uz или в реестре учредителя.",
      },
      {
        q: "Будет ли пополняться список фондов?",
        a: "Да, карточки добавляются по мере подготовки текстов и проверки ссылок.",
      },
    ],
  };
  const en = {
    h2: "Frequently asked questions",
    items: [
      {
        q: "What are funds in the Govinfo catalogue?",
        a: "Public or sectoral funds with official websites and a short description of activities on the Govinfo card.",
      },
      {
        q: "Where to find a fund’s official website?",
        a: "The organization card has a link to the official resource; you can also verify the domain on gov.uz or with the founder body.",
      },
      {
        q: "Will the list of funds grow?",
        a: "Yes, cards are added as texts are prepared and links verified.",
      },
    ],
  };
  const uz = {
    h2: "Tez-tez beriladigan savollar",
    items: [
      {
        q: "Govinfo katalogidagi jamgʻarmalar nima?",
        a: "Bu rasmiy saytlari va Govinfo kartasida faoliyat yoʻnalishlari tavsifi boʻlgan davlat yoki tarmoq jamgʻarmalari.",
      },
      {
        q: "Jamgʻarmaning rasmiy saytini qayerdan topish mumkin?",
        a: "Tashkilot kartasida rasmiy resursga havola bor; kerak boʻlsa gov.uz yoki taʼsischi organdagi maʼlumotni tekshiring.",
      },
      {
        q: "Jamgʻarmalar roʻyxati toʻldiriladimi?",
        a: "Ha, matnlar tayyorlangan va havolalar tekshirilgan sayin kartalar qoʻshiladi.",
      },
    ],
  };
  const map = { ru, en, uz };
  return map[locale.value] || map.ru;
});

const fundTableText = computed(() => {
  const ru = {
    h2: "Список фондов",
    colOrganization: "Фонд",
    colType: "Направление",
    colFunction: "Краткое описание",
    colSite: "Официальный сайт",
  };
  const en = {
    h2: "List of funds",
    colOrganization: "Fund",
    colType: "Focus",
    colFunction: "Short description",
    colSite: "Official website",
  };
  const uz = {
    h2: "Jamgʻarmalar roʻyxati",
    colOrganization: "Jamgʻarma",
    colType: "Yoʻnalish",
    colFunction: "Qisqacha tavsif",
    colSite: "Rasmiy sayt",
  };
  const map = { ru, en, uz };
  return map[locale.value] || map.ru;
});

const fundTableRows = computed(() => {
  return funds.data
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
      title-key="Funds.seo.title"
      description-key="Funds.seo.description"
    />
    <div class="site-container">
      <section>
        <div class="border-b border-[#eee] pb-2 mb-4 md:mb-6">
          <h1 class="font-medium text-xl md:text-2xl">
            {{ t("Funds.headtitle") }}
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
          v-if="!funds.data.length"
          class="text-[#6B7280] text-sm mb-4"
        >
          {{ t("Funds.indexEmpty") }}
        </p>

        <div
          v-else
          class="grid grid-cols-5 gap-3 768:grid-cols-2 768:gap-2 576:!grid-cols-1"
        >
          <nuxt-link
            v-for="(item, index) in funds.data"
            :key="index"
            :to="localePath(`/funds/${item.slug}`)"
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
            fundsAboutText.h2,
            officialSitesText.h2,
            otherCatalogText.h2,
          ]"
        >
          <template #panel0>
            <p
              v-for="(para, i) in fundsAboutText.paragraphs"
              :key="'about-' + i"
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
            <p>{{ otherCatalogText.intro }}</p>
            <p>{{ otherCatalogText.listIntro }}</p>
            <ul class="list-disc list-inside mt-2 space-y-1">
              <li
                v-for="(link, i) in otherCatalogText.links"
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

        <div v-if="fundTableRows.length" class="overflow-x-auto my-6">
          <h2 class="font-semibold text-lg md:text-xl mb-4">
            {{ fundTableText.h2 }}
          </h2>
          <table class="w-full text-sm border-collapse border border-[#e5e7eb]">
            <thead>
              <tr class="bg-[#f8fafc]">
                <th
                  class="border border-[#e5e7eb] px-4 py-3 text-left font-bold text-[#1e293b]"
                >
                  {{ fundTableText.colOrganization }}
                </th>
                <th
                  class="border border-[#e5e7eb] px-4 py-3 text-left font-bold text-[#1e293b]"
                >
                  {{ fundTableText.colType }}
                </th>
                <th
                  class="border border-[#e5e7eb] px-4 py-3 text-left font-bold text-[#1e293b]"
                >
                  {{ fundTableText.colFunction }}
                </th>
                <th
                  class="border border-[#e5e7eb] px-4 py-3 text-center font-bold text-[#1e293b]"
                >
                  {{ fundTableText.colSite }}
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-[#e5e7eb] text-[#4b5563]">
              <tr
                v-for="(row, i) in fundTableRows"
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

        <FaqAccordion :title="faqText.h2" :items="faqText.items" />
      </section>
    </div>
  </div>
</template>
