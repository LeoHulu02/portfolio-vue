<template>
  <div class="relative w-full overflow-hidden py-10">
    <Marquee :pauseOnHover="true" class="[--duration:20s]">
      <div v-for="(icon, i) in skills" :key="'row1-' + i" class="px-6">
        <img :src="icon" alt="tech icon" class="h-12 w-12" />
      </div>
    </Marquee>

    <Marquee :pauseOnHover="true" reverse class="[--duration:20s] mt-4">
      <div v-for="(icon, i) in skills" :key="'row2-' + i" class="px-6">
        <img :src="icon" alt="tech icon" class="h-12 w-12" />
      </div>
    </Marquee>

    <!-- Gradient Fade on edges -->
    <div class="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-slate-900"></div>
    <div class="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-slate-900"></div>
  </div>
</template>

<script setup>
import { Marquee } from '@/components/magicui/marquee'

const skills = [
  '/icons/vue.svg',
  '/icons/javascript.svg',
  '/icons/tailwind.svg',
  '/icons/git.svg',
  '/icons/firebase.svg',
  '/icons/postgresql.svg'
]
</script>

<style scoped>
img {
  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.3));
}
</style>
