<script setup>
import { computed, ref, watch } from "vue";
import { useRoute } from "vue-router";
import useState from "../../data/state";
import { getPageContent } from "../../data/page-content";
import Seo from "../../components/Seo/RankPageSeo.vue";
import Detail from "../../components/detail.vue";

const route = useRoute();
const state = useState();

const oneData = computed(() => {
  return state.data.find((item) => item.slug === route.params.slug);
});

const otherItems = computed(() => {
  const slug = route.params.slug;
  return state.data.filter((item) => item.slug !== slug);
});

const pageContent = ref(null);
const category = "state";

watch(
  () => route.params.slug,
  async (slug) => {
    pageContent.value = null;
    if (slug) {
      pageContent.value = await getPageContent(slug);
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
