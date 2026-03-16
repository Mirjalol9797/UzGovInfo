<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import useHeadquarters from "../data/headquarters";
import useInspections from "../data/inspections";
import useMinistries from "../data/ministries";
import useState from "../data/state";

const route = useRoute();
const { t, locale } = useI18n();
const localePath = useLocalePath();

const localeCodes = ["en", "uz", "ru"];

const slugTitleMap = computed(() => {
  const map = new Map();
  const sources = [
    useHeadquarters().data,
    useMinistries().data,
    useState().data,
    useInspections().data,
  ];

  sources.flat().forEach((item) => {
    map.set(item.slug, t(item.title));
  });

  return map;
});

const sectionTitleMap = computed(() => ({
  about: t("About.title"),
  contacts: t("Contacts.title"),
  privacy: t("Privacy.title"),
  terms: t("Terms.title"),
  organizations: t("Organizations.headtitle"),
  headquarters: t("Headquarters.headtitle"),
  ministries: t("Ministries.headtitle"),
  state: t("State.headtitle"),
  inspections: t("Inspections.headtitle"),
}));

const pathSegments = computed(() => {
  const segments = route.path.split("/").filter(Boolean);
  if (segments.length && localeCodes.includes(segments[0])) {
    return segments.slice(1);
  }
  return segments;
});

const isHome = computed(() => pathSegments.value.length === 0);

const homeLabel = computed(() => {
  if (locale.value === "en") return "Home";
  if (locale.value === "uz") return "Bosh sahifa";
  return "Главная";
});

const crumbs = computed(() => {
  const items = [{ label: homeLabel.value, to: localePath("/") }];

  let currentPath = "";

  pathSegments.value.forEach((segment) => {
    currentPath += `/${segment}`;
    const label =
      sectionTitleMap.value[segment] ||
      slugTitleMap.value.get(segment) ||
      decodeURIComponent(segment).replace(/-/g, " ");

    items.push({
      label,
      to: localePath(currentPath),
    });
  });

  return items;
});
</script>

<template>
  <nav v-if="!isHome" aria-label="breadcrumb" class="pb-4">
    <div class="site-container">
      <ul
        class="flex gap-1 text-sm text-[#6B7280] overflow-x-auto scrollbar-hide"
      >
        <li
          v-for="(crumb, index) in crumbs"
          :key="crumb.to + index"
          class="flex items-center gap-1"
        >
          <nuxt-link
            :to="crumb.to"
            :aria-current="index === crumbs.length - 1 ? 'page' : undefined"
            :class="[
              'flex items-center rounded-md px-2 py-1 transition gap-1.5',
              index === crumbs.length - 1
                ? 'text-[#111827] font-medium pointer-events-none bg-transparent'
                : 'hover:text-[#315EFB] hover:bg-[#eef4ff]',
            ]"
          >
            <svg
              v-if="index === 0"
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="shrink-0"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            <span class="whitespace-nowrap">{{ crumb.label }}</span>
          </nuxt-link>

          <svg
            v-if="index !== crumbs.length - 1"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="text-[#D1D5DB] shrink-0"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </li>
      </ul>
    </div>
  </nav>
</template>
