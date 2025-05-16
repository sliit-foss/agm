/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        'dm-sans': ['DM Sans', 'sans-serif'],
        'clash-display': ['Clash Display', 'sans-serif'],
      },
      colors: {
        'theme-green': '#A7F8A7',
        'theme-white': '#FFFFFF',
        'theme-bg': '#f8f8f8',
      },
      boxShadow: {
        'theme': '5px 5px 0px 0px rgba(0,0,0,1)',
      }
    },
  },
  plugins: [],
}
