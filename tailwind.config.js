module.exports = {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#F2F4F8",
        first: "#FFBE0B",
        second: "#3A86FF",
        third: "#FF006E",
        white: "#FFFFFF",
      },
      boxShadow: {
        ptp: "0px 0px 10px 0px rgba(0, 0, 0, 0.2)",
      },
      fontSize: {
        tiny: "0.70rem",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  variants: {},
  plugins: [],
};
