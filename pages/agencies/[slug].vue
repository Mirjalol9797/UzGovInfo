<script setup>
import { computed, ref, watch } from "vue";
import { useRoute } from "vue-router";
import useAgencies from "../../data/agencies";
import { getPageContent } from "../../data/page-content";
import Seo from "../../components/Seo/RankPageSeo.vue";
import Detail from "../../components/detail.vue";

const route = useRoute();
const agencies = useAgencies();

const oneData = computed(() => {
  return agencies.data.find((item) => item.slug === route.params.slug);
});

const otherItems = computed(() => {
  const slug = route.params.slug;
  return agencies.data.filter((item) => item.slug !== slug);
});

const pageContent = ref(null);
const category = "agencies";

watch(
  () => route.params.slug,
  async (slug) => {
    pageContent.value = null;
    if (slug) {
      const content = await getPageContent(slug);
      pageContent.value = content;
    }
  },
  { immediate: true }
);
</script>

<template>
  <Detail
    :one-data="oneData"
    :page-content="pageContent"
    :category="category"
    :other-items="otherItems"
  />
  <Seo v-if="oneData" :one-data="oneData" />
</template>

<style lang="scss"></style>
