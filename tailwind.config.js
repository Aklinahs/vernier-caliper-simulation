/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        caliper: {
          body: "#2B3440",
          scale: "#4A5568",
          marking: "#CBD5E0",
          hover: "#3B4758",
          active: "#1A202C",
        },
      },
      spacing: {
        scale: {
          marking: "2px",
          gap: "10px",
        },
      },
    },
  },
  plugins: [],
}