/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bw1: '#f4f7f5',
        bw2: '#eeeeee',
        bw3: '#575a5e',
        bw4: '#121212',
        Positive: '#03cea4',
        Primary: '#272c50',
        Negative: '#d94032',
        Yellow: '#eac435',
        Green: '#3a9900'
      },
      fontSize: {
        caption: '0.625rem',
        body: '0.8125rem',
        title2: '1rem',
        title1: '1.25rem',
        h5: '1.5625rem',
        h4: '1.9375rem',
        h3: '2.4375rem',
        h2: '3.0625rem',
        h1: '3.8125rem'
      },
      fontFamily: {
        main: 'Fredoka',
        montserrat: 'Montserrat'
      },
      boxShadow: {
        Shadow: '0px -1px 14px 0px rgba(0,0,0,0.25)'
      },
      borderRadius: {
        main: '14px'
      }
    }
  },
  plugins: []
};
