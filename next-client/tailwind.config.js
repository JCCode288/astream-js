/** @type {import('tailwindcss').Config} */

const night = {
  night: {
    ...require("daisyui/src/theming/themes")["[data-theme=night]"],
    primary: "#BAFCA2",
    "primary-focus": "#6F9761",
    "primary-content": "#253220",
    secondary: "#A2FCE4",
    "secondary-focus": "#619789",
    accent: "#FCE4A2",
    "accent-focus": "#978961",
    "accent-content": "#322E20",
    "base-100": "#4A6541",
  },
};

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
    themes: ["dark", night],
  },
  plugins: [require("daisyui")],
};
