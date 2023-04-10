/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["dancingScript", "Inter", "sans-serif"],
        serif: ["dancingScript", "Inter", "sans-serif"],
      },
      colors: {
        /* ### Colors ### */
        "primary-normal": "var(--primary-normal)",
        "primary-light": "var(--primary-light)",

        /* ### Backgrounds ### */
        "dashboard-border": "var(--dashboard-border)",
        "dashboard-bg": "var(--dashboard-bg)",

        /* ### Fonts ### */
        "normal-font": "var(--normal-font)",
        "dark-font": "var(--dark-font)",
        "title-font": "var(--title-font)",
      },
      width: {
        "dashboard-size": "300px",
      },
      minHeight: {
        "dashboard-size": "100vh",
      },
      borderWidth: {
        1: "1px",
      },
    },
  },
  plugins: [],
};
