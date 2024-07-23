/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      backgroundImage: {
        'Conclusion': "url('./images/webp/background-img.webp')",
      },
    },
  },
  plugins: [],
}