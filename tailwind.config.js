/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Redhat : ["Redhat","sans"]
      },
      colors:{
        "pale-blue":" hsl(225, 100%, 94%)",
        "desaturated":"hsl(224, 23%, 55%)",
        "dark-blue":"hsl(223, 47%, 23%)",
        "very-pale-blue":"hsl(225, 100%, 98%)",
        "bright-blue":"hsl(245,75%,52%)"
      }
    },
  },
  plugins: [],
}

