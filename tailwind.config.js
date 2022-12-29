/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: "#37468E",
        secondary: "#DBE1FF",
        green: "#00D98B",
        grey: "#F4F4F4",
        black: "#333333",
      },
    },
  },
  plugins: [],
};
