<template>
  <section ref="vantaRef" class="relative h-screen text-white px-4 overflow-hidden">
    <!-- Overlay content -->
    <div
      class="relative z-10 flex flex-col items-center justify-center h-full text-center"
      v-motion
      :initial="{ opacity: 0, y: 20 }"
      :enter="{ opacity: 1, y: 0, transition: { duration: 0.6 } }"
    >
      <h1 class="text-5xl font-bold mb-4">
        Hi, I’m <span class="text-blue-500">Leo Hulu</span>
      </h1>
      <p class="text-lg text-gray-300 max-w-xl mx-auto">
        I build modern and aesthetic web experiences using Vue, Tailwind, and Motion.
      </p>

      <div class="mt-6 flex justify-center gap-4">
        <MagicButton>Hire Me</MagicButton>
        <MagicButton outline>Download CV</MagicButton>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import MagicButton from './ui/MagicButton.vue'
let vantaEffect = null
const vantaRef = ref(null)

onMounted(async () => {
  const THREE = await import('three')
  // @ts-ignore
  vantaEffect = window.VANTA.GLOBE({
    el: vantaRef.value,
    THREE: THREE,
    mouseControls: true,
    touchControls: true,
    minHeight: 200.0,
    minWidth: 200.0,
    scale: 1.0,
    scaleMobile: 1.0,
    color: 0x3b82f6,          // Warna garis globe (biru Tailwind)
    backgroundColor: 0x0f172a // Background (slate gelap)
  })
})

onBeforeUnmount(() => {
  if (vantaEffect) vantaEffect.destroy()
})
</script>
