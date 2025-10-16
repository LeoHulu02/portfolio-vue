export function useScrollAnimation() {
  function handleIntersection(entries, observer) {
    entries.forEach(entry => {
      // Tambahkan class 'visible' saat elemen terlihat di viewport
      if (entry.isIntersecting) {
        // Tambahkan delay berdasarkan index untuk efek bertahap
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, 150); // Delay kecil untuk efek bertahap
      }
    });
  }

  function setupScrollAnimation() {
    const sections = document.querySelectorAll('.section-animate');
    
    // Konfigurasi Intersection Observer
    const options = {
      root: null, // viewport
      rootMargin: '0px',
      threshold: 0.1 // Trigger ketika 10% dari elemen terlihat
    };
    
    const observer = new IntersectionObserver(handleIntersection, options);
    
    // Observe semua section
    sections.forEach(section => {
      observer.observe(section);
    });
  }

  return {
    setupScrollAnimation
  };
}