<template>
  <span class="inline-block">
    <span class="tracking-tight" :style="{ color: textColor }">{{ displayedText }}</span>
    <span :class="['cursor', { 'is-blinking': showCursor }]">{{ cursorCharacter }}</span>
  </span>
</template>

<script setup>
import { ref, onMounted, computed, onBeforeUnmount } from 'vue'

const props = defineProps({
  text: {
    type: Array,
    required: true
  },
  typingSpeed: {
    type: Number,
    default: 100
  },
  deletingSpeed: {
    type: Number,
    default: 50
  },
  pauseDuration: {
    type: Number,
    default: 2000
  },
  loop: {
    type: Boolean,
    default: true
  },
  textColor: {
    type: String,
    default: '#cbd5e1' // Warna abu-abu (text-gray-300)
  },
  cursorCharacter: {
    type: String,
    default: '|'
  },
  showCursor: {
    type: Boolean,
    default: true
  }
})

const displayedText = ref('')
const currentTextIndex = ref(0)
const isDeleting = ref(false)
let charIndex = 0
let timeoutId = null

// Ambil teks saat ini dari array berdasarkan index
const currentText = computed(() => props.text[currentTextIndex.value])

const type = () => {
  // Kondisi saat ini: sedang menghapus teks
  if (isDeleting.value) {
    if (displayedText.value.length > 0) {
      // Hapus karakter terakhir
      displayedText.value = currentText.value.substring(0, displayedText.value.length - 1)
      timeoutId = setTimeout(type, props.deletingSpeed)
    } else {
      // Selesai menghapus, pindah ke teks berikutnya
      isDeleting.value = false
      currentTextIndex.value = (currentTextIndex.value + 1) % props.text.length
      
      // Jika loop nonaktif dan sudah di akhir, berhenti
      if (!props.loop && currentTextIndex.value === 0) {
        // Tampilkan teks terakhir tanpa animasi lagi
        displayedText.value = props.text[props.text.length - 1];
        return;
      }

      timeoutId = setTimeout(type, props.typingSpeed)
    }
    return
  }

  // Kondisi saat ini: sedang mengetik teks
  if (displayedText.value.length < currentText.value.length) {
    // Tambah karakter berikutnya
    displayedText.value = currentText.value.substring(0, displayedText.value.length + 1)
    timeoutId = setTimeout(type, props.typingSpeed)
  } else {
    // Selesai mengetik, jeda sejenak lalu mulai menghapus
    timeoutId = setTimeout(() => {
      isDeleting.value = true
      type()
    }, props.pauseDuration)
  }
}

onMounted(() => {
  // Mulai animasi ketika komponen dimuat
  timeoutId = setTimeout(type, props.typingSpeed)
})

onBeforeUnmount(() => {
  // Hentikan timeout jika komponen dihancurkan untuk mencegah memory leak
  clearTimeout(timeoutId)
})
</script>

<style scoped>
.cursor {
  display: inline-block;
  margin-left: 2px;
  opacity: 1;
  color: #3b82f6; /* Warna biru (text-blue-500) */
  animation: none;
}

.cursor.is-blinking {
  animation: blink 0.7s infinite;
}

@keyframes blink {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}
</style>