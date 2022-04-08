module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // Tailwind-CartButtonAnimation-OnClick
      animation: {
        'bump': 'bump 0.1s linear infinite',
      },

      // Tailwind-CartButtonAnimation-OnClick
      keyframes: {
        'bump': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.15)' },
        }
      },

      width: {
        '100': '38rem',
        '128': '60rem',
      }
    },
  },
  plugins: [],
}
