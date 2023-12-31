/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    colors: {
      primary: "#0d9488",
      lighterPrimary: "#ccfbf1",
      lightPrimary: "#99f6e4",
      darkPrimary: "#115e59",
      lightGrey: "#f2f2f2",
      darkGrey: "#333333",
      darkColor: "#0a0a0a",
      red: "#ff2c2c",
    },
    fontFamily: {
      sans: ["Poppins", "Arial"],
      serif: [],
    },
    extend: {
      spacing: {},
      borderRadius: {},
    },
  },
  plugins: [],
};
