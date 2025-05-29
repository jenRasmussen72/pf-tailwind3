/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    fontFamily: {
      "oswald": ["'Oswald'", 'sans-serif'],
      "opensans": ["'Open Sans'", 'Helvetica', 'Arial', 'sans-serif'],
      "roboto": ["'Roboto'", 'Helvetica', 'Arial', 'sans-serif'],
      "baskerville": ["'Libre Baskerville'", 'Baskerville', 'Georgia', 'serif'],
      "baskervville": ["'Baskervville'", 'Baskerville', 'Georgia', 'serif']
    },
    screens: {
      'mobile': '640px',
      // => @media (min-width: 640px) { ... }  == eq: default tw3 sm
      'tablet': '768px',
      // => @media (min-width: 768px) { ... }  == eq: default tw3 md
      'laptop': '992px',
      // => @media (min-width: 992px) { ... } != default tw3 lg: 1024px
      'desktop': '1140px',
      // => @media (min-width: 1140px) { ... } != default tw3 xl: 1280px
      'wide': '1400px',
      // => @media (min-width: 1400px) { ... } != default tw3 2xl: 1536px
    },
    container: {
      padding: {
        DEFAULT: '1rem'
      },
    },
    colors: {
      white: '#fff',
      black: '#212121',
      green: '#006400',
      orange: '#ff8c00',
      link: '#fd7a01',
      'link-hover': '#0056b3',
      btn: '#fd7a01',
      'btn-hover': '#fe9433',
      'nav-hover': '#383838',
      lightGray: '#DDD8D6',
      mediumGray: '#646464',
      divider: 'rgba(0, 0, 0, 0.1)',
      'secondary-header': '#444'
    },
    fontSize: {
      'xs': '0.75rem', //12px
      'sm': '0.875rem', //14px
      'base': '1rem', //15px
      'lg': '1.125rem', //18px
      'xl': '1.25rem', //20px
      '2xl': '1.5rem', //24px
      '3xl': '1.875rem', //30px
      '4xl': '2.25rem', //36px
      '5xl': '3rem', //48px
    },
    extend: {
      width: {
        '26': '6.5rem',
      },
      fontSize: {
        base: "15px", // Override default 16px
      },
      spacing: {
        '32': '8rem',
      },
      boxShadow: {
        'accordion': '0 4px 4px -2px rgba(0, 0, 0, 0.5)',
      }
    },
  },
  plugins: [],
}

