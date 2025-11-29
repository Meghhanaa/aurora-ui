/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["system-ui", "SF Pro Text", "ui-sans-serif", "sans-serif"]
      },
      colors: {
        primary: "#6366f1",
        secondary: "#a78bfa"
      }
    }
  },
  plugins: []
};
