/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
          //Colores personalizados
          colors: {
            'primary': {
              100: '#1b96f3',
              200: '#10133a',
            },
            'secondary': {
              100: '#fcdf87',
              200: '#f68741',
            },
            'terciary': {
              100: '#ef0195',
            },
          },
  },
  },
  plugins: [],
}