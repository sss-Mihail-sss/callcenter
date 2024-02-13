/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./src/**/*.{tsx,css}'],
  purge: {
    enabled: true,
    content: ['./src/**/*.tsx'],
    options: {
      safelist: ['dark'], //specific classes
    },
  },
  theme: {
    extend: {
      colors: {
        purple: {
          50: '#F5ECFE',
          100: '#E8D5FC',
          200: '#DAC0FA',
          300: '#CBA5FC',
          400: '#B881FA',
          500: '#A768FA',
          600: '#994DF9',
          700: '#8C38F6',
          800: '#7F24F1',
          900: '#7614EB',
          950: '#6500E5',
        },
        'blue-gray': {
          50: '#ECEFF1',
          100: '#CFD8DC',
          200: '#B0BEC5',
          300: '#90A4AE',
          400: '#78909C',
          500: '#607D8B',
          600: '#546E7A',
          700: '#455A64',
          800: '#37474F',
          900: '#263238',
        },
        gray: {
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#EEEEEE',
          300: '#E0E0E0',
          400: '#BDBDBD',
          500: '#9E9E9E',
          600: '#757575',
          700: '#616161',
          800: '#424242',
          900: '#212121',
        },
      },
    },
  },
  plugins: [],
};
