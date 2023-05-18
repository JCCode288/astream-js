/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        sm: "3px 4px 1px",
        md: "5px 8px 0.7px",
      },
    },
  },
  daisyui: {
    themes: [
      {
        night: {
          ...require("daisyui/src/colors/themes")["[data-theme=night]"],
          primary: "#CDEE2D",
          secondary: "#F8DFFA",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
