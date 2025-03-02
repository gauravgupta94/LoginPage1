
 /** @type {import('tailwindcss').Config} */
 const config = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "--color-primary": "#7b00f1",
        "--color-muted": "#ada5b4",
      }
    },
  },
  plugins: [],
};

export default config;