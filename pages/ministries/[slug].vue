<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import useMinistries from "../../data/ministries";
import Seo from "../../components/Seo/RankPageSeo.vue";
import Detail from "../../components/detail.vue";

const { t } = useI18n();
const ministries = useMinistries(t);
const route = useRoute();

const oneData = computed(() => {
  return ministries.data.find((item) => item.slug == route.params.slug);
});

const otherItems = computed(() => {
  const slug = route.params.slug;
  return ministries.data.filter((item) => item.slug !== slug);
});
</script>

<template>
  <Detail
    :one-data="oneData"
    category="ministries"
    :other-items="otherItems"
  />
  <Seo v-if="oneData" :one-data="oneData" />
</template>

<style lang="scss"></style>
