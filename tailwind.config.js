/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        textD: "#f3f6f5",
        backgroundD: "#171c1a",
        accentD: "#bec5c2",
        text: "#171c1a",
        background: "#f3f6f5",
        primary: "#2eb279",
        secondary: "#092f1f",
        accent: "#df870c",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
