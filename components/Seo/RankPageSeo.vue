<script setup>
import { useRoute } from "vue-router";

const props = defineProps({
  oneData: {
    type: Object,
    default: () => ({}),
  },
});
const { t } = useI18n();
const route = useRoute();

const BASE_URL = "https://govinfo.uz";
const ogImageUrl = computed(() => {
  const img = props.oneData?.seo?.image;
  if (!img) return `${BASE_URL}/images/gerb.png`;
  return img.startsWith("http") ? img : `${BASE_URL}${img.startsWith("/") ? "" : "/"}${img}`;
});
</script>
<template>
  <Head>
    <Title>{{ t(oneData.seo.title) }}</Title>
    <Meta name="title" :content="t(oneData?.seo?.title)" />
    <Meta name="description" :content="t(oneData?.seo?.description)" />
    <Meta name="keywords" :content="t(oneData?.seo?.keywords)" />
    <Meta
      name="og:title"
      property="og:title"
      :content="t(oneData?.seo?.title)"
    />
    <Meta
      name="og:description"
      property="og:description"
      :content="t(oneData?.seo?.description)"
    />
    <Meta property="og:image" :content="ogImageUrl" />
    <Meta property="og:url" :content="`https://govinfo.uz${route.fullPath}`" />
    <Meta property="twitter:title" :content="t(oneData?.seo?.title)" />
    <Meta
      property="twitter:description"
      :content="t(oneData?.seo?.description)"
    />
    <Meta property="twitter:image" :content="ogImageUrl" />
    <Meta
      property="twitter:url"
      :content="`https://govinfo.uz${route.fullPath}`"
    />
    <Link rel="canonical" :href="`https://govinfo.uz${route.fullPath}`" />
    <Link
      rel="alternate"
      hreflang="uz"
      :href="`https://govinfo.uz/uz/rank/${route.params.slug}`"
    />
    <Link
      rel="alternate"
      hreflang="en"
      :href="`https://govinfo.uz/en/rank/${route.params.slug}`"
    />
    <Link
      rel="alternate"
      hreflang="x-default"
      :href="`https://govinfo.uz/rank/${route.params.slug}`"
    />
  </Head>
</template>
<style lang="scss"></style>
