
 /** @type {import('tailwindcss').Config} */
 const config = {
  content: ["./src/**/*.{html,js,jsx,tsx}"], // Ensure that all js and jsx files ion your src folder are Covered
  theme: {
    extend: {
      colors: {
        "--color-primary": "#7b00f1",
        "--color-muted": "#ada5b4",
      },
      animation: {
        spin: "spin 50s infinite linear",
      },
      keyframes: {        
        spin: {
          // "0%": {
          //   transform: "rotate(0deg)",
          // },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;