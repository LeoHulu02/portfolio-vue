<!-- components/AboutMe.vue -->
<template>
  <section id="about" class="relative py-24 bg-slate-900 text-white overflow-hidden">
    <!-- Background Gradient -->
    <div class="absolute inset-0 z-0">
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.1),_transparent_80%)]" />
    </div>

    <!-- Content -->
    <div
      v-motion-container
      class="relative z-10 max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 items-center gap-16"
    >
      <!-- Profile -->
      <div
        v-motion
        :initial="{ opacity: 0, scale: 0.8 }"
        :visible-once="{ opacity: 1, scale: 1, transition: { duration: 800, ease: 'easeOut' } }"
        class="flex justify-center"
      >
        <ProfileCard
          name="Leo S. Hulu"
          title="Web Developer"
          handle="leocodes"
          avatar-url="/images/profile-leo.jpeg"
        />
      </div>

      <!-- Description -->
      <div
        v-motion
        :initial="{ opacity: 0, x: 50 }"
        :visible-once="{ opacity: 1, x: 0, transition: { duration: 800, delay: 200, ease: 'easeOut' } }"
      >
        <h2 class="text-4xl md:text-5xl font-extrabold tracking-tight mb-5">
          <span class="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">About Me</span>
        </h2>

        <p class="text-slate-300 mb-6 text-lg leading-relaxed max-w-prose">
          I’m <span class="font-medium text-white">Leo Hulu</span> — a 7th‑semester student who codes for fun and impact.
          I turn ideas into elegant, production‑ready web apps: responsive interfaces with <strong>Vue.js</strong>, and
          solid backends powered by <strong>Express.js</strong> and <strong>Prisma</strong>. I care deeply about clean
          design, performance, and delightful user experiences.
        </p>

        <!-- Skills -->
        <div class="mb-8">
          <h3 class="text-lg font-semibold text-slate-200 mb-3">Core Skills:</h3>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="tech in techStack"
              :key="tech"
              class="px-3 py-1.5 text-sm font-semibold text-cyan-200 bg-cyan-900/50 rounded-full"
            >
              {{ tech }}
            </span>
          </div>
        </div>

        <!-- Buttons -->
        <div class="flex flex-wrap gap-4">
          <a href="#contact" class="inline-block">
            <MagicButton>Contact Me</MagicButton>
          </a>
          <MagicButton outline icon="download">Download CV</MagicButton>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import ProfileCard from './ui/ProfileCard.vue';
import MagicButton from './ui/MagicButton.vue';

const techStack = [
  'HTML', 
  'CSS', 
  'JavaScript', 
  'Vue.js', 
  'Quasar', 
  'Tailwind CSS', 
  'Bootstrap', 
  'Express.js', 
  'Prisma', 
  'PostgreSQL',
];


</script>
