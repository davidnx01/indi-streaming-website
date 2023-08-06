/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/containers/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        "sidebar" : "var(--sidebar-color)",
        "main" : "var(--main-color)",
        "footer" : "var(--footer-color)",
      },
      backgroundImage: {
        'hero' : 'url(/images/herobg.png)',
        'footer-bg' : 'url(/images/cinema.jpg)'
      }
    },
  },
  plugins: [],
}
