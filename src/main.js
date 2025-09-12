// src/main.js

import { createApp } from 'vue'
import App from './App.vue'
import { MotionPlugin } from '@vueuse/motion' // Import plugin
import './assets/main.css' // Import Tailwind CSS

const app = createApp(App)

app.use(MotionPlugin)

app.mount('#app')