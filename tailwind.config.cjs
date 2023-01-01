/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'ame-light-yellow': '#F2D7B6',
        'ame-dark-brown': '#40302b',
        'ame-red': '#BF545D'
      }
    },
  },
  daisyui: {
    themes: [
      {
        ametheme: {
          "primary": "#f2d7b6",
          "secondary": "#bf545d",
          "accent": "#40302b",
          "neutral": "#191D24",
          "base-100": "#2A303C",
          "info": "#60b6bf",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#F87272",
        },
      },
    ],
  },
  plugins: [require("@tailwindcss/typography"), require('daisyui')],
}
