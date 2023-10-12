/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        Quicksand : ['Quicksand', 'sans-serif'],
        Poppins : ['Poppins', 'sans-serif'],
        Poppins2 : ['Poppins', 'sans-serif'],
        Nunito : ['Nunito Sans', 'sans-ser'],
        Hind : ['Hind Siliguri', 'sans-serif']

      },
      screens: {
        'sm': '350px',
        // => @media (min-width: 576px) { ... }
  
        'md': '768px',
        // => @media (min-width: 960px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1440px) { ... }

        'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      },
      backgroundColor : {
        
        'custom-color' : 'bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%'
      }
    },
    custom : {
      button: 'px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-700'
    }
    
  },
  plugins: [],
}
