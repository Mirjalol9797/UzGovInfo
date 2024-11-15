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

  // <!-- Google Tag Manager -->
  (function (w, d, s, l, i) {
    w[l] = w[l] || [];
    w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
    var f = d.getElementsByTagName(s)[0],
      j = d.createElement(s),
      dl = l != "dataLayer" ? "&l=" + l : "";
    j.async = true;
    j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
    f.parentNode.insertBefore(j, f);
  })(window, document, "script", "dataLayer", "GTM-K6LQ2SBW");
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
  <!-- Google Tag Manager (noscript) -->
  <noscript
    ><iframe
      src="https://www.googletagmanager.com/ns.html?id=GTM-K6LQ2SBW"
      height="0"
      width="0"
      style="display: none; visibility: hidden"
    ></iframe
  ></noscript>
  <!-- End Google Tag Manager (noscript) -->
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
