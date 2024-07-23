/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: ["./src/**/*.{html,js}", "./index.html"],
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      backgroundImage: {
        'Conclusion': "url('./images/webp/background-img.webp')",
      },
      'magic': "url(./images/webp/bg1-img.webp)",
      'About': "url('./images/webp/bglayer-2.webp')",
    },
  },
  plugins: [],
} 