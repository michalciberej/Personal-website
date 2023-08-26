/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        textD: "#f3f6f5",
        backgroundD: "#171c1a",
        secondaryD: "#0e100f",
        accentD: "#bec5c2",
        text: "#171c1a",
        background: "#f3f6f5",
        primary: "#2eb279",
        secondary: "#d9dddb",
        accent: "#6e7c76",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
