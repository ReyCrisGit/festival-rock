/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
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
      },
    },
  },
  plugins: [],
};
