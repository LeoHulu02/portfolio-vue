<template>
  <section id="hero" ref="vantaRef" class="relative h-screen text-white px-4 overflow-hidden">
    <div
      class="relative z-10 flex flex-col items-center justify-center h-full text-center"
      v-motion
      :initial="{ opacity: 0, y: 20 }"
      :enter="{ opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } }"
    >
      <h1 class="text-5xl font-extrabold tracking-tight md:text-6xl mb-4">
        Hi, I’m 
        <span class="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Leo Hulu
        </span>
      </h1>
      
      <p class="text-xl text-slate-300 max-w-2xl mx-auto min-h-[2.5rem]">
        <TextType 
          :text="[
            'I build modern and aesthetic web experiences.',
            'Using Vue, Tailwind, and Motion.',
            'Let\'s create something amazing together!'
          ]"
          :typingSpeed="70"
          :deletingSpeed="40"
          :pauseDuration="1500"
        />
      </p>

      <div class="mt-10 flex justify-center gap-4">
        <MagicButton>Hire Me</MagicButton>
        <MagicButton outline icon="download">Download CV</MagicButton>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import MagicButton from './ui/MagicButton.vue'
import TextType from './ui/TextType.vue' 

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
    color: 0x3b82f6,
    backgroundColor: 0x0f172a
  })
})

onBeforeUnmount(() => {
  if (vantaEffect) vantaEffect.destroy()
})
</script>