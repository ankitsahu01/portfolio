const { tailwindColors, themeRgb } = require("./src/config/theme");

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: tailwindColors,
      boxShadow: {
        "glow-sm": `0 0 15px rgba(${themeRgb.primaryContainer}, 0.2)`,
        "glow-md": `0 0 20px rgba(${themeRgb.primaryContainer}, 0.3)`,
        "glow-lg": `0 0 24px rgba(${themeRgb.primaryContainer}, 0.35)`,
      },
      fontFamily: {
        sans: ["Geist", "Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      fontWeight: {
        'extralight': '200',
        'light': '300',
        'normal': '400',
        'medium': '500',
        'semibold': '600',
        'bold': '700',
        'extrabold': '800',
        'black': '900',
      }
    },
  },
  plugins: [],
};

