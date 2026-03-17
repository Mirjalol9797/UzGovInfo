<script setup>
import allCategoriesConfig from "../data/page-content/allCategories.js";

const { t } = useI18n();
const localePath = useLocalePath();
const route = useRoute();

const props = defineProps({
  oneData: {
    type: Object,
    default: () => ({}),
  },
  pageContent: {
    type: Object,
    default: null,
  },
  category: {
    type: String,
    default: "",
  },
  /** Другие детальные страницы в этой категории (исключая текущую) */
  otherItems: {
    type: Array,
    default: () => [],
  },
});

const locale = computed(() => {
  const loc = useNuxtApp().$i18n?.locale?.value;
  return loc || "ru";
});

const content = computed(() => {
  const pc = props.pageContent;
  if (!pc) return null;
  return pc[locale.value] || pc.ru || null;
});

const hasFullContent = computed(() => !!content.value);

const intro = computed(() => content.value?.intro || []);

const officialSite = computed(() => content.value?.officialSite || null);

const whatFind = computed(() => content.value?.whatFind || null);

const whyUse = computed(() => content.value?.whyUse || null);

const otherSites = computed(() => {
  if (!content.value?.otherSites?.h2 || !props.category || !props.otherItems?.length)
    return null;
  return {
    h2: content.value.otherSites.h2,
    links: props.otherItems
      .filter((item) => item?.title)
      .map((item) => ({
        href: `/${props.category}/${item.slug}`,
        text: t(item.title),
      })),
  };
});

const allCategories = computed(() => {
  if (!hasFullContent.value) return null;
  return {
    h2: t("allCategories.h2"),
    links: allCategoriesConfig.links.map((l) => ({
      href: l.href,
      text: t(l.textKey),
    })),
  };
});

const faq = computed(() => content.value?.faq || null);

const pageTitle = computed(() => content.value?.pageTitle || null);

const schemaOrgData = computed(() => {
  if (!hasFullContent.value || !props.oneData) return null;
  const title = props.oneData?.title;
  const link = props.oneData?.link;
  const schema = content.value?.schema;
  if (!title || typeof title !== "string") return null;
  const path = route.fullPath;
  const url = `https://govinfo.uz${path}`;
  const name = pageTitle.value || t(title);
  const description = schema?.description || t(props.oneData?.seo?.description || "brief_description_site");
  const orgName = schema?.orgName || t(title);
  const sameAs = schema?.sameAs || (link ? t(link) : "");

  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url,
    mainEntity: {
      "@type": "GovernmentOrganization",
      name: orgName,
      sameAs,
    },
  };
});

useHead(() => ({
  script: schemaOrgData.value
    ? [
        {
          type: "application/ld+json",
          innerHTML: JSON.stringify(schemaOrgData.value),
        },
      ]
    : [],
}));
</script>

<template>
  <div v-if="oneData" class="rank-detail">
    <div class="site-container py-6 md:py-10">
      <!-- Full content layout -->
      <template v-if="hasFullContent">
        <h1 class="mb-6 font-medium text-xl md:text-2xl 480:!text-lg">
          {{ pageTitle || (oneData?.title ? t(oneData.title) : "") }}
        </h1>

        <div
          v-if="intro.length"
          class="text-[#4B5563] base-bg leading-7 text-base 768:text-sm mb-6 space-y-2"
        >
          <p v-for="(para, i) in intro" :key="'intro-' + i">{{ para }}</p>
        </div>

        <div
          v-if="officialSite"
          class="mb-8 rounded-lg border border-[#e5e7eb] bg-[#f8fafc] p-6"
        >
          <h2 class="mb-4 font-semibold text-lg md:text-xl">
            {{ officialSite.h2 }}
          </h2>
          <a
            :href="oneData?.link ? t(oneData.link) : '#'"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 rounded-lg bg-[#2563eb] px-5 py-3 font-medium text-white transition hover:bg-[#1d4ed8]"
          >
            {{ officialSite.ctaText }}
          </a>
        </div>

        <div v-if="whatFind" class="mb-8 pt-6 border-t border-[#eee]">
          <h2 class="mb-4 font-semibold text-lg md:text-xl">
            {{ whatFind.h2 }}
          </h2>
          <div
            class="text-[#4B5563] base-bg leading-7 text-base 768:text-sm space-y-2"
          >
            <p>{{ whatFind.intro }}</p>
            <p v-if="whatFind.listLabel" class="font-medium">
              {{ whatFind.listLabel }}
            </p>
            <ul class="list-disc list-inside space-y-1">
              <li v-for="(item, i) in whatFind.items" :key="'wf-' + i">
                {{ item }}
              </li>
            </ul>
            <p>{{ whatFind.closing }}</p>
          </div>
        </div>

        <div v-if="whyUse" class="mb-8 pt-6 border-t border-[#eee]">
          <h2 class="mb-4 font-semibold text-lg md:text-xl">
            {{ whyUse.h2 }}
          </h2>
          <div
            class="text-[#4B5563] base-bg leading-7 text-base 768:text-sm space-y-2"
          >
            <p>{{ whyUse.intro }}</p>
            <p v-if="whyUse.listLabel" class="font-medium">
              {{ whyUse.listLabel }}
            </p>
            <ul class="list-disc list-inside space-y-1">
              <li v-for="(item, i) in whyUse.items" :key="'wu-' + i">
                {{ item }}
              </li>
            </ul>
          </div>
        </div>

        <div v-if="otherSites" class="mb-8 pt-6 border-t border-[#eee]">
          <h2 class="mb-4 font-semibold text-lg md:text-xl">
            {{ otherSites.h2 }}
          </h2>
          <ul class="list-disc list-inside space-y-1">
            <li
              v-for="(link, i) in otherSites.links"
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
        </div>

        <div v-if="allCategories" class="mb-8 pt-6 border-t border-[#eee]">
          <h2 class="mb-4 font-semibold text-lg md:text-xl">
            {{ allCategories.h2 }}
          </h2>
          <ul class="list-disc list-inside space-y-1">
            <li
              v-for="(link, i) in allCategories.links"
              :key="'cat-' + i"
            >
              <NuxtLink
                :to="localePath(link.href)"
                class="text-[#2563eb] hover:underline"
              >
                {{ link.text }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <div v-if="faq" class="mb-8 pt-6 border-t border-[#eee]">
          <h2 class="mb-4 font-semibold text-lg md:text-xl">
            {{ faq.h2 }}
          </h2>
          <div class="space-y-4">
            <div
              v-for="(item, i) in faq.items"
              :key="'faq-' + i"
              class="space-y-1"
            >
              <h3 class="font-medium text-[#111] text-base 768:text-sm">
                {{ item.q }}
              </h3>
              <p class="text-sm text-[#4B5563]">{{ item.a }}</p>
            </div>
          </div>
        </div>
      </template>

      <!-- Simple layout (fallback) -->
      <template v-else>
        <h1 class="mb-10 text-3xl 768:text-xl 480:!text-lg">
          {{ oneData?.title ? t(oneData.title) : "" }}
        </h1>
        <div class="mb-6">
          <span class="font-medium">{{ t("link_to_official_website") }}</span
          >:
          <a :href="oneData?.link ? t(oneData.link) : '#'" target="_blank" class="!text-[#315efb]">{{
            oneData?.link ? t(oneData.link) : ""
          }}</a>
        </div>
        <div>
          <div class="mb-2 font-medium">{{ t("brief_description_site") }}</div>
          <div v-html="oneData?.description ? t(oneData.description) : ''" class="mb-6 text-justify"></div>
          <div class="overflow-hidden">
            <img
              :src="oneData?.seo?.image"
              :alt="oneData?.title ? t(oneData.title) : ''"
              :title="oneData?.title ? t(oneData.title) : ''"
              class="ml-[-5px]"
            />
          </div>
        </div>
      </template>
    </div>
  </div>
</template>
<style lang="scss"></style>
