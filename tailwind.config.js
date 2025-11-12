/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class", '[data-theme="dark"]'],
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#5751e1",
          secondary: "#ffc224",
          "base-100": "#f9f8ff", // background
          "base-content": "#1f2937", // text
        },
      },
      {
        dark: {
          primary: "#ffc224",
          secondary: "#5751e1",
          "base-100": "#0f172a", // dark background
          "base-content": "#f9fafb", // light text
        },
      },
    ],
  },
};
