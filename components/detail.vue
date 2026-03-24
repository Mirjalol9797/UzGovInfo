<script setup>
import AllCategoriesCards from "./AllCategoriesCards.vue";

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
const officialSiteUrl = computed(() =>
  props.oneData?.link ? t(props.oneData.link) : "#"
);
const officialSiteHost = computed(() => {
  const raw = officialSiteUrl.value || "";
  if (!raw || raw === "#") return "";
  try {
    return new URL(raw).host.replace(/^www\./, "");
  } catch {
    return raw
      .replace(/^https?:\/\//, "")
      .replace(/^www\./, "")
      .replace(/\/.*$/, "");
  }
});
const verifiedLabel = computed(() => {
  if (locale.value === "en") return "Verified";
  if (locale.value === "uz") return "Tasdiqlangan";
  return "Проверено";
});

const whatFind = computed(() => content.value?.whatFind || null);

const whyUse = computed(() => content.value?.whyUse || null);

const otherSites = computed(() => {
  if (
    !content.value?.otherSites?.h2 ||
    !props.category ||
    !props.otherItems?.length
  )
    return null;
  const slugToIcon = (slug) => {
    if (!slug) return "building";
    const s = slug.toLowerCase();
    if (s.includes("parliament") || s.includes("senate")) return "law";
    if (s.includes("government") || s.includes("gov")) return "building";
    if (s.includes("court") || s.includes("sud")) return "law";
    if (s.includes("prosecutor") || s.includes("prokurat")) return "shield";
    if (s.includes("election") || s.includes("saylov")) return "vote";
    if (s.includes("bank") || s.includes("cbu")) return "finance";
    if (s.includes("account") || s.includes("ach")) return "chart";
    if (s.includes("uzarxiv") || s.includes("archives")) return "decree";
    if (s.includes("cinematography") || s.includes("uzbkino")) return "program";
    if (
      s.includes("pharmaceutical") ||
      s.includes("uzpharmagency") ||
      s.includes("pharma")
    )
      return "building";
    if (s.includes("state-assets") || s.includes("davaktiv")) return "finance";
    if (s.includes("youth-affairs") || s.includes("yoshlar")) return "people";
    if (s.includes("uzbekcosmos") || s.includes("cosmos")) return "globe";
    if (s.includes("antidoping") || s.includes("uznada")) return "shield";
    if (s.includes("uzatom")) return "analytics";
    if (s.includes("madaniymeros") || s.includes("cultural-heritage"))
      return "program";
    if (s.includes("emdra")) return "finance";
    if (s.includes("standart") || s.includes("technical-regulation"))
      return "decree";
    return "building";
  };
  return {
    h2: content.value.otherSites.h2,
    items: props.otherItems
      .filter((item) => item?.title)
      .map((item) => ({
        text: t(item.title),
        icon: slugToIcon(item.slug),
        href: `/${props.category}/${item.slug}`,
      })),
  };
});

const faq = computed(() => content.value?.faq || null);
const openFaqIndex = ref(null);

function toggleFaq(i) {
  openFaqIndex.value = openFaqIndex.value === i ? null : i;
}

const pageTitle = computed(() => content.value?.pageTitle || null);

const iconSvgs = {
  news: `<path stroke-linecap="round" stroke-linejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3z"/>`,
  decree: `<path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9z"/>`,
  globe: `<path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"/>`,
  speech: `<path stroke-linecap="round" stroke-linejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3z"/>`,
  program: `<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6zm0 9.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25zm9.75-9.75A2.25 2.25 0 0 1 15.75 3.75H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6zm0 9.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25z"/>`,
  law: `<path stroke-linecap="round" stroke-linejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z"/>`,
  session: `<path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"/>`,
  people: `<path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0z"/>`,
  building: `<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"/>`,
  chart: `<path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75zm6.75-4.5c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625zm6.75-4.5c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125z"/>`,
  analytics: `<path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6z"/><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5z"/>`,
  shield: `<path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"/>`,
  vote: `<path stroke-linecap="round" stroke-linejoin="round" d="M7.5 3.75H6A2.25 2.25 0 0 0 3.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0 1 20.25 6v1.5m0 9V18A2.25 2.25 0 0 1 18 20.25h-1.5m-9 0H6A2.25 2.25 0 0 1 3.75 18v-1.5M15 12l-3 3m0 0-3-3m3 3V9"/>`,
  finance: `<path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"/>`,
};

const iconColors = {
  news: "#2563eb",
  decree: "#7c3aed",
  globe: "#0891b2",
  speech: "#c026d3",
  program: "#059669",
  law: "#b45309",
  session: "#dc2626",
  people: "#0d9488",
  building: "#6366f1",
  chart: "#16a34a",
  analytics: "#e11d48",
  shield: "#15803d",
  vote: "#9333ea",
  finance: "#ca8a04",
};

function getIcon(name) {
  const inner = iconSvgs[name] || iconSvgs.news;
  const color = iconColors[name] || "#6b7280";
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="${color}">${inner}</svg>`;
}

function getIconBg(name) {
  const color = iconColors[name] || "#6b7280";
  return color + "14";
}

const schemaOrgData = computed(() => {
  if (!hasFullContent.value || !props.oneData) return null;
  const title = props.oneData?.title;
  const link = props.oneData?.link;
  const schema = content.value?.schema;
  if (!title || typeof title !== "string") return null;
  const path = route.fullPath;
  const url = `https://govinfo.uz${path}`;
  const name = pageTitle.value || t(title);
  const description =
    schema?.description ||
    t(props.oneData?.seo?.description || "brief_description_site");
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
    <div class="site-container">
      <!-- Full content layout -->
      <template v-if="hasFullContent">
        <div class="mb-6 font-medium text-2xl 768:text-xl 480:!text-lg">
          <template v-if="locale === 'uz'">
            <h1 class="font-medium text-2xl 768:text-xl 480:!text-lg inline">
              {{ pageTitle || (oneData?.title ? t(oneData.title) : "") }}
            </h1>
            <span>{{ t("go_to") }}</span>
          </template>
          <template v-else>
            <span>{{ t("go_to") }}&nbsp;</span>
            <h1 class="font-medium text-2xl 768:text-xl 480:!text-lg inline">
              {{ pageTitle || (oneData?.title ? t(oneData.title) : "") }}
            </h1>
          </template>
        </div>

        <div
          v-if="intro.length"
          class="text-[#4B5563] base-bg leading-6 text-sm 768:text-xs mb-6 space-y-1.5"
        >
          <p v-for="(para, i) in intro" :key="'intro-' + i">{{ para }}</p>
        </div>

        <div
          v-if="officialSite"
          class="mb-8 rounded-2xl border border-[#e5e7eb] bg-white overflow-hidden"
        >
          <div class="px-5 py-4 md:px-6 md:py-5">
            <div class="flex items-start justify-between gap-4">
              <div class="flex items-center gap-3 min-w-0">
                <div
                  class="w-12 h-12 rounded-xl bg-[#eef4ff] text-[#2563eb] flex items-center justify-center shrink-0"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="w-6 h-6"
                  >
                    <path d="m3 10 9-7 9 7" />
                    <path d="M5 10v10h14V10" />
                    <path d="M9 20v-6h6v6" />
                  </svg>
                </div>
                <div class="min-w-0">
                  <h2
                    class="font-semibold text-xl md:text-2xl leading-tight text-[#111827]"
                  >
                    {{ officialSite.h2 }}
                  </h2>
                </div>
              </div>

              <div
                class="inline-flex items-center gap-1.5 rounded-full border border-[#dcfce7] bg-[#f0fdf4] px-3 py-1.5 text-xs font-semibold text-[#15803d] shrink-0"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2.2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="w-3.5 h-3.5"
                >
                  <path d="m20 6-11 11-5-5" />
                </svg>
                <span>{{ verifiedLabel }}</span>
              </div>
            </div>
          </div>

          <div class="px-5 py-4 md:px-6 md:py-4 border-t border-[#edf1f7]">
            <div class="flex items-center gap-3 768:flex-col 768:items-stretch">
              <a
                :href="officialSiteUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="flex-1 h-12 rounded-xl border border-[#dbe3f1] bg-[#f8fafc] px-4 inline-flex items-center gap-2 text-[#315efb] font-semibold hover:bg-white transition min-w-0"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="w-5 h-5 shrink-0 text-[#94a3b8]"
                >
                  <path
                    d="M10 13a5 5 0 0 0 7.07 0l2.83-2.83a5 5 0 0 0-7.07-7.07L10 5"
                  />
                  <path
                    d="M14 11a5 5 0 0 0-7.07 0L4.1 13.83a5 5 0 1 0 7.07 7.07L14 19"
                  />
                </svg>
                <span class="truncate">{{ officialSiteHost }}</span>
              </a>

              <a
                :href="officialSiteUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="h-12 px-6 rounded-xl bg-[#2563eb] text-white font-semibold inline-flex items-center justify-center gap-2 transition hover:bg-[#1d4ed8] 768:w-full"
              >
                <span>{{ officialSite.ctaText }}</span>
              </a>
            </div>
          </div>
        </div>

        <div v-if="whatFind" class="mb-8 pt-6 border-t border-[#eee]">
          <h2 class="mb-4 font-semibold text-lg md:text-xl">
            {{ whatFind.h2 }}
          </h2>
          <p class="text-[#4B5563] leading-7 text-base 768:text-sm mb-5">
            {{ whatFind.intro }}
          </p>
          <div class="grid grid-cols-3 768:grid-cols-1 gap-3 mb-4">
            <div
              v-for="(item, i) in whatFind.items"
              :key="'wf-' + i"
              class="rounded-xl border border-[#e5e7eb] bg-white p-4 transition hover:shadow-sm"
            >
              <div
                class="mb-3 w-10 h-10 rounded-lg flex items-center justify-center"
                :style="{ backgroundColor: getIconBg(item.icon) }"
              >
                <div class="w-5 h-5" v-html="getIcon(item.icon)"></div>
              </div>
              <div class="font-semibold text-[#1e293b] mb-1">
                {{ item.title }}
              </div>
              <div class="text-sm text-[#6b7280] leading-relaxed">
                {{ item.desc }}
              </div>
            </div>
          </div>
          <p
            v-if="whatFind.closing"
            class="text-[#4B5563] leading-7 text-base 768:text-sm"
          >
            {{ whatFind.closing }}
          </p>
        </div>

        <div v-if="otherSites" class="mb-8 pt-6 border-t border-[#eee]">
          <h2 class="mb-4 font-semibold text-lg md:text-xl">
            {{ otherSites.h2 }}
          </h2>
          <div class="grid grid-cols-4 768:grid-cols-2 576:!grid-cols-1 gap-4">
            <NuxtLink
              v-for="(item, i) in otherSites.items"
              :key="'other-' + i"
              :to="localePath(item.href)"
              class="rounded-xl border border-[#e5e7eb] bg-white p-4 flex items-center gap-3 transition hover:border-[#2563eb]/40 hover:bg-[#f8fafc]"
            >
              <div
                class="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                :style="{ backgroundColor: getIconBg(item.icon) }"
              >
                <div class="w-5 h-5" v-html="getIcon(item.icon)"></div>
              </div>
              <p class="font-medium text-[#111827] text-sm leading-snug">
                {{ item.text }}
              </p>
            </NuxtLink>
          </div>
        </div>

        <AllCategoriesCards section-class="mb-8 pt-6 border-t border-[#eee]" />

        <div v-if="whyUse" class="mb-8 pt-6 border-t border-[#eee]">
          <h2 class="mb-4 font-semibold text-lg md:text-xl">
            {{ whyUse.h2 }}
          </h2>
          <div
            class="text-[#4B5563] base-bg leading-6 text-sm 768:text-xs space-y-1.5"
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

        <div v-if="faq" class="mb-8 pt-6 border-t border-[#eee]">
          <h2 class="mb-4 font-semibold text-lg md:text-xl">
            {{ faq.h2 }}
          </h2>
          <div
            class="base-bg !p-0 overflow-hidden divide-y divide-[#dbe6ff]/80"
          >
            <div v-for="(item, i) in faq.items" :key="'faq-' + i">
              <button
                type="button"
                class="w-full flex items-start gap-3 px-4 py-3 md:px-6 md:py-4 text-left hover:bg-white/50 transition-colors"
                :aria-expanded="openFaqIndex === i"
                @click="toggleFaq(i)"
              >
                <span
                  class="font-medium text-[#111] text-base 768:text-sm flex-1 pr-2 leading-snug"
                >
                  {{ item.q }}
                </span>
                <span
                  class="shrink-0 mt-0.5 inline-flex text-[#315efb]"
                  aria-hidden="true"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="w-5 h-5 transition-transform duration-200 ease-out"
                    :class="{ 'rotate-180': openFaqIndex === i }"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </span>
              </button>
              <div
                class="grid transition-[grid-template-rows] duration-300 ease-out"
                :class="
                  openFaqIndex === i ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                "
              >
                <div class="min-h-0 overflow-hidden">
                  <p
                    class="px-4 pb-4 md:px-6 md:pb-5 text-sm text-[#4B5563] leading-relaxed"
                  >
                    {{ item.a }}
                  </p>
                </div>
              </div>
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
          <a
            :href="oneData?.link ? t(oneData.link) : '#'"
            target="_blank"
            class="!text-[#315efb]"
            >{{ oneData?.link ? t(oneData.link) : "" }}</a
          >
        </div>
        <div>
          <div class="mb-2 font-medium">{{ t("brief_description_site") }}</div>
          <div
            v-html="oneData?.description ? t(oneData.description) : ''"
            class="mb-6 text-justify"
          ></div>
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
