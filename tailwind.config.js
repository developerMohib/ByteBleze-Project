/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes:{
        animetedgradient: {
          '0%' : {backgroundPosition: '0% 50%'},
          '50%' : {backgroundPosition: '100% 50%'},
          '100%' : {backgroundPosition: '0% 50%'},
        },
      },
      backgroundSize:{
        '300%': '300%',
      },
      animation: {
        gradient: 'animetedgradient 6s ease infinite alternate',
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "synthwave"],
  },
}

