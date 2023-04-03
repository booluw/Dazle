export default {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Be Vietnam Pro', 'serif'],
      },
      colors: {
        primary: '#FB8A5D',
        secondary: '#385DB1',
        'site-purple': '#826DB8',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')]
}