/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",       // agar aap app dir use kar rahe ho to
    "./pages/**/*.{js,ts,jsx,tsx}",     // agar pages dir hai to
    "./components/**/*.{js,ts,jsx,tsx}",// components ke liye
    "./src/**/*.{js,ts,jsx,tsx}"        // agar src folder hai to
  ],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ["var(--font-ubuntu)", "sans-serif"],
      },
      colors: {
        background: "#fffaec",
        foreground: "#171717",
      },
    },
  },
  plugins: [],
};
