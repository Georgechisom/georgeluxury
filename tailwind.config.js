/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        whiteText: "#fff",
        darkText: "#000000",
        lightText: "#9b9b9b",
        greenText: "#1d8221",
        redText: "#E02B2B",
        skyText: "#0000FF",
        skyReduceText:"#0000ff50",
        cartBtn: "#b3b3ee4d"
      },
      flex: {
        full: "0 0 100%"
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};