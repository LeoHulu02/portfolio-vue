<template>
  <a
    :href="`#${link.id}`"
    class="flex flex-col items-center text-xs font-medium relative focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded-md p-1"
    :aria-label="link.label"
    :aria-current="isActive ? 'page' : null"
  >
    <div
      :class="[
        'w-6 h-6 mb-1 flex items-center justify-center transition-colors duration-300',
        isActive ? 'text-cyan-400' : 'text-slate-300'
      ]"
    >
      <component :is="link.icon" class="w-full h-full" />
    </div>
    <span :class="[
      'transition-colors duration-300',
      isActive ? 'text-cyan-400' : 'text-slate-300'
    ]">
      {{ link.shortLabel }}
    </span>
    <span
      v-if="isActive"
      class="absolute -top-1 w-1.5 h-1.5 rounded-full bg-cyan-400 transition-all duration-300"
    />
  </a>
</template>

<script setup>
defineProps({
  link: {
    type: Object,
    required: true,
  },
  isActive: {
    type: Boolean,
    required: true,
  },
});
</script>