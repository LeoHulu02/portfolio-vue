<template>
  <button
  v-motion
  :initial="{ scale: 1 }"
  :hover="{ scale: 1.05 }"
  :transition="{ type: 'spring', stiffness: 300, damping: 20 }"
  class="relative px-6 py-3 rounded-lg font-semibold transition duration-300"
  :class="{
    'bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-lg': !outline,
    'border border-white text-white hover:bg-white hover:text-black': outline,
  }"
>
  <slot />
</button>

</template>

<script setup>
defineProps({
  outline: { type: Boolean, default: false }
})
</script>
