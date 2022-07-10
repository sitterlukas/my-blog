module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        custom: '1.5fr 1fr',
      },
      colors: {
        secondary: '#f3f3f3',
        primary: '#0c0c0c',
        green_primary: '#004c45',
        pink_primary: '#580044',
        orange_primary: '#612700',
        blue_primary: '#004662',
        yellow_primary: '#8b6f00',
        red_primary: '#6f0000',
        framer_primary: '#3d6400',
      },
      height: {
        vhNav: 'calc(100vh - 15rem)',
        vhNavProjects: 'calc(100vh - 5rem)',
      },
    },
  },
  plugins: [],
};
