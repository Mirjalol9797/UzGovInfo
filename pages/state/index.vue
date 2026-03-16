<script setup>
import useState from "../../data/state";

const { t } = useI18n();
const state = useState();
</script>

<template>
  <div class="site-container py-6 md:py-10">
    <section>
      <div class="border-b border-[#eee] pb-2 mb-4 md:mb-6">
        <h1 class="font-medium text-xl md:text-2xl">
          {{ t("State.headtitle") }}
        </h1>
      </div>
      <div
        class="grid grid-cols-4 gap-4 768:grid-cols-2 768:gap-2 576:!grid-cols-1"
      >
        <nuxt-link
          v-for="(item, index) in state.data"
          :key="index"
          :to="`/state/${item.slug}`"
          class="link-block"
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
</template>
