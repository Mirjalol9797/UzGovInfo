<script setup>
const { locale } = useI18n();

const organizationsLinkText = computed(() => {
  const map = {
    ru: "Все организации",
    en: "All organizations",
    uz: "Barcha tashkilotlar",
  };
  return map[locale.value] || map.ru;
});
</script>

<template>
  <footer class="bg-[#F3F4F9] mt-10 py-4">
    <div class="site-container">
      <div
        class="flex justify-between items-center 960:flex-col 960:items-start gap-2"
      >
        <div class="text-sm text-[#111827]">
          © 2025-2026 govinfo.uz. {{ $t("all_rights_reserved") }}
        </div>
        <div
          class="flex items-center gap-4 text-sm 640:flex-col 640:items-start 640:gap-2"
        >
          <nuxt-link
            :to="localePath('/organizations')"
            class="text-[#1C335F] hover:text-[#315EFB]"
          >
            {{ organizationsLinkText }}
          </nuxt-link>
          <nuxt-link
            :to="localePath('/about')"
            class="text-[#1C335F] hover:text-[#315EFB]"
          >
            {{ $t("footer.about") }}
          </nuxt-link>
          <nuxt-link
            :to="localePath('/contacts')"
            class="text-[#1C335F] hover:text-[#315EFB]"
          >
            {{ $t("footer.contacts") }}
          </nuxt-link>
          <nuxt-link
            :to="localePath('/privacy')"
            class="text-[#1C335F] hover:text-[#315EFB]"
          >
            {{ $t("footer.privacy") }}
          </nuxt-link>
          <nuxt-link
            :to="localePath('/terms')"
            class="text-[#1C335F] hover:text-[#315EFB]"
          >
            {{ $t("footer.terms") }}
          </nuxt-link>
        </div>
      </div>
    </div>
  </footer>
</template>
