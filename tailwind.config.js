/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#000000", // Black
        secondary: "#333333", // Dark gray
        accent: "#FFFFFF", // White
      },
    },
  },
  plugins: [],
};