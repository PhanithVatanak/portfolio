/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      navFont: ['Domine', 'serif'],
      primaryFont : ['Sansita', 'sans-serif']
    }
  },
  plugins: [],
}

