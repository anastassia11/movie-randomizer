/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "gray": "#848787",
        "yellow": "#f6d518"
      },
      screens: {
        lg: "1024px"
      },
      spacing: {
        1: "2px",
        2: "4px",
        4: "8px",
        6: "12px",
        8: "16px",
        16: "32px",
      },
    },
  },
  plugins: [],
}
