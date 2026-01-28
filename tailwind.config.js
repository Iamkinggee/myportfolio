/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",],
  theme: {
    extend:{
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        syne: ['Syne', 'sans-serif'],
        lexendZetta: ['LexendZetta', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

