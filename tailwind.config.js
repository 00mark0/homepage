/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#111827",
        secondary: "#f5f5f5",
      },
      screens: {
        xsm: "320px",
      },
      width: {
        100: "500px",
      },
      height: {
        100: "500px",
      },
    },
  },
  plugins: [],
};
