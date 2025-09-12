<template>
  <button :class="buttonClasses">
    <slot /> <Download v-if="icon === 'download'" class="ml-2 h-4 w-4" />
  </button>
</template>

<script setup>
import { computed } from 'vue'
import { Download } from 'lucide-vue-next'

const props = defineProps({
  outline: {
    type: Boolean,
    default: false
  },
  icon: {
    type: String,
    default: ''
  }
})

// Kelas dasar yang dimiliki kedua tombol
const baseClasses = 'inline-flex items-center justify-center rounded-lg px-6 py-2.5 text-sm font-semibold shadow-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900'

// Kelas yang berubah berdasarkan prop 'outline'
const buttonClasses = computed(() => {
  if (props.outline) {
    // Gaya Tombol Sekunder (Outline)
    return `${baseClasses} bg-transparent border border-slate-700 text-slate-300 hover:bg-slate-800 hover:border-slate-600 focus:ring-slate-500`
  }
  // Gaya Tombol Primer (Solid)
  return `${baseClasses} bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500`
})
</script>