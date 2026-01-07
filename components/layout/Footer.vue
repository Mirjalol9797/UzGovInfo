<script setup></script>

<template>
  <footer class="bg-[#F3F4F9] mt-10 py-4">
    <div class="site-container">
      <div class="flex-center-between">
        <div class="text-sm text-[#111827]">
          Gos sayts 2024. {{ $t("all_rights_reserved") }}
        </div>
        <div class="flex items-center gap-4 text-sm">
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
        </div>
      </div>
    </div>
  </footer>
</template>
