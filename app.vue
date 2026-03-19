<script setup>
useHead({
  script: [
    {
      async: true,
      src: "https://cdn.ampproject.org/v0/amp-auto-ads-0.1.js",
      "custom-element": "amp-auto-ads",
    },
  ],
});

useHead({
  htmlAttrs: { lang: "ru" },
  link: [
    { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
    { rel: "preload", href: "https://fonts.gstatic.com" },
  ],
  meta: [
    { name: "theme-color", content: "#315efb" },
    {
      name: "robots",
      content:
        "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    },
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: "govinfo" },
    { property: "og:image", content: "https://govinfo.uz/images/gerb.png" },
    { property: "twitter:card", content: "summary_large_image" },
    { property: "twitter:image", content: "https://govinfo.uz/images/gerb.png" },
    { name: "copyright", content: "copyright © 2024, govinfo.uz" },
    {
      name: "google-adsense-account",
      content: "ca-pub-3990212606361557",
    },
    {
      name: "google-site-verification",
      content: "bFzhlvxoDEEmNDwKzW7US63KKGlDq1B78NEpLAAtu3I",
    },
  ],
  tagPriority: -200,
});

useHead({
  title: "UzGovInfo — каталог официальных сайтов госорганов Узбекистана",
  meta: [
    {
      name: "title",
      content: "UzGovInfo — каталог официальных сайтов госорганов Узбекистана",
    },
    {
      name: "description",
      content:
        "Каталог официальных сайтов государственных организаций Республики Узбекистан: министерства, комитеты, инспекции.",
    },
    {
      property: "og:title",
      content: "UzGovInfo — каталог официальных сайтов госорганов Узбекистана",
      key: "og:title",
    },
    {
      property: "og:description",
      content:
        "Каталог официальных сайтов государственных организаций Республики Узбекистан: министерства, комитеты, инспекции.",
      key: "og:description",
    },
    {
      name: "twitter:title",
      content: "UzGovInfo — каталог официальных сайтов госорганов Узбекистана",
      key: "twitter:title",
    },
    {
      name: "twitter:description",
      content:
        "Каталог официальных сайтов государственных организаций Республики Узбекистан: министерства, комитеты, инспекции.",
      key: "twitter:description",
    },
  ],
  tagPriority: -100,
});
</script>

<template>
  <NuxtLayout />
</template>
