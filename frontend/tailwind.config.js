/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      alumni: ["Alumni Sans Pinstripe", "sans-serif"],
      arima: ["Arima", "sans-serif"],
      windsong: ["WindSong", "sans-serif"],
    },
    extend: {
      colors: {
        light: "#fffafa",
        blue: "#8ca0b6",
        blueop: "#8ca0b6d0",
        extralight: "#ebebeb",
        darkblue: "#102b4a",
      },
    },
  },
  plugins: [require("daisyui")],
};
