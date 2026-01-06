<script setup>
const { t } = useI18n();
const props = defineProps({
  oneData: {
    type: Object,
    default: {},
  },
});
</script>
<template>
  <div class="rank-detail">
    <div class="site-container">
      <h1 class="mb-10 text-3xl 768:text-xl 480:!text-lg">
        {{ t(oneData.title) }}
      </h1>
      <div class="mb-6">
        <span class="font-medium">{{ t("link_to_official_website") }}</span
        >:
        <a :href="t(oneData.link)" target="_blank" class="!text-[#315efb]">{{
          t(oneData.link)
        }}</a>
      </div>
      <div>
        <div class="mb-2 font-medium">{{ t("brief_description_site") }}</div>
        <div v-html="t(oneData.description)" class="mb-6 text-justify"></div>
        <div class="overflow-hidden">
          <img
            :src="oneData.seo.image"
            :alt="t(oneData.title)"
            :title="t(oneData.title)"
            class="ml-[-5px]"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss"></style>
