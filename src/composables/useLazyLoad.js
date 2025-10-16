import { ref, onMounted } from 'vue'

export function useLazyLoad() {
  const setupLazyLoading = () => {
    // Lazy loading untuk gambar
    const lazyImages = document.querySelectorAll('[data-lazy]')
    
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target
            const src = img.getAttribute('data-src')
            
            if (src) {
              img.setAttribute('src', src)
              img.removeAttribute('data-src')
              img.removeAttribute('data-lazy')
            }
            
            imageObserver.unobserve(img)
          }
        })
      })
      
      lazyImages.forEach(img => {
        imageObserver.observe(img)
      })
    } else {
      // Fallback untuk browser yang tidak mendukung IntersectionObserver
      lazyImages.forEach(img => {
        const src = img.getAttribute('data-src')
        if (src) {
          img.setAttribute('src', src)
          img.removeAttribute('data-src')
          img.removeAttribute('data-lazy')
        }
      })
    }
  }

  onMounted(() => {
    setupLazyLoading()
  })

  return {
    setupLazyLoading
  }
}