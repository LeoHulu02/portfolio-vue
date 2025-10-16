<template>
  <nav
    class="hidden md:flex fixed top-0 left-0 right-0 z-50 bg-navbar-bg/90 backdrop-blur-sm shadow-lg border-b border-white/10 transition-all duration-300"
    :class="{ 'py-5': !scrolled, 'py-3': scrolled }"
    aria-label="Main navigation"
  >
    <div class="max-w-7xl mx-auto px-8 flex justify-between items-center w-full">
      <div class="flex items-center">
        <div class="text-2xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
          Portfolio
        </div>
      </div>
      
      <ul class="flex gap-8">
        <NavbarDesktopLink
          v-for="link in links"
          :key="link.id"
          :link="link"
          :is-active="activeSection === link.id"
        />
      </ul>
    </div>
  </nav>

  <nav
    class="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-navbar-bg/90 backdrop-blur-sm shadow-lg border-t border-white/10 transition-all duration-300"
    aria-label="Mobile navigation"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-8 flex justify-around py-3 sm:py-4">
      <NavbarMobileLink
        v-for="link in links"
        :key="link.id"
        :link="link"
        :is-active="activeSection === link.id"
      />
    </div>
  </nav>
  

</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useActiveSection } from '../composables/useActiveSection.js';
import { links } from '../composables/menu';
import NavbarDesktopLink from './NavbarDesktopLink.vue';
import NavbarMobileLink from './NavbarMobileLink.vue';


const { current: activeSection } = useActiveSection(links.map(l => l.id), {
  threshold: 0.5, 
});

// Navbar scroll effect
const scrolled = ref(false);

onMounted(() => {
  const handleScroll = () => {
    scrolled.value = window.scrollY > 50;
  };
  
  window.addEventListener('scroll', handleScroll);
  
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
});
</script>

<style>
html {
  scroll-behavior: smooth;
}

section[id] {
  scroll-margin-top: 80px; 
}
</style>
