<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import useState from "../../data/state";
import Seo from "../../components/Seo/RankPageSeo.vue";
import Detail from "../../components/detail.vue";

const { t } = useI18n();
const state = useState(t);
const route = useRoute();

const oneData = computed(() => {
  return state.data.find((item) => item.slug == route.params.slug);
});

const otherItems = computed(() => {
  const slug = route.params.slug;
  return state.data.filter((item) => item.slug !== slug);
});
</script>

<template>
  <Detail
    :one-data="oneData"
    category="state"
    :other-items="otherItems"
  />
  <Seo v-if="oneData" :one-data="oneData" />
</template>

<style lang="scss"></style>
