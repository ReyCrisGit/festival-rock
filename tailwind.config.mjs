/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      keyframes: {
        "slide-infinite": {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(0)" },
        },
      },
      animation: {
        "slide-infinite": "slide-infinite 20s linear infinite",
      },
      colors: {
        "red-ligth": "#D45150",
        "blue-dark": "#233E63",
        "skyblue-semi": "#bee5e5",
        "yellow-ligth": "#FFFF3C",
      },
      boxShadow: {
        "custom-shadow": "15px 11px 5px rgba(0, 0, 0, 1)",
      },
      dropShadow: {
        '3xl': '0 12px 7px rgba(0, 0, 0, 1)',
      }
    },
  },
  plugins: [require("flowbite/plugin")],
};
