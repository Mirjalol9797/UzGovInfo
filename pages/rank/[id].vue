<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import useRank from "../rank/useRank";

const { t } = useI18n();
const data = useRank(t);
const route = useRoute();

const oneData = computed(() => {
  return data.find((item) => item.id == route.params.id);
});
</script>

<template>
  <div class="rank-detail">
    <div class="site-container">{{ oneData }}</div>
  </div>

  <!-- seo -->
  <Head>
    <Title>{{ newsSlug?.seo?.title }}</Title>
    <Meta name="title" :content="newsSlug?.seo?.title" />
    <Meta name="description" :content="newsSlug?.seo?.description" />
    <Meta name="keywords" :content="newsSlug?.seo?.keywords" />
    <Meta name="og:title" property="og:title" :content="newsSlug?.seo?.title" />
    <Meta
      name="og:description"
      property="og:description"
      :content="newsSlug?.seo?.description"
    />
    <Meta property="og:image" :content="newsSlug?.file" />
    <Meta
      property="og:url"
      :content="`https://toprankings.uz${route.fullPath}`"
    />
    <Meta property="twitter:title" :content="newsSlug?.seo?.title" />
    <Meta
      property="twitter:description"
      :content="newsSlug?.seo?.description"
    />
    <Meta property="twitter:image" :content="newsSlug?.file" />
    <Meta
      property="twitter:url"
      :content="`https://toprankings.uz${route.fullPath}`"
    />
    <Link rel="canonical" :href="`https://toprankings.uz${route.fullPath}`" />
    <Link
      rel="alternate"
      hreflang="uz"
      :href="`https://toprankings.uz/uz/rank/${route.params.slug}`"
    />
    <Link
      rel="alternate"
      hreflang="en"
      :href="`https://toprankings.uz/en/rank/${route.params.slug}`"
    />
    <Link
      rel="alternate"
      hreflang="x-default"
      :href="`https://toprankings.uz/rank/${route.params.slug}`"
    />
  </Head>
</template>

<style lang="scss"></style>
