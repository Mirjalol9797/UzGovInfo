<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import useInspections from "../../data/inspections";
import Seo from "../../components/Seo/RankPageSeo.vue";
import Detail from "../../components/detail.vue";

const { t } = useI18n();
const inspections = useInspections(t);
const route = useRoute();

const oneData = computed(() => {
  return inspections.data.find((item) => item.slug == route.params.slug);
});

const otherItems = computed(() => {
  const slug = route.params.slug;
  return inspections.data.filter((item) => item.slug !== slug);
});
</script>

<template>
  <Detail
    :one-data="oneData"
    category="inspections"
    :other-items="otherItems"
  />
  <Seo v-if="oneData" :one-data="oneData" />
</template>

<style lang="scss"></style>
