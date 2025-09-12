// src/composables/useActiveSection.js
import { ref, onMounted, onBeforeUnmount } from 'vue';

export function useActiveSection(sectionIds, options = {}) {
  const current = ref(null);
  let observer = null;

  onMounted(() => {
    const defaultOptions = {
      root: null,
      rootMargin: '-40% 0px -55% 0px',
      threshold: 0,
    };
    observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          current.value = entry.target.id;
        }
      });
    }, { ...defaultOptions, ...options });

    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
  });

  onBeforeUnmount(() => {
    if (observer) observer.disconnect();
  });

  return { current };
}
