<template>
  <section id="projects" class="projects-section relative py-24 overflow-hidden">
    <div class="absolute inset-0 z-0 bg-slate-950">
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.15),_transparent_70%)]" />
      <div
        class="absolute inset-0 opacity-10"
        style="
          background-image: url('data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'100\' height=\'100\' viewBox=\'0 0 100 100\'%3e%3cpath fill=\'%23ffffff\' fill-opacity=\'0.05\' d=\'M0 0h100v100H0z M25 25h50v50H25z\'/%3e%3c/svg%3e');
        "
      ></div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16 max-w-3xl mx-auto">
        <h2 class="text-4xl md:text-5xl font-extrabold tracking-tight text-white drop-shadow-sm">
          A Selection of My
          <span
            class="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-300 bg-clip-text text-transparent drop-shadow-lg"
          >
            Projects
          </span>
        </h2>
        <p class="text-lg text-slate-300 leading-relaxed mt-4">
          Explore some of my recent work — from full-stack apps to responsive websites.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard
          v-for="project in projects"
          :key="project.id"
          :project="project"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import ProjectCard from './ui/ProjectCard.vue';

// Data proyek lengkap
const projects = [
  {
    id: 1,
    title: 'MobileEasse',
    description: 'Sistem informasi bengkel online untuk manajemen transaksi, stok, dan pelanggan.',
    image: '/images/pos-bengkel.jpeg',
    githubLink: 'https://github.com/LeoHulu02',
    liveLink: '',
    techStack: ['HTML', 'JAVASCRIPT', 'MySQL', 'Bootstrap'],
  },
  {
    id: 2,
    title: 'Alumni SMA 2020',
    description: 'Website responsive yang menampilkan semua profil alumni angkatan 2020.',
    image: '/images/web-alumni.png',
    githubLink: 'https://github.com/LeoHulu02',
    liveLink: '',
    techStack: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 3,
    title: 'File Upload App',
    description: 'Aplikasi upload file dengan Express.js dan React + Firebase Storage.',
    image: '/images/upload-file.png',
    githubLink: 'https://github.com/LeoHulu02',
    liveLink: '',
    techStack: ['Vue.js', 'Node.js', 'Express', 'Firebase'],
  },
];
</script>

<style scoped>
/* Tambahkan style jika diperlukan */
</style>