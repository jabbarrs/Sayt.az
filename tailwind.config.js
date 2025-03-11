 /** @type {import('tailwindcss').Config} */
 export default {
  content: ["./**/*.{htm,js}", "./*/*.{htm,js}"],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
    },

    screens: {
      'bm': '290px',
      'hd': '340px',
      'md1': '398px',
      'am': '550px',
      'em': '592px',
      'sm': '640px',
      'md': '768px',
      'td': '841px',
      'tm': '968px',
      'lg': '1024px',
      'mlg': '1150px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
}