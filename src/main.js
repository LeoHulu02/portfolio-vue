// src/main.js

import { createApp } from 'vue'
import App from './App.vue'
import { MotionPlugin } from '@vueuse/motion' // Import plugin
import './assets/main.css' // Import Tailwind CSS
import { useScrollAnimation } from './composables/useScrollAnimation'
import { useLazyLoad } from './composables/useLazyLoad'


const app = createApp(App)

app.use(MotionPlugin)


app.mount('#app')

// Setup animasi scroll setelah aplikasi di-mount
document.addEventListener('DOMContentLoaded', () => {
  const { setupScrollAnimation } = useScrollAnimation()
  setupScrollAnimation()
  const { setupLazyLoading } = useLazyLoad()
  setupLazyLoading()
})