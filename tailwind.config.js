/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        text: "#242424",
        textD: "#f3f6f5",
        background: "#f3f6f5",
        backgroundD: "#242424",
        primary: "#e4b381",
        secondary: "#4f4f4f",
        accent: "#ead6a6",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
