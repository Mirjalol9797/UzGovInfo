<script setup>
import useRank from "../rank/useRank";
import Seo from "../../components/Seo/MainPageSeo.vue";

const { t } = useI18n();
const data = useRank();
</script>

<template>
  <div class="main-page">
    <div class="site-container">
      <section>
        <div class="border-b border-[#eee] pb-2 flex-center-between mb-6">
          <h2 class="font-medium text-xl">
            {{ t("Headquarters.headtitle") }}
          </h2>
          <nuxt-link to="/" class="text-xs">{{ t("see_all") }}</nuxt-link>
        </div>
        <div class="grid grid-cols-4 gap-4">
          <nuxt-link
            :to="`rank/${item.id}`"
            class="link-block"
            v-for="(item, index) in data"
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
