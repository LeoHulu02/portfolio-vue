<template>
  <div
    v-motion
    :initial="{ opacity: 0, y: 50, scale: 0.95 }"
    :visible-once="{
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 800,
        delay: index * 150,
        ease: [0.22, 1, 0.36, 1],
      },
    }"
    class="relative group rounded-3xl overflow-hidden shadow-2xl transition-all duration-300 hover:shadow-cyan-500/20"
  >
    <div 
      class="absolute -inset-px bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl 
             opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
    />
    
    <div class="relative bg-slate-900/80 backdrop-blur-md h-full rounded-[22px] p-6 flex flex-col transition-transform duration-300 group-hover:scale-[1.02]">
      <div class="overflow-hidden rounded-lg mb-6 shadow-xl transition-all duration-300 group-hover:shadow-cyan-500/10">
        <img
          :src="project.image"
          :alt="project.title"
          class="w-full h-48 object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
        />
      </div>

      <div class="flex-grow">
        <h3 class="text-2xl font-extrabold text-white mb-2 leading-tight transition-colors duration-300 group-hover:text-cyan-400">
          {{ project.title }}
        </h3>
        <p class="text-sm text-slate-400 mb-5 leading-relaxed">
          {{ project.description }}
        </p>
      </div>

      <div class="flex flex-wrap gap-2 mb-6">
        <span 
          v-for="tech in project.techStack" :key="tech"
          class="px-3 py-1 text-xs font-semibold text-cyan-200 bg-cyan-900/40 rounded-full border border-cyan-700/50 transition-colors duration-200 group-hover:bg-cyan-800/60"
        >
          {{ tech }}
        </span>
      </div>

      <div class="flex items-center justify-end gap-6 text-slate-500">
        <a 
          v-if="project.githubLink !== '#'" 
          :href="project.githubLink" 
          target="_blank" 
          rel="noopener"
          class="flex items-center gap-2 text-sm font-medium transition-all duration-300 hover:text-white group/link"
        >
          <Github class="h-6 w-6 transition-transform duration-200 group-hover/link:scale-110" />
          <span class="hidden md:inline">Code</span>
        </a>
        
        <a 
          v-if="project.liveLink !== '#'" 
          :href="project.liveLink" 
          target="_blank" 
          rel="noopener"
          class="flex items-center gap-2 text-sm font-medium text-cyan-400 transition-all duration-300 hover:text-cyan-200 group/link"
        >
          <ExternalLink class="h-6 w-6 transition-transform duration-200 group-hover/link:scale-110" />
          <span class="hidden md:inline">Live</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Github, ExternalLink } from 'lucide-vue-next';

defineProps({
  project: Object,
  index: Number,
});
</script>