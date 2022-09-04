/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    fontFamily: {
      opSans: ["Open Sans"],
      raleway: ["Raleway"],
    },
    extend: {
      colors: {
        dBlue1: "hsl(217, 28%, 15%)",
        dBlue2: "hsl(218, 28%, 13%)",
        dBlue3: "hsl(216, 53%, 9%)",
        dBlue4: "hsl(219, 30%, 18%)",
      },
    },
  },
  plugins: [],
};
