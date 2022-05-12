module.exports = {
  purge: {
    content: [
      "./components/**/*.vue",
      "./layouts/**/*.vue",
      "./pages/**/*.vue",
      "./validators/*.js",
      "./slices/**/*.vue",
    ],
  },
  theme: {
    inset: {
      0: 0,
      10: "10px",
      50: "50px",
      "1/2": "50%",
    },
    extend: {
      fontFamily: {
        display: ["Montserrat", "sans-serif"],
        body: ["Montserrat", "sans-serif"],
      },
      colors: {},
      fill: {
        none: "none",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["checked", "even"],
      borderColor: ["checked"],
    },
    opacity: ({ after }) => after(["disabled"]),
    borderStyle: ["last", "first"],
    borderWidth: ["first"],
  },
};
