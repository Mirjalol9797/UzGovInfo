<script setup>
import { useRoute } from "vue-router";

const { t } = useI18n();
const route = useRoute();
</script>
<template>
  <Head>
    <Title>{{ t("seo.title") }}</Title>
    <Meta name="title" :content="t('seo.title')" />
    <Meta name="description" :content="t('seo.description')" />
    <Meta name="keywords" :content="t('seo.keywords')" />
    <Meta name="og:title" property="og:title" :content="t('seo.title')" />
    <Meta
      name="og:description"
      property="og:description"
      :content="t('seo.description')"
    />
    <Meta property="og:image" content="https://toprankings.uz/logo.jpg" />
    <Meta
      property="og:url"
      :content="`https://toprankings.uz${route.fullPath}`"
    />
    <Meta property="twitter:title" :content="t('seo.title')" />
    <Meta property="twitter:description" :content="t('seo.description')" />
    <Meta property="twitter:image" content="https://toprankings.uz/logo.jpg" />
    <Meta
      property="twitter:url"
      :content="`https://toprankings.uz${route.fullPath}`"
    />
    <Link rel="canonical" :href="`https://toprankings.uz${route.fullPath}`" />
    <Link rel="alternate" hreflang="uz" href="https://toprankings.uz/uz" />
    <Link rel="alternate" hreflang="en" href="https://toprankings.uz/en" />
    <Link rel="alternate" hreflang="x-default" href="https://toprankings.uz/" />
  </Head>
</template>
<style lang="scss"></style>
