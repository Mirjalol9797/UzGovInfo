<script setup>
import useHeadquarters from "../data/headquarters";
import useMinistries from "../data/ministries";
import useState from "../data/state";
import useAgencies from "../data/agencies";
import useFunds from "../data/funds";
import useCenters from "../data/centers";
import useInspections from "../data/inspections";
import useHokimiyats from "../data/hokimiyats";

const props = defineProps({
  /** Текущая категория страницы — эти организации в выборку не попадают */
  excludeCategory: {
    type: String,
    required: true,
  },
});

const { t, locale } = useI18n();
const localePath = useLocalePath();

const headquarters = useHeadquarters();
const ministries = useMinistries();
const state = useState();
const agencies = useAgencies();
const funds = useFunds();
const centers = useCenters();
const inspections = useInspections();
const hokimiyats = useHokimiyats();

function hashSeed(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function shuffleWithSeed(items, seedStr) {
  const arr = items.slice();
  let state = hashSeed(seedStr);
  for (let i = arr.length - 1; i > 0; i--) {
    state = (state * 1664525 + 1013904223) >>> 0;
    const j = state % (i + 1);
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const pool = computed(() => {
  const blocks = [
    { key: "headquarters", data: headquarters.data },
    { key: "ministries", data: ministries.data },
    { key: "state", data: state.data },
    { key: "agencies", data: agencies.data },
    { key: "funds", data: funds.data },
    { key: "centers", data: centers.data },
    { key: "inspections", data: inspections.data },
    { key: "hokimiyats", data: hokimiyats.data },
  ];
  return blocks
    .filter((b) => b.key !== props.excludeCategory)
    .flatMap((b) =>
      b.data.map((item) => ({
        ...item,
        category: b.key,
      }))
    );
});

const items = computed(() => {
  const list = pool.value;
  if (!list.length) return [];
  const seed = `${props.excludeCategory}|${locale.value}|popular-cross`;
  const shuffled = shuffleWithSeed(list, seed);
  return shuffled.slice(0, Math.min(10, shuffled.length));
});

function indexLabel(i) {
  return String(i + 1).padStart(2, "0");
}
</script>

<template>
  <section
    v-if="items.length"
    class="my-10 border-t border-neutral-200/90 pt-9"
    aria-labelledby="category-popular-outside-heading"
  >
    <header class="max-w-2xl">
      <p
        class="text-[11px] font-semibold uppercase tracking-[0.14em] text-neutral-500"
      >
        {{ t("categoryPopular.badge") }}
      </p>
      <h2
        id="category-popular-outside-heading"
        class="mt-2 text-lg font-semibold tracking-tight text-neutral-900 md:text-xl"
      >
        {{ t("categoryPopular.title") }}
      </h2>
    </header>

    <div
      class="mt-6 overflow-hidden rounded-xl border border-neutral-200/80 bg-neutral-50/40"
    >
      <ul
        class="divide-y divide-neutral-200/70"
        role="list"
      >
        <li v-for="(org, idx) in items" :key="org.category + '-' + org.slug">
          <NuxtLink
            :to="localePath(`/${org.category}/${org.slug}`)"
            class="group flex min-h-[3.25rem] items-center gap-3 px-4 py-3 transition-colors hover:bg-white sm:px-5 sm:py-3.5"
          >
            <span
              class="w-7 shrink-0 text-right font-mono text-[11px] font-medium tabular-nums text-neutral-400 transition-colors group-hover:text-neutral-500"
              aria-hidden="true"
            >
              {{ indexLabel(idx) }}
            </span>
            <span class="min-w-0 flex-1">
              <span
                class="block text-[15px] font-medium leading-snug text-neutral-900 transition-colors group-hover:text-[#315efb]"
              >
                {{ t(org.title) }}
              </span>
              <span class="mt-0.5 block text-xs text-neutral-500">
                {{ t(`otherSites.${org.category}`) }}
              </span>
            </span>
            <span
              class="shrink-0 text-neutral-300 transition-colors group-hover:text-[#315efb]"
              aria-hidden="true"
            >
              <svg
                class="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </span>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </section>
</template>
