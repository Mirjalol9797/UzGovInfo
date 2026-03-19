<script setup>
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
  return img.startsWith("http")
    ? img
    : `${BASE_URL}${img.startsWith("/") ? "" : "/"}${img}`;
});

const title = computed(() =>
  props.oneData?.seo?.title ? t(props.oneData.seo.title) : ""
);
const description = computed(() =>
  props.oneData?.seo?.description ? t(props.oneData.seo.description) : ""
);
const keywords = computed(() =>
  props.oneData?.seo?.keywords ? t(props.oneData.seo.keywords) : ""
);

useHead(
  computed(() => {
    if (!props.oneData?.seo) return {};
    return {
      title: title.value,
      meta: [
        { name: "title", content: title.value },
        { name: "description", content: description.value },
        { name: "keywords", content: keywords.value },
        { property: "og:title", content: title.value, key: "og:title" },
        {
          property: "og:description",
          content: description.value,
          key: "og:description",
        },
        { property: "og:image", content: ogImageUrl.value },
        { property: "og:url", content: `https://govinfo.uz${route.fullPath}` },
        {
          name: "twitter:title",
          content: title.value,
          key: "twitter:title",
        },
        {
          name: "twitter:description",
          content: description.value,
          key: "twitter:description",
        },
        { name: "twitter:image", content: ogImageUrl.value },
        {
          name: "twitter:url",
          content: `https://govinfo.uz${route.fullPath}`,
        },
      ],
      link: [
        { rel: "canonical", href: `https://govinfo.uz${route.fullPath}` },
        {
          rel: "alternate",
          hreflang: "uz",
          href: `https://govinfo.uz/uz${route.path.replace(/^\/(en|uz)/, "")}`,
        },
        {
          rel: "alternate",
          hreflang: "en",
          href: `https://govinfo.uz/en${route.path.replace(/^\/(en|uz)/, "")}`,
        },
        {
          rel: "alternate",
          hreflang: "x-default",
          href: `https://govinfo.uz${route.path.replace(/^\/(en|uz)/, "")}`,
        },
      ],
      tagPriority: 100,
    };
  })
);
</script>
