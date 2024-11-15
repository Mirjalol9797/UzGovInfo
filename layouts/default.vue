<script setup>
import { onMounted } from "vue";

import { useRoute } from "vue-router";

const route = useRoute();
const settingsStore = useSettingsStore();

if (process.client) {
  // Асинхронная загрузка gtag.js
  const script = document.createElement("script");
  script.src = "https://www.googletagmanager.com/gtag/js?id=G-0K2W3VD5PG";
  script.async = true;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());

  gtag("config", "G-0K2W3VD5PG");
}

function siteScrollTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

onMounted(() => {
  window.addEventListener("scroll", function () {
    const scrollElem = document.querySelector(".site-scroll-top");

    if (scrollElem) {
      if (document.documentElement.scrollTop > 400) {
        scrollElem.style.opacity = "1";
        scrollElem.style.zIndex = "10";
      } else {
        scrollElem.style.opacity = "0";
        scrollElem.style.zIndex = "-1";
      }
    }
  });
});
</script>

<template>
  <LayoutHeader />
  <div class="content">
    <NuxtPage :key="route.fullPath" />
  </div>
  <LayoutFooter />

  <div class="site-scroll-top" @click="siteScrollTop">
    <!-- <img
      src="/icons/header/scroll-top.svg"
      alt="scroll-top"
      width="24px"
      height="24px"
    /> -->
  </div>
</template>

<style scoped>
.content {
  flex: 1;
}
</style>
