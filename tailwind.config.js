const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      gilroy: ["Gilroy", "sans-serif"],
    },
    extend: {
      colors: {
        dark: {
          primary: "#313131",
          secondary: "#514040",
          "testimonial-primary": "#32435C",
          "testimonial-secondary": "#6A635B",
        },
        light: "#F2F2F2",
        accent: "#49AD09",
        card: {
          primary: colors.white,
          secondary: "#EDEDED",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
