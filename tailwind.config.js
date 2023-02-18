/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: 'hsl(25, 97%, 53%)',
        lightGrey: 'hsl(217, 12%, 63%)',
        mediumGrey: 'hsl(216, 12%, 54%)',
        darkBlue: 'hsl(213, 19%, 18%)',
        darkBlueTop: 'hsl(224, 14.7%, 14.7%)',
        darkBlueBottom: 'hsl(218, 13.8%, 11.4%)',
        veryDarkBlue: 'hsl(216, 12%, 8%)',
      },
    },
    fontFamily: {
      overpass: ['var(--font-overpass)'],
    },
  },
  plugins: [],
}
