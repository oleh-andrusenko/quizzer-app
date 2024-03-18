/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#023e8a",
        "primary-dark": "#03045e",
        light: "#0096c7",
      },
    },
  },
  plugins: [],
}
