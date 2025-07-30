<template>
  <div class="relative group w-16 h-16">
    <img :src="src" :alt="alt" class="w-full h-full object-contain z-10 relative" />
    <div class="absolute inset-0 z-20 pointer-events-none overflow-hidden">
      <div class="animated-beam"></div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  src: String,
  alt: String,
})
</script>

<style scoped>
.animated-beam {
  position: absolute;
  top: 0;
  left: -50%;
  height: 100%;
  width: 50%;
  background: linear-gradient(
    120deg,
    transparent 0%,
    rgba(255, 255, 255, 0.2) 50%,
    transparent 100%
  );
  animation: beam-scan 2s infinite;
  transform: skewX(-20deg);
}

@keyframes beam-scan {
  0% {
    left: -50%;
  }
  100% {
    left: 120%;
  }
}
</style>
