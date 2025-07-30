<!-- ProjectCard.vue -->
<template>
  <div
    ref="cardRef"
    v-motion
    :initial="{ opacity: 0, y: 50, scale: 0.95 }"
    :enter="{
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1000,
        delay: index * 150,
        ease: 'easeOut',
      },
    }"
    :leave="{
      opacity: 0,
      y: 30,
      scale: 0.95,
      transition: { duration: 300 }
    }"
    :scroll="{
      once: false,           // 🔁 Animasi berulang tiap kali masuk viewport
      offset: '100px 0px'    // 📏 Mulai animasi saat 100px sebelum masuk
    }"
    class="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 shadow-lg hover:shadow-blue-500/30 hover:scale-[1.02] transition-transform duration-300"
  >
    <img
      :src="project.image"
      :alt="project.title"
      class="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
    />

    <div class="p-5">
      <h3 class="text-xl font-semibold text-white mb-2">{{ project.title }}</h3>
      <p class="text-sm text-gray-300 mb-4">{{ project.description }}</p>
      <a
        :href="project.link"
        target="_blank"
        class="inline-block px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 hover:scale-105 transition-transform duration-300"
      >
        Lihat Proyek
      </a>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useTilt } from '../../composables/useTilt'

defineProps({
  project: Object,
  index: Number,
})

const cardRef = ref(null)

onMounted(() => {
  useTilt(cardRef.value)
})
</script>