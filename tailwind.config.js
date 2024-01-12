/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        primaryBlue: "hsl(246, 80%, 60%)",
        primaryOrange: "hsl(15, 100%, 70%)",
        primarySoftBlue: "hsl(195, 74%, 62%)",
        primaryLightRed: "hsl(348, 100%, 68%)",
        primaryLimeGreen: "hsl(145, 58%, 55%)",
        primaryViolet: "hsl(264, 64%, 52%)",
        primarySoftOrange: "hsl(43, 84%, 65%)",
        secondary900: "hsl(226, 43%, 10%)",
        secondary700: "hsl(235, 46%, 20%)",
        secondary500: "hsl(235, 46%, 35%)",
        secondary400: "hsl(235, 45%, 61%)",
        secondary200: "hsl(236, 100%, 87%)",
      }
    },
  },
  plugins: [],
}

