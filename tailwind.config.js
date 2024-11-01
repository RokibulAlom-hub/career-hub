/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-custom': 'linear-gradient(90deg, rgb(126, 144, 254), rgb(152, 115, 255))',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

