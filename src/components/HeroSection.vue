<template>
  <section id="hero" ref="vantaRef" class="relative h-screen text-white px-4 overflow-hidden">
    <div
      class="relative z-10 flex flex-col items-center justify-center h-full text-center"
    >
      <div class="text-reveal-container">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
          Hi, I’m <span class="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Leo Saputra Hulu</span>
        </h1>
      </div>

      <p class="text-slate-300 text-lg md:text-xl max-w-3xl mb-8 mt-4 animate-fade-in-up animation-delay-500">
        A 7th‑semester student and frontend developer who loves crafting fast,
        beautiful, and responsive web experiences.
      </p>

      <div class="mt-8 flex justify-center gap-4 animate-fade-in-up animation-delay-700">
        <MagicButton>Hire Me</MagicButton>
        <MagicButton outline icon="download">Download Resume</MagicButton>
      </div>
    </div>
  </section>
</template>

<style scoped>
.text-reveal-container {
  position: relative;
  overflow: hidden;
  display: inline-block;
}

.text-reveal-container h1 {
  animation: revealText 1.5s cubic-bezier(0.77, 0, 0.175, 1) forwards;
  transform: translateY(100%);
}

@keyframes revealText {
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0);
  }
}

.animation-delay-500 {
  animation-delay: 0.5s;
}

.animation-delay-700 {
  animation-delay: 0.7s;
}
</style>

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
    color: 0x0077ff,
    backgroundColor: 0x001122
  })
})

onBeforeUnmount(() => {
  if (vantaEffect) vantaEffect.destroy()
})
</script>