<script setup>
import { useRoute } from "vue-router";

const { t } = useI18n();
const route = useRoute();

const phoneDisplay = "+998 91 603 67 65";
const phoneHref = "tel:+998916036765";
const telegramHandle = "Mirjalol9797";
const telegramHref = "https://t.me/Mirjalol9797";
const email = "miramirxomitov97@gmail.com";
const emailHref = "mailto:miramirxomitov97@gmail.com";
</script>

<template>
  <div class="site-container py-6 md:py-10">
    <h1 class="text-2xl md:text-3xl font-bold mb-3">
      {{ t("Contacts.title") }}
    </h1>
    <p class="text-[#4B5563]">
      {{ t("Contacts.lead") }}
    </p>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 md:mt-8">
      <a
        :href="phoneHref"
        class="bg-[#F3F4F9] rounded-xl p-4 hover:bg-[#E9EBF6] transition"
      >
        <div class="text-xs uppercase tracking-wide text-[#6B7280] mb-2">
          {{ t("Contacts.cards.phone.title") }}
        </div>
        <div class="text-lg font-semibold text-[#111827]">
          {{ phoneDisplay }}
        </div>
        <div class="text-sm text-[#4B5563] mt-2">
          {{ t("Contacts.cards.phone.hint") }}
        </div>
      </a>

      <a
        :href="telegramHref"
        target="_blank"
        rel="noopener noreferrer"
        class="bg-[#F3F4F9] rounded-xl p-4 hover:bg-[#E9EBF6] transition"
      >
        <div class="text-xs uppercase tracking-wide text-[#6B7280] mb-2">
          {{ t("Contacts.cards.telegram.title") }}
        </div>
        <div class="text-lg font-semibold text-[#111827]">
          @{{ telegramHandle }}
        </div>
        <div class="text-sm text-[#4B5563] mt-2">
          {{ t("Contacts.cards.telegram.hint") }}
        </div>
      </a>

      <a
        :href="emailHref"
        class="bg-[#F3F4F9] rounded-xl p-4 hover:bg-[#E9EBF6] transition"
      >
        <div class="text-xs uppercase tracking-wide text-[#6B7280] mb-2">
          {{ t("Contacts.cards.email.title") }}
        </div>
        <div class="text-lg font-semibold text-[#111827] break-all">
          {{ email }}
        </div>
        <div class="text-sm text-[#4B5563] mt-2">
          {{ t("Contacts.cards.email.hint") }}
        </div>
      </a>
    </div>

    <div class="mt-8 md:mt-10">
      <h2 class="text-lg md:text-xl font-semibold mb-3">
        {{ t("Contacts.note.title") }}
      </h2>
      <p class="text-[#4B5563] leading-7">
        {{ t("Contacts.note.text") }}
      </p>
    </div>
  </div>

  <Head>
    <Title>{{ t("Contacts.seo.title") }}</Title>
    <Meta name="title" :content="t('Contacts.seo.title')" />
    <Meta name="description" :content="t('Contacts.seo.description')" />
    <Meta name="keywords" :content="t('Contacts.seo.keywords')" />
    <Meta
      name="og:title"
      property="og:title"
      :content="t('Contacts.seo.title')"
    />
    <Meta
      name="og:description"
      property="og:description"
      :content="t('Contacts.seo.description')"
    />
    <Meta property="og:image" content="https://govinfo.uz/logo.pgn" />
    <Meta property="og:url" :content="`https://govinfo.uz${route.fullPath}`" />
    <Meta property="twitter:title" :content="t('Contacts.seo.title')" />
    <Meta
      property="twitter:description"
      :content="t('Contacts.seo.description')"
    />
    <Meta property="twitter:image" content="https://govinfo.uz/logo.jpg" />
    <Meta
      property="twitter:url"
      :content="`https://govinfo.uz${route.fullPath}`"
    />
    <Link rel="canonical" :href="`https://govinfo.uz${route.fullPath}`" />
    <Link rel="alternate" hreflang="uz" href="https://govinfo.uz/uz/contacts" />
    <Link rel="alternate" hreflang="en" href="https://govinfo.uz/en/contacts" />
    <Link
      rel="alternate"
      hreflang="x-default"
      href="https://govinfo.uz/contacts"
    />
  </Head>
</template>
