<script setup lang="ts">
import useHeadquarters from "../../data/headquarters";
import useInspections from "../../data/inspections";
import useMinistries from "../../data/ministries";
import useState from "../../data/state";

const { t } = useI18n();
const localePath = useLocalePath();
const route = useRoute();

const headquarters = useHeadquarters();
const ministries = useMinistries();
const state = useState();
const inspections = useInspections();

type CategoryKey = "headquarters" | "ministries" | "state" | "inspections";

type Organization = {
  id: number;
  slug: string;
  title: string;
  shortDesc?: string;
  tag?: string;
  img: string;
  category: CategoryKey;
};

const query = computed(() => {
  const raw = route.query.q;
  if (Array.isArray(raw)) return raw[0] || "";
  return typeof raw === "string" ? raw : "";
});

const allOrganizations = computed<Organization[]>(() => {
  const cats: Array<{ key: CategoryKey; data: any[] }> = [
    { key: "headquarters", data: headquarters.data },
    { key: "ministries", data: ministries.data },
    { key: "state", data: state.data },
    { key: "inspections", data: inspections.data },
  ];

  return cats
    .flatMap((cat) => cat.data.map((item) => ({ ...item, category: cat.key })))
    .sort((a: any, b: any) => t(a.title).localeCompare(t(b.title)));
});

const results = computed(() => {
  const q = query.value.trim().toLowerCase();
  if (!q) return [];

  return allOrganizations.value.filter((org) => {
    const titleText = t(org.title).toLowerCase();
    const categoryText = t(`otherSites.${org.category}`).toLowerCase();
    const descText = org.shortDesc ? t(org.shortDesc).toLowerCase() : "";
    return (
      titleText.includes(q) || categoryText.includes(q) || descText.includes(q)
    );
  });
});

useHead(() => ({
  title: query.value.trim()
    ? `Поиск: ${query.value.trim()}`
    : "Поиск по каталогу",
  meta: [
    {
      name: "description",
      content: query.value.trim()
        ? `Результаты поиска по: ${query.value.trim()}`
        : "Поиск по каталогу официальных сайтов государственных органов Узбекистана",
    },
  ],
}));
</script>

<template>
  <div class="site-container">
    <div class="border-b border-[#eee] pb-2 mb-4 md:mb-6">
      <h1 class="font-medium text-xl md:text-2xl">
        {{ query.trim() ? "Результаты поиска" : "Поиск" }}
      </h1>
      <div v-if="query.trim()" class="text-sm text-[#6B7280] mt-1">
        Запрос: <span class="font-medium">{{ query }}</span>
      </div>
    </div>

    <div
      v-if="query.trim() && results.length"
      class="grid grid-cols-5 gap-3 768:grid-cols-2 768:gap-2 576:!grid-cols-1"
    >
      <nuxt-link
        v-for="org in results"
        :key="org.category + '-' + org.slug"
        :to="localePath(`/${org.category}/${org.slug}`)"
        class="link-block"
      >
        <div class="min-w-[64px] h-[64px]">
          <NuxtImg
            :src="org.img"
            :alt="t(org.title)"
            :title="t(org.title)"
            class="w-full h-full object-cover rounded-xl"
            loading="lazy"
            format="webp"
          />
        </div>

        <h3 class="title">
          {{ t(org.title) }}
        </h3>

        <p class="short-desc">{{ org.shortDesc ? t(org.shortDesc) : "" }}</p>

        <span class="tag-badge">{{ org.tag ? t(org.tag) : "" }}</span>
      </nuxt-link>
    </div>

    <div v-else class="text-sm text-[#6B7280]">
      {{
        query.trim()
          ? "Ничего не найдено"
          : "Введите запрос в поиске на главной странице."
      }}
    </div>
  </div>
</template>
