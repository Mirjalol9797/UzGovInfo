<script setup>
defineProps({
  labels: {
    type: Array,
    required: true,
    validator: (v) => Array.isArray(v) && v.length === 3,
  },
});

const active = ref(0);
const baseId = `cit-${Math.random().toString(36).slice(2, 9)}`;

const panelName = computed(() => `panel${active.value}`);
</script>

<template>
  <div class="category-info-tabs mt-8 pt-6 border-t border-[#eee]">
    <div class="flex flex-wrap gap-2 mb-4" role="tablist">
      <button
        v-for="(label, i) in labels"
        :key="'tab-' + i"
        type="button"
        role="tab"
        :id="`${baseId}-tab-${i}`"
        :aria-selected="active === i"
        :aria-controls="`${baseId}-panel`"
        :tabindex="active === i ? 0 : -1"
        class="px-3 py-2 rounded-xl text-sm font-medium transition border md:px-4 md:text-base text-left"
        :class="
          active === i
            ? 'border-[#315efb] bg-[#eef2ff] text-[#315efb] shadow-sm'
            : 'border-[#e5e7eb] bg-white text-[#64748b] hover:border-[#dbe6ff] hover:bg-[#f8fafc]'
        "
        @click="active = i"
      >
        {{ label }}
      </button>
    </div>

    <div
      :id="`${baseId}-panel`"
      role="tabpanel"
      :aria-labelledby="`${baseId}-tab-${active}`"
      class="text-[#4B5563] base-bg leading-6 text-sm 768:text-xs min-h-[120px]"
    >
      <transition
        mode="out-in"
        enter-active-class="transition ease-out duration-200"
        enter-from-class="opacity-0 translate-y-1"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition ease-in duration-150"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div :key="active" class="space-y-1.5">
          <slot :name="panelName" />
        </div>
      </transition>
    </div>
  </div>
</template>
