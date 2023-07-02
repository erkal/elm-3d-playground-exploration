module.exports = {
  content: ["./**/*.{elm, js, html}"],
  fontFamily: {
    sans: ["Public Sans", "sans-serif"],
  },
  theme: {
    extend: {
      colors: {
        background: "rgba(220, 220, 220, 1)",
        twitterBlue: "rgb(31, 161, 242)",
        twitterBlue40: "rgba(31, 161, 242, 0.4)",
        githubCat: "rgb(232, 78, 50)",
        githubCat40: "rgba(232, 78, 50, 0.4)",
      },
    },
  },
  plugins: [],
};
