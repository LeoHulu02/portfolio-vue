import { createApp } from 'vue'
import App from './App.vue'
import { MotionPlugin } from '@vueuse/motion'
import { useIntersectionObserver } from '@vueuse/core'
import './assets/main.css'

const app = createApp(App)

app.use(MotionPlugin)

// Register manual directive
app.directive('intersection-observer', {
  mounted(el, binding) {
    const { index = 0, direction = 'left' } = binding.value || {}
    const animationClass =
      direction === 'right' ? 'animate-fade-in-right' : 'animate-fade-in-left'

    // apply delay via inline style
    el.style.animationDelay = `${index * 0.15}s`

    useIntersectionObserver(
      el,
      ([{ isIntersecting }]) => {
        if (isIntersecting) {
          el.classList.remove('opacity-0')
          el.classList.add(animationClass)
        } else {
          el.classList.remove(animationClass)
          el.classList.add('opacity-0')
        }
      },
      { threshold: 0.1 }
    )
  },
})




app.mount('#app')
