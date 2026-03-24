<script setup>
import useAgencies from "../../data/agencies";
import CategorySeo from "../../components/Seo/CategorySeo.vue";
import CategoryInfoTabs from "../../components/CategoryInfoTabs.vue";
import FaqAccordion from "../../components/FaqAccordion.vue";

const { t, locale } = useI18n();
const localePath = useLocalePath();
const agencies = useAgencies();

/* ================= SEO ================= */

const schemaOrgData = computed(() => {
  const ru = {
    name: "Агентства Республики Узбекистан",
    description:
      "Полный список агентств Республики Узбекистан с официальными сайтами и описанием функций.",
    url: "https://govinfo.uz/state",
    inLanguage: "ru",
  };
  const en = {
    name: "Agencies of the Republic of Uzbekistan",
    description:
      "Complete list of Uzbekistan agencies with official websites and functions.",
    url: "https://govinfo.uz/en/state",
    inLanguage: "en",
  };
  const uz = {
    name: "Oʻzbekiston Respublikasi agentliklari",
    description:
      "Oʻzbekiston agentliklari roʻyxati, rasmiy saytlar va funksiyalar.",
    url: "https://govinfo.uz/uz/state",
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

/* ================= INTRO ================= */

const introText = computed(() => {
  const ru = [
    "Агентства Республики Узбекистан — это государственные органы, выполняющие специализированные функции в различных сферах экономики, социальной политики, цифровизации, инвестиций и государственного управления.",
    "Государственные агентства играют ключевую роль в реализации государственных программ, внедрении реформ и обеспечении эффективной работы отдельных направлений государственной политики.",
    "В отличие от министерств, агентства чаще выполняют узкоспециализированные задачи, включая контроль, развитие отраслей, цифровые сервисы и взаимодействие с бизнесом и гражданами.",
    "На этой странице представлен полный список агентств Узбекистана с переходами на их официальные сайты и кратким описанием функций.",
  ];

  return { ru }[locale.value] || ru;
});

/* ================= STRUCTURE ================= */

const structureText = computed(() => ({
  h2: "Роль агентств в системе государственного управления",
  paragraphs: [
    "Агентства Республики Узбекистан являются важной частью исполнительной власти и выполняют функции реализации государственной политики в конкретных направлениях.",
    "Они подчиняются Кабинету Министров или профильным министерствам и обеспечивают практическое выполнение государственных программ.",
    "Основные задачи агентств включают развитие отраслей экономики, внедрение инноваций, регулирование отдельных сфер и оказание государственных услуг.",
    "Многие агентства активно внедряют цифровые технологии, улучшая взаимодействие государства с гражданами и бизнесом.",
  ],
}));

/* ================= USEFUL ================= */

const usefulText = computed(() => ({
  h2: "Официальные сайты агентств Узбекистана",
  paragraphs: [
    "Официальные сайты агентств Узбекистана содержат актуальную информацию о государственных программах, услугах, нормативных документах и новостях.",
    "Через эти сайты граждане и предприниматели могут получать государственные услуги, подавать заявки и отслеживать процессы.",
    "Каталог Govinfo позволяет быстро найти нужное агентство и перейти на его официальный сайт без лишнего поиска.",
  ],
}));

/* ================= TABLE ================= */

const tableText = computed(() => ({
  h2: "Список агентств Республики Узбекистан",
  colOrganization: "Агентство",
  colType: "Сфера",
  colFunction: "Основные функции",
  colSite: "Сайт",
}));

const tableRows = computed(() => [
  {
    org: "Агентство государственных услуг",
    type: "Госуслуги",
    func: "Оказание государственных услуг населению и бизнесу",
    link: "https://my.gov.uz",
    linkText: "my.gov.uz",
  },
  {
    org: "Агентство по управлению государственными активами",
    type: "Экономика",
    func: "Управление госимуществом и приватизация",
    link: "https://davaktiv.uz",
    linkText: "davaktiv.uz",
  },
  {
    org: "Агентство по статистике",
    type: "Аналитика",
    func: "Сбор и анализ статистических данных",
    link: "https://stat.uz",
    linkText: "stat.uz",
  },
]);

/* ================= FAQ ================= */

const faqText = computed(() => ({
  h2: "Часто задаваемые вопросы",
  items: [
    {
      q: "Что такое государственные агентства?",
      a: "Государственные агентства — это органы исполнительной власти, выполняющие специализированные функции в различных сферах.",
    },
    {
      q: "Чем агентства отличаются от министерств?",
      a: "Министерства формируют политику, а агентства реализуют её на практике.",
    },
    {
      q: "Где найти официальный сайт агентства?",
      a: "На портале Govinfo собраны ссылки на все официальные сайты агентств.",
    },
    {
      q: "Есть ли у каждого агентства отдельная страница с описанием?",
      a: "Да: по карточке агентства можно перейти на страницу с вводным текстом, разделом об официальном сайте и ответами на частые вопросы.",
    },
    {
      q: "Как искать агентство на сайте?",
      a: "Используйте поиск на главной странице или откройте раздел «Агентства» и выберите нужную организацию в списке.",
    },
  ],
}));
</script>

<template>
  <div>
    <CategorySeo
      title-key="Agencies.seo.title"
      description-key="Agencies.seo.description"
    />

    <div class="site-container">
      <section>
        <h1 class="text-2xl font-semibold mb-4">
          Агентства Республики Узбекистан
        </h1>

        <div class="space-y-2 text-sm text-gray-600 mb-6">
          <p v-for="(p, i) in introText" :key="i">{{ p }}</p>
        </div>

        <!-- GRID -->
        <div class="grid grid-cols-5 gap-3">
          <nuxt-link
            v-for="(item, index) in agencies.data"
            :key="index"
            :to="localePath(`/agencies/${item.slug}`)"
            class="link-block"
          >
            <NuxtImg :src="item.img" class="rounded-xl" />
            <h3>{{ $t(item.title) }}</h3>
            <p>{{ $t(item.shortDesc) }}</p>
          </nuxt-link>
        </div>

        <!-- TABS -->
        <CategoryInfoTabs :labels="[structureText.h2, usefulText.h2]">
          <template #panel0>
            <p v-for="(p, i) in structureText.paragraphs" :key="i">
              {{ p }}
            </p>
          </template>

          <template #panel1>
            <p v-for="(p, i) in usefulText.paragraphs" :key="i">
              {{ p }}
            </p>
          </template>
        </CategoryInfoTabs>

        <!-- TABLE -->
        <h2 class="text-xl font-semibold mt-6 mb-3">
          {{ tableText.h2 }}
        </h2>

        <table class="w-full border">
          <tr>
            <th>{{ tableText.colOrganization }}</th>
            <th>{{ tableText.colType }}</th>
            <th>{{ tableText.colFunction }}</th>
            <th>{{ tableText.colSite }}</th>
          </tr>

          <tr v-for="(row, i) in tableRows" :key="i">
            <td>{{ row.org }}</td>
            <td>{{ row.type }}</td>
            <td>{{ row.func }}</td>
            <td>
              <a :href="row.link" target="_blank">
                {{ row.linkText }}
              </a>
            </td>
          </tr>
        </table>

        <FaqAccordion :title="faqText.h2" :items="faqText.items" />
      </section>
    </div>
  </div>
</template>
