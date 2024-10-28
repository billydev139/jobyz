/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {colors: {
      primaryBlue: '#1967D2',
      secondaryBlue: '#004DB7',
    },
    backgroundImage: {
      'custom-gradient': 'linear-gradient(45deg, #1967D2, #004DB7)',
    }},
  },
  plugins: [],
}

