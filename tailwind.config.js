// tailwind.config.js
export const content = [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}", // Adjust paths as per your project
];
export const theme = {
  extend: {
    textShadow: {
      light: "2px 2px 4px rgba(255, 255, 255, 0.6)", // Light shadow (white)
      dark: "2px 2px 4px rgba(169, 169, 169, 0.7)", // Medium gray shadow (gray)
    },
    colors: {
      lightBackground: "#ffffff",
      darkBackground: "#333333",
    },
    fontFamily: {
      kannada: ["Baloo Tamma 2", "sans-serif"],
    },
  },
};
export const plugins = [
  function ({ addUtilities }) {
    addUtilities({
      ".text-shadow-light": {
        "text-shadow": "2px 2px 4px rgba(255, 255, 255, 0.6)", // Light shadow
      },
      ".text-shadow-dark": {
        "text-shadow": "2px 2px 4px rgba(169, 169, 169, 0.7)", // Medium gray shadow
      },
    });
  },
];
export const darkMode = "class"; // Enable dark mode using class strategy
