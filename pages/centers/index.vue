<script setup>
import useCenters from "../../data/centers";
import CategorySeo from "../../components/Seo/CategorySeo.vue";
import CategoryInfoTabs from "../../components/CategoryInfoTabs.vue";
import FaqAccordion from "../../components/FaqAccordion.vue";

const { t, locale } = useI18n();
const localePath = useLocalePath();
const centers = useCenters();

const schemaOrgData = computed(() => {
  const ru = {
    name: "Центры Республики Узбекистан — официальные сайты",
    description:
      "Каталог государственных центров Узбекистана со ссылками на официальные интернет-ресурсы.",
    url: "https://govinfo.uz/centers",
    inLanguage: "ru",
  };
  const en = {
    name: "Centers of the Republic of Uzbekistan — official websites",
    description:
      "Catalogue of state centers of Uzbekistan with links to official websites.",
    url: "https://govinfo.uz/en/centers",
    inLanguage: "en",
  };
  const uz = {
    name: "Oʻzbekiston Respublikasi markazlari — rasmiy saytlar",
    description:
      "Oʻzbekiston davlat markazlari roʻyxati va ularning rasmiy saytlariga havolalar.",
    url: "https://govinfo.uz/uz/centers",
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
    "В разделе «Центры» собраны специализированные государственные центры Республики Узбекистан: организации, выполняющие отраслевые, экспертные, сервисные и иные функции в системе государственного управления.",
    "Для каждого центра на Govinfo.uz приводится карточка с кратким описанием и ссылкой на официальный раздел на портале gov.uz или иной проверенный ресурс.",
    "Каталог будет пополняться по мере появления описаний и проверки ссылок.",
  ];
  const en = [
    "The «Centers» section lists specialized state centers of the Republic of Uzbekistan: bodies that perform sectoral, expert, service and other functions in public administration.",
    "Each center has a Govinfo.uz card with a short description and a link to the official section on gov.uz or another verified resource.",
    "The catalogue will grow as descriptions are prepared and links verified.",
  ];
  const uz = [
    "«Markazlar» boʻlimida Oʻzbekiston Respublikasining ixtisoslashgan davlat markazlari jamlanadi: davlat boshqaruvi tizimida tarmoq, ekspertiza, xizmat va boshqa funksiyalarni bajaruvchi tashkilotlar.",
    "Har bir markaz uchun Govinfo.uz da qisqacha tavsif va gov.uz dagi rasmiy boʻlim yoki boshqa tekshirilgan resursga havola keltiriladi.",
    "Katalog tavsiflar tayyorlangan va havolalar tekshirilgan sayin toʻldiriladi.",
  ];
  const map = { ru, en, uz };
  return map[locale.value] || map.ru;
});

const centersAboutText = computed(() => {
  const ru = {
    h2: "Государственные центры в каталоге",
    paragraphs: [
      "Центры могут выполнять экспертизу, аккредитацию, сертификацию, информационное сопровождение и другие задачи, закреплённые законодательством и учредительными документами.",
      "На официальных сайтах публикуются структура, документы, отчёты и контакты; это основной источник достоверной информации о деятельности центра.",
    ],
  };
  const en = {
    h2: "State centers in the catalogue",
    paragraphs: [
      "Centers may perform expertise, accreditation, certification, information support and other tasks defined by law and founding documents.",
      "Official websites publish structure, documents, reports and contacts; they are the main source of reliable information on a center’s activities.",
    ],
  };
  const uz = {
    h2: "Katalogdagi davlat markazlari",
    paragraphs: [
      "Markazlar qonunchilik va taʼsis hujjatlarida belgilangan ekspertiza, akkreditatsiya, sertifikatsiya, axborot qoʻllab-quvvatlash va boshqa vazifalarni bajarishi mumkin.",
      "Rasmiy saytlarda tuzilma, hujjatlar, hisobotlar va aloqa maʼlumotlari joylashtiriladi; bu markaz faoliyati haqidagi ishonchli maʼlumotning asosiy manbai hisoblanadi.",
    ],
  };
  const map = { ru, en, uz };
  return map[locale.value] || map.ru;
});

const officialSitesText = computed(() => {
  const ru = {
    h2: "Официальные сайты центров",
    paragraphs: [
      "Используйте только официальные ресурсы: там размещаются актуальные сведения о полномочиях, услугах и контактах.",
      "Каталог Govinfo.uz помогает быстро перейти к проверенной ссылке.",
    ],
  };
  const en = {
    h2: "Official center websites",
    paragraphs: [
      "Use only official resources: they publish up-to-date information on powers, services and contacts.",
      "The Govinfo.uz catalogue helps you reach a verified link quickly.",
    ],
  };
  const uz = {
    h2: "Markazlarning rasmiy saytlari",
    paragraphs: [
      "Faqat rasmiy resurslardan foydalaning: u yerda vakolatlar, xizmatlar va aloqa haqida dolzarb maʼlumotlar joylashtiriladi.",
      "Govinfo.uz katalogi tekshirilgan havolaga tez oʻtishga yordam beradi.",
    ],
  };
  const map = { ru, en, uz };
  return map[locale.value] || map.ru;
});

const otherCatalogText = computed(() => {
  const ru = {
    h2: "Другие разделы каталога",
    intro:
      "Помимо центров, на Govinfo представлены высшие органы власти, министерства, государственные комитеты, агентства, фонды, инспекции и хокимияты.",
    listIntro: "Перейти к разделам:",
    links: [
      { href: "/headquarters", text: "Высшие государственные органы" },
      { href: "/ministries", text: "Министерства" },
      { href: "/state", text: "Государственные органы" },
      { href: "/agencies", text: "Агентства" },
      { href: "/funds", text: "Фонды" },
      { href: "/inspections", text: "Государственные инспекции" },
      { href: "/hokimiyats", text: "Хокимияты" },
    ],
  };
  const en = {
    h2: "Other catalogue sections",
    intro:
      "Besides centers, Govinfo lists supreme government bodies, ministries, state committees, agencies, funds, inspections and khokimiyats.",
    listIntro: "Go to sections:",
    links: [
      { href: "/headquarters", text: "Supreme government bodies" },
      { href: "/ministries", text: "Ministries" },
      { href: "/state", text: "State bodies" },
      { href: "/agencies", text: "Agencies" },
      { href: "/funds", text: "Funds" },
      { href: "/inspections", text: "State inspections" },
      { href: "/hokimiyats", text: "Khokimiyats" },
    ],
  };
  const uz = {
    h2: "Katalogning boshqa boʻlimlari",
    intro:
      "Markazlardan tashqari Govinfo da oliy davlat organlari, vazirliklar, davlat qoʻmitalari, agentliklar, jamgʻarmalar, inspeksiyalar va hokimiyatlar keltirilgan.",
    listIntro: "Boʻlimlarga oʻtish:",
    links: [
      { href: "/headquarters", text: "Oliy davlat organlari" },
      { href: "/ministries", text: "Vazirliklar" },
      { href: "/state", text: "Davlat organlari" },
      { href: "/agencies", text: "Agentliklar" },
      { href: "/funds", text: "Jamgʻarmalar" },
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
        q: "Что такое раздел «Центры» на Govinfo?",
        a: "Это каталог государственных центров с официальными сайтами и кратким описанием на карточке организации.",
      },
      {
        q: "Где найти официальный сайт центра?",
        a: "В карточке организации в каталоге есть ссылка на официальный ресурс на gov.uz или другой указанный адрес.",
      },
      {
        q: "Будет ли пополняться список?",
        a: "Да, карточки добавляются по мере подготовки текстов и проверки ссылок.",
      },
    ],
  };
  const en = {
    h2: "Frequently asked questions",
    items: [
      {
        q: "What is the «Centers» section on Govinfo?",
        a: "A catalogue of state centers with official websites and a short description on each card.",
      },
      {
        q: "Where to find a center’s official website?",
        a: "The organization card has a link to the official resource on gov.uz or another address given there.",
      },
      {
        q: "Will the list grow?",
        a: "Yes, cards are added as texts are prepared and links verified.",
      },
    ],
  };
  const uz = {
    h2: "Tez-tez beriladigan savollar",
    items: [
      {
        q: "Govinfo dagi «Markazlar» boʻlimi nima?",
        a: "Bu rasmiy saytlari va tashkilot kartasida qisqacha tavsifi boʻlgan davlat markazlari katalogi.",
      },
      {
        q: "Markazning rasmiy saytini qayerdan topish mumkin?",
        a: "Tashkilot kartasida gov.uz yoki u yerda koʻrsatilgan boshqa manzilga havola bor.",
      },
      {
        q: "Roʻyxat toʻldiriladimi?",
        a: "Ha, matnlar tayyorlangan va havolalar tekshirilgan sayin kartalar qoʻshiladi.",
      },
    ],
  };
  const map = { ru, en, uz };
  return map[locale.value] || map.ru;
});

const centerTableText = computed(() => {
  const ru = {
    h2: "Список центров",
    colOrganization: "Центр",
    colType: "Направление",
    colFunction: "Краткое описание",
    colSite: "Официальный сайт",
  };
  const en = {
    h2: "List of centers",
    colOrganization: "Center",
    colType: "Focus",
    colFunction: "Short description",
    colSite: "Official website",
  };
  const uz = {
    h2: "Markazlar roʻyxati",
    colOrganization: "Markaz",
    colType: "Yoʻnalish",
    colFunction: "Qisqacha tavsif",
    colSite: "Rasmiy sayt",
  };
  const map = { ru, en, uz };
  return map[locale.value] || map.ru;
});

const centerTableRows = computed(() => {
  return centers.data
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
      title-key="Centers.seo.title"
      description-key="Centers.seo.description"
    />
    <div class="site-container">
      <section>
        <div class="border-b border-[#eee] pb-2 mb-4 md:mb-6">
          <h1 class="font-medium text-xl md:text-2xl">
            {{ t("Centers.headtitle") }}
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
          v-if="!centers.data.length"
          class="text-[#6B7280] text-sm mb-4"
        >
          {{ t("Centers.indexEmpty") }}
        </p>

        <div
          v-else
          class="grid grid-cols-5 gap-3 768:grid-cols-2 768:gap-2 576:!grid-cols-1"
        >
          <nuxt-link
            v-for="(item, index) in centers.data"
            :key="index"
            :to="localePath(`/centers/${item.slug}`)"
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
            centersAboutText.h2,
            officialSitesText.h2,
            otherCatalogText.h2,
          ]"
        >
          <template #panel0>
            <p
              v-for="(para, i) in centersAboutText.paragraphs"
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

        <div v-if="centerTableRows.length" class="overflow-x-auto my-6">
          <h2 class="font-semibold text-lg md:text-xl mb-4">
            {{ centerTableText.h2 }}
          </h2>
          <table class="w-full text-sm border-collapse border border-[#e5e7eb]">
            <thead>
              <tr class="bg-[#f8fafc]">
                <th
                  class="border border-[#e5e7eb] px-4 py-3 text-left font-bold text-[#1e293b]"
                >
                  {{ centerTableText.colOrganization }}
                </th>
                <th
                  class="border border-[#e5e7eb] px-4 py-3 text-left font-bold text-[#1e293b]"
                >
                  {{ centerTableText.colType }}
                </th>
                <th
                  class="border border-[#e5e7eb] px-4 py-3 text-left font-bold text-[#1e293b]"
                >
                  {{ centerTableText.colFunction }}
                </th>
                <th
                  class="border border-[#e5e7eb] px-4 py-3 text-center font-bold text-[#1e293b]"
                >
                  {{ centerTableText.colSite }}
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-[#e5e7eb] text-[#4b5563]">
              <tr
                v-for="(row, i) in centerTableRows"
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
