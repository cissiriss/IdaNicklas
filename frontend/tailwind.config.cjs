/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      alumni: ["Alumni Sans Pinstripe", "sans-serif"],
      alumnibold: ["Alumni Sans", "sans-serif"],
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
  daisyui: {
    themes: false, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: false, // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
};
