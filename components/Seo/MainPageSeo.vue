<script setup>
const { t } = useI18n();
const route = useRoute();

const title = computed(() => t("seo.title"));
const description = computed(() => t("seo.description"));
const keywords = computed(() => t("seo.keywords"));
const url = computed(() => `https://govinfo.uz${route.fullPath}`);

useHead(
  computed(() => ({
    title: title.value,
    meta: [
      { name: "title", content: title.value },
      { name: "description", content: description.value },
      { name: "keywords", content: keywords.value },
      { property: "og:title", content: title.value, key: "og:title" },
      { property: "og:description", content: description.value, key: "og:description" },
      { property: "og:image", content: "https://govinfo.uz/images/gerb.png" },
      { property: "og:url", content: url.value },
      { name: "twitter:title", content: title.value, key: "twitter:title" },
      { name: "twitter:description", content: description.value, key: "twitter:description" },
      { name: "twitter:image", content: "https://govinfo.uz/images/gerb.png" },
      { name: "twitter:url", content: url.value },
    ],
    link: [
      { rel: "canonical", href: url.value },
      { rel: "alternate", hreflang: "uz", href: "https://govinfo.uz/uz" },
      { rel: "alternate", hreflang: "en", href: "https://govinfo.uz/en" },
      { rel: "alternate", hreflang: "x-default", href: "https://govinfo.uz/" },
    ],
    tagPriority: 50,
  }))
);
</script>
