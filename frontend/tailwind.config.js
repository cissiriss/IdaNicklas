import req from "express/lib/request";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Alumni Sans Pinstripe", "sans-serif"],
    },
    extend: {
      colors: {
        light: "#fffafa",
        blue: "#8ca0b6d0;",
        extralight: "#ebebeb",
      },
    },
  },
  plugins: [require("daisyui")],
};
