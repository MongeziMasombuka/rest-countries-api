module.exports = {
  darkMode:'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './public/index.html'
  ],
  theme: {
    extend: {},
    colors:{
      transparent: 'transparent',
    //(Dark Mode Elements)
      darkblue: 'hsl(209, 23%, 22%)',
    //(Dark Mode Background)
  verydarkblue: 'hsl(207, 26%, 17%)',
//(Light Mode Text)
  'very-dark-blue': 'hsl(200, 15%, 8%)',
//(Light Mode Input)
  darkgray: 'hsl(0, 0%, 52%)',
//(Light Mode Background)
  verylightgray: 'hsl(0, 0%, 98%)',
// (Dark Mode Text & Light Mode Elements)
  white: 'hsl(0, 0%, 100%)',
  },
  },
  plugins: [],
}
