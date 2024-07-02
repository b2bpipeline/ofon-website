/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
        "./error.vue",
      ],
    theme: {
      colors: {
        black: "#1F2122",
        white: "#FFFFFF",
        orange: "#F25921",
        yellow: "#FBB718",
        "yellow-light": "#FEEDC5",
      },
      fontFamily: {
        heading: ["Rubik", "sans-serif"],
        body: ["Montserrat", "sans-serif"],
      },
    },
    plugins: [],
  };
  