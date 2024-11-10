module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
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
};