module.exports = {
  content: ["./**/*.{elm, js, html}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ["Fira Code", "monospace"], // Fira Code as first preference
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
