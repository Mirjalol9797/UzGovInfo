<script setup>
import { useRoute } from "vue-router";

const { t } = useI18n();
const route = useRoute();
</script>

<template>
  <div class="site-container py-6 md:py-10">
    <h1 class="text-2xl md:text-3xl font-bold mb-3">
      {{ t("Privacy.title") }}
    </h1>
    <p class="text-[#4B5563] max-w-[900px]">
      {{ t("Privacy.lead") }}
    </p>

    <div class="mt-6 md:mt-8 max-w-[900px] space-y-6">
      <section>
        <h2 class="text-lg md:text-xl font-semibold mb-2">
          {{ t("Privacy.sections.one.title") }}
        </h2>
        <p class="text-[#4B5563] leading-7">
          {{ t("Privacy.sections.one.text") }}
        </p>
      </section>

      <section>
        <h2 class="text-lg md:text-xl font-semibold mb-2">
          {{ t("Privacy.sections.two.title") }}
        </h2>
        <ul class="list-disc pl-5 text-[#4B5563] leading-7">
          <li>{{ t("Privacy.sections.two.items.one") }}</li>
          <li>{{ t("Privacy.sections.two.items.two") }}</li>
          <li>{{ t("Privacy.sections.two.items.three") }}</li>
        </ul>
      </section>

      <section>
        <h2 class="text-lg md:text-xl font-semibold mb-2">
          {{ t("Privacy.sections.three.title") }}
        </h2>
        <p class="text-[#4B5563] leading-7">
          {{ t("Privacy.sections.three.text") }}
        </p>
      </section>

      <section>
        <h2 class="text-lg md:text-xl font-semibold mb-2">
          {{ t("Privacy.sections.four.title") }}
        </h2>
        <p class="text-[#4B5563] leading-7">
          {{ t("Privacy.sections.four.text") }}
        </p>
      </section>

      <section class="bg-[#F3F4F9] rounded-xl p-4">
        <h2 class="text-base md:text-lg font-semibold mb-2">
          {{ t("Privacy.contact.title") }}
        </h2>
        <p class="text-[#4B5563] leading-7">
          {{ t("Privacy.contact.text") }}
          <nuxt-link
            :to="localePath('/contacts')"
            class="text-[#315EFB] hover:text-[#1C335F]"
          >
            {{ t("Privacy.contact.linkText") }}
          </nuxt-link>
          .
        </p>
      </section>
    </div>
  </div>

  <Head>
    <Title>{{ t("Privacy.seo.title") }}</Title>
    <Meta name="title" :content="t('Privacy.seo.title')" />
    <Meta name="description" :content="t('Privacy.seo.description')" />
    <Meta name="keywords" :content="t('Privacy.seo.keywords')" />
    <Meta
      name="og:title"
      property="og:title"
      :content="t('Privacy.seo.title')"
    />
    <Meta
      name="og:description"
      property="og:description"
      :content="t('Privacy.seo.description')"
    />
    <Meta property="og:image" content="https://govinfo.uz/logo.pgn" />
    <Meta property="og:url" :content="`https://govinfo.uz${route.fullPath}`" />
    <Meta property="twitter:title" :content="t('Privacy.seo.title')" />
    <Meta
      property="twitter:description"
      :content="t('Privacy.seo.description')"
    />
    <Meta property="twitter:image" content="https://govinfo.uz/logo.jpg" />
    <Meta
      property="twitter:url"
      :content="`https://govinfo.uz${route.fullPath}`"
    />
    <Link rel="canonical" :href="`https://govinfo.uz${route.fullPath}`" />
    <Link rel="alternate" hreflang="uz" href="https://govinfo.uz/uz/privacy" />
    <Link rel="alternate" hreflang="en" href="https://govinfo.uz/en/privacy" />
    <Link
      rel="alternate"
      hreflang="x-default"
      href="https://govinfo.uz/privacy"
    />
  </Head>
</template>
