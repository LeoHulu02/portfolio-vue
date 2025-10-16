<template>
  <footer class="footer-container">
    <div class="footer-content">
      <div class="footer-links">
        <a 
          href="https://github.com/LeoHulu02" 
          target="_blank" 
          rel="noopener noreferrer"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 100 } }"
          class="social-link"
        >
          <Github class="icon" />
        </a>
        <a 
          href="https://linkedin.com/in/Leo Saputra Hulu" 
          target="_blank" 
          rel="noopener noreferrer"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 200 } }"
          class="social-link"
        >
          <Linkedin class="icon" />
        </a>
        <a 
          href="leohulu02@gmail.com"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 300 } }"
          class="social-link"
        >
          <Mail class="icon" />
        </a>
      </div>
      <div 
        class="footer-text"
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0, transition: { delay: 400 } }"
      >
        <p>Designed & Built by Leo Saputra Hulu © {{ currentYear }}</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { Github, Linkedin, Mail } from 'lucide-vue-next';
import { useMotion } from '@vueuse/motion';
import { ref, computed } from 'vue';

// Secara otomatis mendapatkan tahun saat ini
const currentYear = computed(() => new Date().getFullYear());

</script>

<style scoped>
.footer-container {
  padding: 2rem 5%;
  background-color: #111827; /* Warna gelap agar kontras */
  color: #9ca3af; /* Warna teks abu-abu lembut */
  text-align: center;
  border-top: 1px solid #374151; /* Garis pemisah halus */
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.footer-links {
  display: flex;
  justify-content: center;
  gap: 1.5rem; /* Jarak antar ikon */
}

.social-link {
  color: #9ca3af;
  transition: all 0.3s ease-in-out;
}

.social-link .icon {
  width: 24px;
  height: 24px;
}

/* Efek hover yang keren */
.social-link:hover {
  color: #ffffff; /* Ikon menjadi putih saat di-hover */
  transform: translateY(-5px); /* Ikon sedikit terangkat */
}

.footer-text p {
  margin: 0;
  font-size: 0.9rem;
  font-family: 'Inter', sans-serif; /* Ganti dengan font pilihan Anda */
}

/* Responsif untuk layar kecil */
@media (max-width: 768px) {
  .footer-container {
    padding: 1.5rem 5%;
    padding-bottom: calc(env(safe-area-inset-bottom) + 80px);
  }
  .footer-links {
    gap: 1.25rem;
  }
  .footer-text p {
    font-size: 0.8rem;
  }
}
</style>