const { nextui } = require("@nextui-org/theme");
/** @type {import('tailwindcss').Config} */
import {nextui} from "@nextui-org/react";
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
    "./node_modules/@nextui-org/theme/dist/components/(button|ripple|spinner).js",
  ],
  theme: {
    extend: {
      backgroundSize: {
        "custom-size": "7px 7px",
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "custom-pattern":
          "repeating-linear-gradient(45deg, #444cf6 0, #443cf6 0.1px, #e5e5f7 0, #e5e4f7 49%)",
      },

      colors: {
        "custom-bg": "#f5f4fe",
      },
      colors: {
        // Custom colors...
        "color-text-black": "#475568",
        "color-text-grey": "#949494",
        "color-text-white": "#F9FAFB",
        "primary-color": "#1A42BC",
        "neutral-color": "#F0F0F0",
        "secondary-color": "#B030FF",
        "color-finish": "#00D33B",
        "color-pending": "#D20303",
        "color-process": "#F8C408",
      },

      fontFamily: {
        consolas: ["Consolas", "monospace"],
      },
    },
  },
  plugins: [nextui(), require("daisyui")],
};
