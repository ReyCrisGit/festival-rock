/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      boxShadow: {
        "custom-shadow": "15px 11px 5px rgba(0, 0, 0, 1)",
      },
    },
  },
  plugins: [],
};
