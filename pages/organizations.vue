<script setup>
import useHeadquarters from "../data/headquarters";
import useInspections from "../data/inspections";
import useHokimiyats from "../data/hokimiyats";
import useMinistries from "../data/ministries";
import useState from "../data/state";
import useAgencies from "../data/agencies";
import useFunds from "../data/funds";

const { t, locale } = useI18n();
const localePath = useLocalePath();

const categories = [
  { key: "headquarters", data: useHeadquarters().data },
  { key: "ministries", data: useMinistries().data },
  { key: "state", data: useState().data },
  { key: "agencies", data: useAgencies().data },
  { key: "funds", data: useFunds().data },
  { key: "inspections", data: useInspections().data },
  { key: "hokimiyats", data: useHokimiyats().data },
];

const allOrganizations = computed(() => {
  const list = categories.flatMap((cat) =>
    cat.data.map((item) => ({
      ...item,
      category: cat.key,
    }))
  );
  return [...list].sort((a, b) =>
    t(a.title).localeCompare(t(b.title), locale.value)
  );
});

const content = computed(() => {
  const ru = {
    h1: "Все государственные организации Узбекистана",
    text1: [
      "На этой странице представлен полный список официальных сайтов государственных организаций Республики Узбекистан. Каталог включает центральные органы государственной власти, министерства, государственные комитеты, агентства и инспекции.",
      "Основная цель страницы — помочь пользователям быстро находить официальные интернет-ресурсы государственных учреждений. Здесь собраны ссылки на сайты организаций, которые отвечают за различные направления государственной политики, экономического развития, социальной сферы, здравоохранения, образования и других областей управления.",
      "Используя данный каталог, пользователи могут быстро перейти на официальный сайт нужной организации и получить актуальную информацию из первоисточника. Все представленные ссылки ведут на официальные интернет-ресурсы государственных органов Республики Узбекистан.",
      "Каталог регулярно обновляется и дополняется новыми государственными учреждениями, чтобы пользователи могли легко находить нужные государственные сайты в одном месте.",
    ],
    text2: [
      "Государственные органы Республики Узбекистан играют важную роль в управлении страной, разработке и реализации государственной политики, а также в предоставлении различных государственных услуг гражданам и организациям. Каждое министерство, комитет или агентство отвечает за определённую сферу деятельности и имеет собственный официальный сайт, на котором публикуется актуальная информация, новости, нормативные документы и государственные программы.",
      "На официальных сайтах государственных организаций можно найти информацию о структуре органов власти, руководстве, государственных программах и проектах, а также получить доступ к различным электронным сервисам и онлайн-услугам.",
      "Каталог UzGovInfo объединяет ссылки на основные государственные сайты Узбекистана и помогает пользователям быстро ориентироваться среди большого количества государственных интернет-ресурсов. Страница регулярно обновляется и дополняется новыми организациями, что позволяет поддерживать каталог актуальным и полезным для пользователей.",
    ],
  };
  const en = {
    h1: "All Government Organizations of Uzbekistan",
    text1: [
      "This page presents a complete list of official websites of government organizations of the Republic of Uzbekistan. The catalog includes central government bodies, ministries, state committees, agencies, and inspections.",
      "The main purpose of this page is to help users quickly find official internet resources of government institutions. Here you will find links to websites of organizations responsible for various areas of state policy, economic development, social sphere, healthcare, education, and other areas of governance.",
      "Using this catalog, users can quickly navigate to the official website of the required organization and obtain up-to-date information from the primary source. All links lead to official internet resources of government bodies of the Republic of Uzbekistan.",
      "The catalog is regularly updated and supplemented with new government institutions so that users can easily find the government websites they need in one place.",
    ],
    text2: [
      "Government bodies of the Republic of Uzbekistan play an important role in governing the country, developing and implementing state policy, as well as providing various government services to citizens and organizations. Each ministry, committee, or agency is responsible for a specific area of activity and has its own official website where current information, news, regulatory documents, and government programs are published.",
      "On the official websites of government organizations, you can find information about the structure of government bodies, leadership, government programs and projects, as well as access various electronic services and online services.",
      "The UzGovInfo catalog brings together links to the main government websites of Uzbekistan and helps users quickly navigate among a large number of government internet resources. The page is regularly updated and supplemented with new organizations, which helps keep the catalog current and useful for users.",
    ],
  };
  const uz = {
    h1: "Oʻzbekistonning barcha davlat tashkilotlari",
    text1: [
      "Ushbu sahifada Oʻzbekiston Respublikasi davlat tashkilotlarining rasmiy saytlari toʻliq roʻyxati keltirilgan. Katalog markaziy davlat hokimiyati organlari, vazirliklar, davlat qoʻmitalari, agentliklar va inspektsiyalarni oʻz ichiga oladi.",
      "Sahifaning asosiy maqsadi — foydalanuvchilarga davlat muassasalarining rasmiy internet resurslarini tez topishda yordam berish. Bu yerda davlat siyosati, iqtisodiy rivojlanish, ijtimoiy soha, sogʻliqni saqlash, taʼlim va boshqa boshqaruv sohalariga javobgar tashkilotlar saytlariga havolalar toʻplangan.",
      "Ushbu katalogdan foydalanib, foydalanuvchilar kerakli tashkilotning rasmiy saytiga tez o‘tib, birinchi manbadan dolzarb ma’lumot olishlari mumkin. Barcha havolalar Oʻzbekiston Respublikasi davlat organlarining rasmiy internet resurslariga olib boradi.",
      "Katalog muntazam yangilanadi va yangi davlat muassasalari qoʻshiladi, shunda foydalanuvchilar kerakli davlat saytlarini bir joyda osongina topishlari mumkin.",
    ],
    text2: [
      "Oʻzbekiston Respublikasi davlat organlari mamlakatni boshqarishda, davlat siyosatini ishlab chiqish va amalga oshirishda, shuningdek fuqarolar va tashkilotlarga turli davlat xizmatlarini koʻrsatishda muhim rol oʻynaydi. Har bir vazirlik, qoʻmita yoki agentlik maʼlum faoliyat sohasiga javobgar va oʻzining rasmiy saytiga ega boʻlib, unda dolzarb maʼlumotlar, yangiliklar, normativ hujjatlar va davlat dasturlari nashr etiladi.",
      "Davlat tashkilotlarining rasmiy saytlarida hokimiyat organlarining tuzilishi, rahbariyat, davlat dasturlari va loyihalari haqida maʼlumot topish, shuningdek turli elektron xizmatlar va onlayn xizmatlarga kirish mumkin.",
      "UzGovInfo katalogi Oʻzbekistonning asosiy davlat saytlariga havolalarni birlashtiradi va foydalanuvchilarga koʻp sonli davlat internet resurslari orasida tez orientatsiya qilishda yordam beradi. Sahifa muntazam yangilanadi va yangi tashkilotlar qoʻshiladi, bu katalogni dolzarb va foydalanuvchilar uchun foydali saqlashga imkon beradi.",
    ],
  };
  const map = { ru, en, uz };
  return map[locale.value] || map.ru;
});

const route = useRoute();
useHead(() => ({
  title: content.value.h1,
  meta: [
    { name: "description", content: content.value.text1[0] },
    { property: "og:title", content: content.value.h1 },
    { property: "og:description", content: content.value.text1[0] },
    { property: "og:image", content: "https://govinfo.uz/images/gerb.png" },
    { property: "og:url", content: `https://govinfo.uz${route.fullPath}` },
    { name: "twitter:title", content: content.value.h1 },
    { name: "twitter:description", content: content.value.text1[0] },
    { name: "twitter:url", content: `https://govinfo.uz${route.fullPath}` },
    { name: "twitter:image", content: "https://govinfo.uz/images/gerb.png" },
  ],
}));
</script>

<template>
  <div class="site-container">
    <section>
      <div class="border-b border-[#eee] pb-2 mb-4 md:mb-6">
        <h1 class="font-medium text-xl md:text-2xl">
          {{ content.h1 }}
        </h1>
      </div>

      <div
        class="text-[#4B5563] leading-7 text-base 768:text-sm mb-6 space-y-2"
      >
        <p v-for="(para, i) in content.text1" :key="'text1-' + i">
          {{ para }}
        </p>
      </div>

      <HeroSearch />

      <div
        class="grid grid-cols-5 gap-3 768:grid-cols-2 768:gap-2 576:!grid-cols-1"
      >
        <nuxt-link
          v-for="(item, index) in allOrganizations"
          :key="`${item.category}-${item.slug}-${index}`"
          :to="localePath(`/${item.category}/${item.slug}`)"
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
            {{ t(item.title) }}
          </h3>
          <p class="short-desc">{{ t(item.shortDesc) }}</p>
          <span class="tag-badge">{{ t(item.tag) }}</span>
        </nuxt-link>
      </div>

      <div
        class="text-[#4B5563] leading-7 text-base 768:text-sm mt-8 space-y-2"
      >
        <p v-for="(para, i) in content.text2" :key="'text2-' + i">
          {{ para }}
        </p>
      </div>
    </section>
  </div>
</template>
