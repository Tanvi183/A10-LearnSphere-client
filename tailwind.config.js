/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#ffc224",
          secondary: "#5751e1",
        },
      },
      {
        dark: {
          primary: "#ffc224",
          secondary: "#5751e1",
        },
      },
    ],
  },
};
