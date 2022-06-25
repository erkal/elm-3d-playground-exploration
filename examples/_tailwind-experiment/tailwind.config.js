module.exports = {
  content: [
    "./index.html",
    "./main.js",
    "./src/*.elm",
    "../../playground-exploration/**/*.elm",
  ],
  theme: {
    fontFamily: {
      sans: [
        '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue"',
        "sans-serif",
      ],
      mono: [
        "'SF Mono',SFMono-Regular,ui-monospace,'DejaVu Sans Mono',Menlo,Consolas",
        "monospace",
      ],
    },

    extend: {
      colors: {
        background: "rgba(220, 220, 220, 1)",
        twitterBlue: "rgb(31, 161, 242)",
        twitterBlue40: "rgba(31, 161, 242, 0.4)",
        githubCat: "rgb(232, 78, 50)",
        githubCat40: "rgba(232, 78, 50, 0.4)",
        //
        black: "rgba(0, 0, 0, 1)",
        black80: "rgba(0, 0, 0, 0.8)",
        black60: "rgba(0, 0, 0, 0.6)",
        black40: "rgba(0, 0, 0, 0.4)",
        black20: "rgba(0, 0, 0, 0.2)",
        //
        white: "rgba(255, 255, 255, 1)",
        white80: "rgba(255, 255, 255, 0.8)",
        white60: "rgba(255, 255, 255, 0.6)",
        white40: "rgba(255, 255, 255, 0.4)",
        white20: "rgba(255, 255, 255, 0.2)",
        //
      },
    },
  },
  plugins: [],
};
