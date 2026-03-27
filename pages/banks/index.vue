<script setup>
import useBanks from "../../data/banks";
import CategorySeo from "../../components/Seo/CategorySeo.vue";
import CategoryInfoTabs from "../../components/CategoryInfoTabs.vue";
import FaqAccordion from "../../components/FaqAccordion.vue";
import CategoryPopularOutside from "../../components/CategoryPopularOutside.vue";

const { t, locale } = useI18n();
const localePath = useLocalePath();
const banks = useBanks();

const schemaOrgData = computed(() => {
  const ru = {
    name: "Банки Республики Узбекистан — официальные сайты",
    description:
      "Каталог банков Узбекистана со ссылками на официальные интернет-ресурсы.",
    url: "https://govinfo.uz/banks",
    inLanguage: "ru",
  };
  const en = {
    name: "Banks of the Republic of Uzbekistan — official websites",
    description:
      "Catalogue of banks in Uzbekistan with links to official websites.",
    url: "https://govinfo.uz/en/banks",
    inLanguage: "en",
  };
  const uz = {
    name: "Oʻzbekiston Respublikasi banklari — rasmiy saytlar",
    description:
      "Oʻzbekiston banklari roʻyxati va ularning rasmiy saytlariga havolalar.",
    url: "https://govinfo.uz/uz/banks",
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
    "В разделе собраны официальные сайты банков Республики Узбекистан: карточки с кратким описанием услуг и прямой ссылкой на проверенный ресурс.",
    "Используйте только официальные домены для интернет-банка и уточнения условий продуктов; не переходите по сомнительным ссылкам и не сообщайте реквизиты карт третьим лицам.",
    "Список будет пополняться по мере добавления описаний и проверки ссылок.",
  ];
  const en = [
    "This section lists official websites of banks in the Republic of Uzbekistan: cards with a short description of services and a direct link to a verified resource.",
    "Use only official domains for online banking and product terms; do not follow suspicious links or share card details with third parties.",
    "The list will grow as descriptions are added and links verified.",
  ];
  const uz = [
    "Bu boʻlimda Oʻzbekiston Respublikasi banklarining rasmiy saytlari jamlangan: xizmatlar haqida qisqacha maʼlumot va tekshirilgan resursga toʻgʻridan-toʻgʻri havola beradi.",
    "Internet-bank va mahsulot shartlari uchun faqat rasmiy domenlardan foydalaning; shubhali havolalar boʻyicha oʻtmang va kartalar boʻyicha maʼlumotlarni uchinchi shaxslarga bermang.",
    "Roʻyxat tavsiflar qoʻshilgan va havolalar tekshirilgan sayin toʻldiriladi.",
  ];
  const map = { ru, en, uz };
  return map[locale.value] || map.ru;
});

const banksAboutText = computed(() => {
  const ru = {
    h2: "Банки в каталоге Govinfo",
    paragraphs: [
      "Банки представлены как организации с публичными официальными сайтами, где публикуются продукты, курсы валют, новости и контакты. Каталог помогает быстро перейти к проверенной ссылке.",
      "Условия кредитов, вкладов и тарифов уточняйте на официальном сайте банка и в договоре.",
    ],
  };
  const en = {
    h2: "Banks in the Govinfo catalogue",
    paragraphs: [
      "Banks are listed with public official websites that publish products, exchange rates, news and contacts. The catalogue helps you open a verified link quickly.",
      "Confirm loan, deposit and fee terms on the bank’s official website and in your contract.",
    ],
  };
  const uz = {
    h2: "Govinfo katalogidagi banklar",
    paragraphs: [
      "Banklar ochiq rasmiy saytlari boʻlgan tashkilotlar sifatida keltirilgan; u yerda mahsulotlar, valyuta kurslari, yangiliklar va kontaktlar joylashtiriladi. Katalog tekshirilgan havolaga tez oʻtishga yordam beradi.",
      "Kredit, depozit va tarif shartlarini bankning rasmiy sayti va shartnomada aniqlang.",
    ],
  };
  const map = { ru, en, uz };
  return map[locale.value] || map.ru;
});

const officialSitesText = computed(() => {
  const ru = {
    h2: "Официальные сайты банков",
    paragraphs: [
      "На официальных ресурсах размещаются актуальные продукты, курсы валют, отделения и каналы поддержки.",
      "Каталог Govinfo.uz помогает перейти к домену банка без длительного поиска.",
    ],
  };
  const en = {
    h2: "Official bank websites",
    paragraphs: [
      "Official resources publish current products, exchange rates, branches and support channels.",
      "The Govinfo.uz catalogue helps you reach the bank’s domain without a long search.",
    ],
  };
  const uz = {
    h2: "Banklarning rasmiy saytlari",
    paragraphs: [
      "Rasmiy resurslarda dolzarb mahsulotlar, valyuta kurslari, filiallar va qoʻllab-quvvatlash kanallari joylashtiriladi.",
      "Govinfo.uz katalogi uzoq qidiruvsiz bank domeniga oʻtishga yordam beradi.",
    ],
  };
  const map = { ru, en, uz };
  return map[locale.value] || map.ru;
});

const otherCatalogText = computed(() => {
  const ru = {
    h2: "Другие разделы каталога",
    intro:
      "Помимо банков, на Govinfo представлены высшие органы власти, министерства, государственные органы, агентства, фонды, центры, инспекции и хокимияты.",
    listIntro: "Перейти к разделам:",
    links: [
      { href: "/headquarters", text: "Высшие государственные органы" },
      { href: "/ministries", text: "Министерства" },
      { href: "/state", text: "Государственные органы" },
      { href: "/agencies", text: "Агентства" },
      { href: "/funds", text: "Фонды" },
      { href: "/centers", text: "Центры" },
      { href: "/inspections", text: "Государственные инспекции" },
      { href: "/hokimiyats", text: "Хокимияты" },
    ],
  };
  const en = {
    h2: "Other catalogue sections",
    intro:
      "Besides banks, Govinfo lists supreme government bodies, ministries, state bodies, agencies, funds, centers, inspections and khokimiyats.",
    listIntro: "Go to sections:",
    links: [
      { href: "/headquarters", text: "Supreme government bodies" },
      { href: "/ministries", text: "Ministries" },
      { href: "/state", text: "State bodies" },
      { href: "/agencies", text: "Agencies" },
      { href: "/funds", text: "Funds" },
      { href: "/centers", text: "Centers" },
      { href: "/inspections", text: "State inspections" },
      { href: "/hokimiyats", text: "Khokimiyats" },
    ],
  };
  const uz = {
    h2: "Katalogning boshqa boʻlimlari",
    intro:
      "Banklardan tashqari Govinfo da oliy davlat organlari, vazirliklar, davlat organlari, agentliklar, jamgʻarmalar, markazlar, inspeksiyalar va hokimiyatlar keltirilgan.",
    listIntro: "Boʻlimlarga oʻtish:",
    links: [
      { href: "/headquarters", text: "Oliy davlat organlari" },
      { href: "/ministries", text: "Vazirliklar" },
      { href: "/state", text: "Davlat organlari" },
      { href: "/agencies", text: "Agentliklar" },
      { href: "/funds", text: "Jamgʻarmalar" },
      { href: "/centers", text: "Markazlar" },
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
        q: "Что представляет собой раздел «Банки»?",
        a: "Каталог официальных сайтов банков с кратким описанием и ссылкой на проверенный ресурс.",
      },
      {
        q: "Как безопасно пользоваться интернет-банком?",
        a: "Входите через официальный сайт или приложение из магазина приложений, проверяйте адрес в браузере и не сообщайте коды и пароли посторонним.",
      },
      {
        q: "Будет ли пополняться список банков?",
        a: "Да, карточки добавляются по мере подготовки описаний и проверки ссылок.",
      },
    ],
  };
  const en = {
    h2: "Frequently asked questions",
    items: [
      {
        q: "What is the «Banks» section?",
        a: "A catalogue of banks’ official websites with a short description and a verified link.",
      },
      {
        q: "How to use online banking safely?",
        a: "Sign in via the official website or app from an official store, check the address bar, and never share codes or passwords with others.",
      },
      {
        q: "Will the list of banks grow?",
        a: "Yes, cards are added as descriptions are prepared and links verified.",
      },
    ],
  };
  const uz = {
    h2: "Tez-tez beriladigan savollar",
    items: [
      {
        q: "«Banklar» boʻlimi nimani anglatadi?",
        a: "Banklarning rasmiy saytlari katalogi: qisqacha tavsif va tekshirilgan havola.",
      },
      {
        q: "Internet-bankdan xavfsiz foydalanish qanday?",
        a: "Rasmiy sayt yoki doʻkondagi ilova orqali kiring, brauzer manzilini tekshiring va kod va parollarni begonalarga bermang.",
      },
      {
        q: "Banklar roʻyxati toʻldiriladimi?",
        a: "Ha, tavsiflar tayyorlangan va havolalar tekshirilgan sayin kartalar qoʻshiladi.",
      },
    ],
  };
  const map = { ru, en, uz };
  return map[locale.value] || map.ru;
});

const bankTableText = computed(() => {
  const ru = {
    h2: "Список банков",
    colOrganization: "Банк",
    colType: "Категория",
    colFunction: "Краткое описание",
    colSite: "Официальный сайт",
  };
  const en = {
    h2: "List of banks",
    colOrganization: "Bank",
    colType: "Category",
    colFunction: "Short description",
    colSite: "Official website",
  };
  const uz = {
    h2: "Banklar roʻyxati",
    colOrganization: "Bank",
    colType: "Turkum",
    colFunction: "Qisqacha tavsif",
    colSite: "Rasmiy sayt",
  };
  const map = { ru, en, uz };
  return map[locale.value] || map.ru;
});

const bankTableRows = computed(() => {
  return banks.data
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
      title-key="Banks.seo.title"
      description-key="Banks.seo.description"
    />
    <div class="site-container">
      <section>
        <div class="border-b border-[#eee] pb-2 mb-4 md:mb-6">
          <h1 class="font-medium text-xl md:text-2xl">
            {{ t("Banks.headtitle") }}
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
          v-if="!banks.data.length"
          class="text-[#6B7280] text-sm mb-4"
        >
          {{ t("Banks.indexEmpty") }}
        </p>

        <div
          v-else
          class="grid grid-cols-5 gap-3 768:grid-cols-2 768:gap-2 576:!grid-cols-1"
        >
          <nuxt-link
            v-for="(item, index) in banks.data"
            :key="index"
            :to="localePath(`/banks/${item.slug}`)"
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
            banksAboutText.h2,
            officialSitesText.h2,
            otherCatalogText.h2,
          ]"
        >
          <template #panel0>
            <p
              v-for="(para, i) in banksAboutText.paragraphs"
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

        <div v-if="bankTableRows.length" class="overflow-x-auto my-6">
          <h2 class="font-semibold text-lg md:text-xl mb-4">
            {{ bankTableText.h2 }}
          </h2>
          <table class="w-full text-sm border-collapse border border-[#e5e7eb]">
            <thead>
              <tr class="bg-[#f8fafc]">
                <th
                  class="border border-[#e5e7eb] px-4 py-3 text-left font-bold text-[#1e293b]"
                >
                  {{ bankTableText.colOrganization }}
                </th>
                <th
                  class="border border-[#e5e7eb] px-4 py-3 text-left font-bold text-[#1e293b]"
                >
                  {{ bankTableText.colType }}
                </th>
                <th
                  class="border border-[#e5e7eb] px-4 py-3 text-left font-bold text-[#1e293b]"
                >
                  {{ bankTableText.colFunction }}
                </th>
                <th
                  class="border border-[#e5e7eb] px-4 py-3 text-center font-bold text-[#1e293b]"
                >
                  {{ bankTableText.colSite }}
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-[#e5e7eb] text-[#4b5563]">
              <tr
                v-for="(row, i) in bankTableRows"
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

        <CategoryPopularOutside exclude-category="banks" />
        <FaqAccordion :title="faqText.h2" :items="faqText.items" />
      </section>
    </div>
  </div>
</template>
