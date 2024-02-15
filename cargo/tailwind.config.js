/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        h1: "2.5rem",
        h2: "2.25rem",
        h3: "1.5rem",
        h4: "1.25rem",
        h5: "1rem",
        "body-text": "1rem",
        "sub-text": "0.875rem",
        caption: "0.75rem",
      },
    },
    screens: {
      sm: "390px", //  @media (min-width: 390px) { ..mobile }
      md: "960px", //  @media (min-width: 960px) { ..tablet }
      lg: "1440px", //  @media (min-width: 1440px) { ..desktop }
    },
    colors: {
      cyan: "#3CDFFF",
      "cyan-300": "#B1F2FF",
      "cyan-50": "#EBFCFF",
      blue: "#00A7F0",
      "blue-300": "#80D3F7",
      "blue-50": "#E5F6FD",
      lilac: "#B882E9",
      "lilac-500": "#D4B4F2",
      "lilac-50": "#F8F3FD",
      "neutral-main": "#0A090C",
      "neutral-secondary": "#848485",
      "neutral-hint": "#D0D0D0",
      "neutral-line": "#ECECEC",
      "neutral-bg": "#F9F9F9",
      "neutral-white": "#FFFFFF",
      "accent-red": "#FC5C57",
      "accent-yellow": "#FFA631",
      "accent-green": "#3BC38A",
    },
    backgroundImage: {
      "blue-lilac": "linear-gradient(to right, #00A7F0, #B882E9)",
      "cyan-blue": "linear-gradient(to right, #3CDFFF, #00A7F0)",
    },
  },
  plugins: [],
};
