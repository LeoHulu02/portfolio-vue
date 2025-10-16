<template>
  <a
    :href="`#${link.id}`"
    :class="[
        'flex flex-col items-center justify-center px-3 sm:px-4 py-2.5 sm:py-3 text-[11px] sm:text-xs font-semibold transition-all duration-300 rounded-lg',
        isActive 
          ? 'text-white' 
          : 'text-slate-300 hover:text-white'
      ]"
    :aria-current="isActive ? 'page' : null"
  >
    <component :is="link.icon" class="w-5 h-5 sm:w-6 sm:h-6 mb-1" />
    <span class="text-xs">{{ link.shortLabel }}</span>
    <span
      v-if="isActive"
      class="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full animate-pulse"
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