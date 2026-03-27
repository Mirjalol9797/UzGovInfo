<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch, computed } from "vue";
import useHeadquarters from "../data/headquarters";
import useInspections from "../data/inspections";
import useHokimiyats from "../data/hokimiyats";
import useMinistries from "../data/ministries";
import useState from "../data/state";
import useAgencies from "../data/agencies";
import useFunds from "../data/funds";
import useCenters from "../data/centers";
import { navigateTo } from "#app";

const props = withDefaults(
  defineProps<{
    /** Селектор блока с основным HeroSearch (когда не виден — показывается панель) */
    anchorSelector?: string;
  }>(),
  {
    anchorSelector: "#hero-search-region",
  }
);

const { t } = useI18n();
const localePath = useLocalePath();

const headquarters = useHeadquarters();
const ministries = useMinistries();
const state = useState();
const agencies = useAgencies();
const funds = useFunds();
const centers = useCenters();
const inspections = useInspections();
const hokimiyats = useHokimiyats();

type OrganizationCategoryKey =
  | "headquarters"
  | "ministries"
  | "state"
  | "agencies"
  | "funds"
  | "inspections"
  | "hokimiyats";

type Organization = {
  id: number;
  slug: string;
  title: string;
  description: string;
  shortDesc?: string;
  tag?: string;
  img: string;
  link?: string;
  seo?: unknown;
  category: OrganizationCategoryKey;
};

const categories = computed(() => {
  const cats: Array<{ key: OrganizationCategoryKey; data: any[] }> = [
    { key: "headquarters", data: headquarters.data },
    { key: "ministries", data: ministries.data },
    { key: "state", data: state.data },
    { key: "agencies", data: agencies.data },
    { key: "funds", data: funds.data },
    { key: "centers", data: centers.data },
    { key: "inspections", data: inspections.data },
    { key: "hokimiyats", data: hokimiyats.data },
  ];
  return cats;
});

const allOrganizations = computed(() => {
  const list: Organization[] = categories.value.flatMap((cat) =>
    cat.data.map((item) => ({
      ...item,
      category: cat.key,
    }))
  );
  return [...list].sort((a, b) => {
    const aTitle = t(a.title);
    const bTitle = t(b.title);
    return aTitle.localeCompare(bTitle);
  });
});

const categoryNav = computed(() => [
  { key: "headquarters" as const, href: "/headquarters" },
  { key: "ministries" as const, href: "/ministries" },
  { key: "state" as const, href: "/state" },
  { key: "agencies" as const, href: "/agencies" },
  { key: "funds" as const, href: "/funds" },
  { key: "centers" as const, href: "/centers" },
  { key: "inspections" as const, href: "/inspections" },
  { key: "hokimiyats" as const, href: "/hokimiyats" },
]);

const inputValue = ref("");
const debouncedValue = ref("");
let debounceTimer: ReturnType<typeof setTimeout> | null = null;

watch(
  inputValue,
  (val) => {
    if (debounceTimer) clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      debouncedValue.value = val;
    }, 300);
  },
  { immediate: true }
);

const isFocused = ref(false);
const popularItems = ref<
  Array<{ label: string; category: OrganizationCategoryKey; slug: string }>
>([]);

const generatePopular = () => {
  const targets: Array<{
    labelKey: string;
    category: OrganizationCategoryKey;
    slug: string;
  }> = [
    {
      labelKey: "heroSearch.popular.president",
      category: "headquarters",
      slug: "headquarters-president",
    },
    {
      labelKey: "heroSearch.popular.gosuslugi",
      category: "ministries",
      slug: "ministries-digital-tech",
    },
    {
      labelKey: "heroSearch.popular.tax",
      category: "state",
      slug: "state-tax-committee",
    },
    {
      labelKey: "heroSearch.popular.mvd",
      category: "ministries",
      slug: "ministries-internal-affairs",
    },
    {
      labelKey: "heroSearch.popular.centralBank",
      category: "headquarters",
      slug: "headquarters-central-bank",
    },
    {
      labelKey: "heroSearch.popular.education",
      category: "ministries",
      slug: "ministries-education",
    },
  ];

  const shuffled = [...targets].sort(() => Math.random() - 0.5);
  const count = 4 + Math.floor(Math.random() * 3);
  popularItems.value = shuffled
    .slice(0, Math.min(count, shuffled.length))
    .map((it) => ({
      label: t(it.labelKey),
      category: it.category,
      slug: it.slug,
    }));
};

const isDropdownOpen = computed(() => isFocused.value);
const trimmed = computed(() => inputValue.value.trim());
const showPopular = computed(
  () => isDropdownOpen.value && trimmed.value.length === 0
);

const filteredOrganizations = computed(() => {
  const q = debouncedValue.value.trim().toLowerCase();
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

const navigateToOrg = (org: Organization) => {
  isFocused.value = false;
  inputValue.value = "";
  debouncedValue.value = "";
  navigateTo(localePath(`/${org.category}/${org.slug}`));
};

const navigateToOrgByKey = (
  category: OrganizationCategoryKey,
  slug: string
) => {
  isFocused.value = false;
  inputValue.value = "";
  debouncedValue.value = "";
  navigateTo(localePath(`/${category}/${slug}`));
};

const onSubmitSearch = () => {
  const q = trimmed.value;
  if (!q) return;
  navigateTo(`${localePath("/search")}?q=${encodeURIComponent(q)}`);
};

const closeTimer = ref<ReturnType<typeof setTimeout> | null>(null);

const onInputBlur = () => {
  closeTimer.value = setTimeout(() => {
    isFocused.value = false;
  }, 120);
};

const onInputFocus = () => {
  isFocused.value = true;
  if (!trimmed.value) generatePopular();
};

watch(
  trimmed,
  (val) => {
    if (isFocused.value && val.length === 0) generatePopular();
  },
  { flush: "post" }
);

/** Панель видна, когда блок hero ушёл из вьюпорта */
const heroAnchorVisible = ref(true);
const anchorFound = ref(false);
let intersectionObserver: IntersectionObserver | null = null;

const showStickyBar = computed(
  () => anchorFound.value && !heroAnchorVisible.value
);

onMounted(() => {
  if (typeof document === "undefined") return;
  const el = document.querySelector(props.anchorSelector);
  if (!el || !(el instanceof HTMLElement)) return;

  anchorFound.value = true;
  intersectionObserver = new IntersectionObserver(
    ([entry]) => {
      heroAnchorVisible.value = entry.isIntersecting;
    },
    { root: null, threshold: 0, rootMargin: "0px" }
  );
  intersectionObserver.observe(el);
});

onUnmounted(() => {
  intersectionObserver?.disconnect();
  intersectionObserver = null;
  if (debounceTimer) clearTimeout(debounceTimer);
});
</script>

<template>
  <Teleport to="body">
    <Transition name="sticky-hero-search">
      <div
        v-if="showStickyBar"
        class="fixed inset-x-0 top-0 z-[100] border-b border-[#e8ecf4] bg-white/95 shadow-[0_6px_24px_rgba(15,23,42,0.08)] backdrop-blur-md supports-[backdrop-filter]:bg-white/90"
        role="search"
        :aria-label="t('heroSearch.ariaLabel')"
      >
        <div class="site-container">
          <div class="px-3 py-2">
            <div class="relative">
              <div
                class="w-full h-[42px] rounded-[10px] border border-[#dbe6ff] bg-white flex items-center px-4"
              >
                <svg
                  viewBox="0 0 24 24"
                  class="w-4 h-4 text-[#315efb] mr-2 shrink-0"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z"
                    stroke="currentColor"
                    stroke-width="1.6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16.2 16.2 21 21"
                    stroke="currentColor"
                    stroke-width="1.6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <input
                  v-model="inputValue"
                  @focus="onInputFocus"
                  @blur="onInputBlur"
                  @keydown.enter.prevent="onSubmitSearch"
                  class="w-full min-w-0 outline-none text-xs text-[#111827] placeholder:text-[#9CA3AF]"
                  :placeholder="t('heroSearch.placeholder')"
                  :aria-label="t('heroSearch.ariaLabel')"
                />

                <button
                  type="button"
                  @click="onSubmitSearch"
                  class="ml-2 h-[30px] shrink-0 px-2.5 rounded-lg bg-[#315efb] text-white text-xs font-medium hover:brightness-95 transition"
                >
                  {{ t("heroSearch.searchButton") }}
                </button>
              </div>

              <transition
                enter-active-class="transition ease-out duration-200"
                enter-from-class="opacity-0 translate-y-1"
                enter-to-class="opacity-100 translate-y-0"
                leave-active-class="transition ease-in duration-150"
                leave-from-class="opacity-100 translate-y-0"
                leave-to-class="opacity-0 translate-y-1"
              >
                <div
                  v-if="isDropdownOpen"
                  class="absolute left-0 right-0 top-[calc(100%+8px)] z-[110]"
                >
                  <div
                    class="rounded-xl border border-[#e5e7eb] bg-white shadow-[0_10px_25px_rgba(0,0,0,0.05)] overflow-hidden"
                    @mousedown.prevent
                  >
                    <div v-if="showPopular" class="p-2.5">
                      <div class="text-[11px] text-[#6B7280] mb-1.5">
                        {{ t("heroSearch.popularTitle") }}
                      </div>
                      <div class="flex flex-wrap gap-1.5">
                        <button
                          v-for="chip in popularItems"
                          :key="chip.category + '-' + chip.slug"
                          type="button"
                          @click="navigateToOrgByKey(chip.category, chip.slug)"
                          class="px-2 py-0.5 rounded-full border border-[#e5e7eb] bg-white text-[#315efb] text-[11px] hover:bg-[#eef2ff] hover:border-[#dbeafe] transition"
                        >
                          {{ chip.label }}
                        </button>
                      </div>
                    </div>

                    <div v-else>
                      <div class="px-2.5 pt-2.5">
                        <div class="text-[11px] text-[#6B7280]">
                          {{ t("heroSearch.resultsTitle") }}
                        </div>
                      </div>

                      <div
                        v-if="filteredOrganizations.length"
                        class="max-h-[280px] overflow-auto"
                      >
                        <button
                          v-for="org in filteredOrganizations"
                          :key="org.category + '-' + org.slug"
                          type="button"
                          class="w-full text-left px-3 py-2 hover:bg-[#f5f7fb] transition border-t border-[#f3f4f9] first:border-t-0"
                          @click="navigateToOrg(org)"
                        >
                          <div class="flex items-center justify-between gap-2">
                            <div
                              class="font-medium text-[#111827] text-xs truncate"
                            >
                              {{ t(org.title) }}
                            </div>
                            <div
                              class="shrink-0 text-[10px] font-medium text-[#315efb] bg-[#eef2ff] px-1.5 py-0.5 rounded-full"
                            >
                              {{ t(`otherSites.${org.category}`) }}
                            </div>
                          </div>
                          <div
                            v-if="org.link"
                            class="text-[10px] text-[#6B7280] mt-0.5 truncate"
                          >
                            {{ t(org.link) }}
                          </div>
                        </button>
                      </div>

                      <div v-else class="p-3 text-xs text-[#6B7280]">
                        {{ t("heroSearch.nothingFound") }}
                      </div>
                    </div>
                  </div>
                </div>
              </transition>
            </div>

            <!-- Категории: на мобилке (≤768px) и при скролле внизу панели не показываем -->
            <div
              class="flex 768:hidden flex-wrap items-center gap-x-1 gap-y-1 mt-2 pt-2 border-t border-[#f3f4f6]"
            >
              <span class="text-xs text-[#9CA3AF] mr-1 shrink-0">
                {{ t("heroSearch.stickySections") }}
              </span>
              <NuxtLink
                v-for="c in categoryNav"
                :key="c.key"
                :to="localePath(c.href)"
                class="text-xs leading-snug text-[#315efb] hover:underline px-1.5 py-0.5 rounded-md bg-[#f5f7fb] hover:bg-[#eef2ff] transition"
              >
                {{ t(`otherSites.${c.key}`) }}
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.sticky-hero-search-enter-active,
.sticky-hero-search-leave-active {
  transition:
    opacity 0.22s ease,
    transform 0.22s ease;
}
.sticky-hero-search-enter-from,
.sticky-hero-search-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
