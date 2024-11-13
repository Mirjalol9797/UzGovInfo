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
console.log("oneData", oneData);
</script>

<template>
  <Detail :oneData="oneData" />
  <!-- seo -->
  <Seo :oneData="oneData"></Seo>
</template>

<style lang="scss"></style>
