<script setup>
import { computed, ref, watch } from "vue";
import { useRoute } from "vue-router";
import useHokimiyats from "../../data/hokimiyats";
import { getPageContent } from "../../data/page-content";
import Seo from "../../components/Seo/RankPageSeo.vue";
import Detail from "../../components/detail.vue";

const { t } = useI18n();
const hokimiyats = useHokimiyats(t);
const route = useRoute();

const oneData = computed(() => {
  return hokimiyats.data.find((item) => item.slug == route.params.slug);
});

const otherItems = computed(() => {
  const slug = route.params.slug;
  return hokimiyats.data.filter((item) => item.slug !== slug);
});

const pageContent = ref(null);
const category = "hokimiyats";

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
