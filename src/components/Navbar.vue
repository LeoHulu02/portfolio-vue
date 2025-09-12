<template>
  <nav
    class="hidden md:flex fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-slate-900/70 shadow-sm"
    aria-label="Main navigation"
  >
    <div class="max-w-6xl mx-auto px-4">
      <ul class="flex gap-6 py-3">
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
    class="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md shadow-inner"
    aria-label="Mobile navigation"
  >
    <div class="max-w-6xl mx-auto px-4 flex justify-around py-2">
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
import { useActiveSection } from '../composables/useActiveSection.js';
import { links } from '../composables/menu';
import NavbarDesktopLink from './NavbarDesktopLink.vue';
import NavbarMobileLink from './NavbarMobileLink.vue';

const { current: activeSection } = useActiveSection(links.map(l => l.id), {
  threshold: 0.5, 
});
</script>

<style>
html {
  scroll-behavior: smooth;
}

section[id] {
  scroll-margin-top: 1px; 
}
</style>
