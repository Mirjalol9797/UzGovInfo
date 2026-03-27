<script setup>
import { computed, ref, watch } from "vue";
import { useRoute } from "vue-router";
import useFunds from "../../data/funds";
import { getPageContent } from "../../data/page-content";
import Seo from "../../components/Seo/RankPageSeo.vue";
import Detail from "../../components/detail.vue";

const route = useRoute();
const funds = useFunds();

const oneData = computed(() => {
  return funds.data.find((item) => item.slug === route.params.slug);
});

const otherItems = computed(() => {
  const slug = route.params.slug;
  return funds.data.filter((item) => item.slug !== slug);
});

const pageContent = ref(null);
const category = "funds";

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
