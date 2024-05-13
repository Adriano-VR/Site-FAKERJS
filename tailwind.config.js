/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-100": "#ffffff",
        "dark-200":"#acafb4",
        "dark-300":"#5f656f",
        "dark-400":"#1b2431",
        "dark-500":"#1b2431",
        "dark-600":"#1b2431",
        "dark-700":"#151a23",
        "dark-800":"#0d1015",
        "dark-900":"#000000"
      }
   

    },
  },
  plugins: [

  ],
}