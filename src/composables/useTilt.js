import VanillaTilt from 'vanilla-tilt'

export function useTilt(el, options = {}) {
  if (!el) return
  VanillaTilt.init(el, {
    max: 10,
    speed: 400,
    glare: true,
    'max-glare': 0.2,
    scale: 1.02,
    ...options,
  })
}