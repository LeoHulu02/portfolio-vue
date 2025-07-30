<template>
  <section class="py-20 bg-slate-950 text-white">
    <div class="max-w-6xl mx-auto px-4 space-y-16">

      <h2 class="text-3xl md:text-4xl font-bold text-center text-gradient">
        Skills & Tools
      </h2>

      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 place-items-center">
        <SkillIcon v-for="(skill, index) in skills" :key="'skill-' + index" :src="skill.src" :alt="skill.alt" />
        <SkillIcon v-for="(tool, index) in tools" :key="'tool-' + index" :src="tool.src" :alt="tool.alt" />
      </div>
      
    </div>
  </section>
</template>

<script setup>
import SkillIcon from './ui/SkillIcon.vue'

const skills = [
  { src: '/icons/vue.svg', alt: 'Vue.js' },
  { src: '/icons/tailwind.svg', alt: 'Tailwind CSS' },
  { src: '/icons/js.svg', alt: 'JavaScript' },
  { src: '/icons/html.svg', alt: 'HTML5' },
  { src: '/icons/css.svg', alt: 'CSS3' },
]

const tools = [
  { src: '/icons/git.svg', alt: 'Git' },
  { src: '/icons/github.svg', alt: 'GitHub' },
  { src: '/icons/figma.svg', alt: 'Figma' },
  { src: '/icons/vscode.svg', alt: 'VS Code' },
]
</script>

<style scoped>
.text-gradient {
  background: linear-gradient(to right, #38bdf8, #6366f1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
