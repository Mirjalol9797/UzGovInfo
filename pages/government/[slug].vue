<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import useRank from "../../data/headquarters";
import Seo from "../../components/Seo/RankPageSeo.vue";

const { t } = useI18n();
const data = useRank(t);
const route = useRoute();

const oneData = computed(() => {
  return data.find((item) => item.slug == route.params.slug);
});
console.log("oneData", oneData);
</script>

<template>
  <div class="rank-detail">
    <div class="site-container">
      <h1 class="mb-10 text-3xl 768:text-xl 480:!text-lg">
        {{ t(oneData.title) }}
      </h1>
      <div class="mb-6">
        <span class="font-medium">{{ t("link_to_official_website") }}</span
        >:
        <a :href="t(oneData.link)">{{ t(oneData.link) }}</a>
      </div>
      <div>
        <div class="mb-2 font-medium">{{ t("brief_description_site") }}</div>
        <div v-html="t(oneData.description)" class="mb-6 text-justify"></div>
        <div class="overflow-hidden">
          <img
            :src="oneData.seo.image"
            :alt="t(oneData.title)"
            :title="t(oneData.title)"
            class="ml-[-5px]"
          />
        </div>
      </div>
    </div>
  </div>

  <!-- seo -->
  <Seo :oneData="oneData"></Seo>
</template>

<style lang="scss"></style>
