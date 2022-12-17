/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    screens: {
      sm: "640px",

      md: "768px",

      lg: "1024px",

      xl: "1280px",

      xxl: "1536px",
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#078ef5",

          secondary: "#D926A9",

          accent: "#1FB2A6",

          neutral: "#191D24",

          "base-100": "#2A303C",

          info: "#3ABFF8",

          success: "#36D399",

          warning: "#FBBD23",

          error: "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
