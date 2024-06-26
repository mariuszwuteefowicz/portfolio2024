/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        slowSpin: 'spin 15s infinite linear'
      },
      colors: {
        bg: '#020916',
        accent: {DEFAULT: '#CEFF7E', 400: '#c2fc5e'}
      },
      fontFamily: {
            'dmsans': ['DM Sans', 'sans-serif']
      },
      maxWidth: {
            'wtf': '82rem'
      },
      borderRadius: {
        'wtf': '0.625rem',
        'wtf-xl': '1.25rem'
      },
      boxShadow: {
        'inner-light': 'inset 0 2px 0 0 rgba(255,255,255,0.15)',
        'inner-light-sm': 'inset 0 1px 0 0 rgba(255,255,255,0.15)'
      }
    },
  },
  plugins: [],
}

