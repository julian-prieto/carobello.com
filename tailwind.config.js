module.exports = {
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        // Use as font-poppins
        poppins: '"Poppins", sans-serif',
      },
      zIndex: {
        "-10": "-10",
        "-20": "-20",
        "-30": "-30",
        "-40": "-40",
        "-50": "-50",
      },
      spacing: {
        "h-full": "100vh",
        "2/3": "66.666667%",
      },
    },
    letterSpacing: {
      widest: ".2em",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
