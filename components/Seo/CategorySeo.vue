<script setup>
const props = defineProps({
  titleKey: { type: String, required: true },
  descriptionKey: { type: String, default: "" },
});

const { t } = useI18n();
const route = useRoute();

const title = computed(() => t(props.titleKey));
const description = computed(() =>
  props.descriptionKey ? t(props.descriptionKey) : t("brief_description_site")
);
</script>

<template>
  <Head>
    <Title>{{ title }}</Title>
    <Meta name="description" :content="description" />
    <Meta property="og:title" :content="title" />
    <Meta property="og:description" :content="description" />
    <Meta property="og:image" content="https://govinfo.uz/images/gerb.png" />
    <Meta property="og:url" :content="`https://govinfo.uz${route.fullPath}`" />
    <Meta name="twitter:title" :content="title" />
    <Meta name="twitter:description" :content="description" />
    <Meta name="twitter:url" :content="`https://govinfo.uz${route.fullPath}`" />
    <Meta name="twitter:image" content="https://govinfo.uz/images/gerb.png" />
  </Head>
</template>
