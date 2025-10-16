<template>
  <li class="flex items-center">
    <a
      :href="`#${link.id}`"
      :class="[
        'relative text-sm font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded-lg px-4 py-2',
        isActive 
          ? 'text-white bg-white/20 backdrop-blur-sm shadow-lg' 
          : 'text-blue-100 hover:text-white hover:bg-white/10'
      ]"
      :aria-current="isActive ? 'page' : null"
    >
      {{ link.label }}
      <span
        v-if="isActive"
        class="absolute left-1/2 transform -translate-x-1/2 -bottom-2 w-1 h-1 bg-yellow-400 rounded-full animate-pulse"
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