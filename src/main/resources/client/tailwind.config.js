module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        turquoise: "#40e0d0",
        yellow: {
          200: "#feca1d",
          400: "#e1ad01",
        }
      }
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
}