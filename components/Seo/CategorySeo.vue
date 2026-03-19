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

useHead(
  computed(() => ({
    title: title.value,
    meta: [
      { name: "title", content: title.value },
      { name: "description", content: description.value },
      {
        property: "og:title",
        content: title.value,
        key: "og:title",
      },
      {
        property: "og:description",
        content: description.value,
        key: "og:description",
      },
      { property: "og:image", content: "https://govinfo.uz/images/gerb.png" },
      {
        property: "og:url",
        content: `https://govinfo.uz${route.fullPath}`,
      },
      { name: "twitter:title", content: title.value, key: "twitter:title" },
      {
        name: "twitter:description",
        content: description.value,
        key: "twitter:description",
      },
      {
        name: "twitter:url",
        content: `https://govinfo.uz${route.fullPath}`,
      },
      { name: "twitter:image", content: "https://govinfo.uz/images/gerb.png" },
    ],
    tagPriority: 100,
  }))
);
</script>
