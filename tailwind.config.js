/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        about: "url('./src/assets/about/about-main.jpg')",
      },
    },
  },
  plugins: [],
};
