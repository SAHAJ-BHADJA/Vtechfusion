/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E6EDF5',
          100: '#CCDAEB',
          200: '#99B5D7',
          300: '#6691C3',
          400: '#336CAF',
          500: '#00479B',
          600: '#003366', // Brand primary
          700: '#002855',
          800: '#001C44',
          900: '#001033',
        },
        secondary: {
          50: '#E6F5F4',
          100: '#CCEBE9',
          200: '#99D7D3',
          300: '#66C2BC',
          400: '#33AEA6',
          500: '#009688', // Brand teal
          600: '#007B70',
          700: '#006058',
          800: '#004640',
          900: '#002B28',
        },
        gray: {
          50: '#F5F5F5', // Brand light gray
          100: '#EBEBEB',
          200: '#D6D6D6',
          300: '#C2C2C2',
          400: '#ADADAD',
          500: '#999999',
          600: '#7A7A7A',
          700: '#5C5C5C',
          800: '#3D3D3D',
          900: '#1F1F1F',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '104': '26rem',
        '120': '30rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-in-out',
        'slide-down': 'slideDown 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};