<script setup>
import useHeadquarters from "../../data/headquarters";
import useMinistries from "../../data/ministries";
import useState from "../../data/state";
import useInspections from "../../data/inspections";
import Seo from "../../components/Seo/MainPageSeo.vue";

const { t } = useI18n();
const headquarters = useHeadquarters();
const ministries = useMinistries();
const state = useState();
const inspections = useInspections();
</script>

<template>
  <div class="main-page">
    <div class="site-container">
      <!-- headquarters -->
      <section class="mb-14">
        <div class="border-b border-[#eee] pb-2 flex-center-between mb-6">
          <h2 class="font-medium text-xl">
            {{ t("Headquarters.headtitle") }}
          </h2>
          <nuxt-link to="/" class="text-xs">{{ t("see_all") }}</nuxt-link>
        </div>
        <div class="grid grid-cols-4 gap-4">
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
          </nuxt-link>
        </div>
      </section>

      <!-- ministries -->
      <section class="mb-14">
        <div class="border-b border-[#eee] pb-2 flex-center-between mb-6">
          <h2 class="font-medium text-xl">
            {{ t("Ministries.headtitle") }}
          </h2>
          <nuxt-link to="/" class="text-xs">{{ t("see_all") }}</nuxt-link>
        </div>
        <div class="grid grid-cols-4 gap-4">
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
          </nuxt-link>
        </div>
      </section>

      <!-- state -->
      <section class="mb-14">
        <div class="border-b border-[#eee] pb-2 flex-center-between mb-6">
          <h2 class="font-medium text-xl">
            {{ t("State.headtitle") }}
          </h2>
          <nuxt-link to="/" class="text-xs">{{ t("see_all") }}</nuxt-link>
        </div>
        <div class="grid grid-cols-4 gap-4">
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
          </nuxt-link>
        </div>
      </section>

      <!-- inspections -->
      <section class="mb-14">
        <div class="border-b border-[#eee] pb-2 flex-center-between mb-6">
          <h2 class="font-medium text-xl">
            {{ t("Inspections.headtitle") }}
          </h2>
          <nuxt-link to="/" class="text-xs">{{ t("see_all") }}</nuxt-link>
        </div>
        <div class="grid grid-cols-4 gap-4">
          <nuxt-link
            :to="`state/${item.slug}`"
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
          </nuxt-link>
        </div>
      </section>
    </div>
  </div>

  <!-- seo -->
  <Seo />
</template>

<style lang="scss"></style>
