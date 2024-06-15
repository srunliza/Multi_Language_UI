const { nextui } = require("@nextui-org/theme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
    "./node_modules/@nextui-org/theme/dist/components/(accordion|button|calendar|date-input|date-picker|input|divider|ripple|spinner|popover).js",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
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
  plugins: [
    require("tailwindcss-animate"),
    nextui(),
    nextui(),
    require("daisyui"),
  ],
};
