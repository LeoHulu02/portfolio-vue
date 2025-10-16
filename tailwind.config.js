// tailwind.config.js
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts}'],

  theme: {
    extend: {
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
      },
      colors: {
        primary: '#0ea5e9',
        secondary: '#0284c7',
        'navbar-bg': '#2E236C',
      },
    },
  },
  plugins: [],
}
