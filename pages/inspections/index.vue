<script setup>
import useInspections from "../../data/inspections";
import CategorySeo from "../../components/Seo/CategorySeo.vue";

const { t } = useI18n();
const inspections = useInspections();
</script>

<template>
  <div>
    <CategorySeo title-key="Inspections.headtitle" />
    <div class="site-container">
      <section>
        <div class="border-b border-[#eee] pb-2 mb-4 md:mb-6">
          <h1 class="font-medium text-xl md:text-2xl">
            {{ t("Inspections.headtitle") }}
          </h1>
        </div>
        <div
          class="grid grid-cols-5 gap-3 768:grid-cols-2 768:gap-2 576:!grid-cols-1"
        >
          <nuxt-link
            v-for="(item, index) in inspections.data"
            :key="index"
            :to="localePath(`/inspections/${item.slug}`)"
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
            <p class="short-desc">{{ $t(item.shortDesc) }}</p>
            <span class="tag-badge">{{ $t(item.tag) }}</span>
          </nuxt-link>
        </div>
      </section>
    </div>
  </div>
</template>
