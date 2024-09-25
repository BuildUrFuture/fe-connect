/** @type {import('tailwindcss').Config} */

import animate from 'tailwindcss-animated';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        "fe-purple": "#0049B6",
        "fe-pink": "#AF2098"
      }
    },
    fontFamily: {
      'racing': [
        'RacingSansOne', 'sans-serif'
      ],
      'raleway': [
        "Raleway", 'sans-serif'
      ]
    },
    dropShadow: {
      "banner": "0 0px 20px white"
    }
    
  },
  plugins: [
    animate
  ],
}