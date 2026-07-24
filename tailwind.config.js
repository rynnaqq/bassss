/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'dark-bg': '#121212',
        'dark-card': '#1A1A1A',
        'charcoal': '#595959',
        'grey-muted': '#7F7F7F',
        'silver-accent': '#A5A5A5',
        'dust-grey': '#CCCCCC',
        'platinum': '#F2F2F2',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
};
