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
      "primary-cyan-1": "#3CDFFF",
      "primary-cyan-2": "#B1F2FF",
      "primary-cyan-3": "#EBFCFF",
      "primary-blue-1": "#00A7F0",
      "primary-blue-2": "#80D3F7",
      "primary-blue-3": "#E5F6FD",
      "secondary-lilac-1": "#3CDFFF",
      "secondary-lilac-2": "#3CDFFF",
      "secondary-lilac-3": "#3CDFFF",
      "neutral-main": "#0A090C",
      "neutral-secondary": "#848485",
      "neutral-hint": "#D0D0D0",
      "neutral-line": "#ECECEC",
      "neutral-background-1": "#F9F9F9",
      "neutral-background-2": "#FFFFFF",
      "accent-error": "#FC5C57",
      "accent-warning": "#FFA631",
      "accent-positive": "#3BC38A",
      "gradient-positive": "#3BC38A",
      "gradient-1-mix-1": "#3CDFFF",
      "gradient-1-mix-2": "#00A7F0",
      "gradient-2-mix-1": "#00A7F0",
      "gradient-2-mix-2": "#3CDFFF",
    },
  },
  plugins: [],
};
