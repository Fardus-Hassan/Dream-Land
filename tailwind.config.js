/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");
export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        jost: ["Jost", "sans-serif"],

      },
    },
    colors: {
      'pmColor': '#28A77C',
      'secondaryColor': '#FF7801',
    }
  },
  plugins: [require("daisyui")],
});

