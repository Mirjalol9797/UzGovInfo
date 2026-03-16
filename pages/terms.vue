<script setup>
import { useRoute } from "vue-router";

const { t } = useI18n();
const route = useRoute();
</script>

<template>
  <div class="site-container py-6 md:py-10">
    <h1 class="text-2xl md:text-3xl font-bold mb-3">
      {{ t("Terms.title") }}
    </h1>
    <p class="text-[#4B5563] max-w-[900px]">
      {{ t("Terms.lead") }}
    </p>

    <div class="mt-6 md:mt-8 max-w-[900px] space-y-6">
      <section>
        <h2 class="text-lg md:text-xl font-semibold mb-2">
          {{ t("Terms.sections.one.title") }}
        </h2>
        <p class="text-[#4B5563] leading-7">
          {{ t("Terms.sections.one.text") }}
        </p>
      </section>

      <section>
        <h2 class="text-lg md:text-xl font-semibold mb-2">
          {{ t("Terms.sections.two.title") }}
        </h2>
        <p class="text-[#4B5563] leading-7">
          {{ t("Terms.sections.two.text") }}
        </p>
      </section>

      <section>
        <h2 class="text-lg md:text-xl font-semibold mb-2">
          {{ t("Terms.sections.three.title") }}
        </h2>
        <p class="text-[#4B5563] leading-7">
          {{ t("Terms.sections.three.text") }}
        </p>
      </section>

      <section>
        <h2 class="text-lg md:text-xl font-semibold mb-2">
          {{ t("Terms.sections.four.title") }}
        </h2>
        <p class="text-[#4B5563] leading-7">
          {{ t("Terms.sections.four.text") }}
        </p>
      </section>

      <section>
        <h2 class="text-lg md:text-xl font-semibold mb-2">
          {{ t("Terms.sections.five.title") }}
        </h2>
        <p class="text-[#4B5563] leading-7">
          {{ t("Terms.sections.five.text") }}
        </p>
      </section>

      <section class="bg-[#F3F4F9] rounded-xl p-4">
        <h2 class="text-base md:text-lg font-semibold mb-2">
          {{ t("Terms.sections.six.title") }}
        </h2>
        <p class="text-[#4B5563] leading-7">
          {{ t("Terms.sections.six.text") }}
          <nuxt-link
            :to="localePath('/contacts')"
            class="text-[#315EFB] hover:text-[#1C335F]"
          >
            {{ t("Terms.sections.six.linkText") }}
          </nuxt-link>
          .
        </p>
      </section>
    </div>
  </div>

  <Head>
    <Title>{{ t("Terms.seo.title") }}</Title>
    <Meta name="title" :content="t('Terms.seo.title')" />
    <Meta name="description" :content="t('Terms.seo.description')" />
    <Meta name="keywords" :content="t('Terms.seo.keywords')" />
    <Meta name="og:title" property="og:title" :content="t('Terms.seo.title')" />
    <Meta
      name="og:description"
      property="og:description"
      :content="t('Terms.seo.description')"
    />
    <Meta property="og:image" content="https://govinfo.uz/images/gerb.png" />
    <Meta property="og:url" :content="`https://govinfo.uz${route.fullPath}`" />
    <Meta property="twitter:title" :content="t('Terms.seo.title')" />
    <Meta property="twitter:description" :content="t('Terms.seo.description')" />
    <Meta property="twitter:image" content="https://govinfo.uz/logo.jpg" />
    <Meta property="twitter:url" :content="`https://govinfo.uz${route.fullPath}`" />
    <Link rel="canonical" :href="`https://govinfo.uz${route.fullPath}`" />
    <Link rel="alternate" hreflang="uz" href="https://govinfo.uz/uz/terms" />
    <Link rel="alternate" hreflang="en" href="https://govinfo.uz/en/terms" />
    <Link rel="alternate" hreflang="x-default" href="https://govinfo.uz/terms" />
  </Head>
</template>
