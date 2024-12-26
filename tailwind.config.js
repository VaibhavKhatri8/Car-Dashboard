/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        popins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
