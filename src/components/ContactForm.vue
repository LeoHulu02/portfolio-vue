<!-- components/ContactSection.vue -->
<template>
  <section id="contact" class="relative py-28 overflow-hidden bg-slate-950 text-white">
    <!-- Background -->
    <div class="absolute inset-0 z-0">
      <!-- Radial gradient -->
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.15),_transparent_80%)]"></div>
      <!-- Noise texture -->
      <div
        class="absolute inset-0 opacity-5"
        style="background-image: url('image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'100\' height=\'100\' viewBox=\'0 0 100 100\'%3e%3cpath fill=\'%23ffffff\' fill-opacity=\'0.05\' d=\'M0 0h100v100H0z M25 25h50v50H25z\'/%3e%3c/svg%3e');"
      ></div>
      <!-- Floating particles (animasi latar belakang) -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          v-for="i in 6"
          :key="i"
          class="particle absolute w-1 h-1 bg-cyan-500/30 rounded-full animate-pulse"
          :style="{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${3 + Math.random() * 2}s`
          }"
        ></div>
      </div>
    </div>

    <!-- Form Container -->
    <div
      class="relative z-10 max-w-xl mx-auto px-4 sm:px-6 lg:px-8"
      v-motion
      :initial="{ opacity: 0, y: 50 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 800, ease: 'easeOut' } }"
    >
      <form
        @submit.prevent="onSubmit"
        class="bg-slate-900/80 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-slate-800 shadow-2xl space-y-6"
        novalidate
        aria-label="Contact form"
      >
        <!-- Header -->
        <div class="text-center mb-2">
          <h2 class="text-3xl font-extrabold mb-2">
            <span class="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-300 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p class="text-slate-400 text-sm">
            I'd love to hear from you. Fill out the form below.
          </p>
        </div>

        <!-- Name -->
        <div>
          <label for="name" class="block text-sm font-medium text-slate-300 mb-1.5">Your Name</label>
          <input
            id="name"
            v-model="form.name"
            type="text"
            placeholder="e.g. John Doe"
            class="w-full px-4 py-3 rounded-xl bg-slate-800/70 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 border transition"
            :class="errors.name ? 'border-red-500/60 ring-red-500/40' : 'border-slate-700'"
            aria-invalid="!!errors.name"
            aria-describedby="error-name"
          />
          <p v-if="errors.name" id="error-name" class="mt-1.5 text-xs text-red-400 flex items-center gap-1">
            <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
            </svg>
            {{ errors.name }}
          </p>
        </div>

        <!-- Email -->
        <div>
          <label for="email" class="block text-sm font-medium text-slate-300 mb-1.5">Email Address</label>
          <input
            id="email"
            v-model="form.email"
            type="email"
            placeholder="you@example.com"
            class="w-full px-4 py-3 rounded-xl bg-slate-800/70 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 border transition"
            :class="errors.email ? 'border-red-500/60 ring-red-500/40' : 'border-slate-700'"
            aria-invalid="!!errors.email"
            aria-describedby="error-email"
          />
          <p v-if="errors.email" id="error-email" class="mt-1.5 text-xs text-red-400 flex items-center gap-1">
            <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
            </svg>
            {{ errors.email }}
          </p>
        </div>

        <!-- Message -->
        <div>
          <label for="message" class="block text-sm font-medium text-slate-300 mb-1.5">Your Message</label>
          <textarea
            id="message"
            v-model="form.message"
            rows="4"
            placeholder="Tell me about your project..."
            class="w-full px-4 py-3 rounded-xl bg-slate-800/70 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 border transition resize-none"
            :class="errors.message ? 'border-red-500/60 ring-red-500/40' : 'border-slate-700'"
            aria-invalid="!!errors.message"
            aria-describedby="error-message"
          ></textarea>
          <p v-if="errors.message" id="error-message" class="mt-1.5 text-xs text-red-400 flex items-center gap-1">
            <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
            </svg>
            {{ errors.message }}
          </p>
        </div>

        <!-- Submit & Feedback -->
        <div class="flex flex-col sm:flex-row sm:items-center gap-4 pt-2">
          <button
            type="submit"
            :disabled="sending"
            class="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 disabled:from-slate-600 disabled:to-slate-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-md hover:shadow-cyan-500/20 flex items-center justify-center gap-2 min-w-32"
          >
            <span v-if="!sending">Send Message</span>
            <span v-else class="flex items-center gap-2">
              <svg class="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </span>
          </button>

          <!-- Feedback -->
          <p
            v-if="feedback.message"
            :class="feedback.success ? 'text-green-400' : 'text-red-400'"
            class="text-sm text-center sm:text-left animate-fade-in"
          >
            {{ feedback.message }}
          </p>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup>
import { reactive, ref } from 'vue'
import emailjs from '@emailjs/browser'
// import 'vue3-lottie/dist/style.css'
import { useMotion } from '@vueuse/motion'

// Environment variables
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

// Form state
const form = reactive({
  name: '',
  email: '',
  message: ''
})

const errors = reactive({
  name: '',
  email: '',
  message: ''
})

const feedback = reactive({
  message: '',
  success: false
})

const sending = ref(false)

// Validate form
const validate = () => {
  let isValid = true
  errors.name = ''
  errors.email = ''
  errors.message = ''

  if (!form.name.trim()) {
    errors.name = 'Name is required.'
    isValid = false
  }

  if (!form.email.trim()) {
    errors.email = 'Email is required.'
    isValid = false
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Please enter a valid email.'
    isValid = false
  }

  if (!form.message.trim()) {
    errors.message = 'Message cannot be empty.'
    isValid = false
  }

  return isValid
}

// Submit handler
const onSubmit = async () => {
  feedback.message = ''
  if (!validate()) return

  if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
    feedback.message = 'Email service is not configured.'
    feedback.success = false
    return
  }

  sending.value = true

  try {
    const templateParams = {
      from_name: form.name,
      from_email: form.email,
      message: form.message
    }

    await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)

    feedback.message = 'Message sent successfully! 🎉 I’ll get back to you soon.'
    feedback.success = true

    // Reset form
    form.name = ''
    form.email = ''
    form.message = ''
  } catch (err) {
    console.error('EmailJS error:', err)
    feedback.message = 'Failed to send. Please try again or contact me directly.'
    feedback.success = false
  } finally {
    sending.value = false
  }
}
</script>

<style scoped>
/* Animasi muncul feedback */
.animate-fade-in {
  animation: fadeIn 0.4s ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-4px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Particles animasi */
.particle {
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-15px) rotate(180deg); }
}
</style>