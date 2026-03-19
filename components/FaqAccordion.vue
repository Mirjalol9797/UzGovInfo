<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  items: {
    type: Array,
    required: true,
  },
});

const openIndex = ref(null);
const uid = `faq-${Math.random().toString(36).slice(2, 9)}`;

function toggle(i) {
  openIndex.value = openIndex.value === i ? null : i;
}
</script>

<template>
  <div class="mt-8 pt-6 border-t border-[#eee]">
    <h2 class="font-semibold text-lg md:text-xl mb-4">
      {{ title }}
    </h2>

    <div
      class="base-bg !p-0 overflow-hidden divide-y divide-[#dbe6ff]/80"
    >
      <div v-for="(item, i) in items" :key="'faq-acc-' + i">
        <button
          type="button"
          class="w-full flex items-start gap-3 px-4 py-3 md:px-6 md:py-4 text-left hover:bg-white/50 transition-colors"
          :aria-expanded="openIndex === i"
          :aria-controls="`${uid}-panel-${i}`"
          :id="`${uid}-header-${i}`"
          @click="toggle(i)"
        >
          <span
            class="font-medium text-[#111] text-base 768:text-sm flex-1 pr-2 leading-snug"
          >
            {{ item.q }}
          </span>
          <span
            class="shrink-0 mt-0.5 inline-flex text-[#315efb]"
            aria-hidden="true"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="w-5 h-5 transition-transform duration-200 ease-out"
              :class="{ 'rotate-180': openIndex === i }"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </span>
        </button>

        <div
          class="grid transition-[grid-template-rows] duration-300 ease-out"
          :class="openIndex === i ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'"
        >
          <div class="min-h-0 overflow-hidden">
            <div
              :id="`${uid}-panel-${i}`"
              role="region"
              :aria-labelledby="`${uid}-header-${i}`"
              class="px-4 pb-4 md:px-6 md:pb-5 text-sm text-[#4B5563] leading-relaxed"
            >
              {{ item.a }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
