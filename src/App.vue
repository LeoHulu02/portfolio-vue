<template>
  <div class="md:pb-0 pb-[calc(env(safe-area-inset-bottom)+72px)] bg-slate-950">
    <Navbar />
    <section id="hero" class="section-animate">
      <HeroSection />
    </section>

    <section id="projects" class="section-animate">
      <ProjectsSection />
    </section>

    <section id="about" class="section-animate">
      <AboutSection />
    </section>

    <section id="skills" class="section-animate">
      <SkillsSection />
    </section>

    <section id="contact" class="section-animate">
      <ContactForm />
    </section>

    <section id="footer" class="section-animate">
      <Footer />
    </section>

    <BackToTop />
  </div>
</template>

<script setup>

import Navbar from './components/Navbar.vue';
import BackToTop from './components/BackToTop.vue';
import HeroSection from './components/HeroSection.vue';
import ProjectsSection from './components/ProjectsSection.vue';
import AboutSection from './components/AboutSection.vue';
import SkillsSection from './components/SkillsSection.vue';
import ContactForm from './components/ContactForm.vue';
import Footer from './components/Footer.vue';
</script>
