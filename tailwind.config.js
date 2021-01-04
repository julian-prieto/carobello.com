module.exports = {
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 20s linear infinite",
      },
      colors: {
        "cb-gray": "#E6E6E6",
        "cb-green": "#B8ED17",
      },
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
        64: "16rem",
        68: "17rem",
        72: "18rem",
        76: "19rem",
        80: "20rem",
        84: "21rem",
        88: "22rem",
        92: "23rem",
        96: "24rem",
        100: "25rem",
        104: "26rem",
        108: "27rem",
        112: "28rem",
        116: "29rem",
        120: "30rem",
        124: "31rem",
        128: "32rem",
        "25vw": "25vw",
        "50vw": "50vw",
        "75vw": "75vw",
        "100vw": "100vw",
        "25vh": "25vh",
        "50vh": "50vh",
        "75vh": "75vh",
        "100vh": "100vh",
        "2/3": "66.666667%",
      },
    },
    letterSpacing: {
      widest: ".2em",
    },
  },
  variants: {
    extend: {
      fontWeight: ["hover", "focus"],
    },
  },
  plugins: [],
};
