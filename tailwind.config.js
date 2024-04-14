/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      primary: ['Playfair Display', 'serif'],
      body: ['Barlow', 'sans-serif'],
      logo: ['Great Vibes', 'cursive'],
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        lg: '3rem',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      colors: {
        primary: '#050402',
        //secondary: '#1C1D24',
        secondary: '#14161A',
        //tertiary: '#131419',
        tertiary: '#0c0908',
        accent: {
          DEFAULT: '#ac6b34',
          hover: '#925a2b',
        },
        leather: '#0b0806',
        // paragraph: '#878e99',
        paragraph: '#78716c',
      },
      content: {
        about: 'url("/src/assets/images/outline-text/about.svg")',
        portfolio: 'url("/src/assets/images/outline-text/portfolio.svg")',
        contact: 'url("/src/assets/images/outline-text/contact.svg")',
      },

    },
  },
  plugins: [],
};
