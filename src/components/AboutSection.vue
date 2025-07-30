<template>
  <section class="py-24 bg-slate-950 text-white">
    <!-- Container motion -->
    <div
      v-motion-container
      class="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 items-center gap-12"
    >
      <!-- Gambar -->
      <div
        v-motion
        :initial="{ opacity: 0, scale: 0.8, y: 50 }"
        :visibleOnce="{
          opacity: 1,
          scale: 1,
          y: 0,
          transition: { duration: 800, ease: 'easeOut', delay: 100 }
        }"
        class="flex justify-center"
      >
        <img
          src="/images/profile.jpeg"
          alt="Leo Hulu"
          class="w-60 h-60 object-cover rounded-full shadow-lg border-4 border-blue-500"
        />
      </div>

      <!-- Teks dan tombol -->
      <div
        v-motion
        :initial="{ opacity: 0, x: 50 }"
        :visibleOnce="{
          opacity: 1,
          x: 0,
          transition: { duration: 1000, ease: 'easeOut', delay: 200 }
        }"
      >
        <h2 class="text-4xl font-bold mb-4">Tentang Saya</h2>
        <p class="text-gray-300 mb-6 leading-relaxed">
          Saya <span class="text-blue-400 font-medium">Leo Hulu</span>, seorang pengembang web front-end yang fokus pada pembuatan tampilan modern dan responsif menggunakan <strong>Vue.js</strong>, <strong>Tailwind CSS</strong>, dan <strong>Motion UI</strong>.
        </p>

        <!-- Container untuk badge dan tombol -->
        <div v-motion-container class="flex flex-col items-start gap-6">
          <!-- Badges -->
          <div class="flex flex-wrap gap-2">
            <span
              v-for="(tech, index) in ['Vue.js', 'Tailwind CSS', 'JavaScript', 'Motion UI']"
              :key="tech"
              v-motion
              :initial="{ opacity: 0, y: 20 }"
              :visibleOnce="{
                opacity: 1,
                y: 0,
                transition: { delay: 400 + index * 100, duration: 600, ease: 'easeOut' }
              }"
              class="badge"
            >
              {{ tech }}
            </span>
          </div>

          <!-- Tombol -->
          <div class="flex gap-4">
            <a
              v-motion
              :initial="{ opacity: 0, scale: 0.9 }"
              :visibleOnce="{
                opacity: 1,
                scale: 1,
                transition: { delay: 800, duration: 300, ease: 'easeOut' }
              }"
              href="#contact"
              class="btn btn-primary"
            >
              Hubungi Saya
            </a>
            <a
              v-motion
              :initial="{ opacity: 0, scale: 0.9 }"
              :visibleOnce="{
                opacity: 1,
                scale: 1,
                transition: { delay: 900, duration: 300, ease: 'easeOut' }
              }"
              href="/cv.pdf"
              target="_blank"
              class="btn btn-secondary"
            >
              Unduh CV
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.badge {
  @apply bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm font-medium;
}
.btn {
  @apply px-6 py-3 transition rounded-md font-semibold;
}
.btn-primary {
  @apply bg-blue-600 hover:bg-blue-700;
}
.btn-secondary {
  @apply border border-white hover:bg-white hover:text-black;
}
</style>