module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        dark:{
          50 :'#202023',
          100: '#151515',
        }
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}