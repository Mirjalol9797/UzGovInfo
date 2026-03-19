<script setup>
import useHeadquarters from "../data/headquarters";
import useInspections from "../data/inspections";
import useMinistries from "../data/ministries";
import useState from "../data/state";

const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  sectionClass: {
    type: String,
    default: "mb-10 768:mb-6",
  },
});

const { t } = useI18n();
const localePath = useLocalePath();
const headquarters = useHeadquarters();
const ministries = useMinistries();
const state = useState();
const inspections = useInspections();

const categoryIcons = {
  headquarters: `<svg viewBox="0 0 24 24" fill="none"><path d="M4 10L12 4L20 10V19H4V10Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M10 19V13H14V19" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  ministries: `<svg viewBox="0 0 24 24" fill="none"><rect x="3" y="7" width="18" height="11" rx="1.5" stroke="currentColor" stroke-width="1.6"/><path d="M7 4H17V7H7V4Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M7 12H17" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>`,
  state: `<svg viewBox="0 0 24 24" fill="none"><path d="M5 6H19V9H5V6Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M5 11H19V14H5V11Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M5 16H13V19H5V16Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>`,
  inspections: `<svg viewBox="0 0 24 24" fill="none"><path d="M12 3L5 6V11C5 15.52 8.06 19.74 12 21C15.94 19.74 19 15.52 19 11V6L12 3Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M12 8V12" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><circle cx="12" cy="15" r="0.9" fill="currentColor"/></svg>`,
};

const categoryCards = computed(() => [
  {
    key: "headquarters",
    href: "/headquarters",
    label: t("otherSites.headquarters"),
    count: headquarters.data.length,
    bg: "#e0ecff",
    color: "#2563eb",
  },
  {
    key: "ministries",
    href: "/ministries",
    label: t("otherSites.ministries"),
    count: ministries.data.length,
    bg: "#e0f2fe",
    color: "#0284c7",
  },
  {
    key: "state",
    href: "/state",
    label: t("otherSites.state"),
    count: state.data.length,
    bg: "#ecfdf3",
    color: "#16a34a",
  },
  {
    key: "inspections",
    href: "/inspections",
    label: t("otherSites.inspections"),
    count: inspections.data.length,
    bg: "#fef3c7",
    color: "#d97706",
  },
]);
</script>

<template>
  <section :class="sectionClass">
    <h2 class="font-medium text-base md:text-xl mb-4 md:mb-6">
      {{ title || t("allCategories.h2") }}
    </h2>
    <div class="grid grid-cols-4 768:grid-cols-2 gap-4 768:gap-3">
      <nuxt-link
        v-for="cat in categoryCards"
        :key="cat.key"
        :to="localePath(cat.href)"
        class="rounded-xl border border-[#e5e7eb] bg-white p-5 text-center hover:shadow-sm transition"
      >
        <div
          class="mx-auto mb-3 w-10 h-10 rounded-lg flex items-center justify-center"
          :style="{ backgroundColor: cat.bg, color: cat.color }"
        >
          <div class="w-5 h-5" v-html="categoryIcons[cat.key]"></div>
        </div>
        <div class="font-semibold text-[#1e293b] text-sm mb-1">
          {{ cat.label }}
        </div>
        <div class="text-lg font-bold" :style="{ color: cat.color }">
          {{ cat.count }}
        </div>
      </nuxt-link>
    </div>
  </section>
</template>
