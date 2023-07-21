/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'wp': '640px',
        // => @media (min-width: 992px) { ... }
      },
    },
  },
  plugins: [],
  
}
