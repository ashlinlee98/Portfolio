/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx,css}"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Montserrat', 'sans-serif'],
      },
      dropShadow: {
        cyanGlow: '0 0 7px rgba(0, 255, 255, 0.9)', // Custom cyan glow
      },
      textShadow: {
        cyanGlow: '0 0 6px cyan, 0 0 10px rgba(0, 255, 255, 0.7)',
      },
    },
  },
  plugins: [
    require('tailwindcss-textshadow')
  ],
}

