<template>
  <section class="projects-section relative py-20 text-white overflow-hidden">
    <!-- Magic Background Animated -->
    <div class="absolute inset-0 z-0 bg-black overflow-hidden">
      <div
        class="absolute inset-x-0 -inset-y-[30%] h-[200%] skew-y-12 opacity-20 bg-grid-animated"
      />
    </div>

    <!-- Content -->
    <div class="relative z-10 max-w-6xl mx-auto px-4">
      <h2 class="text-4xl font-bold text-center mb-12">
        My <span class="text-blue-500">Projects</span>
      </h2>

      <div
        v-motion-container
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <ProjectCard
          v-for="(project, i) in projects"
          :key="project.id"
          :project="project"
          :index="i"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import ProjectCard from './ui/ProjectCard.vue'

const projects = [
  {
    id: 1,
    title: 'MobileEasse',
    description: 'Sistem informasi bengkel online untuk manajemen transaksi, stok, dan pelanggan.',
    image: '/images/mobileasse.png',
    link: 'https://github.com/leohulu/mobileeasse',
  },
  {
    id: 2,
    title: 'Alumni SMA 2020',
    description: 'Website responsive yang menampilkan semua profil alumni 2020.',
    image: '/images/alumni.png',
    link: '#',
  },
  {
    id: 3,
    title: 'File Upload App',
    description: 'Aplikasi upload file dengan Express.js dan React + Firebase Storage.',
    image: '/images/upload-app.png',
    link: '#',
  },
]
</script>

<style scoped>
@keyframes moveGrid {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 100px 100px;
  }
}

.projects-section {
  position: relative;
  background-color: #121212;
}

.overlay {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at center, rgba(59, 130, 246, 0.08), transparent 60%);
  z-index: -1;
}

.bg-grid-animated {
  background-image: url('/images/grid.svg');
  background-repeat: repeat;
  animation: moveGrid 40s linear infinite;
  mask-image: radial-gradient(400px circle at center, white, transparent);
  -webkit-mask-image: radial-gradient(400px circle at center, white, transparent);
}
</style>
