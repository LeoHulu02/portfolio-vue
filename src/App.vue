<template>
  <Navbar />
    <section id="hero">
      <HeroSection />
    </section>

    <section id="projects">
      <ProjectsSection />
    </section>

    <section id="about">
      <AboutSection />
    </section>

    <section id="skills">
      <SkillsSection />
    </section>

    <section id="contact">
      <ContactForm />
    </section>

    <section id="footer">
      <Footer />
    </section>

    <BackToTop />
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
