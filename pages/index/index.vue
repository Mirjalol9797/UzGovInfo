<script setup>
import useHeadquarters from "../../data/headquarters";
import useMinistries from "../../data/ministries";
import useState from "../../data/state";
import useInspections from "../../data/inspections";
import Seo from "../../components/Seo/MainPageSeo.vue";
import SiteDescription from "@/components/mainPage/SiteDescription.vue";
import HowUseSite from "@/components/mainPage/HowUseSite.vue";
import WhySiteCreated from "@/components/mainPage/WhySiteCreated.vue";

const { t } = useI18n();
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
  <div class="main-page">
    <div class="site-container">
      <!-- Описание сайта -->
      <SiteDescription class="mb-10 768:mb-6" />

      <!-- Все категории -->
      <section class="mb-10 768:mb-6">
        <h2 class="font-medium text-base md:text-xl mb-4 md:mb-6">
          {{ t("allCategories.h2") }}
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

      <!-- headquarters -->
      <section class="mb-10 768:mb-6">
        <div
          class="border-b border-[#eee] pb-2 flex-center-between mb-4 md:mb-6"
        >
          <h2 class="flex items-center gap-2 font-medium text-base md:text-xl">
            <span
              class="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#e0ecff] text-[#2563eb]"
              aria-hidden="true"
            >
              <svg
                viewBox="0 0 24 24"
                class="h-4 w-4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 10L12 4L20 10V19H4V10Z"
                  stroke="currentColor"
                  stroke-width="1.6"
                  stroke-linejoin="round"
                />
                <path
                  d="M10 19V13H14V19"
                  stroke="currentColor"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            {{ t("Headquarters.headtitle") }}
          </h2>
          <nuxt-link :to="localePath('/headquarters')" class="text-xs">{{
            t("see_all")
          }}</nuxt-link>
        </div>
        <div
          class="grid grid-cols-4 gap-4 768:grid-cols-2 768:gap-2 576:!grid-cols-1"
        >
          <nuxt-link
            :to="`headquarters/${item.slug}`"
            class="link-block"
            v-for="(item, index) in headquarters.data"
            :key="index"
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
              {{ $t(item.title) }}
            </h3>
            <p class="short-desc">{{ $t(item.shortDesc) }}</p>
            <span class="tag-badge">{{ $t(item.tag) }}</span>
          </nuxt-link>
        </div>
      </section>

      <!-- ministries -->
      <section class="mb-10 768:mb-6">
        <div
          class="border-b border-[#eee] pb-2 flex-center-between mb-4 md:mb-6"
        >
          <h2 class="flex items-center gap-2 font-medium text-base md:text-xl">
            <span
              class="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#e0f2fe] text-[#0284c7]"
              aria-hidden="true"
            >
              <svg
                viewBox="0 0 24 24"
                class="h-4 w-4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="3"
                  y="7"
                  width="18"
                  height="11"
                  rx="1.5"
                  stroke="currentColor"
                  stroke-width="1.6"
                />
                <path
                  d="M7 4H17V7H7V4Z"
                  stroke="currentColor"
                  stroke-width="1.6"
                  stroke-linejoin="round"
                />
                <path
                  d="M7 12H17"
                  stroke="currentColor"
                  stroke-width="1.6"
                  stroke-linecap="round"
                />
              </svg>
            </span>
            {{ t("Ministries.headtitle") }}
          </h2>
          <nuxt-link :to="localePath('/ministries')" class="text-xs">{{
            t("see_all")
          }}</nuxt-link>
        </div>
        <div
          class="grid grid-cols-4 gap-4 768:grid-cols-2 768:gap-2 576:!grid-cols-1"
        >
          <nuxt-link
            :to="`ministries/${item.slug}`"
            class="link-block"
            v-for="(item, index) in ministries.data"
            :key="index"
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
              {{ $t(item.title) }}
            </h3>
            <p class="short-desc">{{ $t(item.shortDesc) }}</p>
            <span class="tag-badge">{{ $t(item.tag) }}</span>
          </nuxt-link>
        </div>
      </section>

      <!-- state -->
      <section class="mb-10 768:mb-6">
        <div
          class="border-b border-[#eee] pb-2 flex-center-between mb-4 md:mb-6"
        >
          <h2 class="flex items-center gap-2 font-medium text-base md:text-xl">
            <span
              class="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#ecfdf3] text-[#16a34a]"
              aria-hidden="true"
            >
              <svg
                viewBox="0 0 24 24"
                class="h-4 w-4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 6H19V9H5V6Z"
                  stroke="currentColor"
                  stroke-width="1.6"
                  stroke-linejoin="round"
                />
                <path
                  d="M5 11H19V14H5V11Z"
                  stroke="currentColor"
                  stroke-width="1.6"
                  stroke-linejoin="round"
                />
                <path
                  d="M5 16H13V19H5V16Z"
                  stroke="currentColor"
                  stroke-width="1.6"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            {{ t("State.headtitle") }}
          </h2>
          <nuxt-link :to="localePath('/state')" class="text-xs">{{
            t("see_all")
          }}</nuxt-link>
        </div>
        <div
          class="grid grid-cols-4 gap-4 768:grid-cols-2 768:gap-2 576:!grid-cols-1"
        >
          <nuxt-link
            :to="`state/${item.slug}`"
            class="link-block"
            v-for="(item, index) in state.data"
            :key="index"
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
              {{ $t(item.title) }}
            </h3>
            <p class="short-desc">{{ $t(item.shortDesc) }}</p>
            <span class="tag-badge">{{ $t(item.tag) }}</span>
          </nuxt-link>
        </div>
      </section>

      <!-- inspections -->
      <section class="mb-10 768:mb-6">
        <div
          class="border-b border-[#eee] pb-2 flex-center-between mb-4 md:mb-6"
        >
          <h2 class="flex items-center gap-2 font-medium text-base md:text-xl">
            <span
              class="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#fef3c7] text-[#d97706]"
              aria-hidden="true"
            >
              <svg
                viewBox="0 0 24 24"
                class="h-4 w-4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 3L5 6V11C5 15.52 8.06 19.74 12 21C15.94 19.74 19 15.52 19 11V6L12 3Z"
                  stroke="currentColor"
                  stroke-width="1.6"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 8V12"
                  stroke="currentColor"
                  stroke-width="1.6"
                  stroke-linecap="round"
                />
                <circle cx="12" cy="15" r="0.9" fill="currentColor" />
              </svg>
            </span>
            {{ t("Inspections.headtitle") }}
          </h2>
          <nuxt-link :to="localePath('/inspections')" class="text-xs">{{
            t("see_all")
          }}</nuxt-link>
        </div>
        <div
          class="grid grid-cols-4 gap-4 768:grid-cols-2 768:gap-2 576:!grid-cols-1"
        >
          <nuxt-link
            :to="`inspections/${item.slug}`"
            class="link-block"
            v-for="(item, index) in inspections.data"
            :key="index"
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
              {{ $t(item.title) }}
            </h3>
            <p class="short-desc">{{ $t(item.shortDesc) }}</p>
            <span class="tag-badge">{{ $t(item.tag) }}</span>
          </nuxt-link>
        </div>
      </section>

      <!-- Как пользоваться каталогом -->
      <HowUseSite class="mb-10 768:mb-6" />

      <!-- Зачем создан UzGovInfo -->
      <WhySiteCreated class="mb-10 768:mb-6" />
    </div>
  </div>

  <!-- seo -->
  <Seo />
</template>

<style lang="scss"></style>
