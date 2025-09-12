<!-- components/BackToTop.vue -->
<template>
  <transition name="fade">
    <button
      v-if="visible"
      @click="toTop"
      aria-label="Back to top"
      class="fixed bottom-6 right-6 z-40 w-12 h-12 bg-cyan-500 hover:bg-cyan-400 text-white rounded-full shadow-xl flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-cyan-300 transition-all duration-300 transform hover:scale-105 active:scale-95"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clip-rule="evenodd" />
      </svg>
    </button>
  </transition>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const visible = ref(false)
const threshold = 300

const onScroll = () => {
  visible.value = window.scrollY > threshold
}

const toTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll() // Cek status awal
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

/* Tambahkan padding bawah untuk mobile */
@media (max-width: 1023px) {
  .fixed.bottom-6.right-6 {
    bottom: calc(env(safe-area-inset-bottom) + 6rem); /* Tambahkan safe-area-inset-bottom */
  }
}
</style>