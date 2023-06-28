/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        custom: "250px 1fr",
      },
      height: {
        custom: "calc(100vh - 3.5rem)",
      },
    },
  },
  plugins: [],
};
