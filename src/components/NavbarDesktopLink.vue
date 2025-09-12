<template>
  <li class="flex items-center">
    <a
      :href="`#${link.id}`"
      :class="[
        'relative text-sm font-medium transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-sm',
        isActive ? 'text-cyan-400' : 'text-slate-300 hover:text-white'
      ]"
      :aria-current="isActive ? 'page' : null"
    >
      {{ link.label }}
      <span
        v-if="isActive"
        class="absolute left-0 right-0 -bottom-1 h-0.5 bg-cyan-400 rounded transition-all duration-300"
      />
    </a>
  </li>
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