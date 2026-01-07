<script setup>
import { useRoute } from "vue-router";

const { t } = useI18n();
const route = useRoute();
</script>

<template>
  <div class="site-container py-6 md:py-10">
    <h1 class="text-2xl md:text-3xl font-bold mb-4">
      {{ t("About.title") }}
    </h1>

    <p class="text-[#4B5563]">
      {{ t("About.lead") }}
    </p>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 md:mt-8">
      <div class="bg-[#F3F4F9] rounded-xl p-4">
        <div class="font-semibold mb-2">{{ t("About.cards.one.title") }}</div>
        <div class="text-[#4B5563] text-sm leading-6">
          {{ t("About.cards.one.text") }}
        </div>
      </div>

      <div class="bg-[#F3F4F9] rounded-xl p-4">
        <div class="font-semibold mb-2">{{ t("About.cards.two.title") }}</div>
        <div class="text-[#4B5563] text-sm leading-6">
          {{ t("About.cards.two.text") }}
        </div>
      </div>

      <div class="bg-[#F3F4F9] rounded-xl p-4">
        <div class="font-semibold mb-2">{{ t("About.cards.three.title") }}</div>
        <div class="text-[#4B5563] text-sm leading-6">
          {{ t("About.cards.three.text") }}
        </div>
      </div>
    </div>

    <div class="mt-8 md:mt-10">
      <h2 class="text-lg md:text-xl font-semibold mb-3">
        {{ t("About.howItWorks.title") }}
      </h2>
      <ul class="list-disc pl-5 text-[#4B5563] leading-7">
        <li>{{ t("About.howItWorks.items.one") }}</li>
        <li>{{ t("About.howItWorks.items.two") }}</li>
        <li>{{ t("About.howItWorks.items.three") }}</li>
      </ul>
    </div>
  </div>

  <Head>
    <Title>{{ t("About.seo.title") }}</Title>
    <Meta name="title" :content="t('About.seo.title')" />
    <Meta name="description" :content="t('About.seo.description')" />
    <Meta name="keywords" :content="t('About.seo.keywords')" />
    <Meta name="og:title" property="og:title" :content="t('About.seo.title')" />
    <Meta
      name="og:description"
      property="og:description"
      :content="t('About.seo.description')"
    />
    <Meta property="og:image" content="https://govinfo.uz/logo.pgn" />
    <Meta property="og:url" :content="`https://govinfo.uz${route.fullPath}`" />
    <Meta property="twitter:title" :content="t('About.seo.title')" />
    <Meta
      property="twitter:description"
      :content="t('About.seo.description')"
    />
    <Meta property="twitter:image" content="https://govinfo.uz/logo.jpg" />
    <Meta
      property="twitter:url"
      :content="`https://govinfo.uz${route.fullPath}`"
    />
    <Link rel="canonical" :href="`https://govinfo.uz${route.fullPath}`" />
    <Link rel="alternate" hreflang="uz" href="https://govinfo.uz/uz/about" />
    <Link rel="alternate" hreflang="en" href="https://govinfo.uz/en/about" />
    <Link
      rel="alternate"
      hreflang="x-default"
      href="https://govinfo.uz/about"
    />
  </Head>
</template>
