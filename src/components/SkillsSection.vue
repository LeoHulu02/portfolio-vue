<template>
  <section id="skills" class="relative py-24 bg-slate-900 text-white overflow-hidden">
    <div class="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.1),_transparent_60%)]" />

    <div class="relative z-10 max-w-7xl mx-auto px-4 space-y-16">
      <h2 class="text-4xl md:text-5xl font-extrabold text-center tracking-tight">
        <span class="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Skills & Technologies
        </span>
      </h2>
      
      <div class="space-y-8">
        <div class="marquee group">
          <div class="marquee-content">
            <SkillIcon v-for="skill in skillsRow1" :key="skill.alt + '-1'" :src="skill.src" :alt="skill.alt" />
            <SkillIcon v-for="skill in skillsRow1" :key="skill.alt + '-2'" :src="skill.src" :alt="skill.alt" />
          </div>
        </div>

        <div class="marquee group reverse">
          <div class="marquee-content">
            <SkillIcon v-for="skill in skillsRow2" :key="skill.alt + '-1'" :src="skill.src" :alt="skill.alt" />
            <SkillIcon v-for="skill in skillsRow2" :key="skill.alt + '-2'" :src="skill.src" :alt="skill.alt" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import SkillIcon from './ui/SkillIcon.vue';

// Membagi skills menjadi dua baris untuk efek yang lebih dinamis
const skillsRow1 = [
  { src: '/images/html.png', alt: 'HTML5' },
  { src: '/images/css.png', alt: 'CSS3' },
  { src: '/images/js.png', alt: 'JavaScript' },
  { src: '/images/vuejs.png', alt: 'Vue.js' },
  { src: '/images/tailwind.png', alt: 'Tailwind CSS' },
  { src: '/images/figma.png', alt: 'Figma' },
];

const skillsRow2 = [
  { src: '/images/git.png', alt: 'Git' },
  { src: '/images/github.png', alt: 'GitHub' },
  { src: '/images/vscode.png', alt: 'VS Code' },
  { src: '/images/vite.png', alt: 'Vite' },
  { src: '/images/npm.png', alt: 'NPM' },
  { src: '/images/mysql.png', alt: 'MySQL' },
];
</script>

<style scoped>
@keyframes scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}

.marquee {
  width: 100%;
  overflow: hidden;
  -webkit-mask-image: linear-gradient(to right,
      transparent 0%,
      black 10%,
      black 90%,
      transparent 100%);
  mask-image: linear-gradient(to right,
      transparent 0%,
      black 10%,
      black 90%,
      transparent 100%);
}

.marquee-content {
  display: flex;
  gap: 2rem; /* Jarak antar ikon */
  animation: scroll 40s linear infinite;
}

.marquee.reverse .marquee-content {
  animation-direction: reverse;
}

.group:hover .marquee-content {
  animation-play-state: paused;
}
</style>