<script setup lang="ts">
import useHeadquarters from "../data/headquarters";
import useInspections from "../data/inspections";
import useHokimiyats from "../data/hokimiyats";
import useMinistries from "../data/ministries";
import useState from "../data/state";
import useAgencies from "../data/agencies";
import useFunds from "../data/funds";
import { navigateTo } from "#app";

const { t } = useI18n();
const localePath = useLocalePath();

const headquarters = useHeadquarters();
const ministries = useMinistries();
const state = useState();
const agencies = useAgencies();
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
  title: string; // i18n key
  description: string; // i18n key
  shortDesc?: string; // i18n key
  tag?: string; // i18n key
  img: string;
  link?: string; // i18n key
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

  // Sort by localized title for stable UX across locales
  return [...list].sort((a, b) => {
    const aTitle = t(a.title);
    const bTitle = t(b.title);
    return aTitle.localeCompare(bTitle);
  });
});

const inputValue = ref("");
const debouncedValue = ref("");
let timer: ReturnType<typeof setTimeout> | null = null;

watch(
  inputValue,
  (val) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      debouncedValue.value = val;
    }, 300);
  },
  { immediate: true }
);

const isFocused = ref(false);
const popularItems = ref<Array<{ label: string; category: OrganizationCategoryKey; slug: string }>>([]);

const generatePopular = () => {
  // Map chips to existing slugs in our catalog.
  const targets: Array<{
    labelKey: string;
    category: OrganizationCategoryKey;
    slug: string;
  }> = [
    { labelKey: "heroSearch.popular.president", category: "headquarters", slug: "headquarters-president" },
    { labelKey: "heroSearch.popular.gosuslugi", category: "ministries", slug: "ministries-digital-tech" },
    { labelKey: "heroSearch.popular.tax", category: "state", slug: "state-tax-committee" },
    { labelKey: "heroSearch.popular.mvd", category: "ministries", slug: "ministries-internal-affairs" },
    { labelKey: "heroSearch.popular.centralBank", category: "headquarters", slug: "headquarters-central-bank" },
    { labelKey: "heroSearch.popular.education", category: "ministries", slug: "ministries-education" },
  ];

  const shuffled = [...targets].sort(() => Math.random() - 0.5);
  const count = 4 + Math.floor(Math.random() * 3); // 4..6
  popularItems.value = shuffled
    .slice(0, Math.min(count, shuffled.length))
    .map((it) => ({
      label: t(it.labelKey),
      category: it.category,
      slug: it.slug,
    }));
};

const closeTimer = ref<ReturnType<typeof setTimeout> | null>(null);
const isDropdownOpen = computed(() => isFocused.value);

const trimmed = computed(() => inputValue.value.trim());

const showPopular = computed(() => isDropdownOpen.value && trimmed.value.length === 0);

const filteredOrganizations = computed(() => {
  const q = debouncedValue.value.trim().toLowerCase();
  if (!q) return [];

  return allOrganizations.value.filter((org) => {
    const titleText = t(org.title).toLowerCase();
    const categoryText = t(`otherSites.${org.category}`).toLowerCase();
    const descText = org.shortDesc ? t(org.shortDesc).toLowerCase() : "";
    return titleText.includes(q) || categoryText.includes(q) || descText.includes(q);
  });
});

const nothingFound = computed(() => trimmed.value.length > 0 && filteredOrganizations.value.length === 0);

const navigateToOrg = (org: Organization) => {
  isFocused.value = false;
  inputValue.value = "";
  debouncedValue.value = "";
  navigateTo(localePath(`/${org.category}/${org.slug}`));
};

const navigateToOrgByKey = (category: OrganizationCategoryKey, slug: string) => {
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
    // When user clears the input while the field is focused,
    // refresh popular chips (random requirement).
    if (isFocused.value && val.length === 0) generatePopular();
  },
  { flush: "post" }
);
</script>

<template>
  <section class="mb-10 768:mb-6">
    <div class="mx-auto max-w-[700px]">
      <div class="text-center md:text-left mb-4 md:mb-5">
        <h2 class="font-medium text-base md:text-xl text-[#111827]">
          {{ t("heroSearch.heading") }}
        </h2>
        <p class="text-sm text-[#6B7280] leading-6">
          {{ t("heroSearch.subheading") }}
        </p>
      </div>

      <div class="relative">
        <div
          class="w-full max-w-[700px] h-[54px] rounded-[12px] border border-[#dbe6ff] bg-white flex items-center px-4"
        >
          <svg
            viewBox="0 0 24 24"
            class="w-5 h-5 text-[#315efb] mr-3 shrink-0"
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
            class="w-full outline-none text-sm text-[#111827] placeholder:text-[#9CA3AF]"
            :placeholder="t('heroSearch.placeholder')"
            :aria-label="t('heroSearch.ariaLabel')"
          />

          <button
            type="button"
            @click="onSubmitSearch"
            class="ml-3 h-[36px] px-3 rounded-xl bg-[#315efb] text-white text-sm font-medium hover:brightness-95 transition"
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
            class="absolute left-0 right-0 top-[calc(100%+10px)] z-20"
          >
            <div
              class="rounded-2xl border border-[#e5e7eb] bg-white shadow-[0_10px_25px_rgba(0,0,0,0.05)] overflow-hidden"
              @mousedown.prevent
            >
              <!-- Popular chips -->
              <div v-if="showPopular" class="p-3">
                <div class="text-xs text-[#6B7280] mb-2">
                  {{ t("heroSearch.popularTitle") }}
                </div>
                <div class="flex flex-wrap gap-2">
                  <button
                    v-for="chip in popularItems"
                    :key="chip.category + '-' + chip.slug"
                    type="button"
                    @click="navigateToOrgByKey(chip.category, chip.slug)"
                    class="px-3 py-1 rounded-full border border-[#e5e7eb] bg-white text-[#315efb] text-sm hover:bg-[#eef2ff] hover:border-[#dbeafe] transition"
                  >
                    {{ chip.label }}
                  </button>
                </div>
              </div>

              <!-- Results -->
              <div v-else>
                <div class="p-3">
                  <div class="text-xs text-[#6B7280]">
                    {{ t("heroSearch.resultsTitle") }}
                  </div>
                </div>

                <div v-if="filteredOrganizations.length" class="max-h-[320px] overflow-auto">
                  <button
                    v-for="org in filteredOrganizations"
                    :key="org.category + '-' + org.slug"
                    type="button"
                    class="w-full text-left px-4 py-3 hover:bg-[#f5f7fb] transition border-t border-[#f3f4f9] last:border-b-0"
                    @click="navigateToOrg(org)"
                  >
                    <div class="flex items-center justify-between gap-3">
                      <div class="font-medium text-[#111827] text-sm truncate">
                        {{ t(org.title) }}
                      </div>
                      <div class="shrink-0 text-xs font-medium text-[#315efb] bg-[#eef2ff] px-2 py-0.5 rounded-full">
                        {{ t(`otherSites.${org.category}`) }}
                      </div>
                    </div>
                    <div v-if="org.link" class="text-xs text-[#6B7280] mt-1 truncate">
                      {{ t(org.link) }}
                    </div>
                  </button>
                </div>

                <div v-else class="p-4 text-sm text-[#6B7280]">
                  {{ t("heroSearch.nothingFound") }}
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </section>
</template>

