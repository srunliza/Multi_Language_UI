/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    'node_modules/flowbite-react/lib/esm/**/*.js'
    
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        // Custom colors...
        'color-text-black': '#475568',
        'color-text-grey':'#949494',
        'color-text-white':'#F9FAFB',
        'primary-color':'#1A42BC',
        'neutral-color':'#F0F0F0',
        'secodary-color':'#B030FF',
        'color-finish':'#00D33B',
        'color-pending':'#D20303',
        'color-process':'#F8C408',
      }
    },
  },
  plugins: [require('flowbite/plugin')],
};
